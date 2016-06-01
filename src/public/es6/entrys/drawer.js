import {DrawerHeader, MainSiderBar} from '../components/header'
var React = require ('expose?React!react');
var ReactDOM = require('expose?ReactDOM!react-dom');
import MapContainer from '../components/map_container'
import PropLoader from '../libs/preloader'

var props = PropLoader.getProps('#map-editor');

ReactDOM.render(
    <DrawerHeader {...props}/>,
    document.getElementById('header')
);



ReactDOM.render(
    <MapContainer {...props} />,
    document.getElementById('drawer')
);