const { describe, it } = require("mocha");
const { expect } = require("chai");
const hello = require("../../utils/hello");

describe('hello function', () => {

  it('should return "Hello ROMAIN", when param is "Romain"', () => {

    expect(hello('Romain')).to.equal('Hello ROMAIN');

  });

});
