/* eslint-disable no-undef */
const LinkedList = require('../index');

describe('LinkedList', () => {
  it('append correctly', () => {
    const linkedList = new LinkedList();

    linkedList.append(5);
    expect(linkedList.toString()).toBe('5');
    linkedList.append(10);
    expect(linkedList.toString()).toBe('5,10');
    linkedList.append(15);
    expect(linkedList.toString()).toBe('5,10,15');
    linkedList.append(20);
    expect(linkedList.toString()).toBe('5,10,15,20');
  })

  it('prepend correctly', () => {
    const linkedList = new LinkedList();

    linkedList.prepend(5);
    expect(linkedList.toString()).toBe('5');
    linkedList.prepend(10);
    expect(linkedList.toString()).toBe('10,5');
    linkedList.prepend(15);
    expect(linkedList.toString()).toBe('15,10,5');
    linkedList.prepend(20);
    expect(linkedList.toString()).toBe('20,15,10,5');
  })

  it('delete correctly', () => {
    const linkedList = new LinkedList();
    expect(linkedList.remove(39)).toBeNull();

    linkedList.append(5);
    linkedList.append(10);
    linkedList.append(15);
    linkedList.append(20);
    linkedList.append(25);
    linkedList.append(30);
    linkedList.append(35);
    linkedList.append(40);

    // delete value not exist
    expect(linkedList.remove(39)).toBeNull();

    // delete head
    expect(linkedList.remove(5)).toBe(5);
    expect(linkedList.toString()).toBe('10,15,20,25,30,35,40');

    // delete tail
    expect(linkedList.remove(40)).toBe(40);
    expect(linkedList.toString()).toBe('10,15,20,25,30,35');

    // delete middle
    expect(linkedList.remove(15)).toBe(15);
    expect(linkedList.toString()).toBe('10,20,25,30,35');

    expect(linkedList.remove(30)).toBe(30);
    expect(linkedList.toString()).toBe('10,20,25,35');
  })

  it('search correctly', () => {
    const linkedList = new LinkedList();
    expect(linkedList.search(39)).toBe(false);

    linkedList.append(5);
    linkedList.append(10);
    linkedList.append(15);
    linkedList.append(20);
    linkedList.append(25);
    linkedList.append(30);
    linkedList.append(35);
    linkedList.append(40);

    expect(linkedList.search(39)).toBe(false);

    expect(linkedList.search(5)).toBe(true);

    expect(linkedList.search(40)).toBe(true);

    expect(linkedList.search(16)).toBe(false);
  })
})