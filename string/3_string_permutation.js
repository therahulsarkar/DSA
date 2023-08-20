function countWords(str){
	let wordCount = 0;
	let insideWord = false; //To track if we are within the word or not

	for(let char of str){
		if(char !== ' ' && char !== "\n" && char !== "\t"){ //If the char is not a space
			if(!insideWord){ //That means we are traversing throung the chars of a word
				insideWord = true; //Making this true bcs until we find a space, we do not want to increment the word count
				wordCount++;
			}
		}else{
			insideWord = false; //If we enocounter a space then make insideWord as false 
		}
	}
	return wordCount
}


const wordCount = countWords("Rahul Ranjan Sarkar");
console.log(`Lenght of the string is ${wordCount}`);