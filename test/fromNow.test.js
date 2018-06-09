import fromNow from '../function/date/fromNow'

describe('test fromNow', () => {
  function testFromNow({time, now, str, err=false}) {
    if (err) {
      try {
        fromNow(time, now);
      } catch (e) {
        expect(e.message).toBe(str);
      }
    } else {
      expect(fromNow(time, now)).toBe(str)
    }
  }

  it("should return 刚刚 when time=1525399200000, now=1525399200000", () => {
    testFromNow({
      time: "1525399200000",
      now: "1525399200000",
      str: "刚刚"
    });
  });

  it("should return 1秒以前 when time=1525399200000, now=1525399201000", () => {
    testFromNow({
      time: "1525399200000",
      now: "1525399201000",
      str: "1秒以前"
    });
  });

  it('should return 1分钟以前 when time=2018/05/04 10:00, now=2018/05/04 10:01', ()=> {
    testFromNow({ 
      time: "2018/05/04 10:00", 
      now: "2018/05/04 10:01", 
      str: "1分钟以前" 
    });
  })

  it("should return 1小时以前 when time=2018/05/04 10:00, now=2018/05/04 11:00", () => {
    testFromNow({
      time: "2018/05/04 10:00",
      now: "2018/05/04 11:00",
      str: "1小时以前"
    });
  });

  it("should return 23小时以前 when time=2018/05/04 10:00, now=2018/05/05 9:00", () => {
    testFromNow({
      time: "2018/05/04 10:00",
      now: "2018/05/05 9:00",
      str: "23小时以前"
    });
  });

  it("should return 1天以前 when time=2018/05/04 10:00, now=2018/05/05 10:00", () => {
    testFromNow({
      time: "2018/05/04 10:00",
      now: "2018/05/05 10:00",
      str: "1天以前"
    });
  });

  it("should return 1个月以前 when time=2018/05/04 10:00, now=2018/06/04 10:00", () => {
    testFromNow({
      time: "2018/05/04 10:00",
      now: "2018/06/04 10:00",
      str: "1个月以前"
    });
  });

  it("should return 1年以前 when time=2018/05/04 10:00, now=2019/05/04 10:00", () => {
    testFromNow({
      time: "2018/05/04 10:00",
      now: "2019/05/04 10:00",
      str: "1年以前"
    });
  });

  it("should return 200年以前 when time=2018/05/04 10:00, now=2218/05/04 10:00", () => {
    testFromNow({
      time: "2018/05/04 10:00",
      now: "2218/05/04 10:00",
      str: "200年以前"
    });
  });

  it("should return normal when now=''", () => {
    expect(fromNow('2018/05/01', '')).toMatch(/[0-9]/);
  });

  it("should throw error when time=''", () => {
    testFromNow({
      time: "",
      now: "2218/05/04 10:00",
      str: "argv[0] can not convert to Date",
      err: true
    });
  });

  it("should throw error when time > now", () => {
    testFromNow({
      time: "2218/05/05 10:00",
      now: "2218/05/04 10:00",
      str: "grav[1] must > grgv[0]",
      err: true
    });
  });

  it("should throw error when time is 'ccc'", () => {
    testFromNow({
      time: "ccc",
      now: "2218/05/04 10:00",
      str: "argv[0] can not convert to Date",
      err: true
    });
  });

  it("should throw error when now is 'ddd'", () => {
    testFromNow({
      time: "2218/05/04 10:00",
      now: "ddd",
      str: "argv[1] can not convert to Date",
      err: true
    });
  });

})