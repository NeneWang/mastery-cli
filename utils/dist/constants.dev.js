"use strict";

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

var MAID_NAME = 'Maid';
var MAID_EMOJIS = ['genie_woman', 'elf_woman', "construction_worker_woman", "zombie_woman", "policewoman", 'mage_woman', 'sauna_woman', 'woman_juggling', 'woman_pilot', 'woman_office_worker', 'woman_health_worker'];

var getRandomMaidEmoji = function getRandomMaidEmoji() {
  return ":".concat(get_random(MAID_EMOJIS), ":");
};

var appendQuotes = function appendQuotes(message) {
  return "\"".concat(message, "\"");
};

module.exports = {
  MAID_NAME: MAID_NAME,
  MAID_EMOJIS: MAID_EMOJIS,
  getRandomMaidEmoji: getRandomMaidEmoji,
  appendQuotes: appendQuotes
};