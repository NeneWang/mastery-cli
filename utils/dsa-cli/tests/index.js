// Imports TEST_DICTIONARY from helloworld.js and simple-problems.js and mergesthem into one dictionary<string, ProblemTests> object

let TEST_DICTIONARY = {}
const problem_tests_filenames = [
    'helloworld', 'simple-problems', 'neet-array', 'neet-sliding-windows', 'neet-stack', 'neet-binary-search', 'regex',
    'neet-linked-list', 'neet-trees', 'neet-tries', 'neet-heap', 'neet-backtracking', 'neet-graphs', 'neet-dp',
    'neet-intervals', 'neet-greedy'
]


// Autopopulation of tests assuming that the tests had beend defined
for (let problem of problem_tests_filenames) {
    TEST_DICTIONARY = { ...TEST_DICTIONARY, ...require(`./${problem}`) }
}




// console.log("TEST_DICTIONARY", TEST_DICTIONARY);
module.exports = { TEST_DICTIONARY };