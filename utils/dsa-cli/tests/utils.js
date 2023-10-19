

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const arrayToListNode = (array) => {
    if (!array || array.length == 0) {
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


module.exports = { ListNode, arrayToListNode };