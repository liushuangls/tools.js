/**
 * 判断一个值是否为number
 * @param {number} num
 * @returns {Boolean}
 */
function isNumber (num) {
  const number = +num
  // discard NaN and Infinity
  if ((number - number) !== 0) return false
  if (number === num) return true
  if (typeof num === 'string') {
    // discard number is ''
    if (number === 0 && num.trim() === '') return false
    return true
  }
  return false
}

export default isNumber
