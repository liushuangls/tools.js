/**
 * 检查 `valuve` 是否为 object-like
 * @param {*} value
 * @returns {boolean}
 */
function isObjectLike (value) {
  return typeof value === 'object' && value !== null
}

export default isObjectLike
