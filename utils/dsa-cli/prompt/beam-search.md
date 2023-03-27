---
title: beam search
description: AI Search Problem
tags: [ medium, search, ai]
---

### Description

Introduction :
A heuristic technique is a set of criteria for determining which of multiple options will be the most effective in achieving a particular goal. This strategy increases the efficiency of a search process by surrendering claims of systematic and completeness of the best.
We can hope to achieve a good solution to difficult problems (such as the traveling salesman problem) in less than exponent time if we use appropriate heuristics. 


### Example 1

Sample Graph

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

Should be able to find it it using Beam Search.







