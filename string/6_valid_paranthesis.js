
function paranthesis_check(str){
	let stack = [];
	const closing = [')', '}', ']']
	let validParanthesis = {
		'(': ')',
		'{': '}',
		'[': ']',
	}

	for(const char of str){
		if(validParanthesis[char]){
			stack.push(char); //Push when opening brackets are encountered 
		} else if (closing.includes(char)) { //Only enter when closing paranthesis is found (To avoid other type of characters)
			//If stack is empty or if the top of the stack does not match the closing bracket return false 
			if(stack.length === 0 || validParanthesis[stack.pop()] !== char){
				return false
			}
		}
	}
	return stack.length === 0; //If stack lenght is 0 means we have successfully popped all the matched brackets 
}

if(paranthesis_check("({rahul [sakar]})")){
	console.log('Matched paranthesis')
} else{
	console.log('Sorry no matched paranthesis')
}