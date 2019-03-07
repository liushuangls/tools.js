import isNumber from '../number/isNumber'

/**
 * 返回格式化时间字符串
 * @param {Date | string} time
 * @param {string} template
 * @returns {string}
 */
function format (time = new Date(), template = 'y-M-d h:m') {
  time = isNaN(Number(time)) ? time : Number(time)
  const ms = new Date(time).getTime()

  if (!isNumber(ms)) {
    throw new TypeError('argv[0] can not convert to Date')
  }
  if (typeof template !== 'string') {
    throw new TypeError('argv[1] it must be string')
  }

  const date = new Date(ms)

  const o = {
    'y+': String(date.getFullYear()),
    'M+': String(date.getMonth() + 1).padStart(2, 0),
    'd+': String(date.getDate()).padStart(2, 0),
    'h+': String(date.getHours()).padStart(2, 0),
    'm+': String(date.getMinutes()).padStart(2, 0),
    's+': String(date.getSeconds()).padStart(2, 0)
  }

  Object.keys(o).forEach(k => {
    if (k === 'm+' || k === 'M+') {
      template = template.replace(new RegExp(k, 'g'), o[k])
    } else {
      template = template.replace(new RegExp(k, 'gi'), o[k])
    }
  })

  return template
}

export default format
