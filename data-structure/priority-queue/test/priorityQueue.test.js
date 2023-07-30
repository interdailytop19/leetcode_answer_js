/* eslint-disable no-undef */
const PriorityQueue = require('../index');

describe('priority queue', () => {
    it('can be initalize', () => {
        const priority_queue = new PriorityQueue();

        expect(priority_queue).toBeDefined();
        
    })

    it('can add with respect of priority', () => {
        const priority_queue = new PriorityQueue();

        priority_queue.add(5, 1);
        priority_queue.add(4, 2);
        expect(priority_queue.toString()).toBe('5,4');
        priority_queue.add(10, 0);
        expect(priority_queue.toString()).toBe('10,4,5');
        priority_queue.add(19, 0);
        expect(priority_queue.toString()).toBe('10,19,5,4');
        priority_queue.add(26, 0);
        expect(priority_queue.toString()).toBe('10,19,5,4,26');
    })

    it('poll with respect of priority', () => {
        const priority_queue = new PriorityQueue();

        priority_queue.add(5, 1);
        priority_queue.add(4, 2);
        priority_queue.add(10, 0);
        priority_queue.add(19, 0);
        priority_queue.add(26, 0);

        expect(priority_queue.poll()).toBe(10);
        expect(priority_queue.poll()).toBe(26);
        expect(priority_queue.poll()).toBe(19);
        expect(priority_queue.poll()).toBe(5);
        expect(priority_queue.poll()).toBe(4);
    })

    it('can peek', () => {
        const priority_queue = new PriorityQueue();

        priority_queue.add(5, 1);
        priority_queue.add(4, 2);
        priority_queue.add(10, 0);
        priority_queue.add(19, 0);
        priority_queue.add(26, 0);

        expect(priority_queue.peek()).toBe(10);
        expect(priority_queue.poll()).toBe(10);
        expect(priority_queue.peek()).toBe(26);
        expect(priority_queue.poll()).toBe(26);
        expect(priority_queue.peek()).toBe(19);
        expect(priority_queue.poll()).toBe(19);
        expect(priority_queue.peek()).toBe(5);
        expect(priority_queue.poll()).toBe(5);
        expect(priority_queue.peek()).toBe(4);
        expect(priority_queue.poll()).toBe(4);
    })
})