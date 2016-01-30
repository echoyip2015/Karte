webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _file_table = __webpack_require__(406);

	var _file_table2 = _interopRequireDefault(_file_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	ReactDOM.render(React.createElement(
	    "div",
	    null,
	    React.createElement(
	        "section",
	        { className: "content-header" },
	        React.createElement(
	            "h1",
	            null,
	            "我的文件"
	        )
	    ),
	    React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	            "div",
	            { className: "col-md-12 toolbar" },
	            React.createElement(
	                "button",
	                { type: "button", className: "btn btn-primary" },
	                React.createElement("span", { className: "glyphicon glyphicon-plus" }),
	                " 新建地图"
	            )
	        ),
	        React.createElement(
	            "div",
	            { className: "col-md-12" },
	            React.createElement(_file_table2.default, null)
	        )
	    )
	), document.getElementById('content'));

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactBootstrap = __webpack_require__(159);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FileTable = function (_React$Component) {
	    _inherits(FileTable, _React$Component);

	    function FileTable() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, FileTable);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FileTable)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            files: React.createElement(
	                'tr',
	                null,
	                React.createElement(
	                    'td',
	                    null,
	                    '文件加载中..'
	                )
	            )
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(FileTable, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.getFiles();
	        }
	    }, {
	        key: 'getFiles',
	        value: function getFiles() {
	            var _this2 = this;

	            $.get('/files', function (result) {
	                var list = null;
	                if (result.msg == 'ok') {
	                    list = result.files.map(function (file) {
	                        return React.createElement(
	                            'tr',
	                            { key: file._id.$oid },
	                            React.createElement(
	                                'td',
	                                null,
	                                React.createElement(
	                                    'a',
	                                    { href: "/file/" + file._id.$oid },
	                                    React.createElement('i', { className: 'glyphicon glyphicon-file' }),
	                                    ' ',
	                                    file.title
	                                )
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                file.modify_time
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                (file.size / 1024 / 1024).toPrecision(2),
	                                ' MB'
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                file.extname
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                React.createElement(
	                                    'ul',
	                                    { className: 'nav' },
	                                    React.createElement(
	                                        'li',
	                                        { className: 'dropdown' },
	                                        React.createElement(
	                                            'a',
	                                            { className: 'dropdown-toggle', 'data-toggle': 'dropdown', href: '#', 'aria-expanded': 'false' },
	                                            '操作 ',
	                                            React.createElement('span', { className: 'caret' })
	                                        ),
	                                        React.createElement(
	                                            'ul',
	                                            { className: 'dropdown-menu' },
	                                            React.createElement(
	                                                'li',
	                                                { role: 'presentation' },
	                                                React.createElement(
	                                                    'a',
	                                                    { role: 'menuitem' },
	                                                    '重命名'
	                                                )
	                                            ),
	                                            React.createElement(
	                                                'li',
	                                                { role: 'presentation' },
	                                                React.createElement(
	                                                    'a',
	                                                    { role: 'menuitem' },
	                                                    '删除'
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        );
	                    });
	                } else {
	                    list = React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                            'td',
	                            { colSpan: '5' },
	                            '加载文件列表失败.'
	                        )
	                    );
	                }
	                _this2.setState({ files: list });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _reactBootstrap.Table,
	                null,
	                React.createElement(
	                    'thead',
	                    null,
	                    React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                            'th',
	                            null,
	                            '文件名'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '修改时间'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '大小'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '类型'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '操作'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'tbody',
	                    null,
	                    this.state.files
	                )
	            );
	        }
	    }]);

	    return FileTable;
	}(React.Component);

	exports.default = FileTable;

/***/ }

});