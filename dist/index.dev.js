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

var axios = require('axios');

var chalk = require('chalk');

var flags = cli.flags;
var input = cli.input;
var clear = flags.clear,
    debug = flags.debug;
var getMaidHeader = utils.getMaidHeader;
var MAID_NAME = constants.MAID_NAME;

(function _callee() {
  var message, res;
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
            _context.next = 14;
            break;
          }

          message = "";

          if (!(flags.type == "chuck")) {
            _context.next = 12;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(axios.get('http://api.chucknorris.io/jokes/random', {
            headers: {
              'Accept-Encoding': 'application/json'
            }
          }));

        case 8:
          res = _context.sent;
          message = res.data.value;
          _context.next = 13;
          break;

        case 12:
          if (flags.type) {
            message = flags.type;
          }

        case 13:
          console.log("".concat(getMaidHeader(), " ").concat(chalk(message)));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
})();