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
        answer: "29"

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
        answer: "3.15\n\
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
        answer: "1.25\n\
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
        answer: "0.2138"
    },
    {
        term: "Calculate the probability of exactly 4 successes in a binomial distribution.",
        description: "The number of trials (n) is 10 and the probability of success (p) is 0.3.\n\
        Used when there are only two possible outcomes for each trial and the probability of success is constant for each trial, such as success/failure, yes/no, etc.\n\
        Coin flips, pass/fail rates, success rates in repeated trials.\n\
        \[ P(X = k) = \binom{n}{k} p^k (1-p)^{n-k} \]\n\
        Feel free to use the desmos calculator here: https://www.desmos.com/calculator/ssjogie3ep",
        prompt: "What is the probability of exactly 4 successes?",
        answer: "0.2001"
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
        answer: "0.6827"
    },
    



]



module.exports = { discrete_math };



