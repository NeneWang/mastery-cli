"use strict";

/**
 * The idea is to have a terms questions generator
 * Features:
 *  Use a template of question or prompt to ask
 *  Have the ability to grab a picture from the browser (img_link)
 *  Receive from an csv with an Term, Definition, Example columns.
 * This should be useful for generating question prompts for languages, it saves everything as a constant and exports it in the module.
 */
var _require = require('../structures'),
    Term = _require.Term,
    Terminology = _require.Terminology,
    TermStorage = _require.TermStorage;

var dfd = require("danfojs-node");

var EXAMPLE_FILE = "./terms/german.csv";
var COL_DEFINITION = "definition";
var COL_TERM = "term";
dfd.readCSV(EXAMPLE_FILE) //assumes file is in CWD
.then(function (df) {
  df.head().print(); //    const column = df.get();

  df.column(COL_TERM).print(); // console.log();

  for (var i = 0; i < df.shape[0]; i++) {
    console.log(df.iloc({
      rows: [i]
    })[COL_DEFINITION].$data[0]);
  }

  console.log(df.shape);
  console.log(df[COL_TERM].$data);
  /**
   *  [ 'Handschuh', 'mich', 'dich', 'sich' ]
   */

  console.log(df.$data);
  /**
   * [
      [ 'Handschuh', ' Hand + Schuh ' ],
      [ 'mich', ' mysel' ],
      [ 'dich', ' yourself' ],
      [ 'sich', 'Oneself' ]
      ]
   */
})["catch"](function (err) {
  console.log(err);
});
module.exports = {};