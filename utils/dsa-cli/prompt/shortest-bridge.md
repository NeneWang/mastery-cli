---
title: Shortest Bridge
description: Return the smallest number of 0's you must flip to connect the two islands.
tags: [graph, medium, bfs]
link: https://leetcode.com/problems/shortest-bridge/
images: []
---

### Description

You are given an `n x n` binary matrix grid where 1 represents land and 0 represents water.

An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

You may change 0's to 1's to connect the two islands to form one island.

Return the smallest number of 0's you must flip to connect the two islands.

### Example 1

```bash
Input: grid = [[0,1],[1,0]]
Output: 1
```

### Example 2

```bash
Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2
```

### Example 3

```bash
Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1
```

### Constraints:

- n == grid.length == grid[i].length
- 2 <= n <= 100
- grid[i][j] is either 0 or 1.
- There are exactly two islands in grid.


