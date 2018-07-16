import isFunction from './isFunction'

/**
 * 判断两个object-like对象是否相等
 * @param {*} a
 * @param {*} b
 * @param {*} aStack
 * @param {*} bStack
 * @returns {Boolean}
 */
function isEqual (a, b, aStack, bStack) {
  // === 结果为 true 的区别出 +0 和 -0
  if (a === b) return a !== 0 || 1 / a === 1 / b

  // typeof null 的结果为 object ，这里做判断，是为了让有 null 的情况尽早退出函数
  if (a == null || b == null) return false

  // 判断 NaN
  if (a !== a) return b !== b

  // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
  const type = typeof a
  if (type !== 'function' && type !== 'object' && typeof b !== 'object') return false

  // 更复杂的对象使用 deepEq 函数进行深度比较
  return deepEq(a, b, aStack, bStack)
};

function deepEq (a, b, aStack, bStack) {
  const toString = Object.prototype.toString
  // 判断 a 和 b 的内部属性 [[class]] 是否相同
  const className = toString.call(a)
  if (className !== toString.call(b)) return false

  switch (className) {
    case '[object RegExp]':
    case '[object String]':
      // 隐式类型转换，使包装类 === 字面量
      return '' + a === '' + b
    case '[object Number]':
      // NaN
      if (+a !== +a) return +b !== +b
      // -0 不等于 +0， 1/-0 => -Infinity
      return +a === 0 ? 1 / +a === 1 / b : +a === +b
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b
  }

  const areArrays = className === '[object Array]'
  // 不是数组
  if (!areArrays) {
    // 过滤掉两个函数的情况
    if (typeof a !== 'object' || typeof b !== 'object') return false

    const aCtor = a.constructor
    const bCtor = b.constructor

    // 1.在存在构造函数的情况下
    // 2.不是同一个类的构造函数
    // 3.不是Object类的实例
    // 那么就不相等
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
      return false
    }
  }

  aStack = aStack || []
  bStack = bStack || []
  let length = aStack.length

  // 检查是否有循环引用的部分
  while (length--) {
    if (aStack[length] === a) {
      return bStack[length] === b
    }
  }

  aStack.push(a)
  bStack.push(b)

  // 数组判断
  if (areArrays) {
    length = a.length
    if (length !== b.length) return false

    while (length--) {
      if (!isEqual(a[length], b[length], aStack, bStack)) return false
    }
  }

  // 对象判断
  else {
    const keys = Object.keys(a)
    let key
    length = keys.length

    if (Object.keys(b).length !== length) return false
    while (length--) {
      key = keys[length]
      if (!(b.hasOwnProperty(key) && isEqual(a[key], b[key], aStack, bStack))) return false
    }
  }

  aStack.pop()
  bStack.pop()
  return true
}

export default isEqual
