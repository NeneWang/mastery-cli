class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}



const bfs = (queue, levels = []) => {
  while (queue.length) {
    const level = [];

    for (let i = (queue.length - 1); 0 <= i; i--) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      level.push(node.val);
    }

    levels.push(level.slice());
  }

  return levels;
}


class MaxPriorityQueue {

  constructor() {
    this.heap = []
  }

  enqueue(element) {
    this.heap.push(element)
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[parentIndex] >= this.heap[index]) break
      this.swap(parentIndex, index)
      index = parentIndex
    }
  }

  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  dequeue() {
    const max = this.heap[0]
    const end = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = end
      this.sinkDown()
    }
    return max
  }

  sinkDown() {
    let index = 0
    const length = this.heap.length
    const element = this.heap[0]
    while (true) {
      const leftChildIndex = 2 * index + 1
      const rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]
        if (leftChild > element) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break
      this.swap(index, swap)
      index = swap
    }
  }

  front() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.size() === 0
  }

}

class MinPriorityQueue {

  constructor() {
    this.heap = []
  }

  enqueue(element) {
    this.heap.push(element)
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[parentIndex] <= this.heap[index]) break
      this.swap(parentIndex, index)
      index = parentIndex
    }
  }

  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  dequeue() {
    const min = this.heap[0]
    const end = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = end
      this.sinkDown()
    }
    return min
  }

  sinkDown() {
    let index = 0
    const length = this.heap.length
    const element = this.heap[0]
    while (true) {
      const leftChildIndex = 2 * index + 1
      const rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]
        if (leftChild < element) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break
      this.swap(index, swap)
      index = swap
    }
  }

  front() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.size() === 0
  }

}

class Queue{
    
  constructor(){
      this.queue = []
  }

  enqueue(element){
      this.queue.push(element)
  }

  dequeue(){
      return this.queue.shift()
  }

  front(){
      return this.queue[0]
  }

  size(){
      return this.queue.length
  }

  isEmpty(){
      return this.size() === 0
  }

}

class Node{
  constructor(val){
      this.val = val;
      this.neighbors = [];
  }

  push(neighbor){
      this.neighbors.push(neighbor);
  }

}



class MinHeap {
  constructor(compareFn) {
    this.heap = [];
    this.compare = compareFn;
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }
    const min = this.heap[0];
    const last = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.sinkDown();
    }
    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (this.compare(element, parent) >= 0) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (this.compare(leftChild, element) < 0) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && this.compare(rightChild, element) < 0) ||
          (swap !== null && this.compare(rightChild, leftChild) < 0)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}



class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extractMax() {
    if (this.isEmpty()) {
      return null;
    }
    const max = this.heap[0];
    const last = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.sinkDown();
    }
    return max;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element <= parent) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

module.exports = { LinkedList, bfs, MaxPriorityQueue, MinPriorityQueue, Queue, Node, MaxHeap, MinHeap }