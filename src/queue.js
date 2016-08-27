const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap;
	}

	push(data, priority) {
		if(this.heap.size() < this.maxSize){
			this.heap.push(data, priority);
		}
		else throw new Error("Queue is Full");

	}

	shift() {
		if(!this.heap.isEmpty()) {
			// var arrayNodes = [];
			// // while (!this.heap.isEmpty()){
			// 	arrayNodes.push(this.heap.pop());
			// 	// if(this.heap.root)
			// 	// 	document.write("<br>root: " + this.heap.root.data);
			// 	// if(this.heap.root.left)
			// 	// 	document.write("<br>root left: " + this.heap.root.left.data);
			// 	// if(this.heap.root.right)
			// 	// 	document.write("<br>root right: " + this.heap.root.right.data);
			// // }
            //
			// for(var i = 0; i<arrayNodes.length; i++ ){
			// 	return arrayNodes[i];
			// }
		return this.heap.pop();
		}
		else throw new Error("This queue is empty");

	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
