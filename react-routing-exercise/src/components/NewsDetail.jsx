var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NewsDetail = React.createClass({
  render: function() {
    return (
        <div className="jumbotron">
          <h3>{this.props.title}</h3>
          <p className="lead">{this.props.contex}</p>
          <p><a className="btn btn-lg btn-success" href="#" role="button">Read more</a></p>
        </div>
    );
  }
});

module.exports = NewsDetail;
