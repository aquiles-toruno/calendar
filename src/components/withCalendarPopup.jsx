import React, { Component } from 'react';

export default function withCalendarPopUp(WrappedComponent) {
    return class CalendarInPopup extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <div style={{ width: '210px' }}> <WrappedComponent {...this.props} /></div>
        }
    }
}