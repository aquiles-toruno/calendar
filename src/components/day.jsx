import React, { Component } from 'react';

export default class Day extends Component {
    constructor(props) {
        super(props);
        this.showDate = this.showDate.bind(this);
    }

    showDate() {
        if (!this.props.isInvalid)
            alert(this.props.date);
    }

    render() {
        var styles = {
            color: this.props.isInvalid ? 'red' : this.props.isWeekend ? 'yellow' : 'green'
        }
        return (
            <h4 onClick={this.showDate} style={styles}>{this.props.dayNumber}</h4>
        );
    }
}