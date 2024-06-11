/**
 * Mathematics for Computer Science (MIT Open Courseware): 
 * https://www.youtube.com/watch?v=L3LMbpZIKhQ&list=PLB7540DEDD482705B&ab_channel=MITOpenCourseWare
 * https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/video_galleries/video-lectures/
 * 
 * Numbers Theory: https://www.youtube.com/playlist?list=PL22w63XsKjqwAgBzVFVqZNMcVKpOOAA7c
 * 
 * Discrete MAthematics and its Applications: https://faculty.ksu.edu.sa/sites/default/files/rosen_discrete_mathematics_and_its_applications_7th_edition.pdf
 * 
 */


/**
 * Also for linear algebra and the like.
 */



const discrete_math = [
    {
        term: "How to solve the following matrix?",
        description: "[[1, 2, 3], [2, 3, 4]] x [[1, 2], [2, 3], [3, 4]]\n\n\
        [[14, 20], [20, X]]",
        prompt: "What is the value of X?",
        example: "29"

    }
]

/**
 * Best approach: To use the desmos calculator all the time. Is better for visualization instead of formula memorization.
 */
const probability = [
    {
        term: "Provide your strategy to calculate the mean of the following discrete probability distribution.",
        description: "X: [1, 2, 3, 4, 5]\nP(X): [0.1, 0.2, 0.3, 0.25, 0.15]",
        prompt: "What is the mean of this distribution?",
        example: "3.15\n\
        \[ \mu = \sum (X_i \cdot P(X_i)) \]\
        where \(X_i\) are the values of the random variable and \(P(X_i)\) are the corresponding probabilities.\
        Calculating the mean:\
        \[ \mu = (1 \cdot 0.1) + (2 \cdot 0.2) + (3 \cdot 0.3) + (4 \cdot 0.25) + (5 \cdot 0.15) \]\
        \[ \mu = 0.1 + 0.4 + 0.9 + 1 + 0.75 \]\
        \[ \mu = 3.15"
    },
    {
        term: "Calculate the variance of the following discrete probability distribution.",
        description: "X: [1, 2, 3, 4, 5]\nP(X): [0.1, 0.2, 0.3, 0.25, 0.15]\n\
        mean is 3.15, | you can assume that all variance except for x1 is 0.96",
        prompt: "What is the variance of this distribution?",
        example: "1.25\n\
        \[ \sigma^2 = (1 - 3.15)^2 * 0.1 + (2 - 3.15)^2 * 0.2 + (3 - 3.15)^2 * 0.3 + (4 - 3.15)^2 * 0.25 + (5 - 3.15)^2 * 0.15 \]\
        \[ \sigma^2 = 1.45 \]"
    },
    {
        term: "Give strategy for calculating the probability of exactly 3 events occurring in a Poisson distribution.",
        description: "The average rate (λ) is 2.5 events per interval.\n\
        Used to model the number of events occurring in a fixed interval of time or space, assuming events occur with a known constant rate and are independent.\n\
        Number of phone calls received in an hour, defects in a product,.\n\
        The Poisson probability of exactly \( k \) events is given by:\n\
        \[ P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!} \]\n\
        Feel free to chart it here: https://www.desmos.com/calculator/mlnz3udnud",
        prompt: "What is the probability of exactly 3 events occurring?",
        example: "0.2138"
    },
    {
        term: "Calculate the probability of exactly 4 successes in a binomial distribution.",
        description: "The number of trials (n) is 10 and the probability of success (p) is 0.3.\n\
        Used when there are only two possible outcomes for each trial and the probability of success is constant for each trial, such as success/failure, yes/no, etc.\n\
        Coin flips, pass/fail rates, success rates in repeated trials.\n\
        \[ P(X = k) = \binom{n}{k} p^k (1-p)^{n-k} \]\n\
        Feel free to use the desmos calculator here: https://www.desmos.com/calculator/ssjogie3ep",
        prompt: "What is the probability of exactly 4 successes?",
        example: "0.2001"
    },
    {
        term: "Calculate the probability of a score falling within a certain range in a normal distribution.",
        description: "In a standardized test, the scores are normally distributed with a mean (μ) of 500 and a standard deviation (σ) of 100.\n\
        \[ Z = \frac{X - \mu}{\sigma} \]\n\
        where:\n\
        - \(X\) is the value\n\
        - \(\mu\) is the mean\n\
        - \(\sigma\) is the standard deviation\n\
        Used to model the number of events occurring in a fixed interval of time or space, assuming events occur with a known constant rate and are independent.\n\
        Number of phone calls received in an hour, defects in a product",
        prompt: "What is the probability that a randomly selected score is between 400 and 600?",
        example: "0.6827"
    },
    {
        term: "Calculate the steady-state probabilities of a Markov Chain.",
        description: "Consider a weather system where the weather can be either Sunny (S) or Rainy (R).\n\
         The transition probabilities are given by the following matrix:\n\n\
        P = [[0.8, 0.2],\n\
             [0.6, 0.4]]\n\
        where the first row and column represent 'Sunny' and the second row and column represent 'Rainy'.",
        prompt: "What are the steady-state probabilities for the weather system?",
        example: "Calculate the Proabbility of Sunny: P(Sunny) = 0.75\n\
        - The first row represents the current state being Sunny.\n\
        - The second row represents the current state being Rainy.\n\
        - The first column represents the transition to Sunny.\n\
        - The second column represents the transition to Rainy.\n\
        The steady-state probabilities satisfy the following system of equations:\n\
        \[ \pi_S = \pi_S \cdot 0.8 + \pi_R \cdot 0.6 \]\n\
        \[ \pi_R = \pi_S \cdot 0.2 + \pi_R \cdot 0.4 \]\n\
        Additionally, the sum of the steady-state probabilities must equal 1:\n\
        \[ \pi_S + \pi_R = 1 \]\n\
        "
    },
    {
        term: "Probability of a best-of-7 series going to 7 games",
        description: "Google: Two teams play a series of games (best of 7 — whoever wins 4 games first)\n\
         in which each team has a 50% chance of winning any given round (no draws allowed).",
        prompt: "What is the probability that the series goes to 7 games?",
        example: "0.3125: To go to 7 games, each team must win 3 games in the first 6 games.\n\
         The probability of any specific sequence of 3 wins for one team and 3 wins for the other\n\
          is (0.5)^6. There are C(6,3) such sequences, where C(n, k) is the binomial coefficient. \n\
          Therefore, the probability is C(6,3) * (0.5)^6 = 20 * (0.5)^6 = 0.3125. (5/16)"
    },
    {
        term: "Probability of rolling two sixes in a row with three rolls of a die",
        description: "JP Morgan: Say you roll a die three times.",
        prompt: "What is the probability of getting two sixes in a row?",
        example: "The sequences that give two sixes in a row are: (6,6,X) and (X,6,6),\n\
         where X is any number from 1 to 6 except 6. The probability for each sequence is\n\
        (1/6)^2 * (5/6) + (5/6) * (1/6)^2 = 2 * (1/6)^2 * (5/6) = 2 * 1/36 * 5/6 = 2 * 11/216 = 0.51"
    },
    {
        term: "Probability of three dice in strictly increasing order",
        description: "Uber: You roll three dice, one after another.",
        prompt: "What is the probability that you obtain three numbers in a strictly increasing order?",
        example: "1 * 5/6 * 4/6 = 5/9 => For it to be strictly increasing 1/6"
    },
    {
        term: "Probability of drawing two cards such that one is double the other",
        description: "Zenefits: Assume you have a deck of 100 cards with values ranging from 1 to 100,\n\
         and that you draw two cards at random without replacement.",
        prompt: "What is the probability that the number of one card is precisely double that of the other?",
        example: "For each card value x, there is one corresponding card value 2x if 2x <= 100.\n\
         The number of valid pairs is 50 (1,2), (2,4), ..., (50,100). \n\
         There are a total of C(100,2) = 4950 pairs. Therefore, the probability is 50/4950 = 0.01."
    },
    // Combinatorics break.
    {
        "term": "Number of ways to arrange 5 books on a shelf",
        "description": "Imagine you have 5 different books and you want to arrange them on a shelf.\n\
         The formula to calculate permutations is \n\
         \t\tnPr = (n!) / (n-r)\n\
         , where n is the total number of items and r is the number of items to be arranged.",
        "prompt": "How many ways are there to arrange the books?",
        "example": "The number of arrangements is given by the permutation formula P(5, 5) = 5! = 120."
    },
    {
        "term": "Number of ways to select a president, vice president, and secretary from a group of 10 people",
        "description": "You have a group of 10 people, and you need to choose a president, a vice president, and a secretary. The formula to calculate permutations is nPr = (n!) / (n-r), where n is the total number of items and r is the number of items to be arranged.",
        "prompt": "How many ways can you choose the three positions?",
        "example": "The number of ways to choose is given by the permutation formula P(10, 3) = 10!/(10-3)! = 720."
    },

    {
        "term": "Number of paths from the top-left to the bottom-right corner in a 2x3 grid",
        "description": "Imagine a 2x3 grid with cells. You start at the top-left corner and want to reach the bottom-right corner by moving only right or down. The formula to calculate combinations is nCr = (n!) / (r!(n-r)!), where n is the total number of items and r is the number of items to be chosen.",
        "prompt": "How many different paths can you take?",
        "example": "The number of paths is given by the binomial coefficient C(5, 2) = 5!/(2!3!) = 10."
    },
    {
        "term": "Number of ways to form a committee of 4 members from a group of 10 people",
        "description": "You have a group of 10 people, and you want to form a committee with 4 members. The formula to calculate combinations is nCr = (n!) / (r!(n-r)!), where n is the total number of items and r is the number of items to be chosen.",
        "prompt": "How many different committees can you form?",
        "example": "The number of committees is given by the combination formula C(10, 4) = 10!/(4!6!) = 210."
    },
    {
        "term": "Number of ways to arrange the letters in the word 'BOOK'",
        "description": "You have the word 'BOOK', and you want to arrange its letters. The formula to calculate permutations is nPr = (n!) / (n-r), where n is the total number of items and r is the number of items to be arranged.",
        "prompt": "How many different arrangements are possible?",
        "example": "The number of arrangements is given by the permutation formula P(4, 4) = 4! = 24."
    },
    {
        term: "Number of paths in a 3D space from (0,0,0) to (3,3,3)",
        description: "JP Morgan: Imagine you are in a 3D space. From (0,0,0) to (3,3,3),",
        prompt: "How many paths are there if you can move only up, right, and forward?",
        example: "The number of paths is given by the multinomial coefficient C(9,3,3,3) = 9!/(3!3!3!) = 84."
    },
    {
        term: "Number of ways to distribute 8 identical balls into 4 distinct boxes",
        description: "Imagine you have 8 identical balls and 4 distinct boxes. You want to know the number of ways to distribute the balls into the boxes. \n\
         The formula to calculate combinations with repetition is C(n+r-1, r-1),\n\
         Imagine: **|***|*|** ; ***|***|*|* => The idea is to view how many ways to place this separator bars: or think what postitions 1-13 can I place the bar into?.\n\
         where n is the number of items to choose and r is the number of choices.",
        prompt: "How many ways can you distribute the 8 balls into 4 boxes?",
        example: "The number of ways is given by the combination formula with repetition: C(8+4-1, 4-1) = C(11, 3) = 11!/(3!8!) = 165."
    },
    {
        term: "Probability of having the disease given a positive test result",
        description: "Amazon: One in a thousand people have a particular disease, and the test for the disease is 98% correct\n\
         in testing for the disease. On the other hand, the test has a 1% error rate if the person being tested does not have the disease.\n\
         Bayes theorem says that: p(a|b) means Probability of A given that B is true.\n\
         P(a|b) = (P(B|A) * P(A)) / P(B)",
        prompt: "If someone tests positive, what are the odds they have the disease?",
        example: "Using Bayes' Theorem: \n\
        P(Disease|Positive) = [P(Positive|Disease) * P(Disease)] / PPositive =\n\
        \n\
        We also have that P(Disease) = P(Disease| Positive) * P(Positive) + P(Positive | No disease) * P(No disease)\n\
        P(Disease|Positive) = [P(Positive|Disease) * P(Disease)] / [P(Positive|Disease) * P(Disease) + P(Positive|No Disease) * P(No Disease)]\n\
         [0.98 * 0.001] / [0.98 * 0.001 + 0.01 * 0.999] ≈ 0.893."
    },
    {
        term: "Probability of flipping the unfair coin",
        description: "Facebook: Assume two coins, one fair (having one head and one tails) and the other unfair (having both sides tails).",
        prompt: "You pick one at random, flip it five times, and observe that it comes up as tails all five times.\n\
         What is the probability that you are flipping the unfair coin?",
        example: "Using Bayes' Theorem:\n\
        P(Unfair|5 tails) = \n\
        [P(5 tails|Unfair) * P(Unfair)] / [P(5 tails|Unfair) * P(Unfair) + P(5 tails|Fair) * P(Fair)]\n\
        = [1 * 0.5] / [1 * 0.5 + (1/2)^5 * 0.5] = 0.96875."
    },
    {
        term: "Positive product with distinct numbers",
        description: "Imagine you have the list of numbers:  -4, -3, -2, -1, 1, 2, 3, 4, 5.\n\
         You need to select 4 distinct numbers from this list such that the product of the four numbers is positive.",
        prompt: "In how many ways can the selections be made so that the product of the four numbers\n\
         is positive and the numbers are distinct?",
        example: "The number of ways is given by: Selection of all positive C(5, 4)\n\
        Select where 2 positives and 2 negatives: C(5, 2)\n\
         C(5, 4) + C(5, 2) * C(4, 2) = 5 + 10 * 6 = 65."
    },
    // {
    //     term: "Probability that Player A wins",
    //     description: "Goldman Sachs: Players A and B are playing a game where they take turns flipping \n\
    //     a biased coin, with p probability of landing on heads (and winning).\n\
    //      Player A starts the game, and then the players pass the coin back and forth until one person flips\n\
    //       heads and wins.",
    //     prompt: "What is the probability that A wins?",
    //     example: "The probability that A wins is given by summing the probabilities of all scenarios \n\
    //     where A wins: P(A wins) = p + (1-p)^2 * p + (1-p)^4 * p + ... = p / (1 - (1-p)^2) = p / (2-p)."
    // },
    // {
    //     term: "Probability that it is rainy given friends' statements",
    //     description: "Microsoft: Three friends in Seattle each told you it is rainy, and each person has a 1/3 probability of lying.",
    //     prompt: "What is the probability that Seattle is rainy, assuming that the likelihood of rain on any given day is 0.25?",
    //     example: "Using Bayes' Theorem: P(Rain|All say rainy) = [P(All say rainy|Rain) * P(Rain)] / [P(All say rainy|Rain) * P(Rain) + P(All say rainy|No Rain) * P(No Rain)] = [(2/3)^3 * 0.25] / [(2/3)^3 * 0.25 + (1/3)^3 * 0.75] = 0.524."
    // },
    // {
    //     term: "Probability that two random chords intersect",
    //     description: "Bloomberg: You draw a circle and choose two chords at random.",
    //     prompt: "What is the probability that those chords will intersect?",
    //     example: "The probability that two random chords in a circle will intersect is 1/3 or approximately 0.333. This is derived from geometric probability principles."
    // }


]



module.exports = { discrete_math, probability };



