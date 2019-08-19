/**
 * Created by ICOP
 * 页面路由配置
 */
var React = require('react');
var {Route, IndexRoute, Redirect} = require('react-router');
var App = require('../pages/App');//主应用

module.exports = (
    <Route path="/" component={App}>
    </Route>
);