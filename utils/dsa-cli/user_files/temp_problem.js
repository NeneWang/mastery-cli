class MaximumSubarrays {
	solve(nums) {
	// Your code here
		
		let [max, run] = new Array(2).fill(nums[0]);

		for(let i = 1; i< nums.length; i++){
			

			const num = nums[i];
			const sum = num + run;

			run =  Math.max(sum, num);
			max = Math.max(run, max);
			console.log("run", run,  "max", max)
		}

		return max;


	}
}


module.exports = { Problem: MaximumSubarrays };
