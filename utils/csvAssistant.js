/**
 * A couple of functionalities managing csv such as creating reports, auto populating items and also searching images from the web
 */


const dfd = require("danfojs-node");


const { getAbsoluteUri, getDirAbsoluteUri, getRandomMaidEmoji, appendQuotes, formatObjectFeatures, getRandomInt,
    getRandomBool, countDecimals } = require('./utils_functions');

class SmartRow {

    constructor(row = {}) {
        this.positiveColumns = ["utility", "benefits", "marketing", "ux"] // How they are normally named as
        this.negativeColumns = ["difficulty",]
        this.coefficient = this.calculateCoefficient(row);
        this.row = row;
        this.row.coefficient = this.coefficient;
    }



    /**
     * Calualtes coefficient based on the potential positive values and bad columns
     */
    calculateCoefficient(row) {
        let coefficient = 0
        // Get the specific value for postiives and add that to the coefficient.
        for (const positiveColumn of this.positiveColumns) {
            let positiveValue = row?.[positiveColumn] ?? 0;
            positiveValue = this.cleanStrIntoInteger(positiveValue);
            coefficient += positiveValue;
        }

        for (const negativeColumn of this.negativeColumns) {
            let negativeValue = row?.[negativeColumn] ?? 0;
            negativeValue = this.cleanStrIntoInteger(negativeValue);
            coefficient -= negativeValue;
        }
        return coefficient;

    }

    /**
     * if value if a string it converts it into a number e.g. "3" => 3 otherwise if it is a number it just returns the number
     * @param {number | string} value 
     */
    cleanStrIntoInteger(value) {
        if (typeof value === 'string') {
            return parseInt(value, 10);
        } else if (typeof value === 'number') {
            return value;
        } else {
            throw new Error('Value must be a string or number');
        }
    }

    toJson() {
        return this.row;
    }

}

class CSVAssistant {

    constructor() {

    }



    /**
     * 
     * @param {String} filename Populates the coefficients with the right data.
     */
    async populateCoefficients(filename = "priorities/task_skills.csv") {

        const absoluteFilePath = getDirAbsoluteUri(filename);
        console.log("Searching from filepath: ", absoluteFilePath);
        const listOfSolvedRows = [];
        try {
            const df = await dfd.readCSV(absoluteFilePath); // assumes file is in CWD
            const prioritiesDict = dfd.toJSON(df);
            for (const row of prioritiesDict) {

                // Go over each column put them on a datastrucutre and then resolving the 
                const smartRow = new SmartRow(row).toJson();
                listOfSolvedRows.push(smartRow);

            }

        } catch (err) {
            console.log(err);
        }

        //   TODO Once I verify that the code is correct I can also make the array into a dictionary

        return listOfSolvedRows;
    }


    saveListToCSV(jsonList, filename) {
        const absoluteFilePath = getDirAbsoluteUri(filename);
        console.log("Saves to csv here: ", absoluteFilePath);
        const df = new dfd.DataFrame(jsonList);
        dfd.toCSV(df, { filePath: absoluteFilePath, sep: ";" });
    }


    /**
     * 
     * @param {string} filename filepath where to populate
     * @param {string} param1 Where to save as
     * @returns 
     */
    async populateAndSave(filename = "priorities/task_skills.csv", { saveAs = "" }) {
        const listSolvedRows = await this.populateCoefficients(filename);
        // console.log("Attampting to save:", listSolvedRows);

        let filepath_target = filename;
        if (saveAs != "") {
            filepath_target = saveAs;
        }
        console.log("? here?")
        this.saveListToCSV(listSolvedRows, filepath_target);
        return listSolvedRows

    }


    sortObjectsByCoefficient(objectList) {
        objectList.sort((a, b) => b.coefficient - a.coefficient);
        return objectList;
      }
      

    /**
     * 
     * @param {String} filename Filename of the tasks
     * @param {bool, string} param1 runPopulation, saveAs
     * @returns 
     */
    async populate_priorities(filename = "priorities/task_skills.csv", { runPopulation = true, saveAs = "", filterTop = 5 }) {
        file_to_search_priorities;
        const listSolvedRows = this.populateAndSave(filename, { saveA: saveAs });
        const sortedSolvedRows = this.sortObjectsByCoefficient(listSolvedRows);
        
        return sortedSolvedRows.slice(0, 5);

    }


}



module.exports = { CSVAssistant };











