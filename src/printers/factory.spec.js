/* eslint-env mocha */
const { expect } = require('chai');
const loggerFactory = require('./factory');

describe('Logger factory', () => {
  it('should return an object when called without parameters', () => {
    const logger = loggerFactory();

    expect(logger).to.be.an('object');
  });
});

describe('Printer object', () => {
  const logger = loggerFactory();

  it('should have prefix string property', () => {
    expect(logger).to.have.a.property('prefix');
    expect(logger.prefix).to.be.a('string');
  });

  it('should have print method', () => {
    expect(logger).to.have.a.property('print');
    expect(logger.print).to.be.a('function');
  });

  it('should have refresh method', () => {
    expect(logger).to.have.a.property('refresh');
    expect(logger.refresh).to.be.a('function');
  });
});
