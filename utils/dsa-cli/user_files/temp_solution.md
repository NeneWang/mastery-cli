Let's clarify the transition matrix and the meaning of each column and row.

### Problem Statement
**Term:** Calculate the steady-state probabilities of a Markov Chain.  
**Description:** Consider a weather system where the weather can be either Sunny (S) or Rainy (R). The transition probabilities are given by the following matrix:
\[ P = \begin{bmatrix} 0.8 & 0.2 \\ 0.6 & 0.4 \end{bmatrix} \]
where:
- The first row represents the current state being Sunny.
- The second row represents the current state being Rainy.
- The first column represents the transition to Sunny.
- The second column represents the transition to Rainy.

### Explanation
The matrix \( P \) can be interpreted as follows:
\[ P = \begin{bmatrix} P(S \rightarrow S) & P(S \rightarrow R) \\ P(R \rightarrow S) & P(R \rightarrow R) \end{bmatrix} \]
\[ P = \begin{bmatrix} 0.8 & 0.2 \\ 0.6 & 0.4 \end{bmatrix} \]

- \( P(S \rightarrow S) = 0.8 \): The probability of transitioning from Sunny to Sunny.
- \( P(S \rightarrow R) = 0.2 \): The probability of transitioning from Sunny to Rainy.
- \( P(R \rightarrow S) = 0.6 \): The probability of transitioning from Rainy to Sunny.
- \( P(R \rightarrow R) = 0.4 \): The probability of transitioning from Rainy to Rainy.

### Solution
To find the steady-state probabilities, let's denote:
- \( \pi_S \) as the steady-state probability of being Sunny.
- \( \pi_R \) as the steady-state probability of being Rainy.

The steady-state probabilities satisfy the following system of equations:
\[ \pi_S = \pi_S \cdot 0.8 + \pi_R \cdot 0.6 \]
\[ \pi_R = \pi_S \cdot 0.2 + \pi_R \cdot 0.4 \]

Additionally, the sum of the steady-state probabilities must equal 1:
\[ \pi_S + \pi_R = 1 \]

Solving these equations:

1. From the first equation:
\[ \pi_S = 0.8 \pi_S + 0.6 \pi_R \]
\[ \pi_S - 0.8 \pi_S = 0.6 \pi_R \]
\[ 0.2 \pi_S = 0.6 \pi_R \]
\[ \pi_S = 3 \pi_R \]

2. Substitute \( \pi_S = 3 \pi_R \) into the normalization condition:
\[ 3 \pi_R + \pi_R = 1 \]
\[ 4 \pi_R = 1 \]
\[ \pi_R = \frac{1}{4} \]
\[ \pi_R = 0.25 \]

3. Now, substitute \( \pi_R \) back to find \( \pi_S \):
\[ \pi_S = 3 \pi_R \]
\[ \pi_S = 3 \cdot 0.25 \]
\[ \pi_S = 0.75 \]

Therefore, the steady-state probabilities are:
\[ P(Sunny) = 0.75 \]
\[ P(Rainy) = 0.25 \]

### Summary
The steady-state probabilities indicate that, in the long run, the weather system will be Sunny 75% of the time and Rainy 25% of the time.