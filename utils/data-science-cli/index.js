const problems = require("./problems.json");

const names = Object.keys(problems);

// Get the data science data, and perfro

function getProblemsData(){
    return problems;
}

function getRandomProblem(){
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    return problems[randomName];
}




console.log(getRandomProblem());


