/**
 * Created by ICOP
 * 应用统一入口
 */
var React = require('react');
import YYJZViewer from './YYlibReactViewer';

var App = React.createClass({
    render: function () {
        return (
            <YYJZViewer />
        );
    }
});

module.exports = App;