const assert = require('assert');
const ProblemTests = require('./problem-test');


class HIndex extends ProblemTests{
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1(){
        const hIndex = new this.Problem();
        this.current_test_name = '[0,1,3,5,6] | 3';
        assert.equal(hIndex.solve([0,1,3,5,6]), 3);
    }

    test_2(){
        const hIndex = new this.Problem();
        this.current_test_name = '[100, 100] | 2';
        assert.equal(hIndex.solve([100, 100]), 2);
    }

    test_3(){
        const hIndex = new this.Problem();
        this.current_test_name = '[0, 0, 0, 0, 0] | 0';
        assert.equal(hIndex.solve([0, 0, 0, 0, 0]), 0);
    }
}



const TEST_DICTIONARY = {
    'h-index': HIndex,
}

module.exports = TEST_DICTIONARY;


