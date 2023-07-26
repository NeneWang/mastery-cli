class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}


class AddTwoNumbers {
	solve(l1Arr, l2Arr){

		const createLinkedList = (arr) => {
			
			let tail;
			let sentinel = tail = new ListNode();
			for(const element of arr){
				tail.next = new ListNode(element);
				tail = tail.next
			}

			return sentinel.next;
		}

		const convertToArray = (linkedList) => {
			const arr = [];

			while(linkedList){
				arr.push(linkedList.val);
				linkedList = linkedList.next;
			}
			return arr;
		}

		const l1 = createLinkedList(l1Arr);
		const l2 = createLinkedList(l2Arr);

		const result = this.AddTwoNumbers(l1, l2);
		return convertToArray(result);



	}

	AddTwoNumbers(l1, l2, carry = 0){
		
		let tail;
		let sentinel = tail = new ListNode();
		while(l1 || l2 || carry){
			
			// Calculate carry and val as the top decimal. THen calculate it witht hat value.
			const sum = (l1?.val || 0) + (l2?.val || 0) + (carry);
			const val = sum % 10;
			carry = Math.floor(sum/10);

			tail.next = new ListNode(val);
			tail = tail.next;

			l1 = l1?.next || null;
			l2 = l2?.next || null;

		}

		return sentinel.next;


	}



}


module.exports = { Problem: AddTwoNumbers };

