"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./StorableQueue'),
    StorableQueue = _require.StorableQueue;

var DEBUG = false;

var TermScheduler =
/*#__PURE__*/
function () {
  function TermScheduler() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$working_set_leng = _ref.working_set_length,
        working_set_length = _ref$working_set_leng === void 0 ? 5 : _ref$working_set_leng,
        _ref$cardsRefreshStra = _ref.cardsRefreshStrategy,
        cardsRefreshStrategy = _ref$cardsRefreshStra === void 0 ? new TermCardsOfflineStrategy() : _ref$cardsRefreshStra,
        _ref$cards_category = _ref.cards_category,
        cards_category = _ref$cards_category === void 0 ? "" : _ref$cards_category;

    _classCallCheck(this, TermScheduler);

    this.working_set_length = working_set_length;
    var naming_post = cards_category == "" ? cards_category : "_" + cards_category; // Set loading as false for now. Too may bugs.

    this.working_set = new StorableQueue({
      name: "working_set" + naming_post
    });
    this.learning_queue = new StorableQueue({
      name: "learning_queue" + naming_post
    });
    this.learned_queue = new StorableQueue({
      name: "learned_queue" + naming_post
    });
    this.cardsRefreshStrategy = cardsRefreshStrategy; // this.setLearningCards(cards);
  }

  _createClass(TermScheduler, [{
    key: "loadQueues",
    value: function loadQueues() {
      return regeneratorRuntime.async(function loadQueues$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.working_set.load());

            case 2:
              _context.next = 4;
              return regeneratorRuntime.awrap(this.learning_queue.load());

            case 4:
              _context.next = 6;
              return regeneratorRuntime.awrap(this.learned_queue.load());

            case 6:
              return _context.abrupt("return");

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "populateWorkingSet",
    value: function populateWorkingSet() {
      while (this.working_set.length < this.working_set_length && !this.learning_queue.isEmpty) {
        var card = this.learning_queue.dequeue();
        if (DEBUG) console.log("Learning_queue length", this.learning_queue.length);
        this.working_set.enqueue(card);
        if (DEBUG) console.log("Populating Working Set with card", card, "count: ", this.working_set.length);
      }
    }
  }, {
    key: "getCard",
    value: function getCard() {
      if (DEBUG) console.log("length: ", this.working_set.length); // If non left (then return false)

      if (this.working_set.isEmpty) {
        return false;
      }

      return this.working_set.peek();
    }
  }, {
    key: "getCardsToLearn",

    /**
     * Returns the amount of cards left to learn.
     * @returns {number}
     */
    value: function getCardsToLearn() {
      return this.learning_queue.length + this.working_set.length;
    }
  }, {
    key: "getCardsLearnt",
    value: function getCardsLearnt() {
      // console.log(this.learned_queue.elements)
      return this.learned_queue.length;
    }
  }, {
    key: "solveCard",

    /**
     * 
     * @param {bool} wasCorrect If the solution was correct or not
     * returns {integer} count of cards left to be studied.
     */
    value: function solveCard(wasCorrect) {
      if (DEBUG) console.log("Learning_queue length", this.learning_queue.length);

      if (wasCorrect && !this.working_set.isEmpty) {
        // Then unqueue from learning queue into the last of the working_set and dequee the first one into nonethingness.
        var learnedCard = this.working_set.dequeue();
        this.learned_queue.enqueue(learnedCard);

        if (!this.learning_queue.isEmpty) {
          console.log("Adding queue into the card after putting one from working to learnd");
          var newCard = this.learning_queue.dequeue();
          this.working_set.enqueue(newCard);
        }
      } else {
        // Then move the first ot the last
        var cardToRePractice = this.working_set.dequeue();
        this.working_set.enqueue(cardToRePractice);
      }

      this.saveCards();
      return this.getCardsToLearn();
    }
  }, {
    key: "cleanCards",
    value: function cleanCards() {
      this.learned_queue.cleanQueue();
      this.learning_queue.cleanQueue();
      this.working_set.cleanQueue();
    }
  }, {
    key: "saveCards",
    value: function saveCards() {
      this.learned_queue.save();
      this.learning_queue.save();
      this.working_set.save();
    }
  }, {
    key: "setLearningCards",
    value: function setLearningCards(cards) {
      var _ref2,
          _ref2$cleanIfDifferen,
          cleanIfDifferent,
          _ref2$onlyAddIfNotThe,
          onlyAddIfNotThere,
          _ref2$loadCardsFirst,
          loadCardsFirst,
          _iteratorNormalCompletion,
          _didIteratorError,
          _iteratorError,
          _iterator,
          _step,
          card,
          _args2 = arguments;

      return regeneratorRuntime.async(function setLearningCards$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref2 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, _ref2$cleanIfDifferen = _ref2.cleanIfDifferent, cleanIfDifferent = _ref2$cleanIfDifferen === void 0 ? true : _ref2$cleanIfDifferen, _ref2$onlyAddIfNotThe = _ref2.onlyAddIfNotThere, onlyAddIfNotThere = _ref2$onlyAddIfNotThe === void 0 ? true : _ref2$onlyAddIfNotThe, _ref2$loadCardsFirst = _ref2.loadCardsFirst, loadCardsFirst = _ref2$loadCardsFirst === void 0 ? true : _ref2$loadCardsFirst;
              _context2.next = 3;
              return regeneratorRuntime.awrap(this.loadQueues());

            case 3:
              if (!cleanIfDifferent) {
                _context2.next = 36;
                break;
              }

              if (!(this.cardsCount != cards.length)) {
                _context2.next = 36;
                break;
              }

              // Clean all cards
              // Start from zero if the cards changed
              console.log("Difference in length ".concat(this.cardsCount, " ").concat(cards.length));
              this.cleanCards();
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 10;
              _iterator = cards[Symbol.iterator]();

            case 12:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context2.next = 21;
                break;
              }

              card = _step.value;

              if (!(onlyAddIfNotThere && this.cardInScheduler(card))) {
                _context2.next = 16;
                break;
              }

              return _context2.abrupt("continue", 18);

            case 16:
              this.learning_queue.enqueue(card);
              if (DEBUG) console.log("Enqueueing, ", card);

            case 18:
              _iteratorNormalCompletion = true;
              _context2.next = 12;
              break;

            case 21:
              _context2.next = 27;
              break;

            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2["catch"](10);
              _didIteratorError = true;
              _iteratorError = _context2.t0;

            case 27:
              _context2.prev = 27;
              _context2.prev = 28;

              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }

            case 30:
              _context2.prev = 30;

              if (!_didIteratorError) {
                _context2.next = 33;
                break;
              }

              throw _iteratorError;

            case 33:
              return _context2.finish(30);

            case 34:
              return _context2.finish(27);

            case 35:
              this.populateWorkingSet(); // Otherwise it doens't require any populating from he working set.

            case 36:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[10, 23, 27, 35], [28,, 30, 34]]);
    }
    /**
     * Checks if specific card is in any of the working, learning, learnt queues. Used for adding only if not in the queues
     * @param {json} card 
     * @returns {Boolean} if is there or not
     */

  }, {
    key: "cardInScheduler",
    value: function cardInScheduler(card) {
      if (this.learning_queue.has(card) || this.working_set.has(card) || this.learned_queue.has(card)) {
        return true;
      }

      return false;
    }
  }, {
    key: "refreshCards",
    value: function refreshCards() {
      // Refresh the the cards on the learning queue by those who hadnt be learnt yet. (and are neither on the working set)
      // For now you can just dummy populate them.
      this.learned_queue.cleanQueue();
      

      this.learning_queue.elements = this.cardsRefreshStrategy.getLearningQueue();
    }
  }, {
    key: "cardsCount",

    /**
     * Returns the cocards on the entire managmenet
     */
    get: function get() {
      return this.learning_queue.length + this.learned_queue.length + this.working_set.length;
    }
  }, {
    key: "is_completed",
    get: function get() {
      return this.getCardsToLearn() == 0;
    }
  }]);

  return TermScheduler;
}();

;

var TermCardsRefreshStrategy =
/*#__PURE__*/
function () {
  function TermCardsRefreshStrategy() {
    _classCallCheck(this, TermCardsRefreshStrategy);
  }

  _createClass(TermCardsRefreshStrategy, [{
    key: "getLearningQueue",
    value: function getLearningQueue() {
      throw new Error("Not implemented");
    }
  }]);

  return TermCardsRefreshStrategy;
}();

var TermCardsOfflineStrategy =
/*#__PURE__*/
function (_TermCardsRefreshStra) {
  _inherits(TermCardsOfflineStrategy, _TermCardsRefreshStra);

  function TermCardsOfflineStrategy() {
    _classCallCheck(this, TermCardsOfflineStrategy);

    return _possibleConstructorReturn(this, _getPrototypeOf(TermCardsOfflineStrategy).apply(this, arguments));
  }

  _createClass(TermCardsOfflineStrategy, [{
    key: "getLearningQueue",
    value: function getLearningQueue() {
      return {};
    }
  }]);

  return TermCardsOfflineStrategy;
}(TermCardsRefreshStrategy);

module.exports = {
  TermScheduler: TermScheduler
};