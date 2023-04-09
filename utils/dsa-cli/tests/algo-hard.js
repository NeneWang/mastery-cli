
const assert = require('assert');
const ProblemTests = require('./problem-test');


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
        assert.deepEqual(subarraySort.solve([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]), [3, 9]);

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
        assert.deepEqual(subarraySort.solve([1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19]), [4, 6]);
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
        assert.deepEqual(subarraySort.solve([1, 2, 8, 4, 5]), [2, 4]);
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
        assert.deepEqual(subarraySort.solve([4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]), [0, 12]);
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
        assert.deepEqual(subarraySort.solve([4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57]), [0, 11]);
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
        assert.deepEqual(subarraySort.solve([-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57]), [1, 11]);
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
        assert.deepEqual(subarraySort.solve([-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]), [1, 12]);
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
        assert.deepEqual(subarraySort.solve([1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11]), [6, 7]);
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
        assert.deepEqual(subarraySort.solve([1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19]), [6, 16]);
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
        assert.deepEqual(subarraySort.solve([1, 2, 3, 4, 5, 6, 18, 21, 22, 7, 14, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 4, 14, 11, 6, 33, 35, 41, 55]), [4, 24]);
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
        assert.deepEqual(zigzagTraverse.solve([[1, 3, 4, 10], [2, 5, 9, 11], [6, 8, 12, 15], [7, 13, 14, 16]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

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
        assert.deepEqual(zigzagTraverse.solve([[1]]), [1]);
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
        assert.deepEqual(zigzagTraverse.solve([[1, 2, 3, 4, 5]]), [1, 2, 3, 4, 5]);

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
        assert.deepEqual(zigzagTraverse.solve([[1], [2], [3], [4], [5]]), [1, 2, 3, 4, 5]);
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
        assert.deepEqual(zigzagTraverse.solve([[1, 3], [2, 4], [5, 7], [6, 8], [9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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
        assert.deepEqual(zigzagTraverse.solve([[1, 3, 4, 7, 8], [2, 5, 6, 9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
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
        assert.deepEqual(zigzagTraverse.solve([[1, 3, 4, 10, 11], [2, 5, 9, 12, 19], [6, 8, 13, 18, 20], [7, 14, 17, 21, 24], [15, 16, 22, 23, 25]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);

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
        assert.deepEqual(zigzagTraverse.solve([[1, 3, 4, 10, 11, 20], [2, 5, 9, 12, 19, 21], [6, 8, 13, 18, 22, 27], [7, 14, 17, 23, 26, 28], [15, 16, 24, 25, 29, 30]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);

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
        assert.deepEqual(zigzagTraverse.solve([[1, 3, 4, 10, 11], [2, 5, 9, 12, 20], [6, 8, 13, 19, 21], [7, 14, 18, 22, 27], [15, 17, 23, 26, 28], [16, 24, 25, 29, 30]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);

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
        assert.deepEqual(zigzagTraverse.solve([[1, 21, -3, 4, 15, 6, -7, 88, 9], [10, 11, 112, 12, 20, -1, -2, -3, -4], [6, 8, 113, 19, 21, 0, 0, 0, 0], [7, 2, 18, 22, -27, 12, 32, -111, 66], [15, 17, 23, 226, 28, -28, -226, -23, -17], [16, 24, 27, 299, 30, 29, 32, 31, 88]]), [1, 10, 21, -3, 11, 6, 7, 8, 112, 4, 15, 12, 113, 2, 15, 16, 17, 18, 19, 20, 6, -7, -1, 21, 22, 23, 24, 27, 226, -27, 0, -2, 88, 9, -3, 0, 12, 28, 299, 30, -28, 32, 0, -4, 0, -111, -226, 29, 32, -23, 66, -17, 31, 88]);

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
        assert.deepEqual(findNodesDistanceK.solve(tree, 3, 2), [7, 8, 2]);


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
        assert.deepEqual(findNodesDistanceK.solve(tree, 2, 3), [5]);

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
        assert.deepEqual(findNodesDistanceK.solve(tree, 8, 6), [4]);

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
        assert.deepEqual(findNodesDistanceK.solve(tree, 3, 1), [5, 6, 1]);
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
        assert.deepEqual(findNodesDistanceK.solve(tree, 1, 2), [4, 5, 6, 7]);

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
        assert.deepEqual(findNodesDistanceK.solve(tree, 8, 2), [9, 2]);

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
        assert.deepEqual(findNodesDistanceK.solve(tree, 6, 6), [7, 8]);

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
        assert.deepEqual(findNodesDistanceK.solve(tree, 1, 1), []);
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
        assert.deepEqual(findNodesDistanceK.solve(tree, 6, 17), []);

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
        assert.deepEqual(findNodesDistanceK.solve(tree, 2, 2), [8, 9, 10, 11, 3]);

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
        assert.deepEqual(maxSumIncreasingSubsequence.solve([10, 70, 20, 30, 50, 11, 30]), [110, [10, 20, 30, 50]]);

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
        assert.deepEqual(maxSumIncreasingSubsequence.solve([1]), [1, [1]]);
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
        assert.deepEqual(maxSumIncreasingSubsequence.solve([-1]), [-1, [-1]]);
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
        assert.deepEqual(maxSumIncreasingSubsequence.solve([-1, 1]), [1, [1]]);

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
        assert.deepEqual(maxSumIncreasingSubsequence.solve([5, 4, 3, 2, 1]), [5, [5]]);
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
        assert.deepEqual(maxSumIncreasingSubsequence.solve([1, 2, 3, 4, 5]), [15, [1, 2, 3, 4, 5]]);
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
        assert.deepEqual(maxSumIncreasingSubsequence.solve([-5, -4, -3, -2, -1]), [-1, [-1]]);
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
        assert.deepEqual(maxSumIncreasingSubsequence.solve([8, 12, 2, 3, 15, 5, 7]), [35, [8, 12, 15]]);
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
        assert.deepEqual(maxSumIncreasingSubsequence.solve([10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50]), [164, [10, 11, 14, 23, 25, 31, 50]]);

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
        assert.deepEqual(maxSumIncreasingSubsequence.solve([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [45, [1, 2, 3, 4, 5, 6, 7, 8, 9]]);

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
        assert.deepEqual(longestCommonSubsequence.solve("ZXVVYZW", "XKYKZPW"), ["X", "Y", "Z", "W"]);

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
        assert.deepEqual(longestCommonSubsequence.solve("", ""), []);
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
        assert.deepEqual(longestCommonSubsequence.solve("", "ABCDEFG"), []);

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
        assert.deepEqual(longestCommonSubsequence.solve("ABCDEFG", ""), []);
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
        assert.deepEqual(longestCommonSubsequence.solve("ABCDEFG", "ABCDEFG"), ["A", "B", "C", "D", "E", "F", "G"]);

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
        assert.deepEqual(longestCommonSubsequence.solve("ABCDEFG", "APPLES"), ["A", "E"]);
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
        assert.deepEqual(longestCommonSubsequence.solve("clement", "antoine"), ["n", "t"]);

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
        assert.deepEqual(longestCommonSubsequence.solve("8111111111111111142", "222222222822222222222222222222433333333332"), ["8", "4", "2"]);
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
        assert.deepEqual(longestCommonSubsequence.solve("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAG"), ["C", "D", "E", "G", "H", "J", "K", "L", "W"]);
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
        assert.deepEqual(longestCommonSubsequence.solve("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAGTUV"), ["C", "D", "E", "G", "H", "J", "K", "L", "T", "U", "V"]);
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
}

module.exports = TEST_DICTIONARY;

