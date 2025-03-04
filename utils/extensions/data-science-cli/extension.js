
const { getRandomProblem, copyFileToTemp } = require('./index');
const { increasePerformance } = require('../../utils');
const { getMaidDirectory } = require('../../utils_functions');
const { exec } = require('node:child_process');
const { Toggle, Confirm, prompt, AutoComplete, Survey, Input } = require('enquirer');


class DataScienceExtension {
	openJupyter = async ({ FILE = "/machine_learning/01_pandas.ipynb" } = {}) => {

		copyFileToTemp(FILE);

		const correctPrompt = new Confirm({
			name: 'notebook',
			message: "Was the notebook solved correctly?",
			initial: true
		});
		const response = await correctPrompt.run();
		if (response) {
			await increasePerformance("jupyter");
		}
		return response;

	}

	/**
	 * Opens a random jupyter notebook from the list of problems
	 * @returns {bool} if the problem was solved correctly
	 */
	openRandomJupyter = async () => {
		const selectedProblem = getRandomProblem();
		this.runServer();

		return this.openJupyter({ FILE: "/" + selectedProblem.problem });
	}



	runServer = () => {

		const projectDirectory = getMaidDirectory();
		const jupyter_folder = "/utils/data-science-cli/problems";

		const jupyterCommand = `jupyter notebook --notebook-dir=${projectDirectory}/${jupyter_folder}`;
		exec(jupyterCommand);
	}


}

module.exports = DataScienceExtension;