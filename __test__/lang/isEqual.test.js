import isEqual from '../../function/lang/isEqual'

describe('isEqual', () => {
  function test (a, b, bool) {
    expect(isEqual(a, b)).toBe(bool)
  }
  
  it('return true if a={a:1},b={a:1}', () => {
    test({a:1}, {a:1}, true)
  })

  it('return true if a=null,b=null', () => {
    test(null, null, true)
  })

  it('return true if a=undefined,b=undefined', () => {
    test(undefined, undefined, true)
  })

  it('return true if a=NaN,b=NaN', () => {
    test(NaN, NaN, true)
  })

  it('return true if a=Number(NaN),b=Number(NaN)', () => {
    test(new Number(NaN), new Number(NaN), true)
  })

  it('return true if a="1",b=new String(1)', () => {
    test('1', new String(1), true)
  })

  it('return true if a=1,b=new Number(1)', () => {
    test(1, new Number(1), true)
  })

  it('return true if a=/dd/,b=new RegExp("dd")', () => {
    test(/dd/, new RegExp('dd'), true)
  })

  it('return true if a=true,b=true', () => {
    test(true, true, true)
  })

  it('return true if a=true,b=true', () => {
    test(new Boolean(true), true, true)
  })

  it('return true if a=new Date("2018-07-07"),b=new Date("2018-07-07")', () => {
    test(new Date("2018-07-07"), new Date("2018-07-07"), true)
  })

  it('return true if a=[1,2,3],b=[1,2,3]', () => {
    test([1,2,3], [1,2,3], true)
  })

  it('return true if a=[1,{a: 1},3],b=[1,{a: 1},3]', () => {
    test([1,{a: 1},3], [1,{a: 1},3], true)
  })

  it('return true if a={a: {b: 1} },b={a: {b: 1} }', () => {
    test({a: {b: 1} }, {a: {b: 1} }, true)
  })

  it('return true if a=class,b=class', () => {
    class c {
      constructor () {
        this.a = 1
      }
    }
    let a = new c()
    let b = new c()
    test(a, b, true)
  })

  it('return true if a=Object,b=Object', () => {
    let a = { foo: { coo: null } }
    let b = { foo: { coo: null } }
    a.foo.coo = a
    b.foo.coo = b
    test(a, b, true)
  })

  it('return true if a=Array,b=Array', () => {
    let a = [ { coo: null } ]
    let b = [ { coo: null } ]
    a[0].coo = a
    b[0].coo = b
    test(a, b, true)
  })

  it('return false if a=0,b=-0', () => {
    test(0, -0, false)
  })

  it('return false if a=0,b=-0', () => {
    test(0, new Number(-0), false)
  })

  it('return false if a=[1,2],b=[1,2,3]', () => {
    test([1,2], [1,2,3], false)
  })

  it('return false if a={a: 1, b: 2},b={a: 1}', () => {
    test({a: 1, b: 2}, {a: 1}, false)
  })

  it('return false if a={a: 1, b: 2},b=[1,2]', () => {
    test({a: 1, b: 2}, [1,2], false)
  })

  it('return false if a=null,b=-undefined', () => {
    test(null, undefined, false)
  })

  it('return false if a=0,b=-0', () => {
    test(0, -0, false)
  })

  it('return false if a=function,b=function', () => {
    test(function () {}, function () {}, false)
  })

  it('return false if a=class,b=class', () => {
    class c {
      constructor(a) {
        this.a = a
      }
    }
    let a = new c(1)
    let b = new c(2)
    test(a, b, false)
  })

  it('return false if a=1,b=true', () => {
    test(1, true, false)
  })

  it('return false if a=0,b=false', () => {
    test(0, false, false)
  })

  it('return false if a=class, b=class', () => {
    class a1 {
      constructor(a) {
        this.a = a
      }
    }
    class b1 {
      constructor(a) {
        this.a = a
      }
    }
    let a = new a1()
    let b = new b1()
    test(a, b, false)
  })
})
