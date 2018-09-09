import React, { Component } from 'react';
import Day from './day';
import InvalidDay from './invalid-day';
import '../components/month.css';
import Week from './week';
import WeekHeader from './week-header';
import shortid from 'shortid';

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
                    this.props.weeks.map(elementWeek => {
                        return (
                            <div key={shortid.generate()}>
                                <Week>
                                    {
                                        elementWeek.map(elementDay => {
                                            if (!elementDay)
                                                return <InvalidDay key={shortid.generate()} />

                                            return <Day key={shortid.generate()} getDate={this.props.getDate} dayNumber={elementDay.number} date={elementDay.date} isWeekend={elementDay.isWeekend} isValid={elementDay.isValid} />
                                        })
                                    }
                                </Week>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}