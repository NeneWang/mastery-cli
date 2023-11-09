const assert = require('assert');
const ProblemTests = require('./problem-test');



// eliminate-maximum-number-of-monsters
class EliminateMaximumNumberOfMonsters extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        // this.tests.push(() => this.test3());
    }

    test_1() {
        const input = [[1, 3, 4], [1, 1, 1]];
        const output = 3;
        this.current_test_name = `${input} | ${output}`;

        const structure = new this.Problem()
        const result = structure.solve(input, output);
        assert(result);
    }

    test_2() {
        const input = [[1, 1, 3, 5, 5], [2, 3, 2, 3, 2]];
        const output = 3;
        this.current_test_name = `${input} | ${output}`;

        const structure = new this.Problem()
        const result = structure.solve(input, output);
        assert(result);
    }

}


class CountNumberOfHomogenousSubstrings extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        // this.tests.push(() => this.test3());
    }

    test_1() {
        const input = "abbcccaa";
        const output = 13;
        this.current_test_name = `${input} | ${output}`;

        const structure = new this.Problem()
        const result = structure.solve(input, output);
        assert(result);
    }

    test_2() {
        const input = "xy";
        const output = 2;
        this.current_test_name = `${input} | ${output}`;

        const structure = new this.Problem()
        const result = structure.solve(input, output);
        assert(result);
    }

}


const TEST_DICTIONARY = {
    "eliminate-maximum-number-of-monsters": EliminateMaximumNumberOfMonsters,
    "count-number-of-homogenous-substrings": CountNumberOfHomogenousSubstrings,

}


module.exports = TEST_DICTIONARY;

