class LinkedList {
	constructor(){	
	console.log('LINKED_LIST INITIALIZED');
		this.one = {};
		this.two = {};
		this.three = {};

		this.one.data = 1;
		this.two.data = 2;
		this.three.data = 3;

		this.one.next = this.two;
		this.two.next = this.three;
		this.three.next = null;
		this.head = this.one;
	}

	// operations:
	// insert: at beginning, end or particular position
	// delete: at beginning, end or particular position
	// search
	// sort

	insertAtBeginning(element){
		const newData = {data: element};
		
		newData.next = this.head;
		this.head = newData;
	}

	insertAtEnd(element){
		const newData = {data: element, next: null};

		let temp = this.head;
		while(temp.next !== null){
			temp=temp.next;
		}
		temp.next = newData;
	}

	insertAt(element, pos){
		const newData = {data: element};

		let temp = this.head;
		for(let i = 2; i <pos; i++){
			if(temp.next !== null){
				temp=temp.next;
			}
		}
		newData.next = temp.next;
		temp.next = newData;
	}

	deleteAtBeginning(){
		this.head = this.head.next;
	}

	deleteAtEnd(element){
		let temp = this.head;
		while(temp.next.next !== null){
			temp=temp.next;
		}
		temp.next = null;
	}

	deleteAt(pos){
		let temp = this.head;
		for(let i = 2; i <pos; i++){
			if(temp.next !== null){
				temp=temp.next;
			}
		}
		temp.next = temp.next.next;
	}

	search(element){
		let temp = this.head;
		while(temp !== null){
			if(temp.data === element) return true;

			if(temp.next === null) temp = null;
			else temp=temp.next;
		}
		return false;
	}

	// with bubble sort
	sort(){
		let current = this.head;
		
		while(current !== null){
			let index = current.next;

			while(index !== null){
				if(current.data > index.data){
					let temp = current.data;
					current.data = index.data;
					index.data = temp
				}
				index = index.next;
			}
			current = current.next;
		}
	}
}