import React, { Component } from 'react';
import Month from './month';

export default class Year extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.yearNumber}</h1>
                <div>
                    {this.props.months.map(element => {
                        return <Month key={element.month} monthNumber={element.month} monthName={element.name} days={element.days} />
                    })}
                </div>
            </div>
        );
    }
}