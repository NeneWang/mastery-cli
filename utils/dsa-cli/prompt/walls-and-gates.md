---
title: Walls and Gates
description:  Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.
tags: [ neetcode, medium, graphs]
link: https://tenderleo.gitbooks.io/leetcode-solutions-/content/GoogleMedium/286.html
images: []
---

### Description

You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle. 0 - A gate. INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647. Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

### Example 1

```bash
INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
```
After running the function, the 2D grid should be:

```bash
  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
```

### Constraints:

- m == rooms.length
- n == rooms[i].length