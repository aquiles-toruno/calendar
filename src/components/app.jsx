import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../extensions/array.extensions';
import '../extensions/date.extensions';
import Calendar from './calendar';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Calendar />
    }
}

ReactDOM.render(<App />, document.getElementById('app'));