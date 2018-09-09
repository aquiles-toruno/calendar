import React, { Component } from 'react';
import '../components/date-summary.css';

const DateSummary = (props) => {
    return <div>
        <label>Initial date: {props.initialDate}</label>
        <br />
        <label>Days: {props.days}</label>
        <br />
        <label>Final date: {props.finalDate}</label>
        <br />
        <label>Legend: </label>
        <div className="legend">
            <span>
                <em className="invalid"></em>Invalid
        </span>
            <span>
                <em className="valid"></em>Valid
        </span>
            <span>
                <em className="weekend"></em>Weekend
        </span>
            <span>
                <em className="holiday"></em>Holiday
        </span>
        </div>
    </div>
}

DateSummary.defaultProps = {
    initialDate: '---',
    days: '---',
    finalDate: '---'
}

export default DateSummary;