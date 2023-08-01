class DiameterOfBinaryTree {
	

	solve(root, max = [0]) {
	// Your code here
		
		const findDiameterOfTree = (root, max) => {
			if (root == null) return 0;

			return dfs(root, max);
		}

		const dfs = (root, max) => {
			const right = findDiameterOfTree(root.right, max);
			const left = findDiameterOfTree(root.left, max);

			const width = right + left;
			max[0] = Math.max(width, max[0]);

			const height = Math.max(left, right);
			return height + 1;
		}

		findDiameterOfTree(root, max);
		return max[0];

	}
}


module.exports = { Problem: DiameterOfBinaryTree };
