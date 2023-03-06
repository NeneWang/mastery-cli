const { getFilesInDirectory, getDirAbsoluteUri } = require('../functions');
const md2json = require('markdown-to-json');
let promptsData = {};

const DEBUG = false;

let options = {
    minify: false,
    width: DEBUG ? 0 : 9000000,
    outfile: null,
};


(async () => {

    let files = await getFilesInDirectory('./prompt/');

    const absolutepath_for_files = files.map((file) => {
        return getDirAbsoluteUri(file, './prompt/');
    });

    if (DEBUG) console.log("absolutepath_for_files: ", absolutepath_for_files);

    promptsData = md2json.parse(absolutepath_for_files, options);
    if (DEBUG) console.log(files);
    promptsData = JSON.parse(promptsData);
    if (DEBUG) console.log(promptsData);

    /**
     * 
    {
        'hello-world': {
            title: 'Hello World',
            description: 'A simple hello world example',
            tags: ['sample'],
            preview: 'This is …',
            basename: 'hello-world'
        },
        'simpe-substraction': {
            title: 'Simple Substraction',
            description: 'A simple substraction example',
            tags: [ 'sample', 'math' ],
            preview: 'This is …',
            basename: 'simpe-substraction'
        },
        'simple-division': {
            title: 'Simple Division',
            description: 'A simple division example',
            tags: [ 'sample', 'math' ],
            preview: 'This is …',
            basename: 'simple-division'
        }
    }
     */


    // Return the Marked options for it as a dictionary contiing all their dataset.
})();

module.exports = promptsData;
