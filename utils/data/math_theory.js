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
            The Poisson probability of exactly \( k \) events is given by:\n\
            \[ P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!} \]",
        prompt: "What is the probability of exactly 3 events occurring?",
        answer: "0.2138"
    },


]



module.exports = { discrete_math };



