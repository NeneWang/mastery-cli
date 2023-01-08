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
    EDemo = demos.EDemo;

(function _callee() {
  var maid, mQuizer, options, demo, message, _;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          maid = new Maid();
          mQuizer = new utils.MathQuizer(constants.qmathformulas, constants.qmathenabled);
          options = Object.keys(cmInfo.commands);
          input.includes(options[0]) && cli_meow.showHelp(0);
          debug && log(flags);
          maid.clearOnTalk = true;

          if (!input.includes(cmInfo.commands.help.code)) {
            _context.next = 11;
            break;
          }

          // Demo for showing charts
          demo = new Demo();
          demo.chartDemo(EDemo.BAR);
          _context.next = 31;
          break;

        case 11:
          if (!input.includes(cmInfo.commands.report.code)) {
            _context.next = 15;
            break;
          }

          maid.dayReport();
          _context.next = 31;
          break;

        case 15:
          if (!input.includes(cmInfo.commands.talk.code)) {
            _context.next = 22;
            break;
          }

          _context.next = 18;
          return regeneratorRuntime.awrap(getTalk(flags));

        case 18:
          message = _context.sent;
          maid.say(message, true);
          _context.next = 31;
          break;

        case 22:
          if (!input.includes(cmInfo.commands.coa.code)) {
            _context.next = 30;
            break;
          }

          utils.commitpush();
          _context.next = 26;
          return regeneratorRuntime.awrap(mQuizer.ask_question());

        case 26:
          _ = _context.sent;
          maid.askToClean();
          _context.next = 31;
          break;

        case 30:
          if (input.includes(cmInfo.commands.services.code)) {
            // Gets all services, keeps asking for things here, which service to get
            maid.services();
          } else if (input.includes(cmInfo.commands.ask.code)) {
            maid.ask();
          } else if (input.includes(cmInfo.commands.update.code)) {
            maid.say("Auto updating sir!");
            utils.autorelease();
          } else if (input.includes(cmInfo.commands.math.code)) {
            mQuizer.ask_question();
          } else if (input.includes(cmInfo.commands.clean.code)) {
            maid.askToClean();
          } else {}

        case 31:
        case "end":
          return _context.stop();
      }
    }
  });
})();