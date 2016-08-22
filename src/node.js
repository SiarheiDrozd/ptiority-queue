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

//V3
/*
			nodeGrandParent.removeChild(nodeParent);
			nodeGrandParent.appendChild(this);

			if(nodeGrandParent.left == nodeParent){
				nodeGrandParent.left = this;
			}else{
				nodeGrandParent.right = this;
			}
			this.parent.left = this.left; // set parents left to current left
			this.parent.right = this.right; //set parents right to current right
			this.parent.parent = this; //set current node as parent to it

			this.left = nodeParent.left; //
			this.right = nodeParent;
			this.parent = nodeGrandParent;*/
//V1
/*
			var bufferNode = this.parent;

 			this.parent.data = this.data;
			this.parent.priority = this.priority;

			this.data = bufferNode.data;
			this.priority = bufferNode.priority;*/
//V2
/*
			var grandParent = this.parent.parent; // saving parent's parent
			var currentParent = this.parent; // saving parent

			this.appendChild(currentParent); // adding current parent as child node
			currentParent.parent = this; //setting current node as parent to new child

			grandParent.removeChild(currentParent); // removing current parent node
			grandParent.appendChild(this); // adding current node as child to grandparent

			this.parent = grandParent; //setting grandParent as current parent
*/

		}
	}
}

module.exports = Node;
