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
const axios = require('axios');
const flags = cli.flags;
const { clear, debug } = flags;


const input = cli.input;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	if (input.includes('joke')) {
		let message = ""
		if (flags.type == "chuck") {
			const res = await axios.get('http://api.chucknorris.io/jokes/random', {
				headers: {
					'Accept-Encoding': 'application/json',
				}
			});
			message = res.data.value;

		}
		else if (flags.type){
			
			message = flags.type;
		}

		console.log(message)
	}

})();
