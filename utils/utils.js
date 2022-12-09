const chalk = require('chalk');
const axios = require('axios');

const init = require('../utils/init');
const { exec, spawn } = require('node:child_process');

const constants = require('./constants');

const { MAID_NAME, getRandomMaidEmoji, appendQuotes, APIDICT } = constants;

// https://www.npmjs.com/package/chalk

class DayWeather {
	constructor(jsonDay) {
		this.datetime = jsonDay?.datetime;
		this.description = jsonDay?.description;
		this.isPrecipitation = jsonDay.preciptype ? true : false;
		this.probability = jsonDay.precipprob ? jsonDay.precipprob : 0;

	}
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
	}


}


class Maid {

	constructor(name = MAID_NAME, headerColor = '#1da1f2') {
		this.name = name;
		this.headerColor = headerColor;

	}

	getMaidHeader = () => {
		return `${chalk.hex(this.headerColor).inverse(` ${this.name}: `)}`;
	};

	say(message, clearOnTalk = false) {
		if (clearOnTalk) init(true);
		console.log(`${this.getMaidHeader()} ${chalk(message)}`);
	}

	dayReport = () => {
		weatherReport();
	}

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
	console.log(weatherData.days_report)


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
	Maid
};
