---
title: Hill Climbing Search
description: AI Search Problem
tags: [ medium, search, ai]
---

### Description

Hill climbing is a simple optimization algorithm used in Artificial Intelligence (AI) to find the best possible solution for a given problem. It belongs to the family of local search algorithms and is often used in optimization problems where the goal is to find the best solution from a set of possible solutions.

In Hill Climbing, the algorithm starts with an initial solution and then iteratively makes small changes to it in order to improve the solution. These changes are based on a heuristic function that evaluates the quality of the solution. The algorithm continues to make these small changes until it reaches a local maximum, meaning that no further improvement can be made with the current set of moves.

Hill Climbing can be useful in a variety of optimization problems, such as scheduling, route planning, and resource allocation. However, it has some limitations, such as the tendency to get stuck in local maxima and the lack of diversity in the search space. Therefore, it is often combined with other optimization techniques, such as genetic algorithms or simulated annealing, to overcome these limitations and improve the search results.


### Example 1


Given: 

```js

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
```

Should be able to find it it using depth First Search.







