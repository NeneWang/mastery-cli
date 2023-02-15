
class Term {

    constructor(term, example = "", description = "", prompt = "Use the term", references = "", category = "", attachment="") {
        this.term = term;
        this.example = example;
        this.description = description;
        this.references = references;
        this.attachment = attachment;
        this.category = category;
        this.prompt = prompt;
        this.slug = this.slugify(this.term);
    }

    /**
     *  Slugify the term 
     */
    slugify = (term) => {
        return term.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-')
    }

    get asJson() {
        return {
            term: this.term, example: this.example, description: this.description, references: this.references,
            category: this.category, prompt: this.prompt,
            formula_name: this.slug, attachment: this.attachment
        };
    }

};


class Terminology extends Term {
    constructor(term, description = "", example = "", auto_imags = false){
        super(term, example, description, "Use this on an example")
    }
}


/**
 * Follows Composition Pattern, it should be able to store other Term Storages, turn them on and off
 */
class TermStorage {
    
    /**
     * Initialization, by default TermStorage is acitve.
     * @param {List[JsonText]} terms Terms to be added to this deck
     * @param {string} deck_name The deckname, optional if is the parent deckname
     * @param {List[TermStorage]} decks The decks required for the Storages
     */
    constructor(terms = [], deck_name="", decks=[]) {
        this.terms = terms;
        this.deck_name = deck_name;
        this.is_active = true;
        this.decks = decks;
    }

    /**
     * 
     * @param {TermStorage} deck the deck to append to the storage, by default is active usually
     */
    addDeck(deck){
        this.decks.insert(deck);
    }
    
    /**
     * 
     * @param {Term} term Pushes this term into the terms of the storage
     */
    push(term){
        this.terms.push(term);
    }

    /**
     * Appends all decks that are active + its current cards.
     * @returns {string} Gets the terminologies as a Json string
     */
    get jsonTerms() {
        const res = [];
        // Add own cards
        for (const term of this.terms) {
            res.push(term.asJson)
        }

        //Add cards of the decks that are active
        for(const deck of this.decks){
            if(deck.is_active){
                res.push(deck.jsonTerms());
            }
        }

        return res;
    }

    /**
     * 
     * @param is_active_settings {deck_name,is_active} settings Takes in the settings in key:true/false format to turn on or off of the decks inside.
     */
    changeIsActiveSettingsFromDecks(is_active_settings)
    {
        for (const deck_name of Object.keys(is_active_settings)){
            this.decks[deck_name].is_active = is_active_settings[deck_name];
        }
    }



};

module.exports = {Term, Terminology, TermStorage};