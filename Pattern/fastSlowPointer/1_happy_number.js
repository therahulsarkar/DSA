//Function to calculate square sum
function squareSum(num){ 
	let sum = 0;
	while(num > 0){ //82, 8 
		let lastDigit = num % 10; //2, 8
		sum += lastDigit * lastDigit;  //4 + 64
		num = Math.floor(num / 10) //8, 0
	}
	return sum
}

function checkHappy(num){
	//Hash map solution
		// let set = {}
		// while(num !=1 && !set[num]){
		// 	set[num] = true;
		// 	num = squareSum(num)
		// }
		// return num ===1

	let fast = num;
	let slow = num;

	do{
		slow = squareSum(slow)
		fast = squareSum(squareSum(fast))
	}while( fast !== slow )
	
	return slow === 1
}

console.log(checkHappy(28));