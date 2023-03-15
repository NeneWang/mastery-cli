class PartitionEqualSubsetSum {

    /**
     * DP - Top Down
     * Matrix - Memo
     * Time O(N * M) | Space O(N * M)
     * https://leetcode.com/problems/partition-equal-subset-sum/
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition = (nums) => {

        var initMemo = (nums, subSetSum) => new Array((nums.length + 1)).fill()/* Space O(N) */
            .map(() => new Array((subSetSum + 1)).fill(null));                     /* Space O(M) */

        var dfs = (nums, index, subSetSum, memo) => {
            const isBaseCase1 = (subSetSum === 0);
            if (isBaseCase1) return true;

            const isBaseCase2 = ((index === 0) || (subSetSum < 0));
            if (isBaseCase2) return false;

            const hasSeen = (memo[index][subSetSum] !== null);
            if (hasSeen) return memo[index][subSetSum];

            const difference = (subSetSum - nums[(index - 1)]);

            const left = dfs(nums, (index - 1), difference, memo);
            const right = dfs(nums, (index - 1), subSetSum, memo);

            memo[index][subSetSum] = (left || right);
            return memo[index][subSetSum];
        }

        const isEmpty = nums.length === 0;
        if (isEmpty) return false;

        const sum = getSum(nums);                 /* Time O(N) */

        const isEven = ((sum % 2) === 0);
        if (!isEven) return false;

        const subSetSum = (sum >> 1);
        const memo = initMemo(nums, subSetSum);        /*               | Space O(N * M) */
        const index = (nums.length - 1);

        return dfs(nums, index, subSetSum, memo);/* Time O(N * M) | Space O(N * M) */
    }

    solve(nums) {
        return this.canPartition(nums);
    }
}

module.exports = { Problem: PartitionEqualSubsetSum };