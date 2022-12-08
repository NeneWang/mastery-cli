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
          if (!input.includes('coa')) {
            _context.next = 19;
            break;
          }

          // Commits all and pushes things
          commitMessage = process.argv[3];
          console.log(commitMessage);

          if (commitMessage == undefined) {
            commitMessage = "Commit by maid ";
          } // exec(`mkdir -p ${dirName}`);
          // spawn(`git `);


          _context.next = 14;
          return regeneratorRuntime.awrap(spawn('git', ['add', '--all']));

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(spawn("git", ['commit', '-m', commitMessage]));

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(spawn("git", ['push', 'origin', 'head']));

        case 18:
          // bat.stdout.on('data', (data) => {
          // 	console.log(data.toString());
          // });
          console.log("Pushed to origin with commit message: ".concat(commitMessage, " <3"));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
})();