function max_min_occurance(str) {

    const obj = {};

    for (const char of str) {
        //This will store occuraces as { 'p': 1, 'm': 2 }
        obj[char] = (obj[char] || 0) + 1; //Means if obj[char] already exists then add 1 to it, otherwise add 1 with 0
    }

    let maxOccurance = 0;
    let minOccurance = Infinity;
    let maxChar = '';
    let minChar = '';

    for (char in obj) {
        if (obj[char] > maxOccurance) { //if number of p > max then p is now the most occured character
            maxOccurance = obj[char];
            maxChar = char;
        }

        if (obj[char] < minOccurance) { //if number of p < min then p is now the least occured character
            minOccurance = obj[char];
            minChar = char;
        }
    }


    return {
        maxOccurance,
        minOccurance,
        maxChar,
        minChar,
    }
}

const result = max_min_occurance("programming");

console.log(`${result.maxChar} occured ${result.maxOccurance} times and  ${result.minChar}occured ${result.minOccurance} times`)