
const { StorableQueue } = require('./StorableQueue');



class TermScheduler {

    constructor({ cards = [], working_set_length = 5, cardsRefreshStrategy = new TermCardsOfflineStrategy() } = {}) {


        this.working_set_length = working_set_length;
        this.working_set = new StorableQueue({ name: "working_set" });
        this.learning_queue = new StorableQueue({ name: "learning_queue" });
        this.learned_queue = new StorableQueue({ name: "learned_queue" });
        this.cardsRefreshStrategy = cardsRefreshStrategy;


        this.setLearningCards(cards);
        this.populateWorkingSet();
    };

    populateWorkingSet(){
        while(this.working_set.length < this.working_set_length || this.learning_queue > 0){
            const card = this.learning_queue.enqueue();
            this.working_set.enqueue(card);
        }
    }

    getCard() {
        // If non left (then return false)
        if (this.working_set.length <= 0) {
            return false;
        }


        return this.working_set.peek();
    };


    /**
     * Returns the amount of cards left to learn.
     * @returns {number}
     */
    getCardsToLearn() {
        return this.learning_queue.length + this.working_set.length;
    }

    getCardsLearnt() {
        return this.learned_queue.length;
    }

    /**
     * 
     * @param {bool} wasCorrect If the solution was correct or not
     * returns {integer} count of cards left to be studied.
     */
    solveCard(wasCorrect) {
        if (wasCorrect) {
            // Then unqueue from learning queue into the last of the working_set and dequee the first one into nonethingness.


            const learnedCard = this.working_set.dequeue();
            this.learned_queue.enqueue(learnedCard);

            if (!this.learned_queue.isEmpty) {
                const newCard = this.learning_queue.dequeue();
                this.working_set.enqueue(newCard);
            }


        } else {
            // Then move the first ot the last

            const cardToRePractice = this.learning_queue.dequeue();
            this.learned_queue.enqueue(cardToRePractice);

        }
        this.saveCards();

        return this.getCardsToLearn();


    };

    saveCards() {
        this.learned_queue.save();
        this.learning_queue.save();
        this.working_set.save();
    }

    setLearningCards(cards) {
        for (const card of cards) {
            this.learning_queue.enqueue(card);
            console.log("Enqueueing, ", card);
        }
    }


    refreshCards() {
        // Refresh the the cards on the learning queue by those who hadnt be learnt yet. (and are neither on the working set)


        // For now you can just dummy populate them.
        this.learned_queue.cleanQueue();
        this.learning_queue.cleanQueue();



        // TODO Add all the cards in that are available. Perhpas differentStrategies could be offered, such as loading from Online or from the local.
        this.learning_queue.elements = this.cardsRefreshStrategy.getLearningQueue();
    };
};

class TermCardsRefreshStrategy {
    getLearningQueue() {
        throw new Error("Not implemented");
    }
}

class TermCardsOfflineStrategy extends TermCardsRefreshStrategy {
    getLearningQueue() {
        return {};
    }
}



module.exports = { TermScheduler };










