
function getHeights(heights, leftIndex, rightIndex){
	return [heights[leftIndex], heights[rightIndex]]
}

function getArea(heights, leftIndex, rightIndex){
	const [leftHeight, rightHeight] = getHeights(heights, leftIndex, rightIndex)
	const _height = Math.min(leftHeight, rightHeight);
	const width = rightIndex-leftIndex; // Distance
	return _height * width
}

function getMostWater(heights){
	// Loop over the the boundaries until 
	let leftIdx = 0;
	let rightIdx = heights.length-1;
	let maxArea = 0;
	while(leftIdx < rightIdx){
		
		const [leftHeight, rightHeight] = getHeights(heights, leftIdx, rightIdx);
		console.log(leftIdx, rightIdx, leftHeight, rightHeight);


		//Update things.
		
		maxArea = Math.max(getArea(heights, leftIdx, rightIdx), maxArea);

		const isRightGreater = leftHeight <= rightHeight;
		if(isRightGreater){
			leftIdx++;
		}
		else{
			rightIdx--;
		}
	}
	return maxArea;

}


class ContainerWithMostWater {
    solve(heights) 
{
	console.log("most water", getMostWater(heights));
	return getMostWater(heights);
    }
}


module.exports = { Problem: ContainerWithMostWater };
