import isFunction from '../../function/lang/isFunction'

describe('isFuntion', () => {
  function test(value, bool) {
    expect(isFunction(value)).toBe(bool)
  }

  it ('return true if value=()=>{}', () => {
    test(() => {}, true)
  })

  it ('return true if value=async ()=>{}', () => {
    test(async () => {}, true)
  })

  it ('return true if value=function* () {}', () => {
    test(function* () {}, true)
  })

  it ('return false if value={}', () => {
    test({}, false)
  })
})
