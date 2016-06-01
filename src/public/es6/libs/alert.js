import {message} from 'antd'
var React = require ('expose?React!react');
var ReactDOM = require('expose?ReactDOM!react-dom');

var $ = (typeof window.jQuery !== 'undefined') && window.jQuery;

export default class AlertBox {

    static success(msg) {
        message.success(msg, 3);
    }
}