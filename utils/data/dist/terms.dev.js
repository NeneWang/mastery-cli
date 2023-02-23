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
  is_active: true
}));

var _require3 = require("./fall23"),
    network = _require3.network,
    artificialIntelligence = _require3.artificialIntelligence,
    algebra = _require3.algebra,
    calculousOne = _require3.calculousOne;

decks.addDeck(new TermStorage(network, "network", {
  is_active: true
}));
decks.addDeck(new TermStorage(artificialIntelligence, "artificial intelligence", {
  is_active: true
}));
decks.addDeck(new TermStorage(algebra, "algebra", {
  is_active: true
}));
decks.addDeck(new TermStorage(calculousOne, "calculus one", {
  is_active: true
}));

var _require4 = require('./ethics.js'),
    pragmatic_programmer = _require4.pragmatic_programmer;

decks.addDeck(new TermStorage(pragmatic_programmer, "pragmatic programmer", {
  is_active: true
}));

var _require5 = require('./dsa'),
    designPatterns = _require5.designPatterns,
    dsa = _require5.dsa,
    system_design = _require5.system_design;

decks.addDeck(new TermStorage(designPatterns, "design patterns", {
  is_active: true
}));
decks.addDeck(new TermStorage(dsa));
decks.addDeck(new TermStorage(system_design, "system design", {
  is_active: true
}));

var _require6 = require('./programmer_experience'),
    aws_services = _require6.aws_services,
    aws_glossary = _require6.aws_glossary,
    coderTerms = _require6.coderTerms,
    unit_testing = _require6.unit_testing;

decks.addDeck(new TermStorage(aws_glossary, "aws glossary", {
  is_active: true
}));
decks.addDeck(new TermStorage(aws_services, "aws services", {
  is_active: true
}));
decks.addDeck(new TermStorage(coderTerms, "coder terms", {
  is_active: true
}));
decks.addDeck(new TermStorage(unit_testing, "unit testing", {
  is_active: true
})); // decks.addDeck(new TermStorage(test, "test", {is_active: false}));

termJson.push.apply(termJson, _toConsumableArray(decks.listTerms)); // console.log("list terms", termJson)

module.exports = {
  termJson: termJson
};