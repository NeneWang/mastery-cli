

/**
 * <RULES>
 * 
 * 1 Creating Collections: It makes sense to create collection for e.g. functions on an array and their hipothetical use.
 * 2 Strategy > Term:, Or at least bundle a collection of terms, to make it worth more.
 */




const { TermStorage } = require('../structures');

const layer_1 = false;
const layer_2 = false;
const layer_3 = false;

// Code Interview related
const interview = false;

// Programming Frameworks Related
const projects = true;

// Studying for Class Targetted. Start exclusive boolean this 1 month before finals.
const study_cisc = false;


const study_legacy = false;

/**
 * 
 * @returns Master Deck containing all the cards
 */
async function populateMasterDeck() {
    terms = []

    let decks = new TermStorage([], "Academic Terms");

    const { react_terms, apex, flutter, IDE_S, chrome_extensions, python_frameworks, react_typescript, dotNet, angular } = require('./frameworks');
    decks.addDeck(new TermStorage(react_terms, "react terms", { is_active: projects }));
    decks.addDeck(new TermStorage(apex, "apex", { is_active: projects }));
    decks.addDeck(new TermStorage(flutter, "flutter", { is_active: projects }));
    decks.addDeck(new TermStorage(IDE_S, "IDEs", { is_active: projects }));
    decks.addDeck(new TermStorage(chrome_extensions, "chrome extensions", { is_active: projects }));
    decks.addDeck(new TermStorage(python_frameworks, "python frameworks", { is_active: projects }));
    decks.addDeck(new TermStorage(react_typescript, "react typescript", { is_active: projects }));
    decks.addDeck(new TermStorage(dotNet, "dot net", { is_active: projects }));
    decks.addDeck(new TermStorage(angular, "angular", { is_active: projects }));



    const { network, network_midterm, artificialIntelligence, artificialIntelligence_2, algebra, calculousOne, network_final } = require("./spring-senior");
    decks.addDeck(new TermStorage(network, "network", { is_active: study_legacy }));
    decks.addDeck(new TermStorage(network_midterm, "network midterm", { is_active: study_legacy }));
    decks.addDeck(new TermStorage(artificialIntelligence, "artificial intelligence", { is_active: false }));
    decks.addDeck(new TermStorage(artificialIntelligence_2, "artificial intelligence 2", { is_active: false }));
    decks.addDeck(new TermStorage(algebra, "algebra", { is_active: study_legacy }));
    decks.addDeck(new TermStorage(calculousOne, "calculus one", { is_active: study_legacy }));
    decks.addDeck(new TermStorage(network_final, "network final", { is_active: study_legacy }));



    const { pragmatic_programmer } = require('./ethics.js');
    decks.addDeck(new TermStorage(pragmatic_programmer, "pragmatic programmer", { is_active: layer_1 }));

    const { designPatterns, dsa, system_design } = require('./dsa');
    decks.addDeck(new TermStorage(designPatterns, "design patterns", { is_active: interview }));
    decks.addDeck(new TermStorage(dsa, "dsa", { is_active: interview }))
    decks.addDeck(new TermStorage(system_design, "system design", { is_active: interview }));

    const { aws_services, aws_glossary, coderTerms, unit_testing, js_advanced, best_practices } = require('./programmer_experience');
    decks.addDeck(new TermStorage(aws_glossary, "aws glossary", { is_active: layer_1 }));
    decks.addDeck(new TermStorage(aws_services, "aws services", { is_active: layer_1 }));
    decks.addDeck(new TermStorage(coderTerms, "coder terms", { is_active: interview }));
    decks.addDeck(new TermStorage(unit_testing, "unit testing", { is_active: interview }));
    decks.addDeck(new TermStorage(js_advanced, "js advanced", { is_active: projects }));
    decks.addDeck(new TermStorage(best_practices, "best practices", { is_active: interview }));


    // Includes UX, system Design
    const { system_design_project } = require('./design');
    decks.addDeck(new TermStorage(system_design_project, "system design", { is_active: layer_1 }));


    // Includes Marketing, Accounting.
    const { accounting } = require('./business_terms');
    decks.addDeck(new TermStorage(accounting, "accounting", { is_active: layer_2 }));


    const { interview } = require('./interview');
    decks.addDeck(new TermStorage(interview, "interview", { is_active: layer_3 }));

    const { pytorch_machine_learning_course, machine_learning_pandas_visualization, machine_learning_scikit_learn } = require('./ai_machine');
    decks.addDeck(new TermStorage(pytorch_machine_learning_course, "pytorch machine learning course", { is_active: layer_1 }));
    decks.addDeck(new TermStorage(machine_learning_pandas_visualization, "machine learning pandas", { is_active: layer_1 }));
    decks.addDeck(new TermStorage(machine_learning_scikit_learn, "machine learning scikit learn", { is_active: layer_1 }));

    const { designing_good_charts, sql } = require('./data-science');
    decks.addDeck(new TermStorage(designing_good_charts, "designing good charts", { is_active: layer_1 }));
    decks.addDeck(new TermStorage(sql, "sql", { is_active: layer_1 }));

    const { aws_certification_associate_developer } = require('./aws_certifications');
    decks.addDeck(new TermStorage(aws_certification_associate_developer, "aws associate dev", { is_active: layer_2 }));


    // decks.addDeck(new TermStorage(test, "test", {is_active: true}));
    const { salesforce_experience } = require('./salesforce_certification');
    decks.addDeck(new TermStorage(salesforce_experience, "salesforce experience", { is_active: layer_2 }));

    const { python, swift, js, dart, php, java, csharp, cpp } = require('./languages');
    decks.addDeck(new TermStorage(python, "python", { is_active: projects }));
    decks.addDeck(new TermStorage(swift, "swift", { is_active: projects }));
    decks.addDeck(new TermStorage(js, "js", { is_active: projects }));
    decks.addDeck(new TermStorage(dart, "dart", { is_active: projects }));
    decks.addDeck(new TermStorage(php, "php", { is_active: projects }));
    decks.addDeck(new TermStorage(java, "java", { is_active: projects }));
    decks.addDeck(new TermStorage(csharp, "csharp", { is_active: projects }));
    decks.addDeck(new TermStorage(cpp, "cpp", { is_active: projects }));

    return decks;
}

const termJson = [];

module.exports = { termJson, populateMasterDeck };