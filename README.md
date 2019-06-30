## Format Numerals

format-numerals is a JavaScript library to format numbers into
strings based on various available configs

[![Build Status](https://travis-ci.org/roy2393/format-numerals.svg?branch=master)](https://travis-ci.org/roy2393/format-numerals)
![Codecov branch](https://img.shields.io/codecov/c/github/roy2393/format-numerals/master.svg)
![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/roy2393/format-numerals.svg)
![GitHub](https://img.shields.io/github/license/roy2393/format-numerals.svg)

## Install

```bash
$ npm install format-numerals
```

## Usage

```js
const { formatNumerals }  = require('format-numerals')

// By default comma separator will be placed after every 3rd digit from
// left of decimal point
formatNumber(100000.53)
// => "100,000.53"

// comma: 1, will follow Indian number system and will place comma separator
// after in 3-2-2... pattern
formatNumber(100000, {comma: 1}
// => "1,00,000"

// curr: 'INR' will add currency symbol before the number string
formatNumber(1000000, { curr: 'INR', comma: 1 })
// => "₹10,00,000"

formatNumber(1000000, { curr: 'USD' })
// => "$1,000,000"
```

## License

MIT
