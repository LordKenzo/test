var expect = require('chai').expect;
var test = require('../src');

describe('Test Method', function(){
  it('should return square number', function(){
    expect(test.test(4)).to.equal(16);
  });
  it('should return an error....', function(){
    expect(test.test).to.throw(Error);
  });
  it('should return a message error.', function(){
    expect(test.test).to.throw(/I need a number/);
  });
});