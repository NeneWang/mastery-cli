const assert = require('assert');
const fs = require('fs');

const {ProblemsManager} = require('../problems-manager');

describe('ProblemsManager', function() {
  // Define a mock problem with a file path
  const mockProblem = {
    slug: 'mock-problem',
    file_path: './test/mock/problem.js',
  };

  // Create a new ProblemsManager instance for each test
  let manager;
  beforeEach(function() {
    manager = new ProblemsManager();
  });

  describe('#copyFile()', function() {
    it('should copy the contents of the original file to a temporary file', function() {
      // Call the copyFile() method with the mock problem file path
      manager.copyFile(mockProblem.file_path);

      // Check that the temporary file was created and contains the same data as the original file
      const tempFileData = fs.readFileSync(manager.temp_file_path, 'utf8');
      const originalFileData = fs.readFileSync(mockProblem.file_path, 'utf8');
      assert.strictEqual(tempFileData, originalFileData, 'Temporary file data does not match original file data');
    });
  });

  describe('#getRandomProblem()', function() {
    it('should return a random problem from the problems manager', function() {
      // Create some mock problems
      const problem1 = { slug: 'problem1' };
      const problem2 = { slug: 'problem2' };
      const problem3 = { slug: 'problem3' };

      // Add the problems to the manager
      manager.addProblem(problem1);
      manager.addProblem(problem2);
      manager.addProblem(problem3);

      // Call the getRandomProblem() method multiple times and ensure that a different problem is returned each time
      const problems = [manager.getRandomProblem(), manager.getRandomProblem(), manager.getRandomProblem()];
      assert(problems[0] !== problems[1] && problems[1] !== problems[2], 'Duplicate problems returned');
    });
  });

  describe('#populateTemplate()', function() {
    it('should populate the temporary file with the contents of the problem file', function() {
      // Call the populateTemplate() method with the mock problem
      manager.populateTemplate(mockProblem);

      // Check that the temporary file was created and contains the same data as the original file
      const tempFileData = fs.readFileSync(manager.temp_file_path, 'utf8');
      const originalFileData = fs.readFileSync(mockProblem.file_path, 'utf8');
      assert.strictEqual(tempFileData, originalFileData, 'Temporary file data does not match original file data');
    });
  });

  describe('#runProblem()', function() {
    it('should execute the solve() method in the temporary file', function() {
      // Define a mock solution function
      const mockSolution = {
        solve: function() {
          return 42;
        }
      };

      // Write the mock solution function to a temporary file
      fs.writeFileSync(manager.temp_file_path, `module.exports = ${JSON.stringify(mockSolution)};`, 'utf8');

      // Call the runProblem() method and ensure that the correct value is returned
      const result = manager.runProblem(mockProblem);
      assert.strictEqual(result, 42, 'Incorrect result returned');
    });
  });
});
