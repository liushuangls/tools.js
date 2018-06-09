# tools.js
[![Coverage Status](https://coveralls.io/repos/github/liushuangbill/dates.js/badge.svg?branch=master)](https://coveralls.io/github/liushuangbill/dates.js?branch=master)
[![Build Status](https://travis-ci.org/liushuangbill/tools.js.svg?branch=master)](https://travis-ci.org/liushuangbill/tools.js)

## Installation
In a browser:
```js
<script src="tools.js"></script>

use: tools.xxx()
```

Using npm:
```npm
npm i -S tools.js
```

In Node.js:
```js
const tools = require('tools.js')
```

ES2015+:
```
import { xxx } from 'tools.js'
or
import * as tools from 'tools.js'
```

## API
### format(date[, template='YYYY-MM-DD hh:mm'])
返回指定格式的时间字符串。
```js
  Arguments:
    date: timestamp or FormatDateTime
    template: String, Y: year, M: month, D: day, h: hour, m: minute, s: second
    
  Returns: String

  Example:
    format(1528128000000)
    // 2018-06-05 00:00

    format(1528128000000, 'YYY/MM/DD h:m:s')
    // 2018/06/05 0:0:0
```

### fromNow(date[, options=new Date().getTime()])
计算并返回可读时间差。
```js
  Arguments:
    date: timestamp or FormatDateTime
    options: timestamp or FormatDateTime

  Returns:
    (String): "1秒以前 or 1分钟以前 or 1小时以前 or 1天以前 ..."

  Example:
    fromNow('2018/01/01');
    // 2018/01/01 => new Date()

    forNow('2018/01/01', '2018/01/02')
    // 2018/01/01 => 2018/01/02
```

### isNumber(num)
判断变量是否为Number。
```js
  Arguments: num: any

  Returns: Boolean
  
  Example:
    isNumber('') //false
    isNumber(Infinity) //false
    isNumber('123') // true
```
