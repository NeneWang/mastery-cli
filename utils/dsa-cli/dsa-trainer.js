const { SettingsManager } = require('./settings-manager');
const { ProblemsManager } = require('./problems-manager');
const { Constants } = require('./constants');
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
        const prompt = new Toggle({
            name: 'stop',
            message: 'Do you want to stop trying to solve this problem?',
            enabled: 'Yes',
            disabled: 'No'
        });

        let did_pass_all_tests = false

        // Try to solve the problem once
        did_pass_all_tests = await this.openAndTest(problem);
        //  If the user wants to try until solved, and the problem is not solved, keep trying until solved
        while (did_pass_all_tests && tryUntilSolved) {

            // Prompt if user wants to stop attempting to solve the problem
            const continue_attempting = await prompt.run();
            if (!continue_attempting) {
                return Constants.ProblemStatus.aborted;
            }

            // Try again if failed.
            did_pass_all_tests = await this.openAndTest(problem);

        }

        return Constants.ProblemStatus.solved;



    }

    async openAndTest(problems_manager, problem) {

        await this.problems_manager.openTemporalProblemFile();
        const result = this.problems_manager.runProblem(problem);
        return result;
    }





}



module.exports = DSATrainer;


