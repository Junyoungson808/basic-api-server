'use strict';

let logger = require('../src/middleware/logger');

describe('Test Logger Middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // spy on the next method

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  test('Properly logs output', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith(`REQUEST: ${req.method}, ${req.originalUrl}`);
  });
  test('Properly calls next()', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
