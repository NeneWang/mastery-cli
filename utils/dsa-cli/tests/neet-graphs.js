
const assert = require('assert');
const ProblemTests = require('./problem-test');

class Node {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }

    push(neighbor) {
        this.neighbors.push(neighbor);
    }

}

function arrayToNodeHeadNeighbors(array) {
    const nodes = [];
    for (let i = 0; i < array.length; i++) {
        nodes.push(new Node(i + 1));
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            nodes[i].push(nodes[array[i][j] - 1]);
        }
    }

    const head = new Node();
    head.neighbors = nodes;
    return head;

}

class CloneGraph extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
    }

    test_1() {
        const cloneGraph = new this.Problem();
        this.current_test_name = '[[2,4],[1,3],[2,4],[1,3]] | [[2,4],[1,3],[2,4],[1,3]]';
        assert.deepEqual(cloneGraph.solve(arrayToNodeHeadNeighbors([[2, 4], [1, 3], [2, 4], [1, 3]])), arrayToNodeHeadNeighbors([[2, 4], [1, 3], [2, 4], [1, 3]]));
    }


}


class CourseSchedule extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const courseSchedule = new this.Problem();
        this.current_test_name = '2, [[1,0]] | true';
        assert.deepEqual(courseSchedule.solve(2, [[1, 0]]), true);
    }

    test_2() {
        const courseSchedule = new this.Problem();
        this.current_test_name = '2, [[1,0],[0,1]] | false';
        assert.deepEqual(courseSchedule.solve(2, [[1, 0], [0, 1]]), false);
    }

}

class MaxAreaOfIsland extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const maxAreaOfIsland = new this.Problem();
        this.current_test_name = '[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]] | 6';
        assert.deepEqual(maxAreaOfIsland.solve(
            [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]),
            6
        );
    }

    test_2() {
        const maxAreaOfIsland = new this.Problem();
        this.current_test_name = '[[0,0,0,0,0,0,0,0]] | 0';
        assert.deepEqual(maxAreaOfIsland.solve([[0, 0, 0, 0, 0, 0, 0, 0]]), 0);
    }

}


class NumberOfIslands extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const numberOfIslands = new this.Problem();
        this.current_test_name = '[[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]] | 1';
        assert(1 == numberOfIslands.solve([
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"]
        ]));
    }

    test_2() {
        const numberOfIslands = new this.Problem();
        this.current_test_name = '[[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]] | 3';
        assert.deepEqual(numberOfIslands.solve([
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ]), 3);
    }


}


class PacificAtlanticWaterFlow extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const pacificAtlanticWaterFlow = new this.Problem();
        this.current_test_name = '[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]] | [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]';
        assert.deepEqual(pacificAtlanticWaterFlow.solve([
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4]
        ]).sort(), [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]].sort());
    }

    test_2() {
        const pacificAtlanticWaterFlow = new this.Problem();
        this.current_test_name

        assert.deepEqual(
            pacificAtlanticWaterFlow.solve([[1]]), [[0, 0]]
        )

    }

}




const TEST_DICTIONARY = {
    'clone-graph': CloneGraph,
    'course-schedule': CourseSchedule,
    'max-area-of-island': MaxAreaOfIsland,
    'number-of-islands': NumberOfIslands,
    'pacific-atlantic-water-flow': PacificAtlanticWaterFlow,
}


module.exports = TEST_DICTIONARY;

