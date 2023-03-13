
const assert = require('assert');
const ProblemTests = require('./problem-test');

class CombinationSumII extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());

    }

    test_1() {

        const combinationSum = new this.Problem();
        this.current_test_name = '[10,1,2,7,6,1,5] | 8 | [[1,1,6],[1,2,5],[1,7],[2,6]]';
        assert.deepEqual(combinationSum.solve([10, 1, 2, 7, 6, 1, 5], 8), [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]);
    }
    test_2() {

        const combinationSum = new this.Problem();
        this.current_test_name = '[2,5,2,1,2] | 5 | [[1,2,2],[5]]';
        assert.deepEqual(combinationSum.solve([2, 5, 2, 1, 2], 5), [[1, 2, 2], [5]]);

    }

}


class CombinationSum extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());

    }


    test_1() {

        const combinationSum = new this.Problem();
        this.current_test_name = '[2,3,6,7] | 7 | [[2,2,3],[7]]';
        assert.deepEqual(combinationSum.solve([2, 3, 6, 7], 7), [[2, 2, 3], [7]]);

    }

    test_2() {

        const combinationSum = new this.Problem();
        this.current_test_name = '[2,3,5] | 8 | [[2,2,2,2],[2,3,3],[3,5]]';
        assert.deepEqual(combinationSum.solve([2, 3, 5], 8), [[2, 2, 2, 2], [2, 3, 3], [3, 5]]);

    }

}


class GenerateParenthesis extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());

    }


    test_1() {

        const generateParenthesis = new this.Problem();
        this.current_test_name = '3 | ["((()))","(()())","(())()","()(())","()()()"]';
        assert.deepEqual(generateParenthesis.solve(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);


    }

    test_2() {

        const generateParenthesis = new this.Problem();
        this.current_test_name = '1 | ["()"]';
        assert.deepEqual(generateParenthesis.solve(1), ["()"]);

    }

}

class LetterCombinationsOfAPhoneNumber extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());

    }

    test_1() {

        const letterCombinationsOfAPhoneNumber = new this.Problem();
        this.current_test_name = '"23" | ["ad","ae","af","bd","be","bf","cd","ce","cf"]';
        assert.deepEqual(letterCombinationsOfAPhoneNumber.solve("23"), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);

    }

    test_2() {

        const letterCombinationsOfAPhoneNumber = new this.Problem();
        this.current_test_name = '"2" | ["a","b","c"]';
        assert.deepEqual(letterCombinationsOfAPhoneNumber.solve("2"), ["a", "b", "c"]);

    }

}










const TEST_DICTIONARY = {
    'combination-sum-ii': CombinationSumII,
    'combination-sum': CombinationSum,
    'generate-parenthesis': GenerateParenthesis,
    'letter-combinations-of-a-phone-number': LetterCombinationsOfAPhoneNumber
}

module.exports = TEST_DICTIONARY;


