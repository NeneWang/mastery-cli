class CombinationSumII {

	combinationSum2 = function (candidates, target) {
	const dfs = (candidates, target, index = 0, combination = [], combinations = []) => {

		const isBaseCase = target < 0;
		if(isBaseCase) return combinations;

		const isTarget = target === 0;
		if(isTarget) {
			if(combination.length) combinations.push(combination.slice());

			return combinations;
		}

		for(let i = index; i< candidates.length; i++){
			const isDuplication = (index < i) && (candidates[i - 1] === candidates[i]);
			if (isDuplication) continue;
			
			backtrack(candidates, target, i, combination, combinations);

		}

		return combinations;

	}

	const backtrack = (candidates, target, i, combination, combinations) => {
		combination.push(candidates[i]);
		dfs(candidates, (target - candidates[i]), (i + 1), combination, combinations);
		combination.pop()
	}
	
	candidates.sort((a,b) => a-b)
		
	return dfs(candidates, target);
	
	};


	solve(candidates, target) {
	// Your code here
		return this.combinationSum2(candidates, target);
	}
}


module.exports = { Problem: CombinationSumII };
