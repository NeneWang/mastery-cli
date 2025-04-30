const { ExtensionModel } = require('../models');


class SampleExtension extends ExtensionModel {
	constructor() {

		super(
			"SampleExtension",
			"1.0.0",
			"Sample Extension for CLI Application",
			"Your Name",
			"MIT"
		);
	}

	getCommands(){

	}

	getHandles({ flags }) {
		return {
			'sample': this.handleSampleCommand.bind(this),
		};
	}

	async handleSampleCommand() {
		console.log('Sample command executed!');
	}
}


module.exports = SampleExtension;