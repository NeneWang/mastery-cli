
class ReverseLinkedList {

    // * Time O(N) | Space O(1)
    solve(head) {

        let [prev, curr, next] = [null, head, null];

        while (curr) {/* Time O(N) */
            next = curr.next;
            curr.next = prev;

            prev = curr;
            curr = next;
        }

        return prev;
    }



    //  * Time O(N) | Space O(N)
    reverseList(head) {

        const dfs = (curr) => {
            const prev = reverseList(curr.next);/* Time O(N) | Space O(N) */

            curr.next.next = curr;
            curr.next = null;

            return prev;
        }

        const isBaseCase = !head?.next;
        if (isBaseCase) return head;

        return dfs(head);                   /* Time O(N) | Space O(N) */
    }

}


module.exports = { Problem: ReverseLinkedList };