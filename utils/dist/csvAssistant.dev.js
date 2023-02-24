"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A couple of functionalities managing csv such as creating reports, auto populating items and also searching images from the web
 */
var dfd = require("danfojs-node");

var CSVAssistant =
/*#__PURE__*/
function () {
  function CSVAssistant() {
    _classCallCheck(this, CSVAssistant);
  }

  _createClass(CSVAssistant, [{
    key: "populateCoefficients",
    // constructor(filesData = []){
    //     this.filesData = filesData;
    //     this.
    // }

    /**
     * 
     * @param {String} filename Populates the coefficients with the right data.
     */
    value: function populateCoefficients() {
      var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "data/priorities/task_skills";
    }
  }]);

  return CSVAssistant;
}();