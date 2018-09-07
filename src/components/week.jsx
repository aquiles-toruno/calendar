import React, { Component } from 'react';
import '../components/week.css';

const Week = props => {
    return <div className="week-container"> {props.children}</div>
}

export default Week;