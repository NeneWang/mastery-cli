
const assert = require('assert');
const ProblemTests = require('./problem-test');

class AddTwoNumbers extends ProblemTests{
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());

    }

    test_1(){
        this.current_test_name = "[2,4,3] + [5,6,4] => [7,0,8]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([2,4,3], [5,6,4]), [7,0,8]);
    }

    test_2(){
        this.current_test_name = "[0] + [0] => [0]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([0], [0]), [0]);
    }

    test_3(){
        this.current_test_name = "[9,9,9,9,9,9,9] + [9,9,9,9] => [8,9,9,9,0,0,0,1]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([9,9,9,9,9,9,9], [9,9,9,9]), [8,9,9,9,0,0,0,1]);
    }



}

const PROBLEM_DICT = {
    'add-two-numbers': AddTwoNumbers,
}


module.exports = PROBLEM_DICT;

