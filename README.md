# tools.js [![Coverage Status](https://coveralls.io/repos/github/liushuangbill/Utils.js/badge.svg)](https://coveralls.io/github/liushuangbill/Utils.js)

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
### fromNow(date, [options])
```js
  // 用于计算从过去到现在或未来日期的可读时间差。
  date: timestamp or FormatDateTime

  fromNow('2018/01/01');
  // 2018/01/01 => new Date()

  forNow('2018/01/01', '2018/01/02')
  // 2018/01/01 => 2018/01/02

  return: "1秒以前，1分钟以前，1小时以前，1天以前 ..."
```