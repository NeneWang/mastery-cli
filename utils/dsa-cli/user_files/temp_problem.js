class KClosest {

	getClosest(points, k){

		const calculateDistance =  ([x, y]) => {
			return x**2 + y**2;
		}
	
		// Sort by the lcosest.
		
		points.sort((a, b) => calculateDistance(a) - calculateDistance(b));
		return points.slice(0, k);

	}

	solve(points, k, {getClosest} = this) {
	// Your code here
		return getClosest(points, k);
	}
}


module.exports = { Problem: KClosest };
