const Settings = require("./settings.js");

/**
 * Terms, standard accepted for the Quizzler
 */
class Term {

    constructor(term, example = "", description = "", prompt = "Use the term",
        {
            priority = 5, tags = [], category = "", references = "",
            attachment = "", auto_newline = true,
            reference_page = "", reference_line = -1, module_name = ""
        } = {}) {
        /**
         * REMEMBER: To add the new item into asJson!!
         */

        this.auto_newline = auto_newline;

        this.term = term;
        this.description = description;
        this.example = example;

        if (this.auto_newline) {
            this.example = this.example.replace(/(\s{2,}|\n)(?=\S)/g, "\n");
            this.description = this.description.replace(/(\s{2,}|\n)(?=\S)/g, "\n");
        }

        this.references = references;
        this.attachment = attachment;
        this.category = category;
        this.prompt = prompt;
        this.priority = priority;
        this.slug = this.slugify(this.term);
        this.formula_name = this.slug;
        this.attachment_is_url = this.isOnlineResource(attachment);
        this.reference_page = reference_page;
        this.reference_line = reference_line;
        this.module_name = module_name;

    }

    /**
     *  Slugify the term 
     */
    slugify = (term) => {
        return term.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-')
    }

    isOnlineResource = (url) => {
        return /^https?:\/\//i.test(url);
    }

    pushCategory = (subcategory) => {
        this.category += this.category == "" ? subcategory : ` > ${subcategory}`;
    }

    get asJson() {
        return {
            term: this.term, example: this.example, description: this.description, references: this.references,
            category: this.category, prompt: this.prompt,
            formula_name: this.slug, attachment: this.attachment,
            attachment_is_url: this.attachment_is_url
        };
    }

};


class Terminology extends Term {
    /**
     * 
     * @param {string} term Terminology or title
     * @param {String} description Description  which should appear or the definition
     * @param {Optional Arguments} param2 {example: If there is an example, auto_image: bool: If to autoamtically fetch an image from the web.}
     */
    constructor(term, description = "", { example = "", autom_image = false, H = "Use this on an example", attachment = "" } = {}) {

        super(term, example, description, prompt, { attachment: attachment });


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
     * @param {boolean} is_active If the deck is active or not; by default is false
     */
    constructor(terms = [], deck_name = "", 
        { decks = [], is_active = false, module_name="" } = {}) {
        this.terms = terms;
        this.deck_name = deck_name;
        this.is_active = is_active;
        this.decks = decks;
        this.priority = 5; //By default
        this.module_name = module_name;
    }

    /**
     * 
     * @param {TermStorage} deck the deck to append to the storage, by default is active usually
     */
    addDeck(deck) {
        this.decks.push(deck);
    }

    addDecks(decks) {
        for (const deck of decks) {
            // console.log("Adding deck: ", deck);
            this.addDeck(deck);
        }
    }


    /**
     * 
     * @param {[DeckMask]} masks List of masks to apply to the deck
     */
    applyMasks(masks) {
        for (const mask of masks) {
            if (mask.decksToEnable.includes(this.deck_name)) {
                this.is_active = mask.enabled;
            }
        }
        for (const deck of this.decks) {
            deck.applyMasks(masks);
        }
    }


    /**
     * Returns list of deck title. e.g.
     * [kotlin, java, javascript...]
     */
    get deck_titles() {
        const deck_names = [this.deck_name];
        for (const deck of this.decks) {
            deck_names.push(...deck.deck_titles);
        }
        return deck_names;
    }

    /**
     * Returns dict of deck titles with the count of cards inside: deckname
     *  e.g.:
     * {
     *      kotlin - 3: {count: 3, name: kotlin}, 
     *      java - 5: {count: 5, name: java}
     *      javascript - 10: {count: 10, name: javascript}
     * }
     */
    get deck_titles_with_count() {
        const deck_names = {
            [`${this.deck_name} - ${this.terms.length} cards`]: { name: this.deck_name, count: this.terms.length }
        };
        for (const deck of this.decks) {
            Object.assign(deck_names, deck.deck_titles_with_count);
        }
        return deck_names;
    }


    /**
     * Follows the design of array.push, easier to memorize
     * @param {Term} term Pushes this term into the terms of the storage
     */
    push(term) {
        // Check if term at least has a term and description
        if (term?.term == null) {

            return;
        }
        if (term.term == "") {
            return;
        }


        this.terms.push(term);
    }

    /**
     * Appends all decks that are active + its current cards.
     * @returns {List<Json>} Gets the terminologies as a List<Json>
     */
    get jsonTerms() {
        const safeguard_bad_terms = true;
        const res = [];
        // Add own cards
        for (const term of this.terms) {

            res.push(term)
        }

        //Add cards of the decks that are active
        for (const deck of this.decks) {
            if (deck.is_active) {
                res.push(...deck.jsonTerms);
            }
        }

        return res;
    }


    /**
     * 
     * @param {get_only} get only certain decks (with x categories.) 
     * @returns 
     */
    listTerms({ get_only = [] } = {}) {
        const termsList = [];
        termsList.push(...this.terms.map(
            obj => {
                const newterm = new Term(
                    obj?.term ?? "", obj?.example ?? "", obj?.description ?? "", obj?.prompt ?? "",
                    {
                        references: obj?.references ?? "", attachment: obj?.attachment,
                        priority: this.priority
                    }
                )
                newterm.pushCategory(this.deck_name ?? "");
                return newterm;
            }
        ));


        for (const deck of this.decks) {
            //Regardless of it is active or not.
            if ((get_only.length == 0 && deck.is_active) || get_only.includes(deck.deck_name)) {
                termsList.push(...deck.listTerms());
            }
        }

        // Do the same recursive for each of the internal res 
        return termsList
    }



    /**
     * 
     * @param is_active_settings {deck_name,is_active} settings Takes in the settings in key:true/false format to turn on or off of the decks inside.
     */
    changeIsActiveSettingsFromDecks(is_active_settings) {
        for (const deck_name of Object.keys(is_active_settings)) {
            this.decks[deck_name].is_active = is_active_settings[deck_name];
        }
    }

    /**
     * Simply explains the insides as well as the name of the deck
     */
    explain() {
        console.log("termGenerator content:");
        console.log(`From deck: ${this.deck_name} contains decks: ${this.decks.length}`);
        console.log(this.jsonTerms);
    }



};


class Queue {

    constructor() {
        this.queue = []
    }

    enqueue(element) {
        this.queue.push(element)
    }

    dequeue() {
        return this.queue.shift()
    }

    front() {
        return this.queue[0]
    }

    size() {
        return this.queue.length
    }

    isEmpty() {
        return this.size() === 0
    }

}

class DeckMask {
    /**
     * 
     * @param {string} mask_name Name of this mask, used as a sharable identifier
     * @optionalparam {string[]} decksToEnableStrings 
     * @optionalparam {boolean} enabled; defaults to true
     * @optionalparam {int} account_id; defaults to Settings.account_id
     * @returns {DeckMask}
     */
    constructor(mask_name, { decksToEnableStrings = [], enabled = true, account_id = Settings.account_id } = {}) {
        this.mask_name = mask_name;
        this.decksToEnable = decksToEnableStrings;
        this.enabled = enabled;
        this.account_id = account_id;
    }



    get asJson() {
        return {
            mask_name: this.mask_name,
            decks: this.decksToEnable,
            enabled: this.enabled,
            account_id: this.account_id
        }
    }
}


module.exports = { Term, Terminology, TermStorage, Queue, DeckMask };