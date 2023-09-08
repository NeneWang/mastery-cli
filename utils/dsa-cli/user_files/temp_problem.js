class IsValidParenthesis {
	solve(s, stack = []) {
	// Your code here
		const openBracket = {
			'}': '{',
			']': '[',
			')': '('
		}
		for(let character of s){
				
			if(character in openBracket){
				
				const sizeLeft = stack.length;
				if( !sizeLeft || sizeLeft == 0) return false;
				if(stack[sizeLeft - 1] != openBracket[character]) return false;
				//Otherwise continue.
				
				const popped = stack.pop();
			}
			else{
				stack.push(character);
			}

		}
		return true;
	}
}


module.exports = { Problem: IsValidParenthesis };
