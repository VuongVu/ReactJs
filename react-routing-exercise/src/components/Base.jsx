var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Base = React.createClass({
    render: function() {
        return (
            <div className="container">
              <div className="header clearfix">
                <hr />
                <nav>
                  <ul className="nav nav-pills pull-right">
                    <li role="presentation"><Link to="/news" activeStyle={{ color: 'red' }}>News</Link></li>
                    <li role="presentation"><Link to="/photos" activeStyle={{ color: 'red' }}>Photos</Link></li>
                  </ul>
                </nav>
                <h2 className="text-muted">Country News</h2>
                <h4 className="text-muted">Top stories in my country</h4>
              </div>
              {this.props.children}
            </div>
        );
    }
});

module.exports = Base;
