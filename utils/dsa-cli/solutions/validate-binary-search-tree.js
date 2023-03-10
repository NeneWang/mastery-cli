class Problem {

    /**
     * https://leetcode.com/problems/validate-binary-search-tree/
     * Time O(N) | Space O(H)
     * @param {TreeNode} root
     * @return {boolean}
     */
    solve(root, min = -Infinity, max = Infinity) {


        const dfs = (root, min, max) => {
            const left = isValidBST(root.left, min, root.val);
            const right = isValidBST(root.right, root.val, max);

            return left && right;
        }

        const isBaseCase = root === null;
        if (isBaseCase) return true;

        const isInvalid = (root.val <= min) || (max <= root.val);
        if (isInvalid) return false;

        return dfs(root, min, max);
    };

    /**
     * https://leetcode.com/problems/validate-binary-search-tree/
     * Time O(N) | Space O(H)
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root, prev = [null]) {
        const isBaseCase = root === null;
        if (isBaseCase) return true;

        if (!isValidBST(root.left, prev)) return false;

        const isInvalid = (prev[0] !== null) && (root.val <= prev[0]);
        if (isInvalid) return false;

        prev[0] = root.val;

        return isValidBST(root.right, prev);
    }



    /**
     * https://leetcode.com/problems/validate-binary-search-tree/
     * Time O(N) | Space O(H)
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBSTBinarySearchTree(root, stack = []) {


        const moveLeft = (stack, root) => {
            while (root) {
                stack.push(root);
                root = root.left;
            }
        }
        let prev = null;

        while (stack.length || root) {
            moveLeft(stack, root);
            root = stack.pop();

            const isInvalid = prev && (root.val <= prev.val);
            if (isInvalid) return false;

            prev = root;
            root = root.right;
        }

        return true;
    }
}


module.exports = { Problem };