var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var { Router , hashHistory} = require('react-router');
var { syncHistoryWithStore } = require('react-router-redux');
//获取应用组件
var App = require('./apps/yylib-react-viewer/pages/App');
//获取路由信息
var routes = require('./apps/yylib-react-viewer/routes');
//初始化store
var configureStore = require('./apps/yylib-react-viewer/store/configureStore');
//创建store
var store = configureStore();
//同步路由与Redux的状态
var history = syncHistoryWithStore(hashHistory,store);

ReactDOM.render
(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
    , document.getElementById('app_root')
);