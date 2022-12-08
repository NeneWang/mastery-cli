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



const axios = require('axios');
const chalk = require('chalk');

const flags = cli.flags;
const input = cli.input;


const { clear, debug } = flags;
const { getMaidHeader, getTalk } = utils;
const { MAID_NAME } = constants;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	if (input.includes('talk')) {
		let message = await getTalk(flags);
		console.log(`${getMaidHeader()} ${chalk(message)}`);
	}

	if (input.includes('coa')) {
		utils.commitpush()
	}

	if (input.includes('update')){
		utils.autorelease()
	}

})();
