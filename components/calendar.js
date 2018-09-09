'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _calendar = require('../services/calendar.service');

var _calendar2 = _interopRequireDefault(_calendar);

var _year = require('./year');

var _year2 = _interopRequireDefault(_year);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _inputForm = require('./input-form');

var _inputForm2 = _interopRequireDefault(_inputForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_Component) {
    _inherits(Calendar, _Component);

    function Calendar(props) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

        _this.state = {
            calendarData: []
        };

        _this.onRenderCalendar = _this.onRenderCalendar.bind(_this);
        return _this;
    }

    _createClass(Calendar, [{
        key: 'onRenderCalendar',
        value: function onRenderCalendar(values) {
            var startDate = values.date;
            var daysToAdd = values.days;
            var endDate = new Date(startDate.valueOf());
            endDate.setDate(endDate.getDate() + daysToAdd);
            try {
                var objCalendar = new _calendar2.default(startDate, endDate);
                var calendar = objCalendar.getCalendar();

                this.setState({
                    calendarData: calendar
                });
            } catch (error) {
                alert(error.message);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_inputForm2.default, { getInputValues: this.onRenderCalendar }),
                this.state.calendarData.map(function (element) {
                    return _react2.default.createElement(_year2.default, { key: _shortid2.default.generate(), yearNumber: element.year, months: element.months });
                })
            );
        }
    }]);

    return Calendar;
}(_react.Component);

exports.default = Calendar;