const fs = require('fs');
const { getDirAbsoluteUri } = require('./functions');
const { TEST_DICTIONARY } = require('./tests');

class ProblemsManager {
    constructor() {
        this.problems = {};
        this.temp_problem_filepath = './temp_problem.js';
        this.temp_test_filepath = './temp_tests.js';
    }

    addProblem(problem) {
        this.problems[problem.slug] = problem;
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
        console.log("Getting temp_file_path from ", this.temp_problem_filepath);
        const { Problem } = require(this.temp_problem_filepath);
        // const { ProblemTests } = require(this.temp_test_filepath);
        const problemTests = this.selectTest(problemMetadata.test_slug);

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