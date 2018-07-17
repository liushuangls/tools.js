const toString = Object.prototype.toString

/**
 * 判断`value`的类型
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag (value) {
  return toString.call(value)
}

export default getTag
