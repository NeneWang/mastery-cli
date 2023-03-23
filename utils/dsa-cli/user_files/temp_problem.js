


class LenghtOfLongestSubString {
	solve(s) {
		// My guess is that I can have a hasmap for each of the words. This depending on the range of words
		
		let max = 0;
		let subset = new Set();
		let l = 0;
		// Iterate each to create the subset
		
		for (let r = 0; r<s.length; r++){
			
			// Delete if repeated
		
			while(subset.has(s[r])){

				subset.delete(s[l]);
				l++;

			}
			subset.add(s[r]);

			// See if is the max 
			max = Math.max(subset.size, max);

		}


		return max;
	}
}


module.exports = { Problem: LenghtOfLongestSubString };
