class MaxProfit {

    solve(prices) {
        let [left, right, max] = [0, 1, 0];
    
        while (right < prices.length) {
            // TODO Complete the algorithm
			
			const price = prices[right];
			const min_price = prices[left];
			
			max = Math.max( max, price - min_price);



			if(price < min_price){
				left = right;
			}

			right += 1;
        }
    
        return max;
    }
}


module.exports = { Problem: MaxProfit };
