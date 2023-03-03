"use strict";

var assert = require('assert');

var fs = require('fs');

var _require = require('../problems-manager'),
    ProblemsManager = _require.ProblemsManager;

describe('ProblemsManager', function () {
  // Define a mock problem with a file path
  var mockProblem = {
    slug: 'mock-problem',
    file_path: './test/mock/problem.js'
  }; // Create a new ProblemsManager instance for each test

  var manager;
  beforeEach(function () {
    manager = new ProblemsManager();
  });
  describe('#copyFile()', function () {
    it('should copy the contents of the original file to a temporary file', function () {
      // Call the copyFile() method with the mock problem file path
      manager.copyFile(mockProblem.file_path); // Check that the temporary file was created and contains the same data as the original file

      var tempFileData = fs.readFileSync(manager.temp_file_path, 'utf8');
      var originalFileData = fs.readFileSync(mockProblem.file_path, 'utf8');
      assert.strictEqual(tempFileData, originalFileData, 'Temporary file data does not match original file data');
    });
  });
  describe('#getRandomProblem()', function () {
    it('should return a random problem from the problems manager', function () {
      // Create some mock problems
      var problem1 = {
        slug: 'problem1'
      };
      var problem2 = {
        slug: 'problem2'
      };
      var problem3 = {
        slug: 'problem3'
      }; // Add the problems to the manager

      manager.addProblem(problem1);
      manager.addProblem(problem2);
      manager.addProblem(problem3); // Call the getRandomProblem() method multiple times and ensure that a different problem is returned each time

      var problems = [manager.getRandomProblem(), manager.getRandomProblem(), manager.getRandomProblem()];
      assert(problems[0] !== problems[1] && problems[1] !== problems[2], 'Duplicate problems returned');
    });
  });
  describe('#populateTemplate()', function () {
    it('should populate the temporary file with the contents of the problem file', function () {
      // Call the populateTemplate() method with the mock problem
      manager.populateTemplate(mockProblem); // Check that the temporary file was created and contains the same data as the original file

      var tempFileData = fs.readFileSync(manager.temp_file_path, 'utf8');
      var originalFileData = fs.readFileSync(mockProblem.file_path, 'utf8');
      assert.strictEqual(tempFileData, originalFileData, 'Temporary file data does not match original file data');
    });
  });
  describe('#runProblem()', function () {
    it('should execute the solve() method in the temporary file', function () {
      // Define a mock solution function
      var mockSolution = {
        solve: function solve() {
          return 42;
        }
      }; // Write the mock solution function to a temporary file

      fs.writeFileSync(manager.temp_file_path, "module.exports = ".concat(JSON.stringify(mockSolution), ";"), 'utf8'); // Call the runProblem() method and ensure that the correct value is returned

      var result = manager.runProblem(mockProblem);
      assert.strictEqual(result, 42, 'Incorrect result returned');
    });
  });
});