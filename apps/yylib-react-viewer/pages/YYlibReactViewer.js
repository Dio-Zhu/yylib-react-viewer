import React from 'react';
import {YYCreateView} from 'yylib-business';
import {ViewPreviewer} from 'zzj-genview';
export default class YYlibReactViewer extends React.Component {

    render() {
        return  <ViewPreviewer createView={YYCreateView} />
    }

}
