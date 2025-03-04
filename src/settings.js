const path = require("path");

/**
 * Gets directory path
 * @param {str} fileimage : String containing the relative position of the image from utils directory
 * @returns {str} Formatted C:/github/testing/mastery-cli/img/unicorn.png
 */
const getDirAbsoluteUri = (fileimage = './img/unicorn.png', subdirectory = './terms_data/') => {
    // Note it should take from the root.
    const absolutePath = path.resolve(path.join(__dirname, './', fileimage)); // Note the '../' because it is inside of constants

    // const fileUrl = url.pathToFileURL(abosolutePath);
    return (absolutePath.toString());
};

const absolute_settings_uri = getDirAbsoluteUri(`user_data/settings.json`);


module.exports = require(absolute_settings_uri);