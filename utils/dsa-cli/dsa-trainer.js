const SettingsManager = require('./settings-manager');
const ProblemsManager = require('./problems-manager');
const { getPromptDict } = require('./prompt');

const Constants = require('./constants');
const { renderPromptDescription } = require('./functions');
const { Toggle } = require('enquirer');

/**
 * @class DSATrainer - Responsible of presenting problems, and interacting with problems managers, settings, and others charts and user data visualization
 */
class DSATrainer {

    constructor() {
        this.settings_manager = new SettingsManager();
        this.problems_manager = new ProblemsManager();

        this.problems_manager.autoPopulateUsingTestDictionary();
        this.user_settings = this.settings_manager.settings;

    }

    /**
     * Populates and opens a random problem, tests it, and returns the status of the problem.
     * @returns {ProblemStatus} The status of the problem
     */
    async openRandomProblem() {
        const problem = this.problems_manager.getRandomProblem();
        const problem_status = this.solveProblem(problem);
        return problem_status;

    }


    /**
     * Solves the problem status
     * @param {ProblemMetaData} problem Information of the problem to solve
     * @param {boolean} tryUntilSolved If true, the problem will be reprompted until it is solved. If false, the problem will be solved once.
     * @returns {ProblemStatus} The status of the problem
     */
    async solveProblem(problem, { tryUntilSolved = true } = {}) {
        this.problems_manager.populateTemplate(problem);


        const prompt_reattempt = new Toggle({
            name: 'stop',
            message: 'Do you want to stop trying to solve this problem?',
            enabled: 'Yes',
            disabled: 'No'
        });

        let did_pass_all_tests = false

        // Try to solve the problem once
        did_pass_all_tests = await this.openAndTest(problem);
        //  If the user wants to try until solved, and the problem is not solved, keep trying until solved

        console.log("Did pass all tests: ", did_pass_all_tests);

        while (!did_pass_all_tests && tryUntilSolved) {

            // Prompt if user wants to stop attempting to solve the problem
            const continue_attempting = await prompt_reattempt.run(problem);
            if (!continue_attempting) {
                return Constants.ProblemStatus.aborted;
            }

            // Try again if failed.
            did_pass_all_tests = await this.openAndTest();
            console.log("Did pass all tests: ", did_pass_all_tests);

        }

        return Constants.ProblemStatus.solved;
    }

    async openAndTest(problem) {
        console.log(
            "Opening problem: ", problem.slug,
        );
        // Print the problem markdown.
        console.log("Raw Prompt", parsed_prompt_dict);
        // console.log("Keys from prompt_dict", Object.keys(prompt_dict));

        const promblem_prompt = parsed_prompt_dict[problem.slug];
        console.log("promblem_prompt", promblem_prompt, "Searching using key: ", problem.slug, "when keys availables are:", Object.keys(parsed_prompt_dict));
        renderPromptDescription(promblem_prompt);

        const editor_instruction = this.user_settings.common_editors[this.user_settings.editor];
        this.problems_manager.openTemporalProblemFile({ editor_instruction: editor_instruction });
        const prompt_run_tests = new Toggle({
            name: 'run_tests',
            message: 'Do you want to run the tests?',
            enabled: 'Yes',
            disabled: 'No'
        });

        const run_test = await prompt_run_tests.run();
        if (!run_test) {
            return false;
        }
        else {
            const did_pass_all_tests = await this.problems_manager.runProblem(problem);
            return did_pass_all_tests;
        }

    }


}



module.exports = DSATrainer;


