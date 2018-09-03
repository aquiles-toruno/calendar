import React, { Component } from 'react';

export default class InvalidDay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var styles = {
            color: 'red'
        }
        return (
            <h4 style={styles}>-</h4>
        );
    }
}