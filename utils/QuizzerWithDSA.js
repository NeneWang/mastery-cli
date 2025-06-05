const { Quizzer } = require('./Quizzer');
const { Maid, increasePerformance } = require('./utils');
const constants = require('./constants');
const DSATrainer = require('./extensions/dsa-cli/dsa-trainer');
const DEBUG = false;
const { cloze_problems_list } = require('./extensions/dsa-cli/cloze');
const DSAConstants = require('./extensions/dsa-cli/constants');

const { TermScheduler } = require('./termScheduler');
const settings = require('./settings');
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

    async askQuestion({ ask_until_one_is_correct = true, disable_math = false, disable_dsa = false, increase_performance = true } = {}) {
        let exit = false;
        let problem_types = ['math', 'term'];
        problem_types = settings.quiz_enabled ?? problem_types;

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

            switch (problem_type_selected) {
                case 'math':
                    const math_answered = await this.ask_math_question({ exitMethod: exitMethod });
                    if (math_answered && increase_performance) {

                        increasePerformance('math_ss');

                    }
                    return math_answered;

                case 'term':
                    if (force_mode) {
                        const term_answered = await this.forceLearnTermQuestions({ exitMethod: exitMethod });
                        if (term_answered && increase_performance) {

                            increasePerformance('terms');

                        }
                        return term_answered;
                    } else {

                        const term_answered = await this.pick_and_ask_term_question({ exitMethod: exitMethod });
                        if (term_answered && increase_performance) {

                            increasePerformance('terms');

                        }
                    }

                case 'algorithm':
                    // Wont be called for now
                    const algo_answered = await this.ask_algorithm_question({ exitMethod: exitMethod });
                    if (algo_answered && increase_performance) {
                        increasePerformance('algo_w');
                    }

                    return algo_answered;

                case 'cloze-algo':
                    const cloze_answered = await this.ask_cloze_algorithm_question({ exitMethod: exitMethod });

                    return cloze_answered;

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




    cloze_study_session = async ({ reset_scheduler = false, md_pseudo_mode = false }) => {

        // Pick all the available string keys.

        await this.dsaTrainer.loaded_problem_manager;
        const cloze_problems = cloze_problems_list;
        const clozeScheduler = new TermScheduler({
            cards_category: "Algo"
        });
        await clozeScheduler.setLearningCards(cloze_problems, { shuffle: true, reset_scheduler: reset_scheduler });
        let exit = false;

        const printCardsLeft = (cardsLeft, cardsLearnt) => {
            console.log(`\nAlgorithms left: ${cardsLeft} || Algorithms completed: ${cardsLearnt}\n`);
        }

        while (!clozeScheduler.is_completed && !exit) {
            const [cardsLeft, cardsLearnt] = [clozeScheduler.getCardsToLearn(), clozeScheduler.getCardsLearnt()];

            const card = await clozeScheduler.getCard();
            let problem = this.dsaTrainer.problems_manager.getProblem(card.problem_slug);

            console.log("Card", card);
            problem.is_cloze = true;
            const solution_metadata = await this.dsaTrainer.solveProblem(problem, { base: DSAConstants.PATHS.base_cloze, populate_with_cloze_filepath: card.file_path, md_pseudo_mode: md_pseudo_mode });

            const answerIsCorrect = solution_metadata.status == DSAConstants.ProblemStatus.solved;
            clozeScheduler.solveCard(answerIsCorrect);
            await clozeScheduler.saveCards();
            printCardsLeft(cardsLeft, cardsLearnt);
        }
    }


}

module.exports = { QuizzerWithDSA };