'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withCalendarPopUp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _calendar = require('../services/calendar.service');

var _calendar2 = _interopRequireDefault(_calendar);

require('../components/withCalendarPopup.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withCalendarPopUp(WrappedComponent, currentDate) {
    return function (_Component) {
        _inherits(CalendarInPopup, _Component);

        function CalendarInPopup(props) {
            _classCallCheck(this, CalendarInPopup);

            var _this = _possibleConstructorReturn(this, (CalendarInPopup.__proto__ || Object.getPrototypeOf(CalendarInPopup)).call(this, props));

            _this.state = {
                currentDate: currentDate,
                calendar: _this.getCalendar()
            };
            _this.onPrevMonth = _this.onPrevMonth.bind(_this);
            _this.onNextMonth = _this.onNextMonth.bind(_this);
            _this.getCalendar = _this.getCalendar.bind(_this);
            _this.goToday = _this.goToday.bind(_this);
            return _this;
        }

        _createClass(CalendarInPopup, [{
            key: 'onPrevMonth',
            value: function onPrevMonth() {
                var prevDate = new Date(this.state.currentDate);
                prevDate.setMonth(prevDate.getMonth() - 1);
                this.setState(_extends({}, this.state, {
                    currentDate: prevDate
                }));
            }
        }, {
            key: 'onNextMonth',
            value: function onNextMonth() {
                var nextDate = new Date(this.state.currentDate);
                nextDate.setMonth(nextDate.getMonth() + 1);
                this.setState(_extends({}, this.state, {
                    currentDate: nextDate
                }));
            }
        }, {
            key: 'goToday',
            value: function goToday() {
                this.setState(_extends({}, this.state, {
                    currentDate: new Date()
                }));
                this.props.getDate(new Date());
            }
        }, {
            key: 'getCalendar',
            value: function getCalendar() {
                var date = this.state ? this.state.currentDate : currentDate;
                var startDate = new Date(date.getFullYear(), date.getMonth(), 1);
                var endDate = date.getLastDateOfMonth();
                var objCalendar = new _calendar2.default(startDate, endDate);
                return objCalendar.getCalendar();
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps, prevState, snapshot) {
                if (prevState.currentDate != this.state.currentDate) this.setState(_extends({}, this.state, {
                    calendar: this.getCalendar()
                }));
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    { className: 'popup' },
                    _react2.default.createElement(
                        'div',
                        { className: 'popup-commands' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', onClick: this.onPrevMonth },
                            'Prev'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', onClick: this.onNextMonth },
                            'Next'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', onClick: this.goToday },
                            'Today'
                        )
                    ),
                    _react2.default.createElement(WrappedComponent, _extends({ yearNumber: this.state.calendar[0].year, months: this.state.calendar[0].months }, this.props))
                );
            }
        }]);

        return CalendarInPopup;
    }(_react.Component);
}