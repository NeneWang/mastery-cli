
Given the following table named `CORPORATION`:

| name          | datatype |
| ------------- | -------- |
| ENTITY_EMAIL  | str      |
| PF_STATE      | str      |
| STATUS        | str      |
| CREATION_DATE | date     |





## 1. Select Email Frequency

Select table of entities and their frequency of emails in the state of `Florida` = `FL` that are `active`.


| entity_email                 | count |
| ---------------------------- | ----- |
| admin@uplegacycom           | 1     |
| nsowani@eofficesolutionsnet | 42    |
| NGARCIA@TAXPRONETCOM        | 26    |
| govdocs@corpcreationscom    | 3849  |
| KBERGER132@HOTMAILCOM       | 1     |
| gracefrancesca1180@gmailcom | 1     |
| asuperiorpavers@yahoocom    | 1     |

```sql
select ENTITY_EMAIL,count(1) from CORPORATION where ENTITY_EMAIL is not null AND status='A' AND pf_state='FL' group by ENTITY_EMAIL;
```



## 2. Create a Frequency Repetition Table

Write a SQL query to count that count number of entities where have count of specific number of emails in the state of `Florida` = `FL` that are active and were created in the first quarter of 2024.

For example:

| frequency | count_frequency |
| --------- | --------------- |
| 1         | 106259          |
| 2         | 4533            |
| 3         | 1388            |
| 4         | 660             |
| 5         | 454             |


```sql
SELECT RepetitionCount as frequency, COUNT(*) AS count_frequency
FROM (
    SELECT ENTITY_EMAIL, COUNT(*) AS RepetitionCount
    FROM CORPORATION
    WHERE creation_date >= '2024-01-01' and creation_date < '2024-04-01' and ENTITY_EMAIL is not null AND status='A' and pf_state='FL' 
    GROUP BY ENTITY_EMAIL
) AS RepetitionCounts
GROUP BY RepetitionCount
ORDER BY RepetitionCount;
```


Sure, let's break down each problem and explain the solutions in detail.

### Problem 1
**Term:** Calculate the mean of the following discrete probability distribution.  
**Description:** \(X: [1, 2, 3, 4, 5]\)  
\(P(X): [0.1, 0.2, 0.3, 0.25, 0.15]\)  
**Prompt:** What is the mean of this distribution?  
**Answer:** 3.05  

**Solution:**  
The mean (or expected value) of a discrete probability distribution is calculated using the formula:
\[ \mu = \sum (X_i \cdot P(X_i)) \]
where \(X_i\) are the values of the random variable and \(P(X_i)\) are the corresponding probabilities.

Calculating the mean:
\[ \mu = (1 \cdot 0.1) + (2 \cdot 0.2) + (3 \cdot 0.3) + (4 \cdot 0.25) + (5 \cdot 0.15) \]
\[ \mu = 0.1 + 0.4 + 0.9 + 1 + 0.75 \]
\[ \mu = 3.15 \]

### Problem 2
**Term:** Calculate the variance of the following discrete probability distribution.  
**Description:** \(X: [1, 2, 3, 4, 5]\)  
\(P(X): [0.1, 0.2, 0.3, 0.25, 0.15]\)  
**Prompt:** What is the variance of this distribution?  
**Answer:** 1.25  

**Solution:**  
The variance (\(\sigma^2\)) of a discrete probability distribution is calculated using the formula:
\[ \sigma^2 = \sum (X_i - \mu)^2 \cdot P(X_i) \]
We already calculated the mean (\(\mu\)) as 3.15.

Calculating the variance:
\[ \sigma^2 = (1 - 3.15)^2 \cdot 0.1 + (2 - 3.15)^2 \cdot 0.2 + (3 - 3.15)^2 \cdot 0.3 + (4 - 3.15)^2 \cdot 0.25 + (5 - 3.15)^2 \cdot 0.15 \]
\[ \sigma^2 = 4.6225 \cdot 0.1 + 1.3225 \cdot 0.2 + 0.0225 \cdot 0.3 + 0.7225 \cdot 0.25 + 3.4225 \cdot 0.15 \]
\[ \sigma^2 = 0.46225 + 0.2645 + 0.00675 + 0.180625 + 0.513375 \]
\[ \sigma^2 = 1.25 \]

### Problem 3
**Term:** Find the mean and variance of the following discrete probability distribution.  
**Description:** \(X: [0, 1, 2, 3]\)  
\(P(X): [0.25, 0.25, 0.25, 0.25]\)  
**Prompt:** What are the mean and variance of this distribution?  
**Answer:** Mean: 1.5, Variance: 1.25  

**Solution:**  
Calculating the mean:
\[ \mu = \sum (X_i \cdot P(X_i)) \]
\[ \mu = (0 \cdot 0.25) + (1 \cdot 0.25) + (2 \cdot 0.25) + (3 \cdot 0.25) \]
\[ \mu = 0 + 0.25 + 0.5 + 0.75 \]
\[ \mu = 1.5 \]

Calculating the variance:
\[ \sigma^2 = \sum (X_i - \mu)^2 \cdot P(X_i) \]
\[ \sigma^2 = (0 - 1.5)^2 \cdot 0.25 + (1 - 1.5)^2 \cdot 0.25 + (2 - 1.5)^2 \cdot 0.25 + (3 - 1.5)^2 \cdot 0.25 \]
\[ \sigma^2 = 2.25 \cdot 0.25 + 0.25 \cdot 0.25 + 0.25 \cdot 0.25 + 2.25 \cdot 0.25 \]
\[ \sigma^2 = 0.5625 + 0.0625 + 0.0625 + 0.5625 \]
\[ \sigma^2 = 1.25 \]

### Problem 4
**Term:** Determine the mean of the given discrete probability distribution.  
**Description:** \(X: [-2, -1, 0, 1, 2]\)  
\(P(X): [0.1, 0.2, 0.4, 0.2, 0.1]\)  
**Prompt:** What is the mean of this distribution?  
**Answer:** 0  

**Solution:**  
Calculating the mean:
\[ \mu = \sum (X_i \cdot P(X_i)) \]
\[ \mu = (-2 \cdot 0.1) + (-1 \cdot 0.2) + (0 \cdot 0.4) + (1 \cdot 0.2) + (2 \cdot 0.1) \]
\[ \mu = -0.2 - 0.2 + 0 + 0.2 + 0.2 \]
\[ \mu = 0 \]

### Problem 5
**Term:** Determine the variance of the given discrete probability distribution.  
**Description:** \(X: [-2, -1, 0, 1, 2]\)  
\(P(X): [0.1, 0.2, 0.4, 0.2, 0.1]\)  
**Prompt:** What is the variance of this distribution?  
**Answer:** 1  

**Solution:**  
We already calculated the mean (\(\mu\)) as 0.

Calculating the variance:
\[ \sigma^2 = \sum (X_i - \mu)^2 \cdot P(X_i) \]
\[ \sigma^2 = (-2 - 0)^2 \cdot 0.1 + (-1 - 0)^2 \cdot 0.2 + (0 - 0)^2 \cdot 0.4 + (1 - 0)^2 \cdot 0.2 + (2 - 0)^2 \cdot 0.1 \]
\[ \sigma^2 = 4 \cdot 0.1 + 1 \cdot 0.2 + 0 \cdot 0.4 + 1 \cdot 0.2 + 4 \cdot 0.1 \]
\[ \sigma^2 = 0.4 + 0.2 + 0 + 0.2 + 0.4 \]
\[ \sigma^2 = 1 \]





Sure, here are some problems involving Poisson distribution along with the mean and variance calculations.

```javascript
const discrete_math = [
    {
        term: "Calculate the probability of exactly 3 events occurring in a Poisson distribution.",
        description: "The average rate (λ) is 2.5 events per interval.",
        prompt: "What is the probability of exactly 3 events occurring?",
        answer: "0.2138"
    },
    {
        term: "Determine the mean of a Poisson distribution.",
        description: "The average rate (λ) is 4 events per interval.",
        prompt: "What is the mean of this distribution?",
        answer: "4"
    },
    {
        term: "Determine the variance of a Poisson distribution.",
        description: "The average rate (λ) is 4 events per interval.",
        prompt: "What is the variance of this distribution?",
        answer: "4"
    },
    {
        term: "Find the probability of at most 1 event occurring in a Poisson distribution.",
        description: "The average rate (λ) is 3 events per interval.",
        prompt: "What is the probability of at most 1 event occurring?",
        answer: "0.1991"
    },
    {
        term: "Calculate the probability of more than 2 events occurring in a Poisson distribution.",
        description: "The average rate (λ) is 1.5 events per interval.",
        prompt: "What is the probability of more than 2 events occurring?",
        answer: "0.1913"
    }
]
```

### Explanation of Solutions

### Problem 1
**Term:** Calculate the probability of exactly 3 events occurring in a Poisson distribution.  
**Description:** The average rate (\(\lambda\)) is 2.5 events per interval.  
**Prompt:** What is the probability of exactly 3 events occurring?  
**Answer:** 0.2138  

**Solution:**  
The Poisson probability of exactly \( k \) events is given by:
\[ P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!} \]

For \( k = 3 \) and \( \lambda = 2.5 \):
\[ P(X = 3) = \frac{e^{-2.5} \cdot 2.5^3}{3!} \]
\[ P(X = 3) = \frac{e^{-2.5} \cdot 15.625}{6} \]
\[ P(X = 3) \approx \frac{0.0821 \cdot 15.625}{6} \]
\[ P(X = 3) \approx 0.2138 \]

### Problem 2
**Term:** Determine the mean of a Poisson distribution.  
**Description:** The average rate (\(\lambda\)) is 4 events per interval.  
**Prompt:** What is the mean of this distribution?  
**Answer:** 4  

**Solution:**  
For a Poisson distribution, the mean (\(\mu\)) is equal to the average rate (\(\lambda\)):
\[ \mu = \lambda = 4 \]

### Problem 3
**Term:** Determine the variance of a Poisson distribution.  
**Description:** The average rate (\(\lambda\)) is 4 events per interval.  
**Prompt:** What is the variance of this distribution?  
**Answer:** 4  

**Solution:**  
For a Poisson distribution, the variance (\(\sigma^2\)) is equal to the average rate (\(\lambda\)):
\[ \sigma^2 = \lambda = 4 \]

### Problem 4
**Term:** Find the probability of at most 1 event occurring in a Poisson distribution.  
**Description:** The average rate (\(\lambda\)) is 3 events per interval.  
**Prompt:** What is the probability of at most 1 event occurring?  
**Answer:** 0.1991  

**Solution:**  
The probability of at most 1 event (\(P(X \leq 1)\)) is the sum of the probabilities of 0 and 1 events occurring:
\[ P(X \leq 1) = P(X = 0) + P(X = 1) \]

Calculating \( P(X = 0) \):
\[ P(X = 0) = \frac{e^{-3} \cdot 3^0}{0!} = e^{-3} \approx 0.0498 \]

Calculating \( P(X = 1) \):
\[ P(X = 1) = \frac{e^{-3} \cdot 3^1}{1!} = 3e^{-3} \approx 0.1493 \]

Adding these probabilities:
\[ P(X \leq 1) = 0.0498 + 0.1493 \approx 0.1991 \]

### Problem 5
**Term:** Calculate the probability of more than 2 events occurring in a Poisson distribution.  
**Description:** The average rate (\(\lambda\)) is 1.5 events per interval.  
**Prompt:** What is the probability of more than 2 events occurring?  
**Answer:** 0.1913  

**Solution:**  
The probability of more than 2 events (\(P(X > 2)\)) is 1 minus the probability of at most 2 events occurring:
\[ P(X > 2) = 1 - P(X \leq 2) \]

First, calculate \( P(X \leq 2) \):
\[ P(X \leq 2) = P(X = 0) + P(X = 1) + P(X = 2) \]

Calculating \( P(X = 0) \):
\[ P(X = 0) = \frac{e^{-1.5} \cdot 1.5^0}{0!} = e^{-1.5} \approx 0.2231 \]

Calculating \( P(X = 1) \):
\[ P(X = 1) = \frac{e^{-1.5} \cdot 1.5^1}{1!} = 1.5e^{-1.5} \approx 0.3346 \]

Calculating \( P(X = 2) \):
\[ P(X = 2) = \frac{e^{-1.5} \cdot 1.5^2}{2!} = \frac{2.25e^{-1.5}}{2} \approx 0.2510 \]

Adding these probabilities:
\[ P(X \leq 2) = 0.2231 + 0.3346 + 0.2510 \approx 0.8087 \]

Finally:
\[ P(X > 2) = 1 - 0.8087 \approx 0.1913 \]
