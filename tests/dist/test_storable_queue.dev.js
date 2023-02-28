"use strict";

var _this = void 0;

var assert = require('assert');

var _require = require('../utils/StorableQueue'),
    StorableQueue = _require.StorableQueue;

describe('Queue', function () {
  beforeEach(function _callee() {
    var _;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Create a new instance of the Queue class and load the data from the database
            _this.queue = new StorableQueue({
              name: 'test-queue'
            });
            _context.next = 3;
            return regeneratorRuntime.awrap(_this.queue.load());

          case 3:
            _ = _context.sent;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  afterEach(function _callee2() {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Save the state of the queue to the database and delete the instance
            delete _this.queue;

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  it('should add elements to the queue', function () {
    _this.queue.enqueue('a'); // assert.strictEqual(this.queue.length, 1);


    assert.strictEqual(_this.queue.peek(), 'a');
  });
  it('should remove elements from the queue', function () {
    _this.queue.enqueue('a');

    _this.queue.enqueue('b');

    assert.strictEqual(_this.queue.length, 2);
    assert.strictEqual(_this.queue.dequeue(), 'a');
    assert.strictEqual(_this.queue.length, 1);
    assert.strictEqual(_this.queue.peek(), 'b');
  });
  it('should return undefined when dequeueing from an empty queue', function () {
    assert.strictEqual(_this.queue.length, 0);
    assert.strictEqual(_this.queue.dequeue(), undefined);
  });
  it('should return the length of the queue', function () {
    _this.queue.enqueue('a');

    _this.queue.enqueue('b');

    assert.strictEqual(_this.queue.length, 2);
  });
  it('should return true when the queue is empty', function () {
    assert.strictEqual(_this.queue.isEmpty, true);

    _this.queue.enqueue('a');

    assert.strictEqual(_this.queue.isEmpty, false);
  });
});