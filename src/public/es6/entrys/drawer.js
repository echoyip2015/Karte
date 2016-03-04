import {DrawerHeader, MainSiderBar} from '../components/header'
var React = require ('expose?React!react');
var ReactDOM = require('expose?ReactDOM!react-dom');
import MapContainer from '../components/map_container'
import PropLoader from '../libs/preloader'

var props = PropLoader.getProps('#map-editor');
var map = React.createElement(MapContainer, props)

ReactDOM.render(
    <DrawerHeader />,
    document.getElementById('header')
);



ReactDOM.render(
    map,
    document.getElementById('drawer')
);