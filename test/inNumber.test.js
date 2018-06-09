import isNumber from '../function/number/isNumber'

describe('test isNumer', () => {
  function testIsNumber(num, bool) {
    expect(isNumber(num)).toBe(bool)
  }

  it('should return true when num=0', () => {
    testIsNumber(0, true)
  })

  it('should return true when num="0"', () => {
    testIsNumber('0', true)
  })

  it('should return true when num=1', () => {
    testIsNumber(1, true)
  })

  it("should return true when num=-1", () => {
    testIsNumber(-1, true);
  });

  it("should return true when num='-1'", () => {
    testIsNumber('-1', true);
  });

  it("should return true when num=0.1", () => {
    testIsNumber(0.1, true);
  });

  it("should return true when num='0.1'", () => {
    testIsNumber("0.1", true);
  });

  it('should return false when num=""', () => {
    testIsNumber('', false)
  })

  it('should return false when num="12c"', () => {
    testIsNumber("12c", false);
  });

  it("should return false when num=1.7976931348623157E+10308", () => {
    testIsNumber(1.7976931348623157E+10308, false);
  });

  it('should return false when num={}', () => {
    testIsNumber({}, false);
  });

  it("should return false when num=[]", () => {
    testIsNumber([], false);
  });

  it("should return false when num=Infinity", () => {
    testIsNumber(Infinity, false);
  });

  it("should return false when num=null", () => {
    testIsNumber(null, false);
  });
})