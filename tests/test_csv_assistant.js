
const assert = require('assert');
const { CSVAssistant } = require('../utils/csvAssistant');


describe("Testing CSV Assistant", () => {


    it("Tests if mapping occurs succesfully", async () => {
        const csvAssistant = new CSVAssistant();
        const listSolvedRows = await csvAssistant.populateCoefficients();

        assert(listSolvedRows.length > 0);
        console.log(listSolvedRows[1]);

    });

    it("Test integration test, if can be saved into the csv target filepath", async () => {
        // You still have to manually check for this.
        const csvAssistant = new CSVAssistant();
        const _ = await csvAssistant.populateAndSave("priorities/task_skills.csv", { saveAs: "priorities/task_skills_coefficient.csv" });

    })

    it("Runs coefficients, saves it and returns top 3", async () => {
        // You still have to manually check for this.
        const csvAssistant = new CSVAssistant();
        const top3InPriority = await csvAssistant.getTopPriorities("priorities/task_skills.csv",
            { saveAs: "priorities/task_skills_coefficient.csv", filterTop: 3 });
        console.log(top3InPriority);
        assert(top3InPriority.length == 3);

    })

    it("Filters completed rows", async () => {
        // You still have to manually check for this.
        // In this example Design systems should have a coefficient of  5 (The largest) however the status should be done which is on the blacklist
        const csvAssistant = new CSVAssistant();
        const top3InPriority = await csvAssistant.getTopPriorities("priorities/sample.csv",
            { saveAs: "priorities/task_skills_coefficient.csv", filterTop: 3 });
        // console.log(top3InPriority);
        assert(top3InPriority.length == 3);
        for (const row of top3InPriority){
            assert (row?.feature_id!="Design System");
        }

    })

    it("Get priority files", () => {

        const csvAssistant = new CSVAssistant();
        console.log(csvAssistant.getFilesInPriorities());
    })

})
