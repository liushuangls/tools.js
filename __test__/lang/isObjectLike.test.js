import isObjectLike from '../../function/lang/isObjectLike'

describe('isObjectLike', () => {
  function test(value, bool) {
    expect(isObjectLike(value)).toBe(bool)
  }

  it ('return true if value={}', () => {
    test({}, true)
  })

  it ('return true if value=[1,2,3]', () => {
    test([1,2,3], true)
  })

  it ('return false if value=Function', () => {
    test(Function, false)
  })

  it ('return false if value=null', () => {
    test(null, false)
  })

  it ('return false if value=1', () => {
    test(1, false)
  })
})
