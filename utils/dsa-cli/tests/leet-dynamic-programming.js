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


class DeleteAndEarn extends ProblemTests{
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1(){
        const del = new this.Problem();
        this.current_test_name = '[3,4,2]';
        assert.equal(del.solve([3,4,2]), 6);
    }

    test_2(){
        const del = new this.Problem();
        this.current_test_name = '[2,2,3,3,3,4]';
        assert.equal(del.solve([2,2,3,3,3,4]), 9);
    }

    test_3(){
        const del = new this.Problem();
        this.current_test_name = '[1,1,1,2,4,5,5,5,6]';
        assert.equal(del.solve([1,1,1,2,4,5,5,5,6]), 18);
    }
}




const TEST_DICTIONARY = {
    'n-th-tribonacci-number': NthTribonacciNumber,
    'delete-and-earn': DeleteAndEarn,

}

module.exports = TEST_DICTIONARY;