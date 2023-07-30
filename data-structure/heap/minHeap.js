const Heap = require('./heap');

class minHeap extends Heap {
    constructor() {
        super();
    }

    isPairCorrectOrder(value1, value2) {
        return value1 < value2
    }
}

module.exports = minHeap;