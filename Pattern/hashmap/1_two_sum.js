
/* Check two pointer example 1 */

function findSum(target, arr){
	let hashmap = new Map();

	for(let i = 0; i<arr.length; i++){
		const difference = target - arr[i];
		if(hashmap.has(difference)){
			return [difference, arr[i]]
		} else{
			hashmap.set(arr[i], true)
		}
	}

	return null
}

const result = findSum(7 , [2, 5, 7, 10, 20]);
if(result){
console.log(result);	
} else{
	console.log('Sorry not found')
}

/*
first iteration: 7-2 = 5, 5 is not in hashmap so 2
second iteration: 7-5 = 2, 2 is in hashmap so we have found it
*/