class PalindromicSubstring {
	
	isPalindrom (s, left, right, count = 0) {

		const isInBound = () =>  (left >= 0 && right < s.length);
		while(isInBound()){
			
			const [l, r] = [s[left], s[right]];
			if(l !== r) return count;
			
			left--;right++;count++;
		}

		return count;
	}




	solve(s) {
	// Your code here
		
		let totalCount = 0;
		
		for(let i = 0; i< s.length; i++){
			const [odd, even] = [i, i+1];
			totalCount += this.isPalindrom(s, i, odd);
			totalCount += this.isPalindrom(s, i, even);
		
		}
		return totalCount;

	}
}


module.exports = { Problem: PalindromicSubstring };
