"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Simple example for Image Showing.
 */
(function _callee() {
  var fs, _ref, terminalImage, data, image;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Promise.resolve().then(function () {
            return _interopRequireWildcard(require('fs'));
          }).then(function (mod) {
            return mod.promises;
          }));

        case 2:
          fs = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(Promise.resolve().then(function () {
            return _interopRequireWildcard(require('terminal-image'));
          }));

        case 5:
          _ref = _context.sent;
          terminalImage = _ref["default"];
          _context.next = 9;
          return regeneratorRuntime.awrap(fs.readFile('unicorn.jpg'));

        case 9:
          data = _context.sent;
          _context.next = 12;
          return regeneratorRuntime.awrap(terminalImage.buffer(data));

        case 12:
          image = _context.sent;
          console.log(image);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
})();
/**
 * Gif example
 */
// (async () => {
//   const fs = await import('fs').then((mod) => mod.promises);
//   const { default: terminalImage } = await import('terminal-image');
//   // const data = await fs.readFile('gif-sample-low.gif', { maximumFrameRate: 1 });
//   const data = await fs.readFile('gif-sample.gif', { maximumFrameRate: 2 });
//   const image = await terminalImage.gifBuffer(data);
//   console.log(image);
//   // image.render();
// })();