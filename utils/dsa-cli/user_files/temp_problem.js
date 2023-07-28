class ReorderList {
	solve(head) {
	// Your code here
		const getMid = (head) => {
			
			let [slow, fast] = [head, head];
			while(fast && fast.next){
				slow = slow.next;
				fast = fast.next.next;
			}
			return slow;
		}
			
		const reverse = (head) => {
			let [next, curr, prev] = [null, head, null];

			while(curr){
				
				next = curr.next;
				curr.next = prev;
				prev = curr;
				curr = next;


			}

			return prev;
		}

		const reorder = (l1, l2) => {
			
			let [first, next, second] = [l1, null, l2];

			while(second.next){
				next = first.next;
				first.next = second;
				first = next;

				next = second.next;
				second.next = first;
				second = next;
				
			}

		}

		const mid = getMid(head);
		const reveredFromMid = reverse(mid);

		reorder(head, reveredFromMid);


	}
}


module.exports = { Problem: ReorderList };
