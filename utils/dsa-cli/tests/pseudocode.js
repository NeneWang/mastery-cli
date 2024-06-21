
const assert = require('assert');
const ProblemTests = require('./problem-test');

class Pseudocode extends ProblemTests {
    
        constructor(Problem) {
            super(Problem);    
        }

        runTests() {
         super.runTests();
        //  console.log("No tests ");
        }
}

const problems = [
    'score-of-a-string',
    'corporation_count_repetitions',
    'brick-wall',
    'task-scheduler',
    'find-the-celebrity'

];

// All problems here are pseudocodes problems. no tests.
let TEST_DICTIONARY = {};

for (let problem of problems) {
    TEST_DICTIONARY[problem] = Pseudocode;
}

module.exports = TEST_DICTIONARY;


