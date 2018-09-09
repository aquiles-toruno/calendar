import React, { Component } from 'react';
import CalendarService from '../services/calendar.service';
import Year from './year';
import shortid from 'shortid';
import InputForm from './input-form';

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calendarData: []
        }
    }

    onRenderCalendar(values) {
        var startDate = values.date;
        var daysToAdd = values.days;
        var endDate = new Date(startDate.valueOf());
        endDate.setDate(endDate.getDate() + daysToAdd);
        var objCalendar = new CalendarService(startDate, endDate);
        var calendar = objCalendar.getCalendar();

        this.setState({
            calendarData: calendar
        });
    }

    render() {
        return <div>
            <InputForm getInputValues={this.onRenderCalendar} />
            {this.state.calendarData.map(element => {
                return <Year key={shortid.generate()} yearNumber={element.year} months={element.months} />
            })}
        </div>;
    }
}