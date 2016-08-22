const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null; //set start
		this.parentNodes = [];
		this.heapSize = 0;
	}

	push(data, priority) {
		var newNode = new Node(data, priority);

		if(this.root == null){
			this.root = newNode;
		}else{
			insertNode(newNode);
		}
		this.heapSize++;
	}

	pop() {
		if(this.root != null){
			return detachRoot();
		}
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.heapSize;
	}

	isEmpty() {
		// return this.root;
		if(this.root == null)
			return true
		else
			return false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
