
Given the following table named `CORPORATION`:

| name          | datatype |
| ------------- | -------- |
| ENTITY_EMAIL  | str      |
| PF_STATE      | str      |
| STATUS        | str      |
| CREATION_DATE | date     |


## 1. Create a temporary table

Write a SQL query to count that count number of entities where have count of specific number of emails in the state of `Florida` = `FL` that are active and were created in the first quarter of 2024.

For example:

| frequency | countofrepetitions |
| --------- | ------------------ |
| 1         | 106259             |
| 2         | 4533               |
| 3         | 1388               |
| 4         | 660                |
| 5         | 454                |


```sql
SELECT RepetitionCount, COUNT(*) AS CountOfRepetitions
FROM (
    SELECT ENTITY_EMAIL, COUNT(*) AS RepetitionCount
    FROM CORPORATION
    WHERE creation_date >= '2024-01-01' and creation_date < '2024-04-01' and ENTITY_EMAIL is not null AND status='A' and pf_state='FL' 
    GROUP BY ENTITY_EMAIL
) AS RepetitionCounts
GROUP BY RepetitionCount
ORDER BY RepetitionCount;
```







