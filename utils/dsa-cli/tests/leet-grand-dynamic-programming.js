const assert = require('assert');
const ProblemTests = require('./problem-test');

const { arrayToListNode, arrayToBinaryTree, TreeNode, binaryTreeToArray } = require('./utils');


class LongestStringChain extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = "a -> b -> ba -> bca -> bdca | 4";
        const input = ["a", "b", "ba", "bca", "bda", "bdca"];
        const output = 4;

        const sub = new this.Problem();
        const result = sub.solve(input);
        assert.equal(result, output);
    }

    test_2() {
        this.current_test_name = "xbc -> pcxbcf -> xb -> cxbc -> pcxbc | 5";
        const input = ["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"];
        const output = 5;

        const sub = new this.Problem();
        const result = sub.solve(input);
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
        this.current_test_name = "1,7,4,9,2,5 | 6";

        const sub = new this.Problem();
        const result = sub.solve(input);
        assert.strictEqual(result, output);
    }

    test_2() {
        this.current_test_name = "1,17,5,10,13,15,10,5,16,8 | 7";
        const input = [1,17,5,10,13,15,10,5,16,8];
        const output = 7;

        const sub = new this.Problem();
        const result = sub.solve(input);
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
        this.current_test_name = "3 | 3";
        const input = 3;
        const output = 3;

        const sub = new this.Problem();
        const result = sub.solve(input);
        assert.strictEqual(result, output);
    }

    test_2() {
        this.current_test_name = "7 | 9";
        const input = 7;
        const output = 9;

        const sub = new this.Problem();
        const result = sub.solve(input);
        assert.strictEqual(result, output);
    }
}

class HandShakesThatDontCross extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        // this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
    }

    test_1(){
        this.current_test_name = "6 | 5";

        const sub = new this.Problem();
        const result = sub.solve(6);
        assert.equal(result, 5);
    }
    
    test_2(){
        this.current_test_name = "4 | 2";

        const sub = new this.Problem();
        const result = sub.solve(4);
        assert.equal(result, 2);
    }
}


class DecodeWaysII extends ProblemTests {
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1(){
        this.current_test_name = "1* | 18";
        const input = "1*";
        const output = 18;

        const sub = new this.Problem();
        const result = sub.solve(input);
        assert.equal(result, output);
    }


    test_2(){
        this.current_test_name = "2* | 15";
        const input = "2*";
        const output = 15;

        const sub = new this.Problem();
        const result = sub.solve(input);
        assert.equal(result, output);
    }
}

class MaximumScoreFromPerformingMultiplicationOperations extends ProblemTests {

    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1(){
        this.current_test_name = "nums = [1,2,3], multipliers = [3,2,1] | 14";
        const nums = [1,2,3], multipliers = [3,2,1];
        const output = 14;

        const sub = new this.Problem();
        const result = sub.solve(nums, multipliers);
        assert.equal(result, output);
    }

    test_2(){
        this.current_test_name = "nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6] | 102";
        const nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6];
        const output = 102;

        const sub = new this.Problem();
        const result = sub.solve(nums, multipliers);
        assert.equal(result, output);
    }

}

class PaintHouseIII extends ProblemTests {
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1(){
        this.current_test_name = "houses = [0,0,0,0,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3 | 9";
        const houses = [0,0,0,0,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3;
        const output = 9;

        const sub = new this.Problem();
        const result = sub.solve(houses, cost, m, n, target);
        assert.equal(result, output);
    }

    test_2(){
        this.current_test_name = "houses = [0,2,1,2,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3 | 11";
        const houses = [0,2,1,2,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3;
        const output = 11;

        const sub  = new this.Problem();
        const result = sub.solve(houses, cost, m, n, target);
        assert.equal(result, output);
    }

}




const TEST_DICTIONARY = {
    "longest-string-chain": LongestStringChain,
    "wiggle-subsequence": WiggleSubsequence,
    "4-keys-keyboard": KeysKeyboard4,
    'handshakes-that-dont-cross': HandShakesThatDontCross,
    'decode-ways-ii': DecodeWaysII,
    'maximum-score-from-performing-multiplication-operations': MaximumScoreFromPerformingMultiplicationOperations,
    'paint-house-iii': PaintHouseIII,

}

module.exports = TEST_DICTIONARY;