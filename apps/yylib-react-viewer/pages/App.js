/**
 * Created by ICOP
 * 应用统一入口
 */
import React,{Component} from 'react';
import {YYCreateView} from 'yylib-business';
import {connectReactViewer} from 'ide-sdk-viewer';

const WrappedCreateView = connectReactViewer(YYCreateView,React);

class App extends Component{
    render() {
        return (
            <WrappedCreateView />
        );
    }
};

module.exports = App;