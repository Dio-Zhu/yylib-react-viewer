/**
 * Created by xg on 2017/7/13.
 */
var {combineReducers} = require('redux');
//注册路由组件需要的reducer
var {routerReducer}  = require('react-router-redux');

/**
 * 将所有State组织成一个状态树来进行维护
 */
export default combineReducers({
    routing: routerReducer
});