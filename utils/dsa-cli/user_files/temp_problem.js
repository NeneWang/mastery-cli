class MaxProfit {

    solve(prices) {
        let [left, right, max] = [0, 1, 0];
		const min_price = prices[0]
        while (right < prices.length) {
            // TODO Complete the algorithm
			const canSlide = prices[right] <= prices[left]
			if(canSlide) left = right;

			const window = prices[right] - prices[left]

			max = Math.max(max, window);
			right++;

        }
    
        return max;
    }
}


module.exports = { Problem: MaxProfit };
