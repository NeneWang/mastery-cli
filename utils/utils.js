const chalk = require('chalk');
const axios = require('axios');
const clipboard = require('copy-paste')
// const {clipboard}
// import clipboard from 'clipboardy';

const chart = require('@wangnene2/chart')
const { exec, spawn } = require('node:child_process');
const { Toggle, Confirm, prompt, AutoComplete, Survey, Input } = require('enquirer');

const init = require('../utils/init');
const constants = require('./constants');

const { bar, scatter, bg, fg, annotation } = chart;
const Parser = require('expr-eval').Parser;
const parser = new Parser();

const { MAID_NAME, getRandomMaidEmoji, appendQuotes, APIDICT, CONSTANTS, get_random, formatObjectFeatures, countDecimals } = constants;

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
		this.day = this.datetime.slice(-2)


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
	}

	getMaidHeader = () => {
		return `${chalk.hex(this.headerColor).inverse(` ${this.name}: `)}`;
	};

	say(message, clearOnTalk = this.clearOnTalk) {

		if (clearOnTalk) init(true);
		console.log(`${this.getMaidHeader()} ${chalk(message)}`);
	}

	dayReport = async () => {
		const todaydate = getToday()

		this.say(`Performance Report: ${todaydate}`, false)
		await this.performanceReport();
		this.say(`Weather Report: ${todaydate}`, false)
		// console.log('Weather\n')
		weatherReport();
	}

	performanceReport = async () => {
		const res = await axios.get(`${APIDICT.DEPLOYED_MAID}/account/report/${CONSTANTS.ACCOUNT_ID}`, {
			headers: {
				'Accept-Encoding': 'application/json'
			}
		});
		const userPerformanceData = await res.data;
		// console.log(responseData)

		const dayFeaturesToExtract = populateLastDaysFeaturesBarCharts()

		this.barChartFeatures(userPerformanceData, dayFeaturesToExtract, 2);
		this.printUserPerformanceDataSummary(userPerformanceData);
		console.log('\n')
		// const { performances, username, days } = await res.data;
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
			const feat_value = data[feature.feature_name] ? data[feature.feature_name][feature.feature_key] : 0;
			const feat_name_len = feature.feature_name.length;
			const lastCharacters = lasts > feat_name_len ? 0 : feat_name_len - lasts;
			const feat_name = lasts > 0 ? feature.feature_name.substring(lastCharacters) : feature.feature_name
			const bar = { key: feat_name, value: feat_value, style: feature.style }
			return bar;

		})


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
		else if(serviceSelected == choices[CHOICE_SWAP_QUOTES].value){
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



class MathQuizer {

	constructor(qmathformulas, qmathenabled) {
		this.enabledqmathformulas = qmathenabled.map(formula_name => qmathformulas[formula_name]);
	}

	/**
	 * Picks a random question from the enabled list
	 * OUT: 
	 * - {form, replace}
	 */
	pick_question() {
		return get_random(this.enabledqmathformulas);
	};


	/**
	 * PopulateVariables using naming e.g. d_1 => digit
	 * @param {List[str]} replace : List of Strings
	 * @Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
	 */
	populateVariables(replace) {

		const variables = {}
		const variable_regex = /(\w+)_(\d)/;
		// console.log('replace', replace);
		for (const var_name of replace) {
			// console.log('var_name', var_name);
			const variabledetected = var_name.match(variable_regex);
			variables[var_name] = this.getRandomFromType(variabledetected[1]);
		}

		// console.log("populated variables", variables);
		return variables;
	}

	getRandomFromType(type) {
		const ETypes = {};
		// console.log("getRandom from type called", constants.getRandomInt(100), "using type:", type, type=="d");
		if (type == "d") {
			return constants.getRandomInt(99) + 1;
		} else if (type == "sd") {

			return constants.getRandomInt(19) + 1;
		}
	}


	/**
	 * Compiles chosen form using form and replace
	 * IN:
	 * {form, replace}
	 * OUT:
	 * - {  question_prompt (with replace replaced with numbers) , expectedAnswer}
	 */
	compile_question(question) {
		const form = question?.form;
		const replace = question?.replace;
		const calculates = question?.calculates;
		const human_form = question.human ? question.human : "";


		const variables = this.populateVariables(replace);
		var parser = new Parser();
		const humanQuestion = this.getHumanQuestion(form, variables, calculates, human_form);
		parser.evaluate(form, variables);



		return { "question_prompt": humanQuestion, "expectedAnswer": variables.y };
	};

	replaceStringVariables(formString, variables) {
		for (const variablename of Object.keys(variables)) {
			formString = formString.replace(variablename, variables[variablename]);
		}
		return formString;
	}

	getHumanQuestion(form, variables, solveFor, human_form = "") {
		let question_message = ""
		if (human_form != "") {
			question_message = this.replaceStringVariables(human_form, variables);


		} else {

			const question = this.replaceStringVariables(form, variables);
			const variablesToSolveFor = solveFor.join(" ");
			question_message = `solve for ${variablesToSolveFor}, using ${question}`;
		}

		return question_message;

	}

	/**
	 * Asks question and waits for response, allows repetition.
	 */
	async ask_question() {
		const question_form = this.pick_question();

		const ans_constraint = question_form.ans_constraint;
		let question_prompt = {};
		if (ans_constraint == undefined) {
			question_prompt = this.compile_question(question_form);
		} else {
			question_prompt = this.compile_valid_question(question_form, ans_constraint);
		}

		const quiz_allow_reattempts = 3;
		let answerIsCorrect = false;

		for (let i = 0; i < quiz_allow_reattempts; i++) {
			// console.log(question_prompt.humanQuestion);

			const question = new Input({
				name: 'ServiceOption' + i,
				message: `${question_prompt.question_prompt} attempt: ${i}`,
			})

			const res = await question.run()

			if (res == question_prompt.expectedAnswer) {
				answerIsCorrect = true;
				const _ = await increasePerformance("math_ss");
				console.log("correct!")
				break;
			}

		}

		console.log("expected Answer:", question_prompt.expectedAnswer, ", Prompt:", question_prompt.question_prompt);

		return answerIsCorrect;


	};

	/**
	 * If constraints avaialable, continue compiling the questions until it is appropriate with that contraints
	 * @param: constraint: str
	 * e.g: Gets '-.2' -> Negative Only
	 * .2 -> with two decimals
	 * +.0 -> Positive Integer 
	 */
	compile_valid_question(question_form, constraint) {
		// Basically loops until a a result fullfillls the specified constraint.

		const format_reg = /(\W?).(\d)/;
		const format_parsed = constraint.match(format_reg);
		const decimals_allowed = format_parsed[2];
		let foundProper = false;
		let questionPrompt = {};
		while (!foundProper) {
			questionPrompt = this.compile_question(question_form);
			const expectedAnswer = questionPrompt.expectedAnswer;
			const decimalCounts = countDecimals(expectedAnswer);

			// console.log(`${expectedAnswer} count is ${decimalCounts}`);
			if (decimals_allowed == 9) {
				foundProper = true;
			} else if (decimals_allowed >= decimalCounts) {
				foundProper = true;

			} else {
				;
				// console.log(`${expectedAnswer} is not proper, retrying...`);
			}
		}

		return questionPrompt;


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
	const res = await axios.post(`${APIDICT.DEPLOYED_MAID}/day_performance/${feature_name}/${increaseBY}?increase_score=true`)
	if (debug) console.log(res.data);
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
	ARCHITECTURE: new CommitCategoryType('arc', [':triangular_ruler:', ":japanese_castle:", ":factory:"]),
	ALGO: new CommitCategoryType('algo', [':herb:', ":crown:", ":japanese_goblin:"])
}

const commitpush = async (addMaidEmoji = true, addCommitEmoji = true) => {



	let commitMessage = process.argv[3];
	console.log(commitMessage)
	if (commitMessage == undefined) {
		commitMessage = "Committed by Maid ";
	}

	// If any category found then increase the score please.
	commitCat = commitCategory(commitMessage);
	if (commitCat?.code) {
		let _ = await increasePerformance("commits");
		_ = await increasePerformance(commitCat.code);
		if (addCommitEmoji) commitMessage = commitMessage + " " + commitCat.randomIcon();
	}


	commitMessage = appendQuotes(commitMessage + " " + getRandomMaidEmoji());

	exec(`git coa ${commitMessage} && git poh `);
	console.log(`Pushed to origin with commit message: ${commitMessage} <3`);
}



const commitCategory = (commitMessage, strict = false) => {
	if (strict) {
		// TODO Strictly runs with space in between?
		;
	}

	for (category of Object.values(ECommitCategory)) {
		console.log(commitMessage)
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
	getTalk, commitpush, autorelease,
	Maid, getToday, MathQuizer
};
