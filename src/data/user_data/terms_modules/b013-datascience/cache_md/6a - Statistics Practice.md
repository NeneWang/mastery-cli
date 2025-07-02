

## 4O Real Statistics Interview Questions

### Easy
6.1. Uber: Explain the Central Limit Theorem. Why it is useful? Provide the mathematical Definition of the CLT
?x
Solution \#6.1
The Central Limit Theorem (CLT) states that if any random variable, regardless of distribution, is sampled a large enough number of times, the sample mean will be approximately normally distributed. This allows for studying of the properties for any statistical distribution as long as there is a large enough sample size.
The mathematical definition of the CLT is as follows: for any given random variable $X$, as n approaches infinity,
$$
\bar{X}_n=\frac{X_1+\ldots+X_n}{n} \rightarrow \sim N\left(\mu, \frac{\sigma^2}{n}\right)
$$
At any company with a lot of data, like Uber, this concept is core to the various experimentation platforms used in the product. For a real-world example, consider testing whether adding a new feature increases rides booked in the Uber platform, where each X is an individual ride and is a Bernoulli random variable (i.e., the rider books or does not book a ride). Then, if the sample size is sufficiently large, we can assess the statistical properties of the total number of bookings, as well as the booking rate (rides booked / rides opened on app). These statistical properties play a key role in hypothesis testing. allowing companies like Uber to decide whether or not to add new features in a data-driven manner.


6.2. Facebook: How would you explain a confidence interval to a non-technical audience?
?x
Suppose we want to estimate some parameters of a population. For example, we might want to estimate the average height of males in the U.S. Given some data from a sample, we can compute a sample mean for what we think the value is, as well as a range of values around that mean. Following the previous example, we could obtain the heights of 1,000 random males in the U.S. and compute the average height, or the sample mean. This sample mean is a type of point estimate and, while useful, will vary from sample to sample. Thus, we can't tell anything about the variation in the data around this estimate, which is why we need a range of values through a confidence interval.
Confidence intervals are a range of values with a lower and an upper bound such that if you were to sample the parameter of interest a large number of times, the $95 \%$ confidence interval would contain the true value of this parameter $95 \%$ of the time. We can construct a confidence interval using the sample standard deviation and sample mean. The level of confidence is determined by a margin of error that is set beforehand. The narrower the confidence interval, the more precise the estimate, since there is less uncertainty associated with the point estimate of the mean.


6.3. Twitter: What are some common pitfalls encountered in $\mathrm{A} / \mathrm{B}$ testing?
?x
A/B testing has many possible pitfalls that depend on the particular experiment and setup employed. One common drawback is that groups may not be balanced, possibly resulting in highly skewed results. Note that balance is needed for all dimensions of the groups - like user demographics or device used because, otherwise, the potentially statistically significant results from the test may simply be due to specific factors that were not controlled for. Two types of errors are frequently assessed: Type I error, which is also known as a "false positive," and Type II error, also known as a "false negative." Specifically, Type I error is rejecting a null hypothesis when that hypothesis is correct, whereas Type II error is failing to reject a null hypothesis when its alternative hypothesis is correct.
.
Another common pitfall is not running an experiment for long enough. Generally speaking, experiments are run with a particular power threshold and significance threshold; however, they often do not stop immediately upon detecting an effect. For an extreme example, assume you're at either Uber or Lyft and running a test for two days, when the metric of interest (e.g., rides booked) is subject to weekly seasonality.
.
Lastly, dealing with multiple tests is important because there may be interactions between results of tests you are running and so attributing results may be difficult. In addition, as the number of variations you run increases, so does the sample size needed. In practice, while it seems technically feasible to test 1.000 variations of a button when optimizing for click-through rate, variations in tests are usually based on some intuitive hypothesis concerning core behavior.


6.4. Lyft: Explain both covariance and correlation formulaically, and compare and contrast them.
?x
Solution \#6.4
For any given random variables $X$ and $Y$, the covariance, a linear measure of relationship, is defined by the following: $\operatorname{Cov}(X, Y)=E[(X-E[X])(Y-E[Y])]=E[X Y]-E[X] E[Y]$
Specifically, covariance indicates the direction of the linear relationship between $X$ and $Y$ and can take on any potential value from negative infinity to infinity. The units of covariance are based on the units of $X$ and $Y$, which may differ.


6.5. Facebook: Say you flip a coin 10 times and observe only one heads. What would be your null hypothesis and p -value for testing whether the coin is fair or not?
6.6. Uber: Describe hypothesis testing and $p$-values in layman's terms?
6.7. Groupon: Describe what Type I and Type II errors are, and the trade-offs between them.
6.8. Microsoft: Explain the statistical background behind power.
6.9. Facebook: What is a Z-test and when would you use it versus a t-test?
6.10. Amazon: Say you are testing hundreds of hypotheses, each with t-test. What considerations would you take into account when doing this?
Medium


### Medium

6.11. Google: How would you derive a confidence interval for the probability of flipping heads from a series of coin tosses?
6.12. Two Sigma: What is the expected number of coin flips needed to get two consecutive heads?
6.13. Citadel: What is the expected number of rolls needed to see all six sides of a fair die?
6.14. Akuna Capital: Say you're rolling a fair six-sided die. What is the expected number of rolls until you roll two consecutive 5 s ?
6.15. D.E. Shaw: A coin was flipped 1,000 times, and 550 times it showed heads. Do you think the coin is biased? Why or why not?
6.16. Quora: You are drawing from a normally distributed random variable $X \sim \mathrm{~N}(0,1)$ once a day. What is the approximate expected number of days until you get a value greater than 2 ?
6.17. Akuna Capital: Say you have two random variables $X$ and $Y$, each with a standard deviation. What is the variance of $a X+b Y$ for constants $a$ and $b$ ?
6.18. Google: Say we have $X \sim \operatorname{Uniform}(0,1)$ and $Y \sim \operatorname{Uniform}(0,1)$ and the two are independent. What is the expected value of the minimum of $X$ and $Y$ ?
6.19. Morgan Stanley: Say you have an unfair coin which lands on heads $60 \%$ of the time. How many coin flips are needed to detect that the coin is unfair?
6.20. Uber: Say you have $n$ numbers $1 \ldots n$, and you uniformly sample from this distribution with replacement $n$ times. What is the expected number of distinct values you would draw?
6.21. Goldman Sachs: There are 100 noodles in a bowl. At each step, you randomly select two noodle ends from the bowl and tie them together. What is the expectation on the number of loops formed?
6.22. Morgan Stanley: What is the expected value of the max of two dice rolls?
6.23. Lyft: Derive the mean and variance of the uniform distribution $\mathrm{U}(a, b)$.
6.24. Citadel: How many cards would you expect to draw from a standard deck before seeing the first ace?
6.25. Spotify: Say you draw n samples from a uniform distribution $\mathrm{U}(a, b)$. What are the MLE estimates of $a$ and $b$ ?


### Hard
Hard questiosnare to be continued

