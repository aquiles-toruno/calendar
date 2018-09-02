import React, { Component } from 'react';
import Day from './day';

export default class Month extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.monthName}</h2>
                <div>
                    {this.props.days.map(element => {
                        return <Day key={element.number} dayNumber={element.number} date={element.date} isWeekend={element.isWeekend} />
                    })}
                </div>
            </div>
        );
    }
}