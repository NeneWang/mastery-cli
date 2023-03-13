
const assert = require('assert');
const ProblemTests = require('./problem-test');

class TreeNode {
    constructor(val, left=null, right=null) {
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
  

class BalancedBinaryTree extends ProblemTests{
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1(){
        this.current_test_name = "[3,9,20,null,null,15,7] => true"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([3,9,20,null,null,15,7]);
        assert(problemToTest.solve(tree) == true);
    }

    test_2(){
        this.current_test_name = "[1,2,2,3,3,null,null,4,4] => false"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([1,2,2,3,3,null,null,4,4]);
        assert(problemToTest.solve(tree) == false);
    }

}

class BinaryTreeLevelOrderTraversal extends ProblemTests {
    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1(){
        this.current_test_name = "[3,9,20,null,null,15,7] => [[3],[9,20],[15,7]]"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([3,9,20,null,null,15,7]);
        assert.deepEqual(problemToTest.solve(tree), [[3],[9,20],[15,7]]);
    }

    test_2(){
        this.current_test_name = "[1,2,2,3,3,null,null,4,4] => [[1],[2,2],[3,3],[4,4]]"
        const problemToTest = new this.Problem();
        const tree = arrayToBinaryTree([1,2,2,3,3,null,null,4,4]);
        assert.deepEqual(problemToTest.solve(tree), [[1],[2,2],[3,3],[4,4]]);
    }

}




const TEST_DICTIONARY = {
    'balanced-binary-tree': BalancedBinaryTree,
    'binary-tree-level-order-traversal': BinaryTreeLevelOrderTraversal,

}

module.exports = TEST_DICTIONARY;


