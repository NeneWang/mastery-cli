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
const { getMaidHeader } = utils;
const { MAID_NAME } = constants;





(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	if (input.includes('talk')) {
		let message = ""
		if (flags.type == "chuck") {
			const res = await axios.get('http://api.chucknorris.io/jokes/random', {
				headers: {
					'Accept-Encoding': 'application/json',
				}
			});
			message = res.data.value;

		}
		else if (flags.type) {

			message = flags.type;
		}

		console.log(`${getMaidHeader()} ${chalk(message)}`)
	}

})();
