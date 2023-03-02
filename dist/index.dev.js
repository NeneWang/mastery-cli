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

var _require2 = require("./utils/data/terms"),
    populateMasterDeck = _require2.populateMasterDeck;

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
  var maid, masterDeck, mQuizer, options, demo, message, _;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          maid = new Maid();
          /**This is quite the expensive operation, ideally you put this on the end. */

          _context.next = 3;
          return regeneratorRuntime.awrap(populateMasterDeck());

        case 3:
          masterDeck = _context.sent;
          // console.log(terms);
          mQuizer = new utils.FlashQuizzer(constants.qmathformulas, constants.qmathenabled, masterDeck); // Testing if the terms categories can be displayed:

          console.log(masterDeck.deck_titles); // console.log(getAbsoluteUri("./img/unicorn.png"))

          options = Object.keys(cmInfo.commands);
          input.includes(options[0]) && cli_meow.showHelp(0);
          debug && log(flags);
          maid.clearOnTalk = true;

          if (!input.includes(cmInfo.commands.chart.code)) {
            _context.next = 15;
            break;
          }

          // Demo for showing charts
          demo = new Demo();
          demo.chartDemo(EDemo.BAR);
          _context.next = 42;
          break;

        case 15:
          if (!input.includes(cmInfo.commands.code.code)) {
            _context.next = 19;
            break;
          }

          maid.tellCurrentDirectory();
          _context.next = 42;
          break;

        case 19:
          if (!input.includes(cmInfo.commands.report.code)) {
            _context.next = 23;
            break;
          }

          maid.dayReport();
          _context.next = 42;
          break;

        case 23:
          if (!input.includes(cmInfo.commands.talk.code)) {
            _context.next = 30;
            break;
          }

          _context.next = 26;
          return regeneratorRuntime.awrap(getTalk(flags));

        case 26:
          message = _context.sent;
          maid.say(message, true);
          _context.next = 42;
          break;

        case 30:
          if (!input.includes(cmInfo.commands.coa.code)) {
            _context.next = 41;
            break;
          }

          _context.next = 33;
          return regeneratorRuntime.awrap(utils.commitpush());

        case 33:
          maid.populateMissingReport();
          _context.next = 36;
          return regeneratorRuntime.awrap(mQuizer.ask_question());

        case 36:
          _ = _context.sent;
          maid.provideMissingReport();
          maid.askToClean();
          _context.next = 42;
          break;

        case 41:
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
            mQuizer.pick_and_ask_term_question();
          } else if (input.includes(cmInfo.commands.clean.code)) {
            maid.askToClean();
          } else if (input.includes(cmInfo.commands.prio.code)) {
            maid.tellPriorities();
          } else {
            cli_meow.showHelp(0);
            maid.askToClean();
          }

        case 42:
        case "end":
          return _context.stop();
      }
    }
  });
})();