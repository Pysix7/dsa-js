class TreeTraversal {
	constructor() {
	}
	// example data

	/* 

		{
			data: 1,
			left: {
				data: 12,
				left: {
					data: 5
				},
				right :{
					data: 6
				}
			},
			right: {
				data: 9,
                left: {
                	data: 22,
                	left: {
                		data: 33,
                	},
                	right: {
                		data: 44
                	}
                },
			}
		}	

	*/

	inOrder(root){
		if(root == null) return;
		this.inOrder(root.left);
		console.log('>', root.data);
		this.inOrder(root.right);
	}
	
	preOrder(root){
		if(root == null) return;
		console.log('>', root.data);
		this.preOrder(root.left);
		this.preOrder(root.right);
	}

	postOrder(root){
		if(root == null) return;
		this.postOrder(root.left);
		this.postOrder(root.right);
		console.log('>', root.data);
	}
}