const getTime = (position, target, speed) => {
	return (position - target) / speed;
}

class CarFleet {
	solve(target, position, speed) {
	// Your code here
		const getSpeed = {};
		
		if(position.length == 1){
			return 1;
		}

		position.forEach((_pos, index) => {
			getSpeed[_pos] = speed[index];
		});

		console.log(getSpeed);
		const sorted = position.sort((a, b) => a - b);
		
		console.log('sorted', sorted);
		let fleets = 1;
		
		for(let i = 0; i < sorted.length - 1; i++){
			
			const currentPos = sorted[i];
			const nextPos = sorted[i + 1];

			if( getTime(target, currentPos, getSpeed[currentPos]) > getTime(target, nextPos, getSpeed[nextPos]) ){
				fleets += 1;
			}

		}

		return fleets
		


	}
}


module.exports = { Problem: CarFleet };
