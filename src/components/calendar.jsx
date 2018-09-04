import React, { Component } from 'react';
import CalendarService from '../services/calendar.service';
import Year from './year';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        var startDate = new Date('2008/08/15');
        var daysToAdd = 110;
        var endDate = new Date(startDate.valueOf());
        endDate.setDate(endDate.getDate() + daysToAdd);
        var objCalendar = new CalendarService(startDate, endDate);
        var calendar = objCalendar.getCalendar();
        
        this.state = {
            calendarData: calendar
        }
    }

    render() {
        return <div>
            {this.state.calendarData.map(element => {
                return <Year key={element.year} yearNumber={element.year} months={element.months} />
            })}
        </div>;
    }
}