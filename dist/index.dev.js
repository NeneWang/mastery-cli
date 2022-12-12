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
  var maid, options, demo, message;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          maid = new Maid();
          options = Object.keys(cmInfo.commands);
          input.includes(options[0]) && cli_meow.showHelp(0);
          debug && log(flags);
          maid.clearOnTalk = true;

          if (!input.includes(cmInfo.commands.help.code)) {
            _context.next = 10;
            break;
          }

          // Demo for showing charts
          demo = new Demo();
          demo.chartDemo(EDemo.BAR);
          _context.next = 22;
          break;

        case 10:
          if (!input.includes(cmInfo.commands.report.code)) {
            _context.next = 14;
            break;
          }

          maid.dayReport();
          _context.next = 22;
          break;

        case 14:
          if (!input.includes(cmInfo.commands.talk.code)) {
            _context.next = 21;
            break;
          }

          _context.next = 17;
          return regeneratorRuntime.awrap(getTalk(flags));

        case 17:
          message = _context.sent;
          maid.say(message, true);
          _context.next = 22;
          break;

        case 21:
          if (input.includes(cmInfo.commands.coa.code)) {
            utils.commitpush();
          } else if (input.includes(cmInfo.commands.services.code)) {
            // Gets all services, keeps asking for things here, which service to get
            maid.services();
          } else if (input.includes(cmInfo.commands.ask.code)) {
            maid.ask();
          } else if (input.includes(cmInfo.commands.update.code)) {
            maid.say("Auto updating sir!");
            utils.autorelease();
          }

        case 22:
        case "end":
          return _context.stop();
      }
    }
  });
})();