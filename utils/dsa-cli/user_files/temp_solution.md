Sure, here is a problem involving a normal distribution along with a contextual example and the explanation of the solution:

```javascript
const discrete_math = [
    {
        term: "Calculate the probability of a score falling within a certain range in a normal distribution.",
        description: "In a standardized test, the scores are normally distributed with a mean (μ) of 500 and a standard deviation (σ) of 100.",
        prompt: "What is the probability that a randomly selected score is between 400 and 600?",
        answer: "0.6827"
    }
]
```

### Contextual Use Example
In the context of education, standardized tests such as the SAT are often normally distributed. Understanding the distribution of scores helps educators, students, and policymakers analyze performance and make informed decisions. For instance, knowing the probability that a student's score falls within a certain range can help identify students who may need additional support or those who are excelling.

### Explanation of Solution

**Term:** Calculate the probability of a score falling within a certain range in a normal distribution.  
**Description:** In a standardized test, the scores are normally distributed with a mean (\(\mu\)) of 500 and a standard deviation (\(\sigma\)) of 100.  
**Prompt:** What is the probability that a randomly selected score is between 400 and 600?  
**Answer:** 0.6827  

**Solution:**  
For a normal distribution, the probability that a score falls within a certain range can be found using the Z-score formula:
\[ Z = \frac{X - \mu}{\sigma} \]
where:
- \(X\) is the value
- \(\mu\) is the mean
- \(\sigma\) is the standard deviation

First, calculate the Z-scores for the values 400 and 600.

For \(X = 400\):
\[ Z_{400} = \frac{400 - 500}{100} = \frac{-100}{100} = -1 \]

For \(X = 600\):
\[ Z_{600} = \frac{600 - 500}{100} = \frac{100}{100} = 1 \]

Next, use the standard normal distribution table (or a calculator) to find the probabilities corresponding to these Z-scores.

The probability corresponding to \(Z = -1\) is approximately 0.1587, and the probability corresponding to \(Z = 1\) is approximately 0.8413.

The probability that a score is between 400 and 600 is:
\[ P(400 < X < 600) = P(Z < 1) - P(Z < -1) \]
\[ P(400 < X < 600) = 0.8413 - 0.1587 \]
\[ P(400 < X < 600) = 0.6826 \]

Therefore, the probability that a randomly selected score is between 400 and 600 is approximately 0.6827.

In summary, this means there is about a 68.27% chance that a student's score on this standardized test will fall between 400 and 600, given the normal distribution of scores with a mean of 500 and a standard deviation of 100.