const assert = require('assert');
const fs = require('fs');

const { ProblemsManager } = require('../problems-manager');

describe('ProblemsManager', function () {
    // Define a mock problem with a file path
    const mockProblem = {
        slug: 'mock-problem',
        file_path: 'hello-world.js',
    };

    // Create a new ProblemsManager instance for each test
    let manager;
    beforeEach(function () {
        manager = new ProblemsManager();
    });


    describe('#getRandomProblem()', function () {
        it('should return a random problem from the problems manager', function () {
            // Create some mock problems
            const problem1 = { slug: 'problem1' };
            const problem2 = { slug: 'problem2' };
            const problem3 = { slug: 'problem3' };

            // Add the problems to the manager
            manager.addProblem(problem1);
            manager.addProblem(problem2);
            manager.addProblem(problem3);

            const problems = [manager.getRandomProblem(), manager.getRandomProblem(), manager.getRandomProblem()];
            console.log(problems)
        });
    });


    describe('#runProblem()', function () {
        it('should execute the solve() method in the temporary file', function () {
            // FIX The following line is not working
            manager.populateTemplate(mockProblem);
            
            const result = manager.runProblem(mockProblem);
            console.log(result);
        });
    });
});
