"use strict";

/**
 * Testing the Quizzler such as adding different 
 */
var utils = require('../utils/utils');

var _require = require('../utils/structures'),
    TermStorage = _require.TermStorage;

describe("Quizzler Terminology Tests", function () {
  function setupQuizer() {
    var terms = [{
      term: "Sample Term",
      prompt: "Do X",
      description: "some Descirpiton",
      attachment: "./img/2023-02-07-10-29-38.png"
    }];
    var decks = new TermStorage(terms, "Academic Terms");
    var mQuizer = new utils.MathQuizer([], [], decks.listTerms);
    ;
    return mQuizer;
  }

  it("Check that images are added properly", function () {
    /**
     * There is no actual way other than running a test with an image example
     */
    var mQuizer = setupQuizer();
    mQuizer.ask_term_question();
  });
});