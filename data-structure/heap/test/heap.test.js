/* eslint-disable no-undef */
const MinHeap = require('../minHeap');

describe('Heap', () => {
    it('can be initialize', () => {
        const minHeap = new MinHeap();
        expect(minHeap).toBeDefined();
    })

    it('add value with respect of heap invarant', () => {
        const minHeap = new MinHeap();
        minHeap.add(5);
        expect(minHeap.toString()).toBe('5');

        minHeap.add(1);
        expect(minHeap.toString()).toBe('1,5');

        minHeap.add(3);
        expect(minHeap.toString()).toBe('1,5,3');

        minHeap.add(8);
        minHeap.add(10);
        expect(minHeap.toString()).toBe('1,5,3,8,10');

        minHeap.add(2);
        expect(minHeap.toString()).toBe('1,5,2,8,10,3');
    })

    it('poll item with respect of heap invarant', () => {
        const minHeap = new MinHeap();
        minHeap.add(5);
        minHeap.add(1);
        minHeap.add(3);
        minHeap.add(8);
        minHeap.add(10);
        minHeap.add(2);
        expect(minHeap.poll()).toBe(1);
        expect(minHeap.toString()).toBe('2,5,3,8,10');

        expect(minHeap.poll()).toBe(2);
        expect(minHeap.toString()).toBe('3,5,10,8');

        expect(minHeap.poll()).toBe(3);
        expect(minHeap.toString()).toBe('5,8,10');

        expect(minHeap.poll()).toBe(5);
        expect(minHeap.toString()).toBe('8,10');

        expect(minHeap.poll()).toBe(8);
        expect(minHeap.toString()).toBe('10');

        expect(minHeap.poll()).toBe(10);
        expect(minHeap.toString()).toBe('');

        expect(minHeap.poll()).toBeNull();
        expect(minHeap.toString()).toBe('');
    })

    it('peek', () => {
        const minHeap = new MinHeap();
        expect(minHeap.peek()).toBeNull();
        minHeap.add(5);
        expect(minHeap.peek()).toBe(5);
        minHeap.add(10);
        expect(minHeap.peek()).toBe(5);
    })

    it('return isEmpty correctly', () => {
        const minHeap = new MinHeap();
        expect(minHeap.isEmpty()).toBe(true);
        minHeap.add(5);
        expect(minHeap.isEmpty()).toBe(false);
        minHeap.add(10);
        expect(minHeap.isEmpty()).toBe(false);
        minHeap.poll();
        expect(minHeap.isEmpty()).toBe(false);
        minHeap.poll();
        expect(minHeap.isEmpty()).toBe(true);
    })
})