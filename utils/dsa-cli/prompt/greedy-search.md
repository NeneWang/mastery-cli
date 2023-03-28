---
title: Greedy Search
description: AI Search Problem
tags: [ medium, search, ai]
---

### Description

Greedy Search is a graph search algorithm that is often used in pathfinding and graph traversal, which is the process of visiting (checking and/or updating) each vertex in a graph.

It uses a priority queue to decide which node to take on next

- The difference between Greedy Search and A* Search is that Greedy Search accounts only for the Heuristic function, while A* Search accounts for both the Heuristic function and the cost of the path.
- The difference between Greedy Search and Greedy Search and Hill Climbing is that Hill Climbing grabs the next closes heuristically, while Greedy First grabs the considers all alternatives by putting them all into a priority queue.




| Algorithm             | Comp. | Time    | Space   | Informed | Optimal |
| --------------------- | ----- | ------- | ------- | -------- | ------- |
| GreedyBestFirstSearch | No    | O(b^d)* | O(b^d)* | Yes      | No      |

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


```js
{
  path: [
    Node { id: 'A', x: 0, y: 2 },
    Node { id: 'D', x: 0, y: 1, heuristic: 1 },
    Node { id: 'G', x: 0, y: 0, heuristic: 0 }
  ],
  cost: null,
  count_searches: 3,
  formatted_path: 'A -> D -> G',
  exploration_path: [
    Node { id: 'A', x: 0, y: 2 },
    Node { id: 'D', x: 0, y: 1, heuristic: 1 },
    Node { id: 'G', x: 0, y: 0, heuristic: 0 }
  ],
  queue_snapshot: [
    [ { id: 'A', priority: 0 } ],
    [ { id: 'D', priority: 1 }, { id: 'B', priority: 3 } ],
    [
      { id: 'G', priority: 0 },
      { id: 'F', priority: 1 },
      { id: 'E', priority: 2 },
      { id: 'B', priority: 3 }
    ]
  ]
}
```



Another Example:

```js
Test  ||  passed
Test 2/2:
{
  path: [
    Node { id: 'A', x: 0, y: 0 },
    Node { id: 'B', x: 1, y: -1, heuristic: 14 },
    Node { id: 'D', x: 2, y: -2, heuristic: 12 },
    Node { id: 'I', x: 3, y: 1, heuristic: 14 },
    Node { id: 'R', x: 5, y: -1, heuristic: 10 },
    Node { id: 'AK', x: 8, y: -8, heuristic: 0 }
  ],
  cost: null,
  count_searches: 16,
  formatted_path: 'A -> B -> D -> I -> R -> AK',
  exploration_path: [
    Node { id: 'A', x: 0, y: 0 },
    Node { id: 'B', x: 1, y: -1, heuristic: 14 },
    Node { id: 'D', x: 2, y: -2, heuristic: 12 },
    Node { id: 'H', x: 3, y: -1, heuristic: 12 },
    Node { id: 'P', x: 5, y: -5, heuristic: 6 },
    Node { id: 'Q', x: 5, y: -3, heuristic: 8 },
    Node { id: 'AF', x: 7, y: -1, heuristic: 8 },
    Node { id: 'AG', x: 7, y: 1, heuristic: 10 },
    Node { id: 'AH', x: 7, y: 3, heuristic: 12 },
    Node { id: 'E', x: 2, y: 0, heuristic: 14 },
    Node { id: 'K', x: 4, y: -4, heuristic: 8 },
    Node { id: 'V', x: 6, y: -6, heuristic: 4 },
    Node { id: 'W', x: 6, y: -4, heuristic: 6 },
    Node { id: 'I', x: 3, y: 1, heuristic: 14 },
    Node { id: 'R', x: 5, y: -1, heuristic: 10 },
    Node { id: 'AK', x: 8, y: -8, heuristic: 0 }
  ],
  queue_snapshot: [
    [ { id: 'A', priority: 0 } ],
    [ { id: 'B', priority: 14 }, { id: 'C', priority: 16 } ],
    [
      { id: 'D', priority: 12 },
      { id: 'E', priority: 14 },
      { id: 'C', priority: 16 }
    ],
    [
      { id: 'H', priority: 12 },
      { id: 'E', priority: 14 },
      { id: 'I', priority: 14 },
      { id: 'C', priority: 16 }
    ],
    [
      { id: 'P', priority: 6 },
      { id: 'Q', priority: 8 },
      { id: 'E', priority: 14 },
      { id: 'I', priority: 14 },
      { id: 'C', priority: 16 }
    ],
    ...
```



