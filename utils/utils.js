const chalk = require('chalk');
const axios = require('axios');
const { exec, spawn } = require('node:child_process');

const constants = require('./constants');

const { MAID_NAME, getRandomMaidEmoji, appendQuotes, APIDICT } = constants;

// https://www.npmjs.com/package/chalk

const getMaidHeader = () => {
	return `${chalk.hex('#1da1f2').inverse(` ${MAID_NAME}: `)}`;
};

const getTalk = async flags => {
	if (flags.type == 'chuck') {
		const res = await axios.get(APIDICT.CHUCK, {
			headers: {
				'Accept-Encoding': 'application/json'
			}
		});
		message = res.data.value;
	} else if (flags.type) {
		message = flags.type;
	}
	return message;
};



const commitpush = () => {

	let commitMessage = process.argv[3];
	console.log(commitMessage)
	if (commitMessage == undefined) {
		commitMessage = "Committed by Maid " + getRandomMaidEmoji();
	}
	commitMessage = appendQuotes(commitMessage)

	exec(`git coa ${commitMessage} && git poh `);


	console.log(`Pushed to origin with commit message: ${commitMessage} <3`)
}

const autorelease = () => {
	// Maid can auto-release herself

	let commitMessage = process.argv[3];
	if (commitMessage == undefined) {
		exec(`maid coa && make new m ="random commit"`);
	} else {

		exec(`maid coa && make new m="${commitMessage}"`);
	}
}

module.exports = { getMaidHeader, getTalk, commitpush, autorelease };
