const SettingsManager = require('./settings-manager');
const ProblemsManager = require('./problems-manager');
const StorableReport = require('./StorableReport');


const { getPromptDict } = require('./prompt');

const Constants = require('./constants');
const { renderPromptDescription } = require('./functions');
const { Toggle, AutoComplete } = require('enquirer');

const DEBUG = false;

/**
 * @class DSATrainer - Responsible of presenting problems, and interacting with problems managers, settings, and others charts and user data visualization
 */
class DSATrainer {

    /**
     * Creates a new DSATrainer object
     * @param {List[str]} skip_problems A list of problems to skip (problems slug names)
     */
    constructor({ skip_problems = ["hello-world", "simple-sum"] } = {}) {
        this.settings_manager = new SettingsManager();
        this.problems_manager = new ProblemsManager({ skip_problems: skip_problems });

        this.loaded_problem_manager = this.problems_manager.autoPopulateUsingTestDictionary();
        this.user_settings = this.settings_manager.settings;
        this.skip_problems = skip_problems;

        this.problemReport = new StorableReport({ filename: 'problem_report' });
        this.order_categories = Object.values(Constants.PROBLEM_CATEGORIES).map(category => category.slug);


        this.first_non_completed_category_non_completed_problems = this.getFirstNonCompletedCategoryNonCompletedProblems();
        this.first_non_only_hard_left_category_non_hard_problems = this.getFirstNonOnlyHardLeftCategoryNonHardProblems();
        this.completed_problems_sorted_by_times_completed = this.getCompletedProblemsSortedByTimesCompleted();
    }

    /**
     * Populates the recommendation queues
     * @returns {void}
     * Call this when problmeManager had been populated
     */
    populateRecommendationQueues() {
        this.first_non_completed_category_non_completed_problems = this.getFirstNonCompletedCategoryNonCompletedProblems();
        this.first_non_only_hard_left_category_non_hard_problems = this.getFirstNonOnlyHardLeftCategoryNonHardProblems();
        this.completed_problems_sorted_by_times_completed = this.getCompletedProblemsSortedByTimesCompleted();
    }


    /**
     * Gets the list of recommended problems to solve
     * @param {int} non_completed The number of non completed problems to get
     * @param {int} non_hard The number of non hard problems to get
     * @param {int} completed_practice The number of completed problems to get
     * @param {bool} refresh_recommendation_queues Whether to refresh the recommendation queues or not
     * 
     * @returns {List[ProblemMetaData]} A list of recommended problems
     */
    async getRecommendedProblems({ non_completed = 2, non_hard = 1, completed_practice = 2, refresh_recommendation_queues = true } = {}) {
        const recommended_problems = [];

        // Load the problems_manager problems
        // await this.problems_manager.loadProblems();
        await this.loaded_problem_manager;

        if (refresh_recommendation_queues) {
            this.populateRecommendationQueues();
        }

        // Gets the first two problems from first_non_completed_category_non_completed_problems
        recommended_problems.push(...this.first_non_completed_category_non_completed_problems.slice(0, non_completed));


        // Add 1 problem from first_non_only_hard_left_category_non_hard_problems
        recommended_problems.push(...this.first_non_only_hard_left_category_non_hard_problems.slice(0, non_hard));

        // Add 2 problem from completed_problems_sorted_by_times_completed
        recommended_problems.push(...this.completed_problems_sorted_by_times_completed.slice(0, completed_practice));

        return recommended_problems;

    }


    /**
     * Gets a list of problems that are not completed yet 
     * !note that the the this wont work if problem_manager is not loaded
     * @returns {List[ProblemMetaData]} A list of problems that are not completed yet
     */
    getFirstNonCompletedCategoryNonCompletedProblems() {


        for (let i = 0; i < this.order_categories.length; i++) {

            const category = this.order_categories[i];
            const problems = this.problems_manager.getProblemsByCategory(category);

            const non_completed_problems = problems.filter(problem => !this.problemReport.isProblemCompleted(problem.slug));

            if (non_completed_problems.length > 0) {
                return non_completed_problems;
            }
            // Otherwise skip to the next category
        }
        return [];
    }


    /**
     * 
     * @returns {List[ProblemMetaData]} A list of problems that are not completed yet, and are not hard
     */
    getFirstNonOnlyHardLeftCategoryNonHardProblems() {
        for (let category of this.order_categories) {

            const problems = this.problems_manager.getProblemsByCategory(category);



            // Get the non hard problems
            const non_hard_problems = problems.filter(problem => problem.difficulty != Constants.difficulty.hard);

            // Also check that the non hard problems are not completed
            const non_completed_non_hard_problems = non_hard_problems.filter(problem => !this.problemReport.isProblemCompleted(problem.slug));

            // If there are non completed non hard problems, return them
            if (non_completed_non_hard_problems.length > 0) {
                return non_completed_non_hard_problems;
            }
            // Otherwise skip to the next category
        }
        return [];
    }

    /**
     * 
     * @returns {List[ProblemMetaData]} A list of problems that are not completed yet, sorted by the number of times they have been completed
     */
    getCompletedProblemsSortedByTimesCompleted() {
        const completed_problems = this.problems_manager.getProblems().filter(problem => this.problemReport.isProblemCompleted(problem.slug));
        const sorted_problems = completed_problems.sort((a, b) => this.problemReport.getAnswerFor(a.slug) - this.problemReport.getAnswerFor(b.slug));
        return sorted_problems;
    }

    /**
     * Populates and opens a random problem, tests it, and returns the status of the problem.
     * @returns {ProblemStatus} The status of the problem
     */
    async openRandomProblem() {
        const problem = this.problems_manager.getRandomProblem();
        const problem_status = await this.solveProblem(problem);

        return problem_status == Constants.ProblemStatus.solved;
    }


    /**
     * Wraps into continue solving until the problem is solved method
     * @param {ProblemMetaData} problem Information of the problem to solve
     * @param {boolean} tryUntilSolved If true, the problem will be reprompted until it is solved. If false, the problem will be solved once.
     * @returns {ProblemStatus} The status of the problem
     */
    async solveProblem(problem, { tryUntilSolved: try_until_solved = true, store_progress = true, populate_problem = true } = {}) {
        if (populate_problem) {
            this.problems_manager.populateTemplate(problem);
        }

        let did_pass_all_tests = false

        // Try to solve the problem once
        let status = await this.openAndTest(problem);

        while (!did_pass_all_tests && try_until_solved) {

            if (status == Constants.ProblemStatus.aborted) {
                return Constants.ProblemStatus.aborted;
            }

            else if (status == Constants.ProblemStatus.solved) {
                this.problemReport.increaseAnswerFor(problem.slug);
                if (DEBUG) { console.log("Times the problem was solved.", this.problemReport.getAnswerFor(problem.slug)); }
                this.cleanCurrentProblem();
                did_pass_all_tests = true;
                return Constants.ProblemStatus.solved;
            }

            else if (status == Constants.ProblemStatus.unsolved) {
                continue; // Try again
            }

            status = await this.openAndTest(problem);

        }
    }

    /**
     * 
     * @param {ProblemMetaData} problem 
     * @param {boolean} open_problem_temporal If true, the problem temporal file will be opened
     * @param {boolean} open_solution If true, the solution file will be opened
    *  @param {boolean} open_basecode If true, the basecode file will be opened
    * @param {boolean} open_markdown If true, the markdown file will be opened
    * @param {boolean} open_test_cases If true, the test cases file will be opened
    * @returns {Promise} A promise that resolves when the problem is opened
     */
    async openProblemMetadataInTerminal(problem, { open_problem_temporal = true, open_solution = false, open_basecode = false, open_markdown = false, open_test_cases = false } = {}) {
        const promblem_prompt = await getPromptDict(problem.slug);
        if (true) console.log("Problem prompt selected: ", promblem_prompt);
        renderPromptDescription(promblem_prompt);

        const editor_instruction = this.user_settings.common_editors[this.user_settings.editor];
        if (open_problem_temporal) {
            const _ = await this.problems_manager.openTemporalProblemFile({ editor_instruction: editor_instruction });
        }

        if (open_solution) {
            const _ = await this.problems_manager.openSolutionFile(problem.slug, { editor_instruction: editor_instruction });
        }
        if (open_basecode) {
            const _ = await this.problems_manager.openBaseCodeFile(problem.slug, { editor_instruction: editor_instruction });
        }
        if (open_markdown) {
            const _ = await this.problems_manager.openPromptMarkdownFile(problem.slug, { editor_instruction: editor_instruction });
        }

        if (open_test_cases) {
            const _ = await this.problems_manager.openTestCaseFile(problem.slug, { editor_instruction: editor_instruction })
        }

    }


    /**
     * Opens and tests prints a menu where user can choose to test, or other operations, returns once the user is finished with the problem or aborts
     * @param {ProblemMetadata} problem The problem to open and test
     * @returns {Constants.ProblemStatus} The status of the problem (aborted | solved | unsolved)
     */
    async openAndTest(problem) {
        console.log(
            "Opening problem: ", problem.slug,
        );
        // Print the problem markdown.

        // console.log("Keys from prompt_dict", Object.keys(prompt_dict));

        await this.openProblemMetadataInTerminal(problem);

        let question_state_flag = true;
        let did_pass_all_tests_before = false;
        const choices = {
            'Run Tests': async () => {
                try {
                    // Sometimes errors can occur.
                    const did_pass_all_tests = await this.problems_manager.runProblem(problem);
                    if (did_pass_all_tests) {
                        did_pass_all_tests_before = true;

                    }
                    return Constants.ProblemStatus.unsolved;
                }
                catch (e) {
                    console.log("Error running tests: ", e);
                    return false;
                }
            },
            "Hint": async () => {
                // TO Complete
                question_state_flag = true;
                console.log("hint after state flag", question_state_flag);
                console.log("Hint: ", "Use the problem of friendship");

            },
            "Modify": async () => {
                question_state_flag = true;
                await this.openProblemMetadataInTerminal(problem, { open_problem_temporal: true }); //By default opens the temrporal probelm file
            },
            "Show solution": async () => {
                question_state_flag = true;
                this.openProblemMetadataInTerminal(problem, { open_problem_temporal: false, open_solution: true });

                // return Constants.ProblemStatus.unsolved;
            },

            'Exit': async () => {
                question_state_flag = false;
                return Constants.ProblemStatus.aborted;
            }

        }

        const choices_dev_mode = {
            "Edit BaseJS": async () => {
                // Open the problem's base

                question_state_flag = true;
                this.openProblemMetadataInTerminal(problem, { open_problem_temporal: false, open_basecode: true });
            },
            "Edit Markdown prompt": async () => {
                // Open the problem's base

                question_state_flag = true;
                this.openProblemMetadataInTerminal(problem, { open_problem_temporal: false, open_markdown: true });
            },
            "Open test cases": async () => {
                question_state_flag = true;
                this.openProblemMetadataInTerminal(problem, { open_problem_temporal: false, open_test_cases: true });
            }
        }

        if (Constants.DEV_MODE) Object.assign(choices, choices_dev_mode); // Add dev mode choices

        let res = Constants.ProblemStatus.unsolved;
        while (question_state_flag) {

            const selectable_choices_prompt = {};
            // Remove Submit, if test never passed before
            if (did_pass_all_tests_before) {

                Object.assign(selectable_choices_prompt, {
                    'Submit': async () => {
                        if (!did_pass_all_tests_before) {
                            console.log("You must pass all tests before submitting!");
                            // return false;

                        } else {
                            console.log("Submission running", Constants.ProblemStatus.solved);
                            question_state_flag = false;
                            return Constants.ProblemStatus.solved;

                        }
                    }
                })
            }

            Object.assign(selectable_choices_prompt, choices)
            // New prompt has to 
            let selectable_choices = Object.keys(selectable_choices_prompt);

            const prommpt_problem_menu = new AutoComplete({
                name: 'problem_menu',
                message: 'What do you want to do?',
                choices: selectable_choices,
            });
            const choice_selected = await prommpt_problem_menu.run();
            res = await selectable_choices_prompt[choice_selected](); //Run the selected choice.
        }
        return res;
    }

    setCurrentProblem(problem_slug) {
        this.problemReport.setAnswerFor("current_problem", problem_slug);
    }

    getCurrentProblem() {
        return this.problemReport.getAnswerFor("current_problem");
    }

    cleanCurrentProblem() {
        this.problemReport.setAnswerFor("current_problem", 0);
    }


    /**
     * Renders a menu of recommended problems, and allows the user to select a problem to solve
     */
    async showRecommendedProblems() {

        const recommended_problems = await this.getRecommendedProblems();
        const problem_slugs = recommended_problems.map(problem => problem.slug);

        return await this.showMenuOfProblems({ allow_continue_last: true, show_progress: true, show_tags: true, show_specific_problems: problem_slugs });

    }

    /**
     * Renders a menu of problems, and allows the user to select a problem to solve
     * @param {boolean} allow_continue_last If true, the user will be allowed to continue the last problem solved. If false, the user will be forced to select a new problem.
     * @param {boolean} showProgress If true, the user will be shown the progress of the problems solved as ** attached to the problem. If false, the user will not be shown the progress.
     * @param {list[str]} show_specific_problems List of slugs of problems to show. If empty, all problems will be shown.
     * @returns 
     */
    async showMenuOfProblems({ allow_continue_last = true, show_progress = true, show_tags = true, show_specific_problems = [] } = {}) {
        const _ = await this.problemReport.getReport();
        /**
         * 
         * @param {list[str]} problemsSlugs List of slugs
         * @param {boolean} show_progress If true, the user will be shown the progress of the problems solved as ** attached to the problem. If false, the user will not be shown the progress.
         * @param {boolean} show_tags If true, the user will be shown the tags of the problems solved as ** attached to the problem. If false, the user will not be shown the tags.
         * OPTIONAL
         * @param {int} max_stars Maximum number of stars to show
         * @returns 
         */
        const createFormattedProblemMap = (problemsSlugs, { show_progress = true, max_stars = 5, show_tags = true }) => {
            const formattedProblems = {};
            for (const problemSlug of problemsSlugs) {
                let new_name = problemSlug
                if (show_progress) {
                    // Get the number of times the problem has been answered or the max number of stars, whichever is smallest
                    const times_answered = Math.min(this.problemReport.getAnswerFor(problemSlug), max_stars);
                    // console.log("Times answered: ", times_answered, "type", typeof times_answered)
                    const stars = times_answered > 0 ? "*".repeat(times_answered) : " [!] ";

                    new_name += stars;
                }

                if (show_tags) {
                    const tags = this.problems_manager.getTagsForProblem(problemSlug);
                    if (tags.length > 0) {
                        new_name += " (" + tags.join(", ") + ")";
                    }
                }
                formattedProblems[new_name] = problemSlug;
            }

            return formattedProblems; //Map of problem slug to formatted problem
        }

        // console.log("Loading problems...", this.loaded_problem_manager);
        await this.loaded_problem_manager;

        // Show specific problems, or show all problems
        const problems_to_show_slugs = show_specific_problems.length > 0 ? show_specific_problems : this.problems_manager.problemSlugs;
        const formattedProblems = createFormattedProblemMap(problems_to_show_slugs, { show_progress: show_progress, show_tags: show_tags });
        const current_problem_prompt = "Continue last problem";


        // So by default the first on on the list will be selected
        const choices = [];
        if (this.getCurrentProblem() != 0) {
            choices.push(current_problem_prompt)
        }
        choices.push(...Object.keys(formattedProblems));

        const prompt = new AutoComplete({
            name: 'problem',
            message: 'Select a problem',
            choices: choices,
            initial: current_problem_prompt in formattedProblems ? current_problem_prompt : 0
        });


        const problem_selected = await prompt.run();


        const getProblem = (choice_selected) => {
            if (choice_selected == current_problem_prompt) {
                return this.problems_manager.getProblem(this.getCurrentProblem());
            }
            const problem_slug = formattedProblems[problem_selected];
            const problem = this.problems_manager.getProblem(problem_slug);
            this.setCurrentProblem(problem_slug);
            return problem;

        }

        // return await this.openAndTest(problem);

        const problem = getProblem(problem_selected);
        const is_new_problem = problem_selected != current_problem_prompt;
        const problem_status = await this.solveProblem(problem, { populate_problem: is_new_problem });

        // console.log("Problem status resolved with: ", problem_status, Constants.ProblemStatus.solved == problem_status);
        return problem_status == Constants.ProblemStatus.solved;
    }


}



module.exports = DSATrainer;


