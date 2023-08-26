class HashTable{
	constructor(size = 10){
		this.size = size;
		this.buckets = new Array(size).fill(null).map(() => []);
	}

	//Method to generate hash
	hash(key){
		let hashvalue = 0; 
		for(let i = 0; i < key.length; i++){
			hashvalue += key.charCodeAt(i);
		}
		return hashvalue % this.size
	}

	insert(key, value){
		const index = this.hash(key);
		this.buckets[index].push({ key, value });
	}

	get(key){
		const index = this.hash(key);
		const bucket = this.buckets[index];
		for(const entry of bucket){
			if(entry.key === key){
				console.log(entry.value);
			}
		}
	}

	remove(key){
		const index = this.hash(key);
		const bucket = this.buckets[index];
		for(let i = 0; i < bucket.length; i++){
			if(bucket[i].key === key){
				bucket.splice(i, 1);
				//i--; //If we want to delete every objects with the same key
				console.log("Removed");
			}
		}
	}

	getAll(){
		console.log(this.buckets)
	}

}

const Hashtable = new HashTable(5);
Hashtable.insert("name", "Rahul")
Hashtable.insert("age", 23)
Hashtable.insert("job", "Developer")
Hashtable.insert("name", "Rohan")

Hashtable.get("name")
Hashtable.remove("name")
Hashtable.getAll()