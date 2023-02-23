// I will write some tests for the terms here.
const { TermGenerator } = require("../utils/data/terms_generator");
const assert = require('assert');
const { TermStorage } = require("../utils/structures");
const { populateTerms }= require ("../utils/data/terms");

describe("Testing Terms Generator", () => {
    it("Test if it is able to read and populate the terms json ",async () => {

        const filesData = [{
            title: "mock-v1",
            filename: "terms/mock.csv"
        }];
        const termGenerator = new TermGenerator(filesData);
        const res = await termGenerator.fetchTerms();


        // console.log(termGenerator.termStorageAsJsonList);
        assert(termGenerator.termStorageAsJsonList.length > 2);

    })
})

describe("Testing Terms using Then", () => {
    it("Test if it is able to read and populate the terms json Using then pattern", () => {
      const filesData = [{
        title: "mock-v1",
        filename: "terms/mock.csv"
      }];
  
      const termGenerator = new TermGenerator(filesData);
      termGenerator.fetchTerms().then(() => {
        // console.log(termGenerator.termStorageAsJsonList);
        assert(termGenerator.termStorageAsJsonList.length > 2);
      }).catch((err) => {
        console.log(err);
      });
    });
  });


  describe("Get all terms at once", () => {
    it("Populating the terms on load time?",async ()  => {
        const terms = await populateTerms();
        // console.log("async terms:", terms)
        assert(terms.length > 2);
    });

    
  })
  



