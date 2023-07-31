class BinaryTreeMaximumPathSum {

	maxPathSum = function (root, maxValue = [-Infinity]){

		const pathSum = (root, maxValue) => {
			const isBaseCase = root == null;
			if(isBaseCase) return 0;

			return dfs(root, maxValue);
		}

		const dfs = (node, maxValue) => {
			
			//We have an array so that we can just use the reference. Otherwise we return 0.
			const left = Math.max(0, pathSum(node.left, maxValue));
			const right = Math.max(0, pathSum(node.right, maxValue));

			// Find the split value.
			
			const sum = node.val + left + right;
			
			maxValue[0] = Math.max(maxValue[0], sum);
			
			return Math.max(left, right) + node.val;
		}

		pathSum(root, maxValue);

		return maxValue[0];


	}

	solve(root) {
	// Your code here
		return this.maxPathSum(root)	

	}
}


module.exports = { Problem: BinaryTreeMaximumPathSum };
