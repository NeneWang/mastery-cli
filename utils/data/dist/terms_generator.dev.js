"use strict";

/**
 * The idea is to have a terms questions generator
 * Features:
 *  Use a template of question or prompt to ask
 *  Have the ability to grab a picture from the browser (img_link)
 *  Receive from an csv with an Term, Definition, Example columns.
 * This should be useful for generating question prompts for languages, it saves everything as a constant and exports it in the module.
 */
var dfd = require("danfojs-node");

var EXAMPLE_FILE = "./terms/german.csv";
dfd.readCSV(EXAMPLE_FILE) //assumes file is in CWD
.then(function (df) {
  df.head().print();
})["catch"](function (err) {
  console.log(err);
});
module.exports = {};