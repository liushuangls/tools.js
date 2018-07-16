const toString = Object.prototype.toString

/**
 * 判断`value`的类型
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag (value) {
  // 正确区分Undefined 和 null
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

export default getTag
