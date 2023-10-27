const assert = require('assert');
const ProblemTests = require('./problem-test');

const { arrayToListNode, arrayToBinaryTree, TreeNode, binaryTreeToArray } = require('./utils');


class LongestStringChain extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
    }

    test_1() {
        const input = ["a", "b", "ba", "bca", "bda", "bdca"];
        const output = 4;

        const result = this.problem.solve(input);
        assert.strictEqual(result, output);
    }

    test_2() {
        const input = ["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"];
        const output = 5;

        const result = this.problem.solve(input);
        assert.strictEqual(result, output);
    }
}


class WiggleSubsequence extends ProblemTests { 

    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const input = [1,7,4,9,2,5];
        const output = 6;

        const result = this.problem.solve(input);
        assert.strictEqual(result, output);
    }

    test_2() {
        const input = [1,17,5,10,13,15,10,5,16,8];
        const output = 7;

        const result = this.problem.solve(input);
        assert.strictEqual(result, output);
    }
}


class KeysKeyboard4 extends ProblemTests { 

    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const input = 3;
        const output = 3;

        const result = this.problem.solve(input);
        assert.strictEqual(result, output);
    }

    test_2() {
        const input = 7;
        const output = 9;

        const result = this.problem.solve(input);
        assert.strictEqual(result, output);
    }
}




const TEST_DICTIONARY = {
    "longest-string-chain": LongestStringChain,
    "wiggle-subsequence": WiggleSubsequence,
    "4-keys-keyboard": KeysKeyboard4


}

module.exports = TEST_DICTIONARY;