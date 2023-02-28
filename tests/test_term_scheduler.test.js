const { TermScheduler, TermCardsOfflineStrategy } = require('../utils/termScheduler');
const { StorableQueue } = require('../utils/StorableQueue');
const assert = require('assert');
const { termsEnabled } = require('../utils/constants');



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

    termScheduler = new TermScheduler({ cards });
  });

  afterEach(()=>{
    termScheduler.cleanCards();
    termScheduler.saveCards();
  })

  it('should add the first card to the working set when starting', () => {
    assert(termScheduler.working_set.length != 0);
    assert.deepEqual(termScheduler.getCard(), cards[0]);
  });


  it('should add the next card to the working set after a card is correctly answered', () => {

    const firstCard = termScheduler.working_set.peek();
    termScheduler.solveCard(true);
    const secondCard = termScheduler.working_set.peek();
    assert.notStrictEqual(firstCard, secondCard); //Shouldnt be equal

  });

  it('should move a card to the learning queue when it is incorrectly answered', () => {
    const firstCard = termScheduler.working_set.peek();
    termScheduler.solveCard(false);
    const secondCard = termScheduler.working_set.peek(); //Take the alst one.
    assert.notStrictEqual(firstCard, secondCard);
    assert.strictEqual(termScheduler.learned_queue.length, 0);
    assert.strictEqual(termScheduler.working_set.lastElement, firstCard);
  });

  it('Removes all cards when all correctly answered, cant learn the last card if basically the card is not left', () => {
    const cardsCount = cards.length; //Plus some extra interactions
    for (let i = 0; i < cardsCount+2; i++) {
      termScheduler.solveCard(true);
    }
    assert.strictEqual(termScheduler.learning_queue.length, 0);
    assert.strictEqual(termScheduler.working_set.length, 0);
    assert.strictEqual(termScheduler.learned_queue.length, cardsCount);
    // Shouldnt be able to solve this card if there is more.
  });



})





















