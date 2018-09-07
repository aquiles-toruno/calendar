'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../components/week.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeekHeader = function WeekHeader(props) {
    return _react2.default.createElement(
        'div',
        { className: 'week-container' },
        _react2.default.createElement(
            'h4',
            null,
            'S'
        ),
        _react2.default.createElement(
            'h4',
            null,
            'M'
        ),
        _react2.default.createElement(
            'h4',
            null,
            'T'
        ),
        _react2.default.createElement(
            'h4',
            null,
            'W'
        ),
        _react2.default.createElement(
            'h4',
            null,
            'T'
        ),
        _react2.default.createElement(
            'h4',
            null,
            'F'
        ),
        _react2.default.createElement(
            'h4',
            null,
            'S'
        )
    );
};

exports.default = WeekHeader;