class BalanceBinaryTree {

	isBalanced = function (root) {

		const isChildBalanced = (root) => {

			const left = this.isBalanced(root.left);
			const right = this.isBalanced(root.right);

			return left && right;

		}

	const isAcceptableHeight = (root) => {

		const left = getHeight(root.left);
		const right = getHeight(root.right);

		const difference = Math.abs(left-right);

		return difference <= 1;
	}

	const getHeight = (root) => {
		const isBaseCase = root == null;
		if(isBaseCase) return 0;
		
		return dfs(root);
	}

	var dfs = (root) => {
		const left = getHeight(root.left);
		const right = getHeight(root.right);

		const height = Math.max(left, right);

		return height + 1;
	}

	const isBaseCase = root == null;
	if(isBaseCase) return true;
	if(!isAcceptableHeight(root)) return false;
	if(!isChildBalanced) return false;

	return true;
	
	}



	solve(root) {
		return this.isBalanced(root);	
		
		// Your code here

	}
}


module.exports = { Problem: BalanceBinaryTree };
