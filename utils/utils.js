const chalk = require('chalk');
const axios = require('axios');
const { exec, spawn } = require('node:child_process');

const constants = require('./constants');

const { MAID_NAME } = constants;

// https://www.npmjs.com/package/chalk

const getMaidHeader = () => {
	return `${chalk.hex('#1da1f2').inverse(` ${MAID_NAME}: `)}`;
};

const getTalk = async flags => {
	if (flags.type == 'chuck') {
		const res = await axios.get('http://api.chucknorris.io/jokes/random', {
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
		commitMessage = '"Committed by Maid :genie_woman: "'
	} else {
		commitMessage = '"' + commitMessage + '"';
	}

	exec(`git coa ${commitMessage} && git poh `);


	console.log(`Pushed to origin with commit message: ${commitMessage} <3`)
}

module.exports = { getMaidHeader, getTalk, commitpush };
