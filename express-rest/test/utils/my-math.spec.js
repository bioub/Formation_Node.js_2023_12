const { expect } = require("chai");
const { describe, it } = require("mocha");
const { sum, multiply } = require("../../utils/my-math");

describe("my-maths module", () => {
  describe("sum function", () => {
    it("should return sum of params", () => {
      expect(sum(1, 2)).to.equal(3);
      expect(sum(1, 2, 3, 4, 5)).to.equal(15);
    });
  });
  describe("multiply function", () => {
    it("should return product of params", () => {
      expect(multiply(1, 2, 3, 4, 5)).to.equal(120);
    });
  });
});
