class TreeNode{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


class ConstructBinaryFromPreorderAndInorder {


	buildTree(preorder, inorder){
	if(preorder?.length === 1 && inorder?.length == 1){
		return new TreeNode(preorder[0]);

	}
	
	const dfs = (preoreder, inorder) => {
		const {leftInOrder, mid, rightInOrder} = getPointers(preorder, inorder);
		const root = new TreeNode(inorder[mid]);

		root.left = this.buildTree(preorder, leftInOrder);
		root.right = this.buildTree(preorder, rightInOrder);

		return root;
	}

	const getPointers = (preorder, inorder) => {
		const next = preorder.shift();
		const mid =  inorder.indexOf(next);
		const leftInOrder = inorder.slice(0, mid);
		const rightInOrder = inorder.slice(mid + 1);

		return {leftInOrder, mid, rightInOrder};
		
	}

	if(preorder == null || inorder == null) return null;
	if(preorder?.length === 0 || inorder?.length === 0) {
		return null;
	}
		
	return dfs(preorder, inorder);
	}
	solve(preorder, inorder) {
	// Your code here
		return this.buildTree(preorder, inorder);
	}
}


module.exports = { Problem: ConstructBinaryFromPreorderAndInorder };
