"use strict";

var chalk = require('chalk');

var axios = require('axios');

var constants = require('./constants');

var MAID_NAME = constants.MAID_NAME; // https://www.npmjs.com/package/chalk

var getMaidHeader = function getMaidHeader() {
  return "".concat(chalk.hex("#1da1f2").inverse(" ".concat(MAID_NAME, ": ")));
};

var getTalk = function getTalk(flags) {
  var res;
  return regeneratorRuntime.async(function getTalk$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(flags.type == "chuck")) {
            _context.next = 7;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get('http://api.chucknorris.io/jokes/random', {
            headers: {
              'Accept-Encoding': 'application/json'
            }
          }));

        case 3:
          res = _context.sent;
          message = res.data.value;
          _context.next = 8;
          break;

        case 7:
          if (flags.type) {
            message = flags.type;
          }

        case 8:
          return _context.abrupt("return", message);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  getMaidHeader: getMaidHeader,
  getTalk: getTalk
};