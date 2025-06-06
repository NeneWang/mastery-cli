const SettingsManager = require('./settings-manager');
const ProblemsManager = require('./problems-manager');
const StorableReport = require('./StorableReport');


const { getPromptDict } = require('./prompt');

const constants = require('./constants');
const axios = require('axios');
const FormData = require('form-data');

const { renderPromptDescription, get_random, getCurrentDateTimeIso } = require('./functions');
const { Toggle, AutoComplete, Input } = require('enquirer');
const { ProblemMetadata } = require('./structures');
const fs = require('fs');
const Settings = require('../../settings');


const DEBUG = false;

/**
 * @class DSATrainer - Responsible of presenting problems, and interacting with problems managers, settings, and others charts and user data visualization
 */
class DSATrainer {

    /**
     * Creates a new DSATrainer object
     * @param {List} [skip_problems]: List[str] A list of problems to skip (problems slug names)
     */
    constructor({ skip_problems = ["hello-world", "simple-sum"] } = {}) {
        /**
         * @property {SettingsManager} settings_manager - Configurations management such as which code editor to use.
         * @property {ProblemsManager} problems_manager - management of DSA Problems
         * 
         * @property {ProblemsManager} loaded_problem_manager - management of DSA Problems once it finishes loading.
         * @property {Object} user_settings - User settings configured on `settings.json`
         * @property {string[]} skip_problems - A list of problems to skip (problems slug names)
         * 
         * @property {StorableReport} problemReport - A report of the problems solved by the user
         * @property {string[]} order_categories - The order of the categories to be solved
         * 
         * @property {ProblemMetaData[]} first_non_completed_category_non_completed_problems - A list of problems that are not completed yet
         * 
         * @property {ProblemMetaData[]} first_non_only_hard_left_category_non_hard_problems - A list of problems that are not completed yet, and are not hard
         * @property {ProblemMetaData[]} completed_problems_sorted_by_times_completed - A list of problems that are not completed yet, sorted by the number of times they have been completed
         * @property {String} uploadCodeFileUrl - The url to upload the code file
         */
        this.settings_manager = new SettingsManager();
        this.problems_manager = new ProblemsManager({ skip_problems: skip_problems });

        this.loaded_problem_manager = this.problems_manager.autoPopulateUsingTestDictionary();
        this.user_settings = this.settings_manager.settings;
        this.skip_problems = skip_problems;

        this.problemReport = new StorableReport({ filename: 'problem_report' });
        this.order_categories = Object.values(constants.PROBLEM_CATEGORIES).map(category => category.slug);


        this.first_non_completed_category_non_completed_problems = this.getFirstNonCompletedCategoryNonCompletedProblems();
        this.first_non_only_hard_left_category_non_hard_problems = this.getFirstNonOnlyHardLeftCategoryNonHardProblems();
        this.completed_problems_sorted_by_times_completed = this.getCompletedProblemsSortedByTimesCompleted();

        this.uploadCodeFileUrl = `${constants.CONSTANTS.API_URL}/src/upload_file`;
        this.uploadCodeMetadataUrl = `${constants.CONSTANTS.API_URL}/performance/code_file`;
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
     * @returns {ProblemMetaData[]} A list of problems that are not completed yet
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
     * @returns {ProblemMetaData[]} A list of problems that are not completed yet, and are not hard
     */
    getFirstNonOnlyHardLeftCategoryNonHardProblems() {
        for (let category of this.order_categories) {

            const problems = this.problems_manager.getProblemsByCategory(category);



            // Get the non hard problems
            const non_hard_problems = problems.filter(problem => problem.difficulty != constants.difficulty.hard);

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
     * @returns {ProblemMetaData[]} A list of problems that are not completed yet, sorted by the number of times they have been completed
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
        const problem_response = await this.solveProblem(problem);

        problem_response.is_problem_solved = problem_response.problem_status == constants.ProblemStatus.solved;
        return problem_response;
    }

    async openRandomClozeDSAProblem({ md_pseudo_mode = false } = {}) {
        // const _ = await this.problemReport.getReport();
        await this.loaded_problem_manager;
        const selectedClozeProblem = this.problems_manager.getRandomProblemSlugWithCloze();
        // console.log("selectedClozeProblem", selectedClozeProblem);
        // console.log("problem manager problems?", this.problems_manager.problems)
        const problem = this.problems_manager.getProblem(selectedClozeProblem.problem_slug);
        // console.log("problem | problem received", problem);

        // Populate with that problem slug
        // this.problems_manager.copyFileToTemp(selectedClozeProblem.file_path, { base: constants.PATHS.base_cloze });
        problem.is_cloze = true;
        const problem_response = await this.solveProblem(problem,
            { base: constants.PATHS.base_cloze, populate_with_cloze_filepath: selectedClozeProblem.file_path, md_pseudo_mode: md_pseudo_mode });

        problem_response.is_problem_solved = problem_response.problem_status == constants.ProblemStatus.solved;
        return problem_response;
    }


    async postProblemSolution(problem, { attempts_timestamp = [], comments = [], comm = "" } = {}) {
        const absoluteFilePath = this.problems_manager.absolute_problem_file_path;

        const ACCOUNT_ID = Settings.account_id ?? 1;

        const formData = new FormData();
        formData.append('file', fs.createReadStream(absoluteFilePath), {
            filename: `_${ACCOUNT_ID}_${problem.slug}_solution.js`,
            contentType: 'text/javascript', // Set the content type to text/javascript
        });

        axios({
            method: 'post',
            url: this.uploadCodeFileUrl,
            data: formData,
            headers: {
                ...formData.getHeaders(), // Include necessary headers for form data
                'accept': 'application/json',
            },
        })
            .then(response => {
                // Handle the response here
                if (response.status === 200) {
                    const file_url = response.data.location;
                    console.log('File uploaded successfully to ' + file_url);


                    // Now post the metadata into 

                    /** Metadata
                     * {
                        "comments": [
                            "string"
                        ],
                        "code_url": "string",
                        "language": "string",
                        "date": "2023-10-03T17:57:26.591Z",
                        "attempt_counts": 0,
                        "attempt_timestamps": [
                            "2023-10-03T17:57:26.591Z"
                        ],
                        "is_correct": true,
                        "problem_slug": "string",
                        "account_id": 0
                        }
                     */

                    const metadata = {
                        "comments": comments,
                        "code_url": file_url,
                        "language": "javascript",
                        "date": getCurrentDateTimeIso(),
                        "attempt_counts": attempts_timestamp.length,
                        "attempt_timestamps": attempts_timestamp,
                        "is_correct": true,
                        "problem_slug": problem.slug,
                        "account_id": ACCOUNT_ID
                    };


                    // console.log("Posting metadata", metadata,"to url", uploadCodeMetadataUrl)
                    axios({
                        method: 'post',
                        url: this.uploadCodeMetadataUrl,
                        data: metadata,
                        headers: {
                            'accept': 'application/json',
                        },
                    }).then(
                        console.log("Metadata posted successfully", metadata)
                    ).catch(
                        error => {
                            console.log("Error from metadata", error);
                        }

                    );


                } else {
                    console.error('File upload failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });


    }


    /**
     * Updates the problem status, such as interfacing with the problem report and problem attempted (in the future this would create a report of things done.)
     * @param {ProblemMetadata} problem the problem to solve
     * @param {Response<this.openAndTest>} results 
     * @param {Object} statusMetadata reference to object contianing information such as failed attempts, etc that is being updated internally
     */
    updateProblemStatus(problem, results, statusMetadata = {}) {

        // Update internally the amounts of failed attempts
        statusMetadata.failed_attempts = results.details.failed_attempts || 0;
        console.log("Failed attempts", statusMetadata.failed_attempts);
        this.setCurrentProblemAttempts(results.details.failed_attempts);

        // Update the problem report
        if (DEBUG) console.log("problem_details", results.problem_details);
        statusMetadata.problem_details = results.problem_details;

        // Score to increase given this problem
        const scoreGivenDifficulty = {
            [constants.difficulty.easy]: 1,
            [constants.difficulty.medium]: 2,
            [constants.difficulty.hard]: 4
        };

        // Lowercase
        const difficulty_l = problem.difficulty.toLowerCase();
        if (DEBUG) console.log("problem.difficulty being increased", problem.difficulty, difficulty_l, scoreGivenDifficulty[problem.difficulty], scoreGivenDifficulty)

        statusMetadata.score_to_increase = scoreGivenDifficulty[difficulty_l] || 0;

    }

    /**
     * Wraps into continue solving until the problem is solved method
     * @param {ProblemMetaData} problem Information of the problem to solve
     * @param {boolean} tryUntilSolved If true, the problem will be reprompted until it is solved. If false, the problem will be solved once.
     * @returns {ProblemStatus} The status of the problem
     */
    async solveProblem(problem, { tryUntilSolved: try_until_solved = true, store_progress = true,
        populate_problem = true,
        populate_with_cloze_filepath = "", base = "", md_pseudo_mode = false } = {}) {
        if (populate_problem) {
            if (populate_with_cloze_filepath != "") {

                this.problems_manager.populateTemplate(problem, { base: base });
            } else {

                this.problems_manager.populateTemplate(problem);

            }
        }

        let did_pass_all_tests = false
        const statusMetadata = {
            failed_attempts: this.getCurrentProblemAttempts(),
            is_cloze: problem.is_cloze ?? false,
        };

        // Try to solve the problem once.
        let results = await this.openAndTest(problem, { failed_attempts: statusMetadata.failed_attempts, md_pseudo_mode: md_pseudo_mode });
        let status = results.status;
        this.updateProblemStatus(problem, results, statusMetadata);
        statusMetadata.md_pseudo_mode = md_pseudo_mode;



        while (!did_pass_all_tests && try_until_solved) {

            if (status == constants.ProblemStatus.aborted) {
                statusMetadata.status = constants.ProblemStatus.aborted;
                return statusMetadata;
            }

            else if (status == constants.ProblemStatus.solved) {
                this.problemReport.increaseAnswerFor(problem.slug);
                if (DEBUG) { console.log("Times the problem was solved.", this.problemReport.getAnswerFor(problem.slug)); }
                this.cleanCurrentProblem();
                did_pass_all_tests = true;
                statusMetadata.status = constants.ProblemStatus.solved;
                return statusMetadata;
            }

            else if (status == constants.ProblemStatus.unsolved) {
                continue; // Try again
            }

            const results = await this.openAndTest(problem, { failed_attempts: statusMetadata.failed_attempts, md_pseudo_mode: md_pseudo_mode });
            status = results.status;
            this.updateProblemStatus(problem, results, statusMetadata);

        }
    }

    /**
     * 
    * @param {ProblemMetaData} problem 
    * @param {boolean} open_problem_temporal If true, the problem temporal file will be opened
    * @param {boolean} open_solution If true, the solution file will be opened
    * @param {boolean} open_basecode If true, the basecode file will be opened
    * @param {boolean} open_markdown If true, the markdown file will be opened
    * @param {boolean} open_test_cases If true, the test cases file will be opened
    * @returns {Promise} A promise that resolves when the problem is opened
     */
    async openProblemMetadataInTerminal(problem, { copy_to_clipboard = true, open_problem_temporal = true,
        open_solution = false, open_basecode = false, open_markdown = false, open_test_cases = false, md_pseudo_mode = false } = {}) {

        let problem_extension = ''

        let problem_details = this.problems_manager.getProblem(problem.slug);
        /**
            slug: 'character-replacement',
            file_path: 'character-replacement.js',  test_slug: 'character-replacement',
            name: 'Character Replacement',
            description: 'Longest Repeating Character Replacement',  
            difficulty: 'medium',
            tags: [ 'neetcode', 'medium', 'sliding-window' ],        
            absolute_solution_path: 'C:\\github\\testing\\mastery-cli\\utils\\dsa-cli\\solutions\\character-replacement.js'        
            }
        */

        let promblem_prompt = await getPromptDict(problem.slug);



        if (DEBUG) console.log("Problem prompt selected: ", promblem_prompt, "for problem", problem, "cloze?", problem.is_cloze);
        renderPromptDescription(promblem_prompt, problem_details, { is_cloze: problem.is_cloze ?? false });

        const editor_instruction = this.user_settings.common_editors[this.user_settings.editor];

        if (copy_to_clipboard) {
            // Copy base problem 
            const _ = await this.problems_manager.copyTempToClipboard();
            const copyResults = this.problems_manager.copySolutionToSol(problem.slug);
            problem_extension = copyResults?.["problem_extension"] ?? '.js';

        }

        if (open_problem_temporal) {
            if (md_pseudo_mode) {
                const _ = await this.problems_manager.openTemporalProblemFile({ editor_instruction: editor_instruction, force_extension: '.md' });

            }
            else if (problem_extension != "") {
                const _ = await this.problems_manager.openTemporalProblemFile({ editor_instruction: editor_instruction, force_extension: problem_extension });
            }
            else {
                const _ = await this.problems_manager.openTemporalProblemFile({ editor_instruction: editor_instruction });
            }

        }


        if (open_solution) {
            if (copy_to_clipboard) {
                this.problems_manager.openTemporalSolutionFile({ editor_instruction: editor_instruction, extension: problem_extension });
            } else {
                const _ = await this.problems_manager.openSolutionFile(problem.slug, { editor_instruction: editor_instruction });
            }
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
     * @returns {constants.ProblemStatus} The status of the problem (aborted | solved | unsolved)
     */
    async openAndTest(problem, { failed_attempts = 0, attempts_timestamp = [], comments = [], hintsGiven = [], copyProblemToTempInstead = true, md_pseudo_mode = false, store_to_stash = true } = {}) {
        if (DEBUG) console.log(
            "Opening problem: ", problem.slug,
        );
        let problem_details = this.problems_manager.getProblem(problem.slug);
        await this.openProblemMetadataInTerminal(problem, {
            md_pseudo_mode: md_pseudo_mode
        });

        // }

        const stash_current_temp = (res) => {
            let extension = 'md';
            // get the extension of the problem file
            if (res.problem_details.file_path) {
                extension = res.problem_details.file_path.split('.').pop();
            }

            // stashfilename as `slug-{current datetime}.{extension}` 
            let stash_file_name = `${res.problem_details.slug}-${getCurrentDateTimeIso()}`;
            this.problems_manager.copyTempToStash(
                { stash_file_name: stash_file_name });
            res.problem_details.stash_file_name = stash_file_name;
        }

        let hints = problem
        let question_state_flag = true;
        let did_pass_all_tests_before = false;

        let cloze_problem_list = this.problems_manager.getProblemClozes(problem.slug);
        const choices = {

            "modify - Open Code Editor": async () => {
                question_state_flag = true;
                await this.openProblemMetadataInTerminal(problem, { open_problem_temporal: true, md_pseudo_mode: md_pseudo_mode }); //By default opens the temrporal probelm file

            },
            "force approval ": async () => {
                question_state_flag = false;
                // Approve the solution
                console.log("Approving solution");
                const res = {
                    status: constants.ProblemStatus.solved,
                    details: {
                        failed_attempts: failed_attempts
                    },
                    problem_details: problem_details,
                    is_pseudocode: true,
                };
                stash_current_temp(res);

                return res;
            },
            "pass - Re enqueue at the end": async () => {
                // same as quit. just renaming.
                question_state_flag = false;
                return { status: constants.ProblemStatus.aborted, problem_details: problem_details, details: { failed_attempts: failed_attempts } };
            },

            "hint": async () => {
                // TO Complete
                let hintsMssage = "No hints available";
                if (hintsGiven.length < problem.hints.length) {
                    hintsMssage = problem.hints[hintsGiven.length];
                    hintsGiven.push(hintsMssage);
                }
                question_state_flag = true;


            },
            "copy Link - Original Leetcode/available repository link": async () => {
                question_state_flag = true;
                // console.log(problem_details)
                console.log("Copy Link: ", problem_details?.link ?? "");

            }
            ,
            "solution - reveal/edit solution": async () => {
                question_state_flag = true;
                this.openProblemMetadataInTerminal(problem, { open_problem_temporal: false, open_solution: true });

                // return constants.ProblemStatus.unsolved;
            },
            "reset to base template": async () => {
                question_state_flag = true;
                // Repopulates the 
                // this.problems_manager.repopulateCode(problem.slug);
                this.problems_manager.populateTemplate(problem);
                // return constants.ProblemStatus.unsolved;
            },

            'quit': async () => {
                question_state_flag = false;
                return { status: constants.ProblemStatus.aborted, problem_details: problem_details, details: { failed_attempts: failed_attempts } };
            }

        }

        const choices_dev_mode = {
            "base - reveal/edit base template ": async () => {
                // Open the problem's base

                question_state_flag = true;
                this.openProblemMetadataInTerminal(problem, { open_problem_temporal: false, open_basecode: true });
            },
            "markdown - reveal/edit markdown prompt": async () => {
                // Open the problem's base

                question_state_flag = true;
                this.openProblemMetadataInTerminal(problem, { open_problem_temporal: false, open_markdown: true });
            },
            // "Open test cases": async () => {
            //     question_state_flag = true;
            //     this.openProblemMetadataInTerminal(problem, { open_problem_temporal: false, open_test_cases: true });
            // }
        }



        if (constants.DEV_MODE) Object.assign(choices, choices_dev_mode); // Add dev mode choices
        if (!md_pseudo_mode) {
            Object.assign(choices, {


                'execute test cases - Only works for JS problems': async () => {
                    try {
                        // Sometimes errors can occur.
                        const did_pass_all_tests = await this.problems_manager.runProblem(problem);
                        if (did_pass_all_tests) {
                            did_pass_all_tests_before = true;

                        } else {
                            failed_attempts += 1;
                            attempts_timestamp.push(getCurrentDateTimeIso());
                        }
                        return { status: constants.ProblemStatus.unsolved, problem_details: problem_details, details: { failed_attempts: failed_attempts } };
                    }
                    catch (e) {
                        console.log("Error running tests: ", e);
                        return false;
                    }
                },
            });
        }
        if (cloze_problem_list.length > 0) {

            Object.assign(choices, {
                cloze: async () => {
                    // Choose a random cloze problem to be solved
                    question_state_flag = true;
                    console.log("Populating the base prompt with a cloze problem");
                    const cloze_problems = cloze_problem_list;
                    // console.log("DEBUG | Cloze problems: ", cloze_problems);
                    if (cloze_problems.length == 0) {
                        console.log("No cloze problems found for this problem");
                        return
                    }

                    const selected_cloze_problem = get_random(cloze_problems);
                    // console.log("DEBUG | Selected cloze problem: ", selected_cloze_problem);
                    this.problems_manager.copyFileToTemp(selected_cloze_problem.file_path, { base: constants.PATHS.base_cloze });
                    console.log(" ==> CLOZE PROBLEM HAS BEEN COPIED TO  CURRENT PROBLEM <==");
                    // Open using modify to update the version
                    await this.openProblemMetadataInTerminal(problem, { open_problem_temporal: true });


                },
            });
        }

        let res = constants.ProblemStatus.unsolved;

        const selectable_choices_prompt = {};
        // Remove Submit, if test never passed before
        if (did_pass_all_tests_before || md_pseudo_mode) {

            Object.assign(selectable_choices_prompt, {
                'Submit': async () => {
                    if(md_pseudo_mode){
                        console.log("Storing in stash");
                    }
                    if (!did_pass_all_tests_before) {
                        console.log("You must pass all tests before submitting!");
                        // return false;
                        this.postProblemSolution(problem, { attempts_timestamp: attempts_timestamp, comments: comments });

                    } else {
                        console.log("Submission running", constants.ProblemStatus.solved);
                        question_state_flag = false;

                        return { status: constants.ProblemStatus.solved, details: { failed_attempts: failed_attempts }, problem_details: problem_details };

                    }
                }
            })

            Object.assign(selectable_choices_prompt, choices)
            // New prompt has to 
            let selectable_choices = Object.keys(selectable_choices_prompt);

            const prommpt_problem_menu = new AutoComplete({
                name: 'problem_menu',
                message: `Select action:`,
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

    setCurrentProblemAttempts(attempts) {
        this.problemReport.setAnswerFor("current_problem_attempts", attempts);
    }

    getCurrentProblemAttempts() {
        return this.problemReport.getAnswerFor("current_problem_attempts");

    }

    cleanCurrentProblem() {
        this.problemReport.setAnswerFor("current_problem", 0);
        this.problemReport.setAnswerFor("current_problem_attempts", 0);
    }


    /**
     * Renders a menu of recommended problems, and allows the user to select a problem to solve
     */
    async showRecommendedProblems({ md_pseudo_mode = false } = {}) {

        const recommended_problems = await this.getRecommendedProblems();
        const problem_slugs = recommended_problems.map(problem => problem.slug);

        return await this.showMenuOfProblems({
            allow_continue_last: true, show_progress: true,
            show_tags: true, show_specific_problems: problem_slugs, md_pseudo_mode: md_pseudo_mode
        });

    }

    /**
     * Renders a menu of problems, and allows the user to select a problem to solve
     * @param {boolean} allow_continue_last If true, the user will be allowed to continue the last problem solved. If false, the user will be forced to select a new problem.
     * @param {boolean} showProgress If true, the user will be shown the progress of the problems solved as ** attached to the problem. If false, the user will not be shown the progress.
     * @param {list[str]} show_specific_problems List of slugs of problems to show. If empty, all problems will be shown.
     * @returns 
     */
    async showMenuOfProblems({ allow_continue_last = true, show_progress = true, show_tags = true, show_specific_problems = [], md_pseudo_mode = false } = {}) {
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

        // const is_new_problem = problem_selected != current_problem_prompt;
        const is_new_problem = true;
        const problem_response = await this.solveProblem(problem, { populate_problem: is_new_problem, md_pseudo_mode: md_pseudo_mode });

        problem_response.is_problem_solved = problem_response.status == constants.ProblemStatus.solved;
        return problem_response;
    }


}



module.exports = DSATrainer;


