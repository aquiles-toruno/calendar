'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _day = require('./day');

var _day2 = _interopRequireDefault(_day);

var _invalidDay = require('./invalid-day');

var _invalidDay2 = _interopRequireDefault(_invalidDay);

require('../components/month.css');

var _week = require('./week');

var _week2 = _interopRequireDefault(_week);

var _weekHeader = require('./week-header');

var _weekHeader2 = _interopRequireDefault(_weekHeader);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_Component) {
    _inherits(Month, _Component);

    function Month(props) {
        _classCallCheck(this, Month);

        return _possibleConstructorReturn(this, (Month.__proto__ || Object.getPrototypeOf(Month)).call(this, props));
    }

    _createClass(Month, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'month-container' },
                _react2.default.createElement(
                    'h2',
                    null,
                    this.props.monthName,
                    ' ',
                    this.props.yearNumber
                ),
                _react2.default.createElement(_weekHeader2.default, null),
                this.props.weeks.map(function (elementWeek) {
                    return _react2.default.createElement(
                        'div',
                        { key: _shortid2.default.generate() },
                        _react2.default.createElement(
                            _week2.default,
                            null,
                            elementWeek.map(function (elementDay) {
                                if (!elementDay) return _react2.default.createElement(_invalidDay2.default, { key: _shortid2.default.generate() });

                                return _react2.default.createElement(_day2.default, { key: _shortid2.default.generate(), getDate: _this2.props.getDate, dayNumber: elementDay.number, date: elementDay.date, isWeekend: elementDay.isWeekend, isValid: elementDay.isValid });
                            })
                        )
                    );
                })
            );
        }
    }]);

    return Month;
}(_react.Component);

exports.default = Month;