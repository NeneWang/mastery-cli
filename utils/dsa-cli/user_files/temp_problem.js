
class IsValidParenthesis {

    solve(s, stack = []) {
        const map = {
            '}': '{',
            ']': '[',
            ')': '(',
        };

        for (const char of s) {/* Time O(N) */
            // TODO Complete the entire algorithm
			// If not as a key then push it
			if(! (char in map)){
				stack.push(char);
					
			}else{
				const top = stack[stack.length - 1];
				if(top == map[char]){
					stack.pop();
				} 
			}
        }

		console.log(stack);

        return (stack.length === 0);

    }
}


module.exports = { Problem: IsValidParenthesis };
