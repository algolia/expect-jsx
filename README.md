# expect-to-equal-jsx

[![Version][version-svg]][package-url] [![Build Status][travis-svg]][travis-url] [![License][license-image]][license-url] [![Downloads][downloads-image]][downloads-url]

[travis-svg]: https://img.shields.io/travis/algolia/expect-to-equal-jsx/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/algolia/expect-to-equal-jsx
[license-image]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/expect-to-equal-jsx.svg?style=flat-square
[downloads-url]: http://npm-stat.com/charts.html?package=expect-to-equal-jsx
[version-svg]: https://img.shields.io/npm/v/expect-to-equal-jsx.svg?style=flat-square
[package-url]: https://npmjs.org/package/expect-to-equal-jsx
[screenshot]: ./screenshot.png

toEqualJSX for [mjackson/expect](https://github.com/mjackson/expect).

It uses [algolia/react-element-to-jsx-string](https://github.com/algolia/react-element-to-jsx-string) in the background to turn React elements into formatted strings.

## Setup

```sh
npm install expect-to-equal-jsx --save[-dev]
```

## Usage

```js
import React from 'react';
import expect from 'expect';
import toEqualJSX from 'expect-to-equal-jsx';

expect.extend({toEqualJSX});

expect(<div/>).toEqualJSX(<div/>);
expect(<div a="1" b="2"/>).toEqualJSX(<div/>);
// Error: Expected '<div\n  a="1"\n  b="2"\n/>' to equal '<div />'
```

When using [mochajs/mocha](https://github.com/mochajs/mocha), this will look like this:

![Screenshot when using mocha][screenshot]

## Test

```sh
npm test
npm run test:watch
```

## Build

```sh
npm run build
npm run build:watch
```

## Thanks

To the people pointing me in the right directions like:
- https://github.com/facebook/react/issues/4835
- https://github.com/mjackson/expect/issues/37
