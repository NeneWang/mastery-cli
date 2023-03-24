
// Here u want to calculate the right and left max found so far. Then also run the min of those two. substract currect height and compute.

function getCommonHeightBoundary(leftHeight, rightHeight){
	return Math.min(leftHeight, rightHeight);
}

class TrappingRainWater {
    trappingRainWater(height) {

		const rMax = [];
		const lMax = [];

		// Calculate right largest
		let rTallest = 0;
		let lTallest = 0;
		let acc = 0;

		for(let i = height.length - 1; i >= 0; i--){
			rTallest =  Math.max(rTallest, height[i]);
			rMax[i] = rTallest;
		}
//		rMax.reverse();

		// Calculate left largest
		for (let i = 0; i<  height.length; i++){
			lTallest = Math.max(lTallest, height[i]);
			lMax[i] = lTallest;
		}

		console.log("rightmost arr:", rMax);
		console.log("leftmost arr:", lMax);
		
		for (let i = 0; i < height.length; i++){
			let current_h = height[i];
			
			let _height = getCommonHeightBoundary(lMax[i], rMax[i]);
			
			console.log("current height", current_h, "Height bounddaries", _height, "Left", lMax[i], "Right", rMax[i], "accumulation", acc);

			if(_height - current_h > 0) acc += _height - current_h;
		}


        return acc;
    }

    //Dont edit this.
    solve = this.trappingRainWater;
}


module.exports = { Problem: TrappingRainWater };
