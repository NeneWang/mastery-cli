
const chalk = require('chalk')

const constants = require('./constants');

const { MAID_NAME } = constants;

// https://www.npmjs.com/package/chalk

const getMaidHeader = () => {
	return `${chalk.hex("#1da1f2").inverse(` ${MAID_NAME}: `)}`
}

module.exports = {getMaidHeader}