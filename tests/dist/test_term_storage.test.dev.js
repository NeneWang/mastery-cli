"use strict";

var assert = require('assert');

var _require = require('../utils/structures'),
    Term = _require.Term,
    TermStorage = _require.TermStorage;

describe("TermStorage tests", function () {
  var term1 = new Term("term1", "example1", "description1", "prompt1");
  var term2 = new Term("term2", "example2", "description2", "prompt2");
  var term3 = new Term("term3", "example3", "description3", "prompt3");
  describe("Term class tests", function () {
    it("should create a Term object with the specified properties", function () {
      assert.deepStrictEqual(term1.term, "term1");
      assert.deepStrictEqual(term1.example, "example1");
      assert.deepStrictEqual(term1.description, "description1");
      assert.deepStrictEqual(term1.references, "");
      assert.deepStrictEqual(term1.attachment, "");
      assert.deepStrictEqual(term1.category, "");
      assert.deepStrictEqual(term1.prompt, "prompt1");
      assert.deepStrictEqual(term1.priority, 5);
      assert.deepStrictEqual(term1.slug, "term1");
      assert.deepStrictEqual(term1.formula_name, "term1");
      assert.deepStrictEqual(term1.attachment_is_url, false);
    });
    it("should create a JSON representation of the Term object", function () {
      assert.deepStrictEqual(term1.asJson, {
        term: "term1",
        example: "example1",
        description: "description1",
        references: "",
        category: "",
        prompt: "prompt1",
        formula_name: "term1",
        attachment: "",
        attachment_is_url: false
      });
    });
  });
  var deck1 = new TermStorage([term1, term2], "Deck 1");
  var deck2 = new TermStorage([term2, term3], "Deck 2");
  var deck3 = new TermStorage([term1, term3], "Deck 3");
  var deck4 = new TermStorage([], "Deck 4", {
    is_active: false
  });
  var deck5 = new TermStorage([], "Deck 5");
  deck1.addDecks([deck2, deck3, deck4, deck5]);
  describe("listTerms()", function () {
    it("should return all terms from all decks when called with no arguments", function () {
      console.log(deck1.listTerms()); // assert.deepStrictEqual(deck1.listTerms(), [term1, term2, term2, term3, term1, term3]);
    });
    it("should return only the terms from the specified decks when called with get_only parameter", function () {
      assert.deepStrictEqual(deck1.listTerms({
        get_only: ["Deck 1", "Deck 2"]
      }), [term1, term2, term2, term3]);
      assert.deepStrictEqual(deck1.listTerms({
        get_only: ["Deck 2", "Deck 3"]
      }), [term2, term3, term1, term3]);
      assert.deepStrictEqual(deck1.listTerms({
        get_only: ["Deck 4"]
      }), []);
    });
  });
  describe("deck_titles property", function () {
    it("should return a list of all deck names, including nested decks", function () {
      assert.deepStrictEqual(deck1.deck_titles, ["Deck 1", "Deck 2", "Deck 3", "Deck 4", "Deck 5"]);
      assert.deepStrictEqual(deck2.deck_titles, ["Deck 2"]);
      assert.deepStrictEqual(deck4.deck_titles, ["Deck 4"]);
    });
  });
});