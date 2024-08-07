

const initGraph = (rows, cols) => ({
    graph: new Array((rows + 2)).fill()       /* Time O(N) | Space O(N) */
        .map(() => new Array((cols + 2)).fill(0)),/* Time O(M) | Space O(M) */
    indegree: new Array((rows + 2)).fill()    /* Time O(N) | Space O(N) */
        .map(() => new Array((cols + 2)).fill(0)),/* Time O(M) | Space O(M) */
    sources: new Queue()
})

var buildGraph = (matrix) => {
    const [rows, cols] = [matrix.length, matrix[0].length];
    const { graph, indegree, sources } =          /* Time O(N * M) | Space O(N * M) */
        initGraph(rows, cols);

    for (let row = 1; (row < (rows + 1)); row++) {/* Time O(N) */
        graph[row] = [0, ...matrix[row - 1], 0];    /*           | Space O(N * M) */
    }

    for (let row = 1; (row <= rows); row++) {     /* Time O(N) */
        for (let col = 1; (col <= cols); col++) {     /* Time O(M) */
            for (const [_row, _col] of getNeighbors(row, col)) {/* Time O(4) */
                const isSink = (graph[row][col] < graph[_row][_col]);
                if (isSink) indegree[row][col] += 1;      /*       | Space O(N * M) */
            }
        }
    }

    return { graph, indegree, sources };
}

var getNeighbors = (row, col) => [[0, 1], [0, -1], [1, 0], [-1, 0]]
    .map(([_row, _col]) => [(row + _row), (col + _col)]);

var findSources = (graph, indegree, sources) => {
    const [rows, cols] = [graph.length, graph[0].length];

    for (let row = 1; (row < (rows - 1)); ++row) {/* Time O(N) */
        for (let col = 1; (col < (cols - 1)); ++col) {/* Time O(M) */
            const isSource = (indegree[row][col] === 0);
            if (isSource) sources.enqueue([row, col]);  /* Space O(N * M) */
        }
    }
}

const bfs = (graph, indegree, sources, path = 0) => {
    while (!sources.isEmpty()) {                                     /* Time(N * M) */
        for (let level = (sources.size() - 1); 0 <= level; level--) {/* Time(WIDTH) */
            checkNeighbors(graph, indegree, sources)                     /* Space((N * M) + WIDTH) */
        }

        path += 1;
    }

    return path;
}

const checkNeighbors = (graph, indegree, sources) => {
    const [row, col] = sources.dequeue();

    for (const [_row, _col] of getNeighbors(row, col)) {
        const canDisconnect = (graph[_row][_col] < graph[row][col]);
        if (!canDisconnect) continue;

        indegree[_row][_col] -= 1;                    /* Space O(N * M) */

        const isSource = (indegree[_row][_col] === 0);
        if (isSource) sources.enqueue([_row, _col]);/* Space O(WIDTH) */
    }
}

const { graph, indegree, sources } =  /* Time O(N * M) | Space O(N * M) */
    buildGraph(matrix);

class LongestIncreasingPathInAMatrix {


    /**
     * Topological Sort
     * Matrix - Graph
     * Matrix - In-Degree
     * Queue - BFS
     * Time O(N * M) | Space O(N * M)
     * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath = (matrix) => {
        findSources(graph, indegree, sources);/* Time O(N * M) | Space O(N * M) */

        return bfs(graph, indegree, sources); /* Time O((N * M) + WIDTH) | Space O((N * M) + WIDTH) */
    }


    solve(matrix) {
        return this.longestIncreasingPath(matrix);
    }
}

module.exports = { Problem: LongestIncreasingPathInAMatrix };


