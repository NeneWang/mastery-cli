"use strict";

var chalk = require('chalk');

var constants = require('./constants');

var MAID_NAME = constants.MAID_NAME; // https://www.npmjs.com/package/chalk

var getMaidHeader = function getMaidHeader() {
  return "".concat(chalk.hex("#1da1f2").inverse(" ".concat(MAID_NAME, ": ")));
};

module.exports = {
  getMaidHeader: getMaidHeader
};