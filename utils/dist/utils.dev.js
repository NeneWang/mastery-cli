"use strict";

var chalk = require('chalk');

var axios = require('axios');

var _require = require('node:child_process'),
    exec = _require.exec,
    spawn = _require.spawn;

var constants = require('./constants');

var MAID_NAME = constants.MAID_NAME,
    getRandomMaidEmoji = constants.getRandomMaidEmoji,
    appendQuotes = constants.appendQuotes,
    APIDICT = constants.APIDICT; // https://www.npmjs.com/package/chalk

var getMaidHeader = function getMaidHeader() {
  return "".concat(chalk.hex('#1da1f2').inverse(" ".concat(MAID_NAME, ": ")));
};

var getTalk = function getTalk(flags) {
  var res;
  return regeneratorRuntime.async(function getTalk$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(flags.type == 'chuck')) {
            _context.next = 7;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get(APIDICT.CHUCK, {
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

var printReport = function printReport() {
  weatherReport(); // Plus other stuff in the future
};

var weatherReport = function weatherReport() {
  var res;
  return regeneratorRuntime.async(function weatherReport$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(axios.get(APIDICT.WEATHER, {
            headers: {
              'Accept-Encoding': 'application/json'
            }
          }));

        case 2:
          res = _context2.sent;
          weatherData = constants.WeatherInformation(res);
          console.log(weatherData.json);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var commitpush = function commitpush() {
  var commitMessage = process.argv[3];
  console.log(commitMessage);

  if (commitMessage == undefined) {
    commitMessage = "Committed by Maid " + getRandomMaidEmoji();
  }

  commitMessage = appendQuotes(commitMessage);
  exec("git coa ".concat(commitMessage, " && git poh "));
  console.log("Pushed to origin with commit message: ".concat(commitMessage, " <3"));
};

var autorelease = function autorelease() {
  // Maid can auto-release herself
  var commitMessage = process.argv[3];

  if (commitMessage == undefined) {
    exec("maid coa && make new m =\"random commit\"");
  } else {
    exec("maid coa && make new m=\"".concat(commitMessage, "\""));
  }
};

module.exports = {
  getMaidHeader: getMaidHeader,
  getTalk: getTalk,
  commitpush: commitpush,
  autorelease: autorelease,
  printReport: printReport
};