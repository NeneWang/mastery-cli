const chalk = require('chalk');
const axios = require('axios');
const clipboard = require('copy-paste')

const chart = require('terminal-charter')
const { exec } = require('node:child_process');
const { Toggle, Confirm, prompt, AutoComplete, Survey, Input } = require('enquirer');


const init = require('../utils/init');
const constants = require('./constants');

const { bar, bg, annotation, radar } = chart;

const { MAID_NAME, getRandomMaidEmoji, appendQuotes, APIDICT, CONSTANTS, get_random, formatObjectFeatures, countDecimals } = constants;
const { getMaidDirectory } = require('./utils_functions');
const DSATrainer = require('./dsa-cli/dsa-trainer');

const Settings = require('./settings.js');
const SettingsManager = require('./SettingsManager.js');


const DEV_MODE = Settings.dev_mode ?? false;


const { Quizzer: FlashQuizzer } = require(
	"./Quizzer"
);

// https://www.npmjs.com/package/chalk

class DayWeather {
	constructor(jsonDay) {
		const SNOW = "snow";
		const RAIN = "rain";

		this.datetime = jsonDay?.datetime;
		this.description = jsonDay?.description;
		this.isPrecipitation = jsonDay.preciptype ? true : false;

		this.hasSnow = this.isPrecipitation ? jsonDay.preciptype.includes(SNOW) : false;
		this.hasRain = this.isPrecipitation ? jsonDay.preciptype.includes(RAIN) : false;
		this.probability = jsonDay.precipprob ? jsonDay.precipprob : 0;
		this.day = this.datetime.slice(-2);
	}
}

const COLORWEATHERMAP = {
	snow: 'white',
	rain: 'blue',
	clear: 'yellow'
}

class WeatherInformation {
	// A wrapper for weather information. that populates itself


	constructor(jsonData) {
		this.json = jsonData;
		this.days_report = jsonData.data.days.map(
			dayJSON => {
				return new DayWeather(dayJSON)
			}
		)

		this.barData = this.days_report.slice(0, 7).map(dWeather => {
			let barColor = dWeather.isPrecipitation ? dWeather.hasSnow ? COLORWEATHERMAP.snow : COLORWEATHERMAP.rain : COLORWEATHERMAP.clear;

			const bar = { key: dWeather.day, value: dWeather.probability, style: bg(barColor) };
			return bar;

		})
		// console.log(bar(barData))
	}

	chartWeatherBar() {
		console.log(bar(this.barData));
		this.printWeatherAnnotations()
	}

	printWeatherAnnotations() {
		const notes = Object.keys(COLORWEATHERMAP).map((weatherlabel) => {
			return { key: weatherlabel, style: bg(COLORWEATHERMAP[weatherlabel]) };
		})
		console.log(annotation(notes))
	}
}


/**
 * Structure for Bar Charting
 */
class FeatureExtraction {

	constructor(feature_name, feature_key = 'feat', style = bg('white'), getDayOnly = true) {
		this.feature_name = feature_name;
		this.feature_key = feature_key;
		this.style = style;
	}
};


const { getRandomProblem, copyFileToTemp } = require('./data-science-cli/index');

class Maid {

	constructor(name = MAID_NAME, headerColor = '#1da1f2', clearOnTalk = false) {
		this.name = name;
		this.headerColor = headerColor;
		this.clearOnTalk = clearOnTalk;
		this.missing_features_today = []; //To be populated when required.
	}

	login = async () => {
		// await axios.get(`${APIDICT.DEPLOYED_MAID}/account/missing_performance_today/${Settings.account_id ?? 1}`)
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
		if (databaseSettings == {}){
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
		
		if (useRemoteDatabase){
			current_settings = databaseSettings;
		}
		
		current_settings.account_id = res.data.account_id;
		settingsManager.saveSettings(current_settings, {
			overwrite: true
		});
		


	}

	backup = () => {

	}

	getMaidHeader = () => {
		return `${chalk.hex(this.headerColor).inverse(` ${this.name}: `)}`;
	};

	say(message, clearOnTalk = this.clearOnTalk) {

		if (clearOnTalk) init(true);
		console.log(`${this.getMaidHeader()} ${chalk(message)}`);
	}

	tellCurrentDirectory = () => {
		const projectDirectory = getMaidDirectory();
		this.say(projectDirectory);
		try{
			
			clipboard.copy(projectDirectory);
		}
		catch(err){
			// console.log("Error copying to clipboard", err);
		}
	}

	runServer = () => {

		const projectDirectory = getMaidDirectory();
		const jupyter_folder = "/utils/data-science-cli/problems";

		const jupyterCommand = `jupyter notebook --notebook-dir=${projectDirectory}/${jupyter_folder}`;
		exec(jupyterCommand);
	}

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
	 * - Weather Report: A bar chart of the weather for the next 7 days
	 * - Missing Report: A list of the missing features for the day
	 * 		- If the if `ask-if-algo-missing` is true, it will ask if the user wants to run the `algo` trainer (If the user haven't completed his first algorithm in the day.)
	 */
	dayReport = async () => {


		if(!Settings?.online){
			this.say("currently offline, please visit: data\\settings.js")
			return;
		}

		const todaydate = getToday()

		if (Settings?.report_show?.performance_summary) {
			this.say(`Performance Report: ${todaydate}`, false)
			await this.performanceReport();
		}

		if (Settings?.report_show?.weather ?? false) {
			this.say(`Weather Report: ${todaydate}`, false)
			await weatherReport();
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
		function createFeaturesMap(feat_rules) {
			let feat_map = {};
			for (const [key, value] of Object.entries(feat_rules)) {
				feat_map[key] = 0;
			}
			return feat_map;
		}

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

		function visualsUpdateMap(features_accomplished_today) {
			// Do visual 
			// Consult for needed to accomplish today (as -number something or X as finished)
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
		// const feat_accomplished_until_today = createFeaturesMap(feat_rules);
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

		try{
			const radarDisplay = radar(computed_radio)
			console.log(radarDisplay.render)
			console.log(annotation(radarDisplay.labelsWithColors))

		}
		catch(err){
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
			'get_credential',
			'forecast_costs',
			'usd_to_ars',
			'currency_exchange',
			'create_credential',
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

		console.log("service Selected", serviceSelected);
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
			try{

				clipboard.copy(credentialSelected.password)
			}
			catch(err){
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

}




/**
 * Based on the speciffied feature it returns the corresponsive barcharts
 */
populateLastDaysFeaturesBarCharts = (days = 7, feature = 'feat') => {

	const lastWeekInclusive = getArrayLastXDays(days);
	const todayDay = lastWeekInclusive[lastWeekInclusive.length - 1];
	const yesterdayDay = lastWeekInclusive[lastWeekInclusive.length - 2];
	return lastWeekInclusive.map(date => {
		let bgcolor = bg('white');
		if (todayDay == date) {
			bgcolor = bg('yellow');
		} else if (date == yesterdayDay) {
			bgcolor = bg('blue');
		}
		return new FeatureExtraction(date, feature, bgcolor);
	})

}

/**
 * Expected output: {month: {}, lastweek: {}, yesterday: {}, today: {}}
 */
populateLastDaysPerformanceReport = (days = 7) => {
	const lastWeekInclusive = getArrayLastXDays(days);


}



getArrayLastXDays = (days = 7) => {
	const pastDays = [...Array(days).keys()].map(index => {
		const date = new Date();
		date.setDate(date.getDate() - (days - 1 - index));

		return date.toISOString().slice(0, 10);
	});

	// console.log(pastDays);
	return pastDays;
}

/**
Waiting for pgAdmin 4 to start... * Increase the performance of a feature; Day performances are such as commits, features, etc.
 * @param {str} feature_name: The name of the feature to increase
 * @param {int} increaseBY: The amount to increase the feature by; default 1
 * @param {bool} debug ?= false : If to whether to debug api responses, etc.; default false
 * @param {int} account_id ?= 1 : The account id to increase the performance; default Settings account_id or 1
 * 
 */
increasePerformance = async (feature_name, increaseBY = 1, debug = true, account_id = Settings.account_id ?? 1) => {
	if (!Settings?.online){
		console.log('Not online, check: utils\\constants.js');
		return
	}
	try {
		console.log(`Increasing performance ${feature_name} for ${account_id}`)
		const res = await axios.post(`${APIDICT.DEPLOYED_MAID}/day_performance/${feature_name}?increase_score=true&value=${increaseBY}&account_id=${account_id}`)
		if (debug) console.log(res.data);
	} catch (err) {
		if (debug) console.warn(err);
	}

}


/**
 * Updates the count of times a concept has been practiced e.g. `algebra-problem-1` or 'js-how-to-loop'
 * @param {str} problem_name: The name of the problem to update
 * @param {bool} success ?= true : If to whether to increase the success count or the fail count
 * @param {bool} debug ?= false : If to whether to debug api responses, etc.
 * @param {int} account_id ?= 1 : The account id to increase the performance; default Settings account_id or 1
 * 
 * @returns {"message": f"Success updating {concept_term}, {conceptSelected.correct_times}"}
 */
updateConcept = async (problem_name, success = true, debug = false, account_id = Settings.account_id ?? 1) => {
	const URL = `${APIDICT.DEPLOYED_MAID}/concept_metadata/${problem_name}?success=${success}&account_id=${account_id}`
	try {
		const res = await axios.post(URL)
		if (debug) console.log(res.data)
	}
	catch (err) {
		console.warn('error in updateConcept');
	}
}


/**
 * based on the `objectives_features` at Settings returns in the format of:
 * 
	const feat_rules = {
		terms: {
			description: "Terminologies practiced",
			week: 100
		},
		pro: {
			description: "Professional Projects",
			week: 3 * 5
		},
		feat: {
			description: "Features for personal projects",
			week: 1 * 5 + 2 * 3
		},
		acad: {
			description: "Academic Projects / Assignments / notes added",
			week: 1 * 5
		}
		...
	}
	 */
function getObjectiveFeatures() {

	const feat_rules = Settings.objectives_features ?? [];
	/** Receives in the format of:
	 * 
	 * [
		{
			"feature_key": "commits",
			"description": "The number of git commits to be done",
			"req_type": "day",
			"requirement": 3
		},
		{
			"feature_key": "feat",
			"description": "The amount of Personal Project Features to be released",
			"req_type": "week",
			"requirement": 11
		},
	 */

	// Format in the expected format.
	let feat_map = {};
	for (const feat_rule of feat_rules) {
		// connect the feature lapse to the requiremnett
		feat_map[feat_rule.feature_key] = {}
		feat_map[feat_rule.feature_key][feat_rule.req_type] = feat_rule.requirement;
	}

	return feat_map;

}

function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}

const getCredentialNames = (credentialDict) => {
	return credentialDict.map(cred => {
		return cred.name
	})
}

/**
 * Retrieves fromt the json the proper credentials as n object
 */
const getCredentialInformation = (credentialsDict, credential_name) => {

	res = credentialsDict.filter(
		(cred) => cred.name == credential_name
	)
	return res.length > 0 ? res[0] : {};
}


const getToday = () => {
	// Returns as string format: "2022/12/09" 
	return new Date().toJSON().slice(0, 10).replace(/-/g, '/');
}


const getTalk = async flags => {
	if (flags.type == 'chuck') {
		const res = await axios.get(APIDICT.CHUCK, {
			headers: {
				'Accept-Encoding': 'application/json'
			}
		});
		message = res.data.value;
	} else if (flags.type) {
		message = flags.type;
	}
	return message;
};




const weatherReport = async () => {
	const res = await axios.get(APIDICT.WEATHER, {
		headers: {
			'Accept-Encoding': 'application/json'
		}
	});
	weatherData = new WeatherInformation(res);
	// console.log(weatherData.json)
	// console.log(weatherData.days_report)
	weatherData.chartWeatherBar()


}

class CommitCategoryType {
	constructor(code, icon_list, feature_name = "") {
		this.code = code;
		this.icon_list = icon_list;

		if (feature_name == "") {
			this.features_name = code;
		} else {
			this.feature_name = feature_name;
		}

	}

	randomIcon() {
		return get_random(this.icon_list);
	}

	toString() {
		return this.code;
	}

};


const getCommitCategories = () => {
	let commitCategories = {}
	const commit_categories_settings = Settings.commit_categories ?? [];

	for (const commit_categories_setting_row of commit_categories_settings) {
		const code_key = commit_categories_setting_row.code;
		commitCategories[code_key] = new CommitCategoryType(code_key, commit_categories_setting_row.icon_list, commit_categories_setting_row.code);
	}

	return commitCategories;
}

/**
	 * Based on a term and response written by the user it should post things in the comments based on that.
		* @param {Term Structure} term_selected: The term which response was answered
		* @param {str} user_res: Response answered by the user on the terminal
		* @param {bool} debug ?= False : If to whether to debug api responses, etc.
	 */
const postCommentFromTerm = async (term_selected, user_res, debug = false) => {
	/**Expected Body Structure: for `https://jmmgskxdgn.us-east-1.awsapprunner.com/comment`
	 * {
		"account_id": 0,
		"body": "string",
		"title": "string",
		"concept_slug": "string"
		}
	 */

	if (debug) console.log("Posting comment", term_selected, user_res)


	try {

		const data = {
			'account_id': Settings.account_id ?? 1, //1
			'body': user_res ?? "",
			'title': term_selected ?? "title",
			'concept_slug': term_selected ?? "slug"
		}
		

		// axios(

		if (debug) console.log("Comment has been made", data);


	} catch (err) {
		if (debug) console.log("Probably no connection, comment has not been made")
		// if (debug) {
		// 	console.log(err)
		// }

	}
}

/**
 * Pushes to origin with a commit message
 * If it contains any of the specials categories (configurable in settings.js) it will log it in the feature (habit) database.
 * @param {bool} addMaidEmoji ?= true : If to whether to add a maid emoji
 * @param {bool} addCommitEmoji ?= true : If to whether to add a commit emoji
 
 * @param {bool} debug ?= false : If to whether to debug api responses, etc.
 * @param {List: [date: comment]} comments_to_populate ?= [] : List of comments to populate
 * 
 * @Setting {bool} log_special_categories ?= true : Setting to whether to log special categories
 * 
 * @returns {List: [date: comment]}
 * 
 */
const commitpush = async (addCommitEmoji = true, { debug = false, comments_to_populate = [] } = {}) => {


	let commitMessage = process.argv[3];
	if (debug) {
		console.log(commitMessage)

	}
	if (commitMessage == undefined) {
		commitMessage = CONSTANTS.default_commit_message;
	}




	// If any category found then increase the score please.
	commitCat = commitCategory(commitMessage, true);
	// Log special categories

	if (Settings.blog_special_commits ?? false) {
		comments_to_populate = await logCommitIfSpecialCategory(commitMessage, commitCat, comments_to_populate, { print_previous_commits: true });
	}

	// Removed await statement for hopes of faster responsee load
	increasePerformance("commits");
	if (commitCat?.code) {
		increasePerformance(commitCat.code);
		if (addCommitEmoji) commitMessage = commitMessage + " " + commitCat.randomIcon();
	}


	commitMessage = appendQuotes(commitMessage + " " + getRandomMaidEmoji());

	exec(`git add --all && git commit -m ${commitMessage} && git push origin HEAD `);
	if (true) console.log(`Pushed to origin with commit message: ${commitMessage}`);

	return { comments_to_populate: comments_to_populate, commit_category: commitCat, commit_message: commitMessage };
}

/**
 * 
 * @param {string} term the term to search for comments
 * @param {number} count the number of comments to retrieve
 * @returns {Map<date:<date: comment>>}
 */
const getComments = async (term, count = 5) => {

	if (term == undefined || term == "") {
		return {};
	}
	const URL = `${APIDICT.DEPLOYED_MAID}/comment/term/${term}?format_simple=true&limit=${count}`;
	try {
		const res = await axios.get(URl, {
			headers: {
				'Accept-Encoding': 'application/json'
			}
		}
		);

		return res;
	}
	catch (err) {
		console.log("Error in getComments", URL)

	}
	// return res.data;
}


/** 
 * Prints the comments in a nice format
 * @param {Map<date:<date: comment>>} comments e.g. [
  { '2023-04-07': 'feat: debug' },
  { '2023-04-07': 'feat: special category' }
]
*/
const printComments = (comments) => {


	for (const row in comments) {
		const obj = comments[row]
		console.log(`${chalk.hex(CONSTANTS.CUTEBLUE).inverse(`${Object.keys(obj)?.[0]} ` ?? "date")} ${Object.values(obj)?.[0] ?? "1"}`);
	}
}



/**
 * logs commit message in comments database if category is special
 * @param {string} commitMessage message to commit
 * @param {ECommitCategory} category category of the commit
 * @param {bool} print_previous_commits ?= true : If to whether to print previous commits
 * @param {bool} debug ?= false : If to whether to debug api responses, etc.
 * @returns {List: [date: comment]}
 */
const logCommitIfSpecialCategory = async (commitMessage, category, comments_to_populate = [], { print_previous_commits = true, debug = false } = {}) => {
	// if (true) console.log("Logging commit message in comments database?", category.code, special_categories, special_categories.includes(category.code))

	// Log the commit message in the comments database
	postCommentFromTerm(category.code, commitMessage);
	const res = await getComments(category?.code ?? "");
	comments_to_populate = res?.data ?? '';
	// console.log("comments_to_populate | special category", comments_to_populate)


	return comments_to_populate;

}



/**
 * 
 * @param {string} commitMessage Message to commit
 * @param {bool} strict If true, it will only detect categories when they appear followed by '|' e.g. 'feat |'
 * @returns {string} category code e.g. 'feat'
 */
const commitCategory = (commitMessage, strict = false, { debug = false } = {}) => {


	for (category of Object.values(getCommitCategories())) {
		if (debug) console.log("commitMessage", commitMessage)

		if (strict) {
			if (commitMessage.includes(category.code + " |")) {
				return category;
			}

		}
		else {
			if (commitMessage.includes(category.code)) {
				return category;
			}
		}
	}
	return ""; //No category at all.
}

const autorelease = () => {
	// Maid can auto-release herself

	let commitMessage = process.argv[3];
	if (commitMessage == undefined) {
		exec(`maid coa && make new m ="random commit"`);
	} else {

		exec(`maid coa && make new m="${commitMessage}"`);
	}
}

module.exports = {
	getTalk, commitpush, autorelease, printComments,
	Maid, getToday, FlashQuizzer, increasePerformance,
	commitCategory, logCommitIfSpecialCategory, postCommentFromTerm, getComments
};
