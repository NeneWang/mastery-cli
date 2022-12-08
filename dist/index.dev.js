#!/usr/bin/env node

/**
 * maid-cli
 * Assistant to keep you on track and productive
 *
 * @author Nelson <github.com/neneWang>
 */
"use strict";

var init = require('./utils/init');

var cli = require('./utils/cli');

var log = require('./utils/log');

var utils = require('./utils/utils');

var constants = require('./utils/constants');

var _require = require('child_process'),
    exec = _require.exec,
    spawn = _require.spawn; // const execa = require('execa');


var axios = require('axios');

var chalk = require('chalk');

var flags = cli.flags;
var input = cli.input;
var clear = flags.clear,
    debug = flags.debug;
var getMaidHeader = utils.getMaidHeader,
    getTalk = utils.getTalk;
var MAID_NAME = constants.MAID_NAME;

(function _callee() {
  var message, commitMessage;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          init({
            clear: clear
          });
          input.includes("help") && cli.showHelp(0);
          debug && log(flags);

          if (!input.includes('talk')) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(getTalk(flags));

        case 6:
          message = _context.sent;
          console.log("".concat(getMaidHeader(), " ").concat(chalk(message)));

        case 8:
          if (input.includes('coa')) {
            // Commits all and pushes things
            commitMessage = process.argv[3];
            console.log(commitMessage);

            if (commitMessage == undefined) {
              commitMessage = '"CommittedByMaid"';
            }

            spawn('git', ['add', '--all']);
            spawn("git", ['commit', '-m', commitMessage]);
            spawn("git", ['push', 'origin', 'head']);
            console.log("Pushed to origin with commit message: ".concat(commitMessage, " <3"));
          }

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
})();