
const chalk = require('chalk')
const axios = require('axios')

const constants = require('./constants');

const { MAID_NAME } = constants;

// https://www.npmjs.com/package/chalk

const getMaidHeader = () => {
    return `${chalk.hex("#1da1f2").inverse(` ${MAID_NAME}: `)}`
}


const getTalk = async (flags) => {
    if (flags.type == "chuck") {
        const res = await axios.get('http://api.chucknorris.io/jokes/random', {
            headers: {
                'Accept-Encoding': 'application/json',
            }
        });
        message = res.data.value;

    }
    else if (flags.type) {

        message = flags.type;
    }
    return message;
}

module.exports = { getMaidHeader, getTalk }