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

    test2() {
        const rooms = [[1, 3], [3, 0, 1], [2], [0]];
        const expected = false;
        this.current_test_name = '[[1,3],[3,0,1],[2],[0]] | false'
        const structure = new this.Problem()
        const actual = structure.solve(rooms);
        assert.equal(actual, expected);

    }
}

class ShortedPathWithAlternatingColors extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'X']
        ];
        const expected = [
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'X', 'X']
        ];
        this.current_test_name = `${board} | ${expected}`
        const structure = new this.Problem()
        structure.solve(board);
        assert.deepEqual(board, expected);
    }

    test2() {
        const board = [
            ['O', 'O', 'O'],
            ['O', 'O', 'O'],
            ['O', 'O', 'O']
        ];
        const expected = [
            ['O', 'O', 'O'],
            ['O', 'O', 'O'],
            ['O', 'O', 'O']
        ];
        this.current_test_name = `${board} | ${expected}`
        const structure = new this.Problem()
        structure.solve(board);
        assert.deepEqual(board, expected);
    }
}

class NearestExitFromEntranceInMaze extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
        this.tests.push(() => this.test3());
    }

    test1() {
        const maze = [
            ['+', '+', '.', '+'],
            ['.', '+', '.', '+'],
            ['+', '+', '+', '+']
        ];
        const entrance = [1, 2];
        const expected = 1;
        this.current_test_name = `${maze} | ${entrance} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(maze, entrance);
        assert.deepEqual(actual, expected);
    }


    test2() {
        /**
         * Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
            Output: 2
            Explanation: There is 1 exit in this maze at [1,2].
            [1,0] does not count as an exit since it is the entrance cell.
            Initially, you are at the entrance cell [1,0].
            - You can reach [1,2] by moving 2 steps right.
            Thus, the nearest exit is [1,2], which is 2 steps away.
         */

        const maze = [
            ['+', '+', '+'],
            ['.', '.', '.'],
            ['+', '+', '+']
        ];
        const entrance = [1, 0];
        const expected = 2;
        this.current_test_name = `${maze} | ${entrance} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(maze, entrance);
        assert.deepEqual(actual, expected);
    }

    test3() {
        /**
         * Input: maze = [[".","+"]], entrance = [0,0]
            Output: -1
            Explanation: There are no exits in this maze.
         */
        const maze = [
            ['.', '+']
        ];
        const entrance = [0, 0];
        const expected = -1;
        this.current_test_name = `${maze} | ${entrance} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(maze, entrance);
        assert.deepEqual(actual, expected);
    }

}


class ShortestBridge extends ProblemTests {
    constructor(Problem) {
        super(Problem)
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        const grid = [
            [0, 1],
            [1, 0]
        ];
        const expected = 1;
        this.current_test_name = `${grid} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(grid);
        assert.deepEqual(actual, expected);
    }

    test2() {
        const grid = [
            [0, 1, 0],
            [0, 0, 0],
            [0, 0, 1]
        ];
        const expected = 2;
        this.current_test_name = `${grid} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(grid);
        assert.deepEqual(actual, expected);
    }

    test3() {
        const grid = [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1]
        ];

        const expected = 1;
        this.current_test_name = `${grid} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(grid);
        assert.deepEqual(actual, expected);
    }
}


class JumpGameIII extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        const arr = [4, 2, 3, 0, 3, 1, 2];
        const start = 5;
        const expected = true;
        this.current_test_name = `${arr} | ${start} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(arr, start);
        assert.deepEqual(actual, expected);
    }

    test2() {
        const arr = [4, 2, 3, 0, 3, 1, 2];
        const start = 0;
        const expected = true;
        this.current_test_name = `${arr} | ${start} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(arr, start);
        assert.deepEqual(actual, expected);
    }
}

class Matrix01 extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        /**
         * Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
            Output: [[0,0,0],[0,1,0],[0,0,0]]
         */

        const mat = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
        const expected = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
        this.current_test_name = 'mat | expected'
        const structure = new this.Problem()
        const actual = structure.solve(mat);
        assert.deepEqual(actual, expected);

    }

    test2() {
        /**
         * Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
            Output: [[0,0,0],[0,1,0],[1,2,1]]
         */

        const mat = [[0, 0, 0], [0, 1, 0], [1, 1, 1]];
        const expected = [[0, 0, 0], [0, 1, 0], [1, 2, 1]];
        this.current_test_name = 'mat | expected'
        const structure = new this.Problem()
        const actual = structure.solve(mat);
        assert.deepEqual(actual, expected);
    }

}

class TimeNeededToInformAllEmployees extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        /**
         * Input: n = 1, headID = 0, manager = [-1], informTime = [0]
            Output: 0
            Explanation: The head of the company is the only employee in the company.
         */

        const n = 1;
        const headID = 0;
        const manager = [-1];
        const informTime = [0];
        const expected = 0;
        this.current_test_name = `${n} | ${headID} | ${manager} | ${informTime} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(n, headID, manager, informTime);
        assert.deepEqual(actual, expected);
    }

    test2() {
        /**
         * Input: n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]
            Output: 1
            Explanation: The head of the company with id = 2 is the direct manager of all the employees in the company and needs 1 minute to inform them all.
            The tree structure of the employees in the company is shown.
         */

        const n = 6;
        const headID = 2;
        const manager = [2, 2, -1, 2, 2, 2];
        const informTime = [0, 0, 1, 0, 0, 0];
        const expected = 1;
        this.current_test_name = `${n} | ${headID} | ${manager} | ${informTime} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(n, headID, manager, informTime);
        assert.deepEqual(actual, expected);
    }
}


class ReorderRoutesToMakeAllPathLeadToTheCity extends ProblemTests {
    constructor(Problem) {
        super(Problem)
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        /**
         * Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
            Output: 3
            Explanation: Change the direction of edges show in red such that each node can reach the city 0 (capital).
         */
        const n = 6;
        const connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]];
        const expected = 3;
        this.current_test_name = `${n} | ${connections}| ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(n, connections);
        assert.deepEqual(actual, expected);
    }

    test2() {
        /**
         * Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
            Output: 2
            Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
         */

        const n = 5;
        const connections = [[1, 0], [1, 2], [3, 2], [3, 4]];
        const expected = 2;
        this.current_test_name = `${n} | ${connections}| ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(n, connections);
        assert.deepEqual(actual, expected);


    }
}

class AllPathsFromSourceToTarget extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        /**
         * 
            Input: graph = [[1,2],[3],[3],[]]
            Output: [[0,1,3],[0,2,3]]
            Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
         */
        const graph = [[1, 2], [3], [3], []];
        const expected = [[0, 1, 3], [0, 2, 3]];
        this.current_test_name = `${graph} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(graph);
        assert.deepEqual(actual, expected);
    }

    test2() {
        /**
             * Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
            Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
         */
        const graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
        const expected = [[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]];
        this.current_test_name = `${graph} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(graph);
        assert.deepEqual(actual, expected);
    }

}


class CriticalConnectionsInANetwork extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        /**
         * Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
            Output: [[1,3]]
            Explanation: [[3,1]] is also accepted.
         */
        const n = 4;
        const connections = [[0, 1], [1, 2], [2, 0], [1, 3]];
        const expected = [[1, 3]];
        this.current_test_name = `${n} | ${connections} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(n, connections);
        assert.deepEqual(actual, expected);
    }

    test2() {
        /**
         * Input: n = 2, connections = [[0,1]]
            Output: [[0,1]]
         */
        const n = 2;
        const connections = [[0, 1]];
        const expected = [[0, 1]];
        this.current_test_name = `${n} | ${connections} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(n, connections);
        assert.deepEqual(actual, expected);

    }
}


class NumberOfEnclaves extends ProblemTests {
    constructor(Problem) {
        super(Problem)
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        /**
         * Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
            Output: 3
            Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
         */

        const grid = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]];
        const expected = 3;
        this.current_test_name = `${grid} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(grid);
        assert.deepEqual(actual, expected);

    }

    test2() {
        /**
         * Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
            Output: 0
            Explanation: All 1s are either on the boundary or can reach the boundary.
         */

        const grid = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]];
        const expected = 0;
        this.current_test_name = `${grid} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(grid);
        assert.deepEqual(actual, expected);
    }
}


class NumberOfClosedIslands extends ProblemTests {
    constructor(Problem) {
        super(Problem)
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
        this.tests.push(() => this.test3());
    }

    test1() {
        /**
         * Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
            Output: 2
            Explanation: 
            Islands in gray are closed because they are completely surrounded by water (group of 1s).
         */

        const grid = [[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]];
        const expected = 2;
        this.current_test_name = `${grid} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(grid);
        assert.deepEqual(actual, expected);

    }

    test2() {
        /**
         * Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
            Output: 1
         */

        const grid = [[0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 0]];
        const expected = 1;
        this.current_test_name = `${grid} | ${expected}`
        const structure = new this.Problem()
        const actual = structure.solve(grid);
        assert.deepEqual(actual, expected);
    }

    test3(){
        /**
         * Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
            Output: 2
         */

            const grid = [[1,1,1,1,1,1,1],
                [1,0,0,0,0,0,1],
                [1,0,1,1,1,0,1],
                [1,0,1,0,1,0,1],
                [1,0,1,1,1,0,1],
                [1,0,0,0,0,0,1],
                [1,1,1,1,1,1,1]];
            const expected = 2;
            this.current_test_name = `${grid} | ${expected}`
            const structure = new this.Problem()
            const actual = structure.solve(grid);
            assert.deepEqual(actual, expected);

    }
}





const TEST_DICTIONARY = {
    'number-of-provinces': NumberOfProvinces,
    'find-eventual-safe-states': FindEventualSafeStates,
    'key-and-rooms': KeyAndRooms,
    'shortest-path-with-alternating-colors': ShortedPathWithAlternatingColors,
    'nearest-exit-from-entrance-in-maze': NearestExitFromEntranceInMaze,
    'shortest-bridge': ShortestBridge,
    'jump-game-iii': JumpGameIII,
    '01-matrix': Matrix01,
    'time-needed-to-inform-all-employees': TimeNeededToInformAllEmployees,
    'reorder-routes-to-make-all-paths-lead-to-the-city-zero': ReorderRoutesToMakeAllPathLeadToTheCity,
    'all-paths-from-source-to-target': AllPathsFromSourceToTarget,
    'critical-connections-in-a-network': CriticalConnectionsInANetwork,
    'number-of-enclaves': NumberOfEnclaves,
    'number-of-closed-islands': NumberOfClosedIslands,
    


}

module.exports = TEST_DICTIONARY;


