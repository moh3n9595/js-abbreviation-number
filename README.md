# js-abbreviation-number &middot; [![Circle CI](https://circleci.com/gh/moh3n9595/js-abbreviation-number/tree/master.svg?style=shield)](https://circleci.com/gh/moh3n9595/js-abbreviation-number) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moh3n9595/js-abbreviation-number/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/moh3n9595/js-abbreviation-number/compare) [![codecov](https://codecov.io/gh/moh3n9595/js-abbreviation-number/branch/master/graph/badge.svg)](https://codecov.io/gh/moh3n9595/js-abbreviation-number)



<p align="center">
    <img src="./images/cover.png">
  <br>
  <p align="center">
    Abbreviate numbers in javascript
  </p>
</p>

## Installation

```
npm install js-abbreviation-number
```

## Usage

```

import { abbreviateNumber } from "js-abbreviation-number";

const num = abbreviateNumber(1000, 1); // expected 1.0K

const num = abbreviateNumber(12, 0); // expected 12

const num = abbreviateNumber(1100, 2); // expected 1.10K

const num = abbreviateNumber(1100, 2, {padding: false}); // expected 1.1K

const num = abbreviateNumber(1234.56, 2); // expected 1.23K

const num = abbreviateNumber(1234, 1, {symbols: ['', 'kg']}); // expected 1.2kg

const num = abbreviateNumber(1234567, 1, {symbols: ['', 'kg']}); // expected 1234.5kg

```

`abbreviateNumber(num: number, digit?: number, options?: {symbols?: string[]; padding: boolean}): string`

`digit` is optional (unless you need to specify the `options` object). It defaults to 1.

The `options` object is optional too:

- `symbols` can be an array of units, defaulting to `["", "K", "M", "G", "T", "P", "E"]`.
- `padding` determines whether to keep the exact number of digits or to drop trailing zeroes.


## Contributing

Thank you for your interest in contributing! Please feel free to put up a PR for any issue or feature request.

## Give me a Star

If you think this project is helpful just give me a ⭐️ Star is enough because i don't drink coffee 😃

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/moh3n9595/js-abbreviation-number/blob/master/LICENSE) file for details

## Author

Made with ❤️ by [Mohsen Madani](https://github.com/moh3n9595).

