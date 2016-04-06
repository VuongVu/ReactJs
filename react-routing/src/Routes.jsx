var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var useRouterHistory = ReactRouter.useRouterHistory;
var History = require('history');
var createHashHistory = History.createHashHistory;
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory) ({
  queryKey: false
});

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = (
  <Router history={appHistory}>
    <Route path="/" component={Base} >
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
    </Route>
  </Router>
);

module.exports = Routes;
