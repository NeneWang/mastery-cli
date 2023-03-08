
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

class MaxProfit extends ProblemTests{
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1(){
        this.current_test_name = "[7,1,5,3,6,4] => 5"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([7,1,5,3,6,4]) == 5);
    }

    test_2(){
        this.current_test_name = "[7,6,4,3,1] => 0"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([7,6,4,3,1]) == 0);
    }

    test_3(){
        this.current_test_name = "[2,4,1] => 2"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([2,4,1]) == 2);
    }

}

class MaxSlidingWindow extends ProblemTests{
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1(){
        this.current_test_name = "[1,3,-1,-3,5,3,6,7], 3 => [3,3,5,5,6,7]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([1,3,-1,-3,5,3,6,7], 3), [3,3,5,5,6,7]);
    }

    test_2(){
        this.current_test_name = "[1], 1 => [1]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([1], 1), [1]);
    }

    test_3(){
        this.current_test_name = "[1,-1], 1 => [1,-1]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([1,-1], 1), [1,-1]);
    }


}






const TEST_DICTIONARY = {
    "character-replacement": CharacterReplacement,
    "daily-temperatures": DailyTemperatures,
    "length-of-longest-substring": LenghtOfLongestSubString,
    "max-profit": MaxProfit,
    "max-sliding-window": MaxSlidingWindow

}

module.exports = TEST_DICTIONARY;

