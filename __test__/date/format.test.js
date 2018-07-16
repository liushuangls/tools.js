import format from '../../function/date/format'

describe('test format', () => {
  function testFormat({time, template, str, err=false}) {
    if (err) {
      try {
        format(time, template)
      } catch(e) {
        expect(e.message).toBe(str)
      }
    } else {
      expect(format(time, template)).toBe(str)
    }
  }

  it("should return '2018-06-05 00:00' when time=1528128000000", () => {
    expect(format(1528128000000)).toBe('2018-06-05 00:00')
  })

  it("should return '2018-06-05 00:00' when time='1528128000000'", () => {
    expect(format('1528128000000')).toBe('2018-06-05 00:00')
  })

  it("should return '2018-06-05 00:00' when time='2018-06-05 8:00'", () => {
    expect(format('2018-06-05 8:00')).toBe('2018-06-05 08:00')
  })

  it("should return '2018-06-05 00:00:00'", () => {
    testFormat({
      time: 1528128000000,
      template: 'YYYY-MM-DD hh:mm:ss',
      str: '2018-06-05 00:00:00'
    })
  })

  it("should return '2018-11-15 00:00:00'", () => {
    testFormat({
      time: 1542211200000,
      template: 'YYYY-MM-DD hh:mm:ss',
      str: '2018-11-15 00:00:00'
    })
  })

  it("should return '2018-11-15 11:11:00'", () => {
    testFormat({
      time: 1542251471000,
      template: 'YYYY-MM-DD hh:mm:ss',
      str: '2018-11-15 11:11:11'
    })
  })

  it("should return '18/6/5 0:0:0'", () => {
    testFormat({
      time: 1528128000000,
      template: 'YY/M/D h:m:s',
      str: '18/6/5 0:0:0'
    })
  })

  it(
    "should return '18-6-5 0:0' when time=1528128000000, template='YY-M-D h:m'",
    () => {
      testFormat({ 
        time: 1528128000000, 
        template: 'YY-M-D h:m',
        str: '18-6-5 0:0'
      })
  })

  it(
    "should return 'Y-6-5 0:0' when time=1528128000000, template='Y-M-D h:m'",
    () => {
      testFormat({
        time: 1528128000000,
        template: 'Y-M-D h:m',
        str: 'Y-6-5 0:0'
      })
    })

  it(
    "should return '2018/06/05 00:00'",
    () => {
      testFormat({
        time: 1528128000000,
        template: 'YYYY/MM/DD hh:mm',
        str: '2018/06/05 00:00'
      })
    })

  it(
    "should return '2018/06",
    () => {
      testFormat({
        time: 1528128000000,
        template: 'YYYY/MM',
        str: '2018/06'
      })
    })

  it(
    "should return '2018/06",
    () => {
      testFormat({
        time: 1528128000000,
        template: 'YYY/MM',
        str: '2018/06'
      })
    })

  it(
    "should return 'xxx-xx",
    () => {
      testFormat({
        time: 1528128000000,
        template: 'xxx-xx',
        str: 'xxx-xx'
      })
    })

  it(
    "should return error",
    () => {
      testFormat({
        time: 'dsd',
        template: 'YYYY/MM/DD hh:mm',
        str: 'argv[0] can not convert to Date',
        err: true
      })
    })

  it(
    "should return error",
    () => {
      testFormat({
        time: 1528128000000,
        template: 123,
        str: 'argv[1] it must be string',
        err: true
      })
    })

  it(
    "should return error",
    () => {
      testFormat({
        time: '2018-01-01 sssf',
        template: 123,
        str: 'argv[0] can not convert to Date',
        err: true
      })
    })

})
