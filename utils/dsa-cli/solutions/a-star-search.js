

const DEBUG = false;


/**
 * Priority queue: designed to support an element and a priority, dequeues based on priority
 */
class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority); // sort by priority in ascending order
    }

    dequeue() {
        return this.elements.shift().element;
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    getSnapshot(){
        return this.elements.map(item => {
            return {id: item.element.id, priority: item.priority}
        });
    }
}

function heuristic(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}


function aStarSearch(graph, start, goal) {
    const frontier = new PriorityQueue();
    frontier.enqueue(start, 0);
    let count_searches = 0;
    let exploration_path = [];
    let queue_snapshot = [];


    // For backtracking purposes
    const cameFrom = new Map();
    cameFrom.set(start, null);
    const costSoFar = new Map();
    costSoFar.set(start, 0);

    while (!frontier.isEmpty()) {
        const current = frontier.dequeue();

        // explore(current);

        if (DEBUG) console.log("\n\nExploring", current.id);
        count_searches += 1;
        exploration_path.push(current);
        queue_snapshot.push(frontier.getSnapshot());


        if (current === goal) {
            if (DEBUG) console.log("Goal found!");
            break;
        }

        const neighbors = graph.neighbors(current);
        neighbors.forEach(next => {
            const newCost = costSoFar.get(current) + graph.cost(current, next);
            if (!costSoFar.has(next) || newCost < costSoFar.get(next)) {
                costSoFar.set(next, newCost);

                // console.log("newCost", newCost, "heuristic", heuristic(goal, next));
                const priority = newCost + heuristic(goal, next); // A* heuristic

                if (DEBUG) console.log(`Enqueuing`, next, ` with priority`, priority);
                frontier.enqueue(next, priority);

                cameFrom.set(next, current); // Remember where we came from
            }
        });
    }

    return {
        path: reconstructPath(cameFrom, start, goal),
        cost: costSoFar.get(goal),
        count_searches: count_searches,
        formatted_path: reconstructPath(cameFrom, start, goal).map(node => node.id).join(' -> '),
        exploration_path: exploration_path,
        queue_snapshot: queue_snapshot,
    };
}

/**
 * Reconstructs the path from the cameFrom map<Node, Node> by shifting backwards from the goal node to the start node
 * @param {Map<Node, Node>} cameFrom
 * @param {Node} start
 * @param {Node} goal
 * @returns {Node[]} path taken.
 */
function reconstructPath(cameFrom, start, goal) {
    let current = goal;
    const path = [current];
    while (current !== start) {
        current = cameFrom.get(current);
        path.unshift(current);
    }
    return path;
}


class Node {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

class Graph {
    constructor() {
        this.edges = {};
    }

    addEdge(node, neighbor) {
        if (!this.edges[node.id]) {
            this.edges[node.id] = [];
        }
        this.edges[node.id].push(neighbor);
    }

    neighbors(node) {
        return this.edges[node.id];
    }

    cost(nodeA, nodeB) {
        return 1; // Assuming uniform cost for this example
    }

    dfs(currentNode, visitedNodes = new Set()) {
        visitedNodes.add(currentNode);

        if (!this.edges[currentNode.id]) {
            if (DEBUG) console.log("No neighbors (leaf node)");
            // console.log("Path", visitedNodes);
            printPath(visitedNodes)
            return;
        } // No neighbors (leaf node)

        this.neighbors(currentNode).forEach(neighbor => {
            if (!visitedNodes.has(neighbor)) {
                this.dfs(neighbor, new Set(visitedNodes));
            }
        });
    }
}


class AStarSearch {

    solve(graph, start, goal) {
        const results = aStarSearch(graph, start, goal);
        return results;
    }


}



module.exports = { Problem: AStarSearch };