import React, { Component } from 'react';

export default class Week extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.children;
    }
}