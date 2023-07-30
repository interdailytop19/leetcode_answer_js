class Heap {
    constructor() {
        this.container = []
    }

    peek() {
        if(this.container.length === 0) {
            return null
        }
        return this.container[0];
    }

    add(value) {
        this.container.push(value);
        this.heapifyUp();
    }

    poll() {
        if(this.container.length === 0) {
            return null
        }
        if(this.container.length ===1) {
            return this.container.pop();
        }

        const item = this.container[0];
        this.container[0] = this.container.pop();
        this.heapifyDown();
        return item;
    }

    isEmpty() {
        return this.container.length === 0 ? true : false;
    }

    heapifyDown(customStartIndex) {
        let currentIndex = customStartIndex || 0;
        let nextIndex = null;

        while(this.getLeftChild(currentIndex)) {
            if(
                this.getRightChild(currentIndex) &&
                this.isPairCorrectOrder(
                    this.getRightChild(currentIndex), 
                    this.getLeftChild(currentIndex)
                ) 
            ) {
                nextIndex = this.getRightChildIndex(currentIndex);
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }

            const currentValue = this.container[currentIndex];
            const nextValue = this.container[nextIndex]

            if(this.isPairCorrectOrder(currentValue, nextValue)) {
                break;
            }

            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }

    heapifyUp(customStartIndex) {
        // if no custom index provide heapify form the last ele of the heap
        let currentIndex = customStartIndex || this.container.length - 1;

        while(this.getParent(currentIndex)) {
            if(this.isPairCorrectOrder(this.getParent(currentIndex), this.container[currentIndex])) {
                return;
            }
            this.swap(this.getParentIndex(currentIndex), currentIndex);
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    getLeftChildIndex(parentIndex) {
        return 2* parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParent(childIndex) {
        const parentIndex = this.getParentIndex(childIndex);
        return this.container[parentIndex] || null
    }

    getLeftChild(parentIndex) {
        const leftChildIndex = this.getLeftChildIndex(parentIndex)
        return this.container[leftChildIndex] || null
    }

    getRightChild(parentIndex) {
        const leftRightIndex = this.getRightChildIndex(parentIndex)
        return this.container[leftRightIndex] || null
    }

    swap(index1, index2) {
        const temp = this.container[index1];
        this.container[index1] = this.container[index2];
        this.container[index2] = temp;
    }

    isPairCorrectOrder() {
        throw new Error('need to implement min/max heap logic');
    }

    toString() {
        return this.container.toString();
    }
}

module.exports = Heap;