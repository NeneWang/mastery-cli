
const assert = require('assert');
const ProblemTests = require('./problem-test');
const maximizeExpression = require('../solutions/maximize-expression');
const { looselyDeepEqual } = require('../functions');

function compareNestedLists(a, b) {
    if (typeof a !== typeof b) {
        return false;
    }

    if (Array.isArray(a)) {
        if (a.length !== b.length) {
            return false;
        }

        for (const x of a) {
            let found = false;
            for (const y of b) {
                if (compareNestedLists(x, y)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                return false;
            }
        }

        return true;
    }

    return a === b;
}


class SubarraySort extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());


    }

    test_1() {

        const subarraySort = new this.Problem();
        this.current_test_name = '[1,2,4,7,10,11,7,12,6,7,16,18,19] | [3,9]';
        assert.deepStrictEqual(subarraySort.solve([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]), [3, 9]);

    }

    test_2() {

        /**
         * 
         * [4, 6]
            View Outputs Side By Side
            Input(s)
            {
            "array": [1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19]
            }
         */
        const subarraySort = new this.Problem();
        this.current_test_name = '[1,2,4,7,10,11,7,12,13,14,16,18,19] | [4, 6]';
        assert.deepStrictEqual(subarraySort.solve([1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19]), [4, 6]);
    }

    test_3() {
        /**
         * [2, 4]
            View Outputs Side By Side
            Input(s)
            {
            "array": [1, 2, 8, 4, 5]
            }
         */

        const subarraySort = new this.Problem();
        this.current_test_name = '[1, 2, 8, 4, 5] | [2, 4]';
        assert.deepStrictEqual(subarraySort.solve([1, 2, 8, 4, 5]), [2, 4]);
    }

    test_4() {

        /**
         * [0, 12]
            View Outputs Side By Side
            Input(s)
            {
            "array": [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]
            }
         */

        const subarraySort = new this.Problem();
        this.current_test_name = '[4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7] | [0, 12]';
        assert.deepStrictEqual(subarraySort.solve([4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]), [0, 12]);
    }

    test_5() {

        /**
         * [0, 11]
            View Outputs Side By Side
            Input(s)
            {
            "array": [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57]
            }
         */

        const subarraySort = new this.Problem();
        this.current_test_name = '[4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57] | [0, 11]';
        assert.deepStrictEqual(subarraySort.solve([4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57]), [0, 11]);
    }

    test_6() {
        /**
         * [1, 11]
            View Outputs Side By Side
            Input(s)
            {
            "array": [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57]
            }
         */

        const subarraySort = new this.Problem();
        this.current_test_name = '[-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57] | [1, 11]';
        assert.deepStrictEqual(subarraySort.solve([-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57]), [1, 11]);
    }

    test_7() {
        /**
         * [1, 12]
            View Outputs Side By Side
            Input(s)
            {
            "array": [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]
            }
         */

        const subarraySort = new this.Problem();
        this.current_test_name = '[-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7] | [1, 12]';
        assert.deepStrictEqual(subarraySort.solve([-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]), [1, 12]);
    }

    test_8() {

        /**
         * [6, 7]
            View Outputs Side By Side
            Input(s)
            {
            "array": [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11]
            }
         */

        const subarraySort = new this.Problem();
        this.current_test_name = '[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11] | [6, 7]';
        assert.deepStrictEqual(subarraySort.solve([1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11]), [6, 7]);
    }

    test_9() {

        /**
         * [6, 16]
            View Outputs Side By Side
            Input(s)
            {
            "array": [1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19]
            }
         */

        const subarraySort = new this.Problem();
        this.current_test_name = '[1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19] | [6, 16]';
        assert.deepStrictEqual(subarraySort.solve([1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19]), [6, 16]);
    }


    test_10() {

        /**
         * [4, 24]
            View Outputs Side By Side
            Input(s)
            {
            "array": [1, 2, 3, 4, 5, 6, 18, 21, 22, 7, 14, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 4, 14, 11, 6, 33, 35, 41, 55]
            }
         */

        const subarraySort = new this.Problem();
        this.current_test_name = '[1, 2, 3, 4, 5, 6, 18, 21, 22, 7, 14, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 4, 14, 11, 6, 33, 35, 41, 55] | [4, 24]';
        assert.deepStrictEqual(subarraySort.solve([1, 2, 3, 4, 5, 6, 18, 21, 22, 7, 14, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 4, 14, 11, 6, 33, 35, 41, 55]), [4, 24]);
    }


}


class MinRewards extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());

    }

    test_1() {
        /**
         * 25
            View Outputs Side By Side
            Input(s)
            {
            "scores": [8, 4, 2, 1, 3, 6, 7, 9, 5]
            }
         */

        const minRewards = new this.Problem();
        this.current_test_name = '[8, 4, 2, 1, 3, 6, 7, 9, 5] | 25';
        assert.equal(minRewards.solve([8, 4, 2, 1, 3, 6, 7, 9, 5]), 25);
    }

    test_2() {
        /**
         * 1
            View Outputs Side By Side
            Input(s)
            {
            "scores": [1]
            }
         */

        const minRewards = new this.Problem();
        this.current_test_name = '[1] | 1';
        assert.equal(minRewards.solve([1]), 1);
    }

    test_3() {
        /**
         * 
         * 3
            View Outputs Side By Side
            Input(s)
            {
            "scores": [5, 10]
            }
         */

        const minRewards = new this.Problem();
        this.current_test_name = '[5, 10] | 3';
        assert.equal(minRewards.solve([5, 10]), 3);
    }

    test_4() {

        /**
         * 3
            View Outputs Side By Side
            Input(s)
            {
            "scores": [10, 5]
            }
         */

        const minRewards = new this.Problem();
        this.current_test_name = '[10, 5] | 3';
        assert.equal(minRewards.solve([10, 5]), 3);
    }

    test_5() {
        /**
         * 8
            View Outputs Side By Side
            Input(s)
            {
            "scores": [4, 2, 1, 3]
            }
         */

        const minRewards = new this.Problem();
        this.current_test_name = '[4, 2, 1, 3] | 8';
        assert.equal(minRewards.solve([4, 2, 1, 3]), 8);

    }

    test_6() {
        /**
         * 9
            View Outputs Side By Side
            Input(s)
            {
            "scores": [0, 4, 2, 1, 3]
            }
         */

        const minRewards = new this.Problem();
        this.current_test_name = '[0, 4, 2, 1, 3] | 9';
        assert.equal(minRewards.solve([0, 4, 2, 1, 3]), 9);
    }

    test_7() {

        /**
         * 52
            View Outputs Side By Side
            Input(s)
            {
            "scores": [2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0]
            }
         */

        const minRewards = new this.Problem();
        this.current_test_name = '[2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0] | 52';
        assert.equal(minRewards.solve([2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0]), 52);
    }

    test_8() {
        /**
         * 15
            View Outputs Side By Side
            Input(s)
            {
            "scores": [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
            }
         */

        const minRewards = new this.Problem();
        this.current_test_name = '[2, 1, 4, 3, 6, 5, 8, 7, 10, 9] | 15';
        assert.equal(minRewards.solve([2, 1, 4, 3, 6, 5, 8, 7, 10, 9]), 15);
    }

    test_9() {

        /**
         * 93
            View Outputs Side By Side
            Input(s)
            {
            "scores": [800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53]
            }
         */

        const minRewards = new this.Problem();
        this.current_test_name = '[800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53] | 93';
        assert.equal(minRewards.solve([800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53]), 93);
    }
}


class zigzagTraverse extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());
    }

    test_1() {
        /**
         * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
            View Outputs Side By Side
            Input(s)
            {
            "array": [
                [1, 3, 4, 10],
                [2, 5, 9, 11],
                [6, 8, 12, 15],
                [7, 13, 14, 16]
            ]
            }
         */

        const zigzagTraverse = new this.Problem();
        this.current_test_name = '[[1, 3, 4, 10], [2, 5, 9, 11], [6, 8, 12, 15], [7, 13, 14, 16]] | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]';
        assert.deepStrictEqual(zigzagTraverse.solve([[1, 3, 4, 10], [2, 5, 9, 11], [6, 8, 12, 15], [7, 13, 14, 16]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

    }

    test_2() {
        /**
         * [1]
            View Outputs Side By Side
            Input(s)
            {
            "array": [
                [1]
            ]
            }
         */

        const zigzagTraverse = new this.Problem();
        this.current_test_name = '[[1]] | [1]';
        assert.deepStrictEqual(zigzagTraverse.solve([[1]]), [1]);
    }

    test_3() {
        /**
         * [1, 2, 3, 4, 5]
            View Outputs Side By Side
            Input(s)
            {
            "array": [
                [1, 2, 3, 4, 5]
            ]
            }
         */

        const zigzagTraverse = new this.Problem();
        this.current_test_name = '[[1, 2, 3, 4, 5]] | [1, 2, 3, 4, 5]';
        assert.deepStrictEqual(zigzagTraverse.solve([[1, 2, 3, 4, 5]]), [1, 2, 3, 4, 5]);

    }

    test_4() {
        /**
         * [1, 2, 3, 4, 5]
            View Outputs Side By Side
            Input(s)
            {
            "array": [
                [1],
                [2],
                [3],
                [4],
                [5]
            ]
            }
         */

        const zigzagTraverse = new this.Problem();
        this.current_test_name = '[[1], [2], [3], [4], [5]] | [1, 2, 3, 4, 5]';
        assert.deepStrictEqual(zigzagTraverse.solve([[1], [2], [3], [4], [5]]), [1, 2, 3, 4, 5]);
    }

    test_5() {
        /**
         * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            View Outputs Side By Side
            Input(s)
            {
            "array": [
                [1, 3],
                [2, 4],
                [5, 7],
                [6, 8],
                [9, 10]
            ]
            }
         */

        const zigzagTraverse = new this.Problem();
        this.current_test_name = '[[1, 3], [2, 4], [5, 7], [6, 8], [9, 10]] | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]';
        assert.deepStrictEqual(zigzagTraverse.solve([[1, 3], [2, 4], [5, 7], [6, 8], [9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    }

    test_6() {
        /**
         * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            View Outputs Side By Side
            Input(s)
            {
            "array": [
                [1, 3, 4, 7, 8],
                [2, 5, 6, 9, 10]
            ]
            }
         */

        const zigzagTraverse = new this.Problem();
        this.current_test_name = '[[1, 3, 4, 7, 8], [2, 5, 6, 9, 10]] | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]';
        assert.deepStrictEqual(zigzagTraverse.solve([[1, 3, 4, 7, 8], [2, 5, 6, 9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }

    test_7() {
        /**
         * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
            View Outputs Side By Side
            Input(s)
            {
            "array": [
                [1, 3, 4, 10, 11],
                [2, 5, 9, 12, 19],
                [6, 8, 13, 18, 20],
                [7, 14, 17, 21, 24],
                [15, 16, 22, 23, 25]
            ]
            }
         */

        const zigzagTraverse = new this.Problem();
        this.current_test_name = '[[1, 3, 4, 10, 11], [2, 5, 9, 12, 19], [6, 8, 13, 18, 20], [7, 14, 17, 21, 24], [15, 16, 22, 23, 25]] | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]';
        assert.deepStrictEqual(zigzagTraverse.solve([[1, 3, 4, 10, 11], [2, 5, 9, 12, 19], [6, 8, 13, 18, 20], [7, 14, 17, 21, 24], [15, 16, 22, 23, 25]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);

    }

    test_8() {

        /**
         * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
            View Outputs Side By Side
            Input(s)
            {
            "array": [
                [1, 3, 4, 10, 11, 20],
                [2, 5, 9, 12, 19, 21],
                [6, 8, 13, 18, 22, 27],
                [7, 14, 17, 23, 26, 28],
                [15, 16, 24, 25, 29, 30]
            ]
            }
         */

        const zigzagTraverse = new this.Problem();
        this.current_test_name = '[[1, 3, 4, 10, 11, 20], [2, 5, 9, 12, 19, 21], [6, 8, 13, 18, 22, 27], [7, 14, 17, 23, 26, 28], [15, 16, 24, 25, 29, 30]] | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]';
        assert.deepStrictEqual(zigzagTraverse.solve([[1, 3, 4, 10, 11, 20], [2, 5, 9, 12, 19, 21], [6, 8, 13, 18, 22, 27], [7, 14, 17, 23, 26, 28], [15, 16, 24, 25, 29, 30]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);

    }

    test_9() {
        /**
         * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
            View Outputs Side By Side
            Input(s)
            {
            "array": [
                [1, 3, 4, 10, 11],
                [2, 5, 9, 12, 20],
                [6, 8, 13, 19, 21],
                [7, 14, 18, 22, 27],
                [15, 17, 23, 26, 28],
                [16, 24, 25, 29, 30]
            ]
            }
         */

        const zigzagTraverse = new this.Problem();
        this.current_test_name = '[[1, 3, 4, 10, 11], [2, 5, 9, 12, 20], [6, 8, 13, 19, 21], [7, 14, 18, 22, 27], [15, 17, 23, 26, 28], [16, 24, 25, 29, 30]] | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]';
        assert.deepStrictEqual(zigzagTraverse.solve([[1, 3, 4, 10, 11], [2, 5, 9, 12, 20], [6, 8, 13, 19, 21], [7, 14, 18, 22, 27], [15, 17, 23, 26, 28], [16, 24, 25, 29, 30]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);

    }


    test_10() {
        /**
         * [1, 10, 21, -3, 11, 6, 7, 8, 112, 4, 15, 12, 113, 2, 15, 16, 17, 18, 19, 20, 6, -7, -1, 21, 22, 23, 24, 27, 226, -27, 0, -2, 88, 9, -3, 0, 12, 28, 299, 30, -28, 32, 0, -4, 0, -111, -226, 29, 32, -23, 66, -17, 31, 88]
            View Outputs Side By Side
            Input(s)
            {
            "array": [
                [1, 21, -3, 4, 15, 6, -7, 88, 9],
                [10, 11, 112, 12, 20, -1, -2, -3, -4],
                [6, 8, 113, 19, 21, 0, 0, 0, 0],
                [7, 2, 18, 22, -27, 12, 32, -111, 66],
                [15, 17, 23, 226, 28, -28, -226, -23, -17],
                [16, 24, 27, 299, 30, 29, 32, 31, 88]
            ]
            }
         */

        const zigzagTraverse = new this.Problem();
        this.current_test_name = '[[1, 21, -3, 4, 15, 6, -7, 88, 9], [10, 11, 112, 12, 20, -1, -2, -3, -4], [6, 8, 113, 19, 21, 0, 0, 0, 0], [7, 2, 18, 22, -27, 12, 32, -111, 66], [15, 17, 23, 226, 28, -28, -226, -23, -17], [16, 24, 27, 299, 30, 29, 32, 31, 88]] | [1, 10, 21, -3, 11, 6, 7, 8, 112, 4, 15, 12, 113, 2, 15, 16, 17, 18, 19, 20, 6, -7, -1, 21, 22, 23, 24, 27, 226, -27, 0, -2, 88, 9, -3, 0, 12, 28, 299, 30, -28, 32, 0, -4, 0, -111, -226, 29, 32, -23, 66, -17, 31, 88]';
        assert.deepStrictEqual(zigzagTraverse.solve([[1, 21, -3, 4, 15, 6, -7, 88, 9], [10, 11, 112, 12, 20, -1, -2, -3, -4], [6, 8, 113, 19, 21, 0, 0, 0, 0], [7, 2, 18, 22, -27, 12, 32, -111, 66], [15, 17, 23, 226, 28, -28, -226, -23, -17], [16, 24, 27, 299, 30, 29, 32, 31, 88]]), [1, 10, 21, -3, 11, 6, 7, 8, 112, 4, 15, 12, 113, 2, 15, 16, 17, 18, 19, 20, 6, -7, -1, 21, 22, 23, 24, 27, 226, -27, 0, -2, 88, 9, -3, 0, 12, 28, 299, 30, -28, 32, 0, -4, 0, -111, -226, 29, 32, -23, 66, -17, 31, 88]);

    }

}

class SameBsts extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());
    }

    test_1() {
        const sameBsts = new this.Problem();
        this.current_test_name = '[10,15,8,12,94,81,5,2,11] | [10,8,5,15,2,12,11,94,81] | true';
        assert.equal(sameBsts.solve([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81]), true);
    }

    test_2() {
        const sameBsts = new this.Problem();
        this.current_test_name = '[10,15,8,12,94,81,5,2,11] | [10,8,5,15,2,12,11,94,81,100] | false';
        assert.equal(sameBsts.solve([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81, 100]), false);
    }

    test_3() {
        const sameBsts = new this.Problem();
        this.current_test_name = '[10,15,8,12,94,81,5,2,11] | [10,8,5,15,2,12,11,94,81,100] | false';
        assert.equal(sameBsts.solve([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81, 100]), false);
    }

    test_4() {
        /**
         * true
            View Outputs Side By Side
            Input(s)
            {
            "arrayOne": [1, 2, 3, 4, 5, 6, 7],
            "arrayTwo": [1, 2, 3, 4, 5, 6, 7]
            }
         */

        const sameBsts = new this.Problem();
        this.current_test_name = '[1, 2, 3, 4, 5, 6, 7] | [1, 2, 3, 4, 5, 6, 7] | true';
        assert.equal(sameBsts.solve([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7]), true);
    }

    test_5() {
        /**
         * true
            View Outputs Side By Side
            Input(s)
            {
            "arrayOne": [7, 6, 5, 4, 3, 2, 1],
            "arrayTwo": [7, 6, 5, 4, 3, 2, 1]
            }
         */

        const sameBsts = new this.Problem();
        this.current_test_name = '[7, 6, 5, 4, 3, 2, 1] | [7, 6, 5, 4, 3, 2, 1] | true';
        assert.equal(sameBsts.solve([7, 6, 5, 4, 3, 2, 1], [7, 6, 5, 4, 3, 2, 1]), true);

    }

    test_6() {
        /**
         * true
            View Outputs Side By Side
            Input(s)
            {
            "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2],
            "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81]
            }
         */

        const sameBsts = new this.Problem();
        this.current_test_name = '[10, 15, 8, 12, 94, 81, 5, 2] | [10, 8, 5, 15, 2, 12, 94, 81] | true';
        assert.equal(sameBsts.solve([10, 15, 8, 12, 94, 81, 5, 2], [10, 8, 5, 15, 2, 12, 94, 81]), true);
    }

    test_7() {
        /**
         * false
            View Outputs Side By Side
            Input(s)
            {
            "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2],
            "arrayTwo": [11, 8, 5, 15, 2, 12, 94, 81]
            }
         */

        const sameBsts = new this.Problem();
        this.current_test_name = '[10, 15, 8, 12, 94, 81, 5, 2] | [11, 8, 5, 15, 2, 12, 94, 81] | false';
        assert.equal(sameBsts.solve([10, 15, 8, 12, 94, 81, 5, 2], [11, 8, 5, 15, 2, 12, 94, 81]), false);
    }

    test_8() {
        /**
         * true
        View Outputs Side By Side
        Input(s)
        {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 8, -1, 8, 2, -34],
        "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100]
        }
        */

        const sameBsts = new this.Problem();
        this.current_test_name = '[10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 8, -1, 8, 2, -34] | [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100] | true';
        assert.equal(sameBsts.solve([10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 8, -1, 8, 2, -34], [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100]), true);
    }

    test_9() {

        /**
         * false
            View Outputs Side By Side
            Input(s)
            {
            "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, -1, 101, 45, 12, 8, -1, 8, 2, -34],
            "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100]
            }
         */

        const sameBsts = new this.Problem();
        this.current_test_name = '[10, 15, 8, 12, 94, 81, 5, 2, -1, 101, 45, 12, 8, -1, 8, 2, -34] | [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100] | false';
        assert.equal(sameBsts.solve([10, 15, 8, 12, 94, 81, 5, 2, -1, 101, 45, 12, 8, -1, 8, 2, -34], [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100]), false);
    }

    test_10() {
        /**
         * false
            View Outputs Side By Side
            Input(s)
            {
            "arrayOne": [5, 2, -1, 100, 45, 12, 8, -1, 8, 10, 15, 8, 12, 94, 81, 2, -34],
            "arrayTwo": [5, 8, 10, 15, 2, 8, 12, 45, 100, 2, 12, 94, 81, -1, -1, -34, 8]
            }
         */

        const sameBsts = new this.Problem();
        this.current_test_name = '[5, 2, -1, 100, 45, 12, 8, -1, 8, 10, 15, 8, 12, 94, 81, 2, -34] | [5, 8, 10, 15, 2, 8, 12, 45, 100, 2, 12, 94, 81, -1, -1, -34, 8] | false';
        assert.equal(sameBsts.solve([5, 2, -1, 100, 45, 12, 8, -1, 8, 10, 15, 8, 12, 94, 81, 2, -34], [5, 8, 10, 15, 2, 8, 12, 45, 100, 2, 12, 94, 81, -1, -1, -34, 8]), false);
    }
}


class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}
class validateThreeNodes extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());
    }

    test_1() {
        /**
         * true
            View Outputs Side By Side
            Input(s)
            {
                 "nodeOne": "5",
                "nodeThree": "3",
                "nodeTwo": "2",
            "tree": {
                "nodes": [
                {"id": "0", "left": null, "right": null, "value": 0},
                {"id": "1", "left": "0", "right": null, "value": 1},
                {"id": "2", "left": "1", "right": "4", "value": 2},
                {"id": "3", "left": null, "right": null, "value": 3},
                {"id": "4", "left": "3", "right": null, "value": 4},
                {"id": "5", "left": "2", "right": "7", "value": 5},
                {"id": "6", "left": null, "right": null, "value": 6},
                {"id": "7", "left": "6", "right": "8", "value": 7},
                {"id": "8", "left": null, "right": null, "value": 8}
                ],
                "root": "5"
            }
            }
         */

        const validateThreeNodes = new this.Problem();

        const tree = new BST(5);
        tree.left = new BST(2);
        tree.left.left = new BST(1);
        tree.left.left.left = new BST(0);
        tree.left.right = new BST(3);
        tree.right = new BST(7);
        tree.right.left = new BST(6);
        tree.right.right = new BST(8);

        // Nodes you mentioned in the comment
        const nodeOne = tree; // Value: 5
        const nodeTwo = tree.left; // Value: 2
        const nodeThree = tree.left.right; // Value: 3
        this.current_test_name = '5 | 3 | 2 | true';
        assert.equal(validateThreeNodes.solve(nodeOne, nodeTwo, nodeThree), true);



        // this.current_test_name = '5 | 3 | 2 | true';
        // assert.equal(validateThreeNodes.solve(tree, 5, 3, 2), true);

    }

    test_2() {

        /**
         * false
            View Outputs Side By Side
            Input(s)
            {
            "nodeOne": "5",
            "nodeThree": "1",
            "nodeTwo": "8",
            "tree": {
                "nodes": [
                {"id": "0", "left": null, "right": null, "value": 0},
                {"id": "1", "left": "0", "right": null, "value": 1},
                {"id": "2", "left": "1", "right": null, "value": 2},
                {"id": "3", "left": "2", "right": "4", "value": 3},
                {"id": "4", "left": null, "right": null, "value": 4},
                {"id": "5", "left": "3", "right": "7", "value": 5},
                {"id": "6", "left": null, "right": null, "value": 6},
                {"id": "7", "left": "6", "right": "8", "value": 7},
                {"id": "8", "left": null, "right": null, "value": 8}
                ],
                "root": "5"
            }
            }
         */

        const validateThreeNodes = new this.Problem();
        const tree = new BST(5);
        tree.left = new BST(3);
        tree.left.left = new BST(2);
        tree.left.left.left = new BST(1);
        tree.left.left.left.left = new BST(0);
        tree.left.right = new BST(4);
        tree.right = new BST(7);
        tree.right.left = new BST(6);
        tree.right.right = new BST(8);

        const nodeOne = tree;
        const nodeTwo = tree.left.left.left;
        const nodeThree = tree.left.left;

        this.current_test_name = '5 | 1 | 8 | false';
        assert.equal(validateThreeNodes.solve(nodeOne, nodeTwo, nodeThree), false);
    }

    test_3() {

        /**
         * false
            View Outputs Side By Side
            Input(s)
            {
            "nodeOne": "8",
            "nodeThree": "2",
            "nodeTwo": "5",
            "tree": {
                "nodes": [
                {"id": "0", "left": null, "right": null, "value": 0},
                {"id": "1", "left": "0", "right": null, "value": 1},
                {"id": "2", "left": "1", "right": null, "value": 2},
                {"id": "3", "left": "2", "right": "4", "value": 3},
                {"id": "4", "left": null, "right": null, "value": 4},
                {"id": "5", "left": "3", "right": "7", "value": 5},
                {"id": "6", "left": null, "right": null, "value": 6},
                {"id": "7", "left": "6", "right": "8", "value": 7},
                {"id": "8", "left": null, "right": null, "value": 8}
                ],
                "root": "5"
            }
            }
         */

        const validateThreeNodes = new this.Problem();
        const tree = new BST(5);
        tree.left = new BST(3);
        tree.left.left = new BST(2);
        tree.left.left.left = new BST(1);
        tree.left.left.left.left = new BST(0);
        tree.left.right = new BST(4);
        tree.right = new BST(7);
        tree.right.left = new BST(6);
        tree.right.right = new BST(8);

        const nodeOne = tree.right.right;
        const nodeTwo = tree.left;
        const nodeThree = tree.left.left;

        this.current_test_name = '8 | 2 | 5 | false';
        assert.equal(validateThreeNodes.solve(nodeOne, nodeTwo, nodeThree), false);


    }

    test_4() {

        const validateThreeNodes = new this.Problem();

        /**
         * 
         *       
      2
       \
        3
         \
          4
           \
            5
             \
              6
               \
                7
                 \
                  8
                   \
                    9
         * true
        View Outputs Side By Side
        Input(s)
        {
          "nodeOne": "2",
          "nodeThree": "8",
          "nodeTwo": "5",
          "tree": {
            "nodes": [
              {"id": "1", "left": null, "right": null, "value": 1},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": "4", "value": 3},
              {"id": "4", "left": null, "right": "5", "value": 4},
              {"id": "5", "left": null, "right": "6", "value": 5},
              {"id": "6", "left": null, "right": "7", "value": 6},
              {"id": "7", "left": null, "right": "8", "value": 7},
              {"id": "8", "left": null, "right": "9", "value": 8},
              {"id": "9", "left": null, "right": null, "value": 9}
            ],
            "root": "2"
          }
        }
         */


        const tree = new BST(2);
        tree.right = new BST(3);
        tree.right.right = new BST(4);
        tree.right.right.right = new BST(5);
        tree.right.right.right.right = new BST(6);
        tree.right.right.right.right.right = new BST(7);
        tree.right.right.right.right.right.right = new BST(8);
        tree.right.right.right.right.right.right.right = new BST(9);

        // Nodes you mentioned in the comment
        const nodeOne = tree; // Value: 2
        const nodeTwo = tree.right.right.right; // Value: 5
        const nodeThree = tree.right.right.right.right.right.right; // Value: 8

        this.current_test_name = '2 | 5 | 8 | true';
        assert.equal(validateThreeNodes.solve(nodeOne, nodeTwo, nodeThree), true);

    }

    test_5() {
        /**
         6
       / \
      4   8
     /   / \
    3   7   9
   /
  1
   \
    2

         * true
            View Outputs Side By Side
            Input(s)
            {
            "nodeOne": "4",
            "nodeThree": "2",
            "nodeTwo": "1",
            "tree": {
                "nodes": [
                {"id": "1", "left": null, "right": "2", "value": 1},
                {"id": "2", "left": null, "right": null, "value": 2},
                {"id": "3", "left": "1", "right": null, "value": 3},
                {"id": "4", "left": "3", "right": null, "value": 4},
                {"id": "5", "left": null, "right": "5", "value": 5},
                {"id": "6", "left": "4", "right": "8", "value": 6},
                {"id": "7", "left": null, "right": null, "value": 7},
                {"id": "8", "left": "7", "right": "9", "value": 8},
                {"id": "9", "left": null, "right": null, "value": 9}
                ],
                "root": "6"
            }
            }
         */

        const validateThreeNodes = new this.Problem();
        const tree = {
            value: 6,
            left: {
                value: 4,
                left: {
                    value: 3,
                    left: {
                        value: 1,
                        left: null,
                        right: {
                            value: 2,
                            left: null,
                            right: null,
                        },
                    },
                    right: null,
                },
                right: null,
            },
            right: {
                value: 8,
                left: {
                    value: 7,
                    left: null,
                    right: null,
                },
                right: {
                    value: 9,
                    left: null,
                    right: null,
                },
            },
        };

        // Nodes you mentioned in the comment
        const nodeOne = tree.left; // Value: 4
        const nodeTwo = tree.left.left.left; // Value: 1
        const nodeThree = tree.left.left.left.right; // Value: 2


        this.current_test_name = '1 | 4 | 2 | true';
        assert.equal(validateThreeNodes.solve(nodeOne, nodeTwo, nodeThree), true);
    }

    test_6() {
        /**
         * false
            View Outputs Side By Side
            Input(s)
            {
            "nodeOne": "1",
            "nodeThree": "3",
            "nodeTwo": "2",
            "tree": {
                "nodes": [
                {"id": "1", "left": null, "right": null, "value": 1},
                {"id": "2", "left": "1", "right": "3", "value": 2},
                {"id": "3", "left": null, "right": "4", "value": 3},
                {"id": "4", "left": null, "right": null, "value": 4}
                ],
                "root": "2"
            }
            }
         */

        const validateThreeNodes = new this.Problem();

        const tree = new BST(2);
        tree.left = new BST(1);
        tree.right = new BST(3);
        tree.right.right = new BST(4);

        const nodeOne = tree.left;
        const nodeTwo = tree;
        const nodeThree = tree.right;

        this.current_test_name = '1 | 2 | 3 | false';
        assert.equal(validateThreeNodes.solve(nodeOne, nodeTwo, nodeThree), false);
    }

    test_7() {

        /**
         * false
            View Outputs Side By Side
            Input(s)
            {
            "nodeOne": "2",
            "nodeThree": "13",
            "nodeTwo": "4",
            "tree": {
                "nodes": [
                {"id": "1", "left": null, "right": null, "value": 1},
                {"id": "2", "left": "1", "right": null, "value": 2},
                {"id": "3", "left": "2", "right": null, "value": 3},
                {"id": "4", "left": "3", "right": "5", "value": 4},
                {"id": "5", "left": null, "right": "7", "value": 5},
                {"id": "6", "left": null, "right": null, "value": 6},
                {"id": "7", "left": "6", "right": null, "value": 7},
                {"id": "8", "left": "4", "right": "10", "value": 8},
                {"id": "9", "left": null, "right": null, "value": 9},
                {"id": "10", "left": "9", "right": "14", "value": 10},
                {"id": "11", "left": null, "right": null, "value": 11},
                {"id": "12", "left": "11", "right": "13", "value": 12},
                {"id": "13", "left": null, "right": null, "value": 13},
                {"id": "14", "left": "12", "right": null, "value": 14}
                ],
                "root": "8"
            }
            }
         */

        const validateThreeNodes = new this.Problem();

        const tree = new BST(8);
        tree.left = new BST(4);
        tree.left.left = new BST(3);
        tree.left.left.left = new BST(2);
        tree.left.left.left.left = new BST(1);
        tree.left.right = new BST(5);
        tree.left.right.right = new BST(7);
        tree.left.right.right.left = new BST(6);
        tree.right = new BST(10);
        tree.right.left = new BST(9);
        tree.right.right = new BST(14);
        tree.right.right.left = new BST(12);
        tree.right.right.left.left = new BST(11);
        tree.right.right.left.right = new BST(13);
        tree.right.right.right = new BST(14);

        const nodeOne = tree.left.left.left;
        const nodeTwo = tree.left;
        const nodeThree = tree.right.right.left.right;

        this.current_test_name = '1 | 4 | 13 | false';
        assert.equal(validateThreeNodes.solve(nodeOne, nodeTwo, nodeThree), false);


    }

    test_8() {

        /**
         * true
            View Outputs Side By Side
            Input(s)
            {
            "nodeOne": "8",
            "nodeThree": "1",
            "nodeTwo": "7",
            "tree": {
                "nodes": [
                {"id": "1", "left": null, "right": null, "value": 1},
                {"id": "2", "left": "1", "right": null, "value": 2},
                {"id": "3", "left": "2", "right": null, "value": 3},
                {"id": "4", "left": "3", "right": null, "value": 4},
                {"id": "5", "left": "4", "right": null, "value": 5},
                {"id": "6", "left": "5", "right": null, "value": 6},
                {"id": "7", "left": "6", "right": null, "value": 7},
                {"id": "8", "left": "7", "right": "9", "value": 8},
                {"id": "9", "left": null, "right": null, "value": 9}
                ],
                "root": "8"
            }
            }
         */

        const validateThreeNodes = new this.Problem();

        const tree = new BST(8);
        tree.left = new BST(7);
        tree.left.left = new BST(6);
        tree.left.left.left = new BST(5);
        tree.left.left.left.left = new BST(4);
        tree.left.left.left.left.left = new BST(3);
        tree.left.left.left.left.left.left = new BST(2);
        tree.left.left.left.left.left.left.left = new BST(1);
        tree.right = new BST(9);

        const nodeOne = tree.left.left.left.left.left.left.left;
        const nodeTwo = tree.left.left.left.left.left.left;
        const nodeThree = tree.left.left.left.left.left;

        this.current_test_name = '1 | 7 | 6 | true';
        assert.equal(validateThreeNodes.solve(nodeOne, nodeTwo, nodeThree), true);
    }

    test_9() {

        /**
         * false
            View Outputs Side By Side
            Input(s)
            {
            "nodeOne": "2",
            "nodeThree": "3",
            "nodeTwo": "1",
            "tree": {
                "nodes": [
                {"id": "1", "left": null, "right": null, "value": 1},
                {"id": "2", "left": "1", "right": null, "value": 2},
                {"id": "3", "left": "2", "right": null, "value": 3}
                ],
                "root": "3"
                }
            }
         */

        const validateThreeNodes = new this.Problem();

        const tree = {
            value: 3,
            left: {
                value: 2,
                left: {
                    value: 1,
                    left: null,
                    right: null,
                },
                right: null,
            },
            right: null,
        };

        // Nodes you mentioned in the comment
        const nodeOne = tree.left; // Value: 2
        const nodeTwo = tree.left.left; // Value: 1
        const nodeThree = tree; // Value: 3

        this.current_test_name = '1 | 2 | 3 | false';
        assert.equal(validateThreeNodes.solve(nodeOne, nodeTwo, nodeThree), false);

    }

    test_10() {
        /**
         * true
            View Outputs Side By Side
            Input(s)
            {
            "nodeOne": "1",
            "nodeThree": "3",
            "nodeTwo": "2",
            "tree": {
                "nodes": [
                {"id": "1", "left": null, "right": null, "value": 1},
                {"id": "2", "left": "1", "right": null, "value": 2},
                {"id": "3", "left": "2", "right": null, "value": 3}
                ],
                "root": "3"
            }
            }
         */

        const validateThreeNodes = new this.Problem();

        const tree = new BST(3);
        tree.left = new BST(2);
        tree.left.left = new BST(1);

        const nodeOne = tree.left.left;
        const nodeTwo = tree.left;
        const nodeThree = tree;

        this.current_test_name = '1 | 2 | 3 | true';
        assert.equal(validateThreeNodes.solve(nodeOne, nodeTwo, nodeThree), true);
    }

}


class MaxPathPathSum extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());

    }

    test_1() {
        /**
         * 18
        View Outputs Side By Side
        Input(s)
        {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "3", "left": "6", "right": "7", "value": 3},
              {"id": "7", "left": null, "right": null, "value": 7},
              {"id": "6", "left": null, "right": null, "value": 6},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "5", "left": null, "right": null, "value": 5},
              {"id": "4", "left": null, "right": null, "value": 4}
            ],
            "root": "1"
          }
        }
         */

        const maxPathSum = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.left.left = new BST(4);
        tree.left.right = new BST(5);
        tree.right = new BST(3);
        tree.right.left = new BST(6);
        tree.right.right = new BST(7);

        this.current_test_name = '1 | 3 | 6 | 7 | 18';
        assert.equal(maxPathSum.solve(tree), 18);

    }

    test_2() {

        /**
         * 6
            View Outputs Side By Side
            Input(s)
            {
            "tree": {
                "nodes": [
                {"id": "1", "left": "2", "right": "3", "value": 1},
                {"id": "3", "left": null, "right": null, "value": 3},
                {"id": "2", "left": null, "right": null, "value": 2}
                ],
                "root": "1"
            }
            }
         */

        const maxPathSum = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.right = new BST(3);

        this.current_test_name = '1 | 2 | 3 | 6';
        assert.equal(maxPathSum.solve(tree), 6);
    }

    test_3() {

        /**
         * 3
            View Outputs Side By Side
            Input(s)
            {
            "tree": {
                "nodes": [
                {"id": "1", "left": "2", "right": "-1", "value": 1},
                {"id": "-1", "left": null, "right": null, "value": -1},
                {"id": "2", "left": null, "right": null, "value": 2}
                ],
                "root": "1"
            }
            }
         */

        const maxPathSum = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.right = new BST(-1);

        this.current_test_name = '1 | 2 | -1 | 3';
        assert.equal(maxPathSum.solve(tree), 3);
    }

    test_4() {

        /**
         * 6
            View Outputs Side By Side
            Input(s)
            {
            "tree": {
                "nodes": [
                {"id": "1", "left": "-5", "right": "3", "value": 1},
                {"id": "3", "left": null, "right": null, "value": 3},
                {"id": "-5", "left": "6", "right": null, "value": -5},
                {"id": "6", "left": null, "right": null, "value": 6}
                ],
                "root": "1"
            }
            }
         */

        const maxPathSum = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(-5);
        tree.left.left = new BST(6);
        tree.right = new BST(3);

        this.current_test_name = '1 | -5 | 6 | 3 | 6';

        assert.equal(maxPathSum.solve(tree), 6);
    }

    test_5() {
        /**
         * 
         1
       /   \
    -10    -5
    /  \    / \
   30  45 -20 -21
  / \  / \  / \
 5  1 3 -3 100  2

         * 154
        View Outputs Side By Side
        Input(s)
        {
        "tree": {
            "nodes": [
            {"id": "1", "left": "-10", "right": "-5", "value": 1},
            {"id": "-5", "left": "-20", "right": "-21", "value": -5},
            {"id": "-21", "left": "100-2", "right": "1-3", "value": -21},
            {"id": "1-3", "left": null, "right": null, "value": 1},
            {"id": "100-2", "left": null, "right": null, "value": 100},
            {"id": "-20", "left": "100", "right": "2", "value": -20},
            {"id": "2", "left": null, "right": null, "value": 2},
            {"id": "100", "left": null, "right": null, "value": 100},
            {"id": "-10", "left": "30", "right": "45", "value": -10},
            {"id": "45", "left": "3", "right": "-3", "value": 45},
            {"id": "-3", "left": null, "right": null, "value": -3},
            {"id": "3", "left": null, "right": null, "value": 3},
            {"id": "30", "left": "5", "right": "1-2", "value": 30},
            {"id": "1-2", "left": null, "right": null, "value": 1},
            {"id": "5", "left": null, "right": null, "value": 5}
            ],
            "root": "1"
        }
        }
         */

        const maxPathSum = new this.Problem();
        const tree = {
            value: 1,
            left: {
                value: -10,
                left: {
                    value: 30,
                    left: {
                        value: 5,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: 1,
                        left: null,
                        right: null,
                    },
                },
                right: {
                    value: 45,
                    left: {
                        value: 3,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: -3,
                        left: null,
                        right: null,
                    },
                },
            },
            right: {
                value: -5,
                left: {
                    value: -20,
                    left: {
                        value: 100,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: 2,
                        left: null,
                        right: null,
                    },
                },
                right: {
                    value: -21,
                    left: {
                        value: 100,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: 1,
                        left: null,
                        right: null,
                    },
                },
            },
        };


        this.current_test_name = '1 | -10 | 30 | 5 | 1 | 45 | 3 | -3 | -5 | -20 | 100 | 2 | -21 | 100 | 1 | 154';

        assert.equal(maxPathSum.solve(tree), 154);


    }

    test_6() {

        /** 
         * 201
            View Outputs Side By Side
            Input(s)
            {
            "tree": {
                "nodes": [
                {"id": "1", "left": "-10", "right": "-5", "value": 1},
                {"id": "-5", "left": "-20", "right": "-21", "value": -5},
                {"id": "-21", "left": "100-3", "right": "1-3", "value": -21},
                {"id": "1-3", "left": null, "right": null, "value": 1},
                {"id": "100-3", "left": null, "right": null, "value": 100},
                {"id": "-20", "left": "100-2", "right": "2", "value": -20},
                {"id": "2", "left": null, "right": null, "value": 2},
                {"id": "100-2", "left": null, "right": null, "value": 100},
                {"id": "-10", "left": "30", "right": "45", "value": -10},
                {"id": "45", "left": "3", "right": "-3", "value": 45},
                {"id": "-3", "left": null, "right": null, "value": -3},
                {"id": "3", "left": null, "right": null, "value": 3},
                {"id": "30", "left": "5", "right": "1-2", "value": 30},
                {"id": "1-2", "left": null, "right": null, "value": 1},
                {"id": "5", "left": "100", "right": null, "value": 5},
                {"id": "100", "left": null, "right": null, "value": 100}
                ],
                "root": "1"
            }
            }
         */

        const maxPathSum = new this.Problem();
        const tree = {
            value: 1,
            left: {
                value: -10,
                left: {
                    value: 30,
                    left: {
                        value: 5,
                        left: {
                            value: 100,
                            left: null,
                            right: null,
                        },
                        right: null,
                    },
                    right: {
                        value: 1,
                        left: null,
                        right: null,
                    },
                },
                right: {
                    value: 45,
                    left: {
                        value: 3,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: -3,
                        left: null,
                        right: null,
                    },
                },
            },
            right: {
                value: -5,
                left: {
                    value: -20,
                    left: {
                        value: 100,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: 2,
                        left: null,
                        right: null,
                    },
                },
                right: {
                    value: -21,
                    left: {
                        value: 100,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: 1,
                        left: null,
                        right: null,
                    },
                },
            },
        };

        this.current_test_name = '1 | -10 | 30 | 5 | 100 | 1 | 45 | 3 | -3 | -5 | -20 | 100 | 2 | -21 | 100 | 1 => 201';

        assert.equal(maxPathSum.solve(tree), 201);
    }

    test_7() {

        /**
         * 
        1
       /   \
    -10    -5
    /  \    / \
   30  75 -20 -21
  / \  / \  / \
 5  1 3 -3 100  1
  \
 100
 
        203
            View Outputs Side By Side
            Input(s)
            {
            "tree": {
                "nodes": [
                {"id": "1", "left": "-10", "right": "-5", "value": 1},
                {"id": "-5", "left": "-20", "right": "-21", "value": -5},
                {"id": "-21", "left": "100-3", "right": "1-3", "value": -21},
                {"id": "1-3", "left": null, "right": null, "value": 1},
                {"id": "100-3", "left": null, "right": null, "value": 100},
                {"id": "-20", "left": "100-2", "right": "2", "value": -20},
                {"id": "2", "left": null, "right": null, "value": 2},
                {"id": "100-2", "left": null, "right": null, "value": 100},
                {"id": "-10", "left": "30", "right": "75", "value": -10},
                {"id": "75", "left": "3", "right": "-3", "value": 75},
                {"id": "-3", "left": null, "right": null, "value": -3},
                {"id": "3", "left": null, "right": null, "value": 3},
                {"id": "30", "left": "5", "right": "1-2", "value": 30},
                {"id": "1-2", "left": null, "right": null, "value": 1},
                {"id": "5", "left": "100", "right": null, "value": 5},
                {"id": "100", "left": null, "right": null, "value": 100}
                ],
                "root": "1"
            }
            }
         */

        const maxPathSum = new this.Problem();
        const tree = {
            value: 1,
            left: {
                value: -10,
                left: {
                    value: 30,
                    left: {
                        value: 5,
                        left: {
                            value: 100,
                            left: null,
                            right: null,
                        },
                        right: null,
                    },
                    right: {
                        value: 1,
                        left: null,
                        right: null,
                    },
                },
                right: {
                    value: 75,
                    left: {
                        value: 3,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: -3,
                        left: null,
                        right: null,
                    },
                },
            },
            right: {
                value: -5,
                left: {
                    value: -20,
                    left: {
                        value: 100,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: 2,
                        left: null,
                        right: null,
                    },
                },
                right: {
                    value: -21,
                    left: {
                        value: 100,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: 1,
                        left: null,
                        right: null,
                    },
                },
            },
        };


        this.current_test_name = '1 | -10 | 30 | 5 | 100 | 1 | 75 | 3 | -3 | -5 | -20 | 100 | 100 | 2 | -21 | 100 | 1 => 203';


        assert.equal(maxPathSum.solve(tree), 203);


    }

    test_8() {
        /**
         * 228
            View Outputs Side By Side
            Input(s)
            {
            "tree": {
                "nodes": [
                {"id": "1", "left": "-150", "right": "-5", "value": 1},
                {"id": "-5", "left": "-20", "right": "-21", "value": -5},
                {"id": "-21", "left": "100-4", "right": "1-3", "value": -21},
                {"id": "1-3", "left": null, "right": null, "value": 1},
                {"id": "100-4", "left": null, "right": null, "value": 100},
                {"id": "-20", "left": "100-3", "right": "2", "value": -20},
                {"id": "2", "left": null, "right": null, "value": 2},
                {"id": "100-3", "left": null, "right": null, "value": 100},
                {"id": "-150", "left": "30", "right": "75", "value": -150},
                {"id": "75", "left": "3", "right": "-3", "value": 75},
                {"id": "-3", "left": null, "right": null, "value": -3},
                {"id": "3", "left": "150", "right": "-8", "value": 3},
                {"id": "-8", "left": null, "right": null, "value": -8},
                {"id": "150", "left": null, "right": null, "value": 150},
                {"id": "30", "left": "5", "right": "1-2", "value": 30},
                {"id": "1-2", "left": "5-2", "right": "10", "value": 1},
                {"id": "10", "left": null, "right": null, "value": 10},
                {"id": "5-2", "left": null, "right": null, "value": 5},
                {"id": "5", "left": "100", "right": "100-2", "value": 5},
                {"id": "100-2", "left": null, "right": null, "value": 100},
                {"id": "100", "left": null, "right": null, "value": 100}
                ],
                "root": "1"
            }
            }
         */

        const maxPathSum = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(-150);
        tree.left.left = new BST(30);
        tree.left.left.left = new BST(5);
        tree.left.left.left.left = new BST(100);
        tree.left.left.left.right = new BST(100);
        tree.left.left.right = new BST(1);
        tree.left.left.right.left = new BST(5);
        tree.left.left.right.right = new BST(10);
        tree.left.right = new BST(75);
        tree.left.right.left = new BST(3);
        tree.left.right.left.left = new BST(150);
        tree.left.right.left.right = new BST(-8);
        tree.left.right.right = new BST(-3);
        tree.right = new BST(-5);
        tree.right.left = new BST(-20);
        tree.right.left.left = new BST(100);
        tree.right.left.right = new BST(2);
        tree.right.right = new BST(-21);
        tree.right.right.left = new BST(100);
        tree.right.right.right = new BST(1);

        this.current_test_name = '1 | -150 | 30 | 5 | 100 | 100 | 1 | 5 | 10 | 75 | 3 | 150 | -8 | -3 | -5 | -20 | 100 | 2 | -21 | 100 | 1 => 228';

        assert.equal(maxPathSum.solve(tree), 228);

    }

    test_9() {

        /**
         * 304
            View Outputs Side By Side
            Input(s)
            {
            "tree": {
                "nodes": [
                {"id": "1", "left": "-150", "right": "-5", "value": 1},
                {"id": "-5", "left": "-20", "right": "-21", "value": -5},
                {"id": "-21", "left": "100-4", "right": "1-3", "value": -21},
                {"id": "1-3", "left": null, "right": null, "value": 1},
                {"id": "100-4", "left": null, "right": null, "value": 100},
                {"id": "-20", "left": "100-3", "right": "2", "value": -20},
                {"id": "2", "left": null, "right": null, "value": 2},
                {"id": "100-3", "left": null, "right": null, "value": 100},
                {"id": "-150", "left": "30", "right": "75", "value": -150},
                {"id": "75", "left": "3", "right": "-3", "value": 75},
                {"id": "-3", "left": null, "right": null, "value": -3},
                {"id": "3", "left": "150", "right": "151", "value": 3},
                {"id": "151", "left": null, "right": null, "value": 151},
                {"id": "150", "left": null, "right": null, "value": 150},
                {"id": "30", "left": "5", "right": "1-2", "value": 30},
                {"id": "1-2", "left": "5-2", "right": "10", "value": 1},
                {"id": "10", "left": null, "right": null, "value": 10},
                {"id": "5-2", "left": null, "right": null, "value": 5},
                {"id": "5", "left": "100", "right": "100-2", "value": 5},
                {"id": "100-2", "left": null, "right": null, "value": 100},
                {"id": "100", "left": null, "right": null, "value": 100}
                ],
                "root": "1"
            }
            }
         */

        const maxPathSum = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(-150);
        tree.left.left = new BST(30);
        tree.left.left.left = new BST(5);
        tree.left.left.left.left = new BST(100);
        tree.left.left.left.right = new BST(100);
        tree.left.left.right = new BST(1);
        tree.left.left.right.left = new BST(5);
        tree.left.left.right.right = new BST(10);
        tree.left.right = new BST(75);
        tree.left.right.left = new BST(3);
        tree.left.right.left.left = new BST(150);
        tree.left.right.left.right = new BST(151);
        tree.left.right.right = new BST(-3);
        tree.right = new BST(-5);
        tree.right.left = new BST(-20);
        tree.right.left.left = new BST(100);
        tree.right.left.right = new BST(2);
        tree.right.right = new BST(-21);
        tree.right.right.left = new BST(100);
        tree.right.right.right = new BST(1);

        this.current_test_name = '1 | -150 | 30 | 5 | 100 | 100 | 1 | 5 | 10 | 75 | 3 | 150 | 151 | -3 | -5 | -20 | 100 | 2 | -21 | 100 | 1 => 304';

        assert.equal(maxPathSum.solve(tree), 304);

    }


}

function createTreeFromData(data) {
    const nodes = new Map();
    const rootId = data.tree.root;

    // Create node objects for each entry in the data
    data.tree.nodes.forEach(node => {
        nodes.set(node.id, {
            value: node.value,
            left: null,
            right: null
        });
    });

    // Connect parent nodes to their children
    data.tree.nodes.forEach(node => {
        const currentNode = nodes.get(node.id);
        currentNode.left = node.left ? nodes.get(node.left) : null;
        currentNode.right = node.right ? nodes.get(node.right) : null;
    });

    // Return the root node
    return nodes.get(rootId);
}


class findNodesDistanceK extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());

    }

    test_1() {

        /**
         * [7, 8, 2]
            View Outputs Side By Side
            Input(s)
            {
            "k": 2,
            "target": 3,
            "tree": {
                "nodes": [
                {"id": "1", "left": "2", "right": "3", "value": 1},
                {"id": "2", "left": "4", "right": "5", "value": 2},
                {"id": "3", "left": null, "right": "6", "value": 3},
                {"id": "4", "left": null, "right": null, "value": 4},
                {"id": "5", "left": null, "right": null, "value": 5},
                {"id": "6", "left": "7", "right": "8", "value": 6},
                {"id": "7", "left": null, "right": null, "value": 7},
                {"id": "8", "left": null, "right": null, "value": 8}
                ],
                "root": "1"
            }
            }
         */

        const findNodesDistanceK = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.left.left = new BST(4);
        tree.left.right = new BST(5);
        tree.right = new BST(3);
        tree.right.right = new BST(6);
        tree.right.right.left = new BST(7);
        tree.right.right.right = new BST(8);

        this.current_test_name = '(1 | 2 | 4 | 5 | 3 | 6 | 7 | 8 | 2 | 2), 3, 2 => [7, 8, 2]';
        assert.deepStrictEqual(findNodesDistanceK.solve(tree, 3, 2), [7, 8, 2]);


    }

    test_2() {
        /**
         * [5]
            View Outputs Side By Side
            Input(s)
            {
            "k": 3,
            "target": 2,
            "tree": {
                "nodes": [
                {"id": "1", "left": "2", "right": null, "value": 1},
                {"id": "2", "left": "3", "right": null, "value": 2},
                {"id": "3", "left": "4", "right": null, "value": 3},
                {"id": "4", "left": "5", "right": null, "value": 4},
                {"id": "5", "left": null, "right": null, "value": 5}
                ],
                "root": "1"
            }
            }
         */

        const findNodesDistanceK = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.left.left = new BST(3);
        tree.left.left.left = new BST(4);
        tree.left.left.left.left = new BST(5);

        this.current_test_name = '(5 | 4 | 3 | 2), 2, 3 => [5]';
        assert.deepStrictEqual(findNodesDistanceK.solve(tree, 2, 3), [5]);

    }

    test_3() {
        /**
         * [4]
        View Outputs Side By Side
        Input(s)
        {
        "k": 6,
        "target": 8,
        "tree": {
            "nodes": [
            {"id": "1", "left": "2", "right": "3", "value": 1},
            {"id": "2", "left": "4", "right": null, "value": 2},
            {"id": "3", "left": "5", "right": "6", "value": 3},
            {"id": "4", "left": null, "right": null, "value": 4},
            {"id": "5", "left": null, "right": null, "value": 5},
            {"id": "6", "left": null, "right": "7", "value": 6},
            {"id": "7", "left": null, "right": "8", "value": 7},
            {"id": "8", "left": null, "right": null, "value": 8}
            ],
            "root": "1"
        }
        }
        */


        const findNodesDistanceK = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.left.left = new BST(4);
        tree.right = new BST(3);
        tree.right.left = new BST(5);
        tree.right.right = new BST(6);
        tree.right.right.right = new BST(7);
        tree.right.right.right.right = new BST(8);

        this.current_test_name = '(4 | 2 | 1 | 3 | 6 | 7 | 8), 6, 8 => [4]';
        assert.deepStrictEqual(findNodesDistanceK.solve(tree, 8, 6), [4]);

    }

    test_4() {

        /**
         * [5, 6, 1]
            View Outputs Side By Side
            Input(s)
            {
            "k": 1,
            "target": 3,
            "tree": {
                "nodes": [
                {"id": "1", "left": "2", "right": "3", "value": 1},
                {"id": "2", "left": "4", "right": null, "value": 2},
                {"id": "3", "left": "5", "right": "6", "value": 3},
                {"id": "4", "left": null, "right": null, "value": 4},
                {"id": "5", "left": null, "right": null, "value": 5},
                {"id": "6", "left": null, "right": "7", "value": 6},
                {"id": "7", "left": null, "right": "8", "value": 7},
                {"id": "8", "left": null, "right": null, "value": 8}
                ],
                "root": "1"
            }
            }
         */

        const findNodesDistanceK = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.left.left = new BST(4);
        tree.right = new BST(3);
        tree.right.left = new BST(5);
        tree.right.right = new BST(6);
        tree.right.right.right = new BST(7);
        tree.right.right.right.right = new BST(8);

        this.current_test_name = '(4 | 2 | 1 | 3 | 6 | 7 | 8), 3, 1 => [5, 6, 1]';
        assert.deepStrictEqual(findNodesDistanceK.solve(tree, 3, 1), [5, 6, 1]);
    }

    test_5() {

        /**
         * [4, 5, 6, 7]
            View Outputs Side By Side
            Input(s)
            {
            "k": 2,
            "target": 1,
            "tree": {
                "nodes": [
                {"id": "1", "left": "2", "right": "3", "value": 1},
                {"id": "2", "left": "4", "right": "5", "value": 2},
                {"id": "3", "left": "6", "right": "7", "value": 3},
                {"id": "4", "left": null, "right": null, "value": 4},
                {"id": "5", "left": null, "right": null, "value": 5},
                {"id": "6", "left": null, "right": null, "value": 6},
                {"id": "7", "left": null, "right": null, "value": 7}
                ],
                "root": "1"
            }
            }
         */

        const findNodesDistanceK = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.left.left = new BST(4);
        tree.left.right = new BST(5);
        tree.right = new BST(3);
        tree.right.left = new BST(6);
        tree.right.right = new BST(7);

        this.current_test_name = '(4 | 2 | 1 | 3 | 6 | 7), 1, 2 => [4, 5, 6, 7]';
        assert.deepStrictEqual(findNodesDistanceK.solve(tree, 1, 2), [4, 5, 6, 7]);

    }

    test_6() {

        /**
         * [9, 2]
            View Outputs Side By Side
            Input(s)
            {
            "k": 2,
            "target": 8,
            "tree": {
                "nodes": [
                {"id": "1", "left": "2", "right": "3", "value": 1},
                {"id": "2", "left": "4", "right": "5", "value": 2},
                {"id": "3", "left": "6", "right": "7", "value": 3},
                {"id": "4", "left": "8", "right": "9", "value": 4},
                {"id": "5", "left": null, "right": null, "value": 5},
                {"id": "6", "left": null, "right": null, "value": 6},
                {"id": "7", "left": null, "right": null, "value": 7},
                {"id": "8", "left": null, "right": null, "value": 8},
                {"id": "9", "left": null, "right": null, "value": 9}
                ],
                "root": "1"
            }
            }
         */

        const findNodesDistanceK = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.left.left = new BST(4);
        tree.left.left.left = new BST(8);
        tree.left.left.right = new BST(9);
        tree.left.right = new BST(5);
        tree.right = new BST(3);
        tree.right.left = new BST(6);
        tree.right.right = new BST(7);

        this.current_test_name = '(8 | 4 | 2 | 1 | 3 | 6 | 7 | 9), 8, 2 => [9, 2]';
        assert.deepStrictEqual(findNodesDistanceK.solve(tree, 8, 2), [9, 2]);

    }


    test_7() {

        /**
         * [7, 8]
            View Outputs Side By Side
            Input(s)
            {
            "k": 6,
            "target": 6,
            "tree": {
                "nodes": [
                {"id": "1", "left": "2", "right": "3", "value": 1},
                {"id": "2", "left": "4", "right": null, "value": 2},
                {"id": "3", "left": null, "right": "5", "value": 3},
                {"id": "4", "left": "6", "right": null, "value": 4},
                {"id": "5", "left": "7", "right": "8", "value": 5},
                {"id": "6", "left": null, "right": null, "value": 6},
                {"id": "7", "left": null, "right": null, "value": 7},
                {"id": "8", "left": null, "right": null, "value": 8}
                ],
                "root": "1"
            }
            }
         */

        const findNodesDistanceK = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.left.left = new BST(4);
        tree.left.left.left = new BST(6);
        tree.right = new BST(3);
        tree.right.left = new BST(5);
        tree.right.left.left = new BST(7);
        tree.right.left.right = new BST(8);

        this.current_test_name = '(6 | 4 | 2 | 1 | 3 | 5 | 7 | 8), 6, 6 => [7, 8]';
        assert.deepStrictEqual(findNodesDistanceK.solve(tree, 6, 6), [7, 8]);

    }

    test_8() {

        /**
         * []
            View Outputs Side By Side
            Input(s)
            {
            "k": 1,
            "target": 1,
            "tree": {
                "nodes": [
                {"id": "1", "left": null, "right": null, "value": 1}
                ],
                "root": "1"
            }
            }
         */

        const findNodesDistanceK = new this.Problem();

        const tree = new BST(1);

        this.current_test_name = '(1), 1, 1 => []';
        assert.deepStrictEqual(findNodesDistanceK.solve(tree, 1, 1), []);
    }

    test_9() {

        /**
         * []
            View Outputs Side By Side
            Input(s)
            {
            "k": 17,
            "target": 6,
            "tree": {
                "nodes": [
                {"id": "1", "left": "2", "right": "3", "value": 1},
                {"id": "2", "left": "4", "right": null, "value": 2},
                {"id": "3", "left": null, "right": "5", "value": 3},
                {"id": "4", "left": "6", "right": null, "value": 4},
                {"id": "5", "left": "7", "right": "8", "value": 5},
                {"id": "6", "left": null, "right": null, "value": 6},
                {"id": "7", "left": null, "right": null, "value": 7},
                {"id": "8", "left": null, "right": null, "value": 8}
                ],
                "root": "1"
            }
            }
         */

        const findNodesDistanceK = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.left.left = new BST(4);
        tree.left.left.left = new BST(6);
        tree.right = new BST(3);
        tree.right.left = new BST(5);
        tree.right.left.left = new BST(7);
        tree.right.left.right = new BST(8);

        this.current_test_name = '(6 | 4 | 2 | 1 | 3 | 5 | 7 | 8), 6, 17 => []';
        assert.deepStrictEqual(findNodesDistanceK.solve(tree, 6, 17), []);

    }

    test_10() {
        /**
         * [8, 9, 10, 11, 3]
            View Outputs Side By Side
            Input(s)
            {
            "k": 2,
            "target": 2,
            "tree": {
                "nodes": [
                {"id": "1", "left": "2", "right": "3", "value": 1},
                {"id": "2", "left": "4", "right": "5", "value": 2},
                {"id": "3", "left": "6", "right": "7", "value": 3},
                {"id": "4", "left": "8", "right": "9", "value": 4},
                {"id": "5", "left": "10", "right": "11", "value": 5},
                {"id": "6", "left": "12", "right": "13", "value": 6},
                {"id": "7", "left": null, "right": null, "value": 7},
                {"id": "8", "left": null, "right": null, "value": 8},
                {"id": "9", "left": null, "right": null, "value": 9},
                {"id": "10", "left": null, "right": null, "value": 10},
                {"id": "11", "left": null, "right": null, "value": 11},
                {"id": "12", "left": null, "right": null, "value": 12},
                {"id": "13", "left": null, "right": null, "value": 13}
                ],
                "root": "1"
            }
            }
         */

        const findNodesDistanceK = new this.Problem();

        const tree = new BST(1);
        tree.left = new BST(2);
        tree.left.left = new BST(4);
        tree.left.left.left = new BST(8);
        tree.left.left.right = new BST(9);
        tree.left.right = new BST(5);
        tree.left.right.left = new BST(10);
        tree.left.right.right = new BST(11);
        tree.right = new BST(3);
        tree.right.left = new BST(6);
        tree.right.left.left = new BST(12);
        tree.right.left.right = new BST(13);

        this.current_test_name = '(8 | 9 | 10 | 11 | 4 | 2 | 1 | 3 | 6 | 12 | 13 | 5), 2, 2 => [8, 9, 10, 11, 3]';
        assert.deepStrictEqual(findNodesDistanceK.solve(tree, 2, 2), [8, 9, 10, 11, 3]);

    }
}

class maxSumIncreasingSubsequence extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());
    }

    test_1() {

        /**
         * [110, [10, 20, 30, 50]]
            View Outputs Side By Side
            Input(s)
            {
            "array": [10, 70, 20, 30, 50, 11, 30]
            }
         */

        const maxSumIncreasingSubsequence = new this.Problem();

        this.current_test_name = '[10, 70, 20, 30, 50, 11, 30] => [110, [10, 20, 30, 50]]';
        assert.deepStrictEqual(maxSumIncreasingSubsequence.solve([10, 70, 20, 30, 50, 11, 30]), [110, [10, 20, 30, 50]]);

    }

    test_2() {
        /**
         * [1, [1]]
            View Outputs Side By Side
            Input(s)
            {
            "array": [1]
            }
         */

        const maxSumIncreasingSubsequence = new this.Problem();

        this.current_test_name = '[1] => [1, [1]]';
        assert.deepStrictEqual(maxSumIncreasingSubsequence.solve([1]), [1, [1]]);
    }

    test_3() {

        /**
         * [-1, [-1]]
            View Outputs Side By Side
            Input(s)
            {
            "array": [-1]
            }
         */

        const maxSumIncreasingSubsequence = new this.Problem();

        this.current_test_name = '[-1] => [-1, [-1]]';
        assert.deepStrictEqual(maxSumIncreasingSubsequence.solve([-1]), [-1, [-1]]);
    }


    test_4() {

        /**
         * [1, [1]]
            View Outputs Side By Side
            Input(s)
            {
            "array": [-1, 1]
            }

         */

        const maxSumIncreasingSubsequence = new this.Problem();

        this.current_test_name = '[-1, 1] => [1, [1]]';
        assert.deepStrictEqual(maxSumIncreasingSubsequence.solve([-1, 1]), [1, [1]]);

    }

    test_5() {
        /**
         * [5, [5]]
            View Outputs Side By Side
            Input(s)
            {
            "array": [5, 4, 3, 2, 1]
            }
         */

        const maxSumIncreasingSubsequence = new this.Problem();

        this.current_test_name = '[5, 4, 3, 2, 1] => [5, [5]]';
        assert.deepStrictEqual(maxSumIncreasingSubsequence.solve([5, 4, 3, 2, 1]), [5, [5]]);
    }

    test_6() {
        /**
         * [15, [1, 2, 3, 4, 5]]
            View Outputs Side By Side
            Input(s)
            {
            "array": [1, 2, 3, 4, 5]
            }
         */

        const maxSumIncreasingSubsequence = new this.Problem();

        this.current_test_name = '[1, 2, 3, 4, 5] => [15, [1, 2, 3, 4, 5]]';
        assert.deepStrictEqual(maxSumIncreasingSubsequence.solve([1, 2, 3, 4, 5]), [15, [1, 2, 3, 4, 5]]);
    }


    test_7() {

        /**
         * [-1, [-1]]
            View Outputs Side By Side
            Input(s)
            {
            "array": [-5, -4, -3, -2, -1]
            }
         */

        const maxSumIncreasingSubsequence = new this.Problem();

        this.current_test_name = '[-5, -4, -3, -2, -1] => [-1, [-1]]';
        assert.deepStrictEqual(maxSumIncreasingSubsequence.solve([-5, -4, -3, -2, -1]), [-1, [-1]]);
    }

    test_8() {

        /**
         * [35, [8, 12, 15]]
            View Outputs Side By Side
            Input(s)
            {
            "array": [8, 12, 2, 3, 15, 5, 7]
            }
         */

        const maxSumIncreasingSubsequence = new this.Problem();

        this.current_test_name = '[8, 12, 2, 3, 15, 5, 7] => [35, [8, 12, 15]]';
        assert.deepStrictEqual(maxSumIncreasingSubsequence.solve([8, 12, 2, 3, 15, 5, 7]), [35, [8, 12, 15]]);
    }

    test_9() {
        /**
         * [164, [10, 11, 14, 23, 25, 31, 50]]
            View Outputs Side By Side
            Input(s)
            {
            "array": [10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50]
            }
         */

        const maxSumIncreasingSubsequence = new this.Problem();
        this.current_test_name = '[10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50] => [164, [10, 11, 14, 23, 25, 31, 50]]';
        assert.deepStrictEqual(maxSumIncreasingSubsequence.solve([10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50]), [164, [10, 11, 14, 23, 25, 31, 50]]);

    }

    test_10() {
        /**
         * [45, [1, 2, 3, 4, 5, 6, 7, 8, 9]]
            View Outputs Side By Side
            Input(s)
            {
            "array": [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
         */

        const maxSumIncreasingSubsequence = new this.Problem();
        this.current_test_name = '[10, 1, 2, 3, 4, 5, 6, 7, 8, 9] => [45, [1, 2, 3, 4, 5, 6, 7, 8, 9]]';
        assert.deepStrictEqual(maxSumIncreasingSubsequence.solve([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [45, [1, 2, 3, 4, 5, 6, 7, 8, 9]]);

    }


}

class LongestCommonSubsequence extends ProblemTests {

    constructor(Problem) {
        super(Problem);


        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());

    }

    test_1() {
        /**
         * ["X", "Y", "Z", "W"]
            View Outputs Side By Side
            Input(s)
            {
            "str1": "ZXVVYZW",
            "str2": "XKYKZPW"
            }
         */

        const longestCommonSubsequence = new this.Problem();

        this.current_test_name = '"ZXVVYZW", "XKYKZPW" => ["X", "Y", "Z", "W"]';
        assert.deepStrictEqual(longestCommonSubsequence.solve("ZXVVYZW", "XKYKZPW"), ["X", "Y", "Z", "W"]);

    }

    test_2() {
        /**
         * []
            View Outputs Side By Side
            Input(s)
            {
            "str1": "",
            "str2": ""
            }
         */

        const longestCommonSubsequence = new this.Problem();

        this.current_test_name = '"", "" => []';
        assert.deepStrictEqual(longestCommonSubsequence.solve("", ""), []);
    }

    test_3() {
        /**
         * []
            View Outputs Side By Side
            Input(s)
            {
            "str1": "",
            "str2": "ABCDEFG"
            }
         */

        const longestCommonSubsequence = new this.Problem();

        this.current_test_name = '"", "ABCDEFG" => []';
        assert.deepStrictEqual(longestCommonSubsequence.solve("", "ABCDEFG"), []);

    }

    test_4() {
        /**
         * []
        View Outputs Side By Side
        Input(s)
        {
          "str1": "ABCDEFG",
          "str2": ""
        }
         */

        const longestCommonSubsequence = new this.Problem();

        this.current_test_name = '"ABCDEFG", "" => []';
        assert.deepStrictEqual(longestCommonSubsequence.solve("ABCDEFG", ""), []);
    }


    test_5() {
        /**
         * ["A", "B", "C", "D", "E", "F", "G"]
            View Outputs Side By Side
            Input(s)
            {
            "str1": "ABCDEFG",
            "str2": "ABCDEFG"
            }
         */

        const longestCommonSubsequence = new this.Problem();

        this.current_test_name = '"ABCDEFG", "ABCDEFG" => ["A", "B", "C", "D", "E", "F", "G"]';
        assert.deepStrictEqual(longestCommonSubsequence.solve("ABCDEFG", "ABCDEFG"), ["A", "B", "C", "D", "E", "F", "G"]);

    }

    test_6() {
        /**
         * ["A", "E"]
            View Outputs Side By Side
            Input(s)
            {
            "str1": "ABCDEFG",
            "str2": "APPLES"
            }
         */

        const longestCommonSubsequence = new this.Problem();

        this.current_test_name = '"ABCDEFG", "APPLES" => ["A", "E"]';
        assert.deepStrictEqual(longestCommonSubsequence.solve("ABCDEFG", "APPLES"), ["A", "E"]);
    }

    test_7() {

        /**
         * ["n", "t"]
            View Outputs Side By Side
            Input(s)
            {
            "str1": "clement",
            "str2": "antoine"
            }
         */

        const longestCommonSubsequence = new this.Problem();

        this.current_test_name = '"clement", "antoine" => ["n", "t"]';
        assert.deepStrictEqual(longestCommonSubsequence.solve("clement", "antoine"), ["n", "t"]);

    }


    test_8() {
        /**
         * ["8", "4", "2"]
        View Outputs Side By Side
        Input(s)
        {
          "str1": "8111111111111111142",
          "str2": "222222222822222222222222222222433333333332"
        }
         */


        const longestCommonSubsequence = new this.Problem();

        this.current_test_name = '"8111111111111111142", "222222222822222222222222222222433333333332" => ["8", "4", "2"]';
        assert.deepStrictEqual(longestCommonSubsequence.solve("8111111111111111142", "222222222822222222222222222222433333333332"), ["8", "4", "2"]);
    }


    test_9() {
        /**
         * ["C", "D", "E", "G", "H", "J", "K", "L", "W"]
            View Outputs Side By Side
            Input(s)
            {
            "str1": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "str2": "CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAG"
            }
         */

        const longestCommonSubsequence = new this.Problem();

        this.current_test_name = '"ABCDEFGHIJKLMNOPQRSTUVWXYZ", "CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAG" => ["C", "D", "E", "G", "H", "J", "K", "L", "W"]';
        assert.deepStrictEqual(longestCommonSubsequence.solve("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAG"), ["C", "D", "E", "G", "H", "J", "K", "L", "W"]);
    }

    test_10() {
        /**
         * ["C", "D", "E", "G", "H", "J", "K", "L", "T", "U", "V"]
            View Outputs Side By Side
            Input(s)
            {
            "str1": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "str2": "CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAGTUV"
            }
         */

        const longestCommonSubsequence = new this.Problem();
        assert.deepStrictEqual(longestCommonSubsequence.solve("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAGTUV"), ["C", "D", "E", "G", "H", "J", "K", "L", "T", "U", "V"]);
    }
}

class ContinuousMedianHandler extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());


    }

    test_1() {
        /**
         * [
            {
                "arguments": [5],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [10],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 7.5
            },
            {
                "arguments": [100],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 10
            }
            ]
         */

        const continuousMedianHandler = new this.Problem();

        this.current_test_name = '[5, 10, 100] => [7.5, 10]';
        continuousMedianHandler.insert(5);
        continuousMedianHandler.insert(10);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 7.5);
        continuousMedianHandler.insert(100);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 10);

    }

    test_2() {
        /**
         * [
            {
                "arguments": [5],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [10],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 7.5
            },
            {
                "arguments": [100],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 10
            }
            ]
         */

        const continuousMedianHandler = new this.Problem();

        this.current_test_name = '[5, 10, 100] => [7.5, 10]';
        continuousMedianHandler.insert(5);
        continuousMedianHandler.insert(10);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 7.5);
        continuousMedianHandler.insert(100);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 10);

    }

    test_3() {

        /**
         * [
            [
            {
                "arguments": [5],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [10],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [100],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 10
            },
            {
                "arguments": [200],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 55
            }
            ]
         */

        const continuousMedianHandler = new this.Problem();

        this.current_test_name = '[5, 10, 100, 200] => [10, 55]';
        continuousMedianHandler.insert(5);
        continuousMedianHandler.insert(10);
        continuousMedianHandler.insert(100);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 10);
        continuousMedianHandler.insert(200);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 55);

    }

    test_4() {
        /**
         * [
            {
                "arguments": [5],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [10],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [100],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [200],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [6],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 10
            },
            {
                "arguments": [13],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 11.5
            }
            ]
         */

        const continuousMedianHandler = new this.Problem();

        this.current_test_name = '[5, 10, 100, 200, 6, 13] => [10, 11.5]';
        continuousMedianHandler.insert(5);
        continuousMedianHandler.insert(10);
        continuousMedianHandler.insert(100);
        continuousMedianHandler.insert(200);
        continuousMedianHandler.insert(6);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 10);
        continuousMedianHandler.insert(13);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 11.5);

    }

    test_5() {
        /**
         * [
            {
                "arguments": [5],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [10],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [100],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [200],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [6],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [13],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [14],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 13
            },
            {
                "arguments": [50],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 13.5
            }
            ]
         */

        const continuousMedianHandler = new this.Problem();

        this.current_test_name = '[5, 10, 100, 200, 6, 13, 14, 50] => [13, 13.5]';
        continuousMedianHandler.insert(5);
        continuousMedianHandler.insert(10);
        continuousMedianHandler.insert(100);
        continuousMedianHandler.insert(200);
        continuousMedianHandler.insert(6);
        continuousMedianHandler.insert(13);
        continuousMedianHandler.insert(14);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 13);
        continuousMedianHandler.insert(50);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 13.5);

    }

    test_6() {
        /**
         * [
             {
                "arguments": [5],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [10],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [100],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [200],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [6],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [13],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [14],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [50],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [51],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 14
            },
            {
                "arguments": [52],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [],
                "method": "getMedian",
                "output": 32
            }
            ]
         */

        const continuousMedianHandler = new this.Problem();

        this.current_test_name = '[5, 10, 100, 200, 6, 13, 14, 50, 51, 52] => [14, 32]';
        continuousMedianHandler.insert(5);
        continuousMedianHandler.insert(10);
        continuousMedianHandler.insert(100);
        continuousMedianHandler.insert(200);
        continuousMedianHandler.insert(6);
        continuousMedianHandler.insert(13);
        continuousMedianHandler.insert(14);
        continuousMedianHandler.insert(50);
        continuousMedianHandler.insert(51);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 14);
        continuousMedianHandler.insert(52);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 32);


    }

    test_7() {
        /**
         * [
                {
                    "arguments": [5],
                    "method": "insert",
                    "output": null
                },
                {
                    "arguments": [10],
                    "method": "insert",
                    "output": null
                },
                {
                    "arguments": [100],
                    "method": "insert",
                    "output": null
                },
                {
                    "arguments": [200],
                    "method": "insert",
                    "output": null
                },
                {
                    "arguments": [6],
                    "method": "insert",
                    "output": null
                },
                {
                    "arguments": [13],
                    "method": "insert",
                    "output": null
                },
                {
                    "arguments": [14],
                    "method": "insert",
                    "output": null
                },
                {
                    "arguments": [50],
                    "method": "insert",
                    "output": null
                },
                {
                    "arguments": [51],
                    "method": "insert",
                    "output": null
                },
                {
                    "arguments": [52],
                    "method": "insert",
                    "output": null
                },
                {
                    "arguments": [1000],
                    "method": "insert",
                    "output": null
                },
                {
                    "arguments": [],
                    "method": "getMedian",
                    "output": 50
                },
                {
                    "arguments": [10000],
                    "method": "insert",
                    "output": null
                },
         */

        const continuousMedianHandler = new this.Problem();

        this.current_test_name = '[5, 10, 100, 200, 6, 13, 14, 50, 51, 52, 1000, 10000] => [50, 100]';
        continuousMedianHandler.insert(5);
        continuousMedianHandler.insert(10);
        continuousMedianHandler.insert(100);
        continuousMedianHandler.insert(200);
        continuousMedianHandler.insert(6);
        continuousMedianHandler.insert(13);
        continuousMedianHandler.insert(14);
        continuousMedianHandler.insert(50);
        continuousMedianHandler.insert(51);
        continuousMedianHandler.insert(52);
        continuousMedianHandler.insert(1000);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 50);
        continuousMedianHandler.insert(10000);
        assert.deepStrictEqual(continuousMedianHandler.getMedian(), 50.5);

    }

    test_8() {
        /**
         * [
            {
                "arguments": [5],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [10],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [100],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [200],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [6],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [13],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [14],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [50],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [51],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [52],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [1000],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [10000],
                "method": "insert",
                "output": null
            },
            {
                "arguments": [10001],
                "method": "insert",
                "output": null
            },
         */

        const continuousMedianHandler = new this.Problem();

        this.current_test_name = '[5, 10, 100, 200, 6, 13, 14, 50, 51, 52, 1000, 10000, 10001] => [100, 100]';
        continuousMedianHandler.insert(5);
        continuousMedianHandler.insert(10);
        continuousMedianHandler.insert(100);
        continuousMedianHandler.insert(200);
        continuousMedianHandler.insert(6);
        continuousMedianHandler.insert(13);
        continuousMedianHandler.insert(14);
        continuousMedianHandler.insert(50);
        continuousMedianHandler.insert(51);
        continuousMedianHandler.insert(52);
        continuousMedianHandler.insert(1000);
        continuousMedianHandler.insert(10000);
        continuousMedianHandler.insert(10001);
    }
}

class MinNumberOfJumps extends ProblemTests {


    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());

    }

    test_1() {


        this.current_test_name = '[3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3] => 4';
        const minNumberOfJumps = new this.Problem();
        assert.deepStrictEqual(minNumberOfJumps.solve([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]), 4);
    }

    test_2() {
        /**
         * 0
            View Outputs Side By Side
            Input(s)
            {
            "array": [1]
            }
         */

        this.current_test_name = '[1] => 0';
        const minNumberOfJumps = new this.Problem();
        assert.deepStrictEqual(minNumberOfJumps.solve([1]), 0);

    }

    test_3() {
        /**
         * 1
        View Outputs Side By Side
        Input(s)
        {
        "array": [1, 1]
        }
        */

        this.current_test_name = '[1, 1] => 1';
        const minNumberOfJumps = new this.Problem();
        assert.deepStrictEqual(minNumberOfJumps.solve([1, 1]), 1);

    }

    test_4() {
        /**
         * 1
            View Outputs Side By Side
            Input(s)
            {
            "array": [3, 1]
            }
         */

        this.current_test_name = '[3, 1] => 1';
        const minNumberOfJumps = new this.Problem();
        assert.deepStrictEqual(minNumberOfJumps.solve([3, 1]), 1);
    }


    test_5() {
        /**
         * 2
            View Outputs Side By Side
            Input(s)
            {
            "array": [1, 1, 1]
            }
         */

        this.current_test_name = '[1, 1, 1] => 2';
        const minNumberOfJumps = new this.Problem();
        assert.deepStrictEqual(minNumberOfJumps.solve([1, 1, 1]), 2);
    }

    test_6() {
        /**
         * 1
            View Outputs Side By Side
            Input(s)
            {
            "array": [2, 1, 1]
            }
         */

        this.current_test_name = '[2, 1, 1] => 1';
        const minNumberOfJumps = new this.Problem();
        assert.deepStrictEqual(minNumberOfJumps.solve([2, 1, 1]), 1);
    }

    test_7() {
        /**
         * 2
            View Outputs Side By Side
            Input(s)
            {
            "array": [2, 1, 2, 3, 1]
            }
         */

        this.current_test_name = '[2, 1, 2, 3, 1] => 2';
        const minNumberOfJumps = new this.Problem();
        assert.deepStrictEqual(minNumberOfJumps.solve([2, 1, 2, 3, 1]), 2);

    }

    test_8() {
        /**
         * 3
            View Outputs Side By Side
            Input(s)
            {
            "array": [2, 1, 2, 3, 1, 1, 1]
            }
         */

        this.current_test_name = '[2, 1, 2, 3, 1, 1, 1] => 3';
        const minNumberOfJumps = new this.Problem();
        assert.deepStrictEqual(minNumberOfJumps.solve([2, 1, 2, 3, 1, 1, 1]), 3);

    }


    test_9() {
        /**
         * 4
            View Outputs Side By Side
            Input(s)
            {
            "array": [2, 1, 2, 2, 1, 1, 1]
            }
         */

        this.current_test_name = '[2, 1, 2, 2, 1, 1, 1] => 4';
        const minNumberOfJumps = new this.Problem();
        assert.deepStrictEqual(minNumberOfJumps.solve([2, 1, 2, 2, 1, 1, 1]), 4);
    }


    test_10() {
        /**
         * 5
            View Outputs Side By Side
            Input(s)
            {
            "array": [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 6, 2, 1, 1, 1, 1]
            }
         */

        this.current_test_name = '[3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 6, 2, 1, 1, 1, 1] => 5';
        const minNumberOfJumps = new this.Problem();
        assert.deepStrictEqual(minNumberOfJumps.solve([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 6, 2, 1, 1, 1, 1]), 5);
    }


}

class MultiStringSearch extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());
    }


    test_1() {
        /**
         * [true, false, true, true, false, true, false]
            View Outputs Side By Side
            Input(s)
            {
            "bigString": "this is a big string",
            "smallStrings": ["this", "yo", "is", "a", "bigger", "string", "kappa"]
            }
         */

        this.current_test_name = '["this", "yo", "is", "a", "bigger", "string", "kappa"] => [true, false, true, true, false, true, false]';
        const multiStringSearch = new this.Problem();

        assert.deepStrictEqual(multiStringSearch.solve("this is a big string", ["this", "yo", "is", "a", "bigger", "string", "kappa"]), [true, false, true, true, false, true, false]);

    }

    test_2() {
        /**
         * [true, true, false, true, true, false]
            View Outputs Side By Side
            Input(s)
            {
            "bigString": "abcdefghijklmnopqrstuvwxyz",
            "smallStrings": ["abc", "mnopqr", "wyz", "no", "e", "tuuv"]
            }
         */


        this.current_test_name = '["abc", "mnopqr", "wyz", "no", "e", "tuuv"] => [true, true, false, true, true, false]';
        const multiStringSearch = new this.Problem();

        assert.deepStrictEqual(multiStringSearch.solve("abcdefghijklmnopqrstuvwxyz", ["abc", "mnopqr", "wyz", "no", "e", "tuuv"]), [true, true, false, true, true, false]);

    }

    test_3() {
        /**
         * [true, true, true, true, true, false, false]
            View Outputs Side By Side
            Input(s)
            {
            "bigString": "abcdefghijklmnopqrstuvwxyz",
            "smallStrings": ["abcdefghijklmnopqrstuvwxyz", "abc", "j", "mnopqr", "pqrstuvwxyz", "xyzz", "defh"]
            }
         */

        this.current_test_name = '["abcdefghijklmnopqrstuvwxyz", "abc", "j", "mnopqr", "pqrstuvwxyz", "xyzz", "defh"] => [true, true, true, true, true, false, false]';
        const multiStringSearch = new this.Problem();

        assert.deepStrictEqual(multiStringSearch.solve("abcdefghijklmnopqrstuvwxyz", ["abcdefghijklmnopqrstuvwxyz", "abc", "j", "mnopqr", "pqrstuvwxyz", "xyzz", "defh"]), [true, true, true, true, true, false, false]);
    }


    test_4() {
        /**
         * [false, true, true, true, false, false, false]
            View Outputs Side By Side
            Input(s)
            {
            "bigString": "hj!)!%Hj1jh8f1985n!)51",
            "smallStrings": ["%Hj7", "8f198", "!)5", "!)!", "!!", "jh81", "j181hf"]
            }
         */

        this.current_test_name = '["%Hj7", "8f198", "!)5", "!)!", "!!", "jh81", "j181hf"] => [false, true, true, true, false, false, false]';
        const multiStringSearch = new this.Problem();

        assert.deepStrictEqual(multiStringSearch.solve("hj!)!%Hj1jh8f1985n!)51", ["%Hj7", "8f198", "!)5", "!)!", "!!", "jh81", "j181hf"]), [false, true, true, true, false, false, false]);
    }

    test_5() {
        /**
         * [true, true, false, true, true, false, false]
            View Outputs Side By Side
            Input(s)
            {
            "bigString": "Mary goes to the shopping center every week.",
            "smallStrings": ["to", "Mary", "centers", "shop", "shopping", "string", "kappa"]
            }
         */

        this.current_test_name = '["to", "Mary", "centers", "shop", "shopping", "string", "kappa"] => [true, true, false, true, true, false, false]';
        const multiStringSearch = new this.Problem();

        assert.deepStrictEqual(multiStringSearch.solve("Mary goes to the shopping center every week.", ["to", "Mary", "centers", "shop", "shopping", "string", "kappa"]), [true, true, false, true, true, false, false]);
    }

    test_6() {
        /**
         * [false, false, false, false, true, false, false]
            View Outputs Side By Side
            Input(s)
            {
            "bigString": "adcb akfkw afnmc fkadn vkaca jdaf dacb cdba cbda",
            "smallStrings": ["abcd", "acbd", "adbc", "dabc", "cbda", "cabd", "cdab"]
            }
         */

        this.current_test_name = '["abcd", "acbd", "adbc", "dabc", "cbda", "cabd", "cdab"] => [false, false, false, false, true, false, false]';
        const multiStringSearch = new this.Problem();

        assert.deepStrictEqual(multiStringSearch.solve("adcb akfkw afnmc fkadn vkaca jdaf dacb cdba cbda", ["abcd", "acbd", "adbc", "dabc", "cbda", "cabd", "cdab"]), [false, false, false, false, true, false, false]);

    }


    test_7() {
        /**
         * [true, false, false, false, true, true]
            View Outputs Side By Side
            Input(s)
            {
            "bigString": "test testing testings tests testers test-takers",
            "smallStrings": ["tests", "testatk", "testiing", "trsatii", "test-taker", "test"]
            }
         */

        this.current_test_name = '["tests", "testatk", "testiing", "trsatii", "test-taker", "test"] => [true, false, false, false, true, true]';
        const multiStringSearch = new this.Problem();

        assert.deepStrictEqual(multiStringSearch.solve("test testing testings tests testers test-takers", ["tests", "testatk", "testiing", "trsatii", "test-taker", "test"]), [true, false, false, false, true, true]);
    }

    test_8() {
        /**
         * [false, false, false, false, false, false, true]
            View Outputs Side By Side
            Input(s)
            {
            "bigString": "ndbajwhfawkjljkfaopwdlaawjk dawkj awjkawkfjhkawk ahjwkjad jadfljawd",
            "smallStrings": ["abc", "akwbc", "awbc", "abafac", "ajjfbc", "abac", "jadfl"]
            }
         */

        this.current_test_name = '["abc", "akwbc", "awbc", "abafac", "ajjfbc", "abac", "jadfl"] => [false, false, false, false, false, false, true]';
        const multiStringSearch = new this.Problem();

        assert.deepStrictEqual(multiStringSearch.solve("ndbajwhfawkjljkfaopwdlaawjk dawkj awjkawkfjhkawk ahjwkjad jadfljawd", ["abc", "akwbc", "awbc", "abafac", "ajjfbc", "abac", "jadfl"]), [false, false, false, false, false, false, true]);
    }

    test_9() {
        /**
         * [false, true, false, false, false, false, false, true, true]
            View Outputs Side By Side
            Input(s)
            {
            "bigString": "Is this particular test going to pass or is it going to fail? That is the question.",
            "smallStrings": ["that", "the", "questions", "goes", "mountain", "passes", "passed", "going", "is"]
            }
         */

        this.current_test_name = '["that", "the", "questions", "goes", "mountain", "passes", "passed", "going", "is"] => [false, true, false, false, false, false, false, true, true]';
        const multiStringSearch = new this.Problem();

        assert.deepStrictEqual(multiStringSearch.solve("Is this particular test going to pass or is it going to fail? That is the question.", ["that", "the", "questions", "goes", "mountain", "passes", "passed", "going", "is"]), [false, true, false, false, false, false, false, true, true]);

    }

    test_10() {
        /**
         * [false, false, false, false, false, false]
            View Outputs Side By Side
            Input(s)
            {
            "bigString": "Everything in this test should fail.",
            "smallStrings": ["everything", "inn", "that", "testers", "shall", "failure"]
            }
         */

        this.current_test_name = '["everything", "inn", "that", "testers", "shall", "failure"] => [false, false, false, false, false, false]';
        const multiStringSearch = new this.Problem();

        assert.deepStrictEqual(multiStringSearch.solve("Everything in this test should fail.", ["everything", "inn", "that", "testers", "shall", "failure"]), [false, false, false, false, false, false]);
    }

}


class KnacksackProblem extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
    }

    test_1() {
        /**
         * [10, [1, 3]]
            View Outputs Side By Side
            Input(s)
            {
            "capacity": 10,
            "items": [
                [1, 2],
                [4, 3],
                [5, 6],
                [6, 7]
            ]
            }
         */

        this.current_test_name = '[10, [[1, 2], [4, 3], [5, 6], [6, 7]]] => [10, [1, 3]]';
        const knapsackProblem = new this.Problem();

        assert.deepStrictEqual(knapsackProblem.solve(10, [[1, 2], [4, 3], [5, 6], [6, 7]]), [10, [1, 3]]);
    }


    test_2() {
        /**
         * [10, [0, 1, 2]]
        View Outputs Side By Side
        Input(s)
        {
        "capacity": 11,
        "items": [
            [1, 2],
            [4, 3],
            [5, 6],
            [6, 9]
        ]
        }
        */

        this.current_test_name = '[11, [[1, 2], [4, 3], [5, 6], [6, 9]]] => [10, [0, 1, 2]]';
        const knapsackProblem = new this.Problem();

        assert.deepStrictEqual(knapsackProblem.solve(11, [[1, 2], [4, 3], [5, 6], [6, 9]]), [10, [0, 1, 2]]);
    }

    test_3() {
        /**
         * [1500, [3, 12, 14]]
            View Outputs Side By Side
            Input(s)
            {
            "capacity": 200,
            "items": [
                [465, 100],
                [400, 85],
                [255, 55],
                [350, 45],
                [650, 130],
                [1000, 190],
                [455, 100],
                [100, 25],
                [1200, 190],
                [320, 65],
                [750, 100],
                [50, 45],
                [550, 65],
                [100, 50],
                [600, 70],
                [240, 40]
            ]
            }
         */

        this.current_test_name = '[200, [[465, 100], [400, 85], [255, 55], [350, 45], [650, 130], [1000, 190], [455, 100], [100, 25], [1200, 190], [320, 65], [750, 100], [50, 45], [550, 65], [100, 50], [600, 70], [240, 40]]] => [1500, [3, 12, 14]]';
        const knapsackProblem = new this.Problem();

        assert.deepStrictEqual(knapsackProblem.solve(200, [[465, 100], [400, 85], [255, 55], [350, 45], [650, 130], [1000, 190], [455, 100], [100, 25], [1200, 190], [320, 65], [750, 100], [50, 45], [550, 65], [100, 50], [600, 70], [240, 40]]), [1500, [3, 12, 14]]);

    }

    test_4() {
        /**
         * [1505, [7, 12, 14, 15]]
            View Outputs Side By Side
            Input(s)
            {
            "capacity": 200,
            "items": [
                [465, 100],
                [400, 85],
                [255, 55],
                [350, 45],
                [650, 130],
                [1000, 190],
                [455, 100],
                [100, 25],
                [1200, 190],
                [320, 65],
                [750, 100],
                [50, 45],
                [550, 65],
                [100, 50],
                [600, 70],
                [255, 40]
            ]
            }
         */

        this.current_test_name = '[200, [[465, 100], [400, 85], [255, 55], [350, 45], [650, 130], [1000, 190], [455, 100], [100, 25], [1200, 190], [320, 65], [750, 100], [50, 45], [550, 65], [100, 50], [600, 70], [255, 40]]] => [1505, [7, 12, 14, 15]]';
        const knapsackProblem = new this.Problem();

        assert.deepStrictEqual(knapsackProblem.solve(200, [[465, 100], [400, 85], [255, 55], [350, 45], [650, 130], [1000, 190], [455, 100], [100, 25], [1200, 190], [320, 65], [750, 100], [50, 45], [550, 65], [100, 50], [600, 70], [255, 40]]), [1505, [7, 12, 14, 15]]);
    }

    test_5() {
        /**
         * [101, [0, 2, 3]]
            View Outputs Side By Side
            Input(s)
            {
            "capacity": 100,
            "items": [
                [2, 1],
                [70, 70],
                [30, 30],
                [69, 69],
                [100, 100]
            ]
            }
         */

        this.current_test_name = '[100, [[2, 1], [70, 70], [30, 30], [69, 69], [100, 100]]] => [101, [0, 2, 3]]';
        const knapsackProblem = new this.Problem();

        assert.deepStrictEqual(knapsackProblem.solve(100, [[2, 1], [70, 70], [30, 30], [69, 69], [100, 100]]), [101, [0, 2, 3]]);
    }

    test_6() {
        /**
         * [100, [1, 2]]
            View Outputs Side By Side
            Input(s)
            {
            "capacity": 100,
            "items": [
                [1, 2],
                [70, 70],
                [30, 30],
                [69, 69],
                [99, 100]
            ]
            }
         */

        this.current_test_name = '[100, [[1, 2], [70, 70], [30, 30], [69, 69], [99, 100]]] => [100, [1, 2]]';
        const knapsackProblem = new this.Problem();

        assert.deepStrictEqual(knapsackProblem.solve(100, [[1, 2], [70, 70], [30, 30], [69, 69], [99, 100]]), [100, [1, 2]]);

    }

    test_7() {
        /**
         * [0, []]
            View Outputs Side By Side
            Input(s)
            {
            "capacity": 0,
            "items": [
                [1, 2],
                [70, 70],
                [30, 30],
                [69, 69],
                [100, 100]
            ]
            }
         */

        this.current_test_name = '[0, [[1, 2], [70, 70], [30, 30], [69, 69], [100, 100]]] => [0, []]';
        const knapsackProblem = new this.Problem();

        assert.deepStrictEqual(knapsackProblem.solve(0, [[1, 2], [70, 70], [30, 30], [69, 69], [100, 100]]), [0, []]);
    }



}

class DiskStacking extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
    }

    test_1() {

        /**
         * [
            [2, 1, 2],
            [3, 2, 3],
            [4, 4, 5]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "disks": [
                [2, 1, 2],
                [3, 2, 3],
                [2, 2, 8],
                [2, 3, 4],
                [1, 3, 1],
                [4, 4, 5]
            ]
            }
         */

        this.current_test_name = '[[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [1, 3, 1], [4, 4, 5]] => [[2, 1, 2], [3, 2, 3], [4, 4, 5]]';
        const diskStacking = new this.Problem();

        assert.deepStrictEqual(diskStacking.solve([[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [1, 3, 1], [4, 4, 5]]), [[2, 1, 2], [3, 2, 3], [4, 4, 5]]);
    }

    test_2() {
        /**
         * [
            [2, 1, 2]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "disks": [
                [2, 1, 2]
            ]
            }
         */

        this.current_test_name = '[[2, 1, 2]] => [[2, 1, 2]]';
        const diskStacking = new this.Problem();

        assert.deepStrictEqual(diskStacking.solve([[2, 1, 2]]), [[2, 1, 2]]);
    }

    test_3() {
        /**
         * [
            [2, 1, 2],
            [3, 2, 3]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "disks": [
                [2, 1, 2],
                [3, 2, 3]
            ]
            }
         */

        this.current_test_name = '[[2, 1, 2], [3, 2, 3]] => [[2, 1, 2], [3, 2, 3]]';
        const diskStacking = new this.Problem();

        assert.deepStrictEqual(diskStacking.solve([[2, 1, 2], [3, 2, 3]]), [[2, 1, 2], [3, 2, 3]]);
    }

    test_4() {
        /**
         * [
            [2, 2, 8]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "disks": [
                [2, 1, 2],
                [3, 2, 3],
                [2, 2, 8]
            ]
            }
         */

        this.current_test_name = '[[2, 1, 2], [3, 2, 3], [2, 2, 8]] => [[2, 2, 8]]';
        const diskStacking = new this.Problem();

        assert.deepStrictEqual(diskStacking.solve([[2, 1, 2], [3, 2, 3], [2, 2, 8]]), [[2, 2, 8]]);
    }

    test_5() {
        /**
         * [
            [2, 1, 2],
            [3, 2, 3]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "disks": [
                [2, 1, 2],
                [3, 2, 3],
                [2, 3, 4]
            ]
            }
         */

        this.current_test_name = '[[2, 1, 2], [3, 2, 3], [2, 3, 4]] => [[2, 1, 2], [3, 2, 3]]';
        const diskStacking = new this.Problem();

        assert.deepStrictEqual(diskStacking.solve([[2, 1, 2], [3, 2, 3], [2, 3, 4]]), [[2, 1, 2], [3, 2, 3]]);
    }

    test_6() {
        /**
         * [
            [2, 1, 2],
            [3, 2, 3],
            [4, 4, 5]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "disks": [
                [2, 1, 2],
                [3, 2, 3],
                [2, 2, 8],
                [2, 3, 4],
                [2, 2, 1],
                [4, 4, 5]
            ]
            }
         */

        this.current_test_name = '[[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [2, 2, 1], [4, 4, 5]] => [[2, 1, 2], [3, 2, 3], [4, 4, 5]]';
        const diskStacking = new this.Problem();

        assert.deepStrictEqual(diskStacking.solve([[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [2, 2, 1], [4, 4, 5]]), [[2, 1, 2], [3, 2, 3], [4, 4, 5]]);
    }

    test_7() {
        /**
         * [
            [2, 3, 4],
            [4, 4, 5]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "disks": [
                [2, 1, 2],
                [3, 2, 5],
                [2, 2, 8],
                [2, 3, 4],
                [2, 2, 1],
                [4, 4, 5]
            ]
            }
         */

        this.current_test_name = '[[2, 1, 2], [3, 2, 5], [2, 2, 8], [2, 3, 4], [2, 2, 1], [4, 4, 5]] => [[2, 3, 4], [4, 4, 5]]';
        const diskStacking = new this.Problem();

        assert.deepStrictEqual(diskStacking.solve([[2, 1, 2], [3, 2, 5], [2, 2, 8], [2, 3, 4], [2, 2, 1], [4, 4, 5]]), [[2, 3, 4], [4, 4, 5]]);
    }

    test_8() {
        /**
         * [
            [1, 1, 4],
            [2, 2, 8]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "disks": [
                [2, 1, 2],
                [3, 2, 3],
                [2, 2, 8],
                [2, 3, 4],
                [1, 2, 1],
                [4, 4, 5],
                [1, 1, 4]
            ]
            }
         */

        this.current_test_name = '[[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [1, 2, 1], [4, 4, 5], [1, 1, 4]] => [[1, 1, 4], [2, 2, 8]]';
        const diskStacking = new this.Problem();

        assert.deepStrictEqual(diskStacking.solve([[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [1, 2, 1], [4, 4, 5], [1, 1, 4]]), [[1, 1, 4], [2, 2, 8]]);
    }

    test_9() {
        /**
         * [
            [2, 2, 3],
            [3, 3, 4],
            [4, 4, 5],
            [5, 5, 6]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "disks": [
                [3, 3, 4],
                [2, 1, 2],
                [3, 2, 3],
                [2, 2, 8],
                [2, 3, 4],
                [5, 5, 6],
                [1, 2, 1],
                [4, 4, 5],
                [1, 1, 4],
                [2, 2, 3]
            ]
            }
         */

        this.current_test_name = '[[3, 3, 4], [2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [5, 5, 6], [1, 2, 1], [4, 4, 5], [1, 1, 4], [2, 2, 3]] => [[2, 2, 3], [3, 3, 4], [4, 4, 5], [5, 5, 6]]';
        const diskStacking = new this.Problem();

        assert.deepStrictEqual(diskStacking.solve([[3, 3, 4], [2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [5, 5, 6], [1, 2, 1], [4, 4, 5], [1, 1, 4], [2, 2, 3]]), [[2, 2, 3], [3, 3, 4], [4, 4, 5], [5, 5, 6]]);
    }

}

class NumbersInPi extends ProblemTests {
    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());

    }

    test_1() {
        /**
         * 2
            View Outputs Side By Side
            Input(s)
            {
            "numbers": ["314159265358979323846", "26433", "8", "3279", "314159265", "35897932384626433832", "79"],
            "pi": "3141592653589793238462643383279"
            }
         */

        this.current_test_name = '"3141592653589793238462643383279", ["314159265358979323846", "26433", "8", "3279", "314159265", "35897932384626433832", "79"] => 2';
        const numbersInPi = new this.Problem();

        assert.equal(numbersInPi.solve("3141592653589793238462643383279", ["314159265358979323846", "26433", "8", "3279", "314159265", "35897932384626433832", "79"]), 2);
    }

    test_2() {
        /**
         * 1
            View Outputs Side By Side
            Input(s)
            {
            "numbers": ["314159265358979323846264338327", "9"],
            "pi": "3141592653589793238462643383279"
            }
         */

        this.current_test_name = '"3141592653589793238462643383279" , ["314159265358979323846264338327", "9"]=> 1';
        const numbersInPi = new this.Problem();

        assert.equal(numbersInPi.solve("3141592653589793238462643383279", ["314159265358979323846264338327", "9"]), 1);
    }

    test_3() {
        /**
         * 3
        View Outputs Side By Side
        Input(s)
        {
        "numbers": ["3", "314", "49", "9001", "15926535897", "14", "9323", "8462643383279", "4", "793"],
        "pi": "3141592653589793238462643383279"
        }
         */

        this.current_test_name = '"3141592653589793238462643383279", ["3", "314", "49", "9001", "15926535897", "14", "9323", "8462643383279", "4", "793"] => 3';
        const numbersInPi = new this.Problem();

        assert.equal(numbersInPi.solve("3141592653589793238462643383279", ["3", "314", "49", "9001", "15926535897", "14", "9323", "8462643383279", "4", "793"]), 3);
    }

    test_4() {
        /**
         * 0
            View Outputs Side By Side
            Input(s)
            {
            "numbers": ["3141592653589793238462643383279"],
            "pi": "3141592653589793238462643383279"
            }
         */

        this.current_test_name = '"3141592653589793238462643383279", ["3141592653589793238462643383279"] => 0';
        const numbersInPi = new this.Problem();

        assert.equal(numbersInPi.solve("3141592653589793238462643383279", ["3141592653589793238462643383279"]), 0);
    }

    test_5() {
        /**
         * -1
            View Outputs Side By Side
            Input(s)
            {
            "numbers": ["3141", "1512", "159", "793", "12412451", "8462643383279"],
            "pi": "3141592653589793238462643383279"
            }
         */

        this.current_test_name = '"3141592653589793238462643383279", ["3141", "1512", "159", "793", "12412451", "8462643383279"] => -1';
        const numbersInPi = new this.Problem();

        assert.equal(numbersInPi.solve("3141592653589793238462643383279", ["3141", "1512", "159", "793", "12412451", "8462643383279"]), -1);
    }

    test_6() {
        /**
         * 2
            View Outputs Side By Side
            Input(s)
            {
            "numbers": ["314159265358979323846", "327", "26433", "8", "3279", "9", "314159265", "35897932384626433832", "79"],
            "pi": "3141592653589793238462643383279"
            }
         */

        this.current_test_name = '"3141592653589793238462643383279", ["314159265358979323846", "327", "26433", "8", "3279", "9", "314159265", "35897932384626433832", "79"] => 2';
        const numbersInPi = new this.Problem();

        assert.equal(numbersInPi.solve("3141592653589793238462643383279", ["314159265358979323846", "327", "26433", "8", "3279", "9", "314159265", "35897932384626433832", "79"]), 2);

    }

    test_7() {
        /**
         * 1
        View Outputs Side By Side
        Input(s)
        {
        "numbers": ["141592653589793238462643383279", "314159265358979323846", "327", "26433", "8", "3279", "9", "314159265", "35897932384626433832", "79", "3"],
        "pi": "3141592653589793238462643383279"
        }
         */

        this.current_test_name = '"3141592653589793238462643383279", ["141592653589793238462643383279", "314159265358979323846", "327", "26433", "8", "3279", "9", "314159265", "35897932384626433832", "79", "3"] => 1';
        const numbersInPi = new this.Problem();

        assert.equal(numbersInPi.solve("3141592653589793238462643383279", ["141592653589793238462643383279", "314159265358979323846", "327", "26433", "8", "3279", "9", "314159265", "35897932384626433832", "79", "3"]), 1);
    }

    test_8() {
        /**
         * 13
            View Outputs Side By Side
            Input(s)
            {
            "numbers": ["3", "1", "4", "592", "65", "55", "35", "8", "9793", "2384626", "83279"],
            "pi": "3141592653589793238462643383279"
            }
         */

        this.current_test_name = '"3141592653589793238462643383279", ["3", "1", "4", "592", "65", "55", "35", "8", "9793", "2384626", "83279"] => 13';
        const numbersInPi = new this.Problem();

        assert.equal(numbersInPi.solve("3141592653589793238462643383279", ["3", "1", "4", "592", "65", "55", "35", "8", "9793", "2384626", "83279"]), 13);
    }

    test_9() {
        /**
         * 12
            View Outputs Side By Side
            Input(s)
            {
            "numbers": ["3", "1", "4", "592", "65", "55", "35", "8", "9793", "2384626", "383279"],
            "pi": "3141592653589793238462643383279"
            }
         */

        this.current_test_name = '"3141592653589793238462643383279", ["3", "1", "4", "592", "65", "55", "35", "8", "9793", "2384626", "383279"] => 12';
        const numbersInPi = new this.Problem();

        assert.equal(numbersInPi.solve("3141592653589793238462643383279", ["3", "1", "4", "592", "65", "55", "35", "8", "9793", "2384626", "383279"]), 12);
    }

    test_10() {
        /**
         * -1
            View Outputs Side By Side
            Input(s)
            {
            "numbers": ["3", "141", "592", "65", "55", "35", "8", "9793", "2384626", "383279"],
            "pi": "3141592653589793238462643383279"
            }
         */

        this.current_test_name = '"3141592653589793238462643383279", ["3", "141", "592", "65", "55", "35", "8", "9793", "2384626", "383279"] => -1';
        const numbersInPi = new this.Problem();

        assert.equal(numbersInPi.solve("3141592653589793238462643383279", ["3", "141", "592", "65", "55", "35", "8", "9793", "2384626", "383279"]), -1);
    }





}

class MaximumSumSubmatrix extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());

    }

    test_1() {
        /**
         * 18
            View Outputs Side By Side
            Input(s)
            {
            "matrix": [
                [5, 3, -1, 5],
                [-7, 3, 7, 4],
                [12, 8, 0, 0],
                [1, -8, -8, 2]
            ],
            "size": 2
            }
         */

        this.current_test_name = '[[5, 3, -1, 5], [-7, 3, 7, 4], [12, 8, 0, 0], [1, -8, -8, 2]], 2 => 18';
        const maximumSubSubmatrix = new this.Problem();

        assert.equal(maximumSubSubmatrix.solve([[5, 3, -1, 5], [-7, 3, 7, 4], [12, 8, 0, 0], [1, -8, -8, 2]], 2), 18);
    }

    test_2() {
        /**
         * 28
            View Outputs Side By Side
            Input(s)
            {
            "matrix": [
                [3, -4, 6, -5, 1],
                [1, -2, 8, -4, -2],
                [3, -8, 9, 3, 1],
                [-7, 3, 4, 2, 7],
                [-3, 7, -5, 7, -6]
            ],
            "size": 3
            }
         */

        this.current_test_name = '[[3, -4, 6, -5, 1], [1, -2, 8, -4, -2], [3, -8, 9, 3, 1], [-7, 3, 4, 2, 7], [-3, 7, -5, 7, -6]], 3 => 28';
        const maximumSubSubmatrix = new this.Problem();

        assert.equal(maximumSubSubmatrix.solve([[3, -4, 6, -5, 1], [1, -2, 8, -4, -2], [3, -8, 9, 3, 1], [-7, 3, 4, 2, 7], [-3, 7, -5, 7, -6]], 3), 28);
    }

    test_3() {
        /**
         * 17
            View Outputs Side By Side
            Input(s)
            {
            "matrix": [
                [2, 4],
                [5, 6],
                [-3, 2]
            ],
            "size": 2
            }
         */

        this.current_test_name = '[[2, 4], [5, 6], [-3, 2]], 2 => 17';
        const maximumSubSubmatrix = new this.Problem();

        assert.equal(maximumSubSubmatrix.solve([[2, 4], [5, 6], [-3, 2]], 2), 17);
    }

    test_4() {
        /**
         * 38
            View Outputs Side By Side
            Input(s)
            {
            "matrix": [
                [3, -4, 6, -5, 1],
                [1, -2, 8, -4, -2],
                [3, -8, 9, 3, 1],
                [-7, 3, 4, 2, 7],
                [-3, 7, -5, 7, -6],
                [2, 4, 5, 2, 3]
            ],
            "size": 4
            }
         */

        this.current_test_name = '[[3, -4, 6, -5, 1], [1, -2, 8, -4, -2], [3, -8, 9, 3, 1], [-7, 3, 4, 2, 7], [-3, 7, -5, 7, -6], [2, 4, 5, 2, 3]], 4 => 38';
        const maximumSubSubmatrix = new this.Problem();

        assert.equal(maximumSubSubmatrix.solve([[3, -4, 6, -5, 1], [1, -2, 8, -4, -2], [3, -8, 9, 3, 1], [-7, 3, 4, 2, 7], [-3, 7, -5, 7, -6], [2, 4, 5, 2, 3]], 4), 38);
    }

    test_5() {
        /**
         * 1
            View Outputs Side By Side
            Input(s)
            {
            "matrix": [
                [1]
            ],
            "size": 1
            }
         */

        this.current_test_name = '[[1]], 1 => 1';
        const maximumSubSubmatrix = new this.Problem();

        assert.equal(maximumSubSubmatrix.solve([[1]], 1), 1);
    }

    test_6() {
        /**
         * 4
            View Outputs Side By Side
            Input(s)
            {
            "matrix": [
                [1, 1],
                [1, 1]
            ],
            "size": 2
            }
         */

        this.current_test_name = '[[1, 1], [1, 1]], 2 => 4';
        const maximumSubSubmatrix = new this.Problem();

        assert.equal(maximumSubSubmatrix.solve([[1, 1], [1, 1]], 2), 4);
    }

    test_7() {
        /**
         * 6
            View Outputs Side By Side
            Input(s)
            {
            "matrix": [
                [1, 1, 2, -1],
                [1, 1, 2, -1]
            ],
            "size": 2
            }
         */

        this.current_test_name = '[[1, 1, 2, -1], [1, 1, 2, -1]], 2 => 6';
        const maximumSubSubmatrix = new this.Problem();

        assert.equal(maximumSubSubmatrix.solve([[1, 1, 2, -1], [1, 1, 2, -1]], 2), 6);
    }

    test_8() {
        /**
         * 25
            View Outputs Side By Side
            Input(s)
            {
            "matrix": [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ],
            "size": 5
            }
         */

        this.current_test_name = '[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], 5 => 25';
        const maximumSubSubmatrix = new this.Problem();

        assert.equal(maximumSubSubmatrix.solve([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], 5), 25);


    }

    test_9() {
        /**
         * 45
            View Outputs Side By Side
            Input(s)
            {
            "matrix": [
                [2, 1, 1, 1, 1, 4, -1, 1, 1, 5],
                [1, -1, 1, 1, 1, 1, -1, 1, 4, 1],
                [-50, 12, -1, 1, 5, 1, -1, 1, 1, 1],
                [-52, 99, 1, -1, 1, 1, -1, 1, 1, 1],
                [1, -10, -287, 9, -1, 1, -1, 1, 1, 1],
                [1, 2, 1, 8, 1, -1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
            ],
            "size": 6
            }
         */

        this.current_test_name = '[[2, 1, 1, 1, 1, 4, -1, 1, 1, 5], [1, -1, 1, 1, 1, 1, -1, 1, 4, 1], [-50, 12, -1, 1, 5, 1, -1, 1, 1, 1], [-52, 99, 1, -1, 1, 1, -1, 1, 1, 1], [1, -10, -287, 9, -1, 1, -1, 1, 1, 1], [1, 2, 1, 8, 1, -1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]], 6 => 45';
        const maximumSubSubmatrix = new this.Problem();

        assert.equal(maximumSubSubmatrix.solve([[2, 1, 1, 1, 1, 4, -1, 1, 1, 5], [1, -1, 1, 1, 1, 1, -1, 1, 4, 1], [-50, 12, -1, 1, 5, 1, -1, 1, 1, 1], [-52, 99, 1, -1, 1, 1, -1, 1, 1, 1], [1, -10, -287, 9, -1, 1, -1, 1, 1, 1], [1, 2, 1, 8, 1, -1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]], 6), 45);
    }

    test_10() {
        /**
         * -12
            View Outputs Side By Side
            Input(s)
            {
            "matrix": [
                [-1, -2, -3, -4, -5],
                [-5, -4, -3, -2, -1],
                [-1, -2, -3, -4, -5]
            ],
            "size": 2
            }
         */

        this.current_test_name = '[[-1, -2, -3, -4, -5], [-5, -4, -3, -2, -1], [-1, -2, -3, -4, -5]], 2 => -12';
        const maximumSubSubmatrix = new this.Problem();

        assert.equal(maximumSubSubmatrix.solve([[-1, -2, -3, -4, -5], [-5, -4, -3, -2, -1], [-1, -2, -3, -4, -5]], 2), -12);
    }

}


class MaximizeExpression extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());

    }

    test_1() {
        /**
         * 4
            View Outputs Side By Side
            Input(s)
            {
            "array": [3, 6, 1, -3, 2, 7]
            }
         */

        this.current_test_name = '[3, 6, 1, -3, 2, 7] => 4';
        const maximizeExpression = new this.Problem();

        assert.equal(maximizeExpression.solve([3, 6, 1, -3, 2, 7]), 4);

    }

    test_2() {
        /**
         * 3
            View Outputs Side By Side
            Input(s)
            {
            "array": [3, 9, 10, 1, 30, 40]
            }
         */

        this.current_test_name = '[3, 9, 10, 1, 30, 40] => 3';
        const maximizeExpression = new this.Problem();

        assert.equal(maximizeExpression.solve([3, 9, 10, 1, 30, 40]), 3);
    }

    test_3() {
        /**
         * 46
            View Outputs Side By Side
            Input(s)
            {
            "array": [40, 30, 1, 10, 9, 3]
            }
         */

        this.current_test_name = '[40, 30, 1, 10, 9, 3] => 46';
        const maximizeExpression = new this.Problem();

        assert.equal(maximizeExpression.solve([40, 30, 1, 10, 9, 3]), 46);
    }

    test_4() {
        /**
         * 6
            View Outputs Side By Side
            Input(s)
            {
            "array": [-1, 2, -1, -2, -2, 1, -1]
            }
         */

        this.current_test_name = '[-1, 2, -1, -2, -2, 1, -1] => 6';
        const maximizeExpression = new this.Problem();

        assert.equal(maximizeExpression.solve([-1, 2, -1, -2, -2, 1, -1]), 6);
    }

    test_5() {
        /**
         * 10
            View Outputs Side By Side
            Input(s)
            {
            "array": [10, 5, 10, 5]
            }
         */

        this.current_test_name = '[10, 5, 10, 5] => 10';
        const maximizeExpression = new this.Problem();

        assert.equal(maximizeExpression.solve([10, 5, 10, 5]), 10);
    }

    test_6() {
        /**
         * 1
            View Outputs Side By Side
            Input(s)
            {
            "array": [0, 0, 0, 0, 0, 0, 0, 1, 1, 0]
            }
         */

        this.current_test_name = '[0, 0, 0, 0, 0, 0, 0, 1, 1, 0] => 1';
        const maximizeExpression = new this.Problem();

        assert.equal(maximizeExpression.solve([0, 0, 0, 0, 0, 0, 0, 1, 1, 0]), 1);
    }

    test_7() {
        /**
         * 209
            View Outputs Side By Side
            Input(s)
            {
            "array": [34, 21, 22, 0, -98, -72, 100, 23]
            }
         */

        this.current_test_name = '[34, 21, 22, 0, -98, -72, 100, 23] => 209';
        const maximizeExpression = new this.Problem();

        assert.equal(maximizeExpression.solve([34, 21, 22, 0, -98, -72, 100, 23]), 209);
    }

    test_8() {
        /**
         * 18
            View Outputs Side By Side
            Input(s)
            {
            "array": [5, 2, 2, 1, -2, 2, -9, 0]
            }
         */

        this.current_test_name = '[5, 2, 2, 1, -2, 2, -9, 0] => 18';
        const maximizeExpression = new this.Problem();

        assert.equal(maximizeExpression.solve([5, 2, 2, 1, -2, 2, -9, 0]), 18);
    }

    test_9() {
        /**
         * 0
            View Outputs Side By Side
            Input(s)
            {
            "array": [1, 1, 1, 1]
            }
         */

        this.current_test_name = '[1, 1, 1, 1] => 0';
        const maximizeExpression = new this.Problem();

        assert.equal(maximizeExpression.solve([1, 1, 1, 1]), 0);
    }

    test_10() {
        /**
         * 4
            View Outputs Side By Side
            Input(s)
            {
            "array": [1, -1, 1, -1]
            }
         */

        this.current_test_name = '[1, -1, 1, -1] => 4';
        const maximizeExpression = new this.Problem();

        assert.equal(maximizeExpression.solve([1, -1, 1, -1]), 4);
    }

}

class JuiceBottling extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());

    }

    test_1() {
        /**
         * [1]
            View Outputs Side By Side
            Input(s)
            {
            "prices": [0, 1]
            }
         */

        this.current_test_name = '[0, 1] => [1]';
        const juiceBottling = new this.Problem();

        assert.deepStrictEqual(juiceBottling.solve([0, 1]), [1]);
    }

    test_2() {

        /**
         * [2]
            View Outputs Side By Side
            Input(s)
            {
            "prices": [0, 1, 3]
            }
         */

        this.current_test_name = '[0, 1, 3] => [2]';
        const juiceBottling = new this.Problem();

        assert.deepStrictEqual(juiceBottling.solve([0, 1, 3]), [2]);

    }


    test_3() {
        /**
         * [1, 1]
            View Outputs Side By Side
            Input(s)
            {
            "prices": [0, 2, 3]
            }
         */

        this.current_test_name = '[0, 2, 3] => [1, 1]';
        const juiceBottling = new this.Problem();

        assert.deepStrictEqual(juiceBottling.solve([0, 2, 3]), [1, 1]);

    }

    test_4() {
        /**
         * [1, 1, 1]
            View Outputs Side By Side
            Input(s)
            {
            "prices": [0, 2, 3, 4]
            }
         */

        this.current_test_name = '[0, 2, 3, 4] => [1, 1, 1]';
        const juiceBottling = new this.Problem();

        assert.deepStrictEqual(juiceBottling.solve([0, 2, 3, 4]), [1, 1, 1]);
    }

    test_5() {
        /**
         * [1, 2]
            View Outputs Side By Side
            Input(s)
            {
            "prices": [0, 2, 5, 6]
            }
         */

        this.current_test_name = '[0, 2, 5, 6] => [1, 2]';
        const juiceBottling = new this.Problem();

        assert.deepStrictEqual(juiceBottling.solve([0, 2, 5, 6]), [1, 2]);
    }

    test_6() {
        /**
         * [2, 2]
            View Outputs Side By Side
            Input(s)
            {
            "prices": [0, 2, 5, 6, 7]
            }
         */

        this.current_test_name = '[0, 2, 5, 6, 7] => [2, 2]';
        const juiceBottling = new this.Problem();

        assert.deepStrictEqual(juiceBottling.solve([0, 2, 5, 6, 7]), [2, 2]);
    }


    test_7() {
        /**
         * [4]
            View Outputs Side By Side
            Input(s)
            {
            "prices": [0, 2, 5, 6, 11]
            }
        */

        this.current_test_name = '[0, 2, 5, 6, 11] => [4]';
        const juiceBottling = new this.Problem();

        assert.deepStrictEqual(juiceBottling.solve([0, 2, 5, 6, 11]), [4]);
    }

    test_8() {
        /**
         * [1, 3]
            View Outputs Side By Side
            Input(s)
            {
            "prices": [0, 2, 5, 10, 11]
            }
         */

        this.current_test_name = '[0, 2, 5, 10, 11] => [1, 3]';
        const juiceBottling = new this.Problem();

        assert.deepStrictEqual(juiceBottling.solve([0, 2, 5, 10, 11]), [1, 3]);
    }

    test_9() {
        /**
         * [1, 1, 1, 1, 1, 1]
            View Outputs Side By Side
            Input(s)
            {
            "prices": [0, 5, 6, 7, 8, 9, 10]
            }
         */

        this.current_test_name = '[0, 5, 6, 7, 8, 9, 10] => [1, 1, 1, 1, 1, 1]';
        const juiceBottling = new this.Problem();

        assert.deepStrictEqual(juiceBottling.solve([0, 5, 6, 7, 8, 9, 10]), [1, 1, 1, 1, 1, 1]);
    }

    test_10() {
        /**
         * [2, 2]
            View Outputs Side By Side
            Input(s)
            {
            "prices": [0, 2, 5, 4, 4]
            }
         */

        this.current_test_name = '[0, 2, 5, 4, 4] => [2, 2]';
        const juiceBottling = new this.Problem();

        assert.deepStrictEqual(juiceBottling.solve([0, 2, 5, 4, 4]), [2, 2]);
    }




}

class TopologicalSort extends ProblemTests {
    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        this.tests.push(() => this.test_10());
    }


    test_1() {
        /**
         * {
            "isValidTopologicalOrder": true,
            "order": [4, 1, 3, 2]
            }
            View Outputs Side By Side
            Input(s)
            {
            "deps": [
                [1, 2],
                [1, 3],
                [3, 2],
                [4, 2],
                [4, 3]
            ],
            "jobs": [1, 2, 3, 4]
            }
         */

        this.current_test_name = '([1, 2, 3, 4], [[1, 2], [1, 3], [3, 2], [4, 2], [4, 3]]) => [4, 1, 3, 2]';
        const topologicalSort = new this.Problem();
        const solution = topologicalSort.solve([1, 2, 3, 4], [[1, 2], [1, 3], [3, 2], [4, 2], [4, 3]]);

        assert.deepStrictEqual(topologicalSort.solve([1, 2, 3, 4], [[1, 2], [1, 3], [3, 2], [4, 2], [4, 3]]), [4, 1, 3, 2]);
    }

    test_2() {
        /**
         * {
            "isValidTopologicalOrder": true,
            "order": [8, 5, 7, 3, 1, 4, 6, 2]
            }
            View Outputs Side By Side
            Input(s)
            {
            "deps": [
                [3, 1],
                [8, 1],
                [8, 7],
                [5, 7],
                [5, 2],
                [1, 4],
                [1, 6],
                [1, 2],
                [7, 6]
            ],
            "jobs": [1, 2, 3, 4, 5, 6, 7, 8]
            }
         */

        this.current_test_name = '([1, 2, 3, 4, 5, 6, 7, 8], [[3, 1], [8, 1], [8, 7], [5, 7], [5, 2], [1, 4], [1, 6], [1, 2], [7, 6]]) => [8, 5, 7, 3, 1, 4, 6, 2]';
        const topologicalSort = new this.Problem();

        assert.deepStrictEqual(topologicalSort.solve([1, 2, 3, 4, 5, 6, 7, 8], [[3, 1], [8, 1], [8, 7], [5, 7], [5, 2], [1, 4], [1, 6], [1, 2], [7, 6]]), [8, 5, 7, 3, 1, 4, 6, 2]);
    }

    test_3() {
        /**
         * {
            "isValidTopologicalOrder": false,
            "order": []
            }
            View Outputs Side By Side
            Input(s)
            {
            "deps": [
                [3, 1],
                [8, 1],
                [8, 7],
                [5, 7],
                [5, 2],
                [1, 4],
                [6, 7],
                [1, 2],
                [7, 6]
            ],
            "jobs": [1, 2, 3, 4, 5, 6, 7, 8]
            }
         */

        this.current_test_name = '([1, 2, 3, 4, 5, 6, 7, 8], [[3, 1], [8, 1], [8, 7], [5, 7], [5, 2], [1, 4], [6, 7], [1, 2], [7, 6]]) => []';
        const topologicalSort = new this.Problem();

        assert.deepStrictEqual(topologicalSort.solve([1, 2, 3, 4, 5, 6, 7, 8], [[3, 1], [8, 1], [8, 7], [5, 7], [5, 2], [1, 4], [6, 7], [1, 2], [7, 6]]), []);
    }

    test_4() {
        /**
         * {
            "isValidTopologicalOrder": false,
            "order": []
            }
            View Outputs Side By Side
            Input(s)
            {
            "deps": [
                [3, 1],
                [8, 1],
                [8, 7],
                [5, 7],
                [5, 2],
                [1, 4],
                [1, 6],
                [1, 2],
                [7, 6],
                [4, 6],
                [6, 2],
                [2, 3]
            ],
            "jobs": [1, 2, 3, 4, 5, 6, 7, 8]
            }
         */

        this.current_test_name = '([1, 2, 3, 4, 5, 6, 7, 8], [[3, 1], [8, 1], [8, 7], [5, 7], [5, 2], [1, 4], [1, 6], [1, 2], [7, 6], [4, 6], [6, 2], [2, 3]]) => []';
        const topologicalSort = new this.Problem();

        assert.deepStrictEqual(topologicalSort.solve([1, 2, 3, 4, 5, 6, 7, 8], [[3, 1], [8, 1], [8, 7], [5, 7], [5, 2], [1, 4], [1, 6], [1, 2], [7, 6], [4, 6], [6, 2], [2, 3]]), []);
    }


    test_5() {
        /**
         * {
            "isValidTopologicalOrder": false,
            "order": []
            }
            View Outputs Side By Side
            Input(s)
            {
            "deps": [
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5],
                [5, 6],
                [6, 7],
                [7, 8],
                [8, 1]
            ],
            "jobs": [1, 2, 3, 4, 5, 6, 7, 8]
            }
         */

        this.current_test_name = '([1, 2, 3, 4, 5, 6, 7, 8], [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 1]]) => []';
        const topologicalSort = new this.Problem();

        assert.deepStrictEqual(topologicalSort.solve([1, 2, 3, 4, 5, 6, 7, 8], [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 1]]), []);
    }

    test_6() {
        /**
         * {
            "isValidTopologicalOrder": true,
            "order": [9, 7, 8, 1, 2, 3, 4, 5, 6]
            }
            View Outputs Side By Side
            Input(s)
            {
            "deps": [
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5],
                [5, 6],
                [7, 6],
                [7, 8],
                [8, 1]
            ],
            "jobs": [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
         */

        this.current_test_name = '([1, 2, 3, 4, 5, 6, 7, 8, 9], [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [7, 6], [7, 8], [8, 1]]) => [9, 7, 8, 1, 2, 3, 4, 5, 6]';
        const topologicalSort = new this.Problem();

        assert.deepStrictEqual(topologicalSort.solve([1, 2, 3, 4, 5, 6, 7, 8, 9], [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [7, 6], [7, 8], [8, 1]]), [9, 7, 8, 1, 2, 3, 4, 5, 6]);
    }

    test_7() {
        /**
         * {
            "isValidTopologicalOrder": true,
            "order": [4, 3, 5, 6, 1, 2, 7, 8]
            }
            View Outputs Side By Side
            Input(s)
            {
            "deps": [
                [1, 2],
                [3, 5],
                [4, 6],
                [3, 6],
                [1, 7],
                [7, 8],
                [1, 8],
                [2, 8]
            ],
            "jobs": [1, 2, 3, 4, 5, 6, 7, 8]
            }
         */

        this.current_test_name = '([1, 2, 3, 4, 5, 6, 7, 8], [[1, 2], [3, 5], [4, 6], [3, 6], [1, 7], [7, 8], [1, 8], [2, 8]]) => [4, 3, 5, 6, 1, 2, 7, 8]';
        const topologicalSort = new this.Problem();

        assert.deepStrictEqual(topologicalSort.solve([1, 2, 3, 4, 5, 6, 7, 8], [[1, 2], [3, 5], [4, 6], [3, 6], [1, 7], [7, 8], [1, 8], [2, 8]]), [4, 3, 5, 6, 1, 2, 7, 8]);
    }

    test_8() {

        /**
         * {
            "isValidTopologicalOrder": true,
            "order": [1, 2, 3, 4, 5, 6, 7, 8]
            }
            View Outputs Side By Side
            Input(s)
            {
            "deps": [
                [1, 2],
                [1, 3],
                [1, 4],
                [1, 5],
                [1, 6],
                [1, 7],
                [2, 8],
                [3, 8],
                [4, 8],
                [5, 8],
                [6, 8],
                [7, 8]
            ],
            "jobs": [1, 2, 3, 4, 5, 6, 7, 8]
            }
         */

        this.current_test_name = '([1, 2, 3, 4, 5, 6, 7, 8], [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8]]) => [1, 2, 3, 4, 5, 6, 7, 8]';
        const topologicalSort = new this.Problem();

        assert.deepStrictEqual(topologicalSort.solve([1, 2, 3, 4, 5, 6, 7, 8], [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8]]), [1, 2, 3, 4, 5, 6, 7, 8]);
    }

    test_9() {
        /**
         * {
            "isValidTopologicalOrder": true,
            "order": [1, 7, 6, 2, 3, 10, 11, 12, 5, 4, 9, 8, 0]
            }
            View Outputs Side By Side
            Input(s)
            {
            "deps": [
                [1, 2],
                [1, 3],
                [1, 4],
                [1, 5],
                [1, 6],
                [1, 7],
                [2, 8],
                [3, 8],
                [4, 8],
                [5, 8],
                [6, 8],
                [7, 8],
                [2, 3],
                [2, 4],
                [5, 4],
                [7, 6],
                [6, 2],
                [6, 3],
                [6, 5],
                [5, 9],
                [9, 8],
                [8, 0],
                [4, 0],
                [5, 0],
                [9, 0],
                [2, 0],
                [3, 9],
                [3, 10],
                [10, 11],
                [11, 12],
                [2, 12]
            ],
            "jobs": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            }
         */

        this.current_test_name = '([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [2, 3], [2, 4], [5, 4], [7, 6], [6, 2], [6, 3], [6, 5], [5, 9], [9, 8], [8, 0], [4, 0], [5, 0], [9, 0], [2, 0], [3, 9], [3, 10], [10, 11], [11, 12], [2, 12]]) => [1, 7, 6, 2, 3, 10, 11, 12, 5, 4, 9, 8, 0]';
        const topologicalSort = new this.Problem();

        assert.deepStrictEqual(topologicalSort.solve([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [2, 3], [2, 4], [5, 4], [7, 6], [6, 2], [6, 3], [6, 5], [5, 9], [9, 8], [8, 0], [4, 0], [5, 0], [9, 0], [2, 0], [3, 9], [3, 10], [10, 11], [11, 12], [2, 12]]), [1, 7, 6, 2, 3, 10, 11, 12, 5, 4, 9, 8, 0]);
    }


    test_10() {
        /**
         * {
            "isValidTopologicalOrder": false,
            "order": []
            }
            View Outputs Side By Side
            Input(s)
            {
            "deps": [
                [1, 2],
                [1, 3],
                [1, 4],
                [1, 5],
                [1, 6],
                [1, 7],
                [2, 8],
                [3, 8],
                [4, 8],
                [5, 8],
                [6, 8],
                [7, 8],
                [2, 3],
                [2, 4],
                [5, 4],
                [7, 6],
                [6, 2],
                [6, 3],
                [6, 5],
                [5, 9],
                [9, 8],
                [8, 0],
                [4, 0],
                [5, 0],
                [9, 0],
                [2, 0],
                [3, 9],
                [3, 10],
                [10, 11],
                [11, 12],
                [12, 2]
            ],
            "jobs": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            }
         */

        this.current_test_name = '([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [2, 3], [2, 4], [5, 4], [7, 6], [6, 2], [6, 3], [6, 5], [5, 9], [9, 8], [8, 0], [4, 0], [5, 0], [9, 0], [2, 0], [3, 9], [3, 10], [10, 11], [11, 12], [12, 2]]) => []';
        const topologicalSort = new this.Problem();

        assert.deepStrictEqual(topologicalSort.solve([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [2, 3], [2, 4], [5, 4], [7, 6], [6, 2], [6, 3], [6, 5], [5, 9], [9, 8], [8, 0], [4, 0], [5, 0], [9, 0], [2, 0], [3, 9], [3, 10], [10, 11], [11, 12], [12, 2]]), []);
    }



}

class KruskalsAlgorithm extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());
        // this.tests.push(() => this.test_10());
    }

    test_1() {
        /**
         * [
            [
                [1, 1]
            ],
            [
                [0, 1]
            ]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "edges": [
                [
                [1, 1]
                ],
                [
                [0, 1]
                ]
            ]
            }
         */

        this.current_test_name = '([ [ [1, 1] ], [ [0, 1] ] ]) => [[1, 1], [0, 1]]';
        const kruskalsAlgorithms = new this.Problem();

        assert.deepStrictEqual(kruskalsAlgorithms.solve([[[1, 1]], [[0, 1]]]), [[[1, 1]], [[0, 1]]]);
    }

    test_2() {
        /**
         * [
            [
                [1, 1]
            ],
            [
                [0, 1],
                [2, 2]
            ],
            [
                [1, 2]
            ]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "edges": [
                [
                [1, 1]
                ],
                [
                [0, 1],
                [2, 2]
                ],
                [
                [1, 2]
                ]
            ]
            }
         */

        this.current_test_name = '([ [ [1, 1] ], [ [0, 1], [2, 2] ], [ [1, 2] ] ]) => [[1, 1], [0, 1], [2, 2]]';
        const kruskalsAlgorithms = new this.Problem();

        assert.deepStrictEqual(kruskalsAlgorithms.solve([[[1, 1]], [[0, 1], [2, 2]], [[1, 2]]]),
            [
                [
                    [1, 1]
                ],
                [
                    [0, 1],
                    [2, 2]
                ],
                [
                    [1, 2]
                ]
            ]);

    }

    test_3() {
        /**
         * [
            [
                [1, 3],
                [2, 5]
            ],
            [
                [0, 3],
                [3, 12]
            ],
            [
                [0, 5]
            ],
            [
                [1, 12]
            ]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "edges": [
                [
                [1, 3],
                [2, 5]
                ],
                [
                [0, 3],
                [2, 10],
                [3, 12]
                ],
                [
                [0, 5],
                [1, 10]
                ],
                [
                [1, 12]
                ]
            ]
            }
         */

        this.current_test_name = '([[1, 3], [2, 5]], [[0, 3], [3, 12]], [[0, 5]], [[1, 12]]) => [[1, 3], [0, 3], [2, 5], [3, 12]]';
        const kruskalsAlgorithms = new this.Problem();

        assert.deepStrictEqual(kruskalsAlgorithms.solve([[[1, 3], [2, 5]], [[0, 3], [3, 12]], [[0, 5]], [[1, 12]]]),
            [
                [
                    [1, 3],
                    [2, 5]
                ],
                [
                    [0, 3],
                    [3, 12]
                ],
                [
                    [0, 5]
                ],
                [
                    [1, 12]
                ]
            ]);
    }


    test_4() {
        /**
         * [
            [
                [1, 3],
                [2, 5]
            ],
            [
                [0, 3],
                [3, 12],
                [4, 1]
            ],
            [
                [0, 5]
            ],
            [
                [1, 12]
            ],
            [
                [1, 1]
            ]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "edges": [
                [
                [1, 3],
                [2, 5]
                ],
                [
                [0, 3],
                [2, 10],
                [3, 12],
                [4, 1]
                ],
                [
                [0, 5],
                [1, 10],
                [4, 7]
                ],
                [
                [1, 12]
                ],
                [
                [1, 1],
                [2, 7]
                ]
            ]
            }
         */

        this.current_test_name = '([[1, 3], [2, 5]], [[0, 3], [3, 12], [4, 1]], [[0, 5]], [[1, 12]], [[1, 1]]) => [[1, 3], [0, 3], [4, 1], [2, 5], [3, 12]]';
        const kruskalsAlgorithms = new this.Problem();

        assert.deepEqual(kruskalsAlgorithms.solve([
            [
                [1, 3],
                [2, 5]
            ],
            [
                [0, 3],
                [2, 10],
                [3, 12],
                [4, 1]
            ],
            [
                [0, 5],
                [1, 10],
                [4, 7]
            ],
            [
                [1, 12]
            ],
            [
                [1, 1],
                [2, 7]
            ]
        ]),
            [[[1, 3], [2, 5]], [[4, 1], [0, 3], [3, 12]], [[0, 5]], [[1, 12]], [[1, 1]]]);
    }



    test_5() {
        /**
         * [
            [
                [1, 3],
                [2, 5]
            ],
            [
                [0, 3],
                [4, 1]
            ],
            [
                [0, 5]
            ],
            [
                [4, 11]
            ],
            [
                [1, 1],
                [3, 11]
            ]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "edges": [
                [
                [1, 3],
                [2, 5]
                ],
                [
                [0, 3],
                [2, 10],
                [3, 12],
                [4, 1]
                ],
                [
                [0, 5],
                [1, 10],
                [4, 7]
                ],
                [
                [1, 12],
                [4, 11]
                ],
                [
                [1, 1],
                [2, 7],
                [3, 11]
                ]
            ]
            }
         */

        this.current_test_name = '([[1, 3], [2, 5]], [[0, 3], [4, 1]], [[0, 5]], [[4, 11]], [[1, 1], [3, 11]]) => [[1, 3], [0, 3], [4, 1], [2, 5], [3, 11]]';
        const kruskalsAlgorithms = new this.Problem();

        compareNestedLists(kruskalsAlgorithms.solve([[
            [1, 3],
            [2, 5]
        ],
        [
            [0, 3],
            [2, 10],
            [3, 12],
            [4, 1]
        ],
        [
            [0, 5],
            [1, 10],
            [4, 7]
        ],
        [
            [1, 12],
            [4, 11]
        ],
        [
            [1, 1],
            [2, 7],
            [3, 11]
        ]
        ]),
            [
                [
                    [1, 3],
                    [2, 5]
                ],
                [
                    [0, 3],
                    [4, 1]
                ],
                [
                    [0, 5]
                ],
                [
                    [4, 11]
                ],
                [
                    [1, 1],
                    [3, 11]
                ]
            ]);

        // assert.deepEqual(kruskalsAlgorithms.solve( [
        //     [
        //       [1, 3],
        //       [2, 5]
        //     ],
        //     [
        //       [0, 3],
        //       [2, 10],
        //       [3, 12],
        //       [4, 1]
        //     ],
        //     [
        //       [0, 5],
        //       [1, 10],
        //       [4, 7]
        //     ],
        //     [
        //       [1, 12],
        //       [4, 11]
        //     ],
        //     [
        //       [1, 1],
        //       [2, 7],
        //       [3, 11]
        //     ]
        //   ]),
        // [
        //     [
        //       [1, 3],
        //       [2, 5]
        //     ],
        //     [
        //       [0, 3],
        //       [4, 1]
        //     ],
        //     [
        //       [0, 5]
        //     ],
        //     [
        //       [4, 11]
        //     ],
        //     [
        //       [1, 1],
        //       [3, 11]
        //     ]
        //   ]);
    }

    test_6() {


        /**
         * [
            [
                [1, 7]
            ],
            [
                [0, 7],
                [2, 6],
                [4, 3]
            ],
            [
                [1, 6]
            ],
            [
                [4, 2]
            ],
            [
                [1, 3],
                [3, 2]
            ]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "edges": [
                [
                [1, 7]
                ],
                [
                [0, 7],
                [2, 6],
                [4, 3]
                ],
                [
                [1, 6]
                ],
                [
                [4, 2]
                ],
                [
                [1, 3],
                [3, 2]
                ]
            ]
            }
         */


        this.current_test_name = '([[1, 7]], [[0, 7], [2, 6], [4, 3]], [[1, 6]], [[4, 2]], [[1, 3], [3, 2]]) => [[1, 7], [4, 2], [3, 2], [2, 6]]';
        const kruskalsAlgorithms = new this.Problem();

        assert.deepEqual(kruskalsAlgorithms.solve([[[1, 7]], [[0, 7], [2, 6], [4, 3]], [[1, 6]], [[4, 2]], [[1, 3], [3, 2]]]),
            [[[1, 7]], [[4, 3], [2, 6], [0, 7]], [[1, 6]], [[4, 2]], [[3, 2], [1, 3]]]);

    }

    test_7() {
        /**
         * [
            [
                [1, 7]
            ],
            [
                [0, 7],
                [2, 6],
                [4, 3]
            ],
            [
                [1, 6]
            ],
            [
                [4, 2]
            ],
            [
                [1, 3],
                [3, 2]
            ]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "edges": [
                [
                [1, 7]
                ],
                [
                [0, 7],
                [2, 6],
                [3, 20],
                [4, 3]
                ],
                [
                [1, 6],
                [3, 14]
                ],
                [
                [1, 20],
                [2, 14],
                [4, 2]
                ],
                [
                [1, 3],
                [3, 2]
                ]
            ]
            }
         */

        this.current_test_name = '([[1, 7]], [[0, 7], [2, 6], [3, 20], [4, 3]], [[1, 6], [3, 14]], [[1, 20], [2, 14], [4, 2]], [[1, 3], [3, 2]]) => [[1, 7], [4, 3], [2, 6], [3, 14]]';
        const kruskalsAlgorithms = new this.Problem();

        assert.deepEqual(kruskalsAlgorithms.solve([[[1, 7]], [[0, 7], [2, 6], [3, 20], [4, 3]], [[1, 6], [3, 14]], [[1, 20], [2, 14], [4, 2]], [[1, 3], [3, 2]]]),
            [[[1, 7]], [[4, 3], [2, 6], [0, 7]], [[1, 6]], [[4, 2]], [[3, 2], [1, 3]]]);
    }

    test_8() {
        /**
         * [
            [
                [2, 5]
            ],
            [
                [2, 6],
                [4, 3]
            ],
            [
                [0, 5],
                [1, 6]
            ],
            [
                [4, 2]
            ],
            [
                [1, 3],
                [3, 2]
            ]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "edges": [
                [
                [1, 7],
                [2, 5]
                ],
                [
                [0, 7],
                [2, 6],
                [3, 20],
                [4, 3]
                ],
                [
                [0, 5],
                [1, 6],
                [3, 14]
                ],
                [
                [1, 20],
                [2, 14],
                [4, 2]
                ],
                [
                [1, 3],
                [3, 2]
                ]
            ]
            }
         */

        this.current_test_name = '([[1, 7], [2, 5]], [[0, 7], [2, 6], [3, 20], [4, 3]], [[0, 5], [1, 6], [3, 14]], [[1, 20], [2, 14], [4, 2]], [[1, 3], [3, 2]]) => [[1, 7], [4, 3], [2, 5], [3, 14]]';
        const kruskalsAlgorithms = new this.Problem();

        assert.deepEqual(kruskalsAlgorithms.solve([[[1, 7], [2, 5]], [[0, 7], [2, 6], [3, 20], [4, 3]], [[0, 5], [1, 6], [3, 14]], [[1, 20], [2, 14], [4, 2]], [[1, 3], [3, 2]]]),
            [[[2, 5]], [[4, 3], [2, 6]], [[0, 5], [1, 6]], [[4, 2]], [[3, 2], [1, 3]]]);
    }

    test_9() {
        /**
         * [
            [
                [1, 1]
            ],
            [
                [0, 1]
            ],
            [
                [3, 1]
            ],
            [
                [2, 1]
            ]
            ]
            View Outputs Side By Side
            Input(s)
            {
            "edges": [
                [
                [1, 1]
                ],
                [
                [0, 1]
                ],
                [
                [3, 1]
                ],
                [
                [2, 1]
                ]
            ]
            }
         */

        this.current_test_name = '([[1, 1]], [[0, 1]], [[3, 1]], [[2, 1]]) => [[1, 1], [0, 1], [3, 1], [2, 1]]';
        const kruskalsAlgorithms = new this.Problem();

        assert.deepEqual(kruskalsAlgorithms.solve([[[1, 1]], [[0, 1]], [[3, 1]], [[2, 1]]]),
            [[[1, 1]], [[0, 1]], [[3, 1]], [[2, 1]]]);
    }


}


class BoggleBoard extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());

    }

    test_1() {
        /**
         * ["this", "is", "simple", "a", "boggle", "board", "NOTRE-PEATED"]
            View Outputs Side By Side
            Input(s)
            {
            "board": [
                ["t", "h", "i", "s", "i", "s", "a"],
                ["s", "i", "m", "p", "l", "e", "x"],
                ["b", "x", "x", "x", "x", "e", "b"],
                ["x", "o", "g", "g", "l", "x", "o"],
                ["x", "x", "x", "D", "T", "r", "a"],
                ["R", "E", "P", "E", "A", "d", "x"],
                ["x", "x", "x", "x", "x", "x", "x"],
                ["N", "O", "T", "R", "E", "-", "P"],
                ["x", "x", "D", "E", "T", "A", "E"]
            ],
            "words": ["this", "is", "not", "a", "simple", "boggle", "board", "test", "REPEATED", "NOTRE-PEATED"]
            }
         */

        this.current_test_name = '(["this", "is", "simple", "a", "boggle", "board", "NOTRE-PEATED"], [["t", "h", "i", "s", "i", "s", "a"], ["s", "i", "m", "p", "l", "e", "x"], ["b", "x", "x", "x", "x", "e", "b"], ["x", "o", "g", "g", "l", "x", "o"], ["x", "x", "x", "D", "T", "r", "a"], ["R", "E", "P", "E", "A", "d", "x"], ["x", "x", "x", "x", "x", "x", "x"], ["N", "O", "T", "R", "E", "-", "P"], ["x", "x", "D", "E", "T", "A", "E"]]) => ["this", "is", "a", "simple", "boggle", "board", "NOTRE-PEATED"]';
        const boggleBoard = new this.Problem();

        looselyDeepEqual(boggleBoard.solve([["t", "h", "i", "s", "i", "s", "a"], ["s", "i", "m", "p", "l", "e", "x"], ["b", "x", "x", "x", "x", "e", "b"], ["x", "o", "g", "g", "l", "x", "o"], ["x", "x", "x", "D", "T", "r", "a"], ["R", "E", "P", "E", "A", "d", "x"], ["x", "x", "x", "x", "x", "x", "x"], ["N", "O", "T", "R", "E", "-", "P"], ["x", "x", "D", "E", "T", "A", "E"]], ["this", "is", "simple", "a", "boggle", "board", "NOTRE-PEATED"]),
            ["this", "is", "a", "simple", "boggle", "board", "NOTRE-PEATED"]);

    }

    test_2() {
        /**
         * ["yours", "help", "danger", "san", "at"]
            View Outputs Side By Side
            Input(s)
            {
            "board": [
                ["y", "g", "f", "y", "e", "i"],
                ["c", "o", "r", "p", "o", "u"],
                ["j", "u", "z", "s", "e", "l"],
                ["s", "y", "u", "r", "h", "p"],
                ["e", "a", "e", "g", "n", "d"],
                ["h", "e", "l", "s", "a", "t"]
            ],
            "words": ["san", "sana", "at", "vomit", "yours", "help", "end", "been", "bed", "danger", "calm", "ok", "chaos", "complete", "rear", "going", "storm", "face", "epual", "dangerous"]
            }
         */

        this.current_test_name = '(["yours", "help", "danger", "san", "at"], [["y", "g", "f", "y", "e", "i"], ["c", "o", "r", "p", "o", "u"], ["j", "u", "z", "s", "e", "l"], ["s", "y", "u", "r", "h", "p"], ["e", "a", "e", "g", "n", "d"], ["h", "e", "l", "s", "a", "t"]]) => ["yours", "help", "danger", "san", "at"]';
        const boggleBoard = new this.Problem();

        looselyDeepEqual(boggleBoard.solve([["y", "g", "f", "y", "e", "i"], ["c", "o", "r", "p", "o", "u"], ["j", "u", "z", "s", "e", "l"], ["s", "y", "u", "r", "h", "p"], ["e", "a", "e", "g", "n", "d"], ["h", "e", "l", "s", "a", "t"]], ["yours", "help", "danger", "san", "at"]),
            ["yours", "help", "danger", "san", "at"]);
    }


    test_3() {
        /**
         * ["agmsy", "agmsytojed", "agmsytojedinhcbfl"]
            View Outputs Side By Side
            Input(s)
            {
            "board": [
                ["a", "b", "c", "d", "e"],
                ["f", "g", "h", "i", "j"],
                ["k", "l", "m", "n", "o"],
                ["p", "q", "r", "s", "t"],
                ["u", "v", "w", "x", "y"]
            ],
            "words": ["agmsy", "agmsytojed", "agmsytojedinhcbgl", "agmsytojedinhcbfl"]
            }
         */

        this.current_test_name = "(['agmsy', 'agmsytojed', 'agmsytojedinhcbfl'], [['a', 'b', 'c', 'd', 'e'], ['f', 'g', 'h', 'i', 'j'], ['k', 'l', 'm', 'n', 'o'], ['p', 'q', 'r', 's', 't'], ['u', 'v', 'w', 'x', 'y']]) => ['agmsy', 'agmsytojed', 'agmsytojedinhcbfl']";
        const boggleBoard = new this.Problem();

        looselyDeepEqual(boggleBoard.solve([["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j"], ["k", "l", "m", "n", "o"], ["p", "q", "r", "s", "t"], ["u", "v", "w", "x", "y"]], ["agmsy", "agmsytojed", "agmsytojedinhcbgl", "agmsytojedinhcbfl"]),
            ["agmsy", "agmsytojed", "agmsytojedinhcbfl"]);

    }

    test_4() {
        /**
         * ["adbc", "adcb", "acbd", "acdb", "abcd", "abdc"]
            View Outputs Side By Side
            Input(s)
            {
            "board": [
                ["a", "b"],
                ["c", "d"]
            ],
            "words": ["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "abca"]
            }
         */

        this.current_test_name = "(['adbc', 'adcb', 'acbd', 'acdb', 'abcd', 'abdc'], [['a', 'b'], ['c', 'd']]) => ['adbc', 'adcb', 'acbd', 'acdb', 'abcd', 'abdc']";
        const boggleBoard = new this.Problem();

        looselyDeepEqual(boggleBoard.solve([["a", "b"], ["c", "d"]], ["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "abca"]),
            ["adbc", "adcb", "acbd", "acdb", "abcd", "abdc"]);
    }

    test_5() {
        /**
         * ["frozen", "rope", "kappa", "before", "obligate", "rotten", "teleport"]
            View Outputs Side By Side
            Input(s)
            {
            "board": [
                ["f", "t", "r", "o", "p", "i", "k", "b", "o"],
                ["r", "w", "l", "p", "e", "u", "e", "a", "b"],
                ["j", "o", "t", "s", "e", "l", "f", "l", "p"],
                ["s", "z", "u", "t", "h", "u", "o", "p", "i"],
                ["k", "a", "e", "g", "n", "d", "r", "g", "a"],
                ["h", "n", "l", "s", "a", "t", "e", "t", "x"]
            ],
            "words": ["frozen", "rotten", "teleport", "city", "zutgatz", "kappa", "before", "rope", "obligate", "annoying"]
            }
         */

        this.current_test_name = "(['frozen', 'rope', 'kappa', 'before', 'obligate', 'rotten', 'teleport'], [['f', 't', 'r', 'o', 'p', 'i', 'k', 'b', 'o'], ['r', 'w', 'l', 'p', 'e', 'u', 'e', 'a', 'b'], ['j', 'o', 't', 's', 'e', 'l', 'f', 'l', 'p'], ['s', 'z', 'u', 't', 'h', 'u', 'o', 'p', 'i'], ['k', 'a', 'e', 'g', 'n', 'd', 'r', 'g', 'a'], ['h', 'n', 'l', 's', 'a', 't', 'e', 't', 'x']]) => ['frozen', 'rope', 'kappa', 'before', 'obligate', 'rotten', 'teleport']";
        const boggleBoard = new this.Problem();

        looselyDeepEqual(boggleBoard.solve([["f", "t", "r", "o", "p", "i", "k", "b", "o"], ["r", "w", "l", "p", "e", "u", "e", "a", "b"], ["j", "o", "t", "s", "e", "l", "f", "l", "p"], ["s", "z", "u", "t", "h", "u", "o", "p", "i"], ["k", "a", "e", "g", "n", "d", "r", "g", "a"], ["h", "n", "l", "s", "a", "t", "e", "t", "x"]], ["frozen", "rotten", "teleport", "city", "zutgatz", "kappa", "before", "rope", "obligate", "annoying"]),
            ["frozen", "rope", "kappa", "before", "obligate", "rotten", "teleport"]);

    }

    test_6() {
        /**
         * ["complicated", "foobar", "zigzag", "twisted"]
            View Outputs Side By Side
            Input(s)
            {
            "board": [
                ["c", "o", "m"],
                ["r", "p", "l"],
                ["c", "i", "t"],
                ["o", "a", "e"],
                ["f", "o", "d"],
                ["z", "r", "b"],
                ["g", "i", "a"],
                ["o", "a", "g"],
                ["f", "s", "z"],
                ["t", "e", "i"],
                ["t", "w", "d"]
            ],
            "words": ["commerce", "complicated", "twisted", "zigzag", "comma", "foobar", "baz", "there"]
            }
         */

        this.current_test_name = "(['complicated', 'foobar', 'zigzag', 'twisted'], [['c', 'o', 'm'], ['r', 'p', 'l'], ['c', 'i', 't'], ['o', 'a', 'e'], ['f', 'o', 'd'], ['z', 'r', 'b'], ['g', 'i', 'a'], ['o', 'a', 'g'], ['f', 's', 'z'], ['t', 'e', 'i'], ['t', 'w', 'd']]) => ['complicated', 'foobar', 'zigzag', 'twisted']";
        const boggleBoard = new this.Problem();

        looselyDeepEqual(boggleBoard.solve([["c", "o", "m"], ["r", "p", "l"], ["c", "i", "t"], ["o", "a", "e"], ["f", "o", "d"], ["z", "r", "b"], ["g", "i", "a"], ["o", "a", "g"], ["f", "s", "z"], ["t", "e", "i"], ["t", "w", "d"]], ["commerce", "complicated", "twisted", "zigzag", "comma", "foobar", "baz", "there"]),
            ["complicated", "foobar", "zigzag", "twisted"]);
    }


    test_7() {
        /**
         * ["cr", "oc", "ml", "iao", "zrb", "big", "fs", "twt"]
            View Outputs Side By Side
            Input(s)
            {
            "board": [
                ["c", "o", "m"],
                ["r", "p", "l"],
                ["c", "i", "t"],
                ["o", "a", "e"],
                ["f", "o", "d"],
                ["z", "r", "b"],
                ["g", "i", "a"],
                ["o", "a", "g"],
                ["f", "s", "z"],
                ["t", "e", "i"],
                ["t", "w", "d"]
            ],
            "words": ["cr", "oc", "ml", "iao", "opo", "zrb", "big", "fs", "ogiagao", "dwd", "twt"]
            }
         */

        this.current_test_name = "(['cr', 'oc', 'ml', 'iao', 'zrb', 'big', 'fs', 'twt'], [['c', 'o', 'm'], ['r', 'p', 'l'], ['c', 'i', 't'], ['o', 'a', 'e'], ['f', 'o', 'd'], ['z', 'r', 'b'], ['g', 'i', 'a'], ['o', 'a', 'g'], ['f', 's', 'z'], ['t', 'e', 'i'], ['t', 'w', 'd']]) => ['cr', 'oc', 'ml', 'iao', 'zrb', 'big', 'fs', 'twt']";
        const boggleBoard = new this.Problem();

        looselyDeepEqual(boggleBoard.solve([["c", "o", "m"], ["r", "p", "l"], ["c", "i", "t"], ["o", "a", "e"], ["f", "o", "d"], ["z", "r", "b"], ["g", "i", "a"], ["o", "a", "g"], ["f", "s", "z"], ["t", "e", "i"], ["t", "w", "d"]], ["cr", "oc", "ml", "iao", "opo", "zrb", "big", "fs", "ogiagao", "dwd", "twt"]),
            ["cr", "oc", "ml", "iao", "zrb", "big", "fs", "twtx"]);
    }

    test_8() {
        /**
         * ["comlpriteacoofziraagsizefttw"]
            View Outputs Side By Side
            Input(s)
            {
            "board": [
                ["c", "o", "m"],
                ["r", "p", "l"],
                ["c", "i", "t"],
                ["o", "a", "e"],
                ["f", "o", "d"],
                ["z", "r", "b"],
                ["g", "i", "a"],
                ["o", "a", "g"],
                ["f", "s", "z"],
                ["t", "e", "i"],
                ["t", "w", "d"]
            ],
            "words": ["comlpriteacoofziraagsizefttw", "comlpriteacoofzirabagsizefottw", "comlpriteacoofziraagsizefottw", "comlpriteacoofzirabagsizeftttw"]
            }
         */

        this.current_test_name = "(['comlpriteacoofziraagsizefttw', 'comlpriteacoofzirabagsizefottw', 'comlpriteacoofziraagsizefottw', 'comlpriteacoofzirabagsizeftttw'], [['c', 'o', 'm'], ['r', 'p', 'l'], ['c', 'i', 't'], ['o', 'a', 'e'], ['f', 'o', 'd'], ['z', 'r', 'b'], ['g', 'i', 'a'], ['o', 'a', 'g'], ['f', 's', 'z'], ['t', 'e', 'i'], ['t', 'w', 'd']]) => ['comlpriteacoofziraagsizefttw', 'comlpriteacoofzirabagsizefottw', 'comlpriteacoofziraagsizefottw', 'comlpriteacoofzirabagsizeftttw']";
        const boggleBoard = new this.Problem();

        looselyDeepEqual(boggleBoard.solve([["c", "o", "m"], ["r", "p", "l"], ["c", "i", "t"], ["o", "a", "e"], ["f", "o", "d"], ["z", "r", "b"], ["g", "i", "a"], ["o", "a", "g"], ["f", "s", "z"], ["t", "e", "i"], ["t", "w", "d"]], ["comlpriteacoofziraagsizefttw", "comlpriteacoofzirabagsizefottw", "comlpriteacoofziraagsizefottw", "comlpriteacoofzirabagsizeftttw"]),
            ["comlpriteacoofziraagsizefttw", "comlpriteacoofzirabagsizefottw", "comlpriteacoofziraagsizefottw", "comlpriteacoofzirabagsizeftttw"]);
    }


}

class LaptopRentals extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
        this.tests.push(() => this.test_9());

    }

    test_1() {
        /**
         * 3
            View Outputs Side By Side
            Input(s)
            {
            "times": [
                [0, 2],
                [1, 4],
                [4, 6],
                [0, 4],
                [7, 8],
                [9, 11],
                [3, 10]
            ]
            }
         */

        this.current_test_name = "([[0, 2], [1, 4], [4, 6], [0, 4], [7, 8], [9, 11], [3, 10]]) => 3";
        const laptopRentals = new this.Problem();

        assert.equal(laptopRentals.solve([[0, 2], [1, 4], [4, 6], [0, 4], [7, 8], [9, 11], [3, 10]]), 3);
    }

    test_2() {
        /**
         * 4
            View Outputs Side By Side
            Input(s)
            {
            "times": [
                [0, 4],
                [2, 3],
                [2, 3],
                [2, 3]
            ]
            }
         */

        this.current_test_name = "([[0, 4], [2, 3], [2, 3], [2, 3]]) => 4";
        const laptopRentals = new this.Problem();

        assert.equal(laptopRentals.solve([[0, 4], [2, 3], [2, 3], [2, 3]]), 4);
    }

    test_3() {
        /**
         * 1
            View Outputs Side By Side
            Input(s)
            {
            "times": [
                [1, 5],
                [5, 6],
                [6, 7],
                [7, 9]
            ]
            }
         */

        this.current_test_name = "([[1, 5], [5, 6], [6, 7], [7, 9]]) => 1";
        const laptopRentals = new this.Problem();

        assert.equal(laptopRentals.solve([[1, 5], [5, 6], [6, 7], [7, 9]]), 1);
    }


    test_4() {
        /**
         * 1
            View Outputs Side By Side
            Input(s)
            {
            "times": [
                [0, 4]
            ]
            }
         */


        this.current_test_name = "([[0, 4]]) => 1";
        const laptopRentals = new this.Problem();

        assert.equal(laptopRentals.solve([[0, 4]]), 1);

    }

    test_5() {
        /**
         * 0
            View Outputs Side By Side
            Input(s)
            {
            "times": []
            }
         */

        this.current_test_name = "([]) => 0";
        const laptopRentals = new this.Problem();

        assert.equal(laptopRentals.solve([]), 0);
    }

    test_6() {
        /**
         * 4
        View Outputs Side By Side
        Input(s)
        {
        "times": [
            [0, 5],
            [2, 4],
            [4, 7],
            [5, 7],
            [9, 20],
            [3, 15],
            [6, 10]
        ]
        }
         */

        this.current_test_name = "([[0, 5], [2, 4], [4, 7], [5, 7], [9, 20], [3, 15], [6, 10]]) => 4";
        const laptopRentals = new this.Problem();

    }

    test_7() {
        /**
         * 2
            View Outputs Side By Side
            Input(s)
            {
            "times": [
                [10, 20],
                [0, 5],
                [5, 10],
                [10, 15]
            ]
            }
         */

        this.current_test_name = "([[10, 20], [0, 5], [5, 10], [10, 15]]) => 2";
        const laptopRentals = new this.Problem();

        assert.equal(laptopRentals.solve([[10, 20], [0, 5], [5, 10], [10, 15]]), 2);
    }

    test_8() {
        /**
         * 4
        View Outputs Side By Side
        Input(s)
        {
        "times": [
            [0, 5],
            [3, 8],
            [4, 10],
            [7, 11],
            [6, 10]
        ]
        }
         */

        this.current_test_name = "([[0, 5], [3, 8], [4, 10], [7, 11], [6, 10]]) => 4";
        const laptopRentals = new this.Problem();

        assert.equal(laptopRentals.solve([[0, 5], [3, 8], [4, 10], [7, 11], [6, 10]]), 4);
    }

    test_9() {
        /**
         * 4
        View Outputs Side By Side
        Input(s)
        {
        "times": [
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8],
            [5, 9]
        ]
        }
         */

        this.current_test_name = "([[1, 5], [2, 6], [3, 7], [4, 8], [5, 9]]) => 4";
        const laptopRentals = new this.Problem();

        assert.equal(laptopRentals.solve([[1, 5], [2, 6], [3, 7], [4, 8], [5, 9]]), 4);
    }


    test_10() {
        /**
         * [false, false, false, false, false, false]
            View Outputs Side By Side
            Input(s)
            {
            "bigString": "Everything in this test should fail.",
            "smallStrings": ["everything", "inn", "that", "testers", "shall", "failure"]
            }
         */

        this.current_test_name = "(['Everything in this test should fail.', ['everything', 'inn', 'that', 'testers', 'shall', 'failure']]) => [false, false, false, false, false, false]";
        const multiStringSearch = new this.Problem();

        assert.deepEqual(multiStringSearch.solve("Everything in this test should fail.", ["everything", "inn", "that", "testers", "shall", "failure"]), [false, false, false, false, false, false]);
    }

}


class LinkedList {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class FindLoop extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
        this.tests.push(() => this.test_5());
        this.tests.push(() => this.test_6());
        this.tests.push(() => this.test_7());
        this.tests.push(() => this.test_8());
    }

    test_1() {
        /**
         * {
            "head": "4",
            "nodes": [
                {"id": "4", "next": "5", "value": 4},
                {"id": "5", "next": "6", "value": 5},
                {"id": "6", "next": "7", "value": 6},
                {"id": "7", "next": "8", "value": 7},
                {"id": "8", "next": "9", "value": 8},
                {"id": "9", "next": "4", "value": 9}
            ]
            }
         */

        this.current_test_name = "({\"head\": \"4\", \"nodes\": [{\"id\": \"4\", \"next\": \"5\", \"value\": 4}, {\"id\": \"5\", \"next\": \"6\", \"value\": 5}, {\"id\": \"6\", \"next\": \"7\", \"value\": 6}, {\"id\": \"7\", \"next\": \"8\", \"value\": 7}, {\"id\": \"8\", \"next\": \"9\", \"value\": 8}, {\"id\": \"9\", \"next\": \"4\", \"value\": 9}]}) => 4";
        const findLoop = new this.Problem();
        const nodesRoot = new LinkedList(4);
        nodesRoot.next = new LinkedList(5);
        nodesRoot.next.next = new LinkedList(6);
        nodesRoot.next.next.next = new LinkedList(7);
        nodesRoot.next.next.next.next = new LinkedList(8);
        nodesRoot.next.next.next.next.next = new LinkedList(9);
        nodesRoot.next.next.next.next.next.next = nodesRoot.next.next;

        assert.equal(findLoop.solve(nodesRoot), nodesRoot.next.next);

    }

    test_2() {
        /**
         * {
            "head": "0",
            "nodes": [
                {"id": "0", "next": "1", "value": 0},
                {"id": "1", "next": "2", "value": 1},
                {"id": "2", "next": "3", "value": 2},
                {"id": "3", "next": "4", "value": 3},
                {"id": "4", "next": "5", "value": 4},
                {"id": "5", "next": "6", "value": 5},
                {"id": "6", "next": "7", "value": 6},
                {"id": "7", "next": "8", "value": 7},
                {"id": "8", "next": "9", "value": 8},
                {"id": "9", "next": "0", "value": 9}
            ]
            }
         */

        this.current_test_name = "({\"head\": \"0\", \"nodes\": [{\"id\": \"0\", \"next\": \"1\", \"value\": 0}, {\"id\": \"1\", \"next\": \"2\", \"value\": 1}, {\"id\": \"2\", \"next\": \"3\", \"value\": 2}, {\"id\": \"3\", \"next\": \"4\", \"value\": 3}, {\"id\": \"4\", \"next\": \"5\", \"value\": 4}, {\"id\": \"5\", \"next\": \"6\", \"value\": 5}, {\"id\": \"6\", \"next\": \"7\", \"value\": 6}, {\"id\": \"7\", \"next\": \"8\", \"value\": 7}, {\"id\": \"8\", \"next\": \"9\", \"value\": 8}, {\"id\": \"9\", \"next\": \"0\", \"value\": 9}]}) => 0";
        const findLoop = new this.Problem();
        const nodesRoot = new LinkedList(0);
        nodesRoot.next = new LinkedList(1);
        nodesRoot.next.next = new LinkedList(2);
        nodesRoot.next.next.next = new LinkedList(3);
        nodesRoot.next.next.next.next = new LinkedList(4);
        nodesRoot.next.next.next.next.next = new LinkedList(5);
        nodesRoot.next.next.next.next.next.next = new LinkedList(6);
        nodesRoot.next.next.next.next.next.next.next = new LinkedList(7);
        nodesRoot.next.next.next.next.next.next.next.next = new LinkedList(8);
        nodesRoot.next.next.next.next.next.next.next.next.next = new LinkedList(9);
        nodesRoot.next.next.next.next.next.next.next.next.next.next = nodesRoot;

        assert.equal(findLoop.solve(nodesRoot), nodesRoot);

    }

    test_3() {
        /**
         * {
         "head": "1",
         "nodes": [
             {"id": "1", "next": "2", "value": 1},
             {"id": "2", "next": "3", "value": 2},
             {"id": "3", "next": "4", "value": 3},
             {"id": "4", "next": "5", "value": 4},
             {"id": "5", "next": "6", "value": 5},
             {"id": "6", "next": "7", "value": 6},
             {"id": "7", "next": "8", "value": 7},
             {"id": "8", "next": "9", "value": 8},
             {"id": "9", "next": "1", "value": 9}
         ]
         } */

        this.current_test_name = "({\"head\": \"1\", \"nodes\": [{\"id\": \"1\", \"next\": \"2\", \"value\": 1}, {\"id\": \"2\", \"next\": \"3\", \"value\": 2}, {\"id\": \"3\", \"next\": \"4\", \"value\": 3}, {\"id\": \"4\", \"next\": \"5\", \"value\": 4}, {\"id\": \"5\", \"next\": \"6\", \"value\": 5}, {\"id\": \"6\", \"next\": \"7\", \"value\": 6}, {\"id\": \"7\", \"next\": \"8\", \"value\": 7}, {\"id\": \"8\", \"next\": \"9\", \"value\": 8}, {\"id\": \"9\", \"next\": \"1\", \"value\": 9}]}) => 1";
        const findLoop = new this.Problem();
        const nodesRoot = new LinkedList(1);
        nodesRoot.next = new LinkedList(2);
        nodesRoot.next.next = new LinkedList(3);
        nodesRoot.next.next.next = new LinkedList(4);
        nodesRoot.next.next.next.next = new LinkedList(5);
        nodesRoot.next.next.next.next.next = new LinkedList(6);
        nodesRoot.next.next.next.next.next.next = new LinkedList(7);
        nodesRoot.next.next.next.next.next.next.next = new LinkedList(8);
        nodesRoot.next.next.next.next.next.next.next.next = new LinkedList(9);
        nodesRoot.next.next.next.next.next.next.next.next.next = nodesRoot;

        assert.equal(findLoop.solve(nodesRoot), nodesRoot);

    }

    test_4() {
        /**
         * {
            "head": "2",
            "nodes": [
                {"id": "2", "next": "3", "value": 2},
                {"id": "3", "next": "4", "value": 3},
                {"id": "4", "next": "5", "value": 4},
                {"id": "5", "next": "6", "value": 5},
                {"id": "6", "next": "7", "value": 6},
                {"id": "7", "next": "8", "value": 7},
                {"id": "8", "next": "9", "value": 8},
                {"id": "9", "next": "2", "value": 9}
            ]
            }
         */

        this.current_test_name = "({\"head\": \"2\", \"nodes\": [{\"id\": \"2\", \"next\": \"3\", \"value\": 2}, {\"id\": \"3\", \"next\": \"4\", \"value\": 3}, {\"id\": \"4\", \"next\": \"5\", \"value\": 4}, {\"id\": \"5\", \"next\": \"6\", \"value\": 5}, {\"id\": \"6\", \"next\": \"7\", \"value\": 6}, {\"id\": \"7\", \"next\": \"8\", \"value\": 7}, {\"id\": \"8\", \"next\": \"9\", \"value\": 8}, {\"id\": \"9\", \"next\": \"2\", \"value\": 9}]}) => 2";
        const findLoop = new this.Problem();
        const nodesRoot = new LinkedList(2);
        nodesRoot.next = new LinkedList(3);
        nodesRoot.next.next = new LinkedList(4);
        nodesRoot.next.next.next = new LinkedList(5);
        nodesRoot.next.next.next.next = new LinkedList(6);
        nodesRoot.next.next.next.next.next = new LinkedList(7);
        nodesRoot.next.next.next.next.next.next = new LinkedList(8);
        nodesRoot.next.next.next.next.next.next.next = new LinkedList(9);
        nodesRoot.next.next.next.next.next.next.next.next = nodesRoot;

        assert.equal(findLoop.solve(nodesRoot), nodesRoot);
    }

    test_5(){
        /**
         * {
            "head": "3",
            "nodes": [
                {"id": "3", "next": "4", "value": 3},
                {"id": "4", "next": "5", "value": 4},
                {"id": "5", "next": "6", "value": 5},
                {"id": "6", "next": "7", "value": 6},
                {"id": "7", "next": "8", "value": 7},
                {"id": "8", "next": "9", "value": 8},
                {"id": "9", "next": "3", "value": 9}
            ]
            }
         */

        this.current_test_name = "({\"head\": \"3\", \"nodes\": [{\"id\": \"3\", \"next\": \"4\", \"value\": 3}, {\"id\": \"4\", \"next\": \"5\", \"value\": 4}, {\"id\": \"5\", \"next\": \"6\", \"value\": 5}, {\"id\": \"6\", \"next\": \"7\", \"value\": 6}, {\"id\": \"7\", \"next\": \"8\", \"value\": 7}, {\"id\": \"8\", \"next\": \"9\", \"value\": 8}, {\"id\": \"9\", \"next\": \"3\", \"value\": 9}]}) => 3";
        const findLoop = new this.Problem();
        const nodesRoot = new LinkedList(3);
        nodesRoot.next = new LinkedList(4);
        nodesRoot.next.next = new LinkedList(5);
        nodesRoot.next.next.next = new LinkedList(6);
        nodesRoot.next.next.next.next = new LinkedList(7);
        nodesRoot.next.next.next.next.next = new LinkedList(8);
        nodesRoot.next.next.next.next.next.next = new LinkedList(9);
        nodesRoot.next.next.next.next.next.next.next = nodesRoot;

        assert.equal(findLoop.solve(nodesRoot), nodesRoot);
    }

    test_6(){
        /**
         * {
            "head": "5",
            "nodes": [
                {"id": "5", "next": "6", "value": 5},
                {"id": "6", "next": "7", "value": 6},
                {"id": "7", "next": "8", "value": 7},
                {"id": "8", "next": "9", "value": 8},
                {"id": "9", "next": "5", "value": 9}
            ]
            }
         */

        this.current_test_name = "({\"head\": \"5\", \"nodes\": [{\"id\": \"5\", \"next\": \"6\", \"value\": 5}, {\"id\": \"6\", \"next\": \"7\", \"value\": 6}, {\"id\": \"7\", \"next\": \"8\", \"value\": 7}, {\"id\": \"8\", \"next\": \"9\", \"value\": 8}, {\"id\": \"9\", \"next\": \"5\", \"value\": 9}]}) => 5";
        const findLoop = new this.Problem();
        const nodesRoot = new LinkedList(5);
        nodesRoot.next = new LinkedList(6);
        nodesRoot.next.next = new LinkedList(7);
        nodesRoot.next.next.next = new LinkedList(8);
        nodesRoot.next.next.next.next = new LinkedList(9);
        nodesRoot.next.next.next.next.next = nodesRoot;

    }

    test_7(){
        /**
         * {
            "head": "6",
            "nodes": [
                {"id": "6", "next": "7", "value": 6},
                {"id": "7", "next": "8", "value": 7},
                {"id": "8", "next": "9", "value": 8},
                {"id": "9", "next": "6", "value": 9}
            ]
            }
         */

        this.current_test_name = "({\"head\": \"6\", \"nodes\": [{\"id\": \"6\", \"next\": \"7\", \"value\": 6}, {\"id\": \"7\", \"next\": \"8\", \"value\": 7}, {\"id\": \"8\", \"next\": \"9\", \"value\": 8}, {\"id\": \"9\", \"next\": \"6\", \"value\": 9}]}) => 6";
        const findLoop = new this.Problem();
        const nodesRoot = new LinkedList(6);
        nodesRoot.next = new LinkedList(7);
        nodesRoot.next.next = new LinkedList(8);
        nodesRoot.next.next.next = new LinkedList(9);

        nodesRoot.next.next.next.next = nodesRoot;

        assert.equal(findLoop.solve(nodesRoot), nodesRoot);
        

    }

    test_8(){
        /**
         * {
            "head": "7",
            "nodes": [
                {"id": "7", "next": "8", "value": 7},
                {"id": "8", "next": "9", "value": 8},
                {"id": "9", "next": "7", "value": 9}
            ]
            }
         */

        this.current_test_name = "({\"head\": \"7\", \"nodes\": [{\"id\": \"7\", \"next\": \"8\", \"value\": 7}, {\"id\": \"8\", \"next\": \"9\", \"value\": 8}, {\"id\": \"9\", \"next\": \"7\", \"value\": 9}]}) => 7";
        const findLoop = new this.Problem();
        const nodesRoot = new LinkedList(7);
        nodesRoot.next = new LinkedList(8);
        nodesRoot.next.next = new LinkedList(9);
        nodesRoot.next.next.next = nodesRoot;

        assert.equal(findLoop.solve(nodesRoot), nodesRoot);

    }

}



const TEST_DICTIONARY = {
    'subarray-sort': SubarraySort,
    'min-rewards': MinRewards,
    'zigzag-traverse': zigzagTraverse,
    'same-bsts': SameBsts,
    'validate-three-nodes': validateThreeNodes,
    "max-path-sum": MaxPathPathSum,
    'find-nodes-distance-k': findNodesDistanceK,
    'max-sum-increasing-subsequence': maxSumIncreasingSubsequence,
    'longest-common-subsequence': LongestCommonSubsequence,
    'continuous-median': ContinuousMedianHandler,
    'min-number-of-jumps': MinNumberOfJumps,
    'multi-string-search': MultiStringSearch,
    'knapsack-problem': KnacksackProblem,
    'disk-stacking': DiskStacking,
    'numbers-in-pi': NumbersInPi,
    'maximum-sum-submatrix': MaximumSumSubmatrix,
    'maximize-expression': MaximizeExpression,
    'juice-bottling': JuiceBottling,
    'topological-sort': TopologicalSort,
    'kruskals-algorithm': KruskalsAlgorithm,
    'boggle-board': BoggleBoard,
    'laptop-rentals': LaptopRentals,
    'find-loop': FindLoop

}

module.exports = TEST_DICTIONARY;

