import React, { Component } from 'react';
import CalendarService from '../services/calendar.service';
import Year from './year';
import shortid from 'shortid';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        var startDate = new Date('2018/09/01');
        var daysToAdd = 15;
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
                return <Year key={shortid.generate()} yearNumber={element.year} months={element.months} />
            })}
        </div>;
    }
}