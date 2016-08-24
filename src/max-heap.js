const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null; //set start
		this.parentNodes = [];
		this.heapSize = 0;
	}

	push(data, priority) {
		var newNode = new Node(data, priority);
		this.insertNode(newNode);
        this.shiftNodeUp(newNode);
		this.heapSize++;
	}

	pop() {
		if(this.root){
			this.shiftNodeDown(this.parentNodes[0]);
		}
	}

	detachRoot() {
		const rootNode = this.root;
		this.root = null;
		return rootNode;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.heapSize;
	}

	isEmpty() {
		return this.root == null && !this.parentNodes[0];
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if(this.isEmpty()){
			this.root = node;
			this.parentNodes[0] = this.root;
		}
		else{
			this.parentNodes[0].appendChild(node);
			this.parentNodes[this.parentNodes.length] = node;

			if((this.parentNodes[0].left) && (this.parentNodes[0].right)){
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {
		if(node.parent){
				/*var nodeIndexInParentNodes = this.parentNodes.indexOf(node);
				if(nodeIndexInParentNodes >= 0){


					var parentNodeIndexInParentNodes = this.parentNodes.indexOf(node.parent);
					if(parentNodeIndexInParentNodes >= 0){

						this.parentNodes[nodeIndexInParentNodes] = node.parent;
						this.parentNodes[parentNodeIndexInParentNodes] = node;

					}else
						this.parentNodes[nodeIndexInParentNodes] = node.parent;
				}*/
				this.swapNodeInParentNodes(node);
				node.swapWithParent();
				this.shiftNodeUp(node);
		}else {
			this.root = node;
		}
	}

	swapNodeInParentNodes(node){
		var nodeIndexInParentNodes = this.parentNodes.indexOf(node);
		if(nodeIndexInParentNodes >= 0){

			var parentNodeIndexInParentNodes = this.parentNodes.indexOf(node.parent);
			if(parentNodeIndexInParentNodes >= 0){

				this.parentNodes[nodeIndexInParentNodes] = node.parent;
				this.parentNodes[parentNodeIndexInParentNodes] = node;

			}else
				this.parentNodes[nodeIndexInParentNodes] = node.parent;
		}
	}

	shiftNodeDown(node) {
		if(node.left){
			// if(node.left.left){
				/*var nodeIndexInParentNodes = this.parentNodes.indexOf(node.left);
				if(nodeIndexInParentNodes >= 0){


					var parentNodeIndexInParentNodes = this.parentNodes.indexOf(node.left.parent);
					if(parentNodeIndexInParentNodes >= 0){

						this.parentNodes[nodeIndexInParentNodes] = node.left.parent;
						this.parentNodes[parentNodeIndexInParentNodes] = node.left;

					}else
						this.parentNodes[nodeIndexInParentNodes] = node.left.parent;
				}*/
				this.swapNodeInParentNodes(node.left);
				node.left.swapWithParent();
		// 	}else if(node.right){
		// 		var nodeIndexInParentNodes = this.parentNodes.indexOf(node.right);
		// 		if(nodeIndexInParentNodes >= 0){
        //
        //
		// 			var parentNodeIndexInParentNodes = this.parentNodes.indexOf(node.right.parent);
		// 			if(parentNodeIndexInParentNodes >= 0){
        //
		// 				this.parentNodes[nodeIndexInParentNodes] = node.right.parent;
		// 				this.parentNodes[parentNodeIndexInParentNodes] = node.right;
        //
		// 			}else
		// 				this.parentNodes[nodeIndexInParentNodes] = node.right.parent;
		// 		}
		// 		node.right.swapWithParent()
		// }
			this.shiftNodeDown(node);
		}
	}
}

module.exports = MaxHeap;
