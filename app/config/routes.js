var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRouter = ReactRouter.IndexRouter;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRouter component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
