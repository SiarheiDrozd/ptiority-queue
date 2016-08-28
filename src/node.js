class Node {
	constructor(data, priority) {
		this.data = data;
        this.priority = priority;
        this.left = null;
        this.right = null;
        this.parent = null;
	}

	appendChild(node) {
		if(!this.left){
			node.parent = this;
			this.left = node;
        }
		else if(!this.right){
			node.parent = this;
			this.right = node;
		}
	}

	removeChild(node) {
		if((this.left.data == node.data) && (this.left.priority == node.priority)){ //if this is left node
			node.parent = null;
			this.left = null;
        }
		else if((this.right.data == node.data) && (this.right.priority == node.priority)) { //if this is right node
			node.parent = null;
			this.right = null;
		}
		else throw new Error("node isn't a child");
	}

	remove() {
        if(this.parent){
        	this.parent.removeChild(this); //remove itself
        }
	}

	swapWithParent() {
		if(this.parent) { //if parent exist then swapping
			var nodeParent = this.parent;

			/*if parent node has parent*/
			if(nodeParent.parent) {
				var nodeGrandParent = nodeParent.parent;
				nodeGrandParent.removeChild(nodeParent);
				nodeParent.removeChild(this);
				nodeGrandParent.appendChild(this);
			}else{
				nodeParent.removeChild(this);
			}

			var bufferNode = new Node(nodeParent.data, nodeParent.priority);
			if(nodeParent.left){
				bufferNode.left = nodeParent.left;
			}
			if(nodeParent.right){
				bufferNode.right = nodeParent.right;
			}

			/*setting our left and right to parent node*/
			if(this.left){
				nodeParent.left = this.left;
				nodeParent.left.parent = nodeParent;
				this.left = null;
			}else {
				nodeParent.left = null;
			}
			if(this.right){
				nodeParent.right = this.right;
				nodeParent.right.parent = nodeParent;
				this.right = null;

			}else{
				nodeParent.right = null;
			}

			/*this node gets it's parent left and right*/
			if(bufferNode.left){
				this.left = bufferNode.left;
				this.left.parent = this;
			}else{
				this.left = null;
			}
			if(bufferNode.right){
				this.right = bufferNode.right;
				this.right.parent = this;
			}else{
				this.right = null;
			}

			this.appendChild(nodeParent);
		}
	}
}

module.exports = Node;
