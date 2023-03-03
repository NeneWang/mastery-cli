const fs = require('fs');
const { getDirAbsoluteUri } = require('./functions');

class ProblemsManager {
    constructor() {
        this.problems = {};
        this.temp_file_path = './temp.js';
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

    populateTemplate(problem) {
        this.copyFile(problem.file_path);
    }

    runProblem(problem_metadata) {
        console.log("Getting temp_file_path from ", this.temp_file_path);
        const { Problem } = require(this.temp_file_path);
        const problem = new Problem();
        problem.solve();
    }


    copyFile(problem_file_path) {
        const absolute_problem_file_path = getDirAbsoluteUri(problem_file_path, "./base_code/");
        const absolute_temp_file_path = getDirAbsoluteUri(this.temp_file_path, "./");
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