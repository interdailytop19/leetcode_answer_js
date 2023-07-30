const linearFind = require('../linear-find');
const shuffle = require('../../Sets/Fisher-Yates shuffle')

describe('linear find', () => {
  it('find collect', () => {
    

    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    expect(linearFind(a, 2)).toBe(3);

    // const b = shuffle(a);
    // expect(linearFind(b, 6)).toBe(7);

    // const c = shuffle(b);
    // expect(linearFind(c, 2)).toBe(3);
    for(let i= 0; i < 100; i++) {
      const shuffled_arry = shuffle(a);
      const random_index = Math.floor(Math.random() * a.length);
      expect(linearFind(shuffled_arry, random_index)).toBe(a[random_index]);
    }
  })
})