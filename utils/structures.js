
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


class TermStorage {
    constructor(terms = []) {
        this.terms = terms;
    }

    get jsonTerms() {
        const res = [];
        for (const term of this.terms) {
            res.push(term.asJson)
        }
        return res;
    }

};

module.exports = {Term, Terminology, TermStorage};