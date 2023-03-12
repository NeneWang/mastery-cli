class Problem {


    /**
     * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
     * Time O(N^2) | Space(H)
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree = function (preorder, inorder) {

        var dfs = (preorder, inorder) => {
            const { leftInorder, mid, rightInorder } = getPointers(preorder, inorder);
            const root = new TreeNode(inorder[mid]);

            root.left = buildTree(preorder, leftInorder);
            root.right = buildTree(preorder, rightInorder);

            return root;
        }

        const getPointers = (preorder, inorder) => {
            const next = preorder.shift();
            const mid = inorder.indexOf(next);
            const leftInorder = inorder.slice(0, mid);
            const rightInorder = inorder.slice(mid + 1);

            return { leftInorder, mid, rightInorder };
        }


        const isBaseCase = !preorder.length || !inorder.length;
        if (isBaseCase) return null;

        return dfs(preorder, inorder);
    }


    solve(preoreder, inorder) {
        return this.buildTree(preoreder, inorder);
    }
}


module.exports = { Problem };