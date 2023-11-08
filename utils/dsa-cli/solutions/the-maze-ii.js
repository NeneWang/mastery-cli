class TheMazeII {

    solve(maze, start, dest) {
        return this.shortestDistance(maze, start, dest);
    }


    shortestDistance(maze, start, dest) {
        const distance = new Array(maze.length).fill(0).map(() => new Array(maze[0].length).fill(Infinity));
        distance[start[0]][start[1]] = 0;
        this.dfs(maze, start, distance);
        return distance[dest[0]][dest[1]] === Infinity ? -1 : distance[dest[0]][dest[1]];
    }

    dfs(maze, start, distance) {
        const dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];
        for (const dir of dirs) {
            let x = start[0] + dir[0];
            let y = start[1] + dir[1];
            let count = 0;
            while (x >= 0 && y >= 0 && x < maze.length && y < maze[0].length && maze[x][y] === 0) {
                x += dir[0];
                y += dir[1];
                count++;
            }
            if (distance[start[0]][start[1]] + count < distance[x - dir[0]][y - dir[1]]) {
                distance[x - dir[0]][y - dir[1]] = distance[start[0]][start[1]] + count;
                this.dfs(maze, [x - dir[0], y - dir[1]], distance);
            }
        }
    }
}


module.exports = { Problem: TheMazeII };