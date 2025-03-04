"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var chart = require('@wangnene2/chart');

var bar = chart.bar,
    scatter = chart.scatter,
    bg = chart.bg,
    fg = chart.fg;
var EDemo = {
  SCATTER: 1,
  BAR: 2
};

var Demo =
/*#__PURE__*/
function () {
  function Demo() {
    _classCallCheck(this, Demo);
  }

  _createClass(Demo, [{
    key: "chartDemo",
    // A class for showing off demos
    value: function chartDemo() {
      var eChartDemo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EDemo.SCATTER;

      switch (eChartDemo) {
        case EDemo.SCATTER:
          this.scatterDemo();
          break;

        case EDemo.BAR:
          this.barDemo();
          break;
      }
    }
  }, {
    key: "scatterDemo",
    value: function scatterDemo() {
      // Scatter
      var scatterData = [];

      for (var i = 1; i < 17; i++) {
        i < 6 ? scatterData.push({
          key: 'A',
          value: [i, i],
          style: fg('red', '*')
        }) : scatterData.push({
          key: 'A',
          value: [i, 6],
          style: fg('red', '*')
        });
      }

      scatterData.push({
        key: 'B',
        value: [2, 6],
        style: fg('blue', '# '),
        sides: [2, 2]
      });
      scatterData.push({
        key: 'C',
        value: [6, 9],
        style: bg('cyan', 2)
      });
      console.log(scatter(scatterData, {
        legendGap: 18,
        width: 15
      }) + '\n');
    }
  }, {
    key: "barDemo",
    value: function barDemo() {
      var barData = [{
        key: 'A',
        value: 5,
        style: '*'
      }, {
        key: 'B',
        value: 3,
        style: '+'
      }, {
        key: 'C',
        value: 11
      }, {
        key: 'D',
        value: 1,
        style: bg('red')
      }, {
        key: 'E',
        value: 5,
        style: bg('green')
      }, {
        key: 'F',
        value: 7,
        style: bg('blue'),
        padding: 10
      }, {
        key: 'G',
        value: 0,
        style: bg('yellow')
      }];
      console.log(bar(barData));
    }
  }]);

  return Demo;
}();

module.exports = {
  Demo: Demo,
  EDemo: EDemo
};