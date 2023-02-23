"use strict";

var _require = require('./data/math_formulas'),
    qmathformulas = _require.qmathformulas;

var _require2 = require('./data/terms'),
    termJson = _require2.termJson;

var _require3 = require('./structures'),
    Term = _require3.Term,
    Terminology = _require3.Terminology,
    TermStorage = _require3.TermStorage;

var _require4 = require('./data/currency'),
    CURRENCY_SIMBOLS = _require4.CURRENCY_SIMBOLS;
/**
 * 
 * @param {List: any} list A lit of any object
 * @returns any # picks the object and returns it.
 */


function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

exports.get_random = get_random;
var MAID_NAME = "Maid";
var MAID_EMOJIS = ["genie_woman", "elf_woman", "construction_worker_woman", "zombie_woman", "policewoman", "mage_woman", "sauna_woman", "woman_juggling", "woman_pilot", "woman_office_worker", "woman_health_worker"];
exports.MAID_EMOJIS = MAID_EMOJIS;
/**
 * Memory of the people I want to be thinking on. 
 */

var PEOPLE_MEMORY = [{
  name: "Fede Liu"
}, {
  name: "Camila S"
}, {
  name: "Nancy W"
}];
var APIDICT = {
  CHUCK: 'http://api.chucknorris.io/jokes/random',
  WEATHER: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20york?unitGroup=metric&include=days%2Cevents&key=WR8T3G2K9PYXY26YF6VCRV7YN&contentType=json',
  LOCAL_MAID: 'http://127.0.0.1:8000',
  // DEPLOYED_MAID: 'http://127.0.0.1:8000',
  DEPLOYED_MAID: 'https://jmmgskxdgn.us-east-1.awsapprunner.com',
  CURRENCY_EXCHANGE: 'https://api.apilayer.com/exchangerates_data',
  CURRENCY_EXCHANGE_KEY: '3zPc7CzmznmueYsu3SttUWIE2QZ3ODYd'
}; // APIDICT.DEPLOYED_MAID = 'https://jmmgskxdgn.us-east-1.awsapprunner.com'

var CONSTANTS = {
  ACCOUNT_ID: 1,
  CUTEBLUE: '#9ccfe7',
  // Cornflower
  CUTEPINK: '#f5a9cb',
  // Lavander Pink
  PUNCHPINK: '#F25278',
  CUTEYELLOW: '#ffffc2',
  // Very Pale Yello
  CUTEPURPLE: '#977fd7' // Medium Purple

};
var termsEnabled = termJson;
module.exports = {
  MAID_NAME: MAID_NAME,
  MAID_EMOJIS: MAID_EMOJIS,
  APIDICT: APIDICT,
  CURRENCY_SIMBOLS: CURRENCY_SIMBOLS,
  CONSTANTS: CONSTANTS,
  qmathformulas: qmathformulas,
  qmathenabled: qmathformulas,
  termsEnabled: termsEnabled
};