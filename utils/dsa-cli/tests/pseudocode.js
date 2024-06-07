
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



// All problems here are pseudocodes problems. no tests.
const TEST_DICTIONARY = {
    'score-of-a-string': Pseudocode
}

module.exports = TEST_DICTIONARY;


