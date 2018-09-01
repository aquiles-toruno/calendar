import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../extensions/array.extensions';
import '../extensions/date.extensions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Hola</h1>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));