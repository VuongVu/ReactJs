var React = require('react');
var NewsDetail = require('./NewsDetail.jsx');

var News = React.createClass({
  render: function() {
    return (
      <div>
        <NewsDetail title="Learn React Router" contex="ahihi" />
        <NewsDetail title="Learn React Flux" contex="ahuhu" />
      </div>

    );
  }
});

module.exports = News;
