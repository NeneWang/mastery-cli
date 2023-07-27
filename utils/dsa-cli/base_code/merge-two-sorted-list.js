class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MergeTwoSorted {


    /**
     * https://leetcode.com/problems/merge-two-sorted-lists/
     * Time O(N + M) | Space O(N + M)
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        const isBaseCase1 = list1 === null;
        if (isBaseCase1) return list2;

        const isBaseCase2 = list2 === null;
        if (isBaseCase2) return list1;

        const isL2Greater = list1.val <= list2.val;
        if (isL2Greater) {
            list1.next = this.mergeTwoLists(list1.next, list2);/* Time O(N + M) | Space O(N + M) */

            return list1;
        }

        const isL2Less = list2.val <= list1.val;
        if (isL2Less) {
            list2.next = this.mergeTwoLists(list1, list2.next);/* Time O(N + M) | Space O(N + M) */

            return list2;
        }
    }

    solve(list1, list2) {
        return this.mergeTwoLists(list1, list2);
    }



    /**
     * https://leetcode.com/problems/merge-two-sorted-lists/
     * Time O(N + M) | Space O(N + M)
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists = function (list1, list2) {
		
    };
}


module.exports = { Problem: MergeTwoSorted };