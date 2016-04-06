var React = require('react');

var ListItem = React.createClass({
  render: function() {
    return (
      <li>
        <h3>{this.props.text}</h3>
      </li>
    );
  }
});

module.exports = ListItem;
