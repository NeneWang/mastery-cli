const fs = require('fs');
const { getDirAbsoluteUri } = require('./functions');
const { TEST_DICTIONARY } = require('./tests');
const { ProblemMetadata } = require('./structures');
const { exec } = require('node:child_process');

const DEBUG = false;

class ProblemsManager {
    constructor({ skip_problems = [] } = {}) {
        this.problems = {};
        this.skip_problems = skip_problems;
        this.temp_problem_filepath = './user_files/temp_problem.js';
        this.temp_test_filepath = './temp_tests.js';
    }


    get problemSlugs(){
        return Object.keys(this.problems);
    }

    getProblem(problemSlug){
        return this.problems[problemSlug];
    }

    /**
     * Adds problem into the dictionary of problems.
     * @param {ProblemMetadata} problemMetadata Object containing the information aboutthe problem.
     */
    addProblem(problemMetadata) {
        this.problems[problemMetadata.slug] = problemMetadata;
    }


    /**
     * Populates the problems manager with the problems from the TEST_DICTIONARY.
     */
    autoPopulateUsingTestDictionary() {
        for (let problem of Object.keys(TEST_DICTIONARY)) {
            this.addProblem(new ProblemMetadata(problem));
        }
    }

    /**
     * Returns a random problem from the problems manager.
     * @returns {Problem} A random problem from the problems manager
     */
    getRandomProblem() {
        let keys = Object.keys(this.problems);
        // Filter the porblems that are in the skip_problems list
        keys = keys.filter((key) => !this.skip_problems.includes(key));

        const randomKey = keys[Math.floor(Math.random() * keys.length)];

        return this.problems[randomKey];
    }

    /**
     * Populates the template with the code inside of problem.file_path
     * @param {dict<problem>} problem The problem to populate the template with
     */
    populateTemplate(problem) {
        this.copyFile(problem.file_path);
    }

    /**
     * Returns the right depending on the problem_metadata
     * @param {dict<ProblemMetadata>} problem_metadata 
     * @returns {ProblemTests}
     */
    selectTest(problem_metadata) {
        return TEST_DICTIONARY[problem_metadata.test_slug];
    }

    /**
     * Runs the tests for the problem and returns if all tests are passed.
     * @param {ProblemMetadata} problemMetadata The information of the problem. 
     * @returns {boolean}
     */
    async runProblem(problemMetadata) {
        if (DEBUG) console.log("Getting temp_file_path from ", this.temp_problem_filepath);
        const { Problem } = require(this.temp_problem_filepath);

        if (DEBUG) console.log("metadata", problemMetadata.asJson);

        // const { ProblemTests } = require(this.temp_test_filepath);
        const ProblemTestsObject = this.selectTest(problemMetadata);
        // debug problemTestObject instance
        if (true) console.log("ProblemTestsObject instance: ", ProblemTestsObject);
        const problemTests = new ProblemTestsObject(Problem);
        const is_correct = problemTests.runTests(); // debug is_correct
        return is_correct;


    }

    /**
     * Copies the file from problem_file_path to the temp_problem_filepath.
     * @param {str} problem_file_path The path to the file to copy
     */
    copyFile(problem_file_path) {
        try {
            
            const absolute_problem_file_path = getDirAbsoluteUri(problem_file_path, "./base_code/");
            const absolute_temp_file_path = getDirAbsoluteUri(this.temp_problem_filepath, "./");

            
            // console.log("Opening file: " + absolute_problem_file_path, "from source,", problem_file_path);
            fs.readFile(absolute_problem_file_path, 'utf8', function (err, data) {
                if (err) {

                    console.log(err)
                    return false
                }

                fs.writeFile(absolute_temp_file_path, data, 'utf8', function (err) {
                    if (err) {
                        console.log(err)
                        return false
                    };

                });
            });
            return true;
        } catch (err) {
            console.error(err);
            return false;

        }
    }


    /**
     * Opens the temporal problem file in the editor (Can be customized which to use).
     * @param {str} editor_instruction The instruction to open the file in the editor. Default is "start".
     */
    async openTemporalProblemFile({ editor_instruction = "start" } = {}) {
        const absolute_temp_file_path = getDirAbsoluteUri(this.temp_problem_filepath, "./");

        await exec(`${editor_instruction} ${absolute_temp_file_path}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`Continue running`);
        });

    }


}

module.exports = ProblemsManager;