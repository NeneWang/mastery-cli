

/**
 * <RULES>
 * 
 * 1 Creating Collections: It makes sense to create collection for e.g. functions on an array and their hipothetical use.
 * 2 Strategy > Term:, Or at least bundle a collection of terms, to make it worth more.
 */




const { TermStorage } = require('../structures');




async function populateTerms() {
    terms = []



    let decks = new TermStorage([], "Academic Terms");

    const { react_terms } = require('./frameworks');
    decks.addDeck(new TermStorage(react_terms, "react terms", { is_active: false }));


    const { network, artificialIntelligence, algebra, calculousOne } = require("./fall23");
    decks.addDeck(new TermStorage(network, "network", { is_active: false }));
    decks.addDeck(new TermStorage(artificialIntelligence, "artificial intelligence", { is_active: false }));
    // decks.addDeck(new TermStorage(algebra, "algebra", { is_active: false }));
    // decks.addDeck(new TermStorage(calculousOne, "calculus one", { is_active: false }));



    // const { pragmatic_programmer } = require('./ethics.js');
    // decks.addDeck(new TermStorage(pragmatic_programmer, "pragmatic programmer", { is_active: false }));




    // const { designPatterns, dsa, system_design } = require('./dsa');


    // decks.addDeck(new TermStorage(designPatterns, "design patterns", { is_active: false }));
    // decks.addDeck(new TermStorage(dsa))
    // decks.addDeck(new TermStorage(system_design, "system design", { is_active: false }));

    // const { aws_services, aws_glossary, coderTerms, unit_testing } = require('./programmer_experience');
    // decks.addDeck(new TermStorage(aws_glossary, "aws glossary", { is_active: false }));
    // decks.addDeck(new TermStorage(aws_services, "aws services", { is_active: false }));
    // decks.addDeck(new TermStorage(coderTerms, "coder terms", { is_active: false }));
    // decks.addDeck(new TermStorage(unit_testing, "unit testing", { is_active: false }));



    // decks.addDeck(new TermStorage(test, "test", {is_active: false}));

    terms.push(...decks.listTerms);


    const filesData = [{
        title: "mock-v1",
        filename: "terms/mock.csv"
    }];
    const { TermGenerator } = require('./terms_generator');
    const termGenerator = new TermGenerator(filesData);
    const _ = await termGenerator.fetchTerms();
    // terms.push(...termGenerator.termStorageAsJsonList);

    return terms;
}

const termJson = [];

module.exports = { termJson, populateTerms };