'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

var _placements = require('./placements');

var _placements2 = _interopRequireDefault(_placements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*

 var MenuItem = Menu.Item;

 var menu = <Menu><MenuItem>1</MenuItem></Menu>;

 <DropDown trigger="click" animationName="" overlay={<>} onSelect={}>
 <button>open</button>
 </DropDown>
 */

var Dropdown = _react2.default.createClass({
  displayName: 'Dropdown',

  propTypes: {
    minOverlayWidthMatchTrigger: _react.PropTypes.bool,
    onVisibleChange: _react.PropTypes.func,
    prefixCls: _react.PropTypes.string,
    children: _react.PropTypes.any,
    transitionName: _react.PropTypes.string,
    overlayClassName: _react.PropTypes.string,
    animation: _react.PropTypes.any,
    align: _react.PropTypes.object,
    overlayStyle: _react.PropTypes.object,
    placement: _react.PropTypes.string,
    trigger: _react.PropTypes.array,
    showAction: _react.PropTypes.array,
    hideAction: _react.PropTypes.array,
    getPopupContainer: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      minOverlayWidthMatchTrigger: true,
      prefixCls: 'rc-dropdown',
      trigger: ['hover'],
      showAction: [],
      hideAction: [],
      overlayClassName: '',
      overlayStyle: {},
      defaultVisible: false,
      onVisibleChange: function onVisibleChange() {},

      placement: 'bottomLeft'
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    if ('visible' in props) {
      return {
        visible: props.visible
      };
    }
    return {
      visible: props.defaultVisible
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if ('visible' in props) {
      this.setState({
        visible: props.visible
      });
    }
  },
  onClick: function onClick(e) {
    var props = this.props;
    var overlayProps = props.overlay.props;
    if (!('visible' in props)) {
      this.setState({
        visible: false
      });
    }
    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  },
  onVisibleChange: function onVisibleChange(v) {
    var props = this.props;
    if (!('visible' in props)) {
      this.setState({
        visible: v
      });
    }
    props.onVisibleChange(v);
  },
  getMenuElement: function getMenuElement() {
    var props = this.props;
    return _react2.default.cloneElement(props.overlay, {
      prefixCls: props.prefixCls + '-menu',
      onClick: this.onClick
    });
  },
  getPopupDomNode: function getPopupDomNode() {
    return this.refs.trigger.getPopupDomNode();
  },
  afterVisibleChange: function afterVisibleChange(visible) {
    if (visible && this.props.minOverlayWidthMatchTrigger) {
      var overlayNode = this.getPopupDomNode();
      var rootNode = _reactDom2.default.findDOMNode(this);
      if (rootNode.offsetWidth > overlayNode.offsetWidth) {
        overlayNode.style.width = rootNode.offsetWidth + 'px';
      }
    }
  },
  render: function render() {
    var _extends2;

    var _props = this.props;
    var prefixCls = _props.prefixCls;
    var children = _props.children;
    var transitionName = _props.transitionName;
    var animation = _props.animation;
    var align = _props.align;
    var placement = _props.placement;
    var getPopupContainer = _props.getPopupContainer;
    var showAction = _props.showAction;
    var hideAction = _props.hideAction;
    var overlayClassName = _props.overlayClassName;
    var overlayStyle = _props.overlayStyle;
    var trigger = _props.trigger;

    var otherProps = _objectWithoutProperties(_props, ['prefixCls', 'children', 'transitionName', 'animation', 'align', 'placement', 'getPopupContainer', 'showAction', 'hideAction', 'overlayClassName', 'overlayStyle', 'trigger']);

    return _react2.default.createElement(
      _rcTrigger2.default,
      _extends({}, otherProps, (_extends2 = {
        prefixCls: prefixCls,
        ref: 'trigger',
        popupClassName: overlayClassName,
        popupStyle: overlayStyle,
        builtinPlacements: _placements2.default,
        action: trigger,
        showAction: showAction
      }, _defineProperty(_extends2, 'showAction', showAction), _defineProperty(_extends2, 'hideAction', hideAction), _defineProperty(_extends2, 'popupPlacement', placement), _defineProperty(_extends2, 'popupAlign', align), _defineProperty(_extends2, 'popupTransitionName', transitionName), _defineProperty(_extends2, 'popupAnimation', animation), _defineProperty(_extends2, 'popupVisible', this.state.visible), _defineProperty(_extends2, 'afterPopupVisibleChange', this.afterVisibleChange), _defineProperty(_extends2, 'popup', this.getMenuElement()), _defineProperty(_extends2, 'onPopupVisibleChange', this.onVisibleChange), _defineProperty(_extends2, 'getPopupContainer', getPopupContainer), _extends2)),
      children
    );
  }
});

exports.default = Dropdown;
module.exports = exports['default'];