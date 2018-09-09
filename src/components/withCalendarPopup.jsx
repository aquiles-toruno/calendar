import React, { Component } from 'react';
import CalendarService from '../services/calendar.service';
import '../components/withCalendarPopup.css';

export default function withCalendarPopUp(WrappedComponent, currentDate) {
    return class CalendarInPopup extends Component {
        constructor(props) {
            super(props);
            this.state = {
                currentDate,
                calendar: this.getCalendar()
            }
            this.onPrevMonth = this.onPrevMonth.bind(this);
            this.onNextMonth = this.onNextMonth.bind(this);
            this.getCalendar = this.getCalendar.bind(this);
            this.goToday = this.goToday.bind(this);
        }

        onPrevMonth() {
            var prevDate = new Date(this.state.currentDate);
            prevDate.setMonth(prevDate.getMonth() - 1);
            this.setState({
                ...this.state,
                currentDate: prevDate
            });
        }

        onNextMonth() {
            var nextDate = new Date(this.state.currentDate);
            nextDate.setMonth(nextDate.getMonth() + 1);
            this.setState({
                ...this.state,
                currentDate: nextDate
            });
        }

        goToday() {
            this.setState({
                ...this.state,
                currentDate: new Date()
            });
            this.props.getDate(new Date);
        }

        getCalendar() {
            var date = this.state ? this.state.currentDate : currentDate;
            var startDate = new Date(date.getFullYear(), date.getMonth(), 1);
            var endDate = date.getLastDateOfMonth();
            var objCalendar = new CalendarService(startDate, endDate);
            return objCalendar.getCalendar();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevState.currentDate != this.state.currentDate)
                this.setState({
                    ...this.state,
                    calendar: this.getCalendar()
                });
        }

        render() {
            return <div className="popup">
                <div className="popup-commands">
                    <button type="button" onClick={this.onPrevMonth}>Prev</button>
                    <button type="button" onClick={this.onNextMonth}>Next</button>
                    <button type="button" onClick={this.goToday}>Today</button>
                </div>
                <WrappedComponent yearNumber={this.state.calendar[0].year} months={this.state.calendar[0].months} {...this.props} />
            </div>
        }
    }
}