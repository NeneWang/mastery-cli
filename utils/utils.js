const chalk = require('chalk');
const axios = require('axios');
const chart = require('@wangnene2/chart')
const { exec, spawn } = require('node:child_process');

const init = require('../utils/init');
const constants = require('./constants');

const { bar, scatter, bg, fg } = chart;

const { MAID_NAME, getRandomMaidEmoji, appendQuotes, APIDICT } = constants;

// https://www.npmjs.com/package/chalk

class DayWeather {
	constructor(jsonDay) {
		const SNOW = "snow";
		const RAIN = "rain";

		this.datetime = jsonDay?.datetime;
		this.description = jsonDay?.description;
		this.isPrecipitation = jsonDay.preciptype ? true : false;

		this.hasSnow = this.isPrecipitation? jsonDay.preciptype.includes(SNOW): false;
		this.hasRain = this.isPrecipitation? jsonDay.preciptype.includes(RAIN): false;
		this.probability = jsonDay.precipprob ? jsonDay.precipprob : 0;
		this.day = this.datetime.slice(-2)


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

		// EXPECTED STRUCTURE
		// const barData = [
		// 	{ key: 'F', value: 7, style: bg('blue'), padding: 1 },
		// 	{ key: 'G', value: 0, style: bg('yellow') }
		// ]
		this.barData = this.days_report.slice(0, 7).map(dWeather => {
			let barColor = dWeather.isPrecipitation ? dWeather.hasSnow ? 'white' : 'blue' : 'yellow';
			


			const bar = {key: dWeather.day, value: dWeather.probability, style: bg(barColor)};
			return bar;

		})
		// console.log(bar(barData))
	}

	chartWeatherBar(){
		console.log(bar(this.barData));
	}
}


class Maid {

	constructor(name = MAID_NAME, headerColor = '#1da1f2', clearOnTalk=false) {
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

}



const getToday = () => {
	// Returns as string format: "2022/12/09" 
	return new Date().toJSON().slice(0,10).replace(/-/g,'/'); 
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
