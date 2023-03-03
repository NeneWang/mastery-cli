const fs = require('fs');
const { getDirAbsoluteUri } = require('./functions');
const { TEST_DICTIONARY } = require('./tests');
const { ProblemMetadata } = require('./structures');

const DEBUG = false;

class ProblemsManager {
    constructor() {
        this.problems = {};
        this.temp_problem_filepath = './temp/temp_problem.js';
        this.temp_test_filepath = './temp_tests.js';
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
        const keys = Object.keys(this.problems);
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

    runProblem(problemMetadata) {
        if (DEBUG) console.log("Getting temp_file_path from ", this.temp_problem_filepath);
        const { Problem } = require(this.temp_problem_filepath);
        // const { ProblemTests } = require(this.temp_test_filepath);
        const ProblemTestsObject = this.selectTest(problemMetadata);
        // debug problemTestObject instance
        if (true) console.log("ProblemTestsObject instance: ", ProblemTestsObject);
        if (DEBUG) console.log("metadata", problemMetadata.asJson);
        const problemTests = new ProblemTestsObject(Problem);
        problemTests.runTests();
    }


    copyFile(problem_file_path) {
        const absolute_problem_file_path = getDirAbsoluteUri(problem_file_path, "./base_code/");
        const absolute_temp_file_path = getDirAbsoluteUri(this.temp_problem_filepath, "./");
        

        console.log("Opening file: " + absolute_problem_file_path);
        fs.readFile(absolute_problem_file_path, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }

            fs.writeFile(absolute_temp_file_path, data, 'utf8', function (err) {
                if (err) return console.log(err);

            });
        });
    }


}

module.exports = { ProblemsManager };