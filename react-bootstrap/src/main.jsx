var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('app'));
ReactDOM.render(<ListManager title="Todos" />, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Tasks" headingColor="#b31217"/>, document.getElementById('task'));
