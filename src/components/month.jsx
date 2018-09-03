import React, { Component } from 'react';
import Day from './day';
import InvalidDay from './invalid-day';
import '../components/month.css';
import Week from './week';

export default class Month extends Component {
    constructor(props) {
        super(props);
        var missingDays = props.numberOfDays % props.days.length;
        var newDates = this.generateMissingDates(missingDays, props.days[0].number, props.days[props.days.length - 1].number);
        var days = [...props.days, ...newDates].sort((a, b) => {
            return a.number - b.number;
        });
        this.state = {
            days
        };
    }

    generateMissingDates(missingDays, firstDay, lastDay) {
        var newDates = [];
        if (missingDays === 0)
            return newDates;

        var startIndex = 1;
        var { numberOfDays } = this.props;

        if (firstDay === 1 || lastDay < numberOfDays) {
            startIndex = lastDay + 1;
            newDates.push(...this.fillDaysArray(startIndex, numberOfDays));
        }
        if (firstDay > 1)
            newDates.push(...this.fillDaysArray(startIndex, firstDay, false));

        return newDates;
    }

    fillDaysArray(startIndex, lastIndex, includeLastDay = true) {
        var newDates = [];
        for (let index = startIndex; index <= lastIndex; (index + 1 == lastIndex && !includeLastDay) ? index = index + 2 : index++) {
            const newDate = new Date(this.props.yearNumber, this.props.monthNumber, index);
            newDates.push({
                number: index,
                date: newDate,
                isWeekend: newDate.isWeekend(),
                isInvalid: true
            });
        }
        return newDates;
    }

    render() {
        return (
            <div>
                <h2>{this.props.monthName} {this.props.yearNumber}</h2>
                <div className="month-container">
                    {this.state.days.map(element => {
                        return <Day key={element.number} dayNumber={element.number} date={element.date} isWeekend={element.isWeekend} isInvalid={element.isInvalid} />
                    })}
                </div>
            </div>
        );
    }
}