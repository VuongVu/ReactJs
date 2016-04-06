var React = require('react');

var Photos = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h3>Photos today</h3>
        <p className="lead">Awesome photos</p>
        <p><a className="btn btn-lg btn-success" href="#" role="button">View more</a></p>
      </div>
    );
  }
});

module.exports = Photos;
