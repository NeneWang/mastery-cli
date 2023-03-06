const path = require("path");
const url = require('url');
const fs = require('fs');
const { marked } = require('marked');
const TerminalRenderer = require('marked-terminal');
const Constants = require("./constants");

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
const getDirAbsoluteUri = (fileimage = './img/unicorn.png', subdirectory = './') => {
    // Note it should take from the root.
    const absolutePath = path.resolve(path.join(__dirname, subdirectory, fileimage)); // Note the '../' because it is inside of constants

    // const fileUrl = url.pathToFileURL(absolutePath);
    return (absolutePath.toString());
};

const getFilesInDirectory = async (directoryPath = './data/priorities') => {
    const absolutePath = path.resolve(path.join(__dirname, directoryPath));

    console.log("Fetching from: ", absolutePath);

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


const renderPromptDescription = (prompt) => {
    const Constants =  require("./constants");
    const chalk = require("chalk");
    marked.setOptions({
        renderer: new TerminalRenderer()
    });
    // Print title in Blue
    console.log(`${chalk.hex(Constants.CONSTANTS.CUTEBLUE)(prompt?.["title"] ?? "")}`)
    console.log(marked(prompt?.["description"] ?? ""));
};


module.exports = {
    getAbsoluteUri, getDirAbsoluteUri, appendQuotes, formatObjectFeatures, getRandomInt,
    getRandomBool, countDecimals, show_image, getMaidDirectory, getFilesInDirectory, renderPromptDescription
};
