const chalk = require('chalk');
const axios = require('axios');
const clipboard = require('copy-paste')
// const {clipboard}
// import clipboard from 'clipboardy';

const chart = require('@wangnene2/chart')
const { exec, spawn } = require('node:child_process');
const { Toggle, Confirm, prompt, AutoComplete, Survey } = require('enquirer');

const init = require('../utils/init');
const constants = require('./constants');

const { bar, scatter, bg, fg, annotation } = chart;

const { MAID_NAME, getRandomMaidEmoji, appendQuotes, APIDICT } = constants;

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

		// EXPECTED STRUCTURE
		// const barData = [
		// 	{ key: 'F', value: 7, style: bg('blue'), padding: 1 },
		// 	{ key: 'G', value: 0, style: bg('yellow') }
		// ]
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

	dayReport = () => {
		const todaydate = getToday()
		this.say(`Weather Report, ${todaydate}`)
		weatherReport();
	}

	services = async () => {

		const choices = [
			'get_credential',
			'forecast_costs',
			'usd_to_ars',
			'currency_exchange'
		]

		const CHOICE_CREDENTIAL = 0, CHOICE_COSTS = 1, CHOICE_USD_TO_ARS = 2, CHOICE_CURRENCY_EXCHANGE = 3;

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
		else {
			console.log(choices[CHOICE_CREDENTIAL])
			console.log(serviceSelected)
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
		this.say(`Dollars to ARS during ${exchangeRes.date} is around ${exchangeRes?.info?.rate} ${constants.CURRENCY_SIMBOLS[from]} per ${constants.CURRENCY_SIMBOLS[to]}`)

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

const commitpush = () => {

	let commitMessage = process.argv[3];
	console.log(commitMessage)
	if (commitMessage == undefined) {
		commitMessage = "Committed by Maid ";
	}
	commitMessage = appendQuotes(commitMessage + " " + getRandomMaidEmoji());

	exec(`git coa ${commitMessage} && git poh `);
	console.log(`Pushed to origin with commit message: ${commitMessage} <3`);
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
	Maid, getToday
};
