const fs = require('fs');
const { getDirAbsoluteUri } = require('./functions');
const { TEST_DICTIONARY } = require('./tests');
const { ProblemMetadata } = require('./structures');
const { exec } = require('node:child_process');
const { getPromptDict } = require('./prompt');
const Constants = require('./constants');

const DEBUG = false;

class ProblemsManager {
    constructor({ skip_problems = [] } = {}) {
        this.problems = {};
        this.skip_problems = skip_problems;
        this.temp_problem_filepath = './user_files/temp_problem.js';
        this.solution_filepath = './solutions/';
        this.markdown_filepath = './prompt/';
        this.base_code_filepath = './base_code/';
        this.tests_filepath = './tests/';
    }


    get problemSlugs() {
        return Object.keys(this.problems);
    }


    getProblem(problemSlug) {
        return this.problems[problemSlug];
    }

    /**
     * 
     * @returns {ProblemMetadata[]} Array of all the problems in the manager.
     */
    getProblems() {
        return Object.values(this.problems);
    }

    getProblemsByCategory(category) {

        const fiteredProblemsByCategory = Object.values(this.problems).filter(problem => problem.tags.includes(category))

        return fiteredProblemsByCategory;
    }

    getProblemKeysByCategory(category) {
        return Object.keys(this.problems).filter(problem => this.problems[problem].tags.includes(category));
    }


    getTagsForProblem(problemSlug) {

        return this.problems[problemSlug]?.tags ?? [];
    }

    /**
     * Adds problem into the dictionary of problems.
     * @param {ProblemMetadata} problemMetadata Object containing the information aboutthe problem.
     */
    addProblem(problemMetadata) {
        this.problems[problemMetadata.slug] = problemMetadata;
    }


    /**
     * Populates the problems manager with the problems from the TEST_DICTIONARY.
     */
    async autoPopulateUsingTestDictionary({ skip_non_markdown = false } = {}) {

        const classifyDifficulty = (tags) => {
            if (tags == undefined || tags == null || tags?.length <= 0) return "unknown";
            if (tags.includes("easy")) return Constants.difficulty.easy;
            if (tags.includes("medium")) return Constants.difficulty.medium;
            if (tags.includes("hard")) return Constants.difficulty.hard;
        }

        const promblem_prompts = await getPromptDict(); //Gets all because no slug was passed in.
        // console.log("promblem_prompts", promblem_prompts)
        for (let problem of Object.keys(TEST_DICTIONARY)) {
            // console.log("Searching if", problem);
            const promblem_prompt = promblem_prompts[problem];
            if (promblem_prompt == undefined || promblem_prompt == null) {
                if (skip_non_markdown) continue;

                this.addProblem(new ProblemMetadata(problem));
                continue;
            };
            // console.log("promblem_prompt", promblem_prompt)


            this.addProblem(new ProblemMetadata(problem, {
                tags: promblem_prompt.tags, difficulty: classifyDifficulty(promblem_prompt.tags),
                name: promblem_prompt.title, description: promblem_prompt.description
            }));

        }
        // console.log("this.problems", this.problems)
    }

    /**
     * Returns a random problem from the problems manager.
     * @returns {Problem} A random problem from the problems manager
     */
    getRandomProblem() {
        let keys = Object.keys(this.problems);
        // Filter the porblems that are in the skip_problems list
        keys = keys.filter((key) => !this.skip_problems.includes(key));

        const randomKey = keys[Math.floor(Math.random() * keys.length)];

        return this.problems[randomKey];
    }

    /**
     * Populates the template with the code inside of problem.file_path
     * @param {dict<problem>} problem The problem to populate the template with
     */
    populateTemplate(problem) {
        this.copyFile(problem.file_path);
    }

    /**
     * Returns the right depending on the problem_metadata
     * @param {dict<ProblemMetadata>} problem_metadata 
     * @returns {ProblemTests}
     */
    selectTest(problem_metadata) {
        return TEST_DICTIONARY[problem_metadata.test_slug];
    }

    /**
     * Runs the tests for the problem and returns if all tests are passed.
     * @param {ProblemMetadata} problemMetadata The information of the problem. 
     * @returns {boolean}
     */
    async runProblem(problemMetadata) {
        if (DEBUG) console.log("Getting temp_file_path from ", this.temp_problem_filepath);
        delete require.cache[require.resolve(this.temp_problem_filepath)] // delete the cache of the file
        const { Problem } = require(this.temp_problem_filepath);

        if (DEBUG) console.log("metadata", problemMetadata.asJson);

        // const { ProblemTests } = require(this.temp_test_filepath);
        const ProblemTestsObject = this.selectTest(problemMetadata);
        // debug problemTestObject instance
        if (true) console.log("ProblemTestsObject instance: ", ProblemTestsObject);
        const problemTests = new ProblemTestsObject(Problem);
        const is_correct = problemTests.runTests(); // debug is_correct
        return is_correct;


    }

    /**
     * Copies the file from problem_file_path to the temp_problem_filepath.
     * @param {str} problem_file_path The path to the file to copy
     */
    copyFile(problem_file_path) {
        try {

            const absolute_problem_file_path = getDirAbsoluteUri(problem_file_path, "./base_code/");
            const absolute_temp_file_path = getDirAbsoluteUri(this.temp_problem_filepath, "./");


            // console.log("Opening file: " + absolute_problem_file_path, "from source,", problem_file_path);
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


    /**
     * Opens the temporal problem file in the editor (Can be customized which to use).
     * @param {str} editor_instruction The instruction to open the file in the editor. Default is "start".
     */
    async openTemporalProblemFile({ editor_instruction = "start" } = {}) {
        const absolute_temp_file_path = getDirAbsoluteUri(this.temp_problem_filepath, "./");

        await exec(`${editor_instruction} ${absolute_temp_file_path}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`Continue running`);
        });

    }

    async openSolutionFile(problem_slug, { editor_instruction = "start" } = {}) {
        const absolute_temp_file_path = getDirAbsoluteUri(this.solution_filepath + problem_slug + '.js', "./");

        await exec(`${editor_instruction} ${absolute_temp_file_path}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`Continue running`);
        });

    }



    async openBaseCodeFile(problem_slug, { editor_instruction = "start" } = {}) {
        const absolute_temp_file_path = getDirAbsoluteUri(this.base_code_filepath + problem_slug + '.js', "./");

        await exec(`${editor_instruction} ${absolute_temp_file_path}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`Continue running`);
        });

    }



    async openTestCaseFile(problem_slug, { editor_instruction = "start" } = {}) {
        const problem_metadata = this.problems[problem_slug];
        const tags = problem_metadata.tags;
        
        // Identify the correct category by filtering the Constant.PROBLEM_CATEGORIES by the tags
        const categoriesObjects = Object.values(Constants.PROBLEM_CATEGORIES);
        const categories_slugs = categoriesObjects.map(category => category.slug); //Names of the testfiles

        const categories = categories_slugs.filter(test_file_name =>
            tags.includes(test_file_name)
        ) ?? [];


        const category_slug_detected = categories.length > 0 ? categories[0] : "";

        if (category_slug_detected === "") {
            throw ("No category detected, Doesnt open any", "categories", categories);
        }

        const category_testslug = categoriesObjects.filter(category => category.slug === category_slug_detected)[0].test_problem_slug;
        console.log("Category testslug", category_testslug);
        const absolute_temp_file_path = getDirAbsoluteUri(this.tests_filepath
            + category_testslug + '.js', "./"
        );
        console.log("absolute_temp_file_path", absolute_temp_file_path);

        await exec(`${editor_instruction} ${absolute_temp_file_path}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`Continue running`);
        });

    }

    /**
     * 
     * @param {string} problem_slug The slug of the problem to open the tests case file for
     * @param {string} editor_instruction The instruction to open the file in the editor. Default is "start"
     * 
     */

    async openPromptMarkdownFile(problem_slug, { editor_instruction = "start" } = {}) {


        // Find the test_case_name

        const absolute_temp_file_path = getDirAbsoluteUri(this.markdown_filepath + problem_slug + '.md', "./");

        await exec(`${editor_instruction} ${absolute_temp_file_path}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`Continue running`);
        });
    }





}

module.exports = ProblemsManager;