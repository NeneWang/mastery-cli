class FindDuplicateNumber {
    solve(nums) {
        nums.sort((a, b) => a - b);/* Time O(N * log(N)) | HeapSort Space O(1) | QuickSort Space O(log(N)) */

        for (let i = 1; i < nums.length; i++) {/* Time O(N) */
            const isPrevDuplicate = nums[i - 1] === nums[i]
            if (isPrevDuplicate) return nums[i];
        }

        return -1;
    }



    /**
     * https://leetcode.com/problems/find-the-duplicate-number/
     * Time O(N * log(N)) | Space O(1)
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate = function (nums) {

        const getCount = (mid, nums, count = 0) => {
            for (const num of nums) {/* Time O(N) */
                const isMidGreater = num <= mid
                if (isMidGreater) count++;
            }

            return count;
        }

        let [left, right, duplicate] = [1, (nums.length - 1), -1];

        while (left <= right) {/* Time O(log(N)) */
            const mid = (left + right) >> 1;
            const count = getCount(mid, nums);/* Time O(N) */

            const isMidGreater = count <= mid
            if (isMidGreater) left = mid + 1;

            const isMidLess = mid < count
            if (isMidLess) {
                duplicate = mid;
                right = mid - 1;
            }
        }

        return duplicate;
    }



    /**
     * https://leetcode.com/problems/find-the-duplicate-number/
     * Time O(N) | Space O(1)
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate_o_1 = function (nums) {



        const moveFast = (nums, start = 0) => {
            let [slow, fast] = [nums[start], nums[nums[start]]];

            const isSame = () => slow === fast;
            while (!isSame()) {                   /* Time O(N) */
                slow = nums[slow];
                fast = nums[nums[fast]];
            }

            fast = start;

            return [slow, fast];
        }

        const moveSlow = (nums, slow, fast) => {
            const isSame = () => slow === fast;
            while (!isSame()) {                 /* Time O(N) */
                slow = nums[slow];
                fast = nums[fast];
            }

            return [slow, fast];
        }
        if (!nums.length) return -1

        let [slow, fast] = moveFast(nums);  /* Time O(N) */
        [slow, fast] = moveSlow(nums, slow, fast);/* Time O(N) */

        return slow;
    };



}


module.exports = { Problem: FindDuplicateNumber };