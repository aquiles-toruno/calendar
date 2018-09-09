import React, { Component } from 'react';
import CalendarService from '../services/calendar.service';
import Year from './year';
import withCalendarPopUp from './withCalendarPopup';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            days: 0,
            showCalendar: false
        }
        this.calendar = [];
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onClickRender = this.onClickRender.bind(this);
        this.onToggleCalendar = this.onToggleCalendar.bind(this);
        this.conditionalRender = this.conditionalRender.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    onChangeInput(event) {
        let states = { ...this.state };
        let value = event.target.value;
        if (event.target.type === "date")
            value = new Date(value);

        states[event.target.name] = value;
        this.setState({ ...states });
    }

    onClickRender(event) {
        this.props.getInputValues(this.state);
    }

    onToggleCalendar() {
        this.setState({ ...this.state, showCalendar: !this.state.showCalendar })

        if (!this.state.showCalendar) {
            var startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            var endDate = new Date().getLastDateOfMonth();
            var objCalendar = new CalendarService(startDate, endDate);
            this.calendar = objCalendar.getCalendar();
        }
    }

    conditionalRender() {
        return this.state.showCalendar ? withCalendarPopUp(Year) : null;
    }

    getDate(date) {
        this.setState({
            ...this.state,
            date,
            showCalendar: false
        });
    }

    render() {
        var CalendarInPopup = this.conditionalRender();
        CalendarInPopup = CalendarInPopup ? <CalendarInPopup yearNumber={this.calendar[0].year} getDate={this.getDate} months={this.calendar[0].months} /> : null;
        return <form name="input-form">
            <input type="text" readOnly onClick={this.onToggleCalendar} value={this.state.date} />
            <input type="number" name="days" value={this.state.days} onChange={this.onChangeInput} />
            <button type="button" onClick={this.onClickRender}>Render calendar</button>
            {CalendarInPopup}
        </form>
    }
}