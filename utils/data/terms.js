

/**
 * <RULES>
 * 
 * 1 Creating Collections: It makes sense to create collection for e.g. functions on an array and their hipothetical use.
 * 2 Strategy > Term:, Or at least bundle a collection of terms, to make it worth more.
 */




const { TermStorage } = require('../structures');

const set_all = false;

/**
 * 
 * @returns Master Deck containing all the cards
 */
async function populateMasterDeck() {
    terms = []



    let decks = new TermStorage([], "Academic Terms");

    const { react_terms, apex } = require('./frameworks');
    decks.addDeck(new TermStorage(react_terms, "react terms", { is_active: set_all }));
    decks.addDeck(new TermStorage(apex, "apex", { is_active: set_all }));


    const { network, artificialIntelligence, algebra, calculousOne } = require("./spring-senior");
    decks.addDeck(new TermStorage(network, "network", { is_active: set_all }));
    decks.addDeck(new TermStorage(artificialIntelligence, "artificial intelligence", { is_active: set_all }));
    decks.addDeck(new TermStorage(algebra, "algebra", { is_active: set_all }));
    decks.addDeck(new TermStorage(calculousOne, "calculus one", { is_active: set_all }));



    const { pragmatic_programmer } = require('./ethics.js');
    decks.addDeck(new TermStorage(pragmatic_programmer, "pragmatic programmer", { is_active: set_all }));

    const { designPatterns, dsa, system_design } = require('./dsa');
    decks.addDeck(new TermStorage(designPatterns, "design patterns", { is_active: set_all }));
    decks.addDeck(new TermStorage(dsa))
    decks.addDeck(new TermStorage(system_design, "system design", { is_active: set_all }));

    const { aws_services, aws_glossary, coderTerms, unit_testing, js_advanced } = require('./programmer_experience');
    decks.addDeck(new TermStorage(aws_glossary, "aws glossary", { is_active: set_all }));
    decks.addDeck(new TermStorage(aws_services, "aws services", { is_active: set_all }));
    decks.addDeck(new TermStorage(coderTerms, "coder terms", { is_active: set_all }));
    decks.addDeck(new TermStorage(unit_testing, "unit testing", { is_active: set_all }));
    decks.addDeck(new TermStorage(js_advanced, "js advanced", { is_active: set_all }));


    // Includes UX, system Design
    const { system_design_project } = require('./design');
    decks.addDeck(new TermStorage(system_design_project, "system design", { is_active: set_all }));


    // Includes Marketing, Accounting.
    const { accounting } = require('./business_terms');
    decks.addDeck(new TermStorage(accounting, "accounting", { is_active: set_all }));


    const { interview } = require('./interview');
    decks.addDeck(new TermStorage(interview, "interview", { is_active: set_all }));

    const { pytorch_machine_learning_course, machine_learning_pandas } = require('./ai_machine');
    decks.addDeck(new TermStorage(pytorch_machine_learning_course, "pytorch machine learning course", { is_active: set_all }));
    decks.addDeck(new TermStorage(machine_learning_pandas, "machine learning pandas", { is_active: true }));

    // decks.addDeck(new TermStorage(test, "test", {is_active: set_all}));


    // Generic Term Generators
    const filesData = [{
        title: "mock-v1",
        filename: "terms/mock.csv"
    }];
    const { TermGenerator } = require('./terms_generator');
    const termGenerator = new TermGenerator(filesData);
    const _ = await termGenerator.fetchTerms();
    decks.addDecks(termGenerator.termStorageList(), { is_active: set_all });


    const strategyFilesData = [
        {
            filename: "terms/strat_cloud_patterns.csv",
            title: "Cloud-pattern"
        },
        {
            filename: "terms/artificial-intelligence.csv",
            title: "artificial-intelligence-strategy"
        },
    ];

    const strategyGenerator = new TermGenerator(strategyFilesData, { default_prompt: "How could you use this?" });
    const __ = await strategyGenerator.fetchTerms();
    decks.addDecks(strategyGenerator.termStorageList(), { is_active: set_all });



    return decks;
}

const termJson = [];

module.exports = { termJson, populateMasterDeck };