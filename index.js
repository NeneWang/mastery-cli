#!/usr/bin/env node

/**
 * maid-cli
 * Life is a game, and the game is to be the best version of yourself
 *
 * @author Nelson <github.com/neneWang>
 */

const cli = require('./utils/cli');
const log = require('./utils/log');
const utils = require('./utils/utils');
const { increasePerformance } = require('./utils/utils');
const constants = require('./utils/constants');
const demos = require('./utils/demo');
const Settings = require('./utils/settings');
const { populateMasterDeck: populateMasterDeck } = require("./utils/data/terms");
const DSATrainer = require('./utils/dsa-cli/dsa-trainer');
const { QuizzerWithDSA } = require('./utils/QuizzerWithDSA');

const cli_meow = cli[0]
const cmInfo = cli[1]
const flags = cli_meow.flags;
const input = cli_meow.input;

let{ debug } = flags;
debug = debug ?? false;
const { getTalk, Maid } = utils;
const { Demo, EDemo } = demos;


(async () => {
	const maid = new Maid();

	/**This is quite the expensive operation, ideally you put this on the end. */
	const masterDeck = await populateMasterDeck();
	const dsaTrainer = new DSATrainer({
		skip_problems: ["hello-world", "simple-sum"]
	});

	// console.log(terms);
	const mQuizer = new QuizzerWithDSA(constants.qmathformulas, constants.qmathenabled, masterDeck);


	// console.log(getAbsoluteUri("./img/unicorn.png"))
	const options = Object.keys(cmInfo.commands);
	input.includes(options[0]) && cli_meow.showHelp(0);
	debug && log(flags);

	maid.clearOnTalk = true;

	if (input.includes(cmInfo.commands.chart.code)) {
		// Demo for showing charts
		const demo = new Demo;
		demo.chartDemo(EDemo.BAR);
		demo.heatmap();

	}
	else if (input.includes(cmInfo.commands.code.code)) {
		maid.tellCurrentDirectory();
	}

	else if (input.includes(cmInfo.commands.report.code)) {
		maid.dayReport();
	}
	else if (input.includes(cmInfo.commands.talk.code)) {
		let message = await getTalk(flags);
		maid.say(message, true);
	}
	else if (input.includes(cmInfo.commands.coa.code)) {
		let comments_to_populate = [];
		const commit_push_results = utils.commitpush({ comments_to_populate: comments_to_populate });
		maid.populateMissingReport();
		// as until the response is right?
		
		const _ = await mQuizer.askQuestion();
		await maid.provideMissingReport({ run_dsa: true }); // In hopes that it is already populated because ask question shouldbe fairly fast.
		
		// Slight optimization.
		const commit_res = await commit_push_results;
		comments_to_populate = commit_res.comments_to_populate;

		// console.log("Comments to populate:", comments_to_populate.comments_to_populate)
		utils.printComments(comments_to_populate);

		await maid.askToClean();
	}
	else if (input.includes(cmInfo.commands.services.code)) {
		// Gets all services, keeps asking for things here, which service to get
		maid.services();
	}
	else if (input.includes(cmInfo.commands.ask.code)) {
		maid.ask();
	}
	else if (input.includes(cmInfo.commands.update.code)) {
		maid.say("Auto updating sir!")
		utils.autorelease()
	}
	else if (input.includes(cmInfo.commands.math.code)) {
		mQuizer.ask_math_question();
	}
	else if (input.includes(cmInfo.commands.quiz.code)) {
		mQuizer.askQuestion();
	}
	else if (input.includes(cmInfo.commands.term.code)) {
		mQuizer.pick_and_ask_term_question();
	}
	else if (input.includes(cmInfo.commands.clean.code)) {
		maid.askToClean();
	}
	else if (input.includes(cmInfo.commands.prio.code)) {
		maid.tellPriorities();
	}
	else if (input.includes(cmInfo.commands.ses.code)) {
		mQuizer.study_session(masterDeck);
	}
	else if (input.includes(cmInfo.commands.dsa.code)) {
		// const dsa_is_correct = await dsaTrainer.openRandomProblem();

		const updateAlgorithmPerformance = (problem_response) => {
			if (Settings.dev_mode ) console.log("updateAlgorithmPerformance: ", problem_response);

			const dsa_is_correct = problem_response.is_problem_solved;
			if (dsa_is_correct) {
				(async () => {

					const res = await increasePerformance("algo_w", problem_response.score_to_increase);
					const res_2 = await increasePerformance("algo", 1);

				})();

			}
		}

		if (flags.all) {
			console.log("all")
			const problem_response = await dsaTrainer.showMenuOfProblems();
			updateAlgorithmPerformance(problem_response);
		} else {
			const problem_response = await dsaTrainer.showRecommendedProblems();
			updateAlgorithmPerformance(problem_response);
		}

	}
	else if(input.includes(cmInfo.commands.cloze.code)) {
		const problem_response = await dsaTrainer.openRandomClozeDSAProblem();
		console.log("problem_response of cloze", problem_response)
	}
	// else if (input.includes(cmInfo.commands.dsa.code)) {
	else {
		cli_meow.showHelp(0);
		maid.askToClean();
	}


})();
