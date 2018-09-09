'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _year = require('./year');

var _year2 = _interopRequireDefault(_year);

var _withCalendarPopup = require('./withCalendarPopup');

var _withCalendarPopup2 = _interopRequireDefault(_withCalendarPopup);

var _dateSummary = require('./date-summary');

var _dateSummary2 = _interopRequireDefault(_dateSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputForm = function (_Component) {
    _inherits(InputForm, _Component);

    function InputForm(props) {
        _classCallCheck(this, InputForm);

        var _this = _possibleConstructorReturn(this, (InputForm.__proto__ || Object.getPrototypeOf(InputForm)).call(this, props));

        _this.state = {
            date: new Date(),
            days: 0,
            code: '',
            showCalendar: false
        };
        _this.onChangeInput = _this.onChangeInput.bind(_this);
        _this.onClickRender = _this.onClickRender.bind(_this);
        _this.onToggleCalendar = _this.onToggleCalendar.bind(_this);
        _this.conditionalRender = _this.conditionalRender.bind(_this);
        _this.getDate = _this.getDate.bind(_this);
        _this.getFinalDate = _this.getFinalDate.bind(_this);
        return _this;
    }

    _createClass(InputForm, [{
        key: 'onChangeInput',
        value: function onChangeInput(event) {
            var states = _extends({}, this.state);
            var value = event.target.value;
            if (event.target.name === "days") value = +value;

            states[event.target.name] = value;
            this.setState(_extends({}, states));
        }
    }, {
        key: 'onClickRender',
        value: function onClickRender(event) {
            this.props.getInputValues(this.state);
        }
    }, {
        key: 'onToggleCalendar',
        value: function onToggleCalendar() {
            this.setState(_extends({}, this.state, { showCalendar: !this.state.showCalendar }));
        }
    }, {
        key: 'conditionalRender',
        value: function conditionalRender(currenDate) {
            return this.state.showCalendar ? (0, _withCalendarPopup2.default)(_year2.default, currenDate) : null;
        }
    }, {
        key: 'getDate',
        value: function getDate(date) {
            this.setState(_extends({}, this.state, {
                date: date,
                showCalendar: false
            }));
        }
    }, {
        key: 'formatDate',
        value: function formatDate(date) {
            var day = date.getDate();
            var monthName = date.getMonthName();
            var year = date.getFullYear();
            return day + '-' + monthName + '-' + year;
        }
    }, {
        key: 'getFinalDate',
        value: function getFinalDate() {
            var endDate = new Date(this.state.date.valueOf());
            endDate.setDate(endDate.getDate() + this.state.days);
            return this.formatDate(endDate);
        }
    }, {
        key: 'render',
        value: function render() {
            var CalendarInPopup = this.conditionalRender(this.state.date);
            CalendarInPopup = CalendarInPopup ? _react2.default.createElement(CalendarInPopup, { getDate: this.getDate }) : null;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { name: 'input-form' },
                    _react2.default.createElement('input', { type: 'text', name: 'date', readOnly: true, onClick: this.onToggleCalendar, value: this.formatDate(this.state.date) }),
                    _react2.default.createElement('input', { type: 'number', name: 'days', value: this.state.days, onChange: this.onChangeInput }),
                    _react2.default.createElement('input', { type: 'text', name: 'code', value: this.state.code, onChange: this.onChangeInput, placeholder: 'Code' }),
                    _react2.default.createElement(
                        'button',
                        { type: 'button', onClick: this.onClickRender },
                        'Render calendar'
                    ),
                    CalendarInPopup
                ),
                _react2.default.createElement(_dateSummary2.default, { initialDate: this.formatDate(this.state.date), days: this.state.days, code: this.state.code, finalDate: this.getFinalDate() })
            );
        }
    }]);

    return InputForm;
}(_react.Component);

exports.default = InputForm;