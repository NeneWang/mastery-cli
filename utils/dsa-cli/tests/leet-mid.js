const assert = require('assert');
const ProblemTests = require('./problem-test');
const { arrayToListNode, arrayToBinaryTree, TreeNode } = require('./utils');


class HIndex extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const hIndex = new this.Problem();
        this.current_test_name = '[0,1,3,5,6] | 3';
        assert.equal(hIndex.solve([0, 1, 3, 5, 6]), 3);
    }

    test_2() {
        const hIndex = new this.Problem();
        this.current_test_name = '[100, 100] | 2';
        assert.equal(hIndex.solve([100, 100]), 2);
    }

    test_3() {
        const hIndex = new this.Problem();
        this.current_test_name = '[0, 0, 0, 0, 0] | 0';
        assert.equal(hIndex.solve([0, 0, 0, 0, 0]), 0);
    }
}

class InsertDeleteGetRandomO1 extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        // this.tests.push(() => this.test_3());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]\n[[],[1],[2],[2],[],[1],[2],[]] | [null,true,false,true,2,true,false,2]';

        assert.equal(structure.RandomizedSet(), null);
        assert.equal(structure.insert(1), true);
        assert.equal(structure.remove(2), false);
        assert.equal(structure.insert(2), true);
        assert.equal(structure.remove(1), true);
        assert.equal(structure.RandomizedSet(), 2);
        assert.equal(structure.insert(2), false);
        assert.equal(structure.RandomizedSet(), 2);

    }


}

class MinimumSizeSubArraySum extends ProblemTests {
    constructor(problem) {
        super(problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[2,3,1,2,4,3] | 7 => 2';
        assert.equal(structure.solve(7, [2, 3, 1, 2, 4, 3]), 2);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[1,4,4] | 4 => 1';
        assert.equal(structure.solve(4, [1, 4, 4]), 1);
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = '[1,1,1,1,1,1,1,1] | 11 => 0';
        assert.equal(structure.solve(11, [1, 1, 1, 1, 1, 1, 1, 1]), 0);
    }


}

class GameOfLife extends ProblemTests {
    constructor(problem) {
        super(problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        // Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
        // Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

        const structure = new this.Problem();
        this.current_test_name = '[[0,1,0],[0,0,1],[1,1,1],[0,0,0]] | [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]';
        const board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
        structure.solve(board)
        assert.deepEqual(board, [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]);


    }

    test_2() {
        // Input: const board = [[1,1],[1,0]]
        // Output: [[1,1],[1,1]]

        const structure = new this.Problem();
        this.current_test_name = '[[1,1],[1,0]] | [[1,1],[1,1]]';
        const board = [[1, 1], [1, 0]]
        structure.solve(board)
        assert.deepEqual(board, [[1, 1], [1, 1]]);
    }

}

class WordPattern extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = 'abba | dog cat cat dog => true';
        assert.equal(structure.solve('abba', 'dog cat cat dog'), true);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = 'abba | dog cat cat fish => false';
        assert.equal(structure.solve('abba', 'dog cat cat fish'), false);
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = 'aaaa | dog cat cat dog => false';
        assert.equal(structure.solve('aaaa', 'dog cat cat dog'), false);
    }
}


class ContainsDuplicateII extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }


    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,3,1] | 3 => true';
        assert.equal(structure.solve([1, 2, 3, 1], 3), true);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[1,0,1,1] | 1 => true';
        assert.equal(structure.solve([1, 0, 1, 1], 1), true);
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,3,1,2,3] | 2 => false';
        assert.equal(structure.solve([1, 2, 3, 1, 2, 3], 2), false);
    }
}

class SummaryRanges extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }


    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[0,1,2,4,5,7] => ["0->2","4->5","7"]';
        assert.deepEqual(structure.solve([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"]);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[0,2,3,4,6,8,9] => ["0","2->4","6","8->9"]';
        assert.deepEqual(structure.solve([0, 2, 3, 4, 6, 8, 9]), ["0", "2->4", "6", "8->9"]);
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = '[] => []';
        assert.deepEqual(structure.solve([]), []);
    }


}


class MinimumNumberOfArrowsToBurstBalloons extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[[10,16],[2,8],[1,6],[7,12]] => 2';
        assert.equal(structure.solve([[10, 16], [2, 8], [1, 6], [7, 12]]), 2);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[[1,2],[3,4],[5,6],[7,8]] => 4';
        assert.equal(structure.solve([[1, 2], [3, 4], [5, 6], [7, 8]]), 4);
    }

    test_3() {

        const structure = new this.Problem();
        this.current_test_name = '[[1,2],[2,3],[3,4],[4,5]] => 2';
        assert.equal(structure.solve([[1, 2], [2, 3], [3, 4], [4, 5]]), 2);
    }

}






class PartitionList extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,4,3,2,5,2] | 3 => [1,2,2,4,3,5]';
        assert.deepEqual(structure.solve(arrayToListNode([1, 4, 3, 2, 5, 2]), 3), arrayToListNode([1, 2, 2, 4, 3, 5]));
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[2,1] | 2 => [1,2]';
        assert.deepEqual(structure.solve(arrayToListNode([2, 1]), 2), arrayToListNode([1, 2]));
    }


}


class SymmetricTree extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,2,3,4,4,3] => true';
        assert.equal(structure.solve(arrayToBinaryTree([1, 2, 2, 3, 4, 4, 3])), true);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,2,null,3,null,3] => false';
        assert.equal(structure.solve(arrayToBinaryTree([1, 2, 2, null, 3, null, 3])), false);
    }
}


class ConstructBinaryTreeFromInorderAndPostorderTraversal extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[9,3,15,20,7] | [9,15,7,20,3] => [3,9,20,null,null,15,7]';
        const root = structure.buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])

        assert.deepEqual(root, arrayToBinaryTree([3, 9, 20, null, null, 15, 7]));
        // assert.deepEqual(structure.solve([9,3,15,20,7], [9,15,7,20,3]), arrayToBinaryTree([3,9,20,null,null,15,7]));
    }


    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[-1] | [-1] => [-1]';
        const root = structure.buildTree([-1], [-1])

        assert.deepEqual(root, arrayToBinaryTree([-1]));
        // assert.deepEqual(structure.solve([9,3,15,20,7], [9,15,7,20,3]), arrayToBinaryTree([3,9,20,null,null,15,7]));
    }
}


class PopulatingNextRightPointersInEachNode extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_2());
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[] => []';
        const root = structure.connect(arrayToBinaryTree([]))

        assert.deepEqual(root, arrayToBinaryTree([]));
    }

}

class FlattenBinaryTreeToLinkedList extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,5,3,4,null,6] => ';
        /**
         * TreeNode {
            left: null,
            right: TreeNode {
                left: null,
                right: TreeNode {
                left: TreeNode {
                    left: TreeNode {
                    left: TreeNode {
                        left: null,
                        right: null,
                        val: 6
                    },
                    right: null,
                    val: 5
                    },
                    right: null,
                    val: 4
                },
                right: null,
                val: 3
                },
                val: 2
            },
            val: 1
            }
         */

        const entry = arrayToBinaryTree([1, 2, 5, 3, 4, null, 6])
        structure.solve(entry)
        const expectedSolution = new TreeNode(1, null,
            new TreeNode(2, null,
                new TreeNode(3, null,
                    new TreeNode(4, null,
                        new TreeNode(5, null,
                            new TreeNode(6))))));

        assert.deepEqual(entry, expectedSolution);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[] => []';
        const entry = arrayToBinaryTree([])
        structure.solve(entry)
        assert.deepEqual(entry, arrayToBinaryTree([]));

    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = '[0] => [0]';
        const entry = arrayToBinaryTree([0])
        structure.solve(entry)
        assert.deepEqual(entry, arrayToBinaryTree([0]));
    }
}


class SumRootToLeafNumbers extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,3] => 25';
        const entry = arrayToBinaryTree([1, 2, 3])
        assert.equal(structure.solve(entry), 25);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[4,9,0,5,1] => 1026';
        const entry = arrayToBinaryTree([4, 9, 0, 5, 1])
        assert.equal(structure.solve(entry), 1026);
    }

}

class CountCompleteTreeNodes extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,3,4,5,6] => 6';
        const entry = arrayToBinaryTree([1, 2, 3, 4, 5, 6])
        assert.equal(structure.solve(entry), 6);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[] => 0';
        const entry = arrayToBinaryTree([])
        assert.equal(structure.solve(entry), 0);
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = '[1] => 1';
        const entry = arrayToBinaryTree([1])
        assert.equal(structure.solve(entry), 1);
    }

}


class AverageOfLevelsInBinaryTree extends ProblemTests {
    constructor(Problem) {

        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());

    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[3,9,20, null, null, 15,7] => [3,14.5,11]';
        const entry = arrayToBinaryTree([3, 9, 20, null, null, 15, 7])
        assert.deepEqual(structure.solve(entry), [3, 14.5, 11]);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[3,9,20,15,7] => [3,14.5,11]';
        const entry = arrayToBinaryTree([3, 9, 20, 15, 7])
        assert.deepEqual(structure.solve(entry), [3, 14.5, 11]);
    }

}


class MinimumAbsoluteDifferenceInBst extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());

    }


    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[4,2,6,1,3] => 1';
        const entry = arrayToBinaryTree([4, 2, 6, 1, 3])
        assert.equal(structure.solve(entry), 1);
    }


    test_2() {

        const structure = new this.Problem();
        this.current_test_name = '[1,0,48,null,null,12,49] => 1';
        const entry = arrayToBinaryTree([1, 0, 48, null, null, 12, 49])
        assert.equal(structure.solve(entry), 1);

    }

}


class RemoveDuplicatesFromLinkedList extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
        this.tests.push(() => this.test_4());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,1,2] => [2]';
        const entry = arrayToListNode([1, 1, 2])
        assert.deepEqual(structure.solve(entry), arrayToListNode([2]));

    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[1,1,2,3,3] => [2]';
        const entry = arrayToListNode([1, 1, 2, 3, 3])
        assert.deepEqual(structure.solve(entry), arrayToListNode([2]));

    }

    test_3() {
        /**
         * Input: head = [1,2,3,3,4,4,5]
            Output: [1,2,5]
         */

        const structure = new this.Problem();
        this.current_test_name = '[1,2,3,3,4,4,5] => [1,2,5]';
        const entry = arrayToListNode([1, 2, 3, 3, 4, 4, 5])
        assert.deepEqual(structure.solve(entry), arrayToListNode([1, 2, 5]));
    }

    test_4() {
        const structure = new this.Problem();
        this.current_test_name = '[1,1,1,2,3] => [2,3]';
        const entry = arrayToListNode([1, 1, 1, 2, 3])
        assert.deepEqual(structure.solve(entry), arrayToListNode([2, 3]));
    }
}

class RotateList extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());

    }


    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,3,4,5] | 2 => [4,5,1,2,3]';
        const entry = arrayToListNode([1, 2, 3, 4, 5])
        assert.deepEqual(structure.solve(entry, 2), arrayToListNode([4, 5, 1, 2, 3]));

    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[0,1,2] | 4 => [2,0,1]';
        const entry = arrayToListNode([0, 1, 2])
        assert.deepEqual(structure.solve(entry, 4), arrayToListNode([2, 0, 1]));

    }


}


class SimplifyPath extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }


    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '/home/ => /home';
        assert.equal(structure.solve('/home/'), '/home');
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '/../ => /';
        assert.equal(structure.solve('/../'), '/');
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = '/home//foo/ => /home/foo';
        assert.equal(structure.solve('/home//foo/'), '/home/foo');
    }
}


class BasicCalculator extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '"1 + 1" => 2';
        assert.equal(structure.calculate('1 + 1'), 2);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '" 2-1 + 2 " => 3';
        assert.equal(structure.calculate(' 2-1 + 2 '), 3);
    }

}


class RemoveNthFromEnd extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,3,4,5] | 2 => [1,2,3,5]';
        assert.deepEqual(structure.removeNthFromEnd(arrayToListNode([1, 2, 3, 4, 5]), 2), arrayToListNode([1, 2, 3, 5]));
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[1] | 1 => []';
        assert.deepEqual(structure.removeNthFromEnd(arrayToListNode([1]), 1), arrayToListNode([]));
    }

}


class IPO extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }


    test_1() {

        const IPO = new this.Problem();
        this.current_test_name = 'k = 2, W = 0, Profits = [1,2,3], Capital = [0,1,1] | 4';
        const k = 2;
        const W = 0;
        const Profits = [1, 2, 3];
        const Capital = [0, 1, 1];
        assert.deepEqual(IPO.solve(k, W, Profits, Capital), 4);
    }

    test_2() {

        const IPO = new this.Problem();
        this.current_test_name = 'k = 1, W = 0, Profits = [1,2,3], Capital = [1,1,2] | 0';
        const k = 1;
        const W = 0;
        const Profits = [1, 2, 3];
        const Capital = [1, 1, 2];
        assert.deepEqual(IPO.solve(k, W, Profits, Capital), 0);
    }

    test_3() {

        const IPO = new this.Problem();
        this.current_test_name = 'k = 2, W = 0, Profits = [1,2,3], Capital = [1,1,2] | 0';
        const k = 2;
        const W = 0;
        const Profits = [1, 2, 3];
        const Capital = [1, 1, 2];
        assert.deepEqual(IPO.solve(k, W, Profits, Capital), 0);
    }

}


class FindKPairsWithSmallestSums extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
    }

    test_1() {
        const nums = [1, 7, 11];
        const nums2 = [2, 4, 6];
        const k = 3;
        const expected = [[1, 2], [1, 4], [1, 6]];
        const structure = new this.Problem();
        this.current_test_name = `${nums}, ${nums2}, ${k} => ${expected}`;
        assert.deepEqual(structure.solve(nums, nums2, k), expected);

    }

    test_2() {
        const nums = [1, 1, 2];
        const nums2 = [1, 2, 3];
        const k = 2;
        const expected = [[1, 1], [1, 1]];
        const structure = new this.Problem();
        this.current_test_name = `${nums}, ${nums2}, ${k} => ${expected}`;
        assert.deepEqual(structure.solve(nums, nums2, k), expected);
    }

    test_3() {
        const nums = [1, 2];
        const nums2 = [3];
        const k = 3;
        const expected = [[1, 3], [2, 3]];
        const structure = new this.Problem();
        this.current_test_name = `${nums}, ${nums2}, ${k} => ${expected}`;
        assert.deepEqual(structure.solve(nums, nums2, k), expected);
    }



}


class AddBinary extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '"11", "1" => "100"';
        assert.equal(structure.solve('11', '1'), '100');
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '"1010", "1011" => "10101"';
        assert.equal(structure.solve('1010', '1011'), '10101');
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = '"0", "0" => "0"';
        assert.equal(structure.solve('0', '0'), '0');
    }

}

class BiwiseAndOfNumbersRange extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '5, 7 => 4';
        assert.equal(structure.solve(5, 7), 4);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '0, 1 => 0';
        assert.equal(structure.solve(0, 1), 0);
    }

}


class FactorialTraillingZero extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }


    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '3 => 0';
        assert.equal(structure.solve(3), 0);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '5 => 1';
        assert.equal(structure.solve(5), 1);
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = '0 => 0';
        assert.equal(structure.solve(0), 0);
    }


}



class MySqrt extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '4 => 2';
        assert.equal(structure.solve(4), 2);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '8 => 2';
        assert.equal(structure.solve(8), 2);
    }

}

class Triangle extends ProblemTests {
    constructor(Problem) {  
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[[2],[3,4],[6,5,7],[4,1,8,3]] => 11';
        assert.equal(structure.solve([[2],[3,4],[6,5,7],[4,1,8,3]]), 11);
    }

    test_2(){
        const structure = new this.Problem();
        this.current_test_name = '[[2],[3,4],[6,5,7],[4,1,8,3]] => 11';
        assert.equal(structure.solve([[2],[3,4],[6,5,7],[4,1,8,3]]), 11);
    }
}


class MaxPointsOnALine extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[[1,1],[2,2],[3,3]] => 3';
        assert.equal(structure.solve([[1, 1], [2, 2], [3, 3]]), 3);
    }


    test_2(){
        const structure = new this.Problem();
        this.current_test_name = '[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]] => 4';
        assert.equal(structure.solve([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]), 4);
    }

}


const TEST_DICTIONARY = {
    'h-index': HIndex,
    'insert-delete-getrandom-o1': InsertDeleteGetRandomO1,
    'minimum-size-subarray-sum': MinimumSizeSubArraySum,
    'game-of-life': GameOfLife,
    'word-pattern': WordPattern,
    'contains-duplicate-ii': ContainsDuplicateII,
    'summary-ranges': SummaryRanges,
    'minimum-number-of-arrows-to-burst-balloons': MinimumNumberOfArrowsToBurstBalloons,
    'partition-list': PartitionList,
    'symmetric-tree': SymmetricTree,
    'construct-binary-tree-from-inorder-and-postorder-traversal': ConstructBinaryTreeFromInorderAndPostorderTraversal,
    'populating-next-right-pointers-in-each-node': PopulatingNextRightPointersInEachNode,
    'flatten-binary-tree-to-linked-list': FlattenBinaryTreeToLinkedList,
    'sum-root-to-leaf-numbers': SumRootToLeafNumbers,
    'count-complete-tree-nodes': CountCompleteTreeNodes,
    'average-of-levels-in-binary-tree': AverageOfLevelsInBinaryTree,
    'minimum-absolute-difference-in-bst': MinimumAbsoluteDifferenceInBst,
    'remove-duplicates-from-sorted-list-ii': RemoveDuplicatesFromLinkedList,
    'rotate-list': RotateList,
    'simplify-path': SimplifyPath,
    'basic-calculator': BasicCalculator,
    'remove-nth-node-from-end-of-list': RemoveNthFromEnd,
    'ipo': IPO,
    'find-k-pairs-with-smallest-sums': FindKPairsWithSmallestSums,
    'add-binary': AddBinary,
    'bitwise-and-of-numbers-range': BiwiseAndOfNumbersRange,
    'factorial-trailing-zeroes': FactorialTraillingZero,
    'sqrtx': MySqrt,
    'max-points-on-a-line': MaxPointsOnALine,
    'triangle': Triangle
}

module.exports = TEST_DICTIONARY;


