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
	},
	all: {
		type: 'boolean',
		default: false,
		alias: 'a',
		desc: 'Get all algorithms'
	},
	reset: {
		type: 'boolean',
		default: false,
		alias: 'r',
		desc: 'Reset the scheduler'
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
			co: new Command('Commit changes and push to origin using the Questins pipeline', 'coa'),
			// services: new Command('Access secondary services such as currency conversion and credential requests', 'services'),
			math: new Command('Execute a mathematics-related prompt', 'math'),
			term: new Command('Execute a terminology-based prompt', 'term'),
			quiz: new Command('Initiate a quiz using either a term or math prompt', 'quiz'),
			clean: new Command('Prompt to confirm terminal cleanup', 'clean'),
			ses: new Command('Start a study session', 'ses'),
			dsa: new Command('Select data structures and algorithms for practice', 'dsa'),
			cloze: new Command('Run a cloze-type algorithm exercise', 'cloze'),
			cses: new Command('Start a cloze algorithm-based study session', 'cses'),
			amses: new Command('Launch a mastery session with ten random algorithm challenges in a queue', 'amses'),
			// backup: new Command('Back up the settings.json file', 'backup'),
			report: new Command('Generate a report that summarizes recent performance', 'report'),
			code: new Command('Output the root directory of the mastery CLI and copy the path to clipboard', 'code'),
			settings: new Command('Output the root directory of the settings file and copy the path to clipboard', 'code'),
			help: new Command('Display available commands and usage hints', 'help'),

		};
	}


};

const cmInfo = new CommandsInformation()

const helpText = meowHelp({
	name: `mastery`,
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
