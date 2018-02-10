let assert = require('chai').assert;

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1when thevalue is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
