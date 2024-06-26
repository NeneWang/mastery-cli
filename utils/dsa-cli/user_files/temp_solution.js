class PaintHouse {
    solve(costs) {
        if (costs.length === 0) return 0;
        
        let previousRow = [...costs[costs.length - 1]]; // Make a copy of the last row
        
        for (let n = costs.length - 2; n >= 0; n--) {
            const currentRow = [...costs[n]]; // Make a copy of the current row

            // Total cost of painting the nth house red.
            currentRow[0] += Math.min(previousRow[1], previousRow[2]);
            // Total cost of painting the nth house green.
            currentRow[1] += Math.min(previousRow[0], previousRow[2]);
            // Total cost of painting the nth house blue.
            currentRow[2] += Math.min(previousRow[0], previousRow[1]);
            
            previousRow = currentRow;
        }
        
        return Math.min(...previousRow);
    }
}

module.exports = { Problem: PaintHouse };
class RemoveNthFromEnd {
    removeNthFromEnd(head, n) {
      const dummy = new ListNode(0);
      dummy.next = head;
      let first = dummy;
      let second = dummy;
  
      // Advances first pointer so that the gap between first and second is n nodes apart
      for (let i = 1; i <= n + 1; i++) {
        first = first.next;
      }
  
      // Move first to the end, maintaining the gap
      while (first !== null) {
        first = first.next;
        second = second.next;
      }
  
      second.next = second.next.next;
      return dummy.next;
    }
  }
  
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  module.exports = { Problem: RemoveNthFromEnd, ListNode };
  
