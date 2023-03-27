class DailyTemperatures {
	solve(temperatures, stack = []) {

		
        const canShrink = (stack, temperatures, day) => {
			// Previous day as the output of the stack
            const previousDay = stack[stack.length - 1];
			// Then get and compare with the temperature of the previous and current termperature to compute if it is warmer
            const [prevTemperature, currTemperature] = [temperatures[previousDay], temperatures[day]];
            const isWarmer = prevTemperature < currTemperature;
				
			// If the stack is less than 0 means that there is not to compare (last one cannot shrink)
            return stack.length && isWarmer;
        }

		// Create the array of things to print
        const days = Array(temperatures.length).fill(0);

		console.log("days | temperatures | stack");
		// For each day 
        for (let day = 0; day < temperatures.length; day++) {/* Time O(N + N) */


			// While it can shrink which means that the current day is hotter than the previous one, then continue popping the previous cold day until it finds the one with the last one that is cold. days to wait being the difference between day and previous date.
            while (canShrink(stack, temperatures, day)) {    /* Time O(N + N) */
                const prevColdDay = stack.pop();
                const daysToWait = (day - prevColdDay);

                days[prevColdDay] = daysToWait;              /* Ignore Space O(N) */
            }

			console.log(days, temperatures, stack);
            stack.push(day);                                 /* Space O(N) */
        }

        return days;
    }
}


module.exports = { Problem: DailyTemperatures };
