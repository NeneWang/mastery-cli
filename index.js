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
const chart = require('@wangnene2/chart')


const flags = cli.flags;
const input = cli.input;


const { clear, debug } = flags;
const { getTalk, Maid } = utils;
const { MAID_NAME } = constants;
const { bar, scatter, bg, fg } = chart;
const {Demo, EDemo} = demos;

(async () => {
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	const maid = new Maid();
	maid.clearOnTalk = true;

	if (input.includes('charts')) {
		// Demo for showing charts
		const demo = new Demo;
		demo.chartDemo(EDemo.BAR);

	}

	if (input.includes('report')) {
		maid.dayReport();
	}

	if (input.includes('talk')) {
		let message = await getTalk(flags);
		maid.say(message, true);

	}

	if (input.includes('coa')) {
		utils.commitpush()
	}

	if (input.includes('update')) {
		maid.say("Auto updating sir!")
		utils.autorelease()
	}

})();
