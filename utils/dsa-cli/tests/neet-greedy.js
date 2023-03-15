
const assert = require('assert');
const ProblemTests = require('./problem-test');

class MeetingRooms extends ProblemTests{

    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1(){
        const meetingRooms = new this.Problem();
        this.current_test_name = '[[0,30],[5,10],[15,20]] | false';
        assert.deepEqual(meetingRooms.solve([[0,30],[5,10],[15,20]]), false);
    }

    test_2(){

        const meetingRooms = new this.Problem();
        this.current_test_name = '[[7,10],[2,4]] | true';
        assert.deepEqual(meetingRooms.solve([[7,10],[2,4]]), true);
    }

}

const TEST_DICTIONARY = {
    'meeting-rooms': MeetingRooms,

}

module.exports = TEST_DICTIONARY;





