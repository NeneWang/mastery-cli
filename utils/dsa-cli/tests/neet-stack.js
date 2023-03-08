
const assert = require('assert');
const ProblemTests = require('./problem-test');

class CarFleet extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = "12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3] => 3"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]) == 3);
    }
    test_2() {
        this.current_test_name = "100, [0, 2, 4], [4, 2, 1] => 1"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve(100, [0, 2, 4], [4, 2, 1]) == 1);
    }
}


class LargestRectangleArea extends ProblemTests{
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = "[2,1,5,6,2,3] => 10"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([2,1,5,6,2,3]) == 10);
    }
    test_2() {
        this.current_test_name = "[2,4] => 4"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([2,4]) == 4);
    }
}

class MinStack extends ProblemTests{
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
    }

    test_1() {
        this.current_test_name = "[-2,0,-3] => -3, 0, -2"
        const minStack = new this.Problem();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        assert(minStack.getMin() == -3);
        minStack.pop();
        assert(minStack.top() == 0);
        assert(minStack.getMin() == -2);


    }
}

const TEST_DICTIONARY = {
    'car-fleet': CarFleet,
    'largest-rectangle-area': LargestRectangleArea,
    'min-stack': MinStack,
}

module.exports = TEST_DICTIONARY;

