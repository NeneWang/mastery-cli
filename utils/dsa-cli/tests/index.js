const assert = require('assert');
const ProblemTests = require('./problem-test');


class HelloWorldTest extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.helloWorldTest());
        
    }
    
    helloWorldTest() {
        this.current_test_name = "helloWorldTest"
        const problemToTest = new this.Problem();
        problemToTest.solve();// Should print "Hello World!"

        assert(true);


    }
}

const TEST_DICTIONARY = {
    "hello-world": HelloWorldTest
}


module.exports = { TEST_DICTIONARY };