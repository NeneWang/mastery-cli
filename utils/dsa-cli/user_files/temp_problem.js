class ValidateBinarySearchTree {
	

	isValidBST(root, min = -Infinity, max = Infinity){
		const dfs = (root, min, max) => {
			const left = this.isValidBST(root.left, min, root.val);
			const right = this.isValidBST(root.right, root.val, max);

			return left && right;

		}

		const isBaseCase = root === null;
		if(isBaseCase) return true;

		const isInvalid = root.val <= min || root.val >= max;
		if(isInvalid) return false;

		return dfs(root);
	}

	solve(root) {
	// Your code here
		return this.isValidBST(root);
	}
}


module.exports = { Problem: ValidateBinarySearchTree };
