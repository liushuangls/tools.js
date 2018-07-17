import getTag from '../../function/lang/getTag'

describe('getTag', () => {
  function test (value, str) {
    expect(getTag(value)).toBe(str)
  }

  it('return [object Null] if value=null', () => {
    test(null, '[object Null]')
  })

  it('return [object Undefined] if value=undefined', () => {
    test(undefined, '[object Undefined]')
  })

  it('return [object Number] if value=1', () => {
    test(1, '[object Number]')
  })

  it('return [object String] if value="1"', () => {
    test('1', '[object String]')
  })

  it('return [object Function] if value=() => {}', () => {
    test(() => {}, '[object Function]')
  })

  it('return [object Object] if value={}', () => {
    test({}, '[object Object]')
  })

  it('return [object Array] if value=[]', () => {
    test([], '[object Array]')
  })
})
