const MinHeap = require('../heap/minHeap');

class PriorityQueue extends MinHeap {
    constructor() {
        super();
        this.priority = new Map();
    }

    add(item, priority = 0) {
        this.priority.set(item, priority);
        super.add(item);
    }

    isPairCorrectOrder(value1, value2) {
        const priority1 = this.priority.get(value1);
        const priority2 = this.priority.get(value2);
        return priority1 <= priority2
    }
}

module.exports = PriorityQueue;