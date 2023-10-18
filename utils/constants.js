const { qmathformulas } = require('./data/math_formulas');
const { termJson } = require('./data/terms');
const { Term, Terminology, TermStorage } = require('./structures');
const { CURRENCY_SIMBOLS } = require('./data/currency.js');

const path = require("path");
const url = require('url');

// console.log("CURRENCY_SIMBOLS", CURRENCY_SIMBOLS);
/**
 * 
 * @param {List: any} list A lit of any object
 * @param {int: count} count The number of random objects to pick from the list. Default is 1.
 * @returns any # picks the object and returns it. | If however the specified count of random objects is greater than the list, then it will return a list of random elements of that size.
 */
function get_random(list) {
    return list[Math.floor((Math.random() * list.length))];
}

/**
 * 
 * @param {List: any} list A lit of any object
 * @param {int} count The number of random objects to pick from the list. Default is 1.
 * @returns {List: any} # picks the object and returns it. | If however the specified count of random objects is greater than the list, then it will return a list of random elements of that size.
 */
function get_random_of_size(list, { count = 1 } = {}) {

    const listOfRandomProblems = [];
    for (let i = 0; i < count; i++) {
        listOfRandomProblems.push(list[Math.floor((Math.random() * list.length))]);
    }

    return listOfRandomProblems;

}
const MAID_NAME = "Buttler";

// const MAID_EMOJIS = ["genie_woman", "elf_woman", "construction_worker_woman", "zombie_woman", "policewoman",
//     "mage_woman", "sauna_woman", "woman_juggling", "woman_pilot", "woman_office_worker",
//     "woman_health_worker"];
const MAID_EMOJIS = ["", ""]


let APIDICT = {
    CHUCK: 'http://api.chucknorris.io/jokes/random',
    WEATHER: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20york?unitGroup=metric&include=days%2Cevents&key=WR8T3G2K9PYXY26YF6VCRV7YN&contentType=json',
    LOCAL_MAID: 'http://127.0.0.1:8000',
    // DEPLOYED_MAID: 'http://127.0.0.1:8000',
    DEPLOYED_MAID: 'https://jmmgskxdgn.us-east-1.awsapprunner.com',
    CURRENCY_EXCHANGE: 'https://api.apilayer.com/exchangerates_data',
    CURRENCY_EXCHANGE_KEY: '3zPc7CzmznmueYsu3SttUWIE2QZ3ODYd'
}

// APIDICT.DEPLOYED_MAID = 'https://jmmgskxdgn.us-east-1.awsapprunner.com'

let CONSTANTS = {
    ACCOUNT_ID: 1,
    CUTEBLUE: '#9ccfe7', // Cornflower
    CUTEPINK: '#f5a9cb', // Lavander Pink
    PUNCHPINK: '#F25278',
    CUTEYELLOW: '#ffffc2', // Very Pale Yello
    CUTEPURPLE: '#977fd7', // Medium Purple
    online: true,
    default_commit_message: "Commited by Maid",
    algo_name: 'algo', // tag being used to identify if an algorithm had been solved that day.
}


/**
 * Gets clickeable path that could be printed on the console and clicked.
 * @param {str} fileimage : String containing the relative position of the image from utils directory
 * @returns {str} Formatted file:///C:/github/testing/mastery-cli/img/unicorn.png
 */
const getAbsoluteUri = (fileimage = './img/unicorn.png', subdirectory = './data/') => {
    // Note it should take from the root.
    const absolutePath = path.resolve(path.join(__dirname, './data/', fileimage)); // Note the '../' because it is inside of constants
    const fileUrl = url.pathToFileURL(absolutePath);
    return (fileUrl.toString());
}


/**
 * Gets directory path
 * @param {str} fileimage : String containing the relative position of the image from utils directory
 * @returns {str} Formatted file:///C:/github/testing/mastery-cli/img/unicorn.png
 */
const getDirAbsoluteUri = (fileimage = './img/unicorn.png', subdirectory = './data/') => {
    // Note it should take from the root.
    const absolutePath = path.resolve(path.join(__dirname, './data/', fileimage)); // Note the '../' because it is inside of constants
    // const fileUrl = url.pathToFileURL(absolutePath);
    return (absolutePath.toString());
}



// https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}

const getRandomMaidEmoji = () => {
    return `:${get_random(MAID_EMOJIS)}:`
}

const appendQuotes = (message) => {
    return `"${message}"`;
}


const formatLastTwoDecimals = (original) => {
    return (Math.round(original * 100) / 100);
}

const formatObjectFeatures = (userPerformanceData) => {
    for (const feat of Object.keys(userPerformanceData)) {
        userPerformanceData[feat] = formatLastTwoDecimals(userPerformanceData[feat]);
    }
    return userPerformanceData;
}


const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

/**
 * @param: float ?= 0.05 #e.g. 0.5 The chances in favor of it being True
 * @returns Random Bool 
 */
const getRandomBool = (chances = 0.5) => {
    // 0.01 means 1% chance of being true
    return random_boolean = Math.random() < chances;
}

function populateTerms(termJson) {
    return termJson.map(obj => new Term(obj?.term ?? "", obj?.example ?? "", obj?.description ?? "", obj?.prompt ?? "", obj?.references ?? "", obj?.category ?? "", obj?.attachment));
}

const terms = populateTerms(termJson);


const termStorage = new TermStorage(terms);
const termsEnabled = termStorage.jsonTerms

const getQmathEnabled = (listOfProblemSets, debugLast = false, lasts = 0) => {
    let qmathEnabled = []
    for (problemSet of listOfProblemSets) {
        qmathEnabled = qmathEnabled.concat(problemSet)
    }

    // For debugging purposes
    if (lasts > 0) return qmathEnabled.slice(-lasts)
    if (debugLast) return [qmathEnabled.at(qmathEnabled.length - 1)]
    return qmathenabled;
}



const countDecimals = (value) => {
    if (Math.floor(value) !== value)
        return value?.toString().split(".")[1].length ?? 0;
    return 0;
}

module.exports = {
    MAID_NAME, MAID_EMOJIS, getRandomMaidEmoji, get_random,
    appendQuotes, APIDICT, CURRENCY_SIMBOLS, CONSTANTS, formatObjectFeatures,
    qmathformulas, qmathenabled: qmathformulas, getRandomInt, countDecimals, termsEnabled, getRandomBool, getAbsoluteUri, getDirAbsoluteUri,
    get_random_of_size
};




