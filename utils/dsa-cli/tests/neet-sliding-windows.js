
const assert = require('assert');
const ProblemTests = require('./problem-test');

class CharacterReplacement extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = "ABAB, 2 => 4"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve("ABAB", 2) == 4);
    }

    test_2() {
        this.current_test_name = "AABABBA, 1 => 4"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve("AABABBA", 1) == 4);
    }

}


class DailyTemperatures extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }
    test_1(){
        this.current_test_name = "[73, 74, 75, 71, 69, 72, 76, 73] => [1, 1, 4, 2, 1, 1, 0, 0]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
    }

    test_2(){
        this.current_test_name = "[30, 40, 50, 60] => [1, 1, 1, 0]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([30, 40, 50, 60]), [1, 1, 1, 0]);
    }
}


class LenghtOfLongestSubString extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }
    test_1(){
        this.current_test_name = "abcabcbb => 3"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve("abcabcbb") == 3);
    }

    test_2(){
        this.current_test_name = "bbbbb => 1"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve("bbbbb") == 1);
    }

    test_3(){
        this.current_test_name = "pwwkew => 3"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve("pwwkew") == 3);
    }
}






const TEST_DICTIONARY = {
    "character-replacement": CharacterReplacement,
    "daily-temperatures": DailyTemperatures,
    "length-of-longest-substring": LenghtOfLongestSubString,

}

module.exports = TEST_DICTIONARY;

