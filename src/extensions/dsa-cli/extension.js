
const { increasePerformance } = require('../../utils');
const { Toggle, Confirm, prompt, AutoComplete, Survey, Input } = require('enquirer');
const DSATrainer = require('./dsa-trainer.js');
const { ExtensionModel } = require('../models');


let dsaTrainer = new DSATrainer({
	skip_problems: ["hello-world", "simple-sum"]
});

const Settings = require('../../settings');

class MasteryDSAExtension extends ExtensionModel {

	constructor({ masteryManager } = {}) {
		super(
			"MasteryDSAExtension",
			"1.0.0",
			"Mastery DSA Extension",
			"Official",
			"MIT",
			{ masteryManager }
		);
	}

	provideMissingReport = async ({ ask_if_dsa_missing = false } = {}) => {
		try {

			if (!this.missingFeatReport) {
				const _ = await this.populateMissingReport();
			}

			if (ask_if_dsa_missing) {

				await this.requests_if_run_dsa_trainer(this.missingFeatReport);
			}
			if (Settings?.report_show?.obj_ournal) {
				const journal_notes = Settings.journal_notes;
				console.log(journal_notes);
			}

		}
		catch (err) {
			if (DEV_MODE) console.log("Error in provideMissingReport", err)
		}
	}

	/**
	 * if `algo` not included on the missing Feat Report: 
	 * 	- ask to run `algo`
	 * 	- if yes, run `algo`
	 * 
	 */
	requests_if_run_dsa_trainer = async (missingFeatReport) => {
		const algo_missing = missingFeatReport.includes(CONSTANTS.algo_name);
		if (algo_missing) {



			const dsaPrompt = new Confirm({
				name: 'dsa',
				message: "Daily DSA Missing; Run algorithms?",
				initial: true
			});
			const response = await dsaPrompt.run();
			if (response) {
				const dsaTrainer = new DSATrainer(

				);
				const dsa_is_correct = await dsaTrainer.showRecommendedProblems();

				if (dsa_is_correct) {
					await increasePerformance("algo");
				}
			}
		}
		return;
	}

	getCommands() {
		return {
			dsa: new Command("Select Data structures and algorithms to solve", 'dsa'),
			cloze: new Command("Cloze algorithm", 'cloze'),
		}
	}

	updateAlgorithmPerformance = (problem_response, { performance_feature = "algo" } = {}) => {
		if (Settings.dev_mode) console.log("updateAlgorithmPerformance: ", problem_response);
		
		const dsa_is_correct = problem_response.is_problem_solved;
		// console.log("problem_response", problem_response)
		if (dsa_is_correct) {
			(async () => {
				this.masteryManager.logSkillExperience(
					performance_feature,
					{
						score: problem_response.score_to_increase,
						deck_id: 'algo',
						deck_term: problem_response.problem_details.slug,
						comment: problem_response?.problem_details?.stash_file_name ?? `${new Date()}`,
						increased_performance: true,
						performance_feature: performance_feature
					}
				)
			})();
		}
	}

	getHandles({ flags = {} } = {}) {

		dsaTrainer = new DSATrainer({
			skip_problems: ["hello-world", "simple-sum"]
		});

		return {
			dsa: async () => {
				if (flags.all) {
					console.log("all")
					const problem_response = await dsaTrainer.showMenuOfProblems();
					this.updateAlgorithmPerformance(problem_response);
				} else {
					const problem_response = await dsaTrainer.showRecommendedProblems({
						md_pseudo_mode: true,
					});
					this.updateAlgorithmPerformance(problem_response);
				}
			},
			mdsa: async () => {
				if (flags.all) {
					console.log("all")
					const problem_response = await dsaTrainer.showMenuOfProblems({
						md_pseudo_mode: true,
					});
					this.updateAlgorithmPerformance(problem_response);
				}
				else {
					const problem_response = await dsaTrainer.showRecommendedProblems({
						md_pseudo_mode: true,
					});
					this.updateAlgorithmPerformance(problem_response);
				}
			},
			cloze: async () => {
				const problem_response = await dsaTrainer.openRandomClozeDSAProblem();
				console.log("problem_response of cloze", problem_response)
			},
		}
	}

}

module.exports = MasteryDSAExtension;