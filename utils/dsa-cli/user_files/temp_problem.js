class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}



class MergeTwoSortedList {
	 solve(head, n) {

        const moveFast = (fast, n) => {
            for (let i = 1; i <= (n + 1); i++) {/* Time O(N) */
                fast = fast.next;
            }

            return fast;
        }

        const moveSlow = (slow, fast) => {
            while (fast) {                     /* Time O(N) */
                slow = slow.next;
                fast = fast.next;
            }

            return slow;
        }

        const sentinel = new ListNode();

        sentinel.next = head;

        const fast = moveFast(sentinel, n);   /* Time O(N) */
        const slow = moveSlow(sentinel, fast);/* Time O(N) */

        slow.next = slow.next.next || null;

        return sentinel.next;
    }


}


module.exports = { Problem: MergeTwoSortedList };
