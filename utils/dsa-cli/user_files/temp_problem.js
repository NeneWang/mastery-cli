class MinWindow {
	solve(s, t) {
	// Your code here These are the frequnecy map for the letters we need only. Does that mean that we are tracking the amount of letters we have int he frequencyMap ? and update that count? Yeah, then we can count regarding how small they are using the right and left indexes of the windows.
		const getFrequencyMap = (str, frequencyMap = new Map()) => {
			// Populate the frequency map until it finds this out.
			
			for (const letter of str){
				frequencyMap[letter] = letter in frequencyMap ? frequencyMap[letter] + 1: 1;
			}

			return frequencyMap;
		}

		// getTwoPointers by constantly updating the smalles windows found returns  [start, end] of the smallest
		const getTwoPointers = (s, t, frequencyMap) => {
			let [start, min_length, left, right, matched] = new Array(5).fill(0);

			while(right < s.length){

				// Add to the right frequnecy
				const current_letter = s[right];
				matched = addRightFrequency(current_letter, frequencyMap, matched);

				// Check if the match is correct
				const can_slide = () => matched >= s.length;

				// While it can slide then slide the left windows until the matched are not right. (cannot slide) 
				while(can_slide){
					
					//Check if this is the smallest sequence found
					const sequence_length = right - left +1;
					if(sequence_length < min_length){
						// Update the min_sequence
						[start, min_length] = [left, sequence_length];
					}

					const left_letter = s[left];

					matched = substractLeftFrequency(left_letter, frequencyMap, matched);
				}

				right++;
			}

		}
		
		// addRightFrequency
		const addRightFrequency = (current_letter, frequencyMap, matched) => {
			// So it will check if it is inside the frequncey map, and it will substract, if now the count is less than 0 then matched wont increase.
			if (current_letter in frequencyMap){
				frequencyMap[current_letter] -= 1;
				if(frequencyMap[current_letter] >= 0){
					matched++;
				}
				console.log("current_letter", current_letter, "frequnceyMap", frequnceyMap, "matched", matched);
			}

			return matched; 
		}
		
		// substractLeftFrequency
		const substractLeftFrequency = (current_letter, frequencyMap, matched) => {
			if(current_letter in frequencyMap){
				frequencyMap[current_letter] += 1;
				if(frequencyMap[current_letter] > 0){
					matched--;
				}
				console.log("current_letter", current_letter, "frequnceyMap", frequnceyMap, "matched", matched);
			}
			return matched;
		}

		// getSubString
			
		const getSubString = (left, length, s) => {
			// Returns the proper substring based on the length and where it starts from
			let returnRes = "";
			if(left + length > s.length) return "";//An error?
			for(let i = left; i<left+length; i++){
				returnRes += s[i];
			}
			return returnRes;
		}

		// Your solution
		const frequnceyMap = getFrequencyMap(t);
		console.log("Frequency Map generated", frequnceyMap);
		const [left, length] = getTwoPointers(s, t);
		const substring = getSubString(left, length);
		console.log("substrring parsed from left", left, "right", right, "sub", substring);
		return substring;
	}
}


module.exports = { Problem: MinWindow };


