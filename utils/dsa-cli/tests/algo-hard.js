
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
    constructor(Problem){
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

    test_4(){
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

    test_5(){
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

    test_6(){
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

    test_7(){
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

    test_8(){

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

    test_9(){
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


    test_10(){
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

const TEST_DICTIONARY = {
    'subarray-sort': SubarraySort,
    'min-rewards': MinRewards,
    'zigzag-traverse': zigzagTraverse,
}

module.exports = TEST_DICTIONARY;

