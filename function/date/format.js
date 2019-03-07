import isNumber from '../number/isNumber'

/**
 * 返回格式化时间字符串
 * @param {Date | string} time
 * @param {string} template
 * @returns {string}
 */
function format (time, template = 'YYYY-MM-DD hh:mm') {
  time = isNaN(Number(time)) ? time : Number(time)
  const ms = new Date(time).getTime()

  if (!isNumber(ms)) {
    throw new Error('argv[0] can not convert to Date')
  }
  if (typeof template !== 'string') {
    throw new Error('argv[1] it must be string')
  }

  const date = new Date(ms)
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1)
  const day = String(date.getDate())
  const hour = String(date.getHours())
  const minutes = String(date.getMinutes())
  const seconds = String(date.getSeconds())

  const format = template.replace(
    /Y{2,4}|M{1,2}|D{1,2}|h{1,2}|m{1,2}|s{1,2}/g,
    (match) => {
      switch (match) {
        case 'YY':
          return year.slice(2)
        case 'YYY':
        case 'YYYY':
          return year
        case 'M':
          return month
        case 'MM':
          return month.length === 1 ? `0${month}` : month
        case 'D':
          return day
        case 'DD':
          return day.length === 1 ? `0${day}` : day
        case 'h':
          return hour
        case 'hh':
          return hour.length === 1 ? `0${hour}` : hour
        case 'm':
          return minutes
        case 'mm':
          return minutes.length === 1 ? `0${minutes}` : minutes
        case 's':
          return seconds
        case 'ss':
          return seconds.length === 1 ? `0${seconds}` : seconds
      }
    }
  )
  return format
}

export default format
