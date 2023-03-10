class GoodNodes {

    /**
     * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
     * Time O(N) | Space O(H)
     * @param {TreeNode} root
     * @return {number}
     */
    solve(root, max = -Infinity, total = [0]) {


        const count = (root, max, total) => {
            const isBaseCase = root === null;
            if (isBaseCase) return 0;

            return dfs(root, max, total);
        }

        const dfs = (root, max, total) => {
            const isGood = max <= root.val
            if (isGood) total[0]++;

            max = Math.max(max, root.val);

            count(root.left, max, total);
            count(root.right, max, total);
        }

        count(root, max, total);

        return total[0]
    };


    /**
     * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
     * Time O(N) | Space O(W)
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes = function (root,) {


        const bfs = (queue, total = 0) => {
            while (queue.length) {
                for (let i = (queue.length - 1); 0 <= i; i--) {
                    let [root, max] = queue.shift();

                    const isGood = max <= root.val;
                    if (isGood) total++;

                    max = Math.max(max, root.val);

                    if (root.right) queue.push([root.right, max]);
                    if (root.left) queue.push([root.left, max]);
                }
            }

            return total;
        }
        const isBaseCase = root === null;
        if (isBaseCase) return 0

        return bfs([[root, -Infinity]]);
    }

}


module.exports = { Problem: GoodNodes };