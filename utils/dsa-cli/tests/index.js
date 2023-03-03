const assert = require('assert');
const { count } = require('console');
const chalk = require('chalk');

class ProblemTests {
    constructor(Problem) {
        this.Problem = Problem;
        this.tests = [];
        this.current_test_name = "";
    }

    runTests() {
        
        const count_of_tests = this.tests.length;
        for(let test_number = 1; test_number <= count_of_tests; test_number++) {
            const test = this.tests[test_number-1];
            this.individualTestReport({test_number: test_number, count_of_tests: count_of_tests});
            try {
                test();
                this.printCurrentTestSuccess();
            } catch (error) {
                this.printCurrentTestFailed();
                console.log(error);
            }
        }
    }

    printCurrentTestSuccess() {
        console.log(chalk.green(`Test ${this.current_test_name} passed`));
    }

    printCurrentTestFailed() {
        console.log(chalk.red(`Test ${this.current_test_name} failed`));
    }

    individualTestReport({test_number, count_of_tests} = {}){
        console.log(`Test ${test_number}/${count_of_tests}: ${this.current_test_name}`);
    }


}

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