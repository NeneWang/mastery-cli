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



  module.exports = {LinkedList, bfs}