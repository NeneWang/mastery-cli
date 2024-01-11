class MinMutation {
  solve(start, end, bank) {
    const queue = [];
    const seen = new Set();
    queue.push(start);
    seen.add(start);

    let steps = 0;

    while (queue.length > 0) {
      const nodesInQueue = queue.length;

      for (let j = 0; j < nodesInQueue; j++) {
        const node = queue.shift();

        if (node === end) {
          return steps;
        }

        // TODO Craft the candidate neighbor and check if it is in the bank
			
		for(let i = 0; i<node.length; i++){
			for (const letter of ['A', 'C', 'G', 'T']){
				let nei = node.substring(0, i) + letter + node.substring(i);

				
				console.log("neight built", nei)
				if(seen.has(nei)) continue;

				seen.add(nei);
				queue.push(nei);
			}
		}

            // Remember to check if it has been seen and add it to the queue + seen
      }

      steps++;
    }

    return -1;
  }
}

module.exports = { Problem: MinMutation };
