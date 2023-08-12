class MeetingRooms {


	canAttendMeetings(intervals){
		
		let prev = intervals.shift();
		for(const i = 1; i< intervals.length; i++){
			const [currStart, currEnd] = intervals[i];
			const [prevStart, prevEnd] = prev;

			if(currStart < prevEnd){
				return false;
			}

			prev = intervals[i];
		}

		return true;
	}

	solve(intervals) {
	// Your code here

		intervals.sort(([aStart, aEnd], [bStart, bEnd]) => {
			
			return (aStart !== bStart) ? aStart - bStart : aEnd - bEnd;
		});

		return this.canAttendMeetings(intervals);
	}
}


module.exports = { Problem: MeetingRooms };
