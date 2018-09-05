import React, { Component } from 'react';
import Day from './day';
import InvalidDay from './invalid-day';
import '../components/month.css';
import Week from './week';
import WeekHeader from './week-header';

export default class Month extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="month-container">
                <h2>{this.props.monthName} {this.props.yearNumber}</h2>
                <WeekHeader />
                {
                    this.props.weeks.map((elementWeek, index) => {
                        return <div> <Week key={index}>
                            {
                                elementWeek.map(elementDay => {
                                    if (!elementDay)
                                        return <InvalidDay />

                                    return <Day key={elementDay.number} dayNumber={elementDay.number} date={elementDay.date} isWeekend={elementDay.isWeekend} isValid={elementDay.isValid} />
                                })
                            }
                        </Week></div>
                    })
                }
                {/* <div className="month-container">
                    {this.state.days.map(element => {
                        return <Day key={element.number} dayNumber={element.number} date={element.date} isWeekend={element.isWeekend} isInvalid={element.isInvalid} />
                    })}
                </div> */}
            </div>
        );
    }
}