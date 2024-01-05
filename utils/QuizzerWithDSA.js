const { Quizzer } = require('./Quizzer');
const constants = require('./constants');
const DSATrainer = require('./dsa-cli/dsa-trainer');
const DEBUG = false;
/**
 * This class also supports DSATrainer Implementation.
 */
class QuizzerWithDSA extends Quizzer {
    constructor(questions, enabled, masterDeck) {
        super(questions, enabled, masterDeck);
        this.dsaTrainer = new DSATrainer({
            skip_problems: ["hello-world", "simple-sum"]
        });
    }

    async askQuestion({ ask_until_one_is_correct = true, disable_math = false, disable_dsa = false } = {}) {
        let exit = false;
        const problem_types = ['math', 'term', 'cloze-algo'];

        const exitMethod = () => {
            if (DEBUG) console.log("Exit method requested");
            exit = true;
            return false;
        };

        /**
         * Returns true if answer is correct, false otherwise using a random question method.
         * @param {emthod} exitMethod 
         * @returns {boolean} true if answer is correct, false otherwise
         */
        const askQuestionRandom = async ({ exitMethod = () => { }, force_mode = true } = {}) => {
            let problem_type_selected = constants.get_random(problem_types);
            
            if (disable_math && problem_type_selected === 'math') {
                problem_type_selected = 'term';
            }

            if (disable_dsa && problem_type_selected === 'cloze-algo') {
                problem_type_selected = 'term';
            }

            switch (problem_type_selected) {
                case 'math':
                    return await this.ask_math_question({ exitMethod: exitMethod });

                case 'term':
                    if (force_mode) {
                        return await this.forceLearnMode({ exitMethod: exitMethod });
                    }
                    return await this.pick_and_ask_term_question({ exitMethod: exitMethod });

                case 'algorithm':
                    // Wont be called for now
                    return await this.ask_algorithm_question({ exitMethod: exitMethod });

                case 'cloze-algo':
                    return await this.ask_cloze_algorithm_question({ exitMethod: exitMethod });

                default:
                    return false;
            }
        }

        let answerIsCorrect = false;
        if (ask_until_one_is_correct)
            while (!answerIsCorrect && !exit) {
                if (DEBUG) console.log("Answer is correct", answerIsCorrect, "exit", exit);
                answerIsCorrect = await askQuestionRandom({ exitMethod: exitMethod });
            }
        else {
            const _ = askQuestionRandom();
        }

        return true;

    }

    ask_algorithm_question = () => {
        const problem_status = this.dsaTrainer.openRandomProblem();
        return problem_status;
    }

    ask_cloze_algorithm_question = async ({ exitMethod = () => { } } = {}) => {
        // TODO, create an openRandomProblem where it cleans and loads for you.

        const problem_status = this.dsaTrainer.openRandomClozeDSAProblem();
        return problem_status;
    }

}

module.exports = { QuizzerWithDSA };