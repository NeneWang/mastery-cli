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

    async askQuestion({ ask_until_one_is_correct = true, } = {}) {
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
        const askQuestionRandom = async ({ exitMethod = () => { } } = {}) => {
            const problem_type_selected = constants.get_random(problem_types);
            switch (problem_type_selected) {
                case 'math':
                    return await this.ask_math_question({ exitMethod: exitMethod });
                    break;
                case 'term':
                    return await this.pick_and_ask_term_question({ exitMethod: exitMethod });
                    break;
                case 'algorithm':
                    // Wont be called for now
                    return await this.ask_algorithm_question({ exitMethod: exitMethod });
                    break;
                case 'cloze-algo':
                    return await this.ask_cloze_algorithm_question({ exitMethod: exitMethod });
                    break;
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