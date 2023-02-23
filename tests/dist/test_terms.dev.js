"use strict";

// I will write some tests for the terms here.
var _require = require("../utils/data/terms_generator"),
    TermGenerator = _require.TermGenerator;

var assert = require('assert');

var _require2 = require("../utils/structures"),
    TermStorage = _require2.TermStorage;

var _require3 = require("../utils/data/terms"),
    populateTerms = _require3.populateTerms;

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
            // console.log(termGenerator.termStorageAsJsonList);
            assert(termGenerator.termStorageAsJsonList.length > 2);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});
describe("Testing Terms using Then", function () {
  it("Test if it is able to read and populate the terms json Using then pattern", function () {
    var filesData = [{
      title: "mock-v1",
      filename: "terms/mock.csv"
    }];
    var termGenerator = new TermGenerator(filesData);
    termGenerator.fetchTerms().then(function () {
      // console.log(termGenerator.termStorageAsJsonList);
      assert(termGenerator.termStorageAsJsonList.length > 2);
    })["catch"](function (err) {
      console.log(err);
    });
  });
});
describe("Get all terms at once", function () {
  it("Populating the terms on load time?", function _callee2() {
    var terms;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(populateTerms());

          case 2:
            terms = _context2.sent;
            // console.log("async terms:", terms)
            assert(terms.length > 2);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});