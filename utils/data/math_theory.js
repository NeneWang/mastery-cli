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
        (1/6)^2 * (5/6) + (5/6) * (1/6)^2 + (1/6)^3 = 11/216 = 0.051"
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
        term: "Number of ways to arrange 5 books on a shelf",
        descripton: "Imagine you have 5 different books and you want to arrange them on a shelf.\n\
         The formula to calculate permutations is \n\
         \t\tnPr = (n!) / (n-r)\n\
         , where n is the total number of items and r is the number of items to be arranged.",
        prompt: "How many ways are there to arrange the books?",
        example: "The number of arrangements is given by the permutation formula P(5, 5) = 5! = 120."
    },
    {
        term: "Number of ways to get to bottom corner",
        description: "Imagine you are at the top-left corner of a 12x32 grid and want to reach the bottom-right corner by moving only right or down.\n\
            The formula to claculate combinations where we have repeated elements is \n\
            \t\tC(n+r-1, r-1)\n\
            or\n\
            n! / (n1! n2!...nn!)",
        prompt: "How many different paths can you take?",
        example: "The number of paths you can take is (12 + 32 -2)! / (12-1)! * (32-1)!"
    },
    {
        term: "Number of ways to select a president, vice president, and secretary from a group of 10 people",
        description: "You have a group of 10 people, and you need to choose a president, a vice president, and a secretary. The formula to calculate permutations is nPr = (n!) / (n-r), where n is the total number of items and r is the number of items to be arranged.",
        prompt: "How many ways can you choose the three positions?",
        example: "The number of ways to choose is given by the permutation formula P(10, 3) = 10!/(10-3)! = 720."
    },

    {
        term: "Number of paths from the top-left to the bottom-right corner in a 2x3 grid",
        description: "Imagine a 2x3 grid with cells. You start at the top-left corner and want to reach the bottom-right corner by moving only right or down. The formula to calculate combinations is nCr = (n!) / (r!(n-r)!), where n is the total number of items and r is the number of items to be chosen.",
        prompt: "How many different paths can you take?",
        example: "The number of paths is given by the binomial coefficient C(5, 2) = 5!/(2!3!) = 10."
    },
    {
        term: "Number of ways to form a committee of 4 members from a group of 10 people",
        description: "You have a group of 10 people, and you want to form a committee with 4 members. The formula to calculate combinations is nCr = (n!) / (r!(n-r)!), where n is the total number of items and r is the number of items to be chosen.",
        prompt: "How many different committees can you form?",
        example: "The number of committees is given by the combination formula C(10, 4) = 10!/(4!6!) = 210."
    },
    {
        term: "Number of ways to arrange the letters in the word 'BOOK'",
        description: "You have the word 'BOOK', and you want to arrange its letters. The formula to calculate permutations is nPr = (n!) / (n-r), where n is the total number of items and r is the number of items to be arranged.",
        prompt: "How many different arrangements are possible?",
        example: "The number of arrangements is given by the permutation formula P(4, 4) = 4! = 24."
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
        We also have that P(positive) = P(Positive | Disease) * PDisease + P(Positive | No Disease) * P(No Disease) \n\
        ''' = 0.98 * 1/1000 + .1 * 999/1000 = .01097\n\
        P(Disease|Positive) = [P(Positive|Disease) * P(Disease)] / [P(Positive|Disease) * P(Disease) + P(Positive|No Disease) * P(No Disease)]\n\
         [0.98 * 0.001] / [0.98 * 0.001 + 0.01 * 0.999] ≈ 8.925% = 0.089"
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
    {
        term: "5.8 Probability that Player A wins",
        description: "Goldman Sachs: Players A and B are playing a game where they take turns flipping \n\
        a biased coin, with p probability of landing on heads (and winning).\n\
         Player A starts the game, and then the players pass the coin back and forth until one person flips\n\
          heads and wins.",
        prompt: "What is the probability that A wins?",
        example: "The probability that A wins is given by summing the probabilities of all scenarios \n\
        where A wins: P(A wins) = p + (1-p)^2 * p + (1-p)^4 * p + ... = p / (1 - (1-p)^2) = p / (2-p)."
    },
    {
        term: "5.9 Probability that it is rainy given friends' statements",
        description: "Microsoft: Three friends in Seattle each told you it is rainy, and each person has a 1/3 probability of lying.",
        prompt: "What is the probability that Seattle is rainy, assuming that the likelihood of rain on any given day is 0.25?",
        example: "Using Bayes' Theorem: P(Rain|All say rainy) = \n\
        [P(All say rainy|Rain) * P(Rain)] / [P(All say rainy|Rain) * P(Rain) + P(All say rainy|No Rain) * P(No Rain)] = \n\
        [(2/3)^3 * 0.25] / [(2/3)^3 * 0.25 + (1/3)^3 * 0.75] = 0.524."
    },
    {
        term: "5.10 Probability that two random chords intersect",
        description: "Bloomberg: You draw a circle and choose two chords at random.",
        prompt: "What is the probability that those chords will intersect?",
        example: "The probability that two random chords in a circle will intersect is 1/3 or approximately 0.333.\n\
        \frac{1}{2} C\binom{4}{2}=\frac{1}{2} \cdot \frac{4!}{2!2!}=\frac{1}{2}\cdot 6 = 3\n\
        $$\n\
        "
    },
    {
        term: "5.11 Probability of Winning Coin Toss Game",
        description: "Morgan Stanley: You and your friend are playing a game. The two of you will continue to toss a coin until the sequence HH or TH shows up. If HH shows up first, you win. If TH shows up first, your friend wins.",
        prompt: "What is the probability of you winning?",
        example: "Although there is a formal way to apply Markov chains to this problem, there is a simple trick that simplifies the problem greatly. Note that, if T is ever flipped, you cannot then reach HH before your friend reaches TH, since the first heads thereafter will result in them winning. Therefore, the probability of you winning is limited to just flipping an HH initially, which we know is given by the following probability:\n\
        $$\n\
        P(H H)=\\frac{1}{2} * \\frac{1}{2}=\\frac{1}{4}\n\
        $$\n\
        Therefore, you have a 1/4 chance of winning, whereas your friend has a 3/4 chance."
    },
    {
        term: "5.12 Expected Payoff in Dice Game",
        description: "JP Morgan: Say you are playing a game where you roll a 6-sided die up to two times and can choose to stop following the first roll if you wish. You will receive a dollar amount equal to the final amount rolled.",
        prompt: "How much are you willing to pay to play this game?",
        example: "The price you would be willing to pay is equal to the expectation of the final amount. Note that, for the first roll, the expectation is\n\
        $$\n\
        \\sum_{i=1}^{6} \\frac{i}{6}=\\frac{21}{6}=3.5\n\
        $$\n\
        Therefore, there are two events on which you need to condition. The first is on getting a 1, 2, or 3 on the first roll, in which case you would roll again (since a new roll would have an expectation of 3.5). For a roll of 4, 5, or 6, you would keep that roll and end the game. Thus, the overall expectation is the average of 3.5 and 5. Therefore, the expected payoff of the overall game is\n\
        $$\n\
        \\frac{1}{2} * 3.5 + \\frac{1}{2} * 5 = 4.25\n\
        $$\n\
        Therefore, you would be willing to pay up to $4.25 to play."
    },
    {
        term: "5.13 Probability of Diligent Rater",
        description: "Facebook: Facebook has a content team that labels pieces of content on the platform as either spam or not spam. 90% of them are diligent raters and will mark 20% of the content as spam and 80% as non-spam. The remaining 10% are not diligent raters and will mark 0% of the content as spam and 100% as non-spam. Assume the pieces of content are labeled independently of one another, for every rater.",
        prompt: "Given that a rater has labeled four pieces of content as good, what is the probability that this rater is a diligent rater?",
        example: "Let $D$ denote the case where a rater is diligent, and $E$ the case where a rater is non-diligent. Further, let $4N$ denote the case where four pieces of content are labeled as non-spam. We want to solve for $P(D \\mid 4N)$. We can use Bayes' theorem as follows:\n\
        $$\n\
        P(D \\mid 4N)=\\frac{P(4N \\mid D) * P(D)}{P(4N \\mid D) * P(D) + P(4N \\mid E) * P(E)}\n\
        $$\n\
        We are given that $P(D)=0.9$ and $P(E)=0.1$. Also, we know that $P(4N \\mid D)=0.8 * 0.8 * 0.8 * 0.8$ due to the independence of each of the 4 labels assigned by a diligent rater. Similarly, we know that $P(4N \\mid E)=1$, since a non-diligent rater always labels content as non-spam. Substituting into the equation above yields the following:\n\
        $$\n\
        \\frac{P(4N \\mid D) * P(D)}{P(4N \\mid D) * P(D) + P(4N \\mid E) * P(E)} = \\frac{0.8^{4} * 0.9}{0.8^{4} * 0.9 + 1^{4} * 0.1} = 0.79\n\
        $$\n\
        Therefore, the probability that the rater is diligent is 79%."
    },
    {
        term: "5.14 Probability of Second Child Being a Boy",
        description: "D.E. Shaw: A couple has two children. You discover that one of their children is a boy.",
        prompt: "What is the probability that the second child is also a boy?",
        example: "This is a tricky problem because your mind probably jumps to the answer of $1 / 2$ because knowing the gender of one child shouldn't affect the gender of the other. However, the phrase 'the second child is also a boy' implies that we want to know the probability that both children are boys given that one is a boy. Let $B$ represent a boy and $G$ represent a girl. We then have the following total sample space representing the possible genders of 2 children: $BB, BG, GB, GG$.\n\
            However, since one child was said to be a boy, the valid sample space is reduced to the following: $BB, BG, GB$.\n\
            Since all of these options are equally likely, the answer is simply $1 / 3$."
    },
    {
        term: "5.15 Probability of Letter in 8th Drawer",
        description: "JP Morgan: A desk has eight drawers. There is a probability of $1 / 2$ that someone placed a letter in one of the desk's eight drawers and a probability of $1 / 2$ that this person did not place a letter in any of the desk's eight drawers. You open the first 7 drawers and find that they are all empty.",
        prompt: "What is the probability that the 8th drawer has a letter in it?",
        example: "Let $A$ denote the event that there is a letter in the 8th drawer, and $B$ denote the event that the first 7 drawers are all empty. The probability of $B$ occurring can be found by conditioning on whether a letter was put in the drawers or not; if so, then each drawer is equally likely to contain a letter, and if not, then none contain the letter. Therefore, we have the following:\n\
            $$\n\
            P(B) = \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{8}\\right) + \\left(\\frac{1}{2}\\right)(1) = \\frac{9}{16}\n\
            $$\n\
            For $A$ and $B$ to both occur, we also know that: $P(A \\cap B) = \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{8}\\right) = \\frac{1}{16}$\n\
            Therefore, we have: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{1}{9}$"
    },
    {
        term: "5.16 Probability of Winning Tennis Match",
        description: "Optiver: Two players are playing in a tennis match and are at deuce (that is, they will play back and forth until one person has scored two more points than the other). The first player has a 60% chance of winning every point, and the second player has a 40% chance of winning every point.",
        prompt: "What is the probability that the first player wins the match?",
        example: "We can use a recursive formulation. Let $p$ be the probability that the first player wins. Assume the score is $0-0$ (on a relative basis).\n\
            If the first player wins a game (with probability 0.6), then two outcomes are possible: with probability 0.6 the first player wins, and with probability 0.4 the score is back to $0-0$, with $p$ being the probability of the first player winning overall.\n\
            Similarly, if the first player loses a game (with probability 0.4), then with probability 0.6 the score is back to $0-0$ (with $p$ being the probability of the first player winning), or, with probability 0.4, the first player loses. Therefore, we have: $p = 0.6^2 + 2(0.6)(0.4) p$\n\
            Solving this yields the following for $p$: $p \\approx 0.692$\n\
            The key idea to solving this and similar problems is that, after two points, either the game is over, or we're back where we started. We don't need to ever consider the third, fourth, etc., points in an independent way."
    },
    {
        term: "5.17 Probability of Picking Different Colored and Numbered Cards",
        description: "Facebook: Say you have a deck of 50 cards made up of cards in 5 different colors, with 10 cards of each color, numbered 1 through 10.",
        prompt: "What is the probability that two cards you pick at random do not have the same color and are also not the same number?",
        example: "The first card will always be a unique color and number, so let's consider the second card. Let $A$ be the event that the color of card 2 does not match that of card 1, and let $B$ be the event that the number of card 2 does not match that of card 1. Then, we want to find the following:\n\
            $$\n\
            P(A \\cap B)\n\
            $$\n\
            Note that the two events are mutually exclusive: two cards with the same colors cannot have the same numbers, and vice versa. Hence, $P(A \\cap B) = P(A) P(B \\mid A)$\n\
            For $A$ to occur, there are 40 remaining cards of a color different from that of the first card drawn (and 49 remaining cards altogether). Therefore,\n\
            $$\n\
            P(A) = \\frac{40}{49}\n\
            $$\n\
            For $B$, we know that, of the 40 remaining cards, 36 of them (9 in each color) do not have the same number as that of card 1.\n\
            Therefore, $P(B \\mid A) = \\frac{36}{40}$\n\
            Thus, the desired probability is: $P(A \\cap B) = \\frac{40}{49} * \\frac{36}{40} = \\frac{36}{49}$"
    },
    {
        term: "5.18 Probability of Sum of Dice Being Divisible by 6",
        description: "SIG: Suppose you have ten fair dice. If you randomly throw these dice simultaneously.",
        prompt: "What is the probability that the sum of all the top faces is divisible by 6?",
        example: "Consider the first nine dice. The sum of those nine dice will be either $0, 1, 2, 3, 4,$ or 5 modulo 6. Regardless of that sum, exactly one value for the tenth die will make the sum of all 10 divisible by 6. For instance, if the sum of the first nine dice is 1 modulo 6, the sum of the first 10 will be divisible by 6 only when the tenth die shows a 5. Thus, the probability is $1 / 6$ for any number of dice, and, therefore, the answer is simply $1 / 6$."
    },
    {
        term: "5.19 Expected Value for First Player in Dice Game",
        description: "Morgan Stanley: A and B play the following game: a number $k$ from 1-6 is chosen, and A and B will toss a die until the first person throws a die showing side $k$, after which that person is awarded $100 and the game is over.",
        prompt: "How much is A willing to pay to play first in this game?",
        example: "To assess the amount $A$ is willing to pay, we need to calculate the expected probabilities of winning for each player, assuming A goes first (if A goes first) given by $P(A)$ and the probability of B winning, if A goes first but doesn't win the first roll, denoted as $P(B')$.\n\
        We can use the following recursive formulation:\n\
        $$\n\
        P(A) = \\frac{1}{6} + \\frac{5}{6} \\left(1 - P\\left(B'\\right)\\right)\n\
        $$\n\
        Since $A$ wins immediately with a $1 / 6$ chance (the first roll is $k$), or with a $5 / 6$ chance (assuming the first roll is not $k$) A wins if B does not win, with B now going first.\n\
        However, notice that, if $A$ doesn't roll side $k$ immediately, then $P\\left(B'\\right) = P(A)$, since now the game is exactly symmetric with the player B going first.\n\
        Therefore, the above can be modeled as follows:\n\
        $$\n\
        P(A) = \\frac{1}{6} + \\frac{5}{6} - \\frac{5}{6} P(A)\n\
        $$\n\
        Solving yields $P(A) = \\frac{6}{11}$, and $P(B) = 1 - P(A) = \\frac{5}{11}$. Since the payout is $100, A is willing to pay an amount up to the difference in expected values in going first, which is $100 \\cdot (\\frac{6}{11} - \\frac{5}{11}) = 100 \\cdot \\frac{1}{11}$, or about $9.09."
    },
    {
        term: "5.20 Generating Fair Odds with an Unfair Coin",
        description: "Airbnb: You are given an unfair coin having an unknown bias towards heads or tails.",
        prompt: "How can you generate fair odds using this coin?",
        example: "Let $P(H)$ be the probability of landing on heads, and $P(T)$ be the probability of landing tails for any given flip, where $P(H) + P(T) = 1$. Note that it is impossible to generate fair odds using only one flip. If we use two flips, however, we have four outcomes: $HH, HT, TH, TT$. Of these four outcomes, note that two ($HT, TH$) have equal probabilities since $P(H) \\cdot P(T) = P(T) \\cdot P(H)$. We can disregard $HH$ and $TT$ and need to complete only two sets of flips, e.g., $HHT$ wouldn't be equivalent to $HT$.\n\
        Therefore, it is possible to generate fair odds by flipping the unfair coin twice and assigning heads to the $HT$ outcome on the unfair coin, and tails to the $TH$ outcome on the unfair coin."
    },
    {
        term: "5.21 Probability of Bottom Face Being White",
        description: "SIG: Suppose you are given a white cube that is broken into $3 \\times 3 \\times 3 = 27$ pieces. However, before the cube was broken, all 6 of its faces were painted green. You randomly pick a small cube and see that 5 faces are white.",
        prompt: "What is the probability that the bottom face is also white?",
        example: "The only possible candidates for the cube you selected are the following: either it is the inside center piece (in which case all faces are white) or a middle face (where 5 faces are white, and one face is green). The former can be placed in six different ways, and the latter can only be placed in one particular way. Since all cubes are chosen equally randomly, let $A$ be the event that the bottom face of the cube picked is white, and $B$ be the event that the other five faces are white.\n\
        Note that there is a $1 / 27$ chance that the piece is the center piece and a $6 / 27$ chance that the piece is the middle piece. Therefore, the probability of $B$ happening is given by the following:\n\
        $$\n\
        P(B) = \\frac{1}{27}(1) + \\frac{6}{27} \\left(\\frac{1}{6}\\right)\n\
        $$\n\
        Then, using Bayes' rule: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{\\frac{1}{27}}{\\frac{1}{27} + \\frac{6}{27} \\cdot \\frac{1}{6}} = \\frac{1}{2}$"
    },
    {
        term: "5.22 Probability of Forming a Triangle from Stick Pieces",
        description: "Goldman Sachs: Assume you take a stick of length 1 and you break it uniformly at random into three parts.",
        prompt: "What is the probability that the three pieces can be used to form a triangle?",
        example: "Assume that the stick looks like the following, with cut points at $X$ and $Y$.\n\
        Let $M$ denote the stick's midpoint at 0.5 of the stick's 1-unit length. Note that if $X$ and $Y$ fall on the same side of the midpoint, either on its left or its right, then no triangle is possible because, in that case, the length of one of the pieces would be greater than $1 / 2$ (and thus we would have two sides having a total length strictly less than that of the longest side, making forming a triangle impossible). The probability that $X$ and $Y$ are on the same side (since the breaks are assumed to be chosen randomly) is simply $1 / 2$.\n\
        Now, assume that $X$ and $Y$ fall on different sides of the midpoint. If $X$ is further to the left in its half than $Y$ is in its half, then no triangle is possible in that case, since then the part lying between $X$ and $Y$ would have a length strictly greater than 0.5 (for example, $X$ at 0.2 and $Y$ at 0.75). This has a $1 / 2$ chance of occurring by a simple symmetry argument, but it is conditional on $X$ and $Y$ being on different sides of the midpoint, an outcome which itself has a $1 / 2$ chance of occurring. Therefore, this case occurs with probability $1/4$. The two cases represent all cases in which no valid triangle can be formed; thus, it follows that the probability of a valid triangle being formed equals $1 - 1 / 2 - 1 / 4 = 1 / 4$."
    },
    {
        term: "5.31 Probability of Jar Containing No Amoebas",
        description: "Goldman Sachs: Say you have a jar initially containing a single amoeba in it. Once every minute, the amoeba has a 1 in 4 chance of doing one of four things: (1) dying out, (2) doing nothing, (3) splitting into two amoebas, or (4) splitting into three amoebas.",
        prompt: "What is the probability that the jar will eventually contain no living amoeba?",
        example: "Let $p$ be the probability that the amoeba(s) die out. At any given time step, the probability of dying out eventually must still be $p$.\n\
        For case (1), we know the probability of survival is 0 (for one amoeba).\n\
        For case (2), we know the probability of dying out is $p$.\n\
        For case (3), there are now two amoebas, and both have a probability $p$ of dying.\n\
        For case (4), each of the three amoebas has a probability $p$ of dying.\n\
        Putting all four together, we note that the probability of the population dying out at $t=0$ minutes must be the same as the probability of the population dying out at $t=1$ minutes. Therefore, we have:\n\
        $$\n\
        p = \\frac{1}{4}(1 + p + p^2 + p^3)\n\
        $$\n\
        and solving this yields: $p = \\sqrt{2} - 1$"
    },
    {
        term: "5.32 Probability of First Toss Being Heads",
        description: "Lyft: A fair coin is tossed $n$ times. Given that there were $k$ heads in the $n$ tosses.",
        prompt: "What is the probability that the first toss was heads?",
        example: "Note that there are $\\binom{n-1}{k}$ ways to choose $k$ heads with the first coin being a $T$, and a total of:\n\
        $$\n\
        \\binom{n}{k}\n\
        $$\n\
        ways to obtain $k$ heads. So, the probability of having a tails first is given by:\n\
        $$\n\
        \\frac{\\binom{n-1}{k}}{\\binom{n}{k}} = \\frac{n-k}{n}\n\
        $$\n\
        and, therefore, the probability of obtaining a heads first is given by the following:\n\
        $$\n\
        1 - \\frac{n-k}{n} = \\frac{k}{n}\n\
        $$"
    },
    {
        term: "5.33 Probability of Draws Larger Than a Given Value",
        description: "Quora: You have $N$ i.i.d. draws of numbers following a normal distribution with parameters $\\mu$ and $\\sigma$.",
        prompt: "What is the probability that $k$ of those draws are larger than some value $Y$?",
        example: "Let the $n$ draws be denoted as $X_{1}, X_{2}, \\ldots, X_{n}$. We know that, for any given draw $i$, we have the following:\n\
        $$\n\
        P\\left(X_{i} > Y\\right) = 1 - P\\left(X_{i} \\leq Y\\right) = 1 - P\\left(\\frac{X_{i} - \\mu}{\\sigma} \\leq \\frac{Y - \\mu}{\\sigma}\\right) = 1 - \\Phi\\left(\\frac{Y - \\mu}{\\sigma}\\right)\n\
        $$\n\
        Additionally, the probability that $k$ of those draws are greater than $Y$ follows a binomial distribution with the value above being the $p$ parameter:\n\
        $$\n\
        p = 1 - \\Phi\\left(\\frac{Y - \\mu}{\\sigma}\\right)\n\
        $$\n\
        Then, the desired probability is given by:\n\
        $$\n\
        \\binom{n}{k} p^{k} (1-p)^{n-k}\n\
        $$"
    },
    {
        term: "5.34 Probability Triangle Includes Center of Circle",
        description: "Akuna Capital: You pick three random points on a unit circle and form a triangle from them.",
        prompt: "What is the probability that the triangle includes the center of the unit circle?",
        example: "Note that without loss of generality, the first point can be located at (1, 0). Using the polar coordinates system, we have the other two points at angles $\\theta_1$ and $\\theta_2$ respectively.\n\
        Assume that the second point is on the top half. Then, $0 < \\theta_1 < \\pi$. If the third point is also in the top half, the resulting triangle will not contain the center of the circle. It will also not contain the center if $\\theta_2 < \\theta_1$. The probability that the third point lies between $\\theta_1$ and $\\pi$ is $\\frac{\\pi - \\theta_1}{2\\pi}$.\n\
        Therefore, the overall probability is given by integrating over possible values of $\\theta_1$:\n\
        $$\n\
        \\frac{1}{\\pi} \\int_{0}^{\\pi} \\frac{\\pi - \\theta_1}{2\\pi} d\\theta_1 = \\frac{1}{4}\n\
        $$"
    },
    {
        term: "5.35 Probability of Running Out of White Balls First",
        description: "Citadel: You have $r$ red balls and $w$ white balls in a bag. You continue to draw balls until the bag only contains balls of one color.",
        prompt: "What is the probability that you run out of white balls first?",
        example: "In order to run out of white balls first, all the white balls must be drawn before the $r$-th red ball is drawn. We can consider the draws until $w + r - 1$ (we know the last ball must be red), and count how many include $w$ white balls.\n\
        The first white ball has $w + r - 1$ options, the second white ball has $w + r - 2$ options, etc., until the drawing of the $w$-th white ball: $(w + r - 1)(w + r - 2) \\ldots (r)$, which can be written as a factorial:\n\
        $$\n\
        \\frac{(w + r - 1)!}{(r - 1)!}\n\
        $$\n\
        Similarly, there are $r!$ ways to arrange the drawing of the remaining $r$ red balls. We know the total number of balls is $r + w$, so there are $(r + w)!$ total arrangements. Therefore, the probability is:\n\
        $$\n\
        \\frac{\\frac{(w + r - 1)!}{(r - 1)!} r!}{(r + w)!} = \\frac{r}{w + r}\n\
        $$\n\
        A more intuitive way to approach the problem is to consider just the last ball drawn. The probability that the ball is red is simply the chance of it being red when picking randomly, which is the following:\n\
        $$\n\
        \\frac{r}{w + r}\n\
        $$"
    },
    {
        term: " statistics Expectation represents",
        description: "Expectation is calcualted as \[ E[X] = \int_{-\infty}^{\infty} x f_X(x) \, dx \]",
        prompt: "What does it represent?",
        description: "In probability theory and statistics, the expectation (or expected value) of a random variable represents the average value or mean of that variable over a large number of trials or observations. It provides a measure of the central tendency of the distribution of the random variable."
    },
    {
        term: "statistics Variance represents",
        description: "Variance is calculated as \[ \operatorname{Var}(X) = E[(X - E[X])^2] \]",
        prompt: "What does it represent?",
        description: "In probability theory and statistics, the variance of a random variable represents the degree of spread or dispersion around the mean (expected value) of that variable. It provides a measure of how much the values of the variable differ from the mean. A higher variance indicates that the data points are more spread out from the mean, while a lower variance indicates that they are closer to the mean."
    },
    {
        term: "Covariance represents",
        description: "Covariance is calculated as \\[ \\operatorname{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y] \\]",
        prompt: "What does it represent?",
        description: "In probability theory and statistics, covariance represents the measure of the joint variability of two random variables. It indicates the direction of the linear relationship between the variables. A positive covariance means that as one variable increases, the other tends to increase as well, and vice versa. A negative covariance means that as one variable increases, the other tends to decrease. Zero covariance indicates no linear relationship between the variables. The magnitude of the covariance indicates the strength of the relationship, though it is not standardized, making it difficult to interpret on its own."
    },    
    {
        term: "5.36 Expectation and Variance of Uniform Distribution",
        description: "Consider a random variable $X$ that follows a Uniform distribution on the interval $[2, 8]$.",
        prompt: "Calculate the expectation and variance of $X$.",
        example: "For a Uniform distribution on $[2, 8]$, the PDF is:\n\
        $$\n\
        f_X(x) = \\frac{1}{8-2} = \\frac{1}{6}\n\
        $$\n\
        The expectation $E[X]$ is:\n\
        $$\n\
        E[X] = \\int_{2}^{8} x f_X(x) \\, dx = \\int_{2}^{8} \\frac{x}{6} \\, dx = \\left. \\frac{x^2}{12} \\right|_{2}^{8} = \\frac{64}{12} - \\frac{4}{12} = \\frac{60}{12} = 5\n\
        $$\n\
        The variance $\\operatorname{Var}(X)$ is:\n\
        $$\n\
        \\operatorname{Var}(X) = E[X^2] - (E[X])^2\n\
        $$\n\
        $$\n\
        E[X^2] = \\int_{2}^{8} x^2 f_X(x) \\, dx = \\int_{2}^{8} \\frac{x^2}{6} \\, dx = \\left. \\frac{x^3}{18} \\right|_{2}^{8} = \\frac{512}{18} - \\frac{8}{18} = \\frac{504}{18} = 28\n\
        $$\n\
        $$\n\
        \\operatorname{Var}(X) = 28 - 5^2 = 28 - 25 = 3\n\
        $$"
    },
    {
        term: "5.37 Covariance and Correlation",
        description: "Let $X$ and $Y$ be two random variables with known expectations $E[X] = 4$ and $E[Y] = 5$, and variances $\\operatorname{Var}(X) = 9$ and $\\operatorname{Var}(Y) = 16$. Suppose $E[XY] = 26$.",
        prompt: "Calculate the covariance and correlation between $X$ and $Y$.",
        example: "The covariance $\\operatorname{Cov}(X, Y)$ is:\n\
        $$\n\
        \\operatorname{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]\n\
        $$\n\
        $$\n\
        \\operatorname{Cov}(X, Y) = 26 - (4 \\cdot 5) = 26 - 20 = 6\n\
        $$\n\
        The correlation $\\rho(X, Y)$ is:\n\
        $$\n\
        \\rho(X, Y) = \\frac{\\operatorname{Cov}(X, Y)}{\\sqrt{\\operatorname{Var}(X) \\operatorname{Var}(Y)}} = \\frac{6}{\\sqrt{9 \\cdot 16}} = \\frac{6}{12} = 0.5\n\
        $$"
    },
    {
        term: "5.38 Conditional Expectation",
        description: "Suppose $X$ and $Y$ are continuous random variables with joint PDF $f_{XY}(x, y) = 6xy$ for $0 < x < 1$ and $0 < y < 1$.",
        prompt: "Derive the conditional expectation $E[X | Y = 0.5]$.",
        example: "The conditional expectation $E[X | Y = 0.5]$ is:\n\
        $$\n\
        E[X | Y = 0.5] = \\int_{0}^{1} x f_{X|Y}(x | 0.5) \\, dx\n\
        $$\n\
        where\n\
        $$\n\
        f_{X|Y}(x | 0.5) = \\frac{f_{XY}(x, 0.5)}{f_Y(0.5)}\n\
        $$\n\
        First, calculate $f_Y(0.5)$:\n\
        $$\n\
        f_Y(0.5) = \\int_{0}^{1} f_{XY}(x, 0.5) \\, dx = \\int_{0}^{1} 6x(0.5) \\, dx = 3 \\int_{0}^{1} x \\, dx = 3 \\cdot \\frac{1}{2} = 1.5\n\
        $$\n\
        So,\n\
        $$\n\
        f_{X|Y}(x | 0.5) = \\frac{6x(0.5)}{1.5} = 2x\n\
        $$\n\
        Then,\n\
        $$\n\
        E[X | Y = 0.5] = \\int_{0}^{1} x (2x) \\, dx = \\int_{0}^{1} 2x^2 \\, dx = \\left. \\frac{2x^3}{3} \\right|_{0}^{1} = \\frac{2}{3}\n\
        $$"
    },
    {
        term: "5.39 Variance of a Sum of Independent Random Variables",
        description: "Let $X_1, X_2, \\ldots, X_4$ be 4 independent random variables with variances $\\operatorname{Var}(X_1) = 2$, $\\operatorname{Var}(X_2) = 3$, $\\operatorname{Var}(X_3) = 4$, and $\\operatorname{Var}(X_4) = 5$.",
        prompt: "Calculate the variance of the sum $S = \\sum_{i=1}^4 X_i$.",
        example: "The variance of a sum of independent random variables is the sum of their variances:\n\
        $$\n\
        \\operatorname{Var}(S) = \\operatorname{Var}\\left(\\sum_{i=1}^4 X_i\\right) = \\sum_{i=1}^4 \\operatorname{Var}(X_i) = 2 + 3 + 4 + 5 = 14\n\
        $$"
    },
    {
        term: "5.40 Expectation and Variance of Exponential Distribution",
        description: "Suppose $X$ follows an Exponential distribution with parameter $\\lambda = 2$.",
        prompt: "Calculate the expectation and variance of $X$.",
        example: "For an Exponential distribution with parameter $\\lambda = 2$, the PDF is:\n\
        $$\n\
        f_X(x) = 2 e^{-2x}, \\quad x \\geq 0\n\
        $$\n\
        The expectation $E[X]$ is:\n\
        $$\n\
        E[X] = \\int_{0}^{\\infty} x (2 e^{-2x}) \\, dx = \\left. -\\frac{x e^{-2x}}{2} \\right|_{0}^{\\infty} + \\int_{0}^{\\infty} \\frac{e^{-2x}}{2} \\, dx = \\frac{1}{2}\n\
        $$\n\
        The variance $\\operatorname{Var}(X)$ is:\n\
        $$\n\
        \\operatorname{Var}(X) = E[X^2] - (E[X])^2\n\
        $$\n\
        $$\n\
        E[X^2] = \\int_{0}^{\\infty} x^2 (2 e^{-2x}) \\, dx = \\left. -\\frac{x^2 e^{-2x}}{2} \\right|_{0}^{\\infty} + \\int_{0}^{\\infty} \\frac{2x e^{-2x}}{2} \\, dx = \\frac{2}{4} = \\frac{1}{2}\n\
        $$\n\
        $$\n\
        \\operatorname{Var}(X) = \\frac{1}{2} - \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}\n\
        $$"
    }
]



module.exports = { discrete_math, probability };



