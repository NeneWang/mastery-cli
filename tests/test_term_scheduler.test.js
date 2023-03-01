const { TermScheduler, TermCardsOfflineStrategy } = require('../utils/termScheduler');
const { StorableQueue } = require('../utils/StorableQueue');
const assert = require('assert');



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
    const termScheduler = new TermScheduler({ cards: cards });

    assert.strictEqual(termScheduler.getCardsToLearn(), 2);
  });


  it('should return the total amount of cards to learn', () => {
    const cards = [{ term: 'term1', definition: 'definition1' }, { term: 'term2', definition: 'definition2' }];
    const termScheduler = new TermScheduler({ cards: cards });

    assert.strictEqual(termScheduler.getCardsToLearn(), 2);
  });

});


describe("Testing Behaviour", () => {

  let termScheduler;

  const cards = [
    { term: 'term1', definition: 'definition1' },
    { term: 'term2', definition: 'definition2' },
    { term: 'term3', definition: 'definition3' },
    { term: 'term4', definition: 'definition4' },
    { term: 'term5', definition: 'definition5' },
    { term: 'term6', definition: 'definition6' },
    { term: 'term7', definition: 'definition7' },
    { term: 'term8', definition: 'definition8' },
    { term: 'term9', definition: 'definition9' },
    { term: 'term10', definition: 'definition10' }
  ];

  beforeEach(() => {

    this.termScheduler = new TermScheduler({ cards });
  });
  it('should add the first card to the working set when starting', () => {
    assert(this.termScheduler.working_set.length!=0);
    assert.deepEqual(this.termScheduler.getCard(), cards[0]);
  });
  it('should add the next card to the working set after a card is correctly answered', () => {

    const firstCard = termScheduler.working_set.peek();
    termScheduler.solveCard(true);
    const secondCard = termScheduler.working_set.peek();
    console.log(termScheduler.working_set);
    assert(firstCard == secondCard);

  });






})





















