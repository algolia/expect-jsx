import React from 'react';
import expect from 'expect';

import reactElementToJSXString from 'react-element-to-jsx-string';

export default function toEqualJSX(ReactElement) {
  return expect(
    reactElementToJSXString(this.actual)
  ).toEqual(
    reactElementToJSXString(ReactElement)
  );
}
