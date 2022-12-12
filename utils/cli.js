const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: true,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	type: {
		type: 'string',
		default: 'chuck',
		alias: 't',
		desc: 'What kind of jokes do you want [chuck|nerdy] ?'
	}
};

class Command {
	constructor(desc, code) {
		this.desc = desc;
		this.code = code;
	}
}

class CommandsInformation {


	constructor() {
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
	}


};

const cmInfo = new CommandsInformation()

const helpText = meowHelp({
	name: `maid`,
	flags,
	commands: cmInfo.commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags,

};

module.exports = [meow(helpText, options), cmInfo];
