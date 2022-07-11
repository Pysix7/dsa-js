class CQueue {
	constructor(){	
	console.log('CIRCULAR QUEUE INITIALIZED');
	}

	array = [];
	Q_SIZE = 4;
	FRONT = -1;
	REAR = -1;

	enque(item){
		if(this.isFull()) return console.log('>> CIRCULAR Q FULL')
		
		if(this.FRONT == -1) {
			this.FRONT = 0;
		}
		
		// circular increment
		this.REAR = (this.REAR + 1) % this.Q_SIZE;
		this.array[this.REAR] = item;
		return this.array;
	}

	deque(){
		if(this.isEmpty()) return console.log(">> CIRCULAR Q EMPTY");

		const item = this.array[this.FRONT];
		delete this.array[this.FRONT]

		// circular increment
		if(this.FRONT == this.REAR) {
			this.FRONT = -1;
			this.REAR = -1;
		} else {
			this.FRONT = (this.FRONT + 1) % this.Q_SIZE;
		}

		return [item, this.array];
	}
	
	isEmpty(){
		if(this.FRONT == -1) return true;
		return false;
	}

	isFull(){
		if(this.FRONT == 0 && this.REAR == this.Q_SIZE -1) return true;
		if(this.FRONT == this.REAR + 1) return true;
		return false;
	}

	peak() {
		if(this.isEmpty()) return console.log(">> Circular Q EMPTY");
		else {
			return this.array[this.FRONT];
		}
	}
}