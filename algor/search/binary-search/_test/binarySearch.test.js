const binarySearch = require('..');

describe('binary search', () => {
  it('found target element', () => {
    let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,18,19,20]

    expect(binarySearch(a, 3)).toStrictEqual(2);
    expect(binarySearch(a, 17)).toStrictEqual(16);
    expect(binarySearch(a, 1)).toStrictEqual(0);
    expect(binarySearch(a, 20)).toStrictEqual(20);
  })

  it('found target element', () => {
    let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,18,19,20]

    expect(binarySearch(a, 21)).toBeNull();
  })
})