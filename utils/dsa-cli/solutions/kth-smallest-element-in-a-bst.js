class KthSmallestElementInABST {

    /**
     * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
     * Time O(N + K) | Space O(H)
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest = function (root, k, inOrder = []) {

        const dfs = (root, k, inOrder) => {
            if (root.left) this.kthSmallest(root.left, k, inOrder);

            inOrder.push(root.val);

            if (root.right) this.kthSmallest(root.right, k, inOrder);

            return inOrder[(k - 1)];
        }
        if (!root) return inOrder

        return dfs(root, k, inOrder);
    };


    solve(root, k) {
        return this.kthSmallest(root, k);
    }
}


module.exports = { Problem: KthSmallestElementInABST };