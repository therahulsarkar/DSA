function reverse_string(str){
	 if (str === '') {
        return '';
    } 
	else{
		return  str[str.length - 1] + reverse_string(str.substr(0, str.length - 1));
		// return reverse_string(str.substr(1)) + str[0];
	}
}

const result = reverse_string("Rahul Sarkar");
console.log(result)
