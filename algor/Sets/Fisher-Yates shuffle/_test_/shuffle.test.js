const shuffle = require('../');

describe('Fisher-Yates shuffle', () => {
  it('return null if params is a array', () => {
    expect(shuffle()).toBeNull();
  })

  it('shuffle correctly', () => {
    expect(shuffle([])).toStrictEqual([]);
    expect(shuffle([1])).toStrictEqual([1]);
    const arry = [1,2,3,4,5,6,7,8];
    const shuffled = shuffle(arry);
    expect(Array.isArray(shuffled)).toBe(true);
    expect(shuffled.length).toBe(8);
    expect(
      shuffled[0] !== 1 ||
      shuffled[1] !== 2 ||
      shuffled[2] !== 3 ||
      shuffled[3] !== 4
    ).toBe(true);

    const shuffled_2 = shuffle(arry);
    expect(shuffled_2).not.toStrictEqual(shuffled);
  })
})