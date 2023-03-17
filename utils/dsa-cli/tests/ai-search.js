const assert = require('assert');
const ProblemTests = require('./problem-test');
const util = require('util');


class Node {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

class Graph {
    constructor() {
        this.edges = {};
    }

    addEdge(node, neighbor) {
        if (!this.edges[node.id]) {
            this.edges[node.id] = [];
        }
        this.edges[node.id].push(neighbor);
    }

    neighbors(node) {
        return this.edges[node.id];
    }

    cost(nodeA, nodeB) {
        return 1; // Assuming uniform cost for this example
    }

    dfs(currentNode, visitedNodes = new Set()) {
        visitedNodes.add(currentNode);

        if (!this.edges[currentNode.id]) {
            console.log("No neighbors (leaf node)");
            // console.log("Path", visitedNodes);
            printPath(visitedNodes)
            return;
        } // No neighbors (leaf node)

        this.neighbors(currentNode).forEach(neighbor => {
            if (!visitedNodes.has(neighbor)) {
                this.dfs(neighbor, new Set(visitedNodes));
            }
        });
    }
}

class GraphBuilders {
    create_graph_1() {

        //     
        //     A
        //     / \
        //    B   C
        //   / \   \
        //  D   E   F
        //   \ /   /
        //    G___/

        //    

        // Create nodes with x and y properties
        const A = new Node('A', 0, 0);
        const B = new Node('B', 1, 0);
        const C = new Node('C', 0, 1);
        const D = new Node('D', 2, 0);
        const E = new Node('E', 1, 1);
        const F = new Node('F', 0, 2);
        const G = new Node('G', 2, 2);

        const graph = new Graph();
        graph.addEdge(A, B);
        graph.addEdge(A, C);
        graph.addEdge(B, D);
        graph.addEdge(B, E);
        graph.addEdge(C, F);
        graph.addEdge(D, G);
        graph.addEdge(E, G);
        graph.addEdge(F, G);

        return { graph, nodes: { A, B, C, D, E, F, G } };
    }

    create_graph_2() {


        //     A
        //     / \
        //    B   C
        //   /     \
        //  D       E
        //   \     /
        //    F___G

        const A = new Node('A', 0, 0);
        const B = new Node('B', 1, 0);
        const C = new Node('C', 2, 0);
        const D = new Node('D', 1, 1);
        const E = new Node('E', 2, 1);
        const F = new Node('F', 1, 2);
        const G = new Node('G', 2, 2);

        const graph = new Graph();
        graph.addEdge(A, B);
        graph.addEdge(A, C);
        graph.addEdge(B, D);
        graph.addEdge(C, E);
        graph.addEdge(D, F);
        graph.addEdge(E, G);
        graph.addEdge(F, G);

        return { graph, nodes: { A, B, C, D, E, F, G } };

    }

    create_graph_3() {


        //   A____B
        //   |    |
        //   |    |
        //   C____D
        //   |    |
        //   |    |
        //   E____F

        const A = new Node('A', 0, 2);
        const B = new Node('B', 2, 2);
        const C = new Node('C', 0, 1);
        const D = new Node('D', 2, 1);
        const E = new Node('E', 0, 0);
        const F = new Node('F', 2, 0);

        const graph = new Graph();
        graph.addEdge(A, B);
        graph.addEdge(A, C);
        graph.addEdge
        graph.addEdge(B, D);
        graph.addEdge(C, E);
        graph.addEdge(D, F);
        graph.addEdge(E, F);
        return { graph, nodes: { A, B, C, D, E, F } };
    }

    create_graph_4() {

        //   A____B____C
        //   |         |
        //   |         |
        //   D____E___F___G

        const A = new Node('A', 0, 0);
        const B = new Node('B', 1, 0);
        const C = new Node('C', 2, 0);
        const D = new Node('D', 3, 0);
        const E = new Node('E', 1, 1);
        const F = new Node('F', 2, 1);
        const G = new Node('G', 3, 1);

        const graph = new Graph();
        graph.addEdge(A, B);
        graph.addEdge(B, C);
        graph.addEdge(C, D);
        graph.addEdge(B, E);
        graph.addEdge(C, F);
        graph.addEdge(F, G);
        graph.addEdge(E, G);

        const nodes = { A, B, C, D, E, F, G };
        return { graph, nodes };
    }

    create_graph_5() {

        //   A____B
        //   |\   |
        //   | \  |
        //   |  \ |
        //   D___\E
        //   |\  |
        //   | \ |
        //   |__\|
        //   F    G

        const A = new Node('A', 0, 2);
        const B = new Node('B', 1, 2);
        const C = new Node('C', 2, 2);
        const D = new Node('D', 0, 1);
        const E = new Node('E', 1, 1);
        const G = new Node('G', 0, 0);
        const F = new Node('F', 1, 0);

        const graph = new Graph();
        graph.addEdge(A, B);
        graph.addEdge(A, D);
        graph.addEdge(B, C);
        graph.addEdge(B, E);
        graph.addEdge(C, E);
        graph.addEdge(D, G);
        graph.addEdge(D, F);
        graph.addEdge(D, E);
        graph.addEdge(E, G);
        graph.addEdge(G, G);

        const nodes = { A, B, C, D, E, G, F };
        return { graph: graph, nodes: nodes };
    }
}

class AStarSearch extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());

    }



    test_1() {

        const { graph, nodes } = new GraphBuilders().create_graph_5();
        const start = nodes.A;
        const goal = nodes.G;

        const problem = new this.Problem

        const results = problem.solve(graph, start, goal);
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));
        assert.equal(results.path.length, 3);
        assert.equal(results.path[0], start);
        assert.equal(results.path[2], goal);


    }


    test_2() {

        const { graph, nodes } = new GraphBuilders().create_graph_5();
        const start = nodes.A;
        const goal = nodes.F;

        const problem = new this.Problem

        const results = problem.solve(graph, start, goal);
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));
        assert.equal(results.path.length, 3);
        assert.equal(results.path[0], start);
        assert.equal(results.path[2], goal);

    }

}

const TEST_DICTIONARY = {
    'a-star-search': AStarSearch,
}

module.exports = TEST_DICTIONARY;



