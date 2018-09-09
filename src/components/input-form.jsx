import React, { Component } from 'react';
import Year from './year';
import withCalendarPopUp from './withCalendarPopup';
import DateSummary from './date-summary';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            days: 0,
            showCalendar: false
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onClickRender = this.onClickRender.bind(this);
        this.onToggleCalendar = this.onToggleCalendar.bind(this);
        this.conditionalRender = this.conditionalRender.bind(this);
        this.getDate = this.getDate.bind(this);
        this.getFinalDate = this.getFinalDate.bind(this);
    }

    onChangeInput(event) {
        let states = { ...this.state };
        let value = event.target.value;
        if (event.target.name === "days")
            value = +value;

        states[event.target.name] = value;
        this.setState({ ...states });
    }

    onClickRender(event) {
        this.props.getInputValues(this.state);
    }

    onToggleCalendar() {
        this.setState({ ...this.state, showCalendar: !this.state.showCalendar });
    }

    conditionalRender(currenDate) {
        return this.state.showCalendar ? withCalendarPopUp(Year, currenDate) : null;
    }

    getDate(date) {
        this.setState({
            ...this.state,
            date,
            showCalendar: false
        });
    }

    formatDate(date) {
        var day = date.getDate();
        var monthName = date.getMonthName();
        var year = date.getFullYear();
        return `${day}-${monthName}-${year}`;
    }

    getFinalDate() {
        var endDate = new Date(this.state.date.valueOf());
        endDate.setDate(endDate.getDate() + this.state.days);
        return this.formatDate(endDate);
    }

    render() {
        var CalendarInPopup = this.conditionalRender(this.state.date);
        CalendarInPopup = CalendarInPopup ? <CalendarInPopup getDate={this.getDate} /> : null;
        return <div>
            <form name="input-form">
                <input type="text" name="date" readOnly onClick={this.onToggleCalendar} value={this.formatDate(this.state.date)} />
                <input type="number" name="days" value={this.state.days} onChange={this.onChangeInput} />
                <button type="button" onClick={this.onClickRender}>Render calendar</button>
                {CalendarInPopup}
            </form>
            <DateSummary initialDate={this.formatDate(this.state.date)} days={this.state.days} finalDate={this.getFinalDate()} />
        </div>
    }
}