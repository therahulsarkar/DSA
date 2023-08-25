/*
Start one pointer from left and one from right, add them if the sum is equal to 
target then retun the result if the current sum is less than target that means we
have to move towards the lager values so that we inceament left otherwise decement
right to have lesser value. Make sure to sort the array first
*/

function findSum(target, arr){
	let left = 0;
	let right = arr.length-1;

	while(left < right){
		let currentSum = arr[left] + arr[right];

		if(currentSum === target){
			return [arr[left], arr[right]];
		} else if(currentSum < target){
			left++;
		} else {
			right--;
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
