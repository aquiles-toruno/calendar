import React, { Component } from 'react';

const DateSummary = (props) => {
    return <div>
        <label>Initial date: {props.initialDate}</label>
        <br />
        <label>Days: {props.days}</label>
        <br />
        <label>Final date: {props.finalDate}</label>
    </div>
}

DateSummary.defaultProps = {
    initialDate: '---',
    days: '---',
    finalDate: '---'
}

export default DateSummary;