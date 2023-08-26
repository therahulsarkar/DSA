/*Given an array where every element appears twice except for one, find that single element.
	5 ^ 0 = 5
	5 ^ 5 = 0
*/
function findSingle(arr){
	let result = 0;
	for(const num of arr){
		result ^= num
		console.log(`number is ${num}, result is ${result}`)
	}
	console.log(result)
}

findSingle([1,2,3,4, 5, 3,1,2, 1, 2, 3,]);