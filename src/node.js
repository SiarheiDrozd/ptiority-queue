class Node {
	constructor(data, priority) {
		this.data = data;
        this.priority = priority;
        this.left = null;
        this.right = null;
        this.parent = null;
	}

	appendChild(node) {
		if(this.left == null){
			node.parent = this;
			this.left = node;
        }
		else if(this.right == null){
			node.parent = this;
			this.right = node;
		}
	}

	removeChild(node) {
        if((this.left.data == node.data) && (this.left.priority == node.priority)){ //if this is left node
			node.parent = null;
			this.left = null;
        }
		else if ((this.right.data == node.data) && (this.right.priority == node.priority)) { //if this is right node
			node.parent = null;
			this.right = null;
		}
		else throw new Error("node isn't a child");
	}

	remove() {

        if(this.parent != null){
        	this.parent.removeChild(this); //remove itself
        }
	}

	swapWithParent() {
		if(this.parent != null) { //if parent exist then swapping
			var nodeParent = new Node();
			nodeParent = this.parent;

			if(nodeParent.parent != null) {
				var nodeGrandParent = new Node();
				nodeGrandParent = nodeParent.parent;
				nodeGrandParent.removeChild(nodeParent);
				nodeGrandParent.appendChild(this);
				nodeParent.removeChild(this);
				this.parent = nodeGrandParent;
			}else{
				nodeParent.removeChild(this);
			}

			var bufferNode;
			var isLeft = false;

			if(nodeParent.left != null){
				bufferNode = nodeParent.left;
				isLeft = true;
			}else{
				bufferNode = nodeParent.right;
				isLeft = false;
			}

			nodeParent.left = this.left;
			nodeParent.right = this.right;
			nodeParent.parent = this;

			if(isLeft){
				if(bufferNode)
					bufferNode.parent = this;
				this.left = bufferNode;
				this.right = nodeParent;
			}else{
				if(bufferNode)
					bufferNode.parent = this;
				this.right = bufferNode;
				this.left = nodeParent;
			}
		}
	}
}

module.exports = Node;
