class FullBinaryTree {
	constructor() {
	}
	
	// example data
	/* 

		{
			data: 1,
			left: {
				data: 2,
				left: {
					data: 4,
					left: {},
					right: {},
				},
				right: {
					data: 5,
					left: {
						data: 6,
					},
					right: {
						data: 7,
					},
				},
			},
			right: {
				data: 3,
			},
		}

	*/


	isFullTree(root){
		if(!root) return true; // if no root then
		if(!root.left && !root.right) return true; // if both left and right are not present
		if(root.left && root.right) return this.isFullTree(root.left) && this.isFullTree(root.right);
		return false;
	}

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