webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _header = __webpack_require__(403);

	var React = __webpack_require__(469);
	var ReactDOM = __webpack_require__(470);

	ReactDOM.render(React.createElement(_header.HomeHeader, null), document.getElementById('header'));

	ReactDOM.render(React.createElement(_header.MainSiderBar, null), document.getElementById('sidebar'));

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MainMenu = exports.MainSiderBar = exports.DrawerHeader = exports.HomeHeader = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _uploadModal = __webpack_require__(404);

	var _uploadModal2 = _interopRequireDefault(_uploadModal);

	var _renameModal = __webpack_require__(467);

	var _renameModal2 = _interopRequireDefault(_renameModal);

	var _exportModal = __webpack_require__(471);

	var _exportModal2 = _interopRequireDefault(_exportModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

	var HomeHeader = exports.HomeHeader = function (_React$Component) {
	    _inherits(HomeHeader, _React$Component);

	    function HomeHeader() {
	        _classCallCheck(this, HomeHeader);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(HomeHeader).apply(this, arguments));
	    }

	    _createClass(HomeHeader, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'header',
	                { className: 'main-header' },
	                React.createElement(
	                    'a',
	                    { href: '/', className: 'logo' },
	                    'Karte'
	                ),
	                React.createElement(
	                    'nav',
	                    { className: 'navbar navbar-static-top', role: 'navigation' },
	                    React.createElement(
	                        'div',
	                        { className: 'navbar-custom-menu' },
	                        React.createElement(
	                            'ul',
	                            { className: 'nav navbar-nav' },
	                            React.createElement(
	                                'li',
	                                null,
	                                React.createElement(
	                                    'a',
	                                    { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
	                                    'admin'
	                                )
	                            ),
	                            React.createElement(
	                                'li',
	                                null,
	                                React.createElement(
	                                    'a',
	                                    { href: '/karte/logout' },
	                                    '退出'
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(MainMenu, { ref: 'menu' })
	                )
	            );
	        }
	    }]);

	    return HomeHeader;
	}(React.Component);

	var DrawerHeader = exports.DrawerHeader = function (_React$Component2) {
	    _inherits(DrawerHeader, _React$Component2);

	    function DrawerHeader() {
	        var _Object$getPrototypeO;

	        var _temp, _this2, _ret;

	        _classCallCheck(this, DrawerHeader);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DrawerHeader)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.state = {
	            title: ''
	        }, _temp), _possibleConstructorReturn(_this2, _ret);
	    }

	    _createClass(DrawerHeader, [{
	        key: 'openMenu',
	        value: function openMenu() {
	            $(ReactDOM.findDOMNode(this.refs.menu)).css('left', '0px');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'header',
	                { className: 'main-header' },
	                React.createElement(
	                    'a',
	                    { href: '/', className: 'logo' },
	                    'Karte'
	                ),
	                React.createElement(
	                    'nav',
	                    { className: 'navbar navbar-static-top', role: 'navigation' },
	                    React.createElement(
	                        'a',
	                        { href: '#', className: 'sidebar-toggle', onClick: this.openMenu.bind(this) },
	                        React.createElement(
	                            'span',
	                            { className: 'sr-only' },
	                            'Toggle navigation'
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'navbar-collapse pull-left collapse' },
	                        React.createElement(
	                            'ul',
	                            { className: 'nav navbar-nav' },
	                            React.createElement(
	                                'li',
	                                null,
	                                React.createElement(
	                                    'span',
	                                    null,
	                                    (this.state.title || this.props.title) + this.props.extname
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'navbar-custom-menu' },
	                        React.createElement(
	                            'ul',
	                            { className: 'nav navbar-nav' },
	                            React.createElement(
	                                'li',
	                                null,
	                                React.createElement(
	                                    'a',
	                                    { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
	                                    'admin'
	                                )
	                            ),
	                            React.createElement(
	                                'li',
	                                null,
	                                React.createElement(
	                                    'a',
	                                    { href: '/karte/logout' },
	                                    '退出'
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(MainMenu, { ref: 'menu', fileId: this.props.id, fileTitle: this.props.title, header: this })
	                )
	            );
	        }
	    }]);

	    return DrawerHeader;
	}(React.Component);

	var MainSiderBar = exports.MainSiderBar = function (_React$Component3) {
	    _inherits(MainSiderBar, _React$Component3);

	    function MainSiderBar() {
	        _classCallCheck(this, MainSiderBar);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MainSiderBar).apply(this, arguments));
	    }

	    _createClass(MainSiderBar, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'main-sidebar' },
	                React.createElement(
	                    'div',
	                    { className: 'sidebar' },
	                    React.createElement(
	                        'ul',
	                        { className: 'sidebar-menu' },
	                        React.createElement(
	                            'li',
	                            { className: 'active' },
	                            React.createElement(
	                                'a',
	                                { href: '/home' },
	                                React.createElement('i', { className: 'glyphicon glyphicon-home' }),
	                                React.createElement(
	                                    'span',
	                                    null,
	                                    '我的文件'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return MainSiderBar;
	}(React.Component);

	var MainMenu = exports.MainMenu = function (_React$Component4) {
	    _inherits(MainMenu, _React$Component4);

	    function MainMenu() {
	        var _Object$getPrototypeO2;

	        var _temp2, _this4, _ret2;

	        _classCallCheck(this, MainMenu);

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(MainMenu)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this4), _this4.state = {
	            recent_files: [],
	            current_file: null
	        }, _temp2), _possibleConstructorReturn(_this4, _ret2);
	    }

	    _createClass(MainMenu, [{
	        key: 'close',
	        value: function close() {
	            $(ReactDOM.findDOMNode(this)).css('left', '-740px');
	        }
	    }, {
	        key: 'handleUploadFile',
	        value: function handleUploadFile() {
	            this.refs.fileUploader.open();
	            this.close();
	        }
	    }, {
	        key: 'handleRenameFile',
	        value: function handleRenameFile() {
	            this.refs.fileRenamer.open();
	            this.close();
	        }
	    }, {
	        key: 'handleExportFile',
	        value: function handleExportFile() {
	            this.refs.fileExporter.open();
	            this.close();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.getRecentFile();
	        }
	    }, {
	        key: 'getRecentFile',
	        value: function getRecentFile() {
	            var _this5 = this;

	            $.get('/karte/recent_files', function (result) {
	                if (result.msg == 'ok') {
	                    _this5.setState({ recent_files: result.maps });
	                }
	            });
	        }
	    }, {
	        key: 'openFile',
	        value: function openFile(id) {
	            window.location = "/file/" + id;
	        }
	    }, {
	        key: 'renderRecentFileList',
	        value: function renderRecentFileList() {
	            var _this6 = this;

	            var list = this.state.recent_files.map(function (file, index) {
	                var now = new Date().getTime();
	                var m_date = new Date(file.modify_time).getTime();
	                var days = (now - m_date) / (60 * 60 * 24 * 1000) | 0;
	                return React.createElement(
	                    'li',
	                    { className: 'ng-scope', onClick: _this6.openFile.bind(_this6, file._id.$oid), key: index },
	                    React.createElement(
	                        'span',
	                        { className: 'icon' },
	                        React.createElement('i', { className: 'fa fa-file-image-o' })
	                    ),
	                    React.createElement(
	                        'span',
	                        { className: 'filename' },
	                        file.title + file.extname
	                    ),
	                    React.createElement(
	                        'span',
	                        { className: 'info' },
	                        days,
	                        ' 天前'
	                    )
	                );
	            });
	            return list;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'main-menu', tabIndex: '-1' },
	                React.createElement(
	                    'ul',
	                    { className: 'tab-head' },
	                    React.createElement(
	                        'li',
	                        { className: 'close-menu', onClick: this.close.bind(this) },
	                        React.createElement('i', { className: 'fa fa-chevron-left' })
	                    ),
	                    React.createElement(
	                        'li',
	                        { className: 'main-menu-tool active' },
	                        ' ',
	                        React.createElement(
	                            'a',
	                            { href: '#tool-new', 'data-toggle': 'tab' },
	                            React.createElement(
	                                'span',
	                                null,
	                                '新建'
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        { className: 'main-menu-tool' },
	                        ' ',
	                        React.createElement(
	                            'a',
	                            { href: '#tool-open', 'data-toggle': 'tab' },
	                            React.createElement(
	                                'span',
	                                null,
	                                '打开'
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        { className: 'main-menu-tool' },
	                        ' ',
	                        React.createElement(
	                            'a',
	                            { href: '#tool-export', 'data-toggle': 'tab' },
	                            React.createElement(
	                                'span',
	                                null,
	                                '导出'
	                            )
	                        )
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'tab-body tab-content' },
	                    React.createElement(
	                        'div',
	                        { className: 'tab-pane active', id: 'tool-new' },
	                        React.createElement(
	                            'h2',
	                            { className: 'title' },
	                            '新建'
	                        ),
	                        React.createElement(
	                            'ul',
	                            { className: 'template-list' },
	                            React.createElement(
	                                'a',
	                                { href: '/karte/new_map' },
	                                React.createElement(
	                                    'li',
	                                    { className: 'template-item' },
	                                    React.createElement(
	                                        'span',
	                                        null,
	                                        '空白地图'
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'tab-pane', id: 'tool-open' },
	                        React.createElement(
	                            'h2',
	                            { className: 'title' },
	                            '打开'
	                        ),
	                        React.createElement(
	                            'h3',
	                            { className: 'latest-files-title' },
	                            '最近使用的文件'
	                        ),
	                        React.createElement(
	                            'ul',
	                            { className: 'latest-files' },
	                            this.renderRecentFileList()
	                        ),
	                        React.createElement(
	                            'a',
	                            { className: 'go-home', href: '/home', target: '_self', title: '到我的文档里查看更多' },
	                            '到我的文档里查看更多..'
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'item import-file', onClick: this.handleUploadFile.bind(this) },
	                            React.createElement('i', { className: 'glyphicon glyphicon-open icon' }),
	                            React.createElement(
	                                'span',
	                                { className: 'item-name' },
	                                '打开本地文件'
	                            ),
	                            React.createElement(
	                                'span',
	                                { className: 'item-info' },
	                                '上传本地地图文件，并编辑'
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'tab-pane', id: 'tool-export' },
	                        React.createElement(
	                            'h2',
	                            { className: 'title' },
	                            '导出'
	                        ),
	                        React.createElement(
	                            'ul',
	                            { className: 'items' },
	                            React.createElement(
	                                'li',
	                                { className: 'item', onClick: this.handleRenameFile.bind(this) },
	                                React.createElement('i', { className: 'glyphicon glyphicon-edit icon' }),
	                                React.createElement(
	                                    'span',
	                                    { className: 'item-name' },
	                                    '重命名'
	                                ),
	                                React.createElement(
	                                    'span',
	                                    { className: 'item-info' },
	                                    '重命名此文件'
	                                )
	                            ),
	                            React.createElement(
	                                'li',
	                                { className: 'item', onClick: this.handleExportFile.bind(this) },
	                                React.createElement('i', { className: 'glyphicon glyphicon-save icon' }),
	                                React.createElement(
	                                    'span',
	                                    { className: 'item-name' },
	                                    '导出'
	                                ),
	                                React.createElement(
	                                    'span',
	                                    { className: 'item-info' },
	                                    '将文件导出到本地（不包含第三方格式，.dxf 文件除外）'
	                                )
	                            )
	                        )
	                    )
	                ),
	                React.createElement(_uploadModal2.default, { ref: 'fileUploader' }),
	                React.createElement(_renameModal2.default, { ref: 'fileRenamer', fileId: this.props.fileId, fileTitle: this.props.fileTitle, header: this.props.header }),
	                React.createElement(_exportModal2.default, { ref: 'fileExporter', fileId: this.props.fileId, fileTitle: this.props.fileTitle })
	            );
	        }
	    }]);

	    return MainMenu;
	}(React.Component);

	/*<li className="item" onclick="Karte.MainTool.reSaveFile()">
	 <i className="glyphicon glyphicon-duplicate icon"></i>
	 <span className="item-name">另存为</span>
	 <span className="item-info">保存副本到我的文档</span>
	 </li>*/

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _modal = __webpack_require__(405);

	var _modal2 = _interopRequireDefault(_modal);

	var _icon = __webpack_require__(450);

	var _icon2 = _interopRequireDefault(_icon);

	var _button = __webpack_require__(446);

	var _button2 = _interopRequireDefault(_button);

	var _message = __webpack_require__(451);

	var _message2 = _interopRequireDefault(_message);

	var _upload = __webpack_require__(455);

	var _upload2 = _interopRequireDefault(_upload);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

	var Dragger = _upload2.default.Dragger;

	var FileUploader = function (_React$Component) {
	    _inherits(FileUploader, _React$Component);

	    function FileUploader() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, FileUploader);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FileUploader)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            showModal: false,
	            fileList: []
	        }, _this.uploadProps = {
	            name: 'file',
	            showUploadList: true,
	            action: '/karte/upload',
	            accept: ".dxf,.json,.kml"
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(FileUploader, [{
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
	        key: 'onUploadChange',
	        value: function onUploadChange(evt) {
	            var file = evt.file;
	            var fileList = evt.fileList;
	            fileList = fileList.slice(-1);
	            if (file.status == 'done') {
	                if (file.response.map) {
	                    this.load(file.response.map);
	                } else {
	                    this.setState({ data: null });
	                    _message2.default.info('上传的文件格式错误!!', 3);
	                    fileList = fileList.filter(function (file) {
	                        if (file.response && file.response.msg === 'failed') {
	                            return false;
	                        }
	                        return true;
	                    });
	                }
	            }
	            this.setState({ fileList: fileList });
	        }
	    }, {
	        key: 'load',
	        value: function load(map) {
	            if (map) {
	                var id = map._id.$oid;
	                this.close();
	                window.location = '/file/' + id;
	                return true;
	            } else {
	                _message2.default.info('还未上传地图文件!', 3);
	                return false;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _modal2.default,
	                { title: '打开文件', visible: this.state.showModal, onCancel: this.close.bind(this), footer: React.createElement(
	                        _button2.default,
	                        { type: 'primary', onClick: this.close.bind(this) },
	                        '确定'
	                    ) },
	                React.createElement(
	                    'form',
	                    { id: 'mapUploader', action: '/karte/upload', method: 'post', encType: 'multipart/form-data' },
	                    React.createElement(
	                        'div',
	                        { className: 'modal-body' },
	                        React.createElement(
	                            'div',
	                            { className: 'form-group', style: { height: 160 } },
	                            React.createElement(
	                                Dragger,
	                                _extends({}, this.uploadProps, { onChange: this.onUploadChange.bind(this), fileList: this.state.fileList }),
	                                React.createElement(_icon2.default, { type: 'plus' }),
	                                React.createElement(
	                                    'p',
	                                    { className: 'ant-upload-text' },
	                                    '选择本地文件,或将文件拖拽到此区域上传'
	                                ),
	                                React.createElement(
	                                    'p',
	                                    { className: 'ant-upload-hint' },
	                                    '支持的格式：GeoJson 格式(.json), KML 格式(.kml), AutoCad DXF 格式(.dxf)'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return FileUploader;
	}(React.Component);

	exports.default = FileUploader;

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcUpload = __webpack_require__(456);

	var _rcUpload2 = _interopRequireDefault(_rcUpload);

	var _objectAssign = __webpack_require__(432);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _uploadList = __webpack_require__(462);

	var _uploadList2 = _interopRequireDefault(_uploadList);

	var _getFileItem = __webpack_require__(466);

	var _getFileItem2 = _interopRequireDefault(_getFileItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ant-upload';

	function noop() {}

	function T() {
	  return true;
	}

	// Fix IE file.status problem
	// via coping a new Object
	function fileToObject(file) {
	  return {
	    lastModified: file.lastModified,
	    lastModifiedDate: file.lastModifiedDate,
	    name: file.filename || file.name,
	    size: file.size,
	    type: file.type,
	    uid: file.uid,
	    response: file.response,
	    error: file.error,
	    percent: 0,
	    originFileObj: file
	  };
	}

	/**
	 * 生成Progress percent: 0.1 -> 0.98
	 *   - for ie
	 */
	function genPercentAdd() {
	  var k = 0.1;
	  var i = 0.01;
	  var end = 0.98;
	  return function (start) {
	    if (start >= end) {
	      return start;
	    } else {
	      start += k;
	      k = k - i;
	      if (k < 0.001) {
	        k = 0.001;
	      }
	    }
	    return start * 100;
	  };
	}

	var AntUpload = _react2.default.createClass({
	  displayName: 'AntUpload',
	  getInitialState: function getInitialState() {
	    return {
	      fileList: this.props.fileList || this.props.defaultFileList || [],
	      dragState: 'drop'
	    };
	  },
	  onStart: function onStart(file) {
	    if (this.recentUploadStatus === false) return;

	    var targetItem = undefined;
	    var nextFileList = this.state.fileList.concat();
	    if (file.length > 0) {
	      targetItem = file.map(function (f) {
	        f = fileToObject(f);
	        f.status = 'uploading';
	        return f;
	      });
	      nextFileList = nextFileList.concat(targetItem);
	    } else {
	      targetItem = fileToObject(file);
	      targetItem.status = 'uploading';
	      nextFileList.push(targetItem);
	    }
	    this.onChange({
	      file: targetItem,
	      fileList: nextFileList
	    });
	    // fix ie progress
	    if (!window.FormData) {
	      this.autoUpdateProgress(0, targetItem);
	    }
	  },
	  autoUpdateProgress: function autoUpdateProgress(percent, file) {
	    var _this = this;

	    var getPercent = genPercentAdd();
	    var curPercent = 0;
	    this.progressTimer = setInterval(function () {
	      curPercent = getPercent(curPercent);
	      _this.onProgress({
	        percent: curPercent
	      }, file);
	    }, 200);
	  },
	  removeFile: function removeFile(file) {
	    var fileList = this.state.fileList;
	    var targetItem = (0, _getFileItem2.default)(file, fileList);
	    var index = fileList.indexOf(targetItem);
	    if (index !== -1) {
	      fileList.splice(index, 1);
	      return fileList;
	    }
	    return null;
	  },
	  onSuccess: function onSuccess(response, file) {
	    this.clearProgressTimer();
	    // 服务器端需要返回标准 json 字符串
	    // 否则视为失败
	    try {
	      if (typeof response === 'string') {
	        JSON.parse(response);
	      }
	    } catch (e) {
	      this.onError(new Error('No response'), response, file);
	      return;
	    }
	    var fileList = this.state.fileList;
	    var targetItem = (0, _getFileItem2.default)(file, fileList);
	    // 之前已经删除
	    if (targetItem) {
	      targetItem.status = 'done';
	      targetItem.response = response;
	      this.onChange({
	        file: targetItem,
	        fileList: fileList
	      });
	    }
	  },
	  onProgress: function onProgress(e, file) {
	    var fileList = this.state.fileList;
	    var targetItem = (0, _getFileItem2.default)(file, fileList);
	    if (!targetItem) return;
	    targetItem.percent = e.percent;
	    this.onChange({
	      event: e,
	      file: file,
	      fileList: this.state.fileList
	    });
	  },
	  onError: function onError(error, response, file) {
	    this.clearProgressTimer();
	    var fileList = this.state.fileList;
	    var targetItem = (0, _getFileItem2.default)(file, fileList);
	    targetItem.error = error;
	    targetItem.response = response;
	    targetItem.status = 'error';
	    this.handleRemove(targetItem);
	  },
	  beforeUpload: function beforeUpload(file) {
	    this.recentUploadStatus = this.props.beforeUpload(file);
	    return this.recentUploadStatus;
	  },
	  handleRemove: function handleRemove(file) {
	    var fileList = this.removeFile(file);
	    if (fileList) {
	      this.onChange({
	        file: file,
	        fileList: fileList
	      });
	    }
	  },
	  handleManualRemove: function handleManualRemove(file) {
	    file.status = 'removed';
	    this.handleRemove(file);
	  },
	  onChange: function onChange(info) {
	    this.setState({
	      fileList: info.fileList
	    });
	    this.props.onChange(info);
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      type: 'select',
	      name: '',
	      multipart: false,
	      action: '',
	      data: {},
	      accept: '',
	      onChange: noop,
	      beforeUpload: T,
	      showUploadList: true,
	      listType: 'text', // or pictrue
	      className: ''
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('fileList' in nextProps) {
	      this.setState({
	        fileList: nextProps.fileList
	      });
	    }
	  },
	  onFileDrop: function onFileDrop(e) {
	    this.setState({
	      dragState: e.type
	    });
	  },
	  clearProgressTimer: function clearProgressTimer() {
	    clearInterval(this.progressTimer);
	  },
	  render: function render() {
	    var type = this.props.type || 'select';
	    var props = (0, _objectAssign2.default)({}, this.props, {
	      onStart: this.onStart,
	      onError: this.onError,
	      onProgress: this.onProgress,
	      onSuccess: this.onSuccess,
	      beforeUpload: this.beforeUpload
	    });
	    var uploadList = undefined;
	    if (this.props.showUploadList) {
	      uploadList = _react2.default.createElement(_uploadList2.default, { listType: this.props.listType,
	        items: this.state.fileList,
	        onRemove: this.handleManualRemove });
	    }
	    if (type === 'drag') {
	      var dragUploadingClass = this.state.fileList.some(function (file) {
	        return file.status === 'uploading';
	      }) ? prefixCls + '-drag-uploading' : '';
	      var draggingClass = this.state.dragState === 'dragover' ? prefixCls + '-drag-hover' : '';
	      return _react2.default.createElement(
	        'span',
	        { className: this.props.className },
	        _react2.default.createElement(
	          'div',
	          { className: prefixCls + ' ' + prefixCls + '-drag ' + dragUploadingClass + ' ' + draggingClass,
	            onDrop: this.onFileDrop,
	            onDragOver: this.onFileDrop,
	            onDragLeave: this.onFileDrop },
	          _react2.default.createElement(
	            _rcUpload2.default,
	            props,
	            _react2.default.createElement(
	              'div',
	              { className: prefixCls + '-drag-container' },
	              this.props.children
	            )
	          )
	        ),
	        uploadList
	      );
	    } else if (type === 'select') {
	      return _react2.default.createElement(
	        'span',
	        { className: this.props.className },
	        _react2.default.createElement(
	          'div',
	          { className: prefixCls + ' ' + prefixCls + '-select' },
	          _react2.default.createElement(
	            _rcUpload2.default,
	            props,
	            this.props.children
	          )
	        ),
	        uploadList
	      );
	    }
	  }
	});

	AntUpload.Dragger = _react2.default.createClass({
	  displayName: 'Dragger',
	  render: function render() {
	    return _react2.default.createElement(AntUpload, _extends({}, this.props, { type: 'drag', style: { height: this.props.height } }));
	  }
	});

	exports.default = AntUpload;
	module.exports = exports['default'];

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';

	module.exports = __webpack_require__(457);

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AjaxUploader = __webpack_require__(458);

	var _AjaxUploader2 = _interopRequireDefault(_AjaxUploader);

	var _IframeUploader = __webpack_require__(461);

	var _IframeUploader2 = _interopRequireDefault(_IframeUploader);

	function empty() {}

	var Upload = _react2['default'].createClass({
	  displayName: 'Upload',

	  propTypes: {
	    forceAjax: _react.PropTypes.bool,
	    action: _react.PropTypes.string,
	    name: _react.PropTypes.string,
	    multipart: _react.PropTypes.bool,
	    onError: _react.PropTypes.func,
	    onSuccess: _react.PropTypes.func,
	    onProgress: _react.PropTypes.func,
	    onStart: _react.PropTypes.func,
	    data: _react.PropTypes.object,
	    accept: _react.PropTypes.string,
	    multiple: _react.PropTypes.bool,
	    beforeUpload: _react.PropTypes.func,
	    withCredentials: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      data: {},
	      name: 'file',
	      forceAjax: false,
	      multipart: false,
	      onProgress: empty,
	      onStart: empty,
	      onError: empty,
	      onSuccess: empty,
	      multiple: false,
	      beforeUpload: null,
	      withCredentials: false
	    };
	  },

	  render: function render() {
	    var props = this.props;
	    // node 渲染根据 ua 强制设置 forceAjax 或者支持FormData的情况使用AjaxUpload
	    if (props.forceAjax || typeof FormData !== 'undefined') {
	      return _react2['default'].createElement(_AjaxUploader2['default'], props);
	    }

	    return _react2['default'].createElement(_IframeUploader2['default'], props);
	  }
	});

	exports['default'] = Upload;
	module.exports = exports['default'];

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _request = __webpack_require__(459);

	var _request2 = _interopRequireDefault(_request);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _uid = __webpack_require__(460);

	var _uid2 = _interopRequireDefault(_uid);

	var AjaxUploader = _react2['default'].createClass({
	  displayName: 'AjaxUploader',

	  propTypes: {
	    multiple: _react.PropTypes.bool,
	    onStart: _react.PropTypes.func,
	    data: _react.PropTypes.object,
	    beforeUpload: _react.PropTypes.func,
	    withCredentials: _react.PropTypes.bool
	  },

	  onChange: function onChange(e) {
	    var files = e.target.files;
	    this.uploadFiles(files);
	  },

	  onClick: function onClick() {
	    var el = this.refs.file;
	    if (!el) {
	      return;
	    }
	    el.click();
	    el.value = '';
	  },

	  onKeyDown: function onKeyDown(e) {
	    if (e.key === 'Enter') {
	      this.onClick();
	    }
	  },

	  onFileDrop: function onFileDrop(e) {
	    if (e.type === 'dragover') {
	      return e.preventDefault();
	    }

	    var files = e.dataTransfer.files;
	    this.uploadFiles(files);

	    e.preventDefault();
	  },

	  uploadFiles: function uploadFiles(files) {
	    var len = files.length;
	    if (len > 0) {
	      for (var i = 0; i < len; i++) {
	        var file = files.item(i);
	        file.uid = (0, _uid2['default'])();
	        this.upload(file);
	      }
	      if (this.props.multiple) {
	        this.props.onStart(Array.prototype.slice.call(files));
	      } else {
	        this.props.onStart(Array.prototype.slice.call(files)[0]);
	      }
	    }
	  },

	  upload: function upload(file) {
	    var _this = this;

	    var props = this.props;
	    if (!props.beforeUpload) {
	      return this.post(file);
	    }

	    var before = props.beforeUpload(file);
	    if (before && before.then) {
	      before.then(function () {
	        _this.post(file);
	      });
	    } else if (before !== false) {
	      this.post(file);
	    }
	  },

	  post: function post(file) {
	    var props = this.props;
	    var data = props.data;
	    if (typeof data === 'function') {
	      data = data();
	    }

	    (0, _request2['default'])({
	      action: props.action,
	      filename: props.name,
	      file: file,
	      data: data,
	      withCredentials: props.withCredentials,
	      onProgress: function onProgress(e) {
	        props.onProgress(e, file);
	      },
	      onSuccess: function onSuccess(ret) {
	        props.onSuccess(ret, file);
	      },
	      onError: function onError(err, ret) {
	        props.onError(err, ret, file);
	      }
	    });
	  },

	  render: function render() {
	    var hidden = { display: 'none' };
	    var props = this.props;
	    return _react2['default'].createElement(
	      'span',
	      {
	        onClick: this.onClick,
	        onKeyDown: this.onKeyDown,
	        onDrop: this.onFileDrop,
	        onDragOver: this.onFileDrop,
	        role: 'button',
	        tabIndex: '0'
	      },
	      _react2['default'].createElement('input', { type: 'file',
	        ref: 'file',
	        style: hidden,
	        accept: props.accept,
	        multiple: this.props.multiple,
	        onChange: this.onChange }),
	      props.children
	    );
	  }
	});

	exports['default'] = AjaxUploader;
	module.exports = exports['default'];

/***/ },

/***/ 459:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = upload;
	function getError(option, xhr) {
	  var msg = 'cannot post ' + option.action + ' ' + xhr.status + '\'';
	  var err = new Error(msg);
	  err.status = xhr.status;
	  err.method = 'post';
	  err.url = option.action;
	  return err;
	}

	function getBody(xhr) {
	  var text = xhr.responseText || xhr.response;
	  if (!text) {
	    return text;
	  }

	  try {
	    return JSON.parse(text);
	  } catch (e) {
	    return text;
	  }
	}

	function upload(option) {
	  if (typeof XMLHttpRequest === 'undefined') {
	    return;
	  }

	  var xhr = new XMLHttpRequest();
	  if (xhr.upload) {
	    xhr.upload.onprogress = function progress(e) {
	      if (e.total > 0) {
	        e.percent = e.loaded / e.total * 100;
	      }
	      option.onProgress(e);
	    };
	  }

	  var formData = new FormData();
	  formData.append(option.filename, option.file);
	  if (option.data) {
	    Object.keys(option.data).map(function (key) {
	      formData.append(key, option.data[key]);
	    });
	  }

	  xhr.onerror = function error(e) {
	    option.onError(e);
	  };

	  xhr.onload = function onload() {
	    if (xhr.status !== 200) {
	      return option.onError(getError(option, xhr), getBody(xhr));
	    }

	    option.onSuccess(getBody(xhr));
	  };

	  if (option.withCredentials && 'withCredentials' in xhr) {
	    xhr.withCredentials = true;
	  }

	  xhr.open('post', option.action, true);
	  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	  xhr.send(formData);
	}

	module.exports = exports['default'];

/***/ },

/***/ 460:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = uid;
	var now = +new Date();
	var index = 0;

	function uid() {
	  return 'rc-upload-' + now + '-' + ++index;
	}

	module.exports = exports['default'];

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _uid = __webpack_require__(460);

	var _uid2 = _interopRequireDefault(_uid);

	var _warning = __webpack_require__(191);

	var _warning2 = _interopRequireDefault(_warning);

	var iframeStyle = {
	  position: 'absolute',
	  top: 0,
	  opacity: 0,
	  filter: 'alpha(opacity=0)',
	  left: 0,
	  zIndex: 9999
	};
	var IframeUploader = _react2['default'].createClass({
	  displayName: 'IframeUploader',

	  propTypes: {
	    onStart: _react.PropTypes.func,
	    multiple: _react.PropTypes.bool,
	    children: _react.PropTypes.any,
	    data: _react.PropTypes.object,
	    action: _react.PropTypes.string,
	    name: _react.PropTypes.string
	  },

	  componentDidMount: function componentDidMount() {
	    this.updateIframeWH();
	    this.initIframe();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this.updateIframeWH();
	  },

	  onLoad: function onLoad() {
	    if (!this.loading) {
	      return;
	    }
	    var props = this.props;
	    var response = undefined;
	    var eventFile = this.file;
	    try {
	      var doc = this.getIframeDocument();
	      var script = doc.getElementsByTagName('script')[0];
	      if (script && script.parentNode === doc.body) {
	        doc.body.removeChild(script);
	      }
	      response = doc.body.innerHTML;
	      props.onSuccess(response, eventFile);
	    } catch (err) {
	      (0, _warning2['default'])(false, 'cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload');
	      response = 'cross-domain';
	      props.onError(err, null, eventFile);
	    }
	    this.enableIframe();
	    this.initIframe();
	  },

	  onChange: function onChange() {
	    var target = this.getFormInputNode();
	    // ie8/9 don't support FileList Object
	    // http://stackoverflow.com/questions/12830058/ie8-input-type-file-get-files
	    var file = this.file = {
	      uid: (0, _uid2['default'])(),
	      name: target.value
	    };
	    this.props.onStart(this.getFileForMultiple(file));
	    var formNode = this.getFormNode();
	    var dataSpan = this.getFormDataNode();
	    var data = this.props.data;
	    if (typeof data === 'function') {
	      data = data();
	    }
	    var inputs = [];
	    for (var key in data) {
	      if (data.hasOwnProperty(key)) {
	        inputs.push('<input name="' + key + '" value="' + data[key] + '"/>');
	      }
	    }
	    dataSpan.innerHTML = inputs.join('');
	    formNode.submit();
	    dataSpan.innerHTML = '';
	    this.disabledIframe();
	  },

	  getIframeNode: function getIframeNode() {
	    return this.refs.iframe;
	  },

	  getIframeDocument: function getIframeDocument() {
	    return this.getIframeNode().contentDocument;
	  },

	  getFormNode: function getFormNode() {
	    return this.getIframeDocument().getElementById('form');
	  },

	  getFormInputNode: function getFormInputNode() {
	    return this.getIframeDocument().getElementById('input');
	  },

	  getFormDataNode: function getFormDataNode() {
	    return this.getIframeDocument().getElementById('data');
	  },

	  getFileForMultiple: function getFileForMultiple(file) {
	    return this.props.multiple ? [file] : file;
	  },

	  getIframeHTML: function getIframeHTML(domain) {
	    var domainScript = '';
	    var domainInput = '';
	    if (domain) {
	      domainScript = '<script>document.domain="' + domain + '";</script>';
	      domainInput = '<input name="_documentDomain" value="' + domain + '" />';
	    }
	    return '\n    <!DOCTYPE html>\n    <html>\n    <head>\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <style>\n    body,html {padding:0;margin:0;border:0;overflow:hidden;}\n    </style>\n    ' + domainScript + '\n    </head>\n    <body>\n    <form method="post"\n    encType="multipart/form-data"\n    action="' + this.props.action + '" id="form" style="display:block;height:9999px;position:relative;overflow:hidden;">\n    <input id="input" type="file"\n     name="' + this.props.name + '"\n     style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>\n    ' + domainInput + '\n    <span id="data"></span>\n    </form>\n    </body>\n    </html>\n    ';
	  },

	  initIframeSrc: function initIframeSrc() {
	    if (this.domain) {
	      this.getIframeNode().src = 'javascript:void((function(){\n        var d = document;\n        d.open();\n        d.domain=\'' + this.domain + '\';\n        d.write(\'\');\n        d.close();\n      })())';
	    }
	  },

	  initIframe: function initIframe() {
	    var iframeNode = this.getIframeNode();
	    var win = iframeNode.contentWindow;
	    var doc = undefined;
	    this.domain = this.domain || '';
	    this.initIframeSrc();
	    try {
	      doc = win.document;
	    } catch (e) {
	      this.domain = document.domain;
	      this.initIframeSrc();
	      win = iframeNode.contentWindow;
	      doc = win.document;
	    }
	    doc.open('text/html', 'replace');
	    doc.write(this.getIframeHTML(this.domain));
	    doc.close();
	    this.getFormInputNode().onchange = this.onChange;
	  },

	  enableIframe: function enableIframe() {
	    this.loading = false;
	    this.getIframeNode().style.display = '';
	  },

	  disabledIframe: function disabledIframe() {
	    this.loading = true;
	    this.getIframeNode().style.display = 'none';
	  },

	  updateIframeWH: function updateIframeWH() {
	    var rootNode = _reactDom2['default'].findDOMNode(this);
	    var iframeNode = this.getIframeNode();
	    iframeNode.style.height = rootNode.offsetHeight + 'px';
	    iframeNode.style.width = rootNode.offsetWidth + 'px';
	  },

	  render: function render() {
	    return _react2['default'].createElement(
	      'span',
	      { style: { position: 'relative', zIndex: 0 } },
	      _react2['default'].createElement('iframe', { ref: 'iframe',
	        onLoad: this.onLoad,
	        style: iframeStyle }),
	      this.props.children
	    );
	  }
	});

	exports['default'] = IframeUploader;
	module.exports = exports['default'];

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcAnimate = __webpack_require__(437);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _icon = __webpack_require__(450);

	var _icon2 = _interopRequireDefault(_icon);

	var _progress = __webpack_require__(463);

	var _classnames = __webpack_require__(195);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var prefixCls = 'ant-upload';

	// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
	var previewFile = function previewFile(file, callback) {
	  var reader = new FileReader();
	  reader.onloadend = function () {
	    callback(reader.result);
	  };
	  reader.readAsDataURL(file);
	};

	exports.default = _react2.default.createClass({
	  displayName: 'uploadList',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      listType: 'text', // or picture
	      items: [],
	      progressAttr: {
	        strokeWidth: 3,
	        showInfo: false
	      }
	    };
	  },
	  handleClose: function handleClose(file) {
	    this.props.onRemove(file);
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    var _this = this;

	    if (this.props.listType !== 'picture') {
	      return;
	    }
	    this.props.items.forEach(function (file) {
	      if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !file.originFileObj instanceof File || file.thumbUrl !== undefined) {
	        return;
	      }
	      file.thumbUrl = '';
	      previewFile(file.originFileObj, function (previewDataUrl) {
	        file.thumbUrl = previewDataUrl;
	        _this.forceUpdate();
	      });
	    });
	  },
	  render: function render() {
	    var _this2 = this,
	        _classNames2;

	    var list = this.props.items.map(function (file) {
	      var _classNames;

	      var progress = undefined;
	      var icon = _react2.default.createElement(_icon2.default, { type: 'paper-clip' });

	      if (_this2.props.listType === 'picture') {
	        icon = file.status === 'uploading' || !file.thumbUrl && !file.url ? _react2.default.createElement(_icon2.default, { className: prefixCls + '-list-item-thumbnail', type: 'picture' }) : _react2.default.createElement(
	          'a',
	          { className: prefixCls + '-list-item-thumbnail',
	            href: file.url,
	            target: '_blank' },
	          _react2.default.createElement('img', { src: file.thumbUrl || file.url, alt: file.name })
	        );
	      }
	      if (file.status === 'uploading') {
	        progress = _react2.default.createElement(
	          'div',
	          { className: prefixCls + '-list-item-progress' },
	          _react2.default.createElement(_progress.Line, _extends({}, _this2.props.progressAttr, { percent: file.percent }))
	        );
	      }
	      var infoUploadingClass = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-list-item', true), _defineProperty(_classNames, prefixCls + '-list-item-' + file.status, true), _classNames));
	      return _react2.default.createElement(
	        'div',
	        { className: infoUploadingClass, key: file.uid },
	        _react2.default.createElement(
	          'div',
	          { className: prefixCls + '-list-item-info' },
	          icon,
	          _react2.default.createElement(
	            'span',
	            { className: prefixCls + '-list-item-name' },
	            file.name
	          ),
	          _react2.default.createElement(_icon2.default, { type: 'cross', onClick: _this2.handleClose.bind(_this2, file) })
	        ),
	        progress
	      );
	    });
	    var listClassNames = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-list', true), _defineProperty(_classNames2, prefixCls + '-list-' + this.props.listType, true), _classNames2));
	    return _react2.default.createElement(
	      'div',
	      { className: listClassNames },
	      _react2.default.createElement(
	        _rcAnimate2.default,
	        { transitionName: prefixCls + '-margin-top' },
	        list
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rcProgress = __webpack_require__(464);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(432);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _icon = __webpack_require__(450);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ant-progress';

	var statusColorMap = {
	  'normal': '#2db7f5',
	  'exception': '#ff6600',
	  'success': '#87d068'
	};

	var Line = _react2.default.createClass({
	  displayName: 'Line',

	  propTypes: {
	    status: _react2.default.PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
	    showInfo: _react2.default.PropTypes.bool,
	    percent: _react2.default.PropTypes.number,
	    strokeWidth: _react2.default.PropTypes.number
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      percent: 0,
	      strokeWidth: 10,
	      status: 'normal', // exception active
	      format: '${percent}%',
	      showInfo: true
	    };
	  },
	  render: function render() {
	    var props = (0, _objectAssign2.default)({}, this.props);

	    if (parseInt(props.percent, 10) === 100) {
	      props.status = 'success';
	    }

	    var progressInfo = undefined;
	    var fullCls = '';
	    var text = typeof props.format === 'string' ? props.format.replace('${percent}', props.percent) : props.format;

	    if (props.showInfo === true) {
	      if (props.status === 'exception') {
	        progressInfo = _react2.default.createElement(
	          'span',
	          { className: prefixCls + '-line-text' },
	          text
	        );
	      } else if (props.status === 'success') {
	        progressInfo = _react2.default.createElement(
	          'span',
	          { className: prefixCls + '-line-text' },
	          _react2.default.createElement(_icon2.default, { type: 'check' })
	        );
	      } else {
	        progressInfo = _react2.default.createElement(
	          'span',
	          { className: prefixCls + '-line-text' },
	          text
	        );
	      }
	    } else {
	      fullCls = ' ' + prefixCls + '-line-wrap-full';
	    }
	    var percentStyle = {
	      width: props.percent + '%',
	      height: props.strokeWidth
	    };

	    return _react2.default.createElement(
	      'div',
	      { className: prefixCls + '-line-wrap clearfix status-' + props.status + fullCls },
	      progressInfo,
	      _react2.default.createElement(
	        'div',
	        { className: prefixCls + '-line-outer' },
	        _react2.default.createElement(
	          'div',
	          { className: prefixCls + '-line-inner' },
	          _react2.default.createElement('div', { className: prefixCls + '-line-bg', style: percentStyle })
	        )
	      )
	    );
	  }
	});

	var Circle = _react2.default.createClass({
	  displayName: 'Circle',

	  propTypes: {
	    status: _react2.default.PropTypes.oneOf(['normal', 'exception', 'success']),
	    percent: _react2.default.PropTypes.number,
	    strokeWidth: _react2.default.PropTypes.number,
	    width: _react2.default.PropTypes.number
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      width: 132,
	      percent: 0,
	      strokeWidth: 6,
	      format: '${percent}%',
	      status: 'normal' };
	  },
	  // exception
	  render: function render() {
	    var props = (0, _objectAssign2.default)({}, this.props);

	    if (parseInt(props.percent, 10) === 100) {
	      props.status = 'success';
	    }

	    var style = {
	      'width': props.width,
	      'height': props.width,
	      'fontSize': props.width * 0.16 + 6
	    };
	    var progressInfo = undefined;
	    var text = typeof props.format === 'string' ? props.format.replace('${percent}', props.percent) : props.format;
	    if (props.status === 'exception') {
	      progressInfo = _react2.default.createElement(
	        'span',
	        { className: prefixCls + '-circle-text' },
	        text
	      );
	    } else if (props.status === 'success') {
	      progressInfo = _react2.default.createElement(
	        'span',
	        { className: prefixCls + '-circle-text' },
	        _react2.default.createElement(_icon2.default, { type: 'check' })
	      );
	    } else {
	      progressInfo = _react2.default.createElement(
	        'span',
	        { className: prefixCls + '-circle-text' },
	        text
	      );
	    }

	    return _react2.default.createElement(
	      'div',
	      { className: prefixCls + '-circle-wrap status-' + props.status },
	      _react2.default.createElement(
	        'div',
	        { className: prefixCls + '-circle-inner', style: style },
	        _react2.default.createElement(_rcProgress.Circle, { percent: props.percent, strokeWidth: props.strokeWidth,
	          strokeColor: statusColorMap[props.status], trailColor: '#e9e9e9' }),
	        progressInfo
	      )
	    );
	  }
	});

	exports.default = {
	  Line: Line,
	  Circle: Circle
	};
	module.exports = exports['default'];

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(465);

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign = __webpack_require__(432);
	var React = __webpack_require__(1);
	var defaultProps = {
	  strokeWidth: 1,
	  strokeColor: '#3FC7FA',
	  trailWidth: 1,
	  trailColor: '#D9D9D9'
	};

	var Line = React.createClass({
	  displayName: 'Line',

	  render: function render() {
	    var props = assign({}, this.props);
	    var pathStyle = {
	      'strokeDasharray': '100px, 100px',
	      'strokeDashoffset': 100 - props.percent + 'px',
	      'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s linear'
	    };

	    ['strokeWidth', 'strokeColor', 'trailWidth', 'trailColor'].forEach(function (item) {
	      if (item === 'trailWidth' && !props.trailWidth && props.strokeWidth) {
	        props.trailWidth = props.strokeWidth;
	        return;
	      }
	      if (item === 'strokeWidth' && props.strokeWidth && (!parseFloat(props.strokeWidth) || parseFloat(props.strokeWidth) > 100 || parseFloat(props.strokeWidth) < 0)) {
	        props[item] = defaultProps[item];
	        return;
	      }
	      if (!props[item]) {
	        props[item] = defaultProps[item];
	      }
	    });

	    var strokeWidth = props.strokeWidth;
	    var center = strokeWidth / 2;
	    var right = 100 - strokeWidth / 2;
	    var pathString = 'M ' + center + ',' + center + ' L ' + right + ',' + center;
	    var viewBoxString = '0 0 100 ' + strokeWidth;

	    return React.createElement(
	      'svg',
	      { className: "rc-progress-line", viewBox: viewBoxString, preserveAspectRatio: "none" },
	      React.createElement('path', { className: "rc-progress-line-trail", d: pathString, strokeLinecap: "round",
	        stroke: props.trailColor, strokeWidth: props.trailWidth, fillOpacity: "0" }),
	      React.createElement('path', { className: "rc-progress-line-path", d: pathString, strokeLinecap: "round",
	        stroke: props.strokeColor, strokeWidth: props.strokeWidth, fillOpacity: "0", style: pathStyle })
	    );
	  }
	});

	var Circle = React.createClass({
	  displayName: 'Circle',

	  render: function render() {
	    var props = assign({}, this.props);
	    var strokeWidth = props.strokeWidth;
	    var radius = 50 - strokeWidth / 2;
	    var pathString = 'M 50,50 m 0,-' + radius + '\n     a ' + radius + ',' + radius + ' 0 1 1 0,' + 2 * radius + '\n     a ' + radius + ',' + radius + ' 0 1 1 0,-' + 2 * radius;
	    var len = Math.PI * 2 * radius;
	    var pathStyle = {
	      'strokeDasharray': len + 'px ' + len + 'px',
	      'strokeDashoffset': (100 - props.percent) / 100 * len + 'px',
	      'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
	    };
	    ['strokeWidth', 'strokeColor', 'trailWidth', 'trailColor'].forEach(function (item) {
	      if (item === 'trailWidth' && !props.trailWidth && props.strokeWidth) {
	        props.trailWidth = props.strokeWidth;
	        return;
	      }
	      if (!props[item]) {
	        props[item] = defaultProps[item];
	      }
	    });

	    return React.createElement(
	      'svg',
	      { className: 'rc-progress-circle', viewBox: '0 0 100 100' },
	      React.createElement('path', { className: 'rc-progress-circle-trail', d: pathString, stroke: props.trailColor,
	        strokeWidth: props.trailWidth, fillOpacity: '0' }),
	      React.createElement('path', { className: 'rc-progress-circle-path', d: pathString, strokeLinecap: 'round',
	        stroke: props.strokeColor, strokeWidth: props.strokeWidth, fillOpacity: '0', style: pathStyle })
	    );
	  }
	});

	module.exports = {
	  Line: Line,
	  Circle: Circle
	};

/***/ },

/***/ 466:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getFileItem;
	function getFileItem(file, fileList) {
	  var matchWay = !file.uid ? 'byName' : 'byUid';
	  var target = fileList.filter(function (item) {
	    if (matchWay === 'byName') {
	      return item.name === file.name;
	    } else {
	      return item.uid === file.uid;
	    }
	  })[0];
	  return target;
	}
	module.exports = exports['default'];

/***/ }

});