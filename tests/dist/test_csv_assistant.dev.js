"use strict";

var assert = require('assert');

var _require = require('../utils/csvAssistant'),
    CSVAssistant = _require.CSVAssistant;

describe("Testing Terms Generator", function () {
  it("Tests if mapping occurs succesfully", function _callee() {
    var csvAssistant, listSolvedRows;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            csvAssistant = new CSVAssistant();
            _context.next = 3;
            return regeneratorRuntime.awrap(csvAssistant.populateCoefficients());

          case 3:
            listSolvedRows = _context.sent;
            assert(listSolvedRows.length > 0);
            console.log(listSolvedRows[1]);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it("Test integration test, if can be saved into the csv target filepath", function _callee2() {
    var csvAssistant;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // You still have to manually check for this.
            csvAssistant = new CSVAssistant();
            csvAssistant.populateAndSave();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});