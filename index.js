#!/usr/bin/env node

/**
 * mastery-cli
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
const { populateMasterDeck: populateMasterDeck } = require("./utils/terms_data/terms");
const DSATrainer = require('./utils/dsa-cli/dsa-trainer');
const { QuizzerWithDSA } = require('./utils/QuizzerWithDSA');


const cli_meow = cli[0]
const cmInfo = cli[1]
const flags = cli_meow.flags;
const input = cli_meow.input;

let { debug } = flags;
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

	const mQuizer = new QuizzerWithDSA(constants.qmathformulas, constants.qmathenabled, masterDeck);
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
	else if (input.includes(cmInfo.commands.jupyter.code)) {
		// utils.openRandomJupyter();
		const res = await maid.openRandomJupyter();
		console.log("Maid responded with", res);
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
		// Slight optimization.
		const commit_res = await utils.commitpush();
		
		if (Settings.ask_quiz_when_commit && commit_res) {
			const _ = await mQuizer.askQuestion();
		}
		maid.populateMissingReport();
		
		
		await maid.provideMissingReport({ ask_if_dsa_missing: true }); // In hopes that it is already populated because ask question shouldbe fairly fast.
		
		comments_to_populate = commit_res.comments_to_populate;

		if (Settings.show_past_commits_features_after_quiz) {

			utils.printComments(comments_to_populate);
		}
		
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
	else if (input.includes(cmInfo.commands.ses.code)) {
		mQuizer.study_session(masterDeck);
	}
	else if (input.includes(cmInfo.commands.cses.code)) {
		let reset = false;
		if (flags.reset) {
			reset = true;
		}
		mQuizer.cloze_study_session({ reset_scheduler: reset });
	}
	else if (input.includes(cmInfo.commands.amses.code)) {
		let reset = false;
		if (flags.reset) {
			reset = true;
		}
		mQuizer.algorithm_mastery_session();

	}
	else if (input.includes(cmInfo.commands.jses.code)) {
		mQuizer.jupyter_study_session();
	}
	else if (input.includes(cmInfo.commands.dsa.code)) {
		// const dsa_is_correct = await dsaTrainer.openRandomProblem();

		const updateAlgorithmPerformance = (problem_response) => {
			if (Settings.dev_mode) console.log("updateAlgorithmPerformance: ", problem_response);

			const dsa_is_correct = problem_response.is_problem_solved;
			if (dsa_is_correct) {
				(async () => {

					await increasePerformance("algo_w", problem_response.score_to_increase);
					await increasePerformance("algo", 1);

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
	else if (input.includes(cmInfo.commands.cloze.code)) {
		const problem_response = await dsaTrainer.openRandomClozeDSAProblem();
		console.log("problem_response of cloze", problem_response)
	}
	else if(input.includes(cmInfo.commands.login.code)){
		await maid.login()

	}else if(input.includes(cmInfo.commands.backup.code)){
		
		// maid.backup()

	}	
	else {
		cli_meow.showHelp(0);
		maid.askToClean();
	}


})();
