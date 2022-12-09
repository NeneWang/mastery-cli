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

var demos = require('./utils/demo');

var axios = require('axios');

var chalk = require('chalk');

var chart = require('@wangnene2/chart');

var flags = cli.flags;
var input = cli.input;
var clear = flags.clear,
    debug = flags.debug;
var getTalk = utils.getTalk,
    Maid = utils.Maid;
var MAID_NAME = constants.MAID_NAME;
var bar = chart.bar,
    scatter = chart.scatter,
    bg = chart.bg,
    fg = chart.fg;
var Demo = demos.Demo,
    EDemo = demos.EDemo;

(function _callee() {
  var demo, message;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          input.includes("help") && cli.showHelp(0);
          debug && log(flags);
          maid = new Maid();

          if (input.includes('charts')) {
            // Demo for showing charts
            demo = new Demo();
            demo.chartDemo(EDemo.SCATTER);
          }

          if (input.includes('report')) {
            maid.dayReport();
          }

          if (!input.includes('talk')) {
            _context.next = 10;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(getTalk(flags));

        case 8:
          message = _context.sent;
          maid.say(message, true);

        case 10:
          if (input.includes('coa')) {
            utils.commitpush();
          }

          if (input.includes('update')) {
            utils.autorelease();
          }

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
})();