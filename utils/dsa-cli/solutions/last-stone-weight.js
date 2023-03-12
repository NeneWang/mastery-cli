


class LastStoneWeight {
    /**
     * https://leetcode.com/problems/last-stone-weight/
     * Time O(N * log(N)) | Space O(N)
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight = (stones) => {



        const getMaxHeap = (stones, maxHeap = new MaxPriorityQueue()) => {
            for (const stone of stones) {
                maxHeap.enqueue(stone)
            }

            return maxHeap
        }

        const shrink = (maxHeap) => {
            while (1 < maxHeap.size()) {
                const [x, y] = [maxHeap.dequeue().element, maxHeap.dequeue().element]
                const difference = x - y;

                const isPositive = 0 < difference
                if (isPositive) maxHeap.enqueue(difference);
            }
        }

        
        const maxHeap = getMaxHeap(stones)

        shrink(maxHeap)

        return !maxHeap.isEmpty()
            ? maxHeap.front().element
            : 0
    };



    solve(stones) {
        return this.lastStoneWeight(stones);
    }
}


module.exports = { Problem: LastStoneWeight };