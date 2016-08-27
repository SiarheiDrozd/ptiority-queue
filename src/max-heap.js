const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	/*inserting node and pushing it up until it became root*/
	push(data, priority) {
		var newNode = new Node(data, priority);
		this.insertNode(newNode);
		this.shiftNodeUp(newNode);
		this.heapSize++;
	}

	sort() {
		if (this.root.left)
			if (this.root.left.priority > this.root.priority) {
				this.shiftNodeDown(this.root);
				this.sort();
			}
		if (this.root.right)
			if (this.root.right.priority > this.root.priority) {
				this.shiftNodeDown(this.root);
				this.sort();
			}
	}

	/* */
	pop() {
		if(this.root){
			const detachedRootNode = this.detachRoot();
			this.restoreRootFromLastInsertedNode(detachedRootNode);
			if(this.root){
				this.shiftNodeDown(this.root);
				this.sort();
			}
			this.heapSize--;
			return detachedRootNode.data;
		}
	}

	/*removes root node and removes it from parentNodes if exist*/
	detachRoot() {
		// document.write("<br>detachroot()");
		const rootNode = this.root;
		var rootInParentsNodes = this.parentNodes.indexOf(rootNode);
		if(rootInParentsNodes >= 0)
			this.parentNodes.splice(rootInParentsNodes,1);
		if(this.root.left)
			this.root.left.parent = null;
		if(this.root.right)
			this.root.right.parent = null;
		this.root = null;
		return rootNode;
	}

	/*uses last added node as root*/
	restoreRootFromLastInsertedNode(detached) {
		// document.write("<br>restoreRootFromLastInsertedNode()");
		if (this.parentNodes[0]) {
			var lastInsertedNode = this.parentNodes.pop();
			if(lastInsertedNode.parent)
				this.parentNodes.unshift(lastInsertedNode.parent);
			/**/
			if (detached.left) {
				lastInsertedNode.left = detached.left;
				lastInsertedNode.left.parent = lastInsertedNode;
			}
			else
				lastInsertedNode.left = null;
			/**/
			if (detached.right) {
				lastInsertedNode.right = detached.right;
				lastInsertedNode.right.parent = lastInsertedNode;
			}
			else
				lastInsertedNode.right = null;

			this.root = lastInsertedNode;
			lastInsertedNode.remove();
			this.root.parent = null;

			if(!this.root.left || !this.root.right){
				// document.write("<br>parentNodes.unshift()");
				this.parentNodes.unshift(this.root); //inserting in parentNOdes if has empty child
				// document.write(" ");
				// for (var i = 0; i < this.parentNodes.length; i++) {
				// 	document.write(" " + this.parentNodes[i].data);
				// }
			}
		}
	}

	size() {
		return this.heapSize;
	}

	isEmpty() {
		// if(this.heapSize == 0)
		// 	return true;
		// else
		// 	return false;
		return (this.root == null && !this.parentNodes[0]);
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
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
		if(node.parent && (node.priority > node.parent.priority)){
			this.swapNodeInParentNodes(node);
			node.swapWithParent();
			this.shiftNodeUp(node);
		}else if(!node.parent){
			this.root = node;
		}
	}

	swapNodeInParentNodes(node){
		// document.write("<br>swapNodeInParentNodes()");
		// document.write("<br>swapNodeInParentNodes() elements before:");
		// for (var i = 0; i < this.parentNodes.length; i++) {
		// 	document.write(" " + this.parentNodes[i].data);
		// };

		var nodeIndexInParentNodes = this.parentNodes.indexOf(node);
		if(nodeIndexInParentNodes >= 0){

			var parentNodeIndexInParentNodes = this.parentNodes.indexOf(node.parent);
			if(parentNodeIndexInParentNodes >= 0){

				this.parentNodes[nodeIndexInParentNodes] = node.parent;
				this.parentNodes[parentNodeIndexInParentNodes] = node;

			}else{
				// document.write("<br>only current node in parent nodes");
				this.parentNodes[nodeIndexInParentNodes] = node.parent;
			}
		}
	}

	shiftNodeDown(node) {
		// document.write("<br>shift node down called");

		if(node.left && (node.priority < node.left.priority)) {
			if(!node.parent){
				this.root = node.left;
			}
			// document.write("<br> shift node down: node(" + node.priority + ") left priority " + node.left.priority);

			this.swapNodeInParentNodes(node.left);
			node.left.swapWithParent();

			this.shiftNodeDown(node);
		}
		if(node.right && (node.priority < node.right.priority)) {
			if(!node.parent){
				this.root = node.right;
			}
			// document.write("<br> shift node down: node(" + node.priority + ") right priority " + node.right.priority);

			this.swapNodeInParentNodes(node.right);
			node.right.swapWithParent();

			this.shiftNodeDown(node);
		}
	}
}

module.exports = MaxHeap;
