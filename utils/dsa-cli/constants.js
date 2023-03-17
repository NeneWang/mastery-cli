// Enumerator indicating the status of the problem e.g. solved, unsolved, aborted.

const Constants = {

    ProblemStatus: {
        solved: "solved",
        unsolved: "unsolved",
        aborted: "aborted",
    },
    difficulty: {
        easy: "easy",
        medium: "medium",
        hard: "hard",
    },
    CONSTANTS: {
        ACCOUNT_ID: 1,
        CUTEBLUE: '#9ccfe7', // Cornflower
        CUTEPINK: '#f5a9cb', // Lavander Pink
        PUNCHPINK: '#F25278',
        CUTEYELLOW: '#ffffc2', // Very Pale Yello
        CUTEPURPLE: '#977fd7', // Medium Purple
    },
    PROBLEM_CATEGORIES : {
        'neet-array': { slug: 'array', name: 'Array', tes_problem_slug: 'neet-array', order: 1 },
        'neet-sliding-windows': { slug: 'sliding-windows', name: 'Sliding Windows', tes_problem_slug: 'neet-sliding-windows', order: 2 },
        'neet-stack': { slug: 'stack', name: 'Stack', tes_problem_slug: 'neet-stack', order: 3 },
        'neet-binary-search': { slug: 'binary-search', name: 'Binary Search', tes_problem_slug: 'neet-binary-search', order: 4 },
        'neet-linked-list': { slug: 'linked-list', name: 'Linked List', tes_problem_slug: 'neet-linked-list', order: 5 },
        'neet-trees': { slug: 'binary-tree', name: 'Binary Tree', tes_problem_slug: 'neet-trees', order: 6 },
        'neet-tries': { slug: 'trie', name: 'Trie', tes_problem_slug: 'neet-tries', order: 7 },
        'neet-heap': { slug: 'heap', name: 'Heap', tes_problem_slug: 'neet-heap', order: 8 },
        'neet-backtracking': { slug: 'backtracking', name: 'Backtracking', tes_problem_slug: 'neet-backtracking', order: 9 },
        'neet-graphs': { slug: 'graphs', name: 'Graphs', tes_problem_slug: 'neet-graphs', order: 10 },
        'neet-dp': { slug: 'dp', name: 'Dynamic Programming', tes_problem_slug: 'neet-dp', order: 11 },
        'neet-intervals': { slug: 'intervals', name: 'Intervals', tes_problem_slug: 'neet-intervals', order: 12 },
        'neet-greedy': { slug: 'greedy', name: 'Greedy', tes_problem_slug: 'neet-greedy', order: 13 },
        'neet-math': { slug: 'math', name: 'Math', tes_problem_slug: 'neet-math', order: 14 },
        'neet-bits': { slug: 'bit-manipulation', name: 'Bit Manipulation', tes_problem_slug: 'neet-bits', order: 15 }
    }


}




module.exports = Constants;

