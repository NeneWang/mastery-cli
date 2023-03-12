class Problem {


    /**
     * https://leetcode.com/problems/kth-largest-element-in-an-array/
     * Time O(N * log(K)) | Space O(K)
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest = function (nums, k) {
        const minHeap = new MinPriorityQueue()

        for (const num of nums) {
            minHeap.enqueue(num);

            const isAtCapacity = k < minHeap.size();
            if (isAtCapacity) minHeap.dequeue();
        }

        return minHeap.front().element
    };



    /**
     * https://leetcode.com/problems/kth-largest-element-in-an-array/
     * Time O(N * log(N)) | Space O(K)
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest_short = function (nums, k) {
        return nums
            .sort((a, b) => a - b)
            .reverse()
            .slice(k - 1)
            .shift()
    };

    solve(nums, k) {
        return this.findKthLargest(nums, k);
    }
}


module.exports = { Problem };