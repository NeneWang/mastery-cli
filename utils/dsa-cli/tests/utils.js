

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


class Node {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }

    push(neighbor) {
        this.neighbors.push(neighbor);
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


function arrayToNodeHeadNeighbors(array) {
    const nodes = [];
    for (let i = 0; i < array.length; i++) {
        nodes.push(new Node(i + 1));
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            nodes[i].push(nodes[array[i][j] - 1]);
        }
    }

    const head = new Node();
    head.neighbors = nodes;
    return head;

}

module.exports = { ListNode, Node, arrayToListNode, arrayToNodeHeadNeighbors };