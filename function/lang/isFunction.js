import getTag from './getTag'

/**
 *判断`value`是否为`Function`
 * @param {*} value
 */
function isFunction (value) {
  const tag = getTag(value)
  return tag === '[object Function]' || tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' || tag === '[object Proxy]'
}

export default isFunction
