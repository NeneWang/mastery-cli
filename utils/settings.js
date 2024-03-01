const path = require("path");

// Import from settings.json from /data/settings.json
/**
 * Gets directory path
 * @param {str} fileimage : String containing the relative position of the image from utils directory
 * @returns {str} Formatted C:/github/testing/mastery-cli/img/unicorn.png
 */
const getDirAbsoluteUri = (fileimage = './img/unicorn.png', subdirectory = './data/') => {
    // Note it should take from the root.
    const absolutePath = path.resolve(path.join(__dirname, './data/', fileimage)); // Note the '../' because it is inside of constants

    // const fileUrl = url.pathToFileURL(abosolutePath);
    return (absolutePath.toString());
};

const absolute_settings_uri = getDirAbsoluteUri(`data/settings.json`);
let settings = {};

// Async function to load the settings from the settings.json file
(
    async () => {
        const { JsonDB, Config } = await import('node-json-db');
        try {
            const settingsDB = new JsonDB(new Config(absolute_settings_uri, true, false, '/'));
            console.log(`Loaded settings from ${absolute_settings_uri}`);
            settings = await settingsDB.getData('/');
            return true;
        } catch {
            return false;
        }
    }
)();

module.exports = settings;