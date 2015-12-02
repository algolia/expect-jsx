/* eslint-env mocha */
/* eslint react/prop-types:0 */

import React from 'react';
import expect from 'expect';
import expectJSX from './index';

expect.extend(expectJSX);

class TestComponent extends React.Component {
  render() {
    return <div>Hi! {this.props.name}</div>;
  }
}

describe('expect(ReactElement).toEqualJSX(ReactElement)', () => {
  context('api', () => {
    it('has toEqualJSX', () => {
      expect(expect().toEqualJSX).toBeA('function');
    });

    it('has toNotEqualJSX', () => {
      expect(expect().toNotEqualJSX).toBeA('function');
    });

    it('has toIncludeJSX', () => {
      expect(expect().toIncludeJSX).toBeA('function');
    });
  });

  context('toEqualJSX', () => {
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
        expect(err.message)
          .toEqual(`Expected '<TestComponent extra="neous" />' to equal '<TestComponent />'`);
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

    it('handle render method with interpolation', () => {
      expect(
        <TestComponent name="Jon" />
      ).toNotEqual(
      <TestComponent name="Marry" />
      );
    });
  });

  context('toNotEqualJSX', () => {
    it('works', () => {
      expect(<div />).toNotEqualJSX(<div Hello=", world!" />);
    });

    it('throws when elements are the same', () => {
      try {
        expect(<div />).toNotEqualJSX(<div />);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.message).toEqual(`Expected '<div />' to not equal '<div />'`);
      }
    });
  });

  context('toIncludeJSX', () => {
    it('works', () => {
      expect(<div><div><TestComponent Hello=", world!"/></div></div>)
        .toIncludeJSX(<div><TestComponent Hello=", world!"/></div>);
    });

    it('throws when element is not included', () => {
      try {
        expect(<div />).toIncludeJSX(<div Hello=", world!" />);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.message).toEqual(`Expected '<div />' to include '<div Hello=", world!" />'`);
      }
    });
  });

  context('toNotIncludeJSX', () => {
    it('works', () => {
      expect(<div><div><TestComponent Hello=", world!"/></div></div>)
        .toNotIncludeJSX(<div><TestComponent Jello=", world!"/></div>);
    });

    it('throws when element is included', () => {
      try {
        expect(<div Hello=", world!" />).toNotIncludeJSX(<div Hello=", world!" />);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        let message = `Expected '<div Hello=", world!" />' to exclude '<div Hello=", world!" />'`;
        expect(err.message).toEqual(message);
      }
    });
  });
});
