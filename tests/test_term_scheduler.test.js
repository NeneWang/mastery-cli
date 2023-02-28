const { TermScheduler, TermCardsOfflineStrategy } = require('../utils/termScheduler');
const { StorableQueue } = require('../utils/StorableQueue');
const assert = require('assert');


describe('TermScheduler constructor', () => {
  it('should create a TermScheduler object with default parameters', () => {
    const termScheduler = new TermScheduler();
    
    assert.strictEqual(termScheduler.working_set_length, 5);
    assert.strictEqual(termScheduler.working_set.length, 0);
    assert.strictEqual(termScheduler.learning_queue.length, 0);
    assert.strictEqual(termScheduler.learned_queue.length, 0);
  });
});


describe('TermScheduler getCard', () => {
  it('should return false when the working set is empty', () => {
    const termScheduler = new TermScheduler();
    const card = termScheduler.getCard();
    
    assert.strictEqual(card, false);
  });

  
  it('should return the first card in the working set when it is not empty', () => {
    const termScheduler = new TermScheduler();
    const card = { term: 'term', definition: 'definition' };
    termScheduler.working_set.enqueue(card);
    assert(termScheduler.getCard(), card);
  });

  it('should return the total amount of cards to learn', () => {
    const cards = [{ term: 'term1', definition: 'definition1' }, { term: 'term2', definition: 'definition2' }];
    const termScheduler = new TermScheduler({cards: cards});
    
    assert.strictEqual(termScheduler.getCardsToLearn(), 2);
  });



});





















