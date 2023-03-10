class Serialize {


	/**
	 * Encodes a tree to a single string.
	 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solution/
	 * Time O(N) | Space O(H)
	 * @param {TreeNode} root
	 * @return {string}
	 */
	solve(root, result = []) {

		const dfsSerializeIterative = (stack, result = []) => {
			while (stack.length) {
				const curr = stack.pop();

				const isNull = curr === null;
				if (isNull) {
					result.push(null);
					continue;
				}

				result.push(curr.val);
				stack.push(curr.right);
				stack.push(curr.left);
			}

			return result;
		}

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



	/**
	 * Encodes a tree to a single string.
	 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solution/
	 * Time O(N) | Space O(H)
	 * @param {TreeNode} root
	 * @return {string}
	 */
	serialize = function (root) {
		const dfsSerializeIterative = (stack, result = []) => {
			while (stack.length) {
				const curr = stack.pop();

				const isNull = curr === null;
				if (isNull) {
					result.push(null);
					continue;
				}

				result.push(curr.val);
				stack.push(curr.right);
				stack.push(curr.left);
			}

			return result;
		}

		const isBaseCase = root === null;
		if (isBaseCase) return [null];

		return dfsSerializeIterative([root]);
	};
}


module.exports = { Problem: Serialize };