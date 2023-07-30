	const LinkedListNode = require('./node');

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
}

	append(value) {
		const newNode = new LinkedListNode(value);

		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return this;
		}

		this.tail.next = newNode;
		this.tail = newNode;
		return this;
	}

	prepend(value) {
		const newNode = new LinkedListNode(value);

		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return this;
		}

		newNode.next = this.head;
		this.head = newNode;
		return this;
	}

	remove(value) {
		if(!this.head) {
			return null;
		}

		if(this.head.value === value) {
			const deleteNodeValue = this.head.value

			if(this.head === this.tail) {
				this.head = null;
				this.tail = null;
				return deleteNodeValue;
			}

			this.head = this.head.next;
			return deleteNodeValue
		}

		let currentNode = this.head;
		while(currentNode.next && currentNode.next.value !== value) {
			currentNode = currentNode.next;
		}

		if(currentNode.next !== null) {
			const deleteNodeValue = currentNode.next.value;
			// delete node found
			if(currentNode.next === this.tail) {
				// delete node is the tail node
				currentNode.next = null;
				this.tail = currentNode;
				return deleteNodeValue;
			}

			currentNode.next = currentNode.next.next;
			return deleteNodeValue;
		}

		return null;
	}

	search(value) {
		// return true if value exist, otherwise false
		if(!this.head) {
			return false;
		}

		let currentNode = this.head;
		while(currentNode) {
			if(currentNode.value === value) {
				return true
			}
			currentNode = currentNode.next;
		}
		return false;
	}

	yield() {
		const result = [];
		let currentNode = this.head;

		while(currentNode) {
			result.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return result;
	}

	toString() {
		return this.yield().toString();
	}
}

module.exports = LinkedList;