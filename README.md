# error-cause <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES-spec-compliant shim/polyfill/replacement for the `.cause` property on all Error types that works as far down as ES3

This package implements the [es-shim API](https://github.com/es-shims/api) “multi” interface. It works in an ES3-supported environment and complies with the proposed [spec](https://tc39.es/proposal-error-cause/).

## Getting started

```sh
npm install --save error-cause
```

## Usage/Examples

```js
const assert = require('assert');

require('error-cause/auto');

try {
		x();
} catch (e) {
		const actual = new Error('a better message!', { cause: e });
		assert(actual instanceof Error);
		assert(actual.cause === e);
}
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/error-cause
[npm-version-svg]: https://versionbadg.es/es-shims/error-cause.svg
[deps-svg]: https://david-dm.org/es-shims/error-cause.svg
[deps-url]: https://david-dm.org/es-shims/error-cause
[dev-deps-svg]: https://david-dm.org/es-shims/error-cause/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/error-cause#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/error-cause.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/error-cause.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/error-cause.svg
[downloads-url]: https://npm-stat.com/charts.html?package=error-cause
[codecov-image]: https://codecov.io/gh/es-shims/error-cause/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/error-cause/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/error-cause
[actions-url]: https://github.com/es-shims/error-cause/actions
