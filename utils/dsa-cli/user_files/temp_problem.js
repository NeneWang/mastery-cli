class Node {
	constructor(val) {
		this.val = val;
		this.neighbors = [];
	}

	push(neighbor) {
		this.neighbors.push(neighbor);
	}

}


class CloneGraph {


	/**
	 * https://leetcode.com/problems/clone-graph/
	 * Time O(V + E) | Space O(N)
	 * @param {Node} node
	 * @return {Node}
	 */
	cloneGraph = function (node, seen = new Map()) {
		
		const dfs = (node, seen) => {

			const clone = new Node(node.val);
			seen.set(node, clone);

			for (const neighbor of node.neighbors){
				const cloneNeighbor = this.cloneGraph(neighbor, seen);
				clone.neighbors.push(cloneNeighbor);
			}

			return clone;

		}
		
		const isBaseCase = node === null;
		if(isBaseCase) return null;

		if(seen.has(node)) return seen.get(node);
		return dfs(node, seen);


	}

	solve(node) {
		return this.cloneGraph(node);
	}
}


module.exports = { Problem: CloneGraph };
