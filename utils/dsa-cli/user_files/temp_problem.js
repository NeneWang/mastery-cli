class SubstreeOfAnotherTree {

	isSubtree(root, subtree){

		const dfs = (p, q) => {
			const isRightSame = isSame(p.right, q.right);
			const isLeftSame = isSame(p.left, q.left);

			return isRightSame && isLeftSame;
		}

		const isSame = (p, q) => {
			//Base case
			const isBaseCase = !(p || q);
			if(isBaseCase) return true;

			const isBalanced = p && q;
			if(!isBalanced) return false;

			const isSame = p.val === q.val;
			if(!isSame) return false;

			return dfs(p, q);

		}

		if(root ==null && subtree == null) return true;

		if(root == null) return false;

		
		if(isSame(root, subtree)) return true;

		const leftHasSubtree = this.isSubtree(root.left, subtree);
		const rightHasSubtee = this.isSubtree(root.right, subtree);

		return leftHasSubtree || rightHasSubtee;
	}

	solve(root, subRoot) {
	// Your code here
		return this.isSubtree(root, subRoot);
	}
}


module.exports = { Problem: SubstreeOfAnotherTree };
