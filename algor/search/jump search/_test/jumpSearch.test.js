const jumpSearch = require('../');

describe('jump search', () => {
  it('found target element', () => {
    let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,18,19,20]

    expect(jumpSearch(a, 17)).toStrictEqual([16,17]);
  })

  it('found target element', () => {
    let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,18,19,20]

    expect(jumpSearch(a, 21)).toBeNull();
  })
})