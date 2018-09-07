'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../components/week.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Week = function Week(props) {
    return _react2.default.createElement(
        'div',
        { className: 'week-container' },
        ' ',
        props.children
    );
};

exports.default = Week;