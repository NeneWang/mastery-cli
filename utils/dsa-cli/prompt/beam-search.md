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
        //   |   |   /
        //   |   |  /
        //   |   | /
        //   D___E
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
        graph.addEdge(D,  G);
        graph.addEdge(E, G);
        graph.addEdge(G, G);

        const nodes = { A, B, C, D, E, G, F };
        return { graph: graph, nodes: nodes };
```

Should be able to find it it using Beam Search.

Traversal:

```js
______________________________________________
Results from create_graph_5, Beam Search

exploring current level: A
exploring current level: D, B
exploring current level: G, G, F
{
  path: [
    Node { id: 'A', x: 0, y: 2, heuristic: 2 },
    Node { id: 'D', x: 0, y: 1, heuristic: 1 },
    Node { id: 'G', x: 0, y: 0, heuristic: 0 }
  ],
  cost: 4,
  count_searches: 4,
  formatted_path: 'A -> D -> G',
  exploration_path: [
    Node { id: 'A', x: 0, y: 2, heuristic: 2 },
    Node { id: 'D', x: 0, y: 1, heuristic: 1 },
    Node { id: 'B', x: 1, y: 2, heuristic: 3 },
    Node { id: 'G', x: 0, y: 0, heuristic: 0 }
  ],
  queue_snapshot: [
    [ { '0': Node { id: 'A', x: 0, y: 2, heuristic: 2 } } ],
    [
      {
        '0': Node { id: 'D', x: 0, y: 1, heuristic: 1 },
        '1': Node { id: 'B', x: 1, y: 2, heuristic: 3 }
      }
    ],
    [
      {
        '0': Node { id: 'G', x: 0, y: 0, heuristic: 0 },
        '1': Node { id: 'G', x: 0, y: 0, heuristic: 0 },
        '2': Node { id: 'F', x: 1, y: 0 }
      }
    ]
  ]
}
Test  ||  passed
```


### t_graph_1

```js
        /**  
        A----B
       |  \ | \
       D   \|  H
       |  \ | /|
       |    C  |
        \    \ G
         \    /
          \  /
           E
           |
           F
         */


        const A = new Node('A', 0, 1);
        const B = new Node('B', 2, 1);
        const C = new Node('C', 2, -1);
        const D = new Node('D', 0, 0);
        const E = new Node('E', 1, -5);
        const F = new Node('F', 1, -6);
        const G = new Node('G', 3, -2);
        const H = new Node('H', 3, 0);

        const nodes = { A, B, C, D, E, F, G, H };


        const graph = new BidirectionalGraph();
        graph.addEdge(A, B);
        graph.addEdge(A, D);
        graph.addEdge(A, C);
        graph.addEdge(B, C);
        graph.addEdge(B, H);
        graph.addEdge(C, H);
        graph.addEdge(C, G);
        graph.addEdge(C, D);
        graph.addEdge(D, E);
        graph.addEdge(D, G);
        graph.addEdge(E, G);
        graph.addEdge(E, F);
```

```js
exploring current level: A
exploring current level: C, D, B // note how C is first, as it has the lowest heuristic.
exploring current level: E, G, H // Note how e is first., then g, then H.
exploring current level: F
______________________________________________
Results from t_graph_1, Beam Search
{
  path: [
    Node { id: 'A', x: 0, y: 1, heuristic: 8 },
    Node { id: 'D', x: 0, y: 0, heuristic: 7 },
    Node { id: 'E', x: 1, y: -5, heuristic: 1 },
    Node { id: 'F', x: 1, y: -6, heuristic: 0 }
  ],
  cost: 8,
  count_searches: 8,
  formatted_path: 'A -> D -> E -> F',
  exploration_path: [
    Node { id: 'A', x: 0, y: 1, heuristic: 8 },
    Node { id: 'C', x: 2, y: -1, heuristic: 6 },
    Node { id: 'D', x: 0, y: 0, heuristic: 7 },
    Node { id: 'B', x: 2, y: 1, heuristic: 8 },
    Node { id: 'E', x: 1, y: -5, heuristic: 1 },
    Node { id: 'G', x: 3, y: -2, heuristic: 6 },
    Node { id: 'H', x: 3, y: 0, heuristic: 8 },
    Node { id: 'F', x: 1, y: -6, heuristic: 0 }
  ],
  queue_snapshot: [
    [ { '0': Node { id: 'A', x: 0, y: 1, heuristic: 8 } } ],
    [
      {
        '0': Node { id: 'C', x: 2, y: -1, heuristic: 6 },
        '1': Node { id: 'D', x: 0, y: 0, heuristic: 7 },
        '2': Node { id: 'B', x: 2, y: 1, heuristic: 8 }
      }
    ],
    [
      {
        '0': Node { id: 'E', x: 1, y: -5, heuristic: 1 },
        '1': Node { id: 'G', x: 3, y: -2, heuristic: 6 },
        '2': Node { id: 'H', x: 3, y: 0, heuristic: 8 }
      }
    ],
    [ { '0': Node { id: 'F', x: 1, y: -6, heuristic: 0 } } ]
  ]
}
 t_graph_1 Beam Search: 8
```


