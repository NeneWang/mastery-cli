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

var _require = require('./utils/constants'),
    terms = _require.terms,
    getAbsoluteUri = _require.getAbsoluteUri;

var cli_meow = cli[0];
var cmInfo = cli[1];
var flags = cli_meow.flags;
var input = cli_meow.input; // const cmInfo = cli.options.cmInfo;

var clear = flags.clear,
    debug = flags.debug; // const { cmInfo } = cli;

var getTalk = utils.getTalk,
    Maid = utils.Maid;
var MAID_NAME = constants.MAID_NAME;
var bar = chart.bar,
    scatter = chart.scatter,
    bg = chart.bg,
    fg = chart.fg;
var Demo = demos.Demo,
    EDemo = demos.EDemo; // console.log("file:///C:/github/testing/maid-cli/img/unicorn.png");

(function _callee() {
  var maid, mQuizer, options, demo, message, _;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          maid = new Maid();
          mQuizer = new utils.MathQuizer(constants.qmathformulas, constants.qmathenabled, constants.termsEnabled);
          console.log(getAbsoluteUri("./img/unicorn.png"));
          options = Object.keys(cmInfo.commands);
          input.includes(options[0]) && cli_meow.showHelp(0);
          debug && log(flags);
          maid.clearOnTalk = true;

          if (!input.includes(cmInfo.commands.chart.code)) {
            _context.next = 12;
            break;
          }

          // Demo for showing charts
          demo = new Demo();
          demo.chartDemo(EDemo.BAR);
          _context.next = 35;
          break;

        case 12:
          if (!input.includes(cmInfo.commands.report.code)) {
            _context.next = 16;
            break;
          }

          maid.dayReport();
          _context.next = 35;
          break;

        case 16:
          if (!input.includes(cmInfo.commands.talk.code)) {
            _context.next = 23;
            break;
          }

          _context.next = 19;
          return regeneratorRuntime.awrap(getTalk(flags));

        case 19:
          message = _context.sent;
          maid.say(message, true);
          _context.next = 35;
          break;

        case 23:
          if (!input.includes(cmInfo.commands.coa.code)) {
            _context.next = 34;
            break;
          }

          _context.next = 26;
          return regeneratorRuntime.awrap(utils.commitpush());

        case 26:
          maid.populateMissingReport();
          _context.next = 29;
          return regeneratorRuntime.awrap(mQuizer.ask_question());

        case 29:
          _ = _context.sent;
          maid.provideMissingReport();
          maid.askToClean();
          _context.next = 35;
          break;

        case 34:
          if (input.includes(cmInfo.commands.services.code)) {
            // Gets all services, keeps asking for things here, which service to get
            maid.services();
          } else if (input.includes(cmInfo.commands.ask.code)) {
            maid.ask();
          } else if (input.includes(cmInfo.commands.update.code)) {
            maid.say("Auto updating sir!");
            utils.autorelease();
          } else if (input.includes(cmInfo.commands.math.code)) {
            mQuizer.ask_math_question();
          } else if (input.includes(cmInfo.commands.quiz.code)) {
            mQuizer.ask_question();
          } else if (input.includes(cmInfo.commands.term.code)) {
            mQuizer.ask_term_question();
          } else if (input.includes(cmInfo.commands.clean.code)) {
            maid.askToClean();
          } else {
            cli_meow.showHelp(0);
            maid.askToClean();
          }

        case 35:
        case "end":
          return _context.stop();
      }
    }
  });
})();