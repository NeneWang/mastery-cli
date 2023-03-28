class MaxProfit {

    solve(prices) {
	    //Solve your problem here
		if(prices.length <= 1) return 0;
		let min_price = prices[0];
		let max_profit = 0;

		//Loop and solve
		for(let i = 0; i < prices.length; i++){
			const current_price = prices[i];
			max_profit = Math.max(max_profit, current_price - min_price)

			min_price = Math.min(min_price, current_price);
			
		}
		return max_profit;
    }	
}


module.exports = { Problem: MaxProfit };
