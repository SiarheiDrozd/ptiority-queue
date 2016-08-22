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
			this.left = node;
        }
		else if(this.right == null){
			this.right = node;
		}
	}

	removeChild(node) {
        if((this.left.data == node.data) && (this.left.priority == node.priority)){
        	this.left = null;
        }
		else if ((this.right.data == node.data) && (this.right.priority == node.priority)) {
			this.right = null;
		}
		else throw new Error("node isn't a child");
	}

	remove() {

        if(this.parent != null){
			var child = new Node(15, 42);
        	this.parent.removeChild(child); //remove itself
        }
	}

	swapWithParent() {
		if(this.parent != null) {
			var grandParent = this.parent.parent;
			var currentParent = this.parent;

			this.appendChild(currentParent);

			grandParent.removeChild(this.parent);
			grandParent.appendChild(this);

			this.parent = grandParent;

		}
	}
}

module.exports = Node;
