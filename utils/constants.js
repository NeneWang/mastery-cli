function get_random(list) {
    return list[Math.floor((Math.random() * list.length))];
}
const MAID_NAME = 'Maid';

const MAID_EMOJIS = ['genie_woman', 'elf_woman', "construction_worker_woman", "zombie_woman", "policewoman",
    'mage_woman', 'sauna_woman', 'woman_juggling', 'woman_pilot', 'woman_office_worker',
    'woman_health_worker'];

const getRandomMaidEmoji = () => {
    return `:${get_random(MAID_EMOJIS)}:`
}

const appendQuotes = (message) => {
    return `"${message}"`;
}

module.exports = {
    MAID_NAME, MAID_EMOJIS, getRandomMaidEmoji,
    appendQuotes
};
