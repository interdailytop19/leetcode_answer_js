const quickSort = require('..');

describe('merge sort', () => {
  it('sort correctly', () => {
    let a = [];
    expect(quickSort(a)).toStrictEqual([]);

    let b = [1];
    expect(quickSort(b)).toStrictEqual([1]);

    let c = [1,3,4,9,2,6,5,8,7,10];
    expect(quickSort(c)).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
  })
})