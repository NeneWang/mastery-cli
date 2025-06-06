const chalk = require('chalk');
const axios = require('axios');
const clipboard = require('copy-paste');
const { exec } = require('node:child_process');
const { Toggle, Confirm, prompt, AutoComplete, Survey, Input } = require('enquirer');
const chart = require('terminal-charter');
const { bar, bg, annotation, radar } = chart;

const init = require('../init');
const constants = require('../constants');
const { QuizzerWithDSA } = require('../QuizzerWithDSA');
const { MAID_NAME, APIDICT, CONSTANTS, formatObjectFeatures, get_random } = constants;
const { getMaidDirectory } = require('../utils_functions');
const Settings = require('../settings');
const SettingsManager = require('../SettingsManager');
const { Quizzer: FlashQuizzer } = require('../Quizzer');
const { LocalStorage } = require('../LocalStorage');

const localStorageInstance = new LocalStorage();
localStorageInstance.load();

function withOnlineCheck(fn) {
    return async function (...args) {
        if (!Settings?.online) {
            if (!Settings?.dev_mode) {
                console.log('Offline, modify in data\\settings.json');
            }
            return {};
        }
        return await fn.apply(this, args);
    };
}

class Mastery {
class Mastery {

	constructor(Settings = {}, masterDeck, name = MAID_NAME, headerColor = '#1da1f2', clearOnTalk = false) {
		this.Settings = Settings;
		this.name = name;
		this.headerColor = headerColor;
		this.clearOnTalk = clearOnTalk;
		this.missing_features_today = []; //To be populated when required.

		this.mQuizer = new QuizzerWithDSA(constants.qmathformulas, constants.qmathenabled, masterDeck, this);

		this.populateMissingReport = withOnlineCheck(this.populateMissingReport.bind(this));
		this.login = withOnlineCheck(this.login.bind(this));
		this.dayReport = withOnlineCheck(this.dayReport.bind(this));
		this.provideMissingReport = withOnlineCheck(this.provideMissingReport.bind(this));
		this.populateMissingReport = withOnlineCheck(this.populateMissingReport.bind(this));
		this.performanceReport = withOnlineCheck(this.performanceReport.bind(this));
		this.services = withOnlineCheck(this.services.bind(this));


		this.commandHandlers = {
			'hello': () => { this.say('Hello!') },
			'code': () => { this.tellCurrentDirectory() },
			'coa': () => {

				const run = async () => {

					this.increasePerformance('commit', { score: 1 });
					const commit_res = await commitpush();
					if (Settings.ask_quiz_when_commit && commit_res) {
						await this.mQuizer.askQuestion();
					}

					this.populateMissingReport();
				};

				run();
			},
			'poh': () => {
				this.pushOriginHead();
			},
			'skill': () => {
				this.getSkillReports();
			},
			'services': () => { this.services() },
			'math': () => { this.mQuizer.ask_math_question() },
			'quiz': () => { this.mQuizer.askQuestion() },
			'imath': () => { this.increasePerformance('math_ss') },
			'term': () => { this.mQuizer.pick_and_ask_term_question() },
			'clean': () => { this.askToClean() },
			'ses': () => { this.mQuizer.study_session() },
			'cses': () => { this.mQuizer.cloze_study_session() },
			'amses': () => { this.mQuizer.algorithmic_study_session() },
			'report': () => {
				this.getSkillReports();
				this.generateOfflinePerformanceReport({ localStorageInstance, version: "tables" })
			},
		};
	}



	login = async () => {
		// await axios.get(`${APIDICT.DEPLOYED_MAID}/account/missing_performance_today/${Settings.account_id ?? 1}`)


		if (!Settings?.online) {
			if (!Settings?.dev_mode) {
				console.log('Offline, should not get comments');
			}
			return {}
		}


		let questionEmail = new Input({
			name: 'email',
			message: 'What is your email?'
		});

		const email = await questionEmail.run();

		const res = await axios.post(`${APIDICT.DEPLOYED_MAID}/cli-login?email=${email}`)
		console.log('Login data');
		console.log(res.data);

		// load settings from Json.
		const settingsManager = new SettingsManager();
		let current_settings = settingsManager.getSettings();

		const databaseSettings = res?.['settings_json'] ?? {};
		if (databaseSettings == {}) {
			console.log("There must been an error in the database");
			return;
		}

		const useRemoteDatabasePrompt = new Confirm({
			name: 'useRemoteDatabase',
			message: "Use remote database settings (will overwrite local)?",
			initial: true
		});

		const useRemoteDatabase = await useRemoteDatabasePrompt.run();
		// Update current Id and upload the settings database

		if (useRemoteDatabase) {
			current_settings = databaseSettings;
		}

		current_settings.account_id = res.data.account_id;
		settingsManager.saveSettings(current_settings, {
			overwrite: true
		});

	}

	say(message, clearOnTalk = this.clearOnTalk) {

		if (clearOnTalk) init(true);
		console.log(` ${chalk(message)}`);
	}

	tellCurrentDirectory = () => {
		const projectDirectory = getMaidDirectory();
		this.say(projectDirectory);
		clipboard.copy(projectDirectory);
	}

	runServer = () => {

		const projectDirectory = getMaidDirectory();
		const jupyter_folder = "/utils/data-science-cli/problems";

		const jupyterCommand = `jupyter notebook --notebook-dir=${projectDirectory}/${jupyter_folder}`;
		exec(jupyterCommand);
	}


	/**
	 * Cleans the terminal
	 */
	cleanTerminal = () => {
		console.clear();
	}

	// Prompts y/n question to clean, if y, cleans.
	askToClean = async () => {

		// const response = question('clean', 'y/n', { type: 'confirm' });
		const cleanPrompt = new Confirm({
			name: 'clean',
			message: "Would you like me to clean up the terminal?",
			initial: true
		});
		const response = await cleanPrompt.run();
		console.log(response)
		if (response) {
			this.cleanTerminal();
		}

	}

	/**
	 * Prints the day report based on the settings
	 * - Performance Report: A table report stating the counts of each feature
	 * - Missing Report: A list of the missing features for the day
	 * 		- If the if `ask-if-algo-missing` is true, it will ask if the user wants to run the `algo` trainer (If the user haven't completed his first algorithm in the day.)
	 */
	dayReport = async () => {

		const todaydate = getToday()

		if (Settings?.report_show?.performance_summary) {
			this.say(`Performance Report: ${todaydate}`, false)
			await this.performanceReport();
		}


		if (Settings?.report_show?.missing_report) {
			this.say(`Missing Report: ${todaydate}, dsa enabled: ${true}`, false)
			await this.provideMissingReport({ ask_if_dsa_missing: Settings?.report_show?.ask_if_algo_missing ?? false });
		}


	}

	/**
	 * Prints the missing objectives
	 * !important: To prepopulate the msising report first!!
	 */
	provideMissingReport = async ({ ask_if_dsa_missing = false } = {}) => {
		try {

			if (!this.missingFeatReport) {
				const _ = await this.populateMissingReport();
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
	 *  precalculated asynchronous at the start, since usually the missing Feat report is to be shown at the end of the math thing.
	 *  */
	populateMissingReport = async () => {


		try {
			const res = await axios.get(`${APIDICT.DEPLOYED_MAID}/account/missing_performance_today/${Settings.account_id ?? 1}`)
			this.missingFeatReport = res.data;
		}
		catch (err) {
			if (DEV_MODE) {


				console.log("API call", `${APIDICT.DEPLOYED_MAID}/account/missing_performance_today/${Settings.account_id ?? 1}`)
				console.log("Error in populateMissingReport", err)
				if (Settings.show_http_errors) {
					console.log(err);
				}
			}
		}
	}


	async generateOfflinePerformanceReport({ localStorageInstance, version = "tables" } = {}) {
		try {
			await localStorageInstance.load();

			const feat_rules = getObjectiveFeatures();

			// Use built-in day and week methods
			const today_scores = localStorageInstance.get_day_logs({ windows_n: 0 }).selected_date;
			const week_scores = localStorageInstance.get_week_log();

			let userPerformanceData = {
				today: {},
				week_sum: {},
				week_average: {},
				week_average_exclude_today: {}
			};

			// Fill in today and week data
			for (const feat in today_scores) {
				userPerformanceData.today[feat] = today_scores[feat].value;
			}
			for (const feat in week_scores) {
				const total = week_scores[feat].value;
				const today = userPerformanceData.today[feat] ?? 0;
				userPerformanceData.week_sum[feat] = total;
				userPerformanceData.week_average[feat] = total / 7;
				userPerformanceData.week_average_exclude_today[feat] = (total - today) / 6;
			}

			// Round decimals
			for (const column of ["week_average", "week_average_exclude_today"]) {
				for (const key in userPerformanceData[column]) {
					userPerformanceData[column][key] = parseFloat(userPerformanceData[column][key].toFixed(2));
				}
			}

			// Evaluate performance against rules
			const features_accomplished_today = {};
			for (const [requirement_key, settings] of Object.entries(feat_rules)) {
				if (settings.day) {
					const actual = userPerformanceData.today[requirement_key] ?? 0;
					const diff = settings.day - actual;
					features_accomplished_today[`d: ${requirement_key}`] = {
						miss: diff < 0 ? "✅" : diff,
						type: "day",
						req: settings.day
					};
				}
				if (settings.week) {
					const actual = userPerformanceData.week_sum[requirement_key] ?? 0;
					const diff = settings.week - actual;
					features_accomplished_today[`w: ${requirement_key}`] = {
						miss: diff < 0 ? "✅" : diff,
						type: "week",
						req: settings.week
					};
				}
			}

			// console.log("Offline Performance Report");
			// console.log(today_scores);
			// console.log("Week Scores", week_scores);
			// console.log("User Performance Data", userPerformanceData);

			console.table(userPerformanceData);


		} catch (err) {
			console.error("Error generating offline performance report", err);
		}
	}




	performanceReport = async ({ version = "tables" } = {}) => {

		const res = await axios.get(`${APIDICT.DEPLOYED_MAID}/account/report/${Settings.account_id ?? 1}`, {
			headers: {
				'Accept-Encoding': 'application/json'
			}
		});

		const feat_rules = getObjectiveFeatures();
		let userPerformanceData = await res.data;

		function parseDecimalsColumns(userPerformanceData, columns = ["week_average", "week_average_exclude_today"]) {

			for (const column of columns) {

				for (const [key, value] of Object.entries(userPerformanceData?.[column])) {
					let message = parseFloat(value.toFixed(2));
					userPerformanceData[column][key] = message;
				}
			}
			return userPerformanceData;

		}

		userPerformanceData = parseDecimalsColumns(userPerformanceData, ["week_average", "week_average_exclude_today"]);

		function updateRequirements(features_accomplished_today, feat_rules, userPerformanceData) {
			for (const [requirement_key, settings] of Object.entries(feat_rules)) {
				// Check if it requires a 'day' required performance
				if (settings.day) {
					// Then search for the performance, and give the difference between the required and the actual performed
					const day_requirement = settings.day;
					const day_performance = userPerformanceData?.["today"]?.[requirement_key] ?? 0;
					let day_difference = day_requirement - day_performance;
					if (day_difference < 0) {
						day_difference = "✅";
					}
					features_accomplished_today[`d: ${requirement_key}`] = { miss: day_difference, type: "day", req: day_requirement };


				}

				// Check if it requires a 'week' required performance
				if (settings.week) {
					// Then search for the performance, and give the difference between the required and the actual performed
					const week_requirement = settings.week;
					const week_performance = userPerformanceData?.['week_sum']?.[requirement_key] ?? 0;
					let week_difference = week_requirement - week_performance;
					if (week_difference < 0) {
						week_difference = '✅';
					}
					features_accomplished_today[`w: ${requirement_key}`] = { miss: week_difference, type: "week", req: week_requirement };
				}
			}
		}


		function filterProperties(userPerformanceData, properties = [], abreviations = { "week_sum_exclude_today": "week_sum_ex", "week_average_exclude_today": "weeK_avg_ex" }) {
			/**
			 * e.g. userPerformanceData in:
			 *  {'2023-05-20': { commits: 2, acad: 2, terms: 4 },
				today: { test: 12, tesrasd: 2, 'commits}': 6, 'terms}': 10 },
				month: {
					commits: 154,
					feat: 20,
					math_ss: 24,
					ref: 1,
					fix: 3,
					algo: 2,
					acad: 18,
					pro: 16,
					terms: 686,
					algo_w: 4,
					test: 12,
					tesrasd: 2,
					'commits}': 6,
					'terms}': 10
				}
				}
				and properties: [feat]
				should result in:
				{'2023-05-20': { feat: 20 },
				today: { feat: 20 },
				month: { feat: 20 }
				}
			*/
			// Iterate over the keys of the userPerformanceData object
			let filteredData = {};
			for (let date in userPerformanceData) {
				const naming = abreviations[date] ?? date;
				// For each key, create a new object that only contains the desired properties
				filteredData[naming] = properties.reduce((obj, prop) => {
					// If the current performance data has the current property, add it to the new object
					if (userPerformanceData[date][prop]) {
						obj[prop] = userPerformanceData[date][prop];
					}
					return obj;
				}, {});
			}

			// Return the filtered data
			return filteredData;
		}

		// Create the requirements per Day
		const feat_accomplished_until_today = {};
		updateRequirements(feat_accomplished_until_today, feat_rules, userPerformanceData);

		// Filter where only userPerformanceData that are highlighted in the table_feat show are allowed "table_feat_show": ["commits", "feat", "algo_w", "pro", "math_ss"],
		// console.log(userPerformanceData)
		let filtered_data = filterProperties(userPerformanceData, Settings.table_feat_show);

		/**
		 * 
		 * @param {Object} userPerformanceData [{feature_name: 'miss': -2, type: 'day', 'req': 3}...]
		 * @returns {Object[]} Something like this: [{ name: "STR", value: 4 }, { name: "DEX", value: 1 }, { name: "VIT", value: 6 }, { name: "INT", value: 5 }, { name: "WIS", value: 3 }, { name: "HP", value: 6 } ]
		 */
		function computeRadioDict(userPerformanceData) {
			let radioDict = [];
			for (const [feature_name, feature_data] of Object.entries(userPerformanceData)) {

				const denominator = typeof (feature_data).miss == 'number' ? feature_data.req - feature_data.miss : feature_data.req;
				let score = Math.floor((denominator / feature_data.req) * 6);
				radioDict.push({ name: feature_name, value: score ?? 6 });
			}
			return radioDict;
		}


		console.table(filtered_data);
		console.table(feat_accomplished_until_today);
		const computed_radio = computeRadioDict(feat_accomplished_until_today);
		// console.log(computed_radio);

		try {
			const radarDisplay = radar(computed_radio)
			console.log(radarDisplay.render)
			console.log(annotation(radarDisplay.labelsWithColors))

		}
		catch (err) {
			// console.log("Error in radar display", err)
		}


	}


	printUserPerformanceDataSummary(userPerformanceData) {
		// Print this month
		// This week average
		// Today data

		const STATS = ['week_average_exclude_today', 'today', 'month'];

		for (const stat of STATS) {
			this.printPerformanceStat(stat, userPerformanceData);

		}

	}

	printPerformanceStat(label, userPerformanceData) {
		let statPerformance = userPerformanceData[label]
		statPerformance = formatObjectFeatures(statPerformance)

		if (DEV_MODE) console.log(label, statPerformance);
	}




	// Features is a list of FeatureExtraction
	barChartFeatures = (data, features, lasts = 2) => {
		/**
		 * Based on the key it should identify the 
		 */
		// const LASTXCHARS = 5;
		let bars = features.map((feature) => {
			// Attempt getting that from data or return a 0 as the bar information.
			const feat_value = data.hasOwnProperty(feature.feature_name) ? data[feature.feature_name][feature.feature_key] : 0;
			const feat_name_len = feature.feature_name.length;
			const lastCharacters = lasts > feat_name_len ? 0 : feat_name_len - lasts;
			const feat_name = lasts > 0 ? feature.feature_name.substring(lastCharacters) : feature.feature_name
			const bar = { key: feat_name, value: feat_value != undefined ? feat_value : 0, style: feature.style }
			return bar;

		})
		// KEEP for debugging. It will throw error if any of the values are undefined


		if (DEV_MODE) console.log(bar(bars))

	}



	services = async () => {

		const choices = [
			// 'get_credential',
			// 'forecast_costs',
			// 'usd_to_ars',
			// 'currency_exchange',
			// 'create_credential',
			'swap_double_single_quotes'
		]

		const CHOICE_CREDENTIAL = 0, CHOICE_COSTS = 1, CHOICE_USD_TO_ARS = 2, CHOICE_CURRENCY_EXCHANGE = 3, CHOICE_CREATE_CREDENTIAL = 4, CHOICE_SWAP_QUOTES = 5;

		const multiselect = new AutoComplete({
			name: 'ServiceOption',
			message: 'What to do on services?',
			choices: choices
		})

		let serviceSelected = await multiselect.run();

		// if services == get_credi

		if (serviceSelected == choices[CHOICE_CREDENTIAL].value && Settings.account_settings.access_credentials_enabled) {

			console.log('Retrieve credentials for...')
			const creds = await axios.get(`${APIDICT.DEPLOYED_MAID}/services`, {
				headers: {
					'Accept-Encoding': 'application/json'
				}
			});
			const credentials = await creds.data;
			const cred_names = getCredentialNames(credentials)
			const credentialSelect = new AutoComplete({
				name: 'credentialSelect',
				message: 'Which Credential?',
				choices: cred_names
			})
			const credentialNameSelected = await credentialSelect.run()
			const credentialSelected = getCredentialInformation(credentials, credentialNameSelected);
			console.log(credentialSelected);
			console.log(`Password copied to clipboard, ${credentialSelected.password}`)
			try {

				clipboard.copy(credentialSelected.password)
			}
			catch (err) {
			}

			// Show credentials available

		} else if (serviceSelected == choices[CHOICE_USD_TO_ARS].value) {
			this.createConversion();
		} else if (serviceSelected == choices[CHOICE_CURRENCY_EXCHANGE].value) {
			// Prompt from what to what to exchange.

			const fromCurrency = new AutoComplete({
				name: 'fromCurrency',
				message: 'Which Currency from?',
				choices: Object.keys(constants.CURRENCY_SIMBOLS)
			})

			const toCurrency = new AutoComplete({
				name: 'toCurrency',
				message: 'Which Currency to?',
				choices: Object.keys(constants.CURRENCY_SIMBOLS)
			})

			let fromCurrencySelected = await fromCurrency.run();
			let toCurrencySelected = await toCurrency.run();

			this.createConversion(fromCurrencySelected, toCurrencySelected);

		}
		else if (serviceSelected == choices[CHOICE_CREATE_CREDENTIAL].value) {


			const question = [
				{
					type: 'input',
					name: 'name',
					message: 'Service name?'
				},
				{
					type: 'password',
					name: 'password',
					message: 'password?'
				},
				{
					type: 'input',
					name: 'account_user',
					message: 'account user?'
				}
			]

			let answers = await prompt(question)


			const dataToPost = { "name": answers.name, "password": answers.password, "account_user": answers.account_user };

			const res = await axios.post(`${APIDICT.DEPLOYED_MAID}/services`, dataToPost);
			const response_data = res.data;
			response_data.password = "*********************";
			// this.say(response_data);
			console.log("created service", response_data);
		}
		else if (serviceSelected == choices[CHOICE_SWAP_QUOTES].value) {
			let input = await Input({
				name: choices[CHOICE_SWAP_QUOTES].value,
				message: "Enter string to convert"
			});
			input.replaceAll("'", "$_'")
			input.replaceAll("\"", "$_\"")
			input.replaceAll("$_\"", "'")
			input.replaceAll("$_'", "\"")

		}
		else {
			console.log(choices[CHOICE_CREDENTIAL]);
			console.log(serviceSelected);
		}


	}



	ask = async () => {
		// Asking some random fnction

		const choices = [
			'currency symbol for...',
			// 'forecast_costs',
			// 'usd_to_ars',
			// 'currency_exchange'
		]

		const CHOICE_CURRENCY = 0;

		const multiselect = new AutoComplete({
			name: 'question',
			message: 'What do you want to know?',
			choices: choices
		})

		let serviceSelected = await multiselect.run();

		// if services == get_credi

		console.log("service Selected", serviceSelected);
		if (serviceSelected == choices[CHOICE_CURRENCY].value) {

			const currencySelect = new AutoComplete({
				name: 'currency',
				message: 'Which currency?',
				choices: Object.values(constants.CURRENCY_SIMBOLS)
			})

			let currencySelected = await currencySelect.run();
			this.say(`${currencySelected} => ${getKeyByValue(constants.CURRENCY_SIMBOLS, currencySelected)}`);

		}


	}

	async createConversion(from = 'USD', to = 'ARS') {

		var config = {
			method: 'get',
			url: `${APIDICT.CURRENCY_EXCHANGE}/convert?to=${to}&from=${from}&amount=1`,
			headers: {
				'apikey': APIDICT.CURRENCY_EXCHANGE_KEY,
				'Accept-Encoding': 'application/json'
			}

		};
		const res = await axios(config);
		const exchangeRes = await res.data
		this.say(`${from} to ${to} during ${exchangeRes.date} is around ${exchangeRes?.info?.rate} ${constants.CURRENCY_SIMBOLS[to]} per ${constants.CURRENCY_SIMBOLS[from]}`)

	}

	increasePerformance(feature_name, feature_key = 'feat', value = 1, debug = false, account_id = Settings.account_id ?? 1) {
		/**
		 * Increases the performance of a feature by the value specified.
		 * @param {str} feature_name: The name of the feature to increase
		 * @param {str} feature_key: The key of the feature to increase, e.g. 'feat', 'acad', 'pro', etc.
		 * @param {int} value: The value to increase the performance by, default 1
		 * @param {bool} debug ?= false : If to whether to debug api responses, etc.
		 * @param {int} account_id ?= 1 : The account id to increase the performance; default Settings account_id or 1
		 */
		localStorageInstance.load().then(() => {
			localStorageInstance.log_feat(feature_name, { score: value });
		}).catch((err) => {
			console.error("Error increasing performance", err);
		});

	}

	// log_skill_experience(skill_name, { score = 1, deck_id ='', deck_term = "", comment="", reattempts=0 } = {}) {
	logSkillExperience(skill_name, { score = 1, deck_id = '', deck_term = "", comment = "", reattempts = 0 } = {}) {
		localStorageInstance.load().then(() => {
			localStorageInstance.log_skill_experience(skill_name, {
				score: score,
				deck_id: deck_id,
				deck_term: deck_term,
				comment: comment,
				reattempts: reattempts
			});
		}).catch((err) => {
			console.error("Error logging skill experience", err);
		}
		);
	}

	getSkillReports({ cleanScreen = false } = {}) {
		// wait for load.
		{
			localStorageInstance.load().then(() => {
				const today = new Date().toISOString().slice(0, 10);
				const windows_n = 30;
				const windows_days_ago = new Date();
				windows_days_ago.setDate(windows_days_ago.getDate() - windows_n);
				const windows_days_ago_str = windows_days_ago.toISOString().slice(0, 10);

				if (cleanScreen) {
					this.say(`Skill Reports from ${windows_days_ago_str} -> ${today}\n`);
				}
				localStorageInstance.get_skills_reports({
					'windows_n': windows_n,
				});
			}).catch((err) => {
				console.error("Error loading skills reports", err);
			});
		}
	}

}
\nmodule.exports = { Mastery, FlashQuizzer, localStorageInstance };
