/**
 * Created by ICOP
 * 应用统一入口
 */
import React,{Component} from 'react';
import {YYCreateView} from 'yylib-business';
import {connect} from 'zzj-genview';

const WrappedCreateView = connect(YYCreateView);

class App extends Component{
    render() {
        return (
            <WrappedCreateView />
        );
    }
};

module.exports = App;