# tools.js 
[![Coverage Status](https://coveralls.io/repos/github/liushuangbill/Utils.js/badge.svg)](https://coveralls.io/github/liushuangbill/Utils.js)
[![Build Status](https://travis-ci.org/liushuangbill/tools.js.svg?branch=master)](https://travis-ci.org/liushuangbill/tools.js)

## Installation
In a browser:
```js
<script src="tools.js"></script>

use: _.xxx()
```

Using npm:
```npm
npm i -S tools.js
```

In Node.js:
```js
const _ = require('tools.js')
```

## API

### fromNow(date[, options])
calculating readable time differences from now and past or future dates.
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
Returns true if the value is a number or string number. 
```js
  Arguments: num: any

  Returns: Boolean
  
  Example:
    isNumber('') //false
    isNumber(Infinity) //false
    isNumber('123') // true
```