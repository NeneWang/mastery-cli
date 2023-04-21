class CharacterReplacement {
	solve(s, k) {
		// addRightFrequency
		const addRightFrequency = (letterFreq, letter) => {
			
			
			// Returns the frequency coutns of the current letter, which will be compared with the max and then compared to check for usefulness of the length.
			const letterCode = getCode(letter);

			letterFreq[letterCode]++;//Since they all start from 0
			const frequencyOfTheLetter = letterFreq[letterCode];
			return frequencyOfTheLetter;
		}
		
		// substractLeftFrequency, will never top the max letter count thus, doesnt return an integer
		const substractLeftFrequency = (letterFreq, letter) => {
			const letterCode = getCode(letter);
			// Check if out of the window, then do nothing, cause it should also be automatically removed from the letterFreq.

			letterFreq[letterCode]--;
		}

		// getCode
		const getCode = (letter) => letter.charCodeAt(0) - 'A'.charCodeAt(0);

		const getLetter = (index, string) => string[index];


		// Run the sliding windows problem
		const letterFreq = Array(26).fill(0);
		let [left, right, longestLetterInWindowSize, longestWindowsSize, currentWindowsSize] = Array(5).fill(0);

		while(right < s.length){
			const letterEvaluating = getLetter(right, s);
			const countOfCurrentLetter = addRightFrequency(letterFreq, letterEvaluating);
			
			longestLetterInWindowSize = Math.max(countOfCurrentLetter, longestLetterInWindowSize);
			console.log("compared longest letters current, longest", countOfCurrentLetter, longestLetterInWindowSize, right, letterEvaluating, longestWindowsSize);
			// Evaluate the length if is more than the current wwindows size - the amount of repeated same letter if is longer than k allowed letters.

			currentWindowsSize = right - left + 1;
			//Evaluate if the windows size is the largest one found

			if(k < currentWindowsSize - longestLetterInWindowSize){
				
				const leftLetterToRemove = getLetter(left, s);
				substractLeftFrequency(letterFreq, leftLetterToRemove);
				left++;

				//Update the windows size found: This will never be the longest windows size, as it is being reduced.
			}
			//The problem is that it might go ouw of the window.
			currentWindowsSize = right - left + 1;
			console.log(currentWindowsSize, longestWindowsSize, left, right, "\n");
			longestWindowsSize = Math.max(longestWindowsSize, currentWindowsSize);
			right++;
		}

		//	currentWindowsSize = right - left + 1;
		return longestWindowsSize;



	}
}


module.exports = { Problem: CharacterReplacement };
