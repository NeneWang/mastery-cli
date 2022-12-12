"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var meow = require('meow');

var meowHelp = require('cli-meow-help');

var flags = {
  clear: {
    type: "boolean",
    "default": true,
    alias: "c",
    desc: "Clear the console"
  },
  noClear: {
    type: "boolean",
    "default": true,
    desc: "Don't clear the console"
  },
  debug: {
    type: "boolean",
    "default": false,
    alias: "d",
    desc: "Print debug info"
  },
  version: {
    type: "boolean",
    alias: "v",
    desc: "Print CLI version"
  },
  type: {
    type: 'string',
    "default": 'chuck',
    alias: 't',
    desc: 'What kind of jokes do you want [chuck|nerdy] ?'
  }
};

var Command = function Command(desc, code) {
  _classCallCheck(this, Command);

  this.desc = desc;
  this.code = code;
};

var CommandsInformation = function CommandsInformation() {
  _classCallCheck(this, CommandsInformation);

  this.commands = {
    help: new Command('Command hints', 'help'),
    charts: new Command('Charts Demo', 'charts'),
    report: new Command('Report including weather', 'report'),
    talk: new Command('Says something random', 'talk'),
    coa: new Command('Commit and push to origin', 'coa'),
    services: new Command('secondary services: currency converstion, credential requests, etc', 'services'),
    ask: new Command('Ask her about static ifnormation', 'ask'),
    update: new Command('Auto update Maid API.', 'update')
  };
};

;
var cmInfo = new CommandsInformation();
var helpText = meowHelp({
  name: "maid",
  flags: flags,
  commands: cmInfo.commands
});
var options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags: flags
};
module.exports = [meow(helpText, options), cmInfo];