import {HomeHeader, MainSiderBar} from '../components/header'
var React = require ('expose?React!react');
var ReactDOM = require('expose?ReactDOM!react-dom');

ReactDOM.render(
    <HomeHeader />,
    document.getElementById('header')
);

ReactDOM.render(
    <MainSiderBar />,
    document.getElementById('sidebar')
);