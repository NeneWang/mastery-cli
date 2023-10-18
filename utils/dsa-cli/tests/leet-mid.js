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

class InsertDeleteGetRandomO1 extends ProblemTests{
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        // this.tests.push(() => this.test_3());
    }

    test_1(){
        const structure = new this.Problem();
        this.current_test_name = '["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]\n[[],[1],[2],[2],[],[1],[2],[]] | [null,true,false,true,2,true,false,2]';
        
        assert.equal(structure.RandomizedSet(), null);
        assert.equal(structure.insert(1), true);
        assert.equal(structure.remove(2), false);
        assert.equal(structure.insert(2), true);
        assert.equal(structure.remove(1), true);
        assert.equal(structure.RandomizedSet(), 2);
        assert.equal(structure.insert(2), false);
        assert.equal(structure.RandomizedSet(), 2);

    }


}

class MinimumSizeSubArraySum extends ProblemTests{
    constructor(problem){
        super(problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1(){
        const structure = new this.Problem();
        this.current_test_name = '[2,3,1,2,4,3] | 7 => 2';
        assert.equal(structure.solve(7, [2,3,1,2,4,3]), 2);
    }

    test_2(){
        const structure = new this.Problem();
        this.current_test_name = '[1,4,4] | 4 => 1';
        assert.equal(structure.solve(4, [1,4,4]), 1);
    }

    test_3(){
        const structure = new this.Problem();
        this.current_test_name = '[1,1,1,1,1,1,1,1] | 11 => 0';
        assert.equal(structure.solve(11, [1,1,1,1,1,1,1,1]), 0);
    }


}

class GameOfLife extends ProblemTests{
    constructor(problem){
        super(problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1(){
        // Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
        // Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

        const structure = new this.Problem();
        this.current_test_name = '[[0,1,0],[0,0,1],[1,1,1],[0,0,0]] | [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]';
        const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
        structure.solve(board)
        assert.deepEqual(board, [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]);

        
    }

    test_2(){
        // Input: const board = [[1,1],[1,0]]
        // Output: [[1,1],[1,1]]

        const structure = new this.Problem();
        this.current_test_name = '[[1,1],[1,0]] | [[1,1],[1,1]]';
        const board = [[1,1],[1,0]]
        structure.solve(board)
        assert.deepEqual(board, [[1,1],[1,1]]);
    }

}



const TEST_DICTIONARY = {
    'h-index': HIndex,
    'insert-delete-getrandom-o1': InsertDeleteGetRandomO1,
    'minimum-size-subarray-sum': MinimumSizeSubArraySum,
    'game-of-life': GameOfLife,
}

module.exports = TEST_DICTIONARY;


