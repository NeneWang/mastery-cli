"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StorableQueue =
/*#__PURE__*/
function () {
  function StorableQueue(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "" : _ref$name,
        _ref$load = _ref.load,
        load = _ref$load === void 0 ? true : _ref$load;

    _classCallCheck(this, StorableQueue);

    this.elements = {};
    this.head = 0;
    this.tail = 0;
    this.name = name;

    if (load) {
      this.load();
    }
  }

  _createClass(StorableQueue, [{
    key: "load",
    value: function load() {
      var _ref2, JsonDB, Config, db;

      return regeneratorRuntime.async(function load$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(Promise.resolve().then(function () {
                return _interopRequireWildcard(require('node-json-db'));
              }));

            case 2:
              _ref2 = _context.sent;
              JsonDB = _ref2.JsonDB;
              Config = _ref2.Config;
              db = new JsonDB(new Config(this.name, true, false, '/'));
              _context.next = 8;
              return regeneratorRuntime.awrap(db.getData('/elements'));

            case 8:
              this.elements = _context.sent;
              _context.next = 11;
              return regeneratorRuntime.awrap(db.getData('/tail'));

            case 11:
              this.tail = _context.sent;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "save",
    value: function save() {
      var _ref3, JsonDB, Config, db;

      return regeneratorRuntime.async(function save$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(Promise.resolve().then(function () {
                return _interopRequireWildcard(require('node-json-db'));
              }));

            case 2:
              _ref3 = _context2.sent;
              JsonDB = _ref3.JsonDB;
              Config = _ref3.Config;
              db = new JsonDB(new Config(this.name, true, false, '/'));
              db.push('/elements', this.elements);
              db.push('/tail', this.tail);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "cleanQueue",
    value: function cleanQueue() {
      // for (let key in this.elements) {
      //     delete this.elements[key];
      // }
      delete this.elements;
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
  }, {
    key: "enqueue",
    value: function enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      var item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.elements[this.head];
    }
  }, {
    key: "length",
    get: function get() {
      return this.tail - this.head;
    }
  }, {
    key: "isEmpty",
    get: function get() {
      return this.length === 0;
    }
  }]);

  return StorableQueue;
}();

module.exports = {
  StorableQueue: StorableQueue
};