
const assert = require('assert');
const {CSVAssistant} = require('../utils/csvAssistant');


describe("Testing Terms Generator", () => {


    it("Tests if mapping occurs succesfully", async () => {
        const csvAssistant = new CSVAssistant();
        const listSolvedRows = await csvAssistant.populateCoefficients();
        
        assert(listSolvedRows.length > 0);
        console.log(listSolvedRows[1]);
        
    });

    it("Test integration test, if can be saved into the csv target filepath", async () => {
        // You still have to manually check for this.
        const csvAssistant = new CSVAssistant();
        const _ = await csvAssistant.populateAndSave("priorities/task_skills.csv", {saveAs: "priorities/task_skills_coefficient.csv"});
        
    })

})
