const assert = require('assert');
const ProblemTests = require('./problem-test');

class NthTribonacciNumber extends ProblemTests{
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1(){
        const trib = new this.Problem();
        this.current_test_name = '4';
        assert.equal(trib.solve(4), 4);
    }

    test_2(){
        const trib = new this.Problem();
        this.current_test_name = '25';
        assert.equal(trib.solve(25), 1389537);
    }
}




const TEST_DICTIONARY = {
    'n-th-tribonacci-number': NthTribonacciNumber,
    
}

module.exports = TEST_DICTIONARY;