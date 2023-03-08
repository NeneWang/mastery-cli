/**
 * Run tests based on the solved examples, check at least that for the solved examples everything runs smoothly.
 */

const ProblemsManager = require('../problems-manager');
const assert = require('assert');

describe('Problem integrity', function () {
    // Run and test test available
    it('Should run and test the problem', async function () {
        const problemManager = new ProblemsManager();
        problemManager.autoPopulateUsingTestDictionary();

        const allProblemsMetadata = problemManager.problems;
        for (let problemMetadata of Object.values(allProblemsMetadata)) {
            // Grab the solved solution by joining paths?
            const solvedProblemPath = problemMetadata.absolute_solution_path;
            const { Problem } = require(solvedProblemPath);
            console.log("ProblemSolutionObject", Problem);
            const ProblemTestObject = problemManager.selectTest(problemMetadata);
            // console.log("solvedProblemPath", solvedProblemPath);
            const problemTests = new ProblemTestObject(Problem);
            const didPassAllTests = problemTests.runTests();
            if (!didPassAllTests) {
                console.log("Problem failed: ", problemMetadata);
            }
            assert(didPassAllTests);
        }

    });

    it("Test that all problems have printable prompts", async function () {
        const problemManager = new ProblemsManager();
        problemManager.autoPopulateUsingTestDictionary();
        // TODO Complete this

    });

    it("Test that all problems have basic prompts", async function () {
        const problemManager = new ProblemsManager();
        problemManager.autoPopulateUsingTestDictionary();
        // TODO Complete this

    });

});


