/**
 * The idea is to have a terms questions generator
 * Features:
 *  Use a template of question or prompt to ask
 *  Have the ability to grab a picture from the browser (img_link)
 *  Receive from an csv with an Term, Definition, Example columns.
 * This should be useful for generating question prompts for languages, it saves everything as a constant and exports it in the module.
 */


const { Term, Terminology, TermStorage } = require('../structures');
const dfd = require("danfojs-node")
const EXAMPLE_FILE = "./terms/german.csv"
const COL_DEFINITION = "definition"
const COL_TERM = "term"


dfd.readCSV(EXAMPLE_FILE) //assumes file is in CWD
    .then(df => {

        
        const terminologiesDict = dfd.toJSON(df);
        const termStorage = new TermStorage()
        console.log(terminologiesDict)
        for (const row of terminologiesDict){
            const term = new Terminology(row?.term ?? "",row?.description ??"", row?.example ?? "")
            termStorage.push(term)
        }
        console.log(termStorage.jsonTerms);

    }).catch(err => {
        console.log(err);
    })

module.exports = {}