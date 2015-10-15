/* eslint-env mocha */

import React from 'react';
import expect from 'expect';
import toEqualJSX from './';

expect.extend({toEqualJSX});

class TestComponent extends React.Component {}

describe('expect(ReactElement).toEqualJSX(ReactElement)', () => {
  it('exists', () => {
    expect(expect().toEqualJSX).toBeA('function');
  });

  it('can diff React elements', () => {
    expect(
      <TestComponent />
    ).toEqualJSX(
      <TestComponent />
    );
  });

  it('throws when elements are different', () => {
    try {
      expect(<TestComponent extra="neous" />).toEqualJSX(<TestComponent />);
    } catch (err) {
      expect(err instanceof Error).toBe(true);
      expect(err.message).toEqual(`Expected '<TestComponent extra="neous" />' to equal '<TestComponent />'`);
    }
  });

  it('does not care about function', () => {
    var fns = {
      one() {return 'one';},
      two() {return 'two';}
    };

    expect(
      <TestComponent fn={fns.one} />
    ).toEqualJSX(
      <TestComponent fn={fns.two} />
    );
  });

  it('does not care about props order', () => {
    /* eslint react/jsx-sort-props: 0 */
    expect(
      <TestComponent one="one" two="two" />
    ).toEqualJSX(
      <TestComponent two="two" one="one" />
    );
  });
});
