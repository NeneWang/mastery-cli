const { Quizzer } = require('./Quizzer');
const { Maid } = require('./utils');
const constants = require('./constants');
const DSATrainer = require('./dsa-cli/dsa-trainer');
const DEBUG = false;
const { cloze_problems_list } = require('./dsa-cli/cloze');
const DSAConstants = require('./dsa-cli/constants');
const { getProblemsData, getRandomProblem, copyFileToTemp } = require('./data-science-cli/index');

const { TermScheduler } = require('./termScheduler');
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
                        return await this.forceLearnTermQuestions({ exitMethod: exitMethod });
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


    

    cloze_study_session = async ({reset_scheduler = false}) => {

        // Pick all the available string keys.

        await this.dsaTrainer.loaded_problem_manager;
        const cloze_problems = cloze_problems_list;
        const clozeScheduler = new TermScheduler({
            cards_category: "Algo"
        });
        await clozeScheduler.setLearningCards(cloze_problems, {shuffle: true, reset_scheduler: reset_scheduler});
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
            const solution_metadata = await this.dsaTrainer.solveProblem(problem, { base: DSAConstants.PATHS.base_cloze, populate_with_cloze_filepath: card.file_path });

            const answerIsCorrect = solution_metadata.status == DSAConstants.ProblemStatus.solved;
            clozeScheduler.solveCard(answerIsCorrect);
            await clozeScheduler.saveCards();
            printCardsLeft(cardsLeft, cardsLearnt);
        }
    }

    jupyter_study_session = async () => {

        // Pick all the available string keys.

        const jupyter_problems = getProblemsData();
        const jupyterScheduler = new TermScheduler({
            cards_category: "Jupyter"
        });
        await jupyterScheduler.setLearningCards(jupyter_problems);
        let exit = false;

        const printCardsLeft = (cardsLeft, cardsLearnt) => {
            console.log(`\nJupyter left: ${cardsLeft} || Jupyter completed: ${cardsLearnt}\n`);
        }

        let maid = new Maid();
        maid.runServer();

        while (!jupyterScheduler.is_completed && !exit) {
            const [cardsLeft, cardsLearnt] = [jupyterScheduler.getCardsToLearn(), jupyterScheduler.getCardsLearnt()];

            const card = await jupyterScheduler.getCard();
            
            console.log("Card", card.problem);
            const answerIsCorrect = await maid.openJupyter({FILE: card.problem});

            jupyterScheduler.solveCard(answerIsCorrect);
            await jupyterScheduler.saveCards();
            printCardsLeft(cardsLeft, cardsLearnt);
        }
    
    }

}

module.exports = { QuizzerWithDSA };