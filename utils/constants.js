function get_random(list) {
    return list[Math.floor((Math.random() * list.length))];
}
const MAID_NAME = 'Maid';

const MAID_EMOJIS = ['genie_woman', 'elf_woman', "construction_worker_woman", "zombie_woman", "policewoman",
    'mage_woman', 'sauna_woman', 'woman_juggling', 'woman_pilot', 'woman_office_worker',
    'woman_health_worker'];

let APIDICT = {
    CHUCK: 'http://api.chucknorris.io/jokes/random',
    WEATHER: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20york?unitGroup=metric&include=days%2Cevents&key=WR8T3G2K9PYXY26YF6VCRV7YN&contentType=json',
}

const getRandomMaidEmoji = () => {
    return `:${get_random(MAID_EMOJIS)}:`
}

const appendQuotes = (message) => {
    return `"${message}"`;
}



module.exports = {
    MAID_NAME, MAID_EMOJIS, getRandomMaidEmoji,
    appendQuotes, APIDICT
};




