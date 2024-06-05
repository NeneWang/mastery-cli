---
title: 
description: 
tags: []
link: 
images: []
---

### Description


Using table `corporation` with the following schema:

| name          | datatype |
| ------------- | -------- |
| entity_email  | str      |
| pf_state      | str      |
| status        | str      |
| creation_date | date     |

### 1. Select using temporal table:

Select all corporations where:
- Entities have less than 4 emails in the state of `Florida` = `FL` that are active.
- corporations were created in 2024.


Use the following Streatgy: Create a temporary table to store the count of emails per entity in the state of `Florida` and then use it to filter the corporations.



### 2. Select using partition

Using the temporary table `LESS5EMAIL` to filter the corporations. Select the last corporation created in 2024 for each entity.


