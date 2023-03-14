class HouseRobber {


    /**
     * DP - Bottom Up
     * Time O(N) | Space O(1)
     * https://leetcode.com/problems/house-robber/
     * @param {number[]} nums
     * @return {number}
     */
    rob = (nums) => {
        if (!nums.length) return 0;

        let [left, mid] = [0, 0];

        for (const right of nums) {/* Time O(N) */
            const temp = mid;
            const house = left + right;

            mid = Math.max(mid, house);
            left = temp;
        }

        return mid;
    };

    solve(nums) {
        return this.rob(nums);
    }
}


module.exports = { Problem: HouseRobber };