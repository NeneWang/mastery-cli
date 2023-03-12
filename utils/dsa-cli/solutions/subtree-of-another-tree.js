class Problem {

    /**
     * https://leetcode.com/problems/subtree-of-another-tree/
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree = function (root, subRoot) {
        if (!root) return false

        if (isSame(root, subRoot)) return true

        const hasLeftTree = isSubtree(root.left, subRoot)
        const hasRightTree = isSubtree(root.right, subRoot)

        return hasLeftTree || hasRightTree
    };

    isSame = (root, subRoot) => {
        const hasReachedEnd = !(root && subRoot)
        if (hasReachedEnd) return root === subRoot

        const isMismatch = root.val !== subRoot.val
        if (isMismatch) return false

        const isLeftSame = isSame(root.left, subRoot.left)
        const isRightSame = isSame(root.right, subRoot.right)

        return isLeftSame && isRightSame
    }

    hash = (val) => require('crypto')
        .createHash('md5')
        .update(val)
        .digest('hex')


    solve(root, subRoot) {
        return this.isSubtree(root, subRoot)
    }
}


module.exports = { Problem };