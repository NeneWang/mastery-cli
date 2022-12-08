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
const { exec, spawn } = require('child_process');
// const execa = require('execa');


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
		// Commits all and pushes things

		let commitMessage = process.argv[3];
		console.log(commitMessage)
		if (commitMessage == undefined) {
			commitMessage = '"CommittedByMaid"'
		}
		spawn('git', ['add', '--all']);
		spawn(`git`, ['commit', '-m', commitMessage]);
		spawn(`git`, ['push', 'origin', 'head']);

		console.log(`Pushed to origin with commit message: ${commitMessage} <3`)

	}

})();
