const linearSearch = require('../linearSearch');

describe('linear search', () => {
  it('found target element', () => {
    let a = [1,2,3,4,5,4]

    expect(linearSearch(a, 4)).toStrictEqual([3,5])
  })

  it('handle nothing found', () => {
    let a = [1,2,3,4,5,4]

    expect(linearSearch(a, 6)).toBeNull()
  })
})