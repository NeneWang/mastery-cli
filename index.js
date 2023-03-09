#!/usr/bin/env node

/**
 * maid-cli
 * Assistant to keep you on track and productive
 *
 * @author Nelson <github.com/neneWang>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const utils = require('./utils/utils');
const { increasePerformance } = require('./utils/utils');
const constants = require('./utils/constants');
const demos = require('./utils/demo');



const axios = require('axios');
const chalk = require('chalk');
const chart = require('@wangnene2/chart');
const { terms, getAbsoluteUri } = require('./utils/constants');
const { populateMasterDeck: populateMasterDeck } = require("./utils/data/terms");
const { Quizzer } = require('./utils/Quizzer');
const { QuizzerWithDSA } = require('./utils/QuizzerWithDSA');
const DSATrainer = require('./utils/dsa-cli/dsa-trainer');
const { util } = require('prettier');

const cli_meow = cli[0]
const cmInfo = cli[1]
const flags = cli_meow.flags;
const input = cli_meow.input;
// const cmInfo = cli.options.cmInfo;

const { clear, debug } = flags;
// const { cmInfo } = cli;
const { getTalk, Maid } = utils;
const { MAID_NAME } = constants;
const { bar, scatter, bg, fg } = chart;
const { Demo, EDemo } = demos;


// console.log("file:///C:/github/testing/maid-cli/img/unicorn.png");


(async () => {
	const maid = new Maid();

	/**This is quite the expensive operation, ideally you put this on the end. */
	const masterDeck = await populateMasterDeck();
	const dsaTrainer = new DSATrainer({
		skip_problems: ["hello-world", "simple-sum"]
	});

	// console.log(terms);
	const mQuizer = new Quizzer(constants.qmathformulas, constants.qmathenabled, masterDeck);


	// console.log(getAbsoluteUri("./img/unicorn.png"))
	const options = Object.keys(cmInfo.commands);
	input.includes(options[0]) && cli_meow.showHelp(0);
	debug && log(flags);

	maid.clearOnTalk = true;

	if (input.includes(cmInfo.commands.chart.code)) {
		// Demo for showing charts
		const demo = new Demo;
		demo.chartDemo(EDemo.BAR);

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
		await utils.commitpush();
		maid.populateMissingReport();
		// as until the response is right?

		const _ = await mQuizer.askQuestion();
		maid.provideMissingReport();
		maid.askToClean();
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
		const dsa_is_correct = await dsaTrainer.showMenuOfProblems();

		if (dsa_is_correct) {
			await increasePerformance("algo");
			maid.say("Good job, you got it right! Increasing your social credit score!");
		}

	}
	else {
		cli_meow.showHelp(0);
		maid.askToClean();
	}


})();
