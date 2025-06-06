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
const demos = require('./src/demo');
const Settings = require('./src/settings');
const { populateMasterDeck } = require("./src/terms_data/terms");


const cli_meow = cli[0]
const cmInfo = cli[1]
const flags = cli_meow.flags;
const input = cli_meow.input;

let { debug } = flags;
debug = debug ?? false;


const { Mastery } = utils;


// extensions TODO: Automate this things once located at the extensions folder

// const DataScienceExtension = require('./src/extensions/data-science-cli/extension');
const MasteryDSAExtension = require('./src/extensions/dsa-cli/extension');
const DemoExtension = require('./src/extensions/demo/extension');


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
	
	applyMixin(mastery, new MasteryDSAExtension({ masteryManager: mastery }));
	applyMixin(mastery, new DemoExtension);

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


})();
