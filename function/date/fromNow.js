import isNumber from '../number/isNumber'

/**
 * 返回可读时间差
 * @param {Date | string} time
 * @param {Date | string | null} now
 * @returns {string}
 */
function fromNow (time, now) {
  now = now || new Date()

  const ms = isNumber(time) ? +time : new Date(time).getTime()
  const msNow = isNumber(now) ? +now : new Date(now).getTime()

  if (!isNumber(ms)) throw new TypeError('argv[0] can not convert to Date')
  if (!isNumber(msNow)) throw new TypeError('argv[1] can not convert to Date')
  if (msNow < ms) throw new Error('grav[1] must > grgv[0]')

  const gap = msNow - ms

  const msMinute = 60 * 1000
  const msHour = msMinute * 60
  const msDay = msHour * 24
  const msMonth = msDay * 30
  const msYear = msDay * 365

  const se = Math.floor(gap / 1000)
  const mi = Math.floor(gap / msMinute)
  const hour = Math.floor(gap / msHour)
  const day = Math.floor(gap / msDay)
  const mo = Math.floor(gap / msMonth)
  const y = Math.floor(gap / msYear)

  if (se === 0) return '刚刚'
  else if (se < 60) return `${se}秒以前`
  else if (mi < 60) return `${mi}分钟以前`
  else if (hour < 24) return `${hour}小时以前`
  else if (day < 30) return `${day}天以前`
  else if (mo < 12) return `${mo}个月以前`
  else return `${y}年以前`
}

export default fromNow
