# expect-jsx

[![Version][version-svg]][package-url] [![Build Status][travis-svg]][travis-url] [![License][license-image]][license-url] [![Downloads][downloads-image]][downloads-url]

[travis-svg]: https://img.shields.io/travis/algolia/expect-jsx/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/algolia/expect-jsx
[license-image]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/expect-jsx.svg?style=flat-square
[downloads-url]: http://npm-stat.com/charts.html?package=expect-jsx
[version-svg]: https://img.shields.io/npm/v/expect-jsx.svg?style=flat-square
[package-url]: https://npmjs.org/package/expect-jsx
[screenshot]: ./screenshot.png

toEqualJSX for [mjackson/expect](https://github.com/mjackson/expect).

It uses [algolia/react-element-to-jsx-string](https://github.com/algolia/react-element-to-jsx-string) in the background to turn React elements into formatted strings.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Setup](#setup)
- [API](#api)
- [Usage](#usage)
- [A note about functions](#a-note-about-functions)
- [Test](#test)
- [Build](#build)
- [Similar projects](#similar-projects)
- [Thanks](#thanks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Setup

You will most probably use this plugin as a development dependency.

```sh
npm install expect-jsx --save-dev
```

## API

- expect(ReactComponent|JSX).toEqualJSX(ReactComponent|JSX)
- expect(ReactComponent|JSX).toNotEqualJSX(ReactComponent|JSX)
- expect(ReactComponent|JSX).toIncludeJSX(ReactComponent|JSX)
- expect(ReactComponent|JSX).toNotIncludeJSX(ReactComponent|JSX)

## Usage

Here's an example using [mochajs/mocha](https://github.com/mochajs/mocha).

```js
import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

class TestComponent extends React.Component {}

describe('expect-jsx', () => {
  it('works', () => {
    expect(<div />).toEqualJSX(<div />);
    // ok

    expect(<div a="1" b="2" />).toEqualJSX(<div />);
    // Error: Expected '<div\n  a="1"\n  b="2"\n/>' to equal '<div />'

    expect(<span />).toNotEqualJSX(<div/>);
    // ok

    expect(<div><TestComponent /></div>).toIncludeJSX(<TestComponent />);
    // ok
  });
});
```

It looks like this when ran:

![Screenshot when using mocha][screenshot]

## A note about functions

`toEqualJSX` will not check for function references, it only checks that if a `function` was
expected somewhere, there's also a function in the actual data.

It's your responsibility to then unit test those functions.

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

## Similar projects

There are multiple similar projects for other assertions libraries, all based on
[algolia/react-element-to-jsx-string](https://github.com/algolia/react-element-to-jsx-string).
For instance:

* [chai-equal-jsx](https://www.npmjs.com/package/chai-equal-jsx), assertions for chai:
  `expect(<div />).to.equalJSX(<div />);`
* [chai-jsx](https://www.npmjs.com/package/chai-jsx), assertions for chai:
  `expect(<div />).jsx.to.equal(<div />);`
* [jsx-chai](https://github.com/bkonkle/jsx-chai), assertions for chai:
  `expect(<div />).to.deep.equal(<div />);`
* [tape-jsx-equals](https://www.npmjs.com/package/tape-jsx-equals), assertions for tape:
  `t.jsxEquals(<div />, <div />);`
* [jasmine-expect-jsx](https://www.npmjs.com/package/jasmine-expect-jsx), assertions for jasmine:
  `expect(<div />).toEqualJSX(<div />);`

## Thanks

To the people pointing me in the right directions like:
- https://github.com/facebook/react/issues/4835
- https://github.com/mjackson/expect/issues/37
