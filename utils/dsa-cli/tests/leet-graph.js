const assert = require('assert');
const ProblemTests = require('./problem-test');


class NumberOfProvinces extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());

    }

    test1() {
        const isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
        const expected = 2;
        this.current_test_name = '[[1, 1, 0], [1, 1, 0], [0, 0, 1]] | 2'
        const structure = new this.Problem()
        const actual = structure.solve(isConnected);
        assert.equal(actual, expected);
    }

    test2() {
        const isConnected = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
        const expected = 3;
        this.current_test_name = '[[1,0,0],[0,1,0],[0,0,1]] | 3'
        const structure = new this.Problem()
        const actual = structure.solve(isConnected);
        assert.equal(actual, expected);
    }

}


class FindEventualSafeStates extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        /**
         * Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
            Output: [2,4,5,6]
            Explanation: The given graph is shown above.
            Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
            Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.
         */

        const graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
        const expected = [2, 4, 5, 6];
        this.current_test_name = '[[1,2],[2,3],[5],[0],[5],[],[]] | [2,4,5,6]'
        const structure = new this.Problem()
        const actual = structure.solve(graph);
        assert.deepEqual(actual, expected);

    }

    test_2() {
        /**
         * Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
            Output: [4]
            Explanation:
            Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.
         */

        const graph = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []];
        const expected = [4];
        this.current_test_name = '[[1,2,3,4],[1,2],[3,4],[0,4],[]] | [4]'
        const structure = new this.Problem()
        const actual = structure.solve(graph);
        assert.deepEqual(actual, expected);
    }

}

class KeyAndRooms extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        const rooms = [[1], [2], [3], []];
        const expected = true;
        this.current_test_name = '[[1],[2],[3],[]] | true'
        const structure = new this.Problem()
        const actual = structure.solve(rooms);
        assert.equal(actual, expected);
    }

    test2(){
        const rooms = [[1,3],[3,0,1],[2],[0]];
        const expected = false;
        this.current_test_name = '[[1,3],[3,0,1],[2],[0]] | false'
        const structure = new this.Problem()
        const actual = structure.solve(rooms);
        assert.equal(actual, expected);

    }
}

class ShortedPathWithAlternatingColors extends ProblemTests {
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1(){
        const board = [
            ['X','X','X','X'],
            ['X','O','O','X'],
            ['X','X','O','X'],
            ['X','O','X','X']
          ];
        const expected = [
            ['X','X','X','X'],
            ['X','X','X','X'],
            ['X','X','X','X'],
            ['X','O','X','X']
          ];
        this.current_test_name = 'board | expected'
        const structure = new this.Problem()
        structure.solve(board);
        assert.deepEqual(board, expected);
    }

    test2(){
        const board = [
            ['O','O','O'],
            ['O','O','O'],
            ['O','O','O']
          ];
        const expected = [
            ['O','O','O'],
            ['O','O','O'],
            ['O','O','O']
          ];
        this.current_test_name = 'board | expected'
        const structure = new this.Problem()
        structure.solve(board);
        assert.deepEqual(board, expected);
    }
}


const TEST_DICTIONARY = {
    'number-of-provinces': NumberOfProvinces,
    'find-eventual-safe-states': FindEventualSafeStates,
    'key-and-rooms': KeyAndRooms,
    'shortest-path-with-alternating-colors': ShortedPathWithAlternatingColors

}

module.exports = TEST_DICTIONARY;


