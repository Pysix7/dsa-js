class Heap {
	constructor(array, i, type){	
	console.log('>> ',type,'HEAP INITIALIZED');
	this.array = array;
	this.i = i;
	this.type = type;
	}

	swap(array, a, b){
		const temp = array[a];
		array[a] = array[b];
		array[b] = temp;
	}

	heapify(array, i){
		const SIZE = array.length || 0;
		let largest = i;
		const leftChild = 2*i + 1;
		const rightChild = 2*i + 2;

		if(leftChild < SIZE && array[leftChild] > array[largest]) {
			largest = leftChild;
		} 
		if(rightChild < SIZE && array[rightChild] > array[largest]){
			largest = rightChild;
		}

		console.log(array, largest , i)
		if(largest != i){
			this.swap(array, largest,i);
			this.heapify(array, largest)
		} else {
			return array;
		}
	}
}