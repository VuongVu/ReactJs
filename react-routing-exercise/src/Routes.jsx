var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var IndexRoute = ReactRouter.IndexRoute;
var useRouterHistory = ReactRouter.useRouterHistory;
var History = require('history');
var createHashHistory = History.createHashHistory;
// useRouterHistory creates a composable higher-order function
var appHistory = useRouterHistory(createHashHistory) ({
  queryKey: false
});

var Base = require('./components/Base.jsx');
var News = require('./components/News.jsx');
var Photos = require('./components/Photos.jsx');

var Routes = (
  <Router history={appHistory}>
    <Route path="/" component={Base} >
      <IndexRoute component={News} />
      <Route path="/news" component={News} />
      <Route path="/photos" component={Photos} />
    </Route>
  </Router>
);

module.exports = Routes;
