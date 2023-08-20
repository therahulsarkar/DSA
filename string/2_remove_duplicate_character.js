function remove_duplicate(str) {
    const obj = {};
    let result = '';

    for (const char of str) {
        //This will store occuraces as { 'p': 1, 'm': 2 }
        obj[char] = (obj[char] || 0) + 1; //Means if obj[char] already exists then add 1 to it, otherwise add 1 with 0
    }

    for (const char in obj) {
        result += char; //Picking each character key from the object and making the final string  
    }

    return result
}

const result = remove_duplicate("programming");
console.log(result)