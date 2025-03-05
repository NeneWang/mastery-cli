#!/usr/bin/env node

/**
 * mastery-cli
 * Life is a game, and the game is to be the best version of yourself
 *
 * @author Nelson <github.com/neneWang>
 */

const cli = require('./src/cli');
const log = require('./src/log');
const utils = require('./src/utils');
const { increasePerformance } = require('./src/utils');
const constants = require('./src/constants');
const demos = require('./src/demo');
const Settings = require('./src/settings');
const { populateMasterDeck } = require("./src/terms_data/terms");
const { QuizzerWithDSA } = require('./src/QuizzerWithDSA');


const cli_meow = cli[0]
const cmInfo = cli[1]
const flags = cli_meow.flags;
const input = cli_meow.input;

let { debug } = flags;
debug = debug ?? false;


const { getTalk, Mastery } = utils;


// extensions TODO: Automate this things once located at the extensions folder

const DSATrainer = require('./src/extensions/dsa-cli/dsa-trainer');
const DataScienceExtension = require('./src/extensions/data-science-cli/extension');
const MasteryDSAExtension = require('./src/extensions/dsa-cli/extension');


const { Demo, EDemo } = demos;

function applyMixin(targetInstance, mixin) {
    Object.assign(targetInstance, mixin);

    if (mixin.getHandles) {
        const commands = mixin.getHandles({flags: flags});
        Object.entries(commands).forEach(([command, handler]) => {
            targetInstance.commandHandlers[command] = handler.bind(targetInstance);
        });
    }
}


(async () => {
	const masterDeck = await populateMasterDeck();
	const mastery = new Mastery(Settings, masterDeck);
	applyMixin(mastery, new DataScienceExtension);
	applyMixin(mastery, new MasteryDSAExtension);
	

	/**This is quite the expensive operation, ideally you put this on the end. */
	// const dsaTrainer = new DSATrainer({
	// 	skip_problems: ["hello-world", "simple-sum"]
	// });

	const options = Object.keys(cmInfo.commands);
	input.includes(options[0]) && cli_meow.showHelp(0);
	debug && log(flags);

	mastery.clearOnTalk = true;

	var functionCalled = false;
	for (const command of Object.keys(mastery.commandHandlers)) {
        if (input.includes(command)) {
			functionCalled = true;
            const res = await mastery.commandHandlers[command]();
            return; // Stop after executing the first matched command
        }
    }
	if (!functionCalled) {
		cli_meow.showHelp(0);
		mastery.askToClean();
	}

	// if (input.includes(cmInfo.commands.chart.code)) {
	// 	// Demo for showing charts
	// 	const demo = new Demo;
	// 	demo.chartDemo(EDemo.BAR);
	// 	demo.heatmap();

	// }
	// else if (input.includes(cmInfo.commands.code.code)) {
	// 	mastery.tellCurrentDirectory();
	// }
	// else if (input.includes(cmInfo.commands.jupyter.code)) {
	// 	const res = await mastery.openRandomJupyter();
	// 	console.log("Maid responded with", res);
	// }
	// else if (input.includes(cmInfo.commands.report.code)) {
	// 	mastery.dayReport();
	// }
	// else if (input.includes(cmInfo.commands.talk.code)) {
	// 	let message = await getTalk(flags);
	// 	mastery.say(message, true);
	// }
	// else if (input.includes(cmInfo.commands.coa.code)) {
	// 	let comments_to_populate = [];
	// 	// Slight optimization.
	// 	const commit_res = await utils.commitpush();
		
	// 	if (Settings.ask_quiz_when_commit && commit_res) {
	// 		const _ = await mQuizer.askQuestion();
	// 	}
	// 	mastery.populateMissingReport();
		
		
	// 	await mastery.provideMissingReport({ ask_if_dsa_missing: true }); // In hopes that it is already populated because ask question shouldbe fairly fast.
		
	// 	comments_to_populate = commit_res.comments_to_populate;

	// 	if (Settings.show_past_commits_features_after_quiz) {

	// 		utils.printComments(comments_to_populate);
	// 	}
		
	// 	await mastery.askToClean();
	// }
	// else if (input.includes(cmInfo.commands.services.code)) {
	// 	// Gets all services, keeps asking for things here, which service to get
	// 	mastery.services();
	// }
	// else if (input.includes(cmInfo.commands.ask.code)) {
	// 	mastery.ask();
	// }
	// else if (input.includes(cmInfo.commands.update.code)) {
	// 	mastery.say("Auto updating sir!")
	// 	utils.autorelease()
	// }
	// else if (input.includes(cmInfo.commands.math.code)) {
	// 	mQuizer.ask_math_question();
	// }
	// else if (input.includes(cmInfo.commands.quiz.code)) {
	// 	mQuizer.askQuestion();
	// }
	// else if (input.includes(cmInfo.commands.term.code)) {
	// 	mQuizer.pick_and_ask_term_question();
	// }
	// else if (input.includes(cmInfo.commands.clean.code)) {
	// 	mastery.askToClean();
	// }
	// else if (input.includes(cmInfo.commands.ses.code)) {
	// 	mQuizer.study_session(masterDeck);
	// }
	// else if (input.includes(cmInfo.commands.cses.code)) {
	// 	let reset = false;
	// 	if (flags.reset) {
	// 		reset = true;
	// 	}
	// 	mQuizer.cloze_study_session({ reset_scheduler: reset });
	// }
	// else if (input.includes(cmInfo.commands.amses.code)) {
	// 	let reset = false;
	// 	if (flags.reset) {
	// 		reset = true;
	// 	}
	// 	mQuizer.algorithm_mastery_session();

	// }
	// else if(input.includes(cmInfo.commands.login.code)){
	// 	await mastery.login()

	// }else if(input.includes(cmInfo.commands.backup.code)){
		
	// 	// maid.backup()

	// }	
	// else {
	// 	cli_meow.showHelp(0);
	// 	mastery.askToClean();
	// }


})();
