"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./utils_functions'),
    getDirAbsoluteUri = _require.getDirAbsoluteUri;

var StorableQueue =
/*#__PURE__*/
function () {
  function StorableQueue() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? "" : _ref$name;

    _classCallCheck(this, StorableQueue);

    this.elements = [];
    this.name = name;
    this.absolute_uri = getDirAbsoluteUri("temp/".concat(this.name));
  }

  _createClass(StorableQueue, [{
    key: "load",
    value: function load() {
      var _ref2, JsonDB, Config, db;

      return regeneratorRuntime.async(function load$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(Promise.resolve().then(function () {
                return _interopRequireWildcard(require('node-json-db'));
              }));

            case 3:
              _ref2 = _context.sent;
              JsonDB = _ref2.JsonDB;
              Config = _ref2.Config;
              db = new JsonDB(new Config(this.absolute_uri, true, false, '/'));
              _context.next = 9;
              return regeneratorRuntime.awrap(db.getData('/elements'));

            case 9:
              this.elements = _context.sent;
              console.log("Loaded ".concat(this.length, " from ").concat(this.name, " | ").concat(this.absolute_uri));
              return _context.abrupt("return", true);

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", false);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 14]]);
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
              db = new JsonDB(new Config(this.absolute_uri, true, false, '/'));
              db.push('/elements', this.elements);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "cleanQueue",
    value: function cleanQueue() {
      this.elements = [];
    }
  }, {
    key: "has",
    value: function has(element) {
      return this.elements.includes(element);
    }
  }, {
    key: "enqueue",
    value: function enqueue(element) {
      this.elements.push(element);
    }
  }, {
    key: "enqueueMultiple",
    value: function enqueueMultiple(elements) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;
          this.enqueue(element);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      var item = this.elements.shift();
      this.head = 0;
      return item;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.elements[0];
    }
  }, {
    key: "lastElement",
    get: function get() {
      return this.elements[this.length - 1];
    }
  }, {
    key: "length",
    get: function get() {
      return this.elements.length;
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