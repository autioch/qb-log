/* eslint-env mocha */
/* eslint no-unused-expressions: 0 */
const chai = require('chai');
const expect = chai.expect;
const cache = require('./cache');

describe('Cache object', () => {
  it('should have add method', () => {
    expect(cache).to.have.a.property('add');
    expect(cache.add).to.be.a('function');
  });

  it('should have remove method', () => {
    expect(cache).to.have.a.property('remove');
    expect(cache.remove).to.be.a('function');
  });

  it('should have refresh method', () => {
    expect(cache).to.have.a.property('refresh');
    expect(cache.refresh).to.be.a('function');
  });
});

describe('Cache adding', () => {
  it('should return an object', () => {
    expect(cache.add('test')).to.be.an('object');
  });
  it('should not allow duplicated printer', () => {
    expect(cache.add('test')).to.be.false;
  });
});

describe('Cache removing', () => {
  it('should return true if printer exists', () => {
    expect(cache.remove('test')).to.be.true;
  });
  it('should return false if printer doesn\t exist', () => {
    expect(cache.remove('test')).to.be.false;
  });
});
