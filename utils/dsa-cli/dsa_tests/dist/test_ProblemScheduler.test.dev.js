"use strict";

var assert = require('assert');

var fs = require('fs');

var _require = require('../problems-manager'),
    ProblemsManager = _require.ProblemsManager;

var _require2 = require('../problem-metadata'),
    ProblemMetadata = _require2.ProblemMetadata;

describe('ProblemsManager', function () {
  // Define a mock problem with a file path
  var mockProblem = {
    slug: 'hello-world',
    file_path: 'hello-world.js'
  };
  var HelloWorldProblem = new ProblemMetadata(mockProblem); // Create a new ProblemsManager instance for each test

  var manager;
  beforeEach(function () {
    manager = new ProblemsManager();
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
      manager.addProblem(problem3);
      var problems = [manager.getRandomProblem(), manager.getRandomProblem(), manager.getRandomProblem()];
      console.log(problems);
    });
  });
  describe('#runProblem()', function () {
    it('should execute the solve() method in the temporary file', function () {
      // FIX The following line is not working
      // const problem_metadata = HelloWorldProblem.asJson;
      manager.populateTemplate(HelloWorldProblem);
      var result = manager.runProblem(HelloWorldProblem);
      console.log(result);
    });
  });
});