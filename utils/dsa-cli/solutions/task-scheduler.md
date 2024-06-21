


Understandable solution:

```python
from collections import defaultdict
from typing import List

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        task_frequencies = defaultdict(int)
        
        for task in tasks:
            task_frequencies[task] += 1

        sorted_frequencies = sorted(task_frequencies.values(), reverse=True)

        total_intervals = 0
        while sorted_frequencies[0] > 0:
            interval = 0
            while interval <= n:
                if sorted_frequencies[0] == 0:
                    break
                if interval < len(sorted_frequencies) and sorted_frequencies[interval] > 0:
                    sorted_frequencies[interval] -= 1
                total_intervals += 1
                interval += 1
            sorted_frequencies.sort(reverse=True)

        return total_intervals

```







