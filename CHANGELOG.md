<a name="2.6.0"></a>
# [2.6.0](https://github.com/algolia/expect-jsx/compare/v2.5.1...v2.6.0) (2016-06-06)



<a name="2.5.0"></a>
# [2.5.0](https://github.com/algolia/expect-jsx/compare/v2.5.1...v2.5.0) (2016-04-15)




<a name="2.4.0"></a>
# [2.4.0](https://github.com/algolia/expect-jsx/compare/v2.5.0...v2.4.0) (2016-04-15)




<a name="2.3.0"></a>
# [2.3.0](https://github.com/algolia/expect-jsx/compare/2.4.0...v2.3.0) (2016-03-09)




<a name="2.2.2"></a>
## [2.2.2](https://github.com/algolia/expect-jsx/compare/2.3.0...v2.2.2) (2016-02-02)




<a name="2.2.2"></a>
## [2.2.2](https://github.com/algolia/expect-jsx/compare/v2.2.1...v2.2.2) (2016-01-05)




<a name="2.2.0"></a>
# [2.2.0](https://github.com/algolia/expect-jsx/compare/v2.1.3...v2.2.0) (2015-12-08)

### Features

* add toNotIncludeJSX ([72740a6](https://github.com/algolia/expect-jsx/commit/72740a67e87e1ddeaea2c3026796a626dc2cdaae))

<a name="2.1.3"></a>
## [2.1.3](https://github.com/algolia/expect-jsx/compare/v2.1.0...v2.1.3) (2015-11-30)


### Bug Fixes

* handle {number} and {false} {true} cases ([0a4ccf5](https://github.com/algolia/expect-jsx/commit/0a4ccf5))
* stop replacing with <whitespace> ([b109405](https://github.com/algolia/expect-jsx/commit/b109405))
* **to-jsx:** upgrade react-element-to-jsx-string, provide Array.fill polyfill ([19ddde5](https://github.com/algolia/expect-jsx/commit/19ddde5))



<a name="2.1.2"></a>
## [2.1.2](https://github.com/algolia/expect-jsx/compare/v2.1.0...v2.1.2) (2015-11-08)


### Bug Fixes

* handle {number} and {false} {true} cases ([0a4ccf5](https://github.com/algolia/expect-jsx/commit/0a4ccf5))
* stop replacing with <whitespace> ([b109405](https://github.com/algolia/expect-jsx/commit/b109405))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/algolia/expect-jsx/compare/v2.1.0...v2.1.1) (2015-11-08)


### Bug Fixes

* handle {number} and {false} {true} cases ([0a4ccf5](https://github.com/algolia/expect-jsx/commit/0a4ccf5))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/algolia/expect-jsx/compare/v2.0.1...v2.1.0) (2015-10-25)


### Features

* handle ref= key= ([ec5312d](https://github.com/algolia/expect-jsx/commit/ec5312d))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/algolia/expect-jsx/compare/v2.0.0...v2.0.1) (2015-10-21)


### Bug Fixes

* handle inline props string replacement ([5e89032](https://github.com/algolia/expect-jsx/commit/5e89032))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/algolia/expect-jsx/compare/v1.1.4...v2.0.0) (2015-10-19)


### Bug Fixes

* change package name to expect-jsx ([665ed66](https://github.com/algolia/expect-jsx/commit/665ed66)), closes [#3](https://github.com/algolia/expect-jsx/issues/3)

### Features

* add toNotEqualJSX, toIncludeJSX, change default export ([6402777](https://github.com/algolia/expect-jsx/commit/6402777)), closes [#2](https://github.com/algolia/expect-jsx/issues/2) [#4](https://github.com/algolia/expect-jsx/issues/4) [#5](https://github.com/algolia/expect-jsx/issues/5) [#6](https://github.com/algolia/expect-jsx/issues/6)


### BREAKING CHANGES

* you now have to use the package like this:

```js
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);
```
* package is now installed with `npm install expect-jsx
--save-dev`



<a name="1.1.4"></a>
## [1.1.4](https://github.com/algolia/expect-jsx/compare/v1.1.3...v1.1.4) (2015-10-16)


### Bug Fixes

* handle high order components (~decorators) name ([96f13af](https://github.com/algolia/expect-jsx/commit/96f13af))



<a name="1.1.3"></a>
## [1.1.3](https://github.com/algolia/expect-jsx/compare/v1.1.2...v1.1.3) (2015-10-16)


### Bug Fixes

* handle props.children.length > 1 + array values ([c86a9a4](https://github.com/algolia/expect-jsx/commit/c86a9a4))



<a name="1.1.2"></a>
## [1.1.2](https://github.com/algolia/expect-jsx/compare/v1.1.1...v1.1.2) (2015-10-16)


### Bug Fixes

* handle props.children.length > 1 ([a76b7c2](https://github.com/algolia/expect-jsx/commit/a76b7c2))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/algolia/expect-jsx/compare/v1.1.0...v1.1.1) (2015-10-16)


### Bug Fixes

* handle empty objects ([df08165](https://github.com/algolia/expect-jsx/commit/df08165))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/algolia/expect-jsx/compare/v1.0.3...v1.1.0) (2015-10-16)


### Features

* deeply set functions and React elements now well inlined ([8424e21](https://github.com/algolia/expect-jsx/commit/8424e21))



<a name="1.0.3"></a>
## [1.0.3](https://github.com/algolia/expect-jsx/compare/v1.0.2...v1.0.3) (2015-10-16)


### Bug Fixes

* handle null and undefined prop values ([33b8fca](https://github.com/algolia/expect-jsx/commit/33b8fca))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/algolia/expect-jsx/compare/v1.0.1...v1.0.2) (2015-10-15)


### Bug Fixes

* **deps:** lower down the peer dep requirements ([5d526d5](https://github.com/algolia/expect-jsx/commit/5d526d5))



<a name="1.0.1"></a>
## 1.0.1 (2015-10-15)


### Bug Fixes

* upgrade react-element-to-jsx-string (whitespace, sort keys) ([df977b4](https://github.com/algolia/expect-jsx/commit/df977b4))



<a name="1.0.0"></a>
# 1.0.0 (2015-10-15)




