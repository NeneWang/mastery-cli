const chalk = require('chalk');
const axios = require('axios');
const clipboard = require('copy-paste')

// const {clipboard}
// import clipboard from 'clipboardy';

const chart = require('@wangnene2/chart')
const { exec, spawn } = require('node:child_process');
const { Toggle, Confirm, prompt, AutoComplete, Survey, Input } = require('enquirer');

const init = require('./init');
const constants = require('./constants');

const { bar, scatter, bg, fg, annotation } = chart;
const Parser = require('expr-eval').Parser;
const parser = new Parser();

const { MAID_NAME, getAbsoluteUri, getRandomMaidEmoji, appendQuotes, APIDICT, CONSTANTS, get_random, formatObjectFeatures, countDecimals } = constants;
const { show_image } = require('./utils_functions')
// const DEBUG = true
const DEBUG = false

class Quizzer {

    constructor(qmathformulas, qmathenabled, terms = [], alsoAskTerms = true) {
        // TODO: Implement TermStorage Support from the getgo.
        this.terms = terms;
        // this.enabledqmathformulas = qmathenabled.map(formula_name => { qmathformulas[formula_name].formula_name = formula_name; return qmathformulas[formula_name] });
        // this.enabledqmathformulas = qmathenabled.map(form => form.formula_name);
        this.enabledqmathformulas = qmathenabled;
    }


    /**
     * Picks a random question from the enabled list
     * NOTE It requires the potential questions to have formula_name as the slug
     * OUT: 
     * - {form, replace}
     */
    getYoungest = async (potential_questions) => {

        try {

            const problem_names = potential_questions.map(x => x.formula_name)
            // const dataToPost = ["string", "test", "new1", "New", "random", "received" ];
            if (DEBUG) console.log("problem_names", problem_names)
            const res = await axios.post(`${APIDICT.DEPLOYED_MAID}/concept_metadata/youngests/`, problem_names);
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
            console.warn(e)
        }
        return potential_questions;
    }

    pick_math_question = async () => {

        let potential_questions = this.enabledqmathformulas;
        potential_questions = await this.getYoungest(potential_questions);
        // if (DEBUG) console.log("potential_questions", potential_questions);
        return await get_random(potential_questions);
    }

    pick_term_question = async () => {
        if (DEBUG) console.log("Picking terms from:", this.terms)
        let potential_questions = this.terms
        /**
         *  Terms Structure:
            {
                term: 'Singleton Pattern',
                example: '',
                description: '',
                references: '',
                category: '',
                prompt: 'Use the term',
                formula_name: 'singleton-pattern'
            }
         */
        potential_questions = await this.getYoungest(potential_questions)

        // if (DEBUG) console.log("Left with", potential_questions)

        return get_random(potential_questions);
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
            ATLEAST = 100;
            return constants.getRandomInt(1000 - ATLEAST) + ATLEAST;
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
    async ask_question() {
        // Replace with Chance
        // if (DEBUG) console.log("Asking terms", this.terms)
        // const askMath = true;
        const askMath = constants.getRandomBool();
        if (askMath) {
            await this.ask_math_question()
        } else {
            await this.pick_and_ask_term_question()
        }
    };

    // Returns the term deck name (key), in which is stored the term's deck.
    async pick_terms_deck(){
        return ""
    }

    
	study_session = async () => {
		//Pick a term deck

        //Populates with the right terms deck using the queue


        //While Loop asking based on the queue
	}

    async pick_and_ask_term_question() {
        // Fetches a random term form with the youngest one, unless there is no internet

        const term_selected = await this.pick_term_question();
        if (DEBUG) console.log("term_selected", term_selected);
        await this.ask_term_question(term_selected);

    }

    async ask_term_question(term_selected) {
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
             */
            console.log(`${chalk.hex(CONSTANTS.CUTEBLUE).inverse(` ${term_selected.term} `)}|${chalk.hex(CONSTANTS.PUNCHPINK).inverse(` ${term_selected.category} `)}`);

            if (term_selected?.attachment ?? false) {
                let image_file = getAbsoluteUri(term_selected?.attachment);
                console.log(`attachment: ${image_file}`);
                // Also print the attachment image if possible
                const _ = await show_image(term_selected?.attachment, { is_url: term_selected.attachment_is_url });
            }

            console.log(`${term_selected.description}\n`)
            const question = new Input({
                name: 'Term Question',
                message: `${term_selected.prompt} (Ignore with "no")\n`,
            });

            const user_res = await question.run();
            if (user_res === "no" || user_res === "") {
                this.printExample(term_selected) //You want to print the example as if it didn't know the answer for the next time.
                return false;
            }
            this.postCommentFromTerm(term_selected, user_res, true);
            const _ = await increasePerformance("terms");
            // TODO Increase the value of the concept
            const ISANSWERCORRECT = true
            const __ = await updateConcept(term_selected.formula_name, ISANSWERCORRECT);

            // Print the correct example term if exists
            this.printExample(term_selected)

            /**
             * date: submission answer
             * date: submission answer
             * ....
             */
            await this.printPreviousTerms(term_selected.formula_name)


            return true
        } catch (err) {
            console.log("term_selected", term_selected)
            console.warn(err)
        }
    }


    /**
     * Prints the example of the term_selected (if available)
     * @param {TermStructure} term_selected: Term selected from the 
     */
    printExample = async (term_selected) => {
        if (term_selected?.example ?? false) {
            console.log(`${chalk.hex(CONSTANTS.CUTEBLUE).inverse('Correct Example: ')} ${term_selected.example}`);
        }
    }

    /**
     * Print from the term used
     * @param term :str # Term (slug) used e.g. singleton-pattern
     */
    printPreviousTerms = async (term) => {


        const res = await axios.get(`${APIDICT.DEPLOYED_MAID}/comment/term/${term}?format_simple=true&limit=5`, {
            headers: {
                'Accept-Encoding': 'application/json'
            }
        });

        for (const row in res.data) {
            const obj = res.data[row]
            console.log(`${chalk.hex(CONSTANTS.CUTEBLUE).inverse(`${Object.keys(obj)?.[0]} ` ?? "date")} ${Object.values(obj)?.[0] ?? "1"}`);
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
                'account_id': CONSTANTS.ACCOUNT_ID ?? 1, //1
                'body': user_res ?? "",
                'title': term_selected.term ?? "title",
                'concept_slug': term_selected.formula_name ?? "slug"
            }

            axios({
                method: 'post',
                url: `${APIDICT.DEPLOYED_MAID}/comment`,
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

    async ask_math_question() {

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

                if (res == question_prompt.expectedAnswer) {
                    answerIsCorrect = true;
                    const _ = await increasePerformance("math_ss");
                    // if (DEBUG) console.log("Success at:", question_prompt)
                    console.log("correct!");
                    break;
                }

            }
            const _ = await updateConcept(question_form.formula_name, answerIsCorrect);

            console.log("expected Answer:", question_prompt.expectedAnswer, ", Prompt:", question_prompt.question_prompt, ", \n Formula:", question_prompt.form);

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