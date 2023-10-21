class SnakesAndLadders {
    solve(board) {
      const n = board.length;
      const cells = new Array(n * n + 1);
      let label = 1;
      const columns = Array.from({ length: n }, (_, i) => i);
  
      for (let row = n - 1; row >= 0; row--) {
        for (const column of columns) {
          cells[label++] = [row, column];
        }
        columns.reverse();
      }
  
      const dist = new Array(n * n + 1).fill(-1);
  
      class Vertex {
        constructor(distance, label) {
          this.distance = distance;
          this.label = label;
        }
  
        compareTo(v) {
          return this.distance - v.distance;
        }
      }
  
      const q = [];
  
      dist[1] = 0;
      q.push(new Vertex(0, 1));
  
      while (q.length > 0) {
        const vertex = q.shift();
        const d = vertex.distance;
        const curr = vertex.label;
  
        if (d !== dist[curr]) {
          continue;
        }
  
        for (let next = curr + 1; next <= Math.min(curr + 6, n * n); next++) {
          const [row, column] = cells[next];
          const destination =
            board[row][column] !== -1 ? board[row][column] : next;
  
          if (dist[destination] === -1 || d + 1 < dist[destination]) {
            dist[destination] = d + 1;
            q.push(new Vertex(dist[destination], destination));
          }
        }
      }
  
      return dist[n * n];
    }
  }
  
  module.exports = { Problem: SnakesAndLadders };
  