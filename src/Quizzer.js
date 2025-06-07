const chalk = require('chalk');
const axios = require('axios');
const Settings = require('./settings');



const { Toggle, Confirm, prompt, AutoComplete, Survey, Input, multiselect } = require('enquirer');

const constants = require('./constants');
const Parser = require('expr-eval').Parser;

const { getAbsoluteUri, APIDICT, CONSTANTS, get_random, countDecimals, get_random_of_size } = constants;
const { user_requests_exit, user_requests_skip, user_requests_calc, printMarked, openEditorPlatformAgnostic } = require('./utils_functions');

const {
    parseMarkdownCards,
    parseMarkdownIntoDeck,
    parseMarkdownCardsFromFolder,
    parseMarkdownCardsFromTermsModules,
    retrieve_terms_modules,
    retrieve_terms_as_decks
} = require('./md_terms_parser');

const { TermScheduler } = require('./termScheduler');
const { MiniTermScheduler } = require('./MiniTermScheduler');
const { StorableQueue } = require('./StorableQueue');



// const DEBUG = true
const DEBUG = false

class Quizzer {

    constructor(qmathformulas, qmathenabled, masterDeck, masteryManager) {

        const terms = []
        terms.push(...masterDeck.listTerms());
        this.masterDeck = masterDeck;
        this.terms = terms;
        this.enabledqmathformulas = qmathenabled;
        this.masteryManager = masteryManager;
    }


    /**
     * Picks a random question from the enabled list
     * NOTE It requires the potential questions to have formula_name as the slug
     * @param {string} potential_questions
     * @param {int} limit | Optional
     * OUT: 
     * - {form, replace}
     */
    getYoungest = async (potential_questions, { limit = 3, account_id = Settings.account_id ?? 1, debug = false, randomOffline = false } = {}) => {

        if (randomOffline) {
            return get_random_of_size(potential_questions, { count: limit });
        }

        try {
            // Filter only if they have formula_name property
            potential_questions = potential_questions.filter(x => x?.formula_name != undefined)
            const problem_names = potential_questions.map(x => x.formula_name)
            // Filter only if they have formula_name property again?


            if (DEBUG) console.log("problem_names", problem_names)
            const res = await axios.post(`${APIDICT.DEPLOYED_MAIDAPI}/concept_metadata/youngests/?account_id=${account_id}&limit=${limit}`, problem_names);
            const response_data = res.data;
            // if (DEBUG) console.log(response_data)
            // if (DEBUG) console.log("response_data", response_data);
            // let potential_questions = potential_questions.filter(formula_name)

            // Filter where they have those.
            // if (DEBUG) console.log("Response Potentail and response", potential_questions, response_data)
            potential_questions = potential_questions.filter(question => response_data.indexOf(question.formula_name) !== -1)
            if (DEBUG) console.log("Response filtered", potential_questions)
            // return get_random(potential_questions);

        } catch (e) {
            // Such as no internet connection
            if (debug) console.warn('Error at getting Youngest')

            Settings.online = false; //Lets mark it as such case for this call.

            // get random 3 list of 3 problems
            potential_questions = get_random_of_size(potential_questions, { count: limit });
        }
        return potential_questions;
    }

    /**
     * Picks a math question from the list of math questions in this Quizzer. 
     * 1-15-2021: It will just shuffle the list and pick the first one. No internet required. This is done to accelerate the process.
     * @returns {QuestionStructure} question_selected
     */
    pick_math_question = async () => {

        let potential_questions = this.enabledqmathformulas;
        potential_questions = await this.getYoungest(potential_questions, { randomOffline: true });
        // if (DEBUG) console.log("potential_questions", potential_questions);
        return await get_random(potential_questions);
    }

    /**
     * Picks a term from the list of terms in this Quizzer
     *  *  Terms Structure:
            {
                term: 'Singleton Pattern',
                example: '',
                description: '',
                references: '',
                category: '',
                prompt: 'Use the term',
                formula_name: 'singleton-pattern'
            }
     * @returns {TermStructure} term_selected
     */
    pick_term_question = async () => {
        if (DEBUG) console.log("Picking terms from:", this.terms)
        let potential_questions = this.terms;
        potential_questions = await this.getYoungest(potential_questions, { randomOffline: true })

        return get_random(potential_questions);
    }

    /**
     * Runs terms questions until the terms are done.
     * @param {boolean} debug the debug flag
     * @param {function} exitMethod the exit method
     * @returns {int} attempts: The amount of attempts made to learn the terms.
     */
    forceLearnTermQuestions = async ({ debug = false, exitMethod = () => { } } = {}) => {
        let potential_questions = this.terms;

        potential_questions = await this.getYoungest(potential_questions, { limit: 2, randomOffline: true });
        if (debug) console.log("potential_questions", potential_questions);
        if (debug) console.log("length", potential_questions.length);
        let attempts = 0;
        let attempts_timestamps = [];

        let exit_force_method = false;

        // Long term memory. using named: lgterm_forced_terms
        const lgtermScheduler = new StorableQueue({ name: "lgterm_forced_terms" });
        // Try loading.
        await lgtermScheduler.load();


        // Create miniqueue
        // If there is more than one scheduler elements add the first one it to the mini queue's potential_questions
        if (lgtermScheduler.length > 0) {

            // If larger than three assign the last three in the queue.
            if (lgtermScheduler.length >= 3) {
                const lastThree = lgtermScheduler.elements.slice(-3);
                // Remove the last three from the queue
                lgtermScheduler.elements = lgtermScheduler.elements.slice(0, -3);
                potential_questions = lastThree;

            } else {
                const firstElement = lgtermScheduler.dequeue();
                potential_questions.push(firstElement);
            }
            await lgtermScheduler.save();

        }



        const total_cards = potential_questions.length;


        const miniTermScheduler = new MiniTermScheduler(potential_questions);
        const wrappedExitMethod = () => {
            exitMethod();
            exit_force_method = true;
        }


        while (miniTermScheduler.cardsCount != 0 && !exit_force_method) {
            // Print the statistics
            console.log(`queue: ${miniTermScheduler.cardsCount}/${total_cards}`);
            const card = miniTermScheduler.getCard();
            // console.log("card", card);
            const response = await this.ask_term_question(card, { exitMethod: wrappedExitMethod });
            if (response == true) {
                // increase the terms

            } else {
                if (!lgtermScheduler.has(card)) {
                    // Add to the long term memory only if it was never added yet.
                    lgtermScheduler.enqueue(card);
                    await lgtermScheduler.save();
                }
            }
            attempts += 1;
            attempts_timestamps.push(new Date());

            miniTermScheduler.solveCard(response);
        }

        return attempts;
    }


    /**
     * PopulateVariables using naming e.g. d_1 => digit
     * @param {List[str]} replace : List of Strings
     * @Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
     */
    populateVariables(replace) {

        const variables = {}
        const variable_regex = /(\w+)_(\d)/;
        // if (DEBUG) console.log('replace', replace);
        for (const var_name of replace) {
            // if (DEBUG) console.log('var_name', var_name);
            const variabledetected = var_name.match(variable_regex);
            variables[var_name] = this.getRandomFromType(variabledetected[1]);
        }

        // if (DEBUG) console.log("populated variables", variables);
        return variables;
    }

    /**
     * Depending on the random type, it will return a random number from different ranges:
     * - d: 2- 100
     * - sd: 2-20
     * - md: 2-50
     * - ld: 2-10000
     * 
     * @param {Enumerator: String} type "d | sd | md | ld"
     * @returns 
     */
    getRandomFromType(type) {
        const ETypes = {};
        let ATLEAST = 2;
        // if (DEBUG) console.log("getRandom from type called", constants.getRandomInt(100), "using type:", type, type=="d");
        if (type == "d") {
            return constants.getRandomInt(100 - ATLEAST) + ATLEAST;
        } else if (type == "sd") {
            return constants.getRandomInt(20 - ATLEAST) + ATLEAST;
        }
        else if (type == "md") {
            return constants.getRandomInt(50 - ATLEAST) + ATLEAST;
        }
        else if (type == "ld") {

            // 1000-10000
            return constants.getRandomInt(10000 - ATLEAST) + ATLEAST;
        }
    }


    /**
     * Compiles chosen form using form and replace
     * IN:
     * {form, replace}
     * OUT:
     * - {  question_prompt (with replace replaced with numbers) , expectedAnswer}
     */
    compile_question(question) {
        // if (DEBUG) console.log("Compile question received", question)
        const form = question?.form;
        const replace = question?.replace ?? [];
        const calculates = question?.calculates ?? 'y';
        const human_form = question?.human;

        // if (DEBUG) console.log("question", question)
        const variables = this.populateVariables(replace);
        var parser = new Parser();
        const humanQuestion = this.getHumanQuestion(form, variables, calculates, human_form);
        parser.evaluate(form, variables);
        if (DEBUG) console.log("variables", variables)


        // if (DEBUG) console.log("question.form", question.form);
        return { "question_prompt": humanQuestion, "expectedAnswer": variables?.[calculates], "form:": question.form };
    };

    /**
     * Replaces the string in format of %d with a random number
     * @param {string} formString the string to replace variables in
     * @param {dict} variables Variables that will be replaced in the formString
     * @returns {string} formString with variables replaced
     */
    replaceStringVariables(formString, variables) {
        for (const variablename of Object.keys(variables)) {
            formString = formString.replace(variablename, variables[variablename]);
        }
        return formString;
    }

    getHumanQuestion(form, variables, solveFor, human_form = "") {
        let question_message = ""
        if (human_form != "") {
            question_message = this.replaceStringVariables(human_form, variables);


        } else {

            const question = this.replaceStringVariables(form, variables);
            const variablesToSolveFor = solveFor.join(" ");
            question_message = `solve for ${variablesToSolveFor}, using ${question}`;
        }

        return question_message;

    }

    /**
     * Asks question and waits for response, allows repetition.
     */
    async askQuestion({ ask_until_one_is_correct = true, } = {}) {
        // Replace with Chance
        // if (DEBUG) console.log("Asking terms", this.terms)
        // const askMath = true;
        let exit = false;
        const exitMethod = () => {
            if (DEBUG) console.log("Exit method requested");
            exit = true;
            return false;
        };


        const askQuestionRandom = async ({ exitMethod = () => { }, force_mode = true } = {}) => {
            let questionTypes = ['math', 'term'];
            if (Settings?.quiz_enabled) {
                questionTypes = Settings.quiz_enabled;
            }

            const questionType = questionTypes[constants.getRandomInt(questionTypes.length)];

            switch (questionType) {
                case "math":
                    return await this.ask_math_question({ exitMethod: exitMethod });
                case "term":
                    return await this.forceLearnTermQuestions({ exitMethod: exitMethod });

                default:
                    return await this.ask_math_question({ exitMethod: exitMethod });
            }

        };
        let answerIsCorrect = false;
        if (ask_until_one_is_correct)
            while (!answerIsCorrect && !exit) {
                answerIsCorrect = await askQuestionRandom({ exitMethod: exitMethod });
            }
        else {
            const _ = askQuestionRandom();
        }
        return true


    };

    // Returns the term deck name (key), in which is stored the term's deck.
    async pick_terms_deck() {
        return ""
    }


    study_session = async (masterDeck = this.masterDeck) => {
        //Pick a term deck Suppose is given

        // For now just load a new one everytime.
        const termsModules = retrieve_terms_as_decks();
        for (const key of Object.keys(termsModules)) {
            masterDeck.addDeck(termsModules[key]);
        }
        const dictOptions = masterDeck.deck_titles_with_count;

        const allTermsModules = { ...dictOptions, ...termsModules };
        let titles = [...Object.keys(dictOptions),];

        // Sort by count(from dict Options)
        titles.sort((a, b) => allTermsModules[b].count - allTermsModules[a].count);

        const ms_deck = new AutoComplete({
            name: 'StudyOption',
            message: 'Choose deck to study',
            choices: titles
        });



        let deck_selected_key = await ms_deck.run();

        let deck_selected = allTermsModules[deck_selected_key].name;

        const selected_terms = masterDeck.listTerms({ get_only: [deck_selected] });

        const studyScheduler = new TermScheduler({ cards_category: deck_selected });

        await studyScheduler.setLearningCards(selected_terms); // Populate the right cards.
        // console.log(studyScheduler.learning_queue);
        let exit = false;


        /**
         * Method called when a problem is unmounted, to be used to print the amount of cards left.
         */
        const printCardsLeft = (cardsLeft, cardsLearnt) => {
            console.log(`\nCards left: ${cardsLeft} || Cards completed: ${cardsLearnt}\n`);
        }

        const exitMethod = () => {
            exit = true;
            return false; //So it escapes the loop in case of perpetual until one is right
        }

        while (!studyScheduler.is_completed && !exit) {
            // Continue asking questions.

            const showProgress = (cardsLeft, cardsCompleted, learning, working) => {
                console.log(`Cards left: ${cardsLeft} || Cards completed: ${cardsCompleted} || learning ${learning} || workingset: ${working}`);
            }
            if (DEBUG) showProgress(studyScheduler.getCardsToLearn(), studyScheduler.getCardsLearnt(), studyScheduler.learning_queue.length, studyScheduler.working_set.length);
            const card_to_ask = studyScheduler.getCard();



            // Somewhere here the duplication error occurs.

            const answered_correctly = await this.ask_term_question(card_to_ask, { exitMethod: exitMethod });
            // To here

            studyScheduler.solveCard(answered_correctly);
            await studyScheduler.saveCards();

            printCardsLeft(studyScheduler.getCardsToLearn(), studyScheduler.getCardsLearnt());

            // console.log("solveCard");
            // showProgress(studyScheduler.getCardsToLearn(), studyScheduler.getCardsLearnt());


        }
    }


    /**
     * 
     * @param {method} param0 
     * @returns 
     */
    async pick_and_ask_term_question({ exitMethod = () => { } } = {}) {
        // Fetches a random term form with the youngest one, unless there is no internet

        const term_selected = await this.pick_term_question();
        if (DEBUG) console.log("term_selected", term_selected);
        return await this.ask_term_question(term_selected, { exitMethod: exitMethod });

    }

    async ask_term_question(term_selected, { ask_if_correct = true, exitMethod = () => { } } = {}) {
        try {
            // Start running the question_attempt
            /**
             *  Term Structure
                {
                    term: 'Singleton Pattern',
                    example: '',
                    description: '',
                    references: '',
                    category: '',
                    prompt: 'Use the term',
                    formula_name: 'singleton-pattern'
                }
                
                2024-02-01 13:23:13
                - Remove updateConcept no increase is required
             */

            //If both the term and the description are "" or have no length or are null then assume is a bad term.
            const isInvalidData = (data) => {
                if (!data?.length ?? 0) return true;
                if (data == undefined || data == null) return true;
                if (data === "") return true;

                return false;
            }

            if (isInvalidData(term_selected.term) && isInvalidData(term_selected.description)) {
                // Bad data for term testing
                throw ("isInvalidData: term_selected:", term_selected);
            }

            const isOfflineMessage = Settings?.online ? "" : `|${chalk.hex(CONSTANTS.CUTEYELLOW).inverse(' offline ')}`
            // console.log(term_selected);
            // console.trace()
            if (term_selected?.reference_page ?? false) {
                if ((term_selected?.reference_line ?? false) && term_selected.reference_line > 0) {
                    console.log(`${term_selected?.reference_page}#${term_selected?.reference_line}`);
                } else {
                    console.log(`${term_selected?.reference_page}`);

                }
            }
            console.log(`${chalk.hex(CONSTANTS.CUTEBLUE).inverse(` ${term_selected.term} `)}|${chalk.hex(CONSTANTS.PUNCHPINK).inverse(` ${term_selected.category} `)}${isOfflineMessage}`);

            if (term_selected?.attachment ?? false) {
                let image_file = getAbsoluteUri(term_selected?.attachment);
                console.log(`attachment: ${image_file}`);
            }



            printMarked(term_selected?.description ?? "", { use_markdown: true });



            const question = new Input({
                name: 'Term Question',
                message: `${term_selected.prompt} (Ignore with "no")\n`,
            });

            const user_res = await question.run();

            // Check for escape methods

            if (user_requests_calc(user_res)) {
                openEditorPlatformAgnostic('node')
                // Make the user lose one point for using the calculator.
                return false;
            }

            if (user_requests_exit(user_res)) {
                exitMethod();
                return false;
            }

            if (user_requests_skip(user_res)) {
                this.printExample(term_selected) //You want to print the example as if it didn't know the answer for the next time.
                return false;
            }


            let ISANSWERCORRECT = true
            // Print the correct example term if exists



            // if ask_if_correct is true then ask if it is corerect and update after showing examples
            printMarked(term_selected?.example ?? "", { use_markdown: true });

            if (ask_if_correct) {
                const is_correct = new Confirm(
                    {
                        name: 'is_correct',
                        message: "Is the response correct?",
                        initial: true
                    });
                const response = await is_correct.run();
                ISANSWERCORRECT = response;

                if (is_correct) {

                    const _ = await this.masteryManager.logSkillExperience(term_selected.category, {
                        score: ISANSWERCORRECT ? 1 : 0,
                        deck_id: term_selected.category,
                        deck_term: term_selected.term,
                        comment: user_res,
                        increased_performance: true,
                        performance_feature: 'term'
                    }
                    );

                }
            }


            return ISANSWERCORRECT
        } catch (err) {
            if (Settings?.dev_mode) {
                console.log("Failed at: ask_term_question |  term_selected", term_selected)
                console.log(err)

            }
            return false; // if in a session, this will skip the card because this is improperly made.
        }


    }


    /**
     * Prints the example of the term_selected (if available)
     * @param {TermStructure} term_selected: Term selected from the 
     */
    printExample = async (term_selected) => {
        if (term_selected?.example ?? false) {
            console.log(`${chalk.hex(CONSTANTS.CUTEBLUE).inverse('Correct Example: ')}`);
            printMarked(term_selected?.example ?? "", { use_markdown: true });
        }
    }

    /**
     * Print from the term used
     * @param term :str # Term (slug) used e.g. singleton-pattern
     */
    printPreviousTerms = async (term) => {
        const URL = `${APIDICT.DEPLOYED_MAIDAPI}/comment/term/${term}?format_simple=true&limit=5`;
        try {

            const res = await axios.get(URL, {
                headers: {
                    'Accept-Encoding': 'application/json'
                }
            });

            for (const row in res.data) {
                const obj = res.data[row]
                console.log(`${chalk.hex(CONSTANTS.CUTEBLUE).inverse(`${Object.keys(obj)?.[0]} ` ?? "date")} ${Object.values(obj)?.[0] ?? "1"}`);
            }
        } catch {
            console.log(`Error attempting to fetch from ${URL}`);
            console.log('Called for previous term at', URL)
        }

    }

    /**
     * Based on a term and response written by the user it should post things in the comments based on that.
        * @param {Term Structure} term_selected: The term which response was answered
        * @param {str} user_res: Response answered by the user on the terminal
        * @param {bool} debug ?= False : If to whether to debug api responses, etc.
     */
    async postCommentFromTerm(term_selected, user_res, debug = false) {
        /**Expected Body Structure: for `https://jmmgskxdgn.us-east-1.awsapprunner.com/comment`
         * {
            "account_id": 0,
            "body": "string",
            "title": "string",
            "concept_slug": "string"
            }
         */
        try {

            const data = {
                'account_id': Settings.account_id ?? 1, //1
                'body': user_res ?? "",
                'title': term_selected.term ?? "title",
                'concept_slug': term_selected.formula_name ?? "slug"
            }

            axios({
                method: 'post',
                url: `${APIDICT.DEPLOYED_MAIDAPI}/comment`,
                headers: {},
                data: data
            });

        } catch (err) {
            if (DEBUG) console.log("Probably no connection, comment has not been made")
            if (debug) {
                console.log(err)
            }
        }

    }

    async ask_math_question({ exitMethod = () => { } } = {}) {


        const question_form = await this.pick_math_question();
        try {
            if (DEBUG) console.log('question_form', question_form)
            const ans_constraint = question_form?.ans_constraint;
            let question_prompt = {};
            if (ans_constraint == undefined) {
                // Because we dont need to verify the constraints,

                question_prompt = this.compile_question(question_form);
                if (DEBUG) console.log("ask question question_prompt", question_prompt);
            } else {
                question_prompt = this.compile_valid_question(question_form, ans_constraint);
                if (DEBUG) console.log("ask question else", question_prompt);
            }


            const quiz_allow_reattempts = 3;
            let answerIsCorrect = false;

            for (let i = 0; i < quiz_allow_reattempts; i++) {
                // if (DEBUG) console.log(question_prompt.humanQuestion);

                const question = new Input({
                    name: 'ServiceOption' + i,
                    message: `${question_prompt.question_prompt} attempt: ${i}`,
                })

                const res = await question.run()

                // Escape if user wants to exit
                if (user_requests_exit(res)) {
                    exitMethod();
                    return false;
                }


                if (user_requests_calc(res)) {
                    const { exec } = require('child_process');
                    // exec(`start node`);
                    openEditorPlatformAgnostic('node');
                    i -= 1;
                    continue;
                }

                if (res == question_prompt.expectedAnswer) {
                    answerIsCorrect = true;
                    console.log("correct!");
                    break;
                }

            }

            if (Settings?.online) {

                const _ = await updateConcept(question_form.formula_name, answerIsCorrect);
            }

            if (DEBUG) console.log("expected Answer:", question_prompt.expectedAnswer, ", Prompt:", question_prompt.question_prompt, ", \n Formula:", question_prompt.form);

            return answerIsCorrect;
        } catch (err) {
            console.warn(err, "With question: ", question_form);
            return false;
        }
    }

    /**
     * If constraints avaialable, continue compiling the questions until it is appropriate with that contraints
     * @param: constraint: str
     * e.g: Gets '-.2' -> Negative Only
     * .2 -> with two decimals
     * +.0 -> Positive Integer 
     */
    compile_valid_question(question_form, constraint) {
        // Basically loops until a a result fullfillls the specified constraint.

        const format_reg = /(\W?).(\d)/;
        const format_parsed = constraint.match(format_reg);
        const decimals_allowed = format_parsed[2];
        let foundProper = false;
        let questionPrompt = {};
        while (!foundProper) {
            questionPrompt = this.compile_question(question_form);
            const expectedAnswer = questionPrompt.expectedAnswer;
            const decimalCounts = countDecimals(expectedAnswer);

            // if (DEBUG) console.log(`${expectedAnswer} count is ${decimalCounts}`);
            if (decimals_allowed == 9) {
                foundProper = true;
            } else if (decimals_allowed >= decimalCounts) {
                foundProper = true;

            } else {
                ;
                // if (DEBUG) console.log(`${expectedAnswer} is not proper, retrying...`);
            }
        }
        questionPrompt.form = question_form.form;
        return questionPrompt;


    }

}


module.exports = { Quizzer }