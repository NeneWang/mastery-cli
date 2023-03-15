
const assert = require('assert');
const ProblemTests = require('./problem-test');

class MultiplyStrings extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = "('2', '3') => '6'"
        const problemToTest = new this.Problem();
        assert.equal(problemToTest.solve('2', '3'), '6');
    }

    test_2() {

        this.current_test_name = "('123', '456') => '56088'"
        const problemToTest = new this.Problem();
        assert.equal(problemToTest.solve('123', '456'), '56088');
    }

}

const TEST_DICTIONARY = {
    'multiply-strings': MultiplyStrings,
}

module.exports = TEST_DICTIONARY;


