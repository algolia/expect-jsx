import React from 'react';
import expect from 'expect';
import collapse from 'collapse-white-space';

import reactElementToJSXString from 'react-element-to-jsx-string';

let api = {
  toEqualJSX(ReactElement) {
    return expect(
      reactElementToJSXString(this.actual)
    ).toEqual(
      reactElementToJSXString(ReactElement)
    );
  },
  toNotEqualJSX(ReactElement) {
    return expect(
      reactElementToJSXString(this.actual)
    ).toNotEqual(
      reactElementToJSXString(ReactElement)
    );
  },
  toIncludeJSX(ReactElement) {
    return expect(
      collapse(reactElementToJSXString(this.actual))
    ).toInclude(
      collapse(reactElementToJSXString(ReactElement))
    );
  },
  toNotIncludeJSX(ReactElement) {
    return expect(
        collapse(reactElementToJSXString(this.actual))
    ).toExclude(
        collapse(reactElementToJSXString(ReactElement))
    );
  }
};

export default api;
