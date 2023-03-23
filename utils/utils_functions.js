const path = require("path");
const url = require('url');
const fs = require('fs');
const { get_random, MAID_EMOJIS } = require("./constants");
const DEBUG = false;

/**
 * Gets clickeable path that could be printed on the console and clicked.
 * @param {str} fileimage : String containing the relative position of the image from utils directory
 * @returns {str} Formatted file:///C:/github/testing/maid-cli/img/unicorn.png
 */
const getAbsoluteUri = (fileimage = './img/unicorn.png', subdirectory = './data/') => {
    // Note it should take from the root.
    const absolutePath = path.resolve(path.join(__dirname, './data/', fileimage)); // Note the '../' because it is inside of constants
    const fileUrl = url.pathToFileURL(absolutePath);
    return (fileUrl.toString());
};


/**
 * Gets directory path
 * @param {str} fileimage : String containing the relative position of the image from utils directory
 * @returns {str} Formatted C:/github/testing/maid-cli/img/unicorn.png
 */
const getDirAbsoluteUri = (fileimage = './img/unicorn.png', subdirectory = './data/') => {
    // Note it should take from the root.
    const absolutePath = path.resolve(path.join(__dirname, './data/', fileimage)); // Note the '../' because it is inside of constants

    // const fileUrl = url.pathToFileURL(absolutePath);
    return (absolutePath.toString());
};

const getFilesInDirectory = (directoryPath = './data/priorities') => {
    const absolutePath = path.resolve(path.join(__dirname, directoryPath));

    if (DEBUG) console.log("Fetching from: ", absolutePath);

    return new Promise((resolve, reject) => {
        fs.readdir(absolutePath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}



const getMaidDirectory = () => {
    // Note it should take from the root.
    const absolutePath = path.resolve(path.join(__dirname, '../'));
    return (absolutePath.toString());
};

async function show_image(image_file, { is_url = false } = {}) {
    // let ima
    let image_file_dir = is_url ? image_file : getDirAbsoluteUri(image_file);
    try {
        if (is_url) {

            const { default: terminalImage } = await import('terminal-image');
            const fetch = require('node-fetch');
            const response = await fetch(image_file_dir);
            const buffer = await response.arrayBuffer();
            const image = await terminalImage.buffer(Buffer.from(buffer));
            console.log(image);
        } else {

            //If it is not url, finds the absolute path of the local file
            const fs = await import('fs').then((mod) => mod.promises);
            const { default: terminalImage } = await import('terminal-image');
            // console.log("reading from path: " + image_file_dir)node
            const data = await fs.readFile(image_file_dir);
            const image = await terminalImage.buffer(data);
            console.log(image);
        }
    }
    catch (err) {
        console.log("Error while attempting to fetch image", err, image_file_dir);
    }
};

// https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}
const getRandomMaidEmoji = () => {
    return `:${get_random(MAID_EMOJIS)}:`;
};
const appendQuotes = (message) => {
    return `"${message}"`;
};
const formatLastTwoDecimals = (original) => {
    return (Math.round(original * 100) / 100);
};
const formatObjectFeatures = (userPerformanceData) => {
    for (const feat of Object.keys(userPerformanceData)) {
        userPerformanceData[feat] = formatLastTwoDecimals(userPerformanceData[feat]);
    }
    return userPerformanceData;
};
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};
/**
 * @param: float ?= 0.05 #e.g. 0.5 The chances in favor of it being True
 * @returns Random Bool
 */
const getRandomBool = (chances = 0.5) => {
    return random_boolean = Math.random() < chances;
};
const countDecimals = (value) => {
    if (Math.floor(value) !== value)
        return value?.toString().split(".")[1].length ?? 0;
    return 0;
};


/**
 * Returns whether the user wants to exit.
 * @param {str} res : User input
 * @returns {boolean} : True if user wants to exit, false otherwise
 */
const user_requests_exit = (res) => {
    return (res == "exit" || res == "quit" || res == "q" || res == "!")
}

/**
 * Returns whether the user wants to open a calculator node. (for now a js node would work.)
 * @param {str} res : User input
 * @returns {boolean} : True if user wants to calculate, false otherwise
 */
const user_requests_calc = (res) => {
    return (res == "calc")
}

/**
 * Returns whether the user wants to skip the problem.
 * @param {boolean} res : User input
 * @returns {boolean} : True if user wants to skip, false otherwise
 */
const user_requests_skip = (res) => {
    return (res == "skip" || res == "s" || res == "next" || res == "n" || res == "no" || res == "")
}



/**
 * Prints the content as markdown if it is markdown, otherwise it will just print the content
 * @param {string} content The String content that can be either markdown or not, determined by :m
 * @param {boolean} use_markdown If true then it will use markdown, if false then it will just print the content
 * @param {string} markdown_token The token that determines if the content is markdown or not
 */
function printMarked(content, { use_markdown = true, markdown_token = ":m" } = {}) {
    if (use_markdown) {
        // Check if the description starts with :m
        if (content.startsWith(markdown_token)) {

            if (DEBUG)
                console.log("markdown detected");
            // Remove the :m
            content = content.substring(2);


            console.log(marked(content));
        } else {
            console.log(`${content}\n`);
        }
    } else {

        console.log(`${content}\n`);
    }
}


module.exports = {
    getAbsoluteUri, getDirAbsoluteUri, getRandomMaidEmoji, appendQuotes, formatObjectFeatures, getRandomInt,
    getRandomBool, countDecimals, show_image, getMaidDirectory, getFilesInDirectory, user_requests_exit,
    user_requests_skip, user_requests_calc, printMarked
};
