/**
 * Run tests based on the solved examples, check at least that for the solved examples everything runs smoothly.
 */

const ProblemsManager = require('../problems-manager');
const assert = require('assert');


const to_test = {
    'printable': true,
    'basic': true,
    'runnable': true,
}

describe('Problem integrity', function () {

    it("Test that all problems have printable prompts", async function () {
        if(!to_test.printable) return this.skip();
        const problemManager = new ProblemsManager();
        await problemManager.autoPopulateUsingTestDictionary();

        const { getPromptDict } = require('../prompt');
        const { renderPromptDescription } = require('../functions');

        const allProblemsMetadata = problemManager.problems;
        for (let problemMetadata of Object.values(allProblemsMetadata)) {

            const promblem_prompt = await getPromptDict(problemMetadata.slug);
            // console.log(promblem_prompt);
            assert(promblem_prompt != null || promblem_prompt != undefined);
            const success_at_print = renderPromptDescription(promblem_prompt);
            assert(success_at_print);
        }

    });

    it("Test that all problems have basic prompts", async function () {
        if(!to_test.basic) return this.skip();
        const problemManager = new ProblemsManager();
        await problemManager.autoPopulateUsingTestDictionary();
        // if this test fails, make sure you can run func_create_empty_base_codes to populate with a basic template of them all.
        // Or just run it here just in case everytime this test is run:
        const { createEmptyBaseCodes } = require('./func_create_empty_base_codes');
        await createEmptyBaseCodes();

        const allProblemsMetadata = problemManager.problems;
        for (let problemMetadata of Object.values(allProblemsMetadata)) {
            // console.log(problemMetadata);
            assert(problemManager.copyFile(problemMetadata.file_path) == true)
        }

    });
    // Run and test test available
    it('Should run and test the problem', async function () {   
        if(!to_test.runnable) return this.skip();
        const problemManager = new ProblemsManager();
        await problemManager.autoPopulateUsingTestDictionary();

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


});


