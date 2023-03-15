
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

class PlusOne extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {

        this.current_test_name = "([1,2,3]) => [1,2,4]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([1, 2, 3]), [1, 2, 4]);
    }

    test_2() {

        this.current_test_name = "([4,3,2,1]) => [4,3,2,2]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([4, 3, 2, 1]), [4, 3, 2, 2]);
    }
}

function approximatelyEqual(a, b, tolerance) {
    return Math.abs(a - b) < tolerance;
}

class PowX extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {

        this.current_test_name = "(2.00000, 10) => 1024.00000"
        const problemToTest = new this.Problem();
        assert.equal(problemToTest.solve(2.00000, 10), 1024.00000);
    }

    test_2() {
        this.current_test_name = "(2.10000, 3) => 9.26100"
        const problemToTest = new this.Problem();
        assert(approximatelyEqual(problemToTest.solve(2.10000, 3), 9.26100, 0.00001));
    }

    test_3() {
        this.current_test_name = "(2.00000, -2) => 0.25000"
        const problemToTest = new this.Problem();
        assert.equal(problemToTest.solve(2.00000, -2), 0.25000);
    }


}


const TEST_DICTIONARY = {
    'multiply-strings': MultiplyStrings,
    'plus-one': PlusOne,
    'powx-n': PowX
}

module.exports = TEST_DICTIONARY;


