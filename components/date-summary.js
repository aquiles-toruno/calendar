'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateSummary = function DateSummary(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'label',
            null,
            'Initial date: ',
            props.initialDate
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'label',
            null,
            'Days: ',
            props.days
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'label',
            null,
            'Final date: ',
            props.finalDate
        )
    );
};

DateSummary.defaultProps = {
    initialDate: '---',
    days: '---',
    finalDate: '---'
};

exports.default = DateSummary;