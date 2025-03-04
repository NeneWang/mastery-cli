const { Quizzer } = require('./Quizzer');
const { Mastery: Maid, increasePerformance } = require('./utils');
const constants = require('./constants');
const DSATrainer = require('./dsa-cli/dsa-trainer');
const DEBUG = false;
const { cloze_problems_list } = require('./dsa-cli/cloze');
const DSAConstants = require('./dsa-cli/constants');
// const { getProblemsData, getRandomProblem, copyFileToTemp } = require('./data-science-cli/index');

const { TermScheduler } = require('./termScheduler');
const settings = require('./settings');
const utils = require('terminal-charter/lib/utils');
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




    cloze_study_session = async ({ reset_scheduler = false }) => {

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
            const solution_metadata = await this.dsaTrainer.solveProblem(problem, { base: DSAConstants.PATHS.base_cloze, populate_with_cloze_filepath: card.file_path });

            const answerIsCorrect = solution_metadata.status == DSAConstants.ProblemStatus.solved;
            clozeScheduler.solveCard(answerIsCorrect);
            await clozeScheduler.saveCards();
            printCardsLeft(cardsLeft, cardsLearnt);
        }
    }

    algorithm_mastery_session = async ({problems_count = 5} = {}) =>{
        /**
         * Takes 10 problems, asks, in a queue until they are completed.
         */

        await this.dsaTrainer.loaded_problem_manager;
        const problems = this.dsaTrainer.problems_manager.getProblems({count: problems_count});

        
        const getRandomsFromArray = (arr, k) => {
            let shuffled = arr.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, k);
        }

        // select 10 problems
        const selected_problems = getRandomsFromArray(problems, problems_count);

        const amsesScheduler = new TermScheduler({
            cards_category: "amses_session"
        });
        const mapped_problems = selected_problems.map(problem => {
            return {
                problem_slug: problem.slug,
                file_path: problem.file_path
            }
        });
        await amsesScheduler.setLearningCards(mapped_problems, { shuffle: true, reset_scheduler: false });
        let exit = false;

        const printCardsLeft = (cardsLeft, cardsLearnt) => {
            const total_problems = selected_problems.length;
            const table = {
                "Problems left": cardsLeft,
                "Problems completed": cardsLearnt,
                "Total problems": total_problems
            }
            console.table(table);
        }

        while (!amsesScheduler.is_completed && !exit) {
            const [cardsLeft, cardsLearnt] = [amsesScheduler.getCardsToLearn(), amsesScheduler.getCardsLearnt()];

            const card = await amsesScheduler.getCard();
            let problem = this.dsaTrainer.problems_manager.getProblem(card.problem_slug);

            const solution_metadata = await this.dsaTrainer.solveProblem(problem);

            const answerIsCorrect = solution_metadata.status == DSAConstants.ProblemStatus.solved;
            amsesScheduler.solveCard(answerIsCorrect);
            await amsesScheduler.saveCards();
            printCardsLeft(cardsLeft, cardsLearnt);
        }



    }

    




    // jupyter_study_session = async () => {

    //     // Pick all the available string keys.

    //     const jupyter_problems = getProblemsData();
    //     const jupyterScheduler = new TermScheduler({
    //         cards_category: "Jupyter"
    //     });
    //     await jupyterScheduler.setLearningCards(jupyter_problems);
    //     let exit = false;

    //     const printCardsLeft = (cardsLeft, cardsLearnt) => {
    //         console.log(`\nJupyter left: ${cardsLeft} || Jupyter completed: ${cardsLearnt}\n`);
    //     }

    //     let maid = new Maid();
    //     maid.runServer();

    //     while (!jupyterScheduler.is_completed && !exit) {
    //         const [cardsLeft, cardsLearnt] = [jupyterScheduler.getCardsToLearn(), jupyterScheduler.getCardsLearnt()];

    //         const card = await jupyterScheduler.getCard();

    //         console.log("Card", card.problem);
    //         const answerIsCorrect = await maid.openJupyter({ FILE: card.problem });

    //         jupyterScheduler.solveCard(answerIsCorrect);
    //         await jupyterScheduler.saveCards();
    //         printCardsLeft(cardsLeft, cardsLearnt);
    //     }

    // }

}

module.exports = { QuizzerWithDSA };