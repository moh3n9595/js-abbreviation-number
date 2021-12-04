<div align="center">
	<p align="center">
		<img src="./images/cover.png"/>
	</p>
	<h1 align="center">js-abbreviation-number</h1>
	<p align="center">Abbreviate numbers in javascript</p>

![CI/CD](https://github.com/moh3n9595/js-abbreviation-number/workflows/Continuous%20Integration/badge.svg)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moh3n9595/js-abbreviation-number/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/moh3n9595/js-abbreviation-number/compare)
[![codecov](https://codecov.io/gh/moh3n9595/js-abbreviation-number/branch/master/graph/badge.svg)](https://codecov.io/gh/moh3n9595/js-abbreviation-number) [![CodeFactor](https://www.codefactor.io/repository/github/moh3n9595/js-abbreviation-number/badge/master)](https://www.codefactor.io/repository/github/moh3n9595/js-abbreviation-number/overview/master)
[![NPM](https://img.shields.io/npm/v/js-abbreviation-number.svg)](https://www.npmjs.com/package/js-abbreviation-number)
[![GitHub contributors](https://img.shields.io/github/contributors/moh3n9595/js-abbreviation-number.svg)](https://GitHub.com/moh3n9595/js-abbreviation-number/contributors/)

</div>
<hr />

## Installation

```
npm install js-abbreviation-number
```

## Usage

#### abbreviateNumber

```js
import { abbreviateNumber } from "js-abbreviation-number";

const num = abbreviateNumber(1000, 1); // expected 1.0k

const num = abbreviateNumber(12, 0); // expected 12

const num = abbreviateNumber(1100, 2); // expected 1.10k

const num = abbreviateNumber(1100, 2, {padding: false}); // expected 1.1k

const num = abbreviateNumber(1234.56, 2); // expected 1.23k

const num = abbreviateNumber(1234, 1, {symbols: ['', 'kg']}); // expected 1.2kg

const num = abbreviateNumber(1234567, 1, {symbols: ['', 'kg']}); // expected 1234.5kg
```

`abbreviateNumber(num: number, digit?: number, options?: {symbols?: string[]; padding: boolean}): string`

`digit` is optional (unless you need to specify the `options` object). It defaults to 1.

The `options` object is optional too:

- `symbols` can be an array of units, defaulting to `["", "k", "M", "G", "T", "P", "E"]`.
- `padding` determines whether to keep the exact number of digits or to drop trailing zeroes.

#### unabbreviateNumber

```js
import { unabbreviateNumber } from "js-abbreviation-number";

const num = unabbreviateNumber("-25"); // expected -25

const num = unabbreviateNumber("-1.3k"); // expected -1300

const num = unabbreviateNumber("1.123456k"); // expected 1123.456

const num = unabbreviateNumber("666kilo", ["", "kilo", "Mega"]); // expected 666000
```

`unabbreviateNumber(num: string, symbols?: string[]): number`

`symbols` is optional that can be an array of units, defaulting to `["", "k", "M", "G", "T", "P", "E"]`.

## Contributing

Thank you for your interest in contributing! Please feel free to put up a PR for any issue or feature request.

## Give me a Star

If you think this project is helpful just give me a ⭐️ Star is enough because i don't drink coffee 😃

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/moh3n9595/js-abbreviation-number/blob/master/LICENSE) file for details

## Author

Made with ❤️ by [Mohsen Madani](https://github.com/moh3n9595).

