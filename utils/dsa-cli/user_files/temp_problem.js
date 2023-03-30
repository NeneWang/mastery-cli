function findPositionInSubstring(left, right, s){
	//Finds if the position in in the substring returns the position after left, otherwise just returns -1.
	
}


class LenghtOfLongestSubString {
	solve(s) {
	// Your code here
	// You can have a window of different keys indicating the last and current fi th is on the arrya of letters
	
		const set = new Set();
		let longest_substring = 0;
		let	l = 0;

		// Go increasig the right until an error is found (substring is found) once the substring is missed, you could skip the left until it no longer has an error.
		
		for(let r = 0; r<s.length; r++){
			
			while(set.has(s[r])){
				set.delete(s[l]);
				l++;
			}
			set.add(s[r]);
			longest_substring = Math.max(set.size, longest_substring);
		}

		return longest_substring;
	}
}


module.exports = { Problem: LenghtOfLongestSubString };
