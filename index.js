import React from 'react';
import expect from 'expect';

import reactElementToJSXString from 'react-element-to-jsx-string';

export default function toEqualJSX(expectedJSX) {
  return expect(
    reactElementToJSXString(this.actual)
  ).toEqual(
    reactElementToJSXString(expectedJSX)
  );
}
