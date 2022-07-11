class Stack {
	constructor(){	
	console.log('STACK INITIALIZED');
	}

	stArray = [];
	STACK_SIZE = 10;
	pointer = -1;

	push(item){
		if(this.stArray.length === this.STACK_SIZE) return console.log('>> STACK FULL')
		else {
			this.pointer += 1;
			this.stArray.push(item);
		}
	}

	pop(){
		if(this.isEmpty()) return console.log(">> STACK EMPTY");
		else {
			const item = this.stArray.pop();
			this.pointer -=1;
			return item;
		}
	}

	isEmpty(){
		if(this.stArray.length === 0) return true;
		return false;
	}

	isFull(){
		if(this.stArray.length === this.STACK_SIZE) return true;
		return false;
	}

	peak() {
		if(this.isEmpty()) return console.log(">> STACK EMPTY");
		else {
			return this.stArray[this.pointer];
		}
	}
}