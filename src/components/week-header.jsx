import React, { Component } from 'react';
import '../components/week.css';

const WeekHeader = props => {
    return <div className="week-container">
        <h4>S</h4>
        <h4>M</h4>
        <h4>T</h4>
        <h4>W</h4>
        <h4>T</h4>
        <h4>F</h4>
        <h4>S</h4>
    </div>
}

export default WeekHeader;