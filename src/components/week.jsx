import React, { Component } from 'react';
import '../components/week.css';

export default class Week extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="week-container"> {this.props.children}</div>
    }
}