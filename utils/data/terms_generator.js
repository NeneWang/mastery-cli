/**
 * The idea is to have a terms questions generator
 * Features:
 *  Use a template of question or prompt to ask
 *  Have the ability to grab a picture from the browser (img_link)
 *  Receive from an csv with an Term, Definition, Example columns.
 * This should be useful for generating question prompts for languages, it saves everything as a constant and exports it in the module.
 */


const { Term, Terminology, TermStorage } = require('../structures');

const { getAbsoluteUri, getDirAbsoluteUri, getRandomMaidEmoji, appendQuotes, formatObjectFeatures, getRandomInt,
  getRandomBool, countDecimals } = require('../utils_functions');

const dfd = require("danfojs-node")
const EXAMPLE_FILE = "./terms/german.csv"
const COL_DEFINITION = "definition"
const COL_TERM = "term"

class TermGenerator {
  /**
   * It should be an interface to inherit also the Terms Definition Bundler Algorithm as well as the other one.
   * @param {List[jsonObject]} filesData A list of csv files to extract the information from.
   * Strucutre of jsonObject:\n\n\
   * {filename: "Filename or filepath", title: "Title of the deck"}
   */
  constructor(filesData = [], { default_prompt = "Use this on an example" } = {}) {
    this.filesData = filesData;
    this.mapTermsStorage = {};
    this.default_prompt = default_prompt;

  }

  /**
   * To be automatically called at construction, when Strings are added as well
   * Virtually creates the terms based on them, and agroupates them into a list of items
   */
  async fetchTerms() {
    for (const fileData of this.filesData) {
      let termStorage = new TermStorage([], fileData.title);
      termStorage = await this.fetchTerm(fileData.filename, termStorage); // Should populate the TermStorage with the specific file inside of it.
      this.mapTermsStorage[fileData.title] = termStorage; //Populate so that it can be retrieved later on.
      // console.log("termStorage", termStorage)
    }

  }

  /**
   * 
   * @param {string} filename Name of the file to read
   * @param {TermStorage} termStorage Storage is a reference object to modify
   */
  async fetchTerm(filename = "terms/german.csv", termStorage = []) {
    const absoluteFilePath = getDirAbsoluteUri(filename);
    // console.log("Getting from: ", absoluteFilePath);

    try {
      const df = await dfd.readCSV(absoluteFilePath); // assumes file is in CWD
      const terminologiesDict = dfd.toJSON(df);

      for (const row of terminologiesDict) {
        const term = new Terminology(row?.term ?? "", row?.description ?? "", row?.example ?? "", { prompt: this.default_prompt });
        termStorage.push(term);
      }

      return termStorage;
    } catch (err) {
      console.log(err);
    }
  }


  /**
   * Retursn List<TermStorage>
   */
  get termStorageAsJsonList() {
    const res = [];
    for (const termStorage of Object.values(this.mapTermsStorage)) {
      // console.log(termStorage);
      res.push(...termStorage?.listTerms);
    }
    return res;
  }



}



module.exports = { TermGenerator }