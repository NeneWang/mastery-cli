class ListNode {
	solve(head) {
	// Your code here
		return this.hasCycle(head);

	}

	hasCycle(head){
		let [fast, slow] = [head, head];

		const isSame = () => fast === slow;
		while(fast && fast.next){
			slow = slow.next;
			fast = fast.next.next;

			if(isSame()){
				return true;
			}
		}

		return false;

	}


}


module.exports = { Problem: ListNode };
