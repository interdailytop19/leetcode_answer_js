const PQ2 = require('../priority-queue2')

describe('pq2', () => {
  it('add', () => {
    const pq2 = new PQ2();
    expect(pq2.toString()).toBe('');

    pq2.add(10, 0);
    expect(pq2.toString()).toBe('10');
    pq2.add(9, 1);
    expect(pq2.toString()).toBe('10,9');
    pq2.add(8, 2);
    expect(pq2.toString()).toBe('10,9,8');
    pq2.add(7, 3);
    expect(pq2.toString()).toBe('10,9,8,7');
    pq2.add(6, 4);
    expect(pq2.toString()).toBe('10,9,8,7,6');
    pq2.add(5, 5);
    expect(pq2.toString()).toBe('10,9,8,7,6,5');
  })

  it('poll', () => {
    const pq2 = new PQ2();
    pq2.add(10, 0);
    pq2.add(9, 1);
    pq2.add(8, 2);
    pq2.add(7, 3);
    pq2.add(6, 4);
    pq2.add(5, 5);
    expect(pq2.poll()).toBe(10);
    expect(pq2.toString()).toBe('9,7,8,5,6');
    expect(pq2.poll()).toBe(9);
    expect(pq2.toString()).toBe('8,7,6,5');
    expect(pq2.poll()).toBe(8);
    expect(pq2.toString()).toBe('7,5,6');
    expect(pq2.poll()).toBe(7);
    expect(pq2.toString()).toBe('6,5');
    expect(pq2.poll()).toBe(6);
    expect(pq2.toString()).toBe('5');
    expect(pq2.poll()).toBe(5);
    expect(pq2.toString()).toBe('');
    expect(pq2.poll()).toBeNull();
  })

  it('peek', () => {
    const pq2 = new PQ2();
    expect(pq2.toString()).toBe('');
    expect(pq2.peek()).toBeNull();

    pq2.add(10, 0);
    expect(pq2.peek()).toBe(10);
    pq2.add(9, 1);
    expect(pq2.peek()).toBe(10);
    pq2.add(8, 2);
    expect(pq2.peek()).toBe(10);
    pq2.add(7, 3);
    expect(pq2.peek()).toBe(10);
    pq2.add(6, 4);
    expect(pq2.peek()).toBe(10);
    pq2.add(5, 5);
    expect(pq2.peek()).toBe(10);
    expect(pq2.poll()).toBe(10);
    expect(pq2.peek()).toBe(9);
    expect(pq2.poll()).toBe(9);
    expect(pq2.peek()).toBe(8);
    expect(pq2.poll()).toBe(8);
    expect(pq2.peek()).toBe(7);
    expect(pq2.poll()).toBe(7);
    expect(pq2.peek()).toBe(6);
    expect(pq2.poll()).toBe(6);
    expect(pq2.peek()).toBe(5);
    expect(pq2.poll()).toBe(5);
    expect(pq2.toString()).toBe('');
    expect(pq2.poll()).toBeNull();
  })

  it('find', () => {
    const pq2 = new PQ2();
    expect(pq2.toString()).toBe('');
    expect(pq2.find(100)).toBeNull();

    pq2.add(10, 0);
    expect(pq2.find(10)).toBe(0);
    pq2.add(9, 1);
    expect(pq2.find(9)).toBe(0);
    expect(pq2.find(10)).toBe(1);
    pq2.add(8, 2);
    expect(pq2.find(10)).toBe(1);
    pq2.add(7, 3);
    expect(pq2.find(10)).toBe(3);
    expect(pq2.poll()).toBe(7);
    expect(pq2.find(10)).toBe(1);
    expect(pq2.poll()).toBe(8);
    expect(pq2.find(10)).toBe(1);
    expect(pq2.poll()).toBe(9);
    expect(pq2.find(10)).toBe(0);
    expect(pq2.poll()).toBe(10);
    expect(pq2.find(10)).toBeNull();
  })

  it('remove', () => {
    const pq2 = new PQ2();
    expect(pq2.toString()).toBe('');
    expect(pq2.remove(100)).toBeNull();

    pq2.add(10, 0);
    expect(pq2.remove(10)).toBe(10);
    expect(pq2.toString()).toBe('');
    pq2.add(9, 1);
    pq2.add(8, 2);
    pq2.add(7, 3);
    pq2.add(6, 4);
    pq2.add(5, 5);
    pq2.add(4, 6);
    pq2.add(3, 7);

    expect(pq2.remove(8)).toBe(8);
    expect(pq2.toString()).toBe('10,9,5,7,6,3,4');
    // expect(pq2.remove(6)).toBe(6);
    // expect(pq2.toString()).toBe('3,5,4,9,7');
    // expect(pq2.remove(3)).toBe(3);
    // expect(pq2.toString()).toBe('4,5,7,9');
    // expect(pq2.remove(9)).toBe(9);
    // expect(pq2.toString()).toBe('4,5,7');
    // expect(pq2.remove(5)).toBe(5);
    // expect(pq2.toString()).toBe('4,7');
    // expect(pq2.remove(7)).toBe(7);
    // expect(pq2.toString()).toBe('4');
    // expect(pq2.remove(4)).toBe(4);
    // expect(pq2.toString()).toBe('');
  })
})