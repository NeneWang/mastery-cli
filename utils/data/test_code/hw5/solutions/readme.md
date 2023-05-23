---
title: Notes
---

## 1. Graph Exploration

### Depth First Search

file: depth-first-search.py

```
Current: <functions.Node object at 0x10d34bfd0> len(queue): 0
Current: <functions.Node object at 0x10d3491b0> len(queue): 1
Current: <functions.Node object at 0x10d349210> len(queue): 2
Current: <functions.Node object at 0x10d3492a0> len(queue): 3
Found goal! f
{'count_searches': 4, 'exploration_path': ['s', 'd', 'e', 'f'], 'queue_snapshot': [[], ['a'], ['a', 'a'], ['a', 'a', 'b']], 'cost': 4, 'path_found': ['s', 'd', 'e', 'f']}
```

###  Breadth First Search

file: breadth-first-search.py

```
Current: <functions.Node object at 0x102cb7fa0> len(queue): 0
Current: <functions.Node object at 0x102cb7b50> len(queue): 1
Current: <functions.Node object at 0x102cb7af0> len(queue): 2
Current: <functions.Node object at 0x102cb7a90> len(queue): 3
Found goal! f
{'count_searches': 4, 'exploration_path': ['s', 'd', 'e', 'f'], 'queue_snapshot': [[], ['a'], ['a', 's'], ['a', 's', 'b']], 'cost': 4, 'path_found': ['s', 'd', 'e', 'f']}
```


### Hill Climbing Search

file: hill-climbing-search.py

```
Current: <functions.Node object at 0x109803fa0> len(queue): 1
+ Found better neighbor: <functions.Node object at 0x109803f40> with heuristic 3 from <functions.Node object at 0x109803fa0>
Choosing to travel to <functions.Node object at 0x109803f40> with heuristic 3 from <functions.Node object at 0x109803fa0>
Current: <functions.Node object at 0x109803f40> len(queue): 2
+ Found better neighbor: <functions.Node object at 0x109803b50> with heuristic 5 from <functions.Node object at 0x109803f40>
+ Found better neighbor: <functions.Node object at 0x109803d30> with heuristic 4 from <functions.Node object at 0x109803f40>
Choosing to travel to <functions.Node object at 0x109803d30> with heuristic 4 from <functions.Node object at 0x109803f40>
Current: <functions.Node object at 0x109803d30> len(queue): 3
+ Found better neighbor: <functions.Node object at 0x109803bb0> with heuristic 4 from <functions.Node object at 0x109803d30>
Choosing to travel to <functions.Node object at 0x109803bb0> with heuristic 4 from <functions.Node object at 0x109803d30>
Current: <functions.Node object at 0x109803bb0> len(queue): 4
No usable neighbors @<functions.Node object at 0x109803bb0>, neighbors are: 
{'start': <functions.Node object at 0x109803fa0>, <functions.Node object at 0x109803f40>: <functions.Node object at 0x109803d30>, <functions.Node object at 0x109803b50>: <functions.Node object at 0x109803fa0>, <functions.Node object at 0x109803af0>: <functions.Node object at 0x109803b50>, <functions.Node object at 0x109803d30>: <functions.Node object at 0x109803af0>, <functions.Node object at 0x109803a90>: <functions.Node object at 0x109803af0>, <functions.Node object at 0x109803a30>: <functions.Node object at 0x109803a90>, <functions.Node object at 0x109803bb0>: <functions.Node object at 0x109803d30>}
{'count_searches': 4, 'exploration_path': ['s', 'a', 'b', 'c'], 'queue_snapshot': [['s'], ['s', 'a'], ['s', 'a', 'b'], ['s', 'a', 'b', 'c']], 'goal_found': False}
```



## 2. 8 Puzzle Problem

The 8 puzzle problem is a problem where you have a 3x3 grid with 8 tiles and one empty space. The goal is to move the tiles around to get the tiles in order. The tiles can only move up, down, left, or right. The empty space can only move into the space of a tile. The problem is to find the shortest path to get the tiles in order.

- Solution on file: puzzle-*
  -  puzzle8-dfs.py # Implementation using depth first search
  -  puzzle8-bfs.py # Implementation using breadth first search
  -  puzzle8-hill.py # Implementation using hill climbing
  -  puzzle8-beam.py # Implementation using beam search

The metric devied by the heristic



### A Depth First Search

So the problem example was just no good cause it was hard to find if the algorithms worked

```
   Start                                                                         Goal

1    4    3                                                                    1   2    3

7    8    __                                                                   8  __   4

6    2    5                                                                    7   6    5
```

So I tried with different parameters:

Start

1 2 3 
5 6 0 
7 8 4 

End


1 2 3 
0 6 4 
5 7 8 



```bash
Max depth reached
Searches:  102
Solution Path:
1 2 3 
5 6 0 
7 8 4 

1 2 3 
5 6 4 
7 8 0 

1 2 3 
5 6 4 
7 0 8 

1 2 3 
5 6 4 
0 7 8 

1 2 3 
0 6 4 
5 7 8 

1 2 3 
5 6 4 
0 7 8 

1 2 3 
0 6 4 
5 7 8 

1 2 3 
5 6 4 
0 7 8 

1 2 3 
0 6 4 
5 7 8 

1 2 3 
5 6 4 
0 7 8 

1 2 3 
0 6 4 
5 7 8 

...
```


### A Breadth First Search

```
Solution found
Searches:  19
Solution Path:
1 2 3 
5 6 0 
7 8 4 

1 2 3 
5 0 6 
7 8 4 

1 2 3 
5 8 6 
7 0 4 

1 2 3 
5 8 6 
0 7 4 

```


### Hill Climbing Search

```
Solution found
Searches:  4
Solution Path:
1 2 3 
5 6 0 
7 8 4 

1 2 3 
5 0 6 
7 8 4 

1 2 3 
5 8 6 
7 0 4 

1 2 3 
5 8 6 
0 7 4
```


### Beam First Search


```
Solution found
Searches:  4
Solution Path:
1 2 3 
5 6 0 
7 8 4 

1 2 3 
5 0 6 
7 8 4 

1 2 3 
5 8 6 
7 0 4 

1 2 3 
5 8 6 
0 7 4 

```

-  Which search is most efficient?

I believe that Beam First Search would be the most efficient one. As it would be a variant of Hill Climbing but less likely to get stuck in the local minima and is still not wasteful like breath first search (given an admissible heuristic).


## Queen Problem

3. This is another problem that is best approached by building and searching a tree one step at a time. Implement a Python program that places 8 Queens on an 8x8 chess Board so that no queen can take another Queen (Use a 1 for a Queen and a 0 for an empty square).

(a) Since there are 8^8 possible placements of the Queens, this would lead to an very large Search Tree.

Show how a "smart" search tree can be generated, so that the searching can be done more efficiently to find the solution

(b) What Python data structures could be used to implement th finding of the solution in Python



(c) What are the best loop structures to use (explain)?

    (c. 1) Write a Python program to solve this problem.

### a

So my guess is that the smart way would be predicting based on the previous located queens, where the next queen shouldnt be placed. You could calculate the diagonals by knowing where the queens are and how the diagonals travels

### b 

- I would use a 2d array to represent the board. I would also use a list to represent the path to the solution. 

### c

- I cant clearly see an heuristic I could use to determine which node has a larger chance to be a good node. 
- And I am guessing that the best loop structure would be a while loop, since we dont know how many nodes we will have to search through.
- But I ended up using a for loop, as I can just iterate for each row and column and check if the queen can be placed there.
- DFS or BFS would be the best search strategy to use, since we are exploring all the nodes anyways.

- If I were to create nodes and solve it thtough something like greedy search, I could use some heuristic to determine if the node is a good node to add to the tree: such as if the node is not in a state where a queen can take another queen.
- Otherwise it could just go by an dfs stratgy to find them all, since we are exploring all the nodes anyways. (Complete search)


c.1 The solution is in the file nqueens-node.py

