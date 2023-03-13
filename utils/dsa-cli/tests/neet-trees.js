
const assert = require('assert');
const ProblemTests = require('./problem-test');

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function arrayToBinaryTree(arr) {
    if (arr.length === 0) {
        return null;
    }

    const nodes = arr.map((val) => (val === null) ? null : new TreeNode(val));

    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] !== null) {
            const leftIndex = 2 * i + 1;
            const rightIndex = 2 * i + 2;

            nodes[i].left = (leftIndex < nodes.length) ? nodes[leftIndex] : null;
            nodes[i].right = (rightIndex < nodes.length) ? nodes[rightIndex] : null;
        }
    }

    return nodes[0];
}

function binaryTreeToArray(root) {
    if (!root) {
        return [];
    }

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        const node = queue.shift();

        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // Remove trailing null values from the result
    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}


class BalancedBinaryTree extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = "[3,9,20,null,null,15,7] => true"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);
        assert(problemToTest.solve(tree) == true);
    }

    test_2() {
        this.current_test_name = "[1,2,2,3,3,null,null,4,4] => false"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]);
        assert(problemToTest.solve(tree) == false);
    }

}

class BinaryTreeLevelOrderTraversal extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = "[3,9,20,null,null,15,7] => [[3],[9,20],[15,7]]"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);
        assert.deepEqual(problemToTest.solve(tree), [[3], [9, 20], [15, 7]]);
    }

    test_2() {
        this.current_test_name = "[1,2,2,3,3,null,null,4,4] => [[1],[2,2],[3,3],[4,4]]"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]);
        assert.deepEqual(problemToTest.solve(tree), [[1], [2, 2], [3, 3], [4, 4]]);
    }
}


class BinaryTreeMaximumPathSum extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = "[-10,9,20,null,null,15,7] => 42"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([-10, 9, 20, null, null, 15, 7]);

        assert(problemToTest.solve(tree) == 42);
    }

    test_2() {
        this.current_test_name = "[1,2,3] => 6"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([1, 2, 3]);
        assert(problemToTest.solve(tree) == 6);
    }

}


class BinaryTreeRightSideView extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = "[1,2,3,null,5,null,4] => [1,3,4]"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([1, 2, 3, null, 5, null, 4]);
        assert.deepEqual(problemToTest.solve(tree), [1, 3, 4]);
    }

    test_2() {
        this.current_test_name = "[1,null,3] => [1,3]"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([1, null, 3]);
        assert.deepEqual(problemToTest.solve(tree), [1, 3]);
    }

}

class ContructBinaryTreeFromPreorderAndInOrderTraversal extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = " preorder = [3,9,20,15,7], inorder= [9,3,15,20,7], => [3,9,20,null,null,15,7]"
        const problemToTest = new this.Problem();
        const tree = problemToTest.solve([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
        const result_tree_as_arr = binaryTreeToArray(tree);
        assert.deepEqual(result_tree_as_arr, [3, 9, 20, null, null, 15, 7]);

    }


    test_2() {

        this.current_test_name = " preorder = [1,2,3], inorder= [2,1,3], => [1,2,3]"
        const problemToTest = new this.Problem();
        const tree = problemToTest.solve([1, 2, 3], [2, 1, 3]);

        const result_tree_as_arr = binaryTreeToArray(tree);
        assert.deepEqual(result_tree_as_arr, [1, 2, 3]);

    }
}

class CountGoodNodesInBinaryTree extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        this.current_test_name = "[3,1,4,3,null,1,5] => 4"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([3, 1, 4, 3, null, 1, 5]);
        assert(problemToTest.solve(tree) == 4);
    }

    test_2() {
        this.current_test_name = "[3,3,null,4,2] => 3"

        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([3, 3, null, 4, 2]);
        assert(problemToTest.solve(tree) == 3);
    }

    test_3() {
        this.current_test_name = "[1] => 1"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([1]);
        assert(problemToTest.solve(tree) == 1);
    }

}

class DiameterOfBinaryTree extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        this.current_test_name = "[1,2,3,4,5] => 3"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([1, 2, 3, 4, 5]);
        assert(problemToTest.solve(tree) == 3);
    }

    test_2() {
        this.current_test_name = "[1,2] => 1"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([1, 2]);
        assert(problemToTest.solve(tree) == 1);
    }

}



class InvertBinaryTree extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        this.current_test_name = "[4,2,7,1,3,6,9] => [4,7,2,9,6,3,1]"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([4, 2, 7, 1, 3, 6, 9]);
        const result_tree = problemToTest.solve(tree);
        const result_tree_as_arr = binaryTreeToArray(result_tree);
        assert.deepEqual(result_tree_as_arr, [4, 7, 2, 9, 6, 3, 1]);

    }

    test_2() {

        this.current_test_name = "[2,1,3] => [2,3,1]"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([2, 1, 3]);
        const result_tree = problemToTest.solve(tree);
        const result_tree_as_arr = binaryTreeToArray(result_tree);
        assert.deepEqual(result_tree_as_arr, [2, 3, 1]);

    }

    test_3() {

        this.current_test_name = "[] => []"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([]);
        const result_tree = problemToTest.solve(tree);
        const result_tree_as_arr = binaryTreeToArray(result_tree);
        assert.deepEqual(result_tree_as_arr, []);


    }

}


class KthSmallestElementInABst extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {

        this.current_test_name = "[3,1,4,null,2], k = 1 => 1"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([3, 1, 4, null, 2]);
        assert(problemToTest.solve(tree, 1) == 1);


    }

    test_2() {

        this.current_test_name = "[5,3,6,2,4,null,null,1], k = 3 => 3"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([5, 3, 6, 2, 4, null, null, 1]);
        assert(problemToTest.solve(tree, 3) == 3);

    }

    test_3() {

        this.current_test_name = "[5,3,6,2,4,null,null,1], k = 3 => 3"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([5, 3, 6, 2, 4, null, null, 1]);
        assert(problemToTest.solve(tree, 3) == 3);

    }

}









const TEST_DICTIONARY = {
    'balanced-binary-tree': BalancedBinaryTree,
    'binary-tree-level-order-traversal': BinaryTreeLevelOrderTraversal,
    'binary-tree-maximum-path-sum': BinaryTreeMaximumPathSum,
    'binary-tree-right-side-view': BinaryTreeRightSideView,
    'construct-binary-tree-from-preorder-and-inorder-traversal': ContructBinaryTreeFromPreorderAndInOrderTraversal,
    'count-good-nodes-in-binary-tree': CountGoodNodesInBinaryTree,
    'diameter-of-binary-tree': DiameterOfBinaryTree,
    'invert-binary-tree': InvertBinaryTree,
    'kth-smallest-element-in-a-bst': KthSmallestElementInABst,

}

module.exports = TEST_DICTIONARY;


