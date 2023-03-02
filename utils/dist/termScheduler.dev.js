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
        _ref$cards = _ref.cards,
        cards = _ref$cards === void 0 ? [] : _ref$cards,
        _ref$working_set_leng = _ref.working_set_length,
        working_set_length = _ref$working_set_leng === void 0 ? 5 : _ref$working_set_leng,
        _ref$cardsRefreshStra = _ref.cardsRefreshStrategy,
        cardsRefreshStrategy = _ref$cardsRefreshStra === void 0 ? new TermCardsOfflineStrategy() : _ref$cardsRefreshStra,
        _ref$cards_category = _ref.cards_category,
        cards_category = _ref$cards_category === void 0 ? "" : _ref$cards_category;

    _classCallCheck(this, TermScheduler);

    this.working_set_length = working_set_length;
    var naming_post = cards_category == "" ? cards_category : "_" + cards_category;
    this.working_set = new StorableQueue({
      name: "working_set" + naming_post
    });
    this.learning_queue = new StorableQueue({
      name: "learning_queue" + naming_post
    });
    this.learned_queue = new StorableQueue({
      name: "learned_queue" + naming_post
    });
    this.cardsRefreshStrategy = cardsRefreshStrategy;
    this.setLearningCards(cards);
    this.populateWorkingSet();
  }

  _createClass(TermScheduler, [{
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = cards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var card = _step.value;
          this.learning_queue.enqueue(card);
          if (DEBUG) console.log("Enqueueing, ", card);
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
    key: "refreshCards",
    value: function refreshCards() {
      // Refresh the the cards on the learning queue by those who hadnt be learnt yet. (and are neither on the working set)
      // For now you can just dummy populate them.
      this.learned_queue.cleanQueue();
      this.learning_queue.cleanQueue(); // TODO Add all the cards in that are available. Perhpas differentStrategies could be offered, such as loading from Online or from the local.

      this.learning_queue.elements = this.cardsRefreshStrategy.getLearningQueue();
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