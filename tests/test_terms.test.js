// I will write some tests for the terms here.
const { TermGenerator } = require("../utils/data/terms_generator");
const assert = require('assert');
const { TermStorage } = require("../utils/structures");
const { populateMasterDeck: populateTerms } = require("../utils/data/terms");



function createTermGenerator() {
    const filesData = [{ title: "mock-v1", filename: "terms/mock.csv" }];

    return new TermGenerator(filesData);
}

describe("Testing Terms Generator", () => {


    it("Test if it is able to read and populate the terms json ", async () => {
        const termGenerator = createTermGenerator()
        const res = await termGenerator.fetchTerms();


        // console.log(termGenerator.termStorageAsJsonList);
        assert(termGenerator.termStorageAsJsonList.length > 2);

    });
    it("Test that the rows are properly populated ", async () => {
        const termGenerator = createTermGenerator()
        const res = await termGenerator.fetchTerms();

        first_sample_term = termGenerator.termStorageAsJsonList[0];
        console.log("first_sample_term", first_sample_term);
        assert(first_sample_term.term != "");
        assert(first_sample_term.prompt != "");
        assert(first_sample_term.description != "");
        assert(first_sample_term.attachment != "");
        assert(first_sample_term.example == "Some example");
        assert(first_sample_term.category == "mock-v1"); //Inherits from the root folder/
        // console.log(termGenerator.termStorageAsJsonList);
        // assert(termGenerator.termStorageAsJsonList.length > 2);

    });

    it("Default Prompt Alteration ", async () => {
        const filesData = [{ title: "mock-v1", filename: "terms/mock.csv" }];

        const termGenerator = new TermGenerator(filesData, {default_prompt: "Some Prompt Here"})
        const _ = await termGenerator.fetchTerms();

        first_sample_term = termGenerator.termStorageAsJsonList[1];
        console.log("alterated prompt:", first_sample_term);
        
        assert(first_sample_term.prompt == "Some Prompt Here");

    });

    
    it("Explicit Prompt ", async () => {
        const filesData = [{ title: "mock-v1", filename: "terms/mock.csv" }];

        const termGenerator = new TermGenerator(filesData, {default_prompt: "Some Prompt Here"})
        const _ = await termGenerator.fetchTerms();

        first_sample_term = termGenerator.termStorageAsJsonList[0];
        console.log("alterated prompt:", first_sample_term);
        
        assert(first_sample_term.prompt == "this is a custom prompt");

    });

})

describe("Testing Terms using Then", () => {
    it("Test if it is able to read and populate the terms json Using then pattern", () => {

        const termGenerator = createTermGenerator();
        termGenerator.fetchTerms().then(() => {
            // console.log(termGenerator.termStorageAsJsonList);
            assert(termGenerator.termStorageAsJsonList.length > 2);
        }).catch((err) => {
            console.log(err);
        });
    });
});





