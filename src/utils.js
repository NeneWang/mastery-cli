const chalk = require('chalk');
const axios = require('axios');
const clipboard = require('copy-paste')

const chart = require('terminal-charter')
const { exec } = require('node:child_process');
const { Toggle, Confirm, prompt, AutoComplete, Survey, Input } = require('enquirer');


const init = require('./init.js');
const constants = require('./constants.js');

const { bar, bg, annotation, radar } = chart;

const { QuizzerWithDSA } = require('./QuizzerWithDSA');
const { MAID_NAME, getRandomMaidEmoji, appendQuotes, APIDICT, CONSTANTS, get_random, formatObjectFeatures, countDecimals } = constants;
const { getMaidDirectory } = require('./utils_functions.js');

const Settings = require('./settings.js');
const SettingsManager = require('./SettingsManager.js');


const DEV_MODE = Settings.dev_mode ?? false;


const { FlashQuizzer } = require('./core/Mastery');
const { FeatureExtraction } = require('./core/FeatureExtraction');

// https://www.npmjs.com/package/chalk


const { get } = require('node:http');
const { strict } = require('node:assert');

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
 * Updates the count of times a concept has been practiced e.g. `algebra-problem-1` or 'js-how-to-loop'
 * @param {str} problem_name: The name of the problem to update
 * @param {bool} success ?= true : If to whether to increase the success count or the fail count
 * @param {bool} debug ?= false : If to whether to debug api responses, etc.
 * @param {int} account_id ?= 1 : The account id to increase the performance; default Settings account_id or 1
 * 
 * @returns {"message": f"Success updating {concept_term}, {conceptSelected.correct_times}"}
 */
updateConcept = withOnlineCheck(async (problem_name, success = true, debug = false, account_id = Settings.account_id ?? 1) => {
	const URL = `${APIDICT.DEPLOYED_MAID}/concept_metadata/${problem_name}?success=${success}&account_id=${account_id}`
	try {
		const res = await axios.post(URL)
		if (debug) console.log(res.data)
	}
	catch (err) {
		console.warn('error in updateConcept');
	}
})


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
const commitpush = () => {


	let commitMessage = process.argv[3];
	// if (debug) {
	// 	console.log(commitMessage)

	// }
	if (commitMessage == undefined || commitMessage == "") {
		commitMessage = CONSTANTS.default_commit_message;
	}

	// // If any category found then increase the score please.
	// commitCat = commitCategory(commitMessage, true);
	// // Log special categories

	// if (Settings.blog_special_commits ?? false) {
	// 	comments_to_populate = await logCommitIfSpecialCategory(commitMessage, commitCat, comments_to_populate, { print_previous_commits: true });
	// }


	// commitMessage = appendQuotes(commitMessage + " " + getRandomMaidEmoji());

	exec(`git add --all && git commit -m ${commitMessage} && git push origin HEAD `);
	console.log(`Pushed commit: ${commitMessage}`);
	return true;
}

const pushOriginHead = () => {
	exec(`git push origin HEAD `);
	return true;
}

/**
 * 
 * @param {string} term the term to search for comments
 * @param {number} count the number of comments to retrieve
 * @returns {Map<date:<date: comment>>}
 */
const getComments = async (term, count = 5) => {

	if (!Settings?.online) {
		if (!Settings?.dev_mode) {
			console.log('Offline, should not get comments');
		}
		return {}
	}

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
		return {}

	}
	return {}

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


const inreasePerformanceOffline = (feature_name, increaseBY = 1, debug = true) => {

}

module.exports = {
        getTalk,
        commitpush,
        autorelease,
        printComments,
        getToday,
        FlashQuizzer,
        commitCategory,
        logCommitIfSpecialCategory,
        postCommentFromTerm,
        getComments
};
