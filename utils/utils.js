const chalk = require('chalk');
const axios = require('axios');
const clipboard = require('copy-paste')

const chart = require('@wangnene2/chart')
const { exec } = require('node:child_process');
const { Toggle, Confirm, prompt, AutoComplete, Survey, Input } = require('enquirer');
const { CSVAssistant } = require('./csvAssistant');

const init = require('../utils/init');
const constants = require('./constants');

const { bar, bg, annotation } = chart;
const Parser = require('expr-eval').Parser;
const parser = new Parser();

const { MAID_NAME, getRandomMaidEmoji, appendQuotes, APIDICT, CONSTANTS, get_random, formatObjectFeatures, countDecimals } = constants;
const { getMaidDirectory } = require('./utils_functions');
const DSATrainer = require('./dsa-cli/dsa-trainer');

const Settings = require('./settings.js');

const { Quizzer: FlashQuizzer } = require(
	"./Quizzer"
);
const Constants = require('./dsa-cli/constants');

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
		// console.log('notes', notes);
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

class Maid {

	constructor(name = MAID_NAME, headerColor = '#1da1f2', clearOnTalk = false) {
		this.name = name;
		this.headerColor = headerColor;
		this.clearOnTalk = clearOnTalk;
		this.missing_features_today = []; //To be populated when required.
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
		clipboard.copy(projectDirectory);
	}

	tellPriorities = async () => {
		const csvAssistant = new CSVAssistant();
		this.say('Prioritize a Page');
		const priotizableFiles = await csvAssistant.getFilesInPriorities();


		const multiselectPriorityFiles = new AutoComplete({
			name: 'chooseFile',
			message: 'Choose file to show priority',
			choices: priotizableFiles
		});

		let fileSelected = await multiselectPriorityFiles.run();
		const POPULATEONTEMPORAL = false;
		const TEMPORAL_PATH = "priorities/temp.csv";
		const SELECTEDFILE_PATH = "priorities/" + fileSelected;
		const TOP_X_PRIORITIES = 3;
		// Print the priorities (also populate it on a temp file.)
		const topPriorities = await csvAssistant.getTopPriorities(SELECTEDFILE_PATH,
			{
				saveAs: POPULATEONTEMPORAL ? TEMPORAL_PATH : SELECTEDFILE_PATH, filterTop: TOP_X_PRIORITIES
			});

		console.log(`Top ${TOP_X_PRIORITIES} priorities for `, chalk.hex(CONSTANTS.CUTEBLUE).inverse(fileSelected));
		console.log(topPriorities);

	}

	/**
	 * Cleans the terminal
	 */
	cleanTerminal = () => {
		console.clear();
	}

	// Prompts y/n question to clean, if y, cleans.
	askToClean = async () => {
		this.say("Would you like me to clean up the terminal?", false)

		// const response = question('clean', 'y/n', { type: 'confirm' });
		const cleanPrompt = new Confirm("Clean", { initial: true });
		const response = await cleanPrompt.run();
		console.log(response)
		if (response) {
			this.cleanTerminal();
		}

	}

	dayReport = async () => {
		const todaydate = getToday()

		if (Settings?.report_settings?.performance_summary) {
			this.say(`Performance Report: ${todaydate}`, false)
			await this.performanceReport();

		}

		if (Settings?.report_settings?.whether) {
			this.say(`Weather Report: ${todaydate}`, false)
			// console.log('Weather\n')
			const _ = await weatherReport();
		}

		if (Settings?.report_settings?.missing_report) {
			this.say(`Missing Report: ${todaydate}, dsa enabled: ${true}`, false)
			await this.provideMissingReport({ run_dsa: true });
		}
	}

	/**
	 * Prints the missing objectives
	 * !important: To prepopulate the msising report first!!
	 */
	provideMissingReport = async ({ run_dsa = false } = {}) => {
		try {
			if (!this.missingFeatReport) {
				const _ = await this.populateMissingReport();
			}
			// console.log("Missing Feats: ", this.missingFeatReport?.length??123);
			const missingFeatReport = this.missingFeatReport;
			if (missingFeatReport ?? false) {
				console.log("Missing Reports Missing: received: ", missingFeatReport ?? "")
			}
			const missingFormatedAsStr = this.missingFeatReport.join(", ")
			console.log(`${chalk.hex(CONSTANTS.PUNCHPINK).inverse(` Missing: ${missingFormatedAsStr}  `)}`)
			if (run_dsa) {

				await this.requests_if_run_dsa_trainer(this.missingFeatReport);
			}
		}
		catch (err) {
			console.log("Error in provideMissingReport", err)
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
			const dsaPrompt = new Confirm("Daily DSA Missing run algorithms?", { initial: true });
			console.log("Daily DSA Missing run algorithms?")
			const response = await dsaPrompt.run();
			if (response) {


				const dsaTrainer = new DSATrainer();

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
			const res = await axios.get(`${APIDICT.DEPLOYED_MAID}/account/missing_performance_today/${CONSTANTS.ACCOUNT_ID}`)
			this.missingFeatReport = res.data;
		}
		catch (err) {
			if (Settings.show_http_errors) {

				console.log(err);
			}
		}
	}


	performanceReport = async ({ version = "tables" } = {}) => {

		const res = await axios.get(`${APIDICT.DEPLOYED_MAID}/account/report/${CONSTANTS.ACCOUNT_ID}`, {
			headers: {
				'Accept-Encoding': 'application/json'
			}
		});

		const feat_rules = {
			commits: {
				day: 3,
			},
			math_ss: {
				day: 1,
			},
			algo_w: {
				description: "Weighted algorithms\n\
				easy: 1\n\
				medium: 2\n\
				hard: 4\n",
				week: 7
			},
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
		}

		let userPerformanceData = await res.data;

		function parseDecimalsColumns(userPerformanceData, columns = ["week_average", "week_average_exclude_today"]) {

			for (const column of columns) {

				for (const [key, value] of Object.entries(userPerformanceData?.[column])) {
					userPerformanceData[column][key] = parseFloat(value.toFixed(2));
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
					const day_difference = day_requirement - day_performance;
					features_accomplished_today[`d: ${requirement_key}`] = { miss: day_difference, type: "day", req: day_requirement };


				}

				// Check if it requires a 'week' required performance
				if (settings.week) {
					// Then search for the performance, and give the difference between the required and the actual performed
					const week_requirement = settings.week;
					const week_performance = userPerformanceData?.['week_sum']?.[requirement_key] ?? 0;
					const week_difference = week_requirement - week_performance;
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
		// console.log(filtered_data)

		console.table(filtered_data);
		console.table(feat_accomplished_until_today);

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
		console.log(label, statPerformance);
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
		// console.log("bars used:", bars)

		console.log(bar(bars))

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
		if (serviceSelected == choices[CHOICE_CREDENTIAL].value) {

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
			clipboard.copy(credentialSelected.password)

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


increasePerformance = async (feature_name, increaseBY = 1, debug = false) => {
	try {
		const res = await axios.post(`${APIDICT.DEPLOYED_MAID}/day_performance/${feature_name}?increase_score=true&value=${increaseBY}`)
		if (debug) console.log(res.data);
	} catch (err) {
		if(debug) console.warn(err);
	}

}

updateConcept = async (problem_name, success = true, debug = false) => {
	try {
		const res = await axios.post(`${APIDICT.DEPLOYED_MAID}/concept_metadata/${problem_name}?success=${success}`)
		if (debug) console.log(res.data)
	}
	catch (err) {
		console.warn(err);
	}
}



function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}

const getCredentialNames = (credentialDict) => {
	return credentialDict.map(cred => {
		return cred.name
	})
}

const getCredentialInformation = (credentialsDict, credential_name) => {
	/**
	 * Retrieves fromt he json the proper credentials as n object
	 */

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

let ECommitCategory = {
	FEAT: new CommitCategoryType('feat', [':tada:', ':santa:', ':gift:']),
	FIX: new CommitCategoryType('fix', [':hammer:', ':shipit:', ':ambulance:']),
	REFACTOR: new CommitCategoryType('ref', [':ghost:', ':pencil2:'], feature_name = "Refactoring"),
	ACADEMY: new CommitCategoryType('acad', [':triangular_ruler:', ":japanese_castle:", ":factory:"]),
	ALGO: new CommitCategoryType('algo', [':herb:', ":crown:", ":japanese_goblin:"]),
	PROJECT: new CommitCategoryType('pro', [":crown:"])
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
			'account_id': CONSTANTS.ACCOUNT_ID ?? 1, //1
			'body': user_res ?? "",
			'title': term_selected ?? "title",
			'concept_slug': term_selected ?? "slug"
		}

		axios({
			method: 'post',
			url: `${APIDICT.DEPLOYED_MAID}/comment`,
			headers: {},
			data: data
		});

		if (debug) console.log("Comment has been made", data);


	} catch (err) {
		if (debug) console.log("Probably no connection, comment has not been made")
		if (debug) {
			console.log(err)
		}

	}
}

const commitpush = async (addMaidEmoji = true, addCommitEmoji = true, { log_special_categories = true, debug = false, comments_to_populate = [] } = {}) => {



	let commitMessage = process.argv[3];
	if (debug) {
		console.log(commitMessage)

	}
	if (commitMessage == undefined) {
		commitMessage = CONSTANTS.default_commit_message;
	}


	// If any category found then increase the score please.
	commitCat = commitCategory(commitMessage);
	// Log special categories

	if (log_special_categories) {
		logCommitIfSpecialCategory(commitMessage, commitCat, {comments_to_populate:comments_to_populate, printComments: false});
	}


	// Removed await statement for hopes of faster responsee load
	increasePerformance("commits");
	if (commitCat?.code) {
		increasePerformance(commitCat.code);
		if (addCommitEmoji) commitMessage = commitMessage + " " + commitCat.randomIcon();
	}


	commitMessage = appendQuotes(commitMessage + " " + getRandomMaidEmoji());

	exec(`git add --all && git commit -m ${commitMessage} && git push origin HEAD `);
	if (debug) console.log(`Pushed to origin with commit message: ${commitMessage}`);

}

/**
 * 
 * @param {string} term the term to search for comments
 * @param {number} count the number of comments to retrieve
 * @returns {Map<date:<date: comment>>}
 */
const getComments = async (term, count = 5) => {

	// let res = [];
	// await axios.get(`${APIDICT.DEPLOYED_MAID}/comment/term/${term}?format_simple=true&limit=${count}`, {
	// 	headers: {
	// 		'Accept-Encoding': 'application/json'
	// 	}
	// }).then(results => res = results.data).catch(err => console.log(err));

	// Do it with await syntax as well
	const res = await axios.get(`${APIDICT.DEPLOYED_MAID}/comment/term/${term}?format_simple=true&limit=${count}`, {
		headers: {
			'Accept-Encoding': 'application/json'
		}
	}
	);

	return res;
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
 * @param {ECommitCategory[]} special_categories ?= [ECommitCategory.ACADEMY.code, ECommitCategory.ALGO.code, ECommitCategory.FEAT.code, ECommitCategory.PROJECT.code] : Special categories to log
 * @param {bool} debug ?= false : If to whether to debug api responses, etc.
 * @returns {void}
 */
const logCommitIfSpecialCategory = async (commitMessage, category, { print_previous_commits = true, comments_to_populate=[], special_categories = [ECommitCategory.ACADEMY.code, ECommitCategory.ALGO.code, ECommitCategory.FEAT.code, ECommitCategory.PROJECT.code], debug = false } = {}) => {
	// if (true) console.log("Logging commit message in comments database?", category.code, special_categories, special_categories.includes(category.code))
	if (special_categories.includes(category.code)) {
		// Log the commit message in the comments database
		postCommentFromTerm(category.code, commitMessage);
		const res = await getComments(category?.code ?? "log");
		comments_to_populate = res.data;
		if (print_previous_commits) {
			// if (true) console.log("Printing previous commit")
			// Print previous commits
			// console.log("res received", res.data);
			printComments(comments_to_populate);
		}
	}

}



const commitCategory = (commitMessage, strict = false, { debug = false } = {}) => {
	if (strict) {
		// TODO Strictly runs with space in between?
		;
	}

	for (category of Object.values(ECommitCategory)) {
		if (debug) console.log("commitMessage", commitMessage)
		if (commitMessage.includes(category.code)) {
			return category;
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
