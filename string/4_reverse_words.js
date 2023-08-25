function reverseWords(str){
	let arr = str.trim().split(' ');
	let result = '';
	for(let i = arr.length -1; i>=0; i--){
		result+= arr[i] + ' ';
	}
	console.log(result)
}

// reverseWords("Rahul Ranjan Sarkar")


function reverseWords(str){
	let wordCount = 0;
	let insideWord = false;
	let arr = [];

	for(let char of str){
		if(char !== ' ' && char !== '\n' && char !== '\t'){
			if(!insideWord){ 
				wordCount++;
				insideWord = true
			}
		} else{
			insideWord = false;
		}
	}

	console.log(wordCount)
}

reverseWords("Rahul Ranjan Sarkar")
