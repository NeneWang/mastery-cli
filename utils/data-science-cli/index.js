const problems = require("./problems.json");
const path = require("path");
const fs = require('fs');

const names = Object.keys(problems);
const temp_problem_filepath = "./problems/temp.ipynb";
// Get the data science data, and perfro

function getProblemsData(){
    return problems;
}

function getRandomProblem(){
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    return problems[randomName];
}


/**
 * Gets directory path
 * @param {str} fileimage : String containing the relative position of the image from utils directory
 * @returns {str} Formatted C:/github/testing/mastery-cli/img/unicorn.png
 */
const getDirAbsoluteUri = (fileimage = './img/unicor1n.png', subdirectory = './') => {
    // Note it should take from the root.
    const absolutePath = path.resolve(path.join(__dirname, subdirectory, fileimage)); // Note the '../' because it is inside of constants

    // const fileUrl = url.pathToFileURL(absolutePath);
    return (absolutePath.toString());
};


function copyFileToTemp(problem_file_path, { base = "./problems/" } = {}) {
    try {
        console.log("Copying file from", problem_file_path, "to", temp_problem_filepath)
        const absolute_problem_file_path = getDirAbsoluteUri(problem_file_path, base);
        const absolute_temp_file_path = getDirAbsoluteUri(temp_problem_filepath, "./");

        console.log("Absolute temporal file found at: ", absolute_temp_file_path);
        console.log("Opening file: " + absolute_problem_file_path, "from source,", problem_file_path);
        fs.readFile(absolute_problem_file_path, 'utf8', function (err, data) {
            if (err) {

                console.log(err)
                return false
            }

            fs.writeFile(absolute_temp_file_path, data, 'utf8', function (err) {
                if (err) {
                    console.log(err)
                    return false
                };

            });
        });
        return true;
    } catch (err) {
        console.error(err);
        return false;

    }
}


module.exports = {
    getProblemsData,
    getRandomProblem,
    copyFileToTemp
}


