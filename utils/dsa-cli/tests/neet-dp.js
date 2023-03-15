
const assert = require('assert');
const ProblemTests = require('./problem-test');

class ClimbingStairs extends ProblemTests {

    constructor(problem) {
        super(problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const climbingStairs = new this.Problem();
        this.current_test_name = '2 | 2';
        assert.equal(climbingStairs.solve(2), 2);
    }

    test_2() {
        const climbingStairs = new this.Problem();
        this.current_test_name = '3 | 3';
        assert.equal(climbingStairs.solve(3), 3);
    }

    test_3() {
        const climbingStairs = new this.Problem();
        this.current_test_name = '10 | 89';
        assert.equal(climbingStairs.solve(10), 89);
    }

}


class CoinChange extends ProblemTests {

    constructor(problem) {
        super(problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const coinChange = new this.Problem();
        this.current_test_name = '[1,2,5] | 11 | 3';
        assert.equal(coinChange.solve([1, 2, 5], 11), 3);
    }

    test_2() {
        const coinChange = new this.Problem();
        this.current_test_name = '[2] | 3 | -1';
        assert.equal(coinChange.solve([2], 3), -1);
    }

    test_3() {
        const coinChange = new this.Problem();
        this.current_test_name = '[1] | 0 | 0';
        assert.equal(coinChange.solve([1], 0), 0);
    }

}


class DecodeWays extends ProblemTests {
    constructor(problem) {
        super(problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const decodeWays = new this.Problem();
        this.current_test_name = '"12" | 2';
        assert.equal(decodeWays.solve('12'), 2);
    }

    test_2() {
        const decodeWays = new this.Problem();
        this.current_test_name = '"226" | 3';
        assert.equal(decodeWays.solve('226'), 3);
    }

    test_3() {
        const decodeWays = new this.Problem();
        this.current_test_name = '"0" | 0';
        assert.equal(decodeWays.solve('06'), 0);
    }


}


class DetectSquares extends ProblemTests {
    constructor(problem) {
        super(problem);
        this.tests.push(() => this.test_1());
    }

    test_1() {
        const detectSquares = new this.Problem();
        this.current_test_name = '[[3,10],[11,2],[3,2],[11,10],[2,3],[10,11]] | 2';
        detectSquares.add([3, 10]);
        detectSquares.add([11, 2]);
        detectSquares.add([3, 2]);
        assert.equal(detectSquares.count([11, 10]), 1);
        assert.equal(detectSquares.count([14, 8]), 0);

        detectSquares.add([11, 2]);
        assert.equal(detectSquares.count([11, 10]), 2);
    }

}




const TEST_DICTIONARY = {
    'climbing-stairs': ClimbingStairs,
    'coin-change': CoinChange,
    'decode-ways': DecodeWays,
    'detect-squares': DetectSquares,
}

module.exports = TEST_DICTIONARY;



