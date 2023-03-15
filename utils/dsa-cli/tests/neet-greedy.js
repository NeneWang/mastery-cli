
const assert = require('assert');
const ProblemTests = require('./problem-test');



class GasStation extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = "([1,2,3,4,5], [3, 4, 5, 1, 2]) => 3"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) == 3);
    }
    test_2() {
        this.current_test_name = "([2,3,4], [3,4,3]) => -1"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([2, 3, 4], [3, 4, 3]) == -1);
    }
}

const TEST_DICTIONARY = {
    "gas-station": GasStation,
}


module.export = TEST_DICTIONARY;



