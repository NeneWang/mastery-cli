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
        //   D____E___ F___ G

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

        //   A____B____C
        //   |\   |   /
        //   | \  |  /
        //   |  \ | /
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
    // Creates a long ass graph
    create_long_ass_graph() {


        // These are the coordinates, but the connectiosn are incorrect, you better use this:
        // https://csacademy.com/app/graph_editor/
        /**
        A B
        A C
        B D
        B E
        C F
        C G
        D H
        D I
        E J
        E K
        F L
        F M
        G N
        G O
        H P
        H Q
        I R
        I S
        J T
        J U
        K V
        K W
        L X
        L Y
        M Z
        M AA
        N AB
        N AC
        O AD
        O AE
        P AF
        P AG
        Q AH
        Q AI
        R AJ
        R AK
         */
        // 
        // 
        //              A
        //            /   \
        //           B     C
        //          / \   / \
        //         D   E F   G
        //        / \ /  \  / \
        //       H  I J  K L  M
        //          / \ | / \ | \
        //         N   O P   Q   R
        //          \ /  |  / \  |
        //          AB  AE AF  AI
        //              / \ | / \
        //             AD  AG AH AJ
        //                  |  |
        //                 AK  AK



        const A = new Node('A', 0, 0);
        const B = new Node('B', 1, -1);
        const C = new Node('C', 1, 1);
        const D = new Node('D', 2, -2);
        const E = new Node('E', 2, 0);
        const F = new Node('F', 2, 2);
        const G = new Node('G', 3, -3);
        const H = new Node('H', 3, -1);
        const I = new Node('I', 3, 1);
        const J = new Node('J', 3, 3);
        const K = new Node('K', 4, -4);
        const L = new Node('L', 4, -2);
        const M = new Node('M', 4, 0);
        const N = new Node('N', 4, 2);
        const O = new Node('O', 4, 4);
        const P = new Node('P', 5, -5);
        const Q = new Node('Q', 5, -3);
        const R = new Node('R', 5, -1);
        const S = new Node('S', 5, 1);
        const T = new Node('T', 5, 3);
        const U = new Node('U', 5, 5);
        const V = new Node('V', 6, -6);
        const W = new Node('W', 6, -4);
        const X = new Node('X', 6, -2);
        const Y = new Node('Y', 6, 0);
        const Z = new Node('Z', 6, 2);
        const AA = new Node('AA', 6, 4);
        const AB = new Node('AB', 6, 6);
        const AC = new Node('AC', 7, -7);
        const AD = new Node('AD', 7, -5);
        const AE = new Node('AE', 7, -3);
        const AF = new Node('AF', 7, -1);
        const AG = new Node('AG', 7, 1);
        const AH = new Node('AH', 7, 3);
        const AI = new Node('AI', 7, 5);
        const AJ = new Node('AJ', 7, 7);
        const AK = new Node('AK', 8, -8);

        const graph = new Graph();
        graph.addEdge(A, B);
        graph.addEdge(A, C);
        graph.addEdge(B, D);
        graph.addEdge(B, E);
        graph.addEdge(C, F);
        graph.addEdge(C, G);
        graph.addEdge(D, H);
        graph.addEdge(D, I);
        graph.addEdge(E, J);
        graph.addEdge(E, K);
        graph.addEdge(F, L);
        graph.addEdge(F, M);
        graph.addEdge(G, N);
        graph.addEdge(G, O);
        graph.addEdge(H, P);
        graph.addEdge(H, Q);
        graph.addEdge(I, R);
        graph.addEdge(I, S);
        graph.addEdge(J, T);
        graph.addEdge(J, U);
        graph.addEdge(K, V);
        graph.addEdge(K, W);
        graph.addEdge(L, X);
        graph.addEdge(L, Y);
        graph.addEdge(M, Z);
        graph.addEdge(M, AA);
        graph.addEdge(N, AB);
        graph.addEdge(N, AC);
        graph.addEdge(O, AD);
        graph.addEdge(O, AE);
        graph.addEdge(P, AF);
        graph.addEdge(P, AG);
        graph.addEdge(Q, AH);
        graph.addEdge(Q, AI);
        graph.addEdge(R, AJ);
        graph.addEdge(R, AK);

        const nodes = { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, AA, AB, AC, AD, AE, AF, AG, AH, AI, AJ, AK };
        return { graph: graph, nodes: nodes };
    }


}




class AStarSearch extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());

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


    test_3() {
        const { graph, nodes } = new GraphBuilders().create_long_ass_graph();
        const start = nodes.A;
        const goal = nodes.AK;

        const problem = new this.Problem
        const results = problem.solve(graph, start, goal);
        console.log(`Count Searches for AStarSearch: ${results.count_searches}`)
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));
        // console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));
    }

}

class DepthFirstSearch extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());

    }

    test_1() {

        const { graph, nodes } = new GraphBuilders().create_graph_5();
        const start = nodes.A;
        const goal = nodes.G;

        const problem = new this.Problem

        const results = problem.solve(graph, start, goal);
        console.log(" Time taken"
        )
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));

    }

    test_3() {
        const { graph, nodes } = new GraphBuilders().create_long_ass_graph();
        const start = nodes.A;
        const goal = nodes.AK;

        const problem = new this.Problem
        const results = problem.solve(graph, start, goal);
        console.log(`Count Searches in Long Graph: ${results.count_searches}`)
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));
    }

}

class GreedySearch extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());

    }


    test_1() {

        const { graph, nodes } = new GraphBuilders().create_graph_5();
        const start = nodes.A;
        const goal = nodes.G;

        const problem = new this.Problem

        const results = problem.solve(graph, start, goal);
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));

    }


    test_3() {
        const { graph, nodes } = new GraphBuilders().create_long_ass_graph();
        const start = nodes.A;
        const goal = nodes.AK;

        const problem = new this.Problem
        const results = problem.solve(graph, start, goal);
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));
        console.log(`Count Searches for GreedySearch: ${results.count_searches}`)
        // console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));
    }

}

class breadthFirstSearch extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());

    }


    test_1() {

        const { graph, nodes } = new GraphBuilders().create_graph_5();
        const start = nodes.A;
        const goal = nodes.G;

        const problem = new this.Problem

        const results = problem.solve(graph, start, goal);
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));

    }

    test_3() {

        const { graph, nodes } = new GraphBuilders().create_long_ass_graph();
        const start = nodes.A;
        const goal = nodes.AK;

        const problem = new this.Problem
        const results = problem.solve(graph, start, goal);
        console.log(`Count Searches for Breath First Search: ${results.count_searches}`)
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));
    }
}

class hillClimbingSearch extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());

    }


    test_1() {

        const { graph, nodes } = new GraphBuilders().create_graph_5();
        const start = nodes.A;
        const goal = nodes.G;

        const problem = new this.Problem

        const results = problem.solve(graph, start, goal);
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));

    }

    test_3() {

        const { graph, nodes } = new GraphBuilders().create_long_ass_graph();
        const start = nodes.A;
        const goal = nodes.AK;

        const problem = new this.Problem
        try {
            const results = problem.solve(graph, start, goal);
            console.log(`Count Searches Hill Climbing Search: ${results.count_searches}`)
        } catch (error) {
            console.log(error);
        }
    }
}


class DijkstraSearch extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());

    }

    test_1() {

        const { graph, nodes } = new GraphBuilders().create_graph_5();
        const start = nodes.A;
        const goal = nodes.G;

        const problem = new this.Problem

        const results = problem.solve(graph, start, goal);
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));

    }

    test_3() {

        const { graph, nodes } = new GraphBuilders().create_long_ass_graph();
        const start = nodes.A;
        const goal = nodes.AK;

        const problem = new this.Problem
        try {
            const results = problem.solve(graph, start, goal);
            // console.log(`Count Searches: ${results.count_searches}`)
            console.log("Results");
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

}




class BeamSearch extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());

    }

    test_1() {

        const { graph, nodes } = new GraphBuilders().create_graph_5();
        const start = nodes.A;
        const goal = nodes.G;

        const problem = new this.Problem

        const results = problem.solve(graph, start, goal);
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));

    }

    
    test_2() {

        const { graph, nodes } = new GraphBuilders().create_graph_5();
        const start = nodes.A;
        const goal = nodes.G;

        const problem = new this.Problem

        const results = problem.solve(graph, start, goal, 1);
        console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));

    }

    test_3() {

        const { graph, nodes } = new GraphBuilders().create_long_ass_graph();
        const start = nodes.A;
        const goal = nodes.AK;

        const problem = new this.Problem
        try {
            const results = problem.solve(graph, start, goal);
            // console.log(`Count Searches: ${results.count_searches}`)
            console.log("Results");
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }


    test_4() {

        const { graph, nodes } = new GraphBuilders().create_long_ass_graph();
        const start = nodes.A;
        const goal = nodes.AK;

        const problem = new this.Problem
        try {
            const results = problem.solve(graph, start, goal, 10);
            // console.log(`Count Searches: ${results.count_searches}`)
            console.log("Results");
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

}



const TEST_DICTIONARY = {
    'a-star-search': AStarSearch,
    'depth-first-search': DepthFirstSearch,
    'greedy-search': GreedySearch,
    'breadth-first-search': breadthFirstSearch,
    'hill-climbing-search': hillClimbingSearch,
    'beam-search': BeamSearch,
    'dijkstra-search': DijkstraSearch,
}

module.exports = TEST_DICTIONARY;



