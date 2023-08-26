/*
Certainly! The "Missing Number" problem involves finding the missing number 
in an array containing all integers from 0 to N, except for one missing number. 
*/

function findSingle(arr){
	let missing = arr.length;
	for(let i =0; i<arr.length; i++){
		missing ^= i ^ arr[i]
	}
	console.log(missing)
}

findSingle([3, 0, 1, 2]);