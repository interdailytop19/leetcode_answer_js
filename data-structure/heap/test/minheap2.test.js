const MinHeap2 = require('../minHeap2')

describe('minheap2', () => {
  it('add', () => {
    const minHeap2 = new MinHeap2();
    expect(minHeap2.toString()).toBe('');

    minHeap2.add(10);
    expect(minHeap2.toString()).toBe('10');
    minHeap2.add(9);
    expect(minHeap2.toString()).toBe('9,10');
    minHeap2.add(8);
    expect(minHeap2.toString()).toBe('8,10,9');
    minHeap2.add(7);
    expect(minHeap2.toString()).toBe('7,8,9,10');
  })

  it('poll', () => {
    const minHeap2 = new MinHeap2();
    expect(minHeap2.toString()).toBe('');

    minHeap2.add(10);
    expect(minHeap2.toString()).toBe('10');
    minHeap2.add(9);
    expect(minHeap2.toString()).toBe('9,10');
    minHeap2.add(8);
    expect(minHeap2.toString()).toBe('8,10,9');
    minHeap2.add(7);
    expect(minHeap2.toString()).toBe('7,8,9,10');
    expect(minHeap2.poll()).toBe(7);
    expect(minHeap2.toString()).toBe('8,10,9');
    expect(minHeap2.poll()).toBe(8);
    expect(minHeap2.toString()).toBe('9,10');
    expect(minHeap2.poll()).toBe(9);
    expect(minHeap2.toString()).toBe('10');
    expect(minHeap2.poll()).toBe(10);
    expect(minHeap2.toString()).toBe('');
  })

  it('peek', () => {
    const minHeap2 = new MinHeap2();
    expect(minHeap2.toString()).toBe('');
    expect(minHeap2.peek()).toBeNull();

    minHeap2.add(10);
    expect(minHeap2.toString()).toBe('10');
    expect(minHeap2.peek()).toBe(10);
    minHeap2.add(9);
    expect(minHeap2.toString()).toBe('9,10');
    expect(minHeap2.peek()).toBe(9);
    minHeap2.add(8);
    expect(minHeap2.toString()).toBe('8,10,9');
    expect(minHeap2.peek()).toBe(8);
    minHeap2.add(7);
    expect(minHeap2.toString()).toBe('7,8,9,10');
    expect(minHeap2.peek()).toBe(7);
    expect(minHeap2.poll()).toBe(7);
    expect(minHeap2.toString()).toBe('8,10,9');
    expect(minHeap2.peek()).toBe(8);
    expect(minHeap2.poll()).toBe(8);
    expect(minHeap2.toString()).toBe('9,10');
    expect(minHeap2.peek()).toBe(9);
    expect(minHeap2.poll()).toBe(9);
    expect(minHeap2.toString()).toBe('10');
    expect(minHeap2.peek()).toBe(10);
    expect(minHeap2.poll()).toBe(10);
    expect(minHeap2.toString()).toBe('');
    expect(minHeap2.peek()).toBeNull();
  })

  it('find', () => {
    const minHeap2 = new MinHeap2();
    expect(minHeap2.toString()).toBe('');
    expect(minHeap2.find(100)).toBeNull();

    minHeap2.add(10);
    expect(minHeap2.find(10)).toBe(0);
    minHeap2.add(9);
    expect(minHeap2.find(9)).toBe(0);
    expect(minHeap2.find(10)).toBe(1);
    minHeap2.add(8);
    expect(minHeap2.find(10)).toBe(1);
    minHeap2.add(7);
    expect(minHeap2.find(10)).toBe(3);
    expect(minHeap2.poll()).toBe(7);
    expect(minHeap2.find(10)).toBe(1);
    expect(minHeap2.poll()).toBe(8);
    expect(minHeap2.find(10)).toBe(1);
    expect(minHeap2.poll()).toBe(9);
    expect(minHeap2.find(10)).toBe(0);
    expect(minHeap2.poll()).toBe(10);
    expect(minHeap2.find(10)).toBeNull();
  })

  it('remove', () => {
    const minHeap2 = new MinHeap2();
    expect(minHeap2.toString()).toBe('');
    expect(minHeap2.remove(100)).toBeNull();

    minHeap2.add(10);
    expect(minHeap2.remove(10)).toBe(10);
    expect(minHeap2.toString()).toBe('');
    minHeap2.add(9);
    minHeap2.add(8);
    minHeap2.add(7);
    minHeap2.add(6);
    minHeap2.add(5);
    minHeap2.add(4);
    minHeap2.add(3);

    expect(minHeap2.remove(8)).toBe(8);
    expect(minHeap2.toString()).toBe('3,6,4,9,7,5');
    expect(minHeap2.remove(6)).toBe(6);
    expect(minHeap2.toString()).toBe('3,5,4,9,7');
    expect(minHeap2.remove(3)).toBe(3);
    expect(minHeap2.toString()).toBe('4,5,7,9');
    expect(minHeap2.remove(9)).toBe(9);
    expect(minHeap2.toString()).toBe('4,5,7');
    expect(minHeap2.remove(5)).toBe(5);
    expect(minHeap2.toString()).toBe('4,7');
    expect(minHeap2.remove(7)).toBe(7);
    expect(minHeap2.toString()).toBe('4');
    expect(minHeap2.remove(4)).toBe(4);
    expect(minHeap2.toString()).toBe('');
  })
})