class Problem {



    /**
     * Encodes a tree to a single string.
     * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solution/
     * Time O(N) | Space O(H)
     * @param {TreeNode} root
     * @return {string}
     */
    serialize = function (root, result = []) {


        const serial = (root, result) => {
            const isBase = root === null;
            if (isBase) return result.push(null);

            dfsSerialize(root, result);
        }

        const dfsSerialize = (node, result) => {
            result.push(node.val);
            serial(node.left, result);
            serial(node.right, result);
        };
        serial(root, result);

        return result;
    };
    
    solve(root) {
        return this.serialize(root);
    }
}


module.exports = { Problem };