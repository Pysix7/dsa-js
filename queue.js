class Queue {
	constructor(){	
	console.log('QUEUE INITIALIZED');
	}

	array = [];
	Q_SIZE = 4;
	FRONT = -1;
	REAR = -1;

	enque(item){
		if(this.isFull()) return console.log('>> Q FULL')
		
		if(this.FRONT == -1) {
			this.FRONT = 0;
		}
		
		this.REAR +=1;
		this.array[this.REAR] = item;
		return this.array;
	}

	deque(){
		if(this.isEmpty()) return console.log(">> Q EMPTY");
		else {
			const item = this.array[this.FRONT];
			delete this.array[this.FRONT]
			this.FRONT +=1;
			return [item, this.array];
		}
	}
	
	isEmpty(){
		if(this.FRONT == -1) return true;
		return false;
	}

	isFull(){
		if(this.FRONT == 0 && this.REAR == this.Q_SIZE -1) return true;
		return false;
	}

	peak() {
		if(this.isEmpty()) return console.log(">> Q EMPTY");
		else {
			return this.array[this.FRONT];
		}
	}
}