

/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * Time O(N) | Space O(N)
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class MergeKSortedLists {
    solve(lists) {
		
		const mergeTwoLists = (list1, list2) => {
			let tail;
			let sentinel = tail = new ListNode(0);
			
			while(list1 && list2){
				const isGreater = list1.val <= list2.val;
				if(isGreater){
					tail.next = list1;
					list1 = list1.next;
				}
				else{
					tail.next = list2;
					list2 = list2.next;
				}

				tail = tail.next;


			}
			
			tail.next = list1 || list2;
			
			return sentinel.next;
		}

		let previous = null;

		for(let i = 0; i< lists.length; i++){
			previous = mergeTwoLists(previous, lists[i]);	
		}
		return previous;
		
    };


}


module.exports = { Problem: MergeKSortedLists };
