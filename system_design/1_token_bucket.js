
class TokenBucket{
	constructor(capacity, refillRate){
		this.capacity = capacity; //Total capacity of bucket
		this.refillRate = refillRate; //Refill rate
		this.currentTokens = capacity; //Currently available tokens 
		this.lastFilled = Date.now() //Last token filled time
	}

	//This method will refill tokens
	_refillToken(){
		const currentTime = Date.now()

		// Calculate the time that has passed since the last time tokens were filled
		const elaspedTime = (currentTime - this.lastFilled) / 1000; 
		/// Calculate the number of tokens that should be added since the last refill
		const tokenToAdd = elaspedTime * this.refillRate;

		 // Add the tokens to the bucket, up to the capacity
		this.currentTokens = Math.min(this.capacity, tokenToAdd + this.currentTokens);
		// Update the last filled time
		this.lastFilled = currentTime;
	}

	consumeToken(totalTokenRequested){
		this._refillToken() //Refilling as per required
		if(totalTokenRequested < this.currentTokens){ //If available tokens are less than requested
			this.currentTokens -= totalTokenRequested;
			return true;
		}else{
			return false
		}
	}
}

//Instance of the TokenBucket  
const bucket = new TokenBucket(5, 2);

//This function will make the API request
function callApi(request){
	if(bucket.consumeToken(1)){
		console.log(`API request made for ${request}`)
	} else {
		console.log('Limit exceed')
	}
}

// Simulating user request which will trigger every second
for(let i =0; i< 15; i++){
	setTimeout(()=> callApi(`Request ${i}`) ,i*1000)
}