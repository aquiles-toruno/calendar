'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../components/date-summary.css');

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
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'label',
            null,
            'Legend: '
        ),
        _react2.default.createElement(
            'div',
            { className: 'legend' },
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('em', { className: 'invalid' }),
                'Invalid'
            ),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('em', { className: 'valid' }),
                'Valid'
            ),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('em', { className: 'weekend' }),
                'Weekend'
            ),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('em', { className: 'holiday' }),
                'Holiday'
            )
        )
    );
};

DateSummary.defaultProps = {
    initialDate: '---',
    days: '---',
    finalDate: '---'
};

exports.default = DateSummary;