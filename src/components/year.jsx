import React, { Component } from 'react';
import Month from './month';
import '../components/year.css';

export default class Year extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="year-container">
                    {this.props.months.map(element => {
                        return <Month key={element.month} yearNumber={this.props.yearNumber} monthNumber={element.month} monthName={element.name} numberOfDays={element.numberOfDays} days={element.days} />
                    })}
                </div>
            </div>
        );
    }
}