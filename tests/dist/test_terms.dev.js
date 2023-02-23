"use strict";

// I will write some tests for the terms here.
var _require = require("../utils/data/terms_generator"),
    TermGenerator = _require.TermGenerator;

var assert = require('assert');

var _require2 = require("../utils/structures"),
    TermStorage = _require2.TermStorage;

describe("Testing Terms Generator", function () {
  it("Test if it is able to read and populate the terms json ", function _callee() {
    var filesData, termGenerator, res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filesData = [{
              title: "mock-v1",
              filename: "terms/mock.csv"
            }];
            termGenerator = new TermGenerator(filesData);
            _context.next = 4;
            return regeneratorRuntime.awrap(termGenerator.fetchTerms());

          case 4:
            res = _context.sent;
            // console.log("res", res);
            // const termsDeck = termGenerator.mapTermsStorage["mock-v1"];
            console.log(termGenerator.termStorageAsJsonList); // assert(termsDeck.decks.length > 2);
            // termsDeck.explain();
            // console.log(termsDeck)

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});