// I will write some tests for the terms here.
const { TermGenerator } = require("../utils/data/terms_generator");
const assert = require('assert');
const { TermStorage } = require("../utils/structures");

describe("Testing Terms Generator", () => {
    it("Test if it is able to read and populate the terms json ",async () => {

        const filesData = [{
            title: "mock-v1",
            filename: "terms/mock.csv"
        }];
        const termGenerator = new TermGenerator(filesData);
        const res = await termGenerator.fetchTerms();


        // console.log("res", res);
        // const termsDeck = termGenerator.mapTermsStorage["mock-v1"];
        console.log(termGenerator.termStorageAsJsonList);
        // assert(termsDeck.decks.length > 2);
        // termsDeck.explain();
        // console.log(termsDeck)

    })
})




