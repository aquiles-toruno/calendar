import React, { Component } from 'react';

export default class Day extends Component {
    constructor(props) {
        super(props);
        this.showDate = this.showDate.bind(this);
    }

    showDate() {
        if (this.props.isValid && this.props.getDate)
            this.props.getDate(this.props.date);

        if (this.props.isValid && !this.props.getDate)
            alert(this.props.date);
    }

    render() {
        var holidayStyle = this.props.isHoliday === false ? '' : this.props.isHoliday.isHoliday ? 'blue' : '';
        var title = holidayStyle != "" ? this.props.isHoliday.holiday.name : '';
        var styles = {
            backgroundColor: holidayStyle != "" ? 'blue' : !this.props.isValid ? 'gray' : this.props.isWeekend ? 'yellow' : 'green'
        }
        return (
            <h4 title={title} onClick={this.showDate} style={styles}>{this.props.dayNumber}</h4>
        );
    }
}