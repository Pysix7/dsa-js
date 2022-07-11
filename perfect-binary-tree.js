class PerfectBinaryTree {
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
				},
				right: {
					data: 5,
				},
			},
			right: {
				data: 3,
				left: {
					data: 8,
				},
				right: {
					data: 9,
				},
			},
		}

	*/

	findDepth(node){
		let depth = 0;
		let temp = node;
		while(temp !== null){
			depth+=1;
			temp = temp.left || null
		}
		temp = null;
		return depth;
	}

	isPerfectBinaryTree(root, depth, level){
		if(!root) return true; // if no root then
		if(!root.left && !root.right) return (depth == level +1); // if both left and right are not present
		if(root.left && root.right) return this.isPerfectBinaryTree(root.left, depth, level + 1) && this.isPerfectBinaryTree(root.right, depth, level + 1);
	}

	isPerfect(root){
		const depth = this.findDepth(root);
		return this.isPerfectBinaryTree(root, depth, 0);
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