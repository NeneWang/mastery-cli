class MinWindow {
	solve(s, t) {
	// Your code here
		const getFrequencyMap = (str, frequencyMap = new Map()) => {
			for (const letter of str){
				frequencyMap.set(letter, (frequencyMap.get(letter) | 0)+1);
			}	
			return frequencyMap;
		}

		// getTwoPointers 
		const getTwoPointers = (str, sub, frequencyMap) => {
			// First you want to initialize things
			
			let [start, end_l, right, left, matched] = [0, str.length + 1, 0, 0, 0];

			// Then create a right and left loop given the left index, or the while closing windows
			const canSlide = () => matched === sub.length; //Althought it shouldnt be more, that would be quite the bug

			while(right < str.length){
				
				matched = addRightFrequency(str, right, frequencyMap, matched);
				
				let anti_loop = 0;

			console.log('start', start, 'endl', end_l, 'right', right, 'left', left, 'matched', matched, 'canSlide', canSlide(), 'curr', str[right], 'matched', matched, 'sublength', sub.length-1, frequencyMap, 'seq', getSubstring(left, right-left, str));

				while(canSlide() && anti_loop < 30){
					anti_loop++;

					//Update the start and end if the new windows_l is smaller than end_l
					
				console.log('left start', start, 'endl', end_l, 'right', right, 'left', left, 'matched', matched, 'canSlide', canSlide(), 'curr', str[right], 'matched', matched, 'sublength', sub.length-1, frequencyMap, 'seq', getSubstring(left, right-left, str));	

					const window_l = right - left+1;

					if(window_l < end_l) {
						start = left;
						end_l = window_l;
					}




					matched = substractLeftFrequency(str, left, frequencyMap, matched);

					left++;

					// Get the left Frequency and 

				}

				right++;

			}

			return {start, end_l};

		}


		// addRightFrequencyractLeftFrequency(str,
		
		const addRightFrequency = (str, right, frequencyMap, matches) => {
			const letter = str[right];
			
			// Add the right letter and update the frequncy Map by -1 and then increase the matches

			if(frequencyMap.has(letter)){
				
				frequencyMap.set(letter, frequencyMap.get(letter) - 1);
				const count_letter = frequencyMap.get(letter);
				if(count_letter >= 0){
					matches++;
				}
				
			}
			return matches

		}


		// substractLeftFrequency
		const substractLeftFrequency = (str, left, frequencyMap, matches) => {
			const letter = str[left];

			if(frequencyMap.has(letter)){
				const count_letter = frequencyMap.get(letter);

				if(count_letter === 0){
					matches--;
				}

				frequencyMap.set(letter, frequencyMap.get(letter) + 1);
			}
			return matches;
		}


		// getSubString
		const getSubstring = (start, end_l, str) => {
			if (end_l > str.length) return "";
			return str.slice(start, end_l + start);

		}
			
		const is_invalid = !s.length || !t.length;
		if(is_invalid) return "";

		const frequencyMap = getFrequencyMap(t);
		console.log(frequencyMap);
		const {start, end_l} = getTwoPointers(s, t, frequencyMap);
		return getSubstring(start, end_l, s);

		

	}
}


module.exports = { Problem: MinWindow };



