webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _fileTable = __webpack_require__(562);

	var _fileTable2 = _interopRequireDefault(_fileTable);

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
	                "a",
	                { href: "/karte/new_map", className: "btn btn-primary" },
	                React.createElement("span", { className: "glyphicon glyphicon-plus" }),
	                " 新建地图"
	            )
	        ),
	        React.createElement(
	            "div",
	            { className: "col-md-12" },
	            React.createElement(_fileTable2.default, null)
	        )
	    )
	), document.getElementById('content'));

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _modal = __webpack_require__(405);

	var _modal2 = _interopRequireDefault(_modal);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

	var _metaEditor = __webpack_require__(563);

	var _metaEditor2 = _interopRequireDefault(_metaEditor);

	var _renameModal = __webpack_require__(467);

	var _renameModal2 = _interopRequireDefault(_renameModal);

	var _exportModal = __webpack_require__(471);

	var _exportModal2 = _interopRequireDefault(_exportModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	        key: 'deleteFile',
	        value: function deleteFile(e) {
	            var _this2 = this;

	            var id = e.currentTarget.id;
	            _modal2.default.confirm({
	                title: '确认删除该地图?',
	                content: '点击确定继续操作',
	                onOk: function onOk() {
	                    $.post('/karte/delete_map', { id: id }, function (result) {
	                        if (result.msg == 'ok') {
	                            _this2.getFiles();
	                        }
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'editFileMeta',
	        value: function editFileMeta(e) {
	            var _this3 = this;

	            var id = e.currentTarget.id;
	            $.get('/karte/map_meta?id=' + id, function (result) {
	                if (result.msg == 'ok') {
	                    _this3.refs.meta.setState({ file: result.file });
	                    _this3.refs.meta.open();
	                } else {
	                    console.log(result);
	                }
	            });
	        }
	    }, {
	        key: 'renameFile',
	        value: function renameFile(id, title) {
	            var _this4 = this;

	            this.refs.fileRenamer.setState({ id: id, title: title });
	            this.refs.fileRenamer.open(function () {
	                _this4.getFiles();
	            });
	        }
	    }, {
	        key: 'exportFile',
	        value: function exportFile(id, title) {
	            this.refs.fileExporter.setState({ id: id, title: title });
	            this.refs.fileExporter.open();
	        }
	    }, {
	        key: 'getFiles',
	        value: function getFiles() {
	            var _this5 = this;

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
	                                                { id: file._id.$oid, onClick: _this5.renameFile.bind(_this5, file._id.$oid, file.title) },
	                                                React.createElement(
	                                                    'a',
	                                                    { href: 'javascript:void(0);' },
	                                                    '重命名'
	                                                )
	                                            ),
	                                            React.createElement(
	                                                'li',
	                                                { id: file._id.$oid, onClick: _this5.exportFile.bind(_this5, file._id.$oid, file.title) },
	                                                React.createElement(
	                                                    'a',
	                                                    { href: 'javascript:void(0);' },
	                                                    '导出文件'
	                                                )
	                                            ),
	                                            React.createElement(
	                                                'li',
	                                                { id: file._id.$oid, onClick: _this5.editFileMeta.bind(_this5) },
	                                                React.createElement(
	                                                    'a',
	                                                    { href: 'javascript:void(0);' },
	                                                    '地图元信息编辑'
	                                                )
	                                            ),
	                                            React.createElement(
	                                                'li',
	                                                { id: file._id.$oid, onClick: _this5.deleteFile.bind(_this5) },
	                                                React.createElement(
	                                                    'a',
	                                                    { href: 'javascript:void(0);' },
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
	                _this5.setState({ files: list });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
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
	                ),
	                React.createElement(_metaEditor2.default, { ref: 'meta' }),
	                React.createElement(_renameModal2.default, { ref: 'fileRenamer', fileId: this.state.fileId, fileTitle: this.state.fileTitle }),
	                React.createElement(_exportModal2.default, { ref: 'fileExporter', fileId: this.state.fileId, fileTitle: this.state.fileTitle })
	            );
	        }
	    }]);

	    return FileTable;
	}(React.Component);

	exports.default = FileTable;

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _modal = __webpack_require__(405);

	var _modal2 = _interopRequireDefault(_modal);

	var _button = __webpack_require__(446);

	var _button2 = _interopRequireDefault(_button);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

	var MapMetaModal = function (_React$Component) {
	    _inherits(MapMetaModal, _React$Component);

	    function MapMetaModal() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, MapMetaModal);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(MapMetaModal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            showModal: false,
	            file: null
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(MapMetaModal, [{
	        key: 'open',
	        value: function open() {
	            this.setState({ showModal: true });
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            this.setState({ showModal: false });
	        }
	    }, {
	        key: 'proj',
	        value: function proj() {
	            if (this.state.file == null) {
	                return '未知';
	            } else {
	                return this.state.file.meta.proj;
	            }
	        }
	    }, {
	        key: 'extent',
	        value: function extent() {
	            if (this.state.file == null) {
	                return React.createElement('div', null); //an empty div
	            } else {
	                    var meta = this.state.file.meta;
	                    return [React.createElement(
	                        'span',
	                        { key: 0, className: 'col-xs-6' },
	                        'minX: ',
	                        meta.extent[0]
	                    ), React.createElement(
	                        'span',
	                        { key: 1, className: 'col-xs-6' },
	                        'minY: ',
	                        meta.extent[1]
	                    ), React.createElement(
	                        'span',
	                        { key: 2, className: 'col-xs-6' },
	                        'maxX: ',
	                        meta.extent[2]
	                    ), React.createElement(
	                        'span',
	                        { key: 3, className: 'col-xs-6' },
	                        'maxY: ',
	                        meta.extent[3]
	                    )];
	                }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _modal2.default,
	                { title: '空间元信息', visible: this.state.showModal, onCancel: this.close.bind(this),
	                    footer: React.createElement(
	                        _button2.default,
	                        { type: 'primary', onClick: this.close.bind(this) },
	                        '确定'
	                    ) },
	                React.createElement(
	                    'form',
	                    { className: 'form-horizontal' },
	                    React.createElement(_reactBootstrap.FormControls.Static, { label: '坐标投影', labelClassName: 'col-xs-3', wrapperClassName: 'col-xs-9', value: this.proj() }),
	                    React.createElement(
	                        _reactBootstrap.FormControls.Static,
	                        { label: '坐标范围', labelClassName: 'col-xs-3', wrapperClassName: 'col-xs-9' },
	                        this.extent()
	                    )
	                )
	            );
	        }
	    }]);

	    return MapMetaModal;
	}(React.Component);

	exports.default = MapMetaModal;

/***/ }

});