const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap;
	}

	push(data, priority) {

	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		return this.heap.root == null;
	}
}

module.exports = PriorityQueue;
