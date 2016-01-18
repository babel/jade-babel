import path from 'path';

import jade from 'jade';
import { expect } from 'chai';
import dedent from 'dedent';

import jadeBabel from '../src';

describe('compile', () => {
  it('should be the right compiled output', () => {
    const expected = dedent`
      <html><header></header><body><script>"use strict";

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) \
      { throw new TypeError("Cannot call a class as a function"); } }

      var Test = function Test(test) {
        _classCallCheck(this, Test);

        this.test = test;
      };</script></body></html>`;
    const jadeCompiler = jadeBabel({ babelrc: false, presets: ['es2015'] }, jade);
    const template = jadeCompiler.compileFile(path.join(__dirname, 'fixtures', 'test.jade'));
    const output = template();
    expect(output).to.be.equal(expected);
  });
});
