"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * <RULES>
 * 
 * 1 Creating Collections: It makes sense to create collection for e.g. functions on an array and their hipothetical use.
 * 2 Strategy > Term:, Or at least bundle a collection of terms, to make it worth more.
 */
var _require = require('../structures'),
    TermStorage = _require.TermStorage;

var termJson = [];
; // Variable to be returned with the total of the terms to be used

var decks = new TermStorage([], "Academic Terms");

var _require2 = require('./frameworks'),
    react_terms = _require2.react_terms;

decks.addDeck(new TermStorage(react_terms, "react terms", {
  is_active: false
}));

var _require3 = require("./fall23"),
    network = _require3.network,
    artificialIntelligence = _require3.artificialIntelligence,
    algebra = _require3.algebra,
    calculousOne = _require3.calculousOne;

decks.addDeck(new TermStorage(network, "network", {
  is_active: false
}));
decks.addDeck(new TermStorage(artificialIntelligence, "artificial intelligence", {
  is_active: false
})); // decks.addDeck(new TermStorage(algebra, "algebra", { is_active: false }));
// decks.addDeck(new TermStorage(calculousOne, "calculus one", { is_active: false }));
// const { pragmatic_programmer } = require('./ethics.js');
// decks.addDeck(new TermStorage(pragmatic_programmer, "pragmatic programmer", { is_active: false }));
// const { designPatterns, dsa, system_design } = require('./dsa');
// decks.addDeck(new TermStorage(designPatterns, "design patterns", { is_active: false }));
// decks.addDeck(new TermStorage(dsa))
// decks.addDeck(new TermStorage(system_design, "system design", { is_active: false }));
// const { aws_services, aws_glossary, coderTerms, unit_testing } = require('./programmer_experience');
// decks.addDeck(new TermStorage(aws_glossary, "aws glossary", { is_active: false }));
// decks.addDeck(new TermStorage(aws_services, "aws services", { is_active: false }));
// decks.addDeck(new TermStorage(coderTerms, "coder terms", { is_active: false }));
// decks.addDeck(new TermStorage(unit_testing, "unit testing", { is_active: false }));
// decks.addDeck(new TermStorage(test, "test", {is_active: false}));

termJson.push.apply(termJson, _toConsumableArray(decks.listTerms)); // Term generators

(function _callee() {
  var _require4, TermGenerator, filesData, termGenerator, _;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _require4 = require('./terms_generator'), TermGenerator = _require4.TermGenerator;
          filesData = [{
            title: "mock-v1",
            filename: "terms/mock.csv"
          }];
          termGenerator = new TermGenerator(filesData);
          _context.next = 5;
          return regeneratorRuntime.awrap(termGenerator.fetchTerms());

        case 5:
          _ = _context.sent;
          termJson.push.apply(termJson, _toConsumableArray(termGenerator.termStorageAsJsonList));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
})(); // // console.log("list terms", termJson)


module.exports = {
  termJson: termJson
};