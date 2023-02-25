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
const constants = require('./utils/constants');
const demos = require('./utils/demo');



const axios = require('axios');
const chalk = require('chalk');
const chart = require('@wangnene2/chart');
const { terms, getAbsoluteUri } = require('./utils/constants');
const { populateTerms }= require ("./utils/data/terms");

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


	const terms = await populateTerms();
	console.log(terms);
	const mQuizer = new utils.MathQuizer(constants.qmathformulas, constants.qmathenabled, terms);


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
		const _ = await mQuizer.ask_question();
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
		mQuizer.ask_question();
	}
	else if (input.includes(cmInfo.commands.term.code)) {
		mQuizer.ask_term_question();
	}

	else if (input.includes(cmInfo.commands.clean.code)) {
		maid.askToClean();
	}
	else {
		cli_meow.showHelp(0);
		maid.askToClean();
	}

})();
