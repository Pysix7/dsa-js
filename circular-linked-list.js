class CircularLinkedList {
	constructor(){	
	console.log('CIRCULAR SINGLE LINKED_LIST INITIALIZED');
		this.one = {};
		this.two = {};
		this.three = {};

		this.one.data = 1;
		this.two.data = 2;
		this.three.data = 3;

		this.one.next = this.two;
		this.two.next = this.three;
		this.three.next = this.one;;
		this.last = this.three;
	}

	insertAtBeginning(element){
		const newData = {data: element};
		newData.next = this.last.next;
		this.last.next = newData;
	}

	insertAtEnd(element){
		const newData = {data: element, next: this.last.next};
		this.last.next = newData;
	}

	insertAt(element, pos){
		const newData = {data: element};

		let temp = this.last;
		for(let i = 2; i <pos; i++){
			if(temp.next.data !== this.last.data){
				temp=temp.next;
			}
		}
		newData.next = temp.next;
		temp.next = newData;
	}

	deleteAtBeginning(){
		this.last.next = this.last.next.next;
	}

	deleteAtEnd(){
		let temp = this.last;
		while(temp.next.data !== this.last.data){
			temp=temp.next;
		}
		temp.next = this.last.next;
		this.last = temp;
	}

	deleteAt(pos){
		let temp = this.last;
		for(let i = 2; i <pos; i++){
			if(temp.next.data !== this.last.data){
				temp=temp.next;
			}
		}
		temp.next = temp.next.next;
	}

	search(element){
		let temp = this.last;
		if(temp.data === element){
			return true;
		} else {
		while(temp.next.data !== this.last.data){
			if(temp.data === element) return true;
			temp=temp.next;
		}
		return false;
		}
	}

	// // with bubble sort
	// sort(){
	// 	let current = this.head;
		
	// 	while(current !== null){
	// 		let index = current.next;

	// 		while(index !== null){
	// 			if(current.data > index.data){
	// 				let temp = current.data;
	// 				current.data = index.data;
	// 				index.data = temp
	// 			}
	// 			index = index.next;
	// 		}
	// 		current = current.next;
	// 	}
	// }
}