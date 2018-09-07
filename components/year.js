'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _month = require('./month');

var _month2 = _interopRequireDefault(_month);

require('../components/year.css');

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Year = function Year(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'year-container' },
            props.months.map(function (element) {
                return _react2.default.createElement(_month2.default, { key: _shortid2.default.generate(), yearNumber: props.yearNumber, monthNumber: element.month, monthName: element.name, numberOfDays: element.numberOfDays, numberOfWeeks: element.numberOfWeeks, days: element.days, weeks: element.weeks });
            })
        )
    );
};

exports.default = Year;