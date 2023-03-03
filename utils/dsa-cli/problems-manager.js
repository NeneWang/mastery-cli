const fs = require('fs');
const {getDirAbsoluteUri} = require('functions');

class ProblemsManager {
    constructor() {
        this.problems = {};
        this.temp_file_path = getDirAbsoluteUri("./temp.js");
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

    runProblem(problem) {   
        const temporal_file_problem = require(this.temp_file_path);
        temporal_file_problem.solve();  
    }


    copyFile(problem_file_path) {
        fs.readFile(problem_file_path, 'utf8', function (err, data) {
            if(err) {
                return console.log(err);
            }

            fs.writeFile(this.temp_file_path, data, 'utf8', function (err) {
                if(err) return console.log(err);
                
            });
        });
    }


}

module.exports = { ProblemsManager };