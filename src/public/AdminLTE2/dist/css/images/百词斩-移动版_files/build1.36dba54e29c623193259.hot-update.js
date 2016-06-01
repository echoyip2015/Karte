webpackHotUpdate(1,{

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(553), RootInstanceProvider = __webpack_require__(561), ReactMount = __webpack_require__(28), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _button = __webpack_require__(573);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var fail_url = __webpack_require__(569);

	var Style = {
	    qWrap: {
	        display: 'flex',
	        minHeight: window.innerHeight,
	        flexDirection: 'column',
	        alignItems: 'center',
	        backgroundColor: '#e8e4d9',
	        paddingLeft: 18,
	        paddingRight: 18
	    },

	    qContent: {
	        display: 'flex',
	        flex: 8,
	        flexDirection: 'column',
	        alignSelf: 'center',
	        alignItems: 'center',
	        flexWrap: 'wrap',
	        justifyContent: 'center',
	        padding: 8
	    },

	    qSelection: {
	        display: 'flex',
	        width: '100%',
	        flexDirection: 'row',
	        flexWrap: 'wrap',
	        alignSelf: 'flex-start',
	        justifyContent: 'center'
	    },

	    qSelectButton: {
	        display: 'flex',
	        flexDirection: 'row',
	        justifyContent: 'center',
	        backgroundColor: '#dad4c8',
	        padding: 10,
	        borderWidth: 0,
	        borderColor: '#434343',
	        borderRadius: 4,
	        marginTop: 7.5,
	        marginBottom: 7.5,
	        width: '100%',
	        height: 40
	    },

	    qskipContainer: {
	        display: 'flex',
	        flexDirection: 'row',
	        justifyContent: 'center',
	        backgroundColor: '#f8f4e8',
	        paddingTop: 9,
	        paddingLeft: 21,
	        paddingBottom: 10,
	        paddingRight: 21,
	        borderColor: '#dad4c8',
	        borderWidth: 0,
	        borderRadius: 2.5,
	        marginRight: 3
	    },

	    qSubmitContainer: {
	        display: 'flex',
	        backgroundColor: '#f8f4e8',
	        paddingTop: 9,
	        paddingLeft: 21,
	        paddingBottom: 10,
	        paddingRight: 21,
	        borderColor: '#dad4c8',
	        borderWidth: 0,
	        borderRadius: 2.5,
	        margin: 3
	    },

	    qWrapC: {
	        display: 'flex',
	        flex: 6,
	        flexDirection: 'row',
	        alignItems: 'center',
	        flexWrap: 'wrap',
	        justifyContent: 'center',
	        padding: 20,
	        margin: 10
	    },

	    qWord: {
	        display: 'flex',
	        fontSize: 15,
	        lineHeight: '15px',
	        fontFamily: 'HelveticaNeue-Light',
	        flexDirection: 'column',
	        padding: 6,
	        color: '#55524d'
	    },

	    qInput: {
	        display: 'flex',
	        width: 80,
	        height: 46,
	        padding: 4,
	        fontSize: 30,
	        fontFamily: 'Arial',
	        fontWeight: 'bold',
	        color: '#1abc9c',
	        borderRadius: 6,
	        borderWidth: 1,
	        borderColor: '#bdc3c7',
	        alignSelf: 'center'
	    },

	    qOperator: {
	        display: 'flex',
	        flexDirection: 'row',
	        alignItems: 'center',
	        marginBottom: 32.5,
	        marginLeft: window.innerWidth / 2 - 15
	    },

	    failImage: {
	        width: 100,
	        height: 100
	    }
	};

	var Question = function (_React$Component) {
	    _inherits(Question, _React$Component);

	    function Question() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Question);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Question)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            userInput: '',
	            showFailed: false
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Question, [{
	        key: 'handleClickSubmit',
	        value: function handleClickSubmit() {
	            var _props = this.props;
	            var index = _props.index;
	            var levelId = _props.levelId;
	            var correct = _props.correct;

	            if (this.checkResult()) {
	                this.props.goWiki(levelId, index, correct + 1);
	                //this.props.goQuestion(levelId, index+2, correct + 1);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var fail = this.state.showFailed ? _react2.default.createElement(Image, { source: fail_url, style: Style.failImage }) : null;
	            return _react2.default.createElement(
	                'div',
	                { style: Style.qWrap },
	                _react2.default.createElement(
	                    'div',
	                    { style: Style.qContent },
	                    _react2.default.createElement(
	                        'div',
	                        { style: Style.qWord },
	                        'adj.光芒四射的，绚丽的；光彩照人的'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: Style.qSelection },
	                    _react2.default.createElement(_button2.default, { style: Style.qSelectButton }),
	                    _react2.default.createElement(_button2.default, { style: Style.qSelectButton }),
	                    _react2.default.createElement(_button2.default, { style: Style.qSelectButton }),
	                    _react2.default.createElement(_button2.default, { style: Style.qSelectButton })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: Style.qOperator },
	                    _react2.default.createElement(
	                        _button2.default,
	                        { style: Style.qskipContainer },
	                        '斩'
	                    ),
	                    _react2.default.createElement(
	                        _button2.default,
	                        { style: Style.qSubmitContainer },
	                        '提示'
	                    )
	                )
	            );
	        }
	    }]);

	    return Question;
	}(_react2.default.Component);

	exports.default = Question;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(565); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Question.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(482)(module)))

/***/ }

})