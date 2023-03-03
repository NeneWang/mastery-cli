class ProblemTests {
    constructor(Problem) {
        this.Problem = Problem;
        this.tests = [];
    }

    runTests() {
        this.tests.forEach(test => {
            test();
        });
    }


}

class HelloWorldTest extends ProblemTests {
    constructor() {
        super();
        this.tests.push(this.helloWorldTest);
    }

    helloWorldTest() {
        console.log("running Hello world test")
        const problemToTest = new this.Problem();
        problemToTest.solve();// Should print "Hello World!"
    }
}


module.exports = { ProblemTests:HelloWorldTest };