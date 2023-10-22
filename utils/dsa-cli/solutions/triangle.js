class MinimumTotal {
    constructor() {
      this.memoTable = new Map();
      this.triangle = [];
    }
  
    minPath(row, col) {
      const params = row + ":" + col;
      if (this.memoTable.has(params)) {
        return this.memoTable.get(params);
      }
      let path = this.triangle[row][col];
      if (row < this.triangle.length - 1) {
        path += Math.min(this.minPath(row + 1, col), this.minPath(row + 1, col + 1));
      }
      this.memoTable.set(params, path);
      return path;
    }
  
    solve(triangle) {
      this.triangle = triangle;
      return this.minPath(0, 0);
    }
  }
  
  module.exports = { Problem: MinimumTotal };
  