class GenerateParentesis {
	
	dfsParenthesis(n, open, closed, current, combinations){
		
		if(n*2 == current.length){
			console.log("Pushing combination", current.join(''), "Combiantions", combinations);
			combinations.push(current.join(''));
			return combinations;
		}

		if(open < n){
			const newCombination = [...current, '('];
			console.log("adding open", open, n, newCombination)
			this.dfsParenthesis(n, open + 1, closed, newCombination, combinations);
		}

		if(closed < open){
			const newCombination = [...current, ')'];
			console.log("Closing COmbination closed:", closed, "open", open, "new combo", newCombination);
			this.dfsParenthesis(n, open, closed + 1, newCombination, combinations);
		}

		return combinations

	}

	solve(n) {
	// Your code here
		const combinations = [];
		return this.dfsParenthesis(n, 0, 0, [], combinations);

	}
}


module.exports = { Problem: GenerateParentesis };
