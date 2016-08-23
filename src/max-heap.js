const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null; //set start
		this.parentNodes = [];
		this.heapSize = 0;
		this.lastInsertedNode = null;
	}

	push(data, priority) {
		var newNode = new Node(data, priority);
		this.insertNode(newNode);
		this.shiftNodeUp(newNode);
		this.heapSize++;
	}

	pop() {
		if(this.root != null){
			return this.detachRoot();
		}
	}

	detachRoot() {
		var rootNode = new Node();
		rootNode = this.root;

		this.clear();
		return rootNode;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		return this.root == null;
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

			if((this.parentNodes[0].left != null) && (this.parentNodes[0].right != null)){
				this.parentNodes.shift();

				// for( var i = 0; i < this.parentNodes.length - 1; i++ ){
				// 	this.parentNodes[i] = this.parentNodes[i+1];
				// }
				// this.parentNodes.pop();
			}
		}


	}

	shiftNodeUp(node) {
		if((node.parent != null) && (node.parent.data < node.data)){
			node.swapWithParent();
			this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		//swap with it's left or right child
	}
}

module.exports = MaxHeap;
