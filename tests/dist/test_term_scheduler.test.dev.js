"use strict";

var _require = require('../utils/termScheduler'),
    TermScheduler = _require.TermScheduler,
    TermCardsOfflineStrategy = _require.TermCardsOfflineStrategy;

var _require2 = require('../utils/StorableQueue'),
    StorableQueue = _require2.StorableQueue;

var assert = require('assert');

describe('TermScheduler constructor', function () {
  it('should create a TermScheduler object with default parameters', function () {
    var termScheduler = new TermScheduler();
    assert.strictEqual(termScheduler.working_set_length, 5);
    assert.strictEqual(termScheduler.working_set.length, 0);
    assert.strictEqual(termScheduler.learning_queue.length, 0);
    assert.strictEqual(termScheduler.learned_queue.length, 0);
  });
});
describe('TermScheduler getCard', function () {
  it('should return false when the working set is empty', function () {
    var termScheduler = new TermScheduler();
    var card = termScheduler.getCard();
    assert.strictEqual(card, false);
  });
  it('should return the first card in the working set when it is not empty', function () {
    var termScheduler = new TermScheduler();
    var card = {
      term: 'term',
      definition: 'definition'
    };
    termScheduler.working_set.enqueue(card);
    assert(termScheduler.getCard(), card);
  });
  it('should return the total amount of cards to learn', function () {
    var cards = [{
      term: 'term1',
      definition: 'definition1'
    }, {
      term: 'term2',
      definition: 'definition2'
    }];
    var termScheduler = new TermScheduler({
      cards: cards
    });
    assert.strictEqual(termScheduler.getCardsToLearn(), 2);
  });
});