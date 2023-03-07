const { ProblemMetadata } = require('../structures');
const {ProblemsManager} = require('../problems-manager');

const HelloWorldProblem = new ProblemMetadata("hello-world");
const manager = new ProblemsManager();
manager.populateTemplate(HelloWorldProblem);

const result = manager.runProblem(HelloWorldProblem);
// console.log(result);


