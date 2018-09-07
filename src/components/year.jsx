import React, { Component } from 'react';
import Month from './month';
import '../components/year.css';
import shortid from 'shortid';

const Year = props => {
    return (
        <div>
            <div className="year-container">
                {props.months.map(element => {
                    return <Month key={shortid.generate()} yearNumber={props.yearNumber} monthNumber={element.month} monthName={element.name} numberOfDays={element.numberOfDays} numberOfWeeks={element.numberOfWeeks} days={element.days} weeks={element.weeks} />
                })}
            </div>
        </div>
    );
}

export default Year;