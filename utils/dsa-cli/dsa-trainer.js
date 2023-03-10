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


    }

    /**
     * Populates and opens a random problem, tests it, and returns the status of the problem.
     * @returns {ProblemStatus} The status of the problem
     */
    async openRandomProblem() {
        const problem = this.problems_manager.getRandomProblem();
        const problem_status = await this.solveProblem(problem);
        // TODO Make appropriate adjustement with the status

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
                console.log("Times the problem was solved.", this.problemReport.getAnswerFor(problem.slug));
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
    async openProblem(problem, { open_solution = false } = {}) {
        const promblem_prompt = await getPromptDict(problem.slug);
        if (true) console.log("Problem prompt selected: ", promblem_prompt);
        renderPromptDescription(promblem_prompt);

        const editor_instruction = this.user_settings.common_editors[this.user_settings.editor];
        if (!open_solution) { const _ = await this.problems_manager.openTemporalProblemFile({ editor_instruction: editor_instruction }); }
        else if(open_solution){
            const _ = await this.problems_manager.openSolutionFile(problem.slug, { editor_instruction: editor_instruction });
        }
    }


    async openAndTest(problem) {
        console.log(
            "Opening problem: ", problem.slug,
        );
        // Print the problem markdown.

        // console.log("Keys from prompt_dict", Object.keys(prompt_dict));

        await this.openProblem(problem);

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
                await this.openProblem(problem);
            },
            "Show solution": async () => {
                question_state_flag = true;
                this.openProblem(problem, { open_solution: true });

                // return Constants.ProblemStatus.unsolved;
            },

            'Exit': async () => {
                question_state_flag = false;
                return Constants.ProblemStatus.aborted;
            }

        }


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
     * Renders a menu of problems, and allows the user to select a problem to solve
     * @param {boolean} allow_continue_last If true, the user will be allowed to continue the last problem solved. If false, the user will be forced to select a new problem.
     * @param {boolean} showProgress If true, the user will be shown the progress of the problems solved as ** attached to the problem. If false, the user will not be shown the progress.
     * @returns 
     */
    async showMenuOfProblems({ allow_continue_last = true, show_progress = true, show_tags = true } = {}) {
        const _ = await this.problemReport.getReport();
        /**
         * 
         * @param {list[str]} problemsSlugs List of slugs
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
                    // TODO
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



        const formattedProblems = createFormattedProblemMap(this.problems_manager.problemSlugs, { show_progress: show_progress, show_tags: show_tags });
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
        // TODO Make appropriate adjustement with the status

        return problem_status == Constants.ProblemStatus.solved;
    }


}



module.exports = DSATrainer;


