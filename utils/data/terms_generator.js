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

class TermGenerator{
    /**
     * It should be an interface to inherit also the Terms Definition Bundler Algorithm as well as the other one.
     * @param {List[jsonObject]} filesData A list of csv files to extract the information from.
     * Strucutre of jsonObject:\n\n\
     * {filename: "Filename or filepath", title: "Title of the deck"}
     */
    constructor(filesData = []){
        this.filesData = filesData;
    }

    /**
     * To be automatically called at construction, when Strings are added as well
     * Virtually creates the terms based on them, and agroupates them into a list of items
     */
    fetchTerms(){
        for (const fileData of this.filesData){
            const termStorage = new TermStorage([], fileData.title)
            this.fetchTerm(fileData.filenmae, termStorage)
        }

    }

    /**
     * 
     * @param {string} filename Name of the file to read
     * @param {TermStorage} termStorage Storage is a reference object to modify
     */
    fetchTerm(filename, termStorage){

        dfd.readCSV(filename) //assumes file is in CWD
        .then(df => {

            
            const terminologiesDict = dfd.toJSON(df);
            
            console.log(terminologiesDict)
            for (const row of terminologiesDict){
                const term = new Terminology(row?.term ?? "",row?.description ??"", row?.example ?? "")
                termStorage.push(term)
            }
            console.log(termStorage.jsonTerms);

        }).catch(err => {
            console.log(err);
        })
    }
    


}



module.exports = {}