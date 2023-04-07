
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


const TEST_DICTIONARY = {
    'subarray-sort': SubarraySort
}

module.exports = TEST_DICTIONARY;

