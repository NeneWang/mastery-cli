const assert = require('assert');
const ProblemTests = require('./problem-tests');


// eliminate-maximum-number-of-monsters
class EliminateMaximumNumberOfMonsters extends ProblemTests{
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
        this.tests.push(() => this.test3());
    }

    test1(){
        const input = [[1,3,4],[1,1,1]];
        const output = 3;
        const result = this.runTest(input, output);
        assert(result);
    }

    test2(){
        const input = [[1,1,3,5,5],[2,3,2,3,2]];
        const output = 3;
        const result = this.runTest(input, output);
        assert(result);
    }

}



const TEST_DICTIONARY = {
    "eliminate-maximum-number-of-monsters": EliminateMaximumNumberOfMonsters,

}



