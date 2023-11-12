const assert = require('assert');
const ProblemTests = require('./problem-test');



// eliminate-maximum-number-of-monsters
class EliminateMaximumNumberOfMonsters extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        // this.tests.push(() => this.test3());
    }

    test_1() {
        const input = [[1, 3, 4], [1, 1, 1]];
        const output = 3;
        this.current_test_name = `${input} | ${output}`;

        const structure = new this.Problem()
        const result = structure.solve(input, output);
        assert(result);
    }

    test_2() {
        const input = [[1, 1, 3, 5, 5], [2, 3, 2, 3, 2]];
        const output = 3;
        this.current_test_name = `${input} | ${output}`;

        const structure = new this.Problem()
        const result = structure.solve(input, output);
        assert(result);
    }

}


class CountNumberOfHomogenousSubstrings extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        // this.tests.push(() => this.test3());
    }

    test_1() {
        const input = "abbcccaa";
        const output = 13;
        this.current_test_name = `${input} | ${output}`;

        const structure = new this.Problem()
        const result = structure.solve(input, output);
        assert(result);
    }

    test_2() {
        const input = "xy";
        const output = 2;
        this.current_test_name = `${input} | ${output}`;

        const structure = new this.Problem()
        const result = structure.solve(input, output);
        assert(result);
    }

}

class DesignGraphWithShortestPathCalculator extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        // this.tests.push(() => this.test3());
    }

    test_1() {
        /**
         * Graph g = new Graph(4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]]);
            g.shortestPath(3, 2); // return 6. The shortest path from 3 to 2 in the first diagram above is 3 -> 0 -> 1 -> 2 with a total cost of 3 + 2 + 1 = 6.
            g.shortestPath(0, 3); // return -1. There is no path from 0 to 3.
            g.addEdge([1, 3, 4]); // We add an edge from node 1 to node 3, and we get the second diagram above.
            g.shortestPath(0, 3); // return 6. The shortest path from 0 to 3 now is 0 -> 1 -> 3 with a total cost of 2 + 4 = 6.
         */

        const graph = new this.Problem(4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]]);
        assert.equal(graph.shortestPath(3, 2), 6);
        assert.equal(graph.shortestPath(0, 3), -1);
        graph.addEdge([1, 3, 4]);
        assert.equal(graph.shortestPath(0, 3), 6);
    }

}

class BusRoutes extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const input = [[1, 2, 7], [3, 6, 7]];
        const output = 2;
        this.current_test_name = `${input} | ${output}`;

        const structure = new this.Problem()
        const result = structure.solve(input, output);
        assert(result);

    }

    test_2() {
        const input = [[1, 2, 7], [3, 6, 7], [3, 6, 7]];
        const output = 2;
        this.current_test_name = `${input} | ${output}`;

        const structure = new this.Problem()
        const result = structure.solve(input, output);
        assert(result);
    }

    test_3() {
        const input = [[1, 2, 7], [3, 6, 7], [3, 6, 7], [3, 6, 7]];
        const output = 2;
        this.current_test_name = `${input} | ${output}`;

        const structure = new this.Problem()
        const result = structure.solve(input, output);
        assert(result);
    }
}


const TEST_DICTIONARY = {
    "eliminate-maximum-number-of-monsters": EliminateMaximumNumberOfMonsters,
    "count-number-of-homogenous-substrings": CountNumberOfHomogenousSubstrings,
    'design-graph-with-shortest-path-calculator': DesignGraphWithShortestPathCalculator,
    'bus-routes': BusRoutes,
}


module.exports = TEST_DICTIONARY;

