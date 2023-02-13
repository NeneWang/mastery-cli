/**
 * The idea is to have a terms questions generator
 * Features:
 *  Use a template of question or prompt to ask
 *  Have the ability to grab a picture from the browser (img_link)
 *  Receive from an csv with an Term, Definition, Example columns.
 * This should be useful for generating question prompts for languages, it saves everything as a constant and exports it in the module.
 */

const dfd = require("danfojs-node")
const EXAMPLE_FILE = "./terms/german.csv"
const COL_DEFINITION = "definition"
const COL_TERM = "term"

dfd.readCSV(EXAMPLE_FILE) //assumes file is in CWD
    .then(df => {

        df.head().print()

        //    const column = df.get();
        df.column(COL_TERM).print();
        console.log(df[COL_TERM].$data)
        console.log(df.$data)
        
        /**
         *  [ 'Handschuh', 'mich', 'dich', 'sich' ]
         */
        
        /**
         * [
            [ 'Handschuh', ' Hand + Schuh ' ],
            [ 'mich', ' mysel' ],
            [ 'dich', ' yourself' ],
            [ 'sich', 'Oneself' ]
            ]
         */

    }).catch(err => {
        console.log(err);
    })

module.exports = {}