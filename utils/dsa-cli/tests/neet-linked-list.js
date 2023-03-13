
const assert = require('assert');
const ProblemTests = require('./problem-test');

class AddTwoNumbers extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());

    }

    test_1() {
        this.current_test_name = "[2,4,3] + [5,6,4] => [7,0,8]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([2, 4, 3], [5, 6, 4]), [7, 0, 8]);
    }

    test_2() {
        this.current_test_name = "[0] + [0] => [0]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([0], [0]), [0]);
    }

    test_3() {
        this.current_test_name = "[9,9,9,9,9,9,9] + [9,9,9,9] => [8,9,9,9,0,0,0,1]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]), [8, 9, 9, 9, 0, 0, 0, 1]);
    }
}


class CopyListWithRandomPointer extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        // this.tests.push(() => this.test_3());

    }

    test_1() {
        this.current_test_name = "[[7,null],[13,0],[11,4],[10,2],[1,0]] => [[7,null],[13,0],[11,4],[10,2],[1,0]]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]), [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
    }


}


class FindTHeDuplicateNumber extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());

    }

    test_1() {
        this.current_test_name = "[1,3,4,2,2] => 2"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([1, 3, 4, 2, 2]) == 2);
    }

    test_2() {
        this.current_test_name = "[3,1,3,4,2] => 3"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([3, 1, 3, 4, 2]) == 3);
    }

    test_3() {
        this.current_test_name = "[1,1] => 1"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([1, 1]) == 1);
    }


}



class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const arrayToListNode = (array) => {
    if (!array || array.length === 0) {
        return null;
    }

    let head = new ListNode(array[0]);
    let node = head;

    for (let i = 1; i < array.length; i++) {
        node.next = new ListNode(array[i]);
        node = node.next;
    }

    return head;
};
class LinkedListCycle extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        this.current_test_name = "[3,2,0,-4] => true"
        const problemToTest = new this.Problem();
        const list = arrayToListNode([3, 2, 0, -4]);
        list.next.next.next.next = list.next;
        assert(problemToTest.solve(list) == true);
    }

    test_2() {
        this.current_test_name = "[1,2] => true"
        const problemToTest = new this.Problem();
        const list = arrayToListNode([1, 2]);
        list.next.next = list;
        assert(problemToTest.solve(list) == true);
    }

    test_3() {
        this.current_test_name = "[1] => false"
        const problemToTest = new this.Problem();
        const list = arrayToListNode([1]);
        assert(problemToTest.solve(list) == false);

    }


}



const PROBLEM_DICT = {
    'add-two-numbers': AddTwoNumbers,
    // 'copy-list-with-random-pointer': CopyListWithRandomPointer, // Too hard to test.
    'find-the-duplicate-number': FindTHeDuplicateNumber,
    'linked-list-cycle': LinkedListCycle,
}


module.exports = PROBLEM_DICT;

