webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _header = __webpack_require__(403);

	var _map_container = __webpack_require__(510);

	var _map_container2 = _interopRequireDefault(_map_container);

	var _preloader = __webpack_require__(561);

	var _preloader2 = _interopRequireDefault(_preloader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = __webpack_require__(469);
	var ReactDOM = __webpack_require__(470);


	var props = _preloader2.default.getProps('#map-editor');

	ReactDOM.render(React.createElement(_header.DrawerHeader, props), document.getElementById('header'));

	ReactDOM.render(React.createElement(_map_container2.default, props), document.getElementById('drawer'));

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

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _map = __webpack_require__(511);

	var _map2 = _interopRequireDefault(_map);

	var _tool_bar = __webpack_require__(517);

	var _tool_bar2 = _interopRequireDefault(_tool_bar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

	var MapContainer = function (_React$Component) {
	    _inherits(MapContainer, _React$Component);

	    function MapContainer() {
	        _classCallCheck(this, MapContainer);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MapContainer).apply(this, arguments));
	    }

	    _createClass(MapContainer, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_tool_bar2.default, { ref: 'toolbar', parent: this }),
	                React.createElement(_map2.default, { ref: 'map', center: this.props.center, id: this.props.id.$oid, extent: this.props.extent, source: this.props.source, meta: this.props.meta, title: this.props.title })
	            );
	        }
	    }]);

	    return MapContainer;
	}(React.Component);

	exports.default = MapContainer;

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _default = __webpack_require__(512);

	var _default2 = _interopRequireDefault(_default);

	var _MapHistory = __webpack_require__(513);

	var _MapHistory2 = _interopRequireDefault(_MapHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

	var Map = function (_React$Component) {
	    _inherits(Map, _React$Component);

	    function Map() {
	        _classCallCheck(this, Map);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Map).call(this));

	        _this.state = { map: null };

	        _this.format = new ol.format.KML();

	        return _this;
	    }

	    _createClass(Map, [{
	        key: 'registerKeyBoardEvent',
	        value: function registerKeyBoardEvent() {
	            var _this2 = this;

	            document.onkeydown = function (e) {
	                var which = null;
	                if (window.event) {
	                    which = e.keyCode;
	                } else {
	                    which = w.which;
	                }
	                if (which == 27) {
	                    //ESC
	                    var interactions = _this2.map.getInteractions();
	                    interactions.forEach(function (interaction) {
	                        if (interaction instanceof ol.interaction.Draw) {
	                            if (interaction.get('type') != 'Point') {
	                                interaction.removeLastPoint();
	                            }
	                        }
	                    });
	                } else if (which == 90 && e.ctrlKey) {
	                    //ctrl + z
	                    var state = _this2.history.toPrevState();
	                    if (state && _this2.editLayer) {
	                        if (state.feature) {
	                            _this2.editLayer.getSource().removeFeature(state.feature);
	                        } else if (state.startfeatures && state.endfeatures) {
	                            state.endfeatures.forEach(function (feature) {
	                                _this2.editLayer.getSource().removeFeature(feature);
	                            });
	                            _this2.editLayer.getSource().addFeatures(state.startfeatures.getArray());
	                            /* state.endfeatures.forEach((feature, index)=>{
	                                 console.log('xxx');
	                                 let clonef = feature.clone();
	                                 state.endfeatures.setAt(index, clonef);
	                             });*/
	                            _this2.selectedFeatures.clear();
	                        }
	                    }
	                } else if (which == 88 && e.ctrlKey) {
	                    //ctrl + x
	                    var _state = _this2.history.toNextState();
	                    if (_state && _this2.editLayer) {
	                        if (_state.feature) {
	                            _this2.editLayer.getSource().addFeature(_state.feature);
	                        } else if (_state.startfeatures && _state.endfeatures) {
	                            _state.startfeatures.forEach(function (feature) {
	                                _this2.editLayer.getSource().removeFeature(feature);
	                            });
	                            _this2.editLayer.getSource().addFeatures(_state.endfeatures.getArray());
	                            _this2.selectedFeatures.clear();
	                        }
	                    }
	                }
	            };
	            this.int = setInterval(this.history.autoSave.bind(this.history), 30000);
	            window.onbeforeunload = function (e) {
	                _this2.history.autoSave();
	            };
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearInterval(this.int);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            this.map = new ol.Map({
	                target: this.refs.mapDoc,
	                controls: ol.control.defaults({
	                    attributionOptions: {
	                        collapsible: false
	                    }
	                }),
	                view: new ol.View({
	                    center: this.props.center,
	                    projection: 'EPSG:3857',
	                    zoom: 4
	                })
	            });
	            var proj = proj4.defs(this.props.meta.proj);
	            var defaultProj = 'EPSG:3857';
	            if (proj == undefined && this.props.meta.proj !== 'unknown') {
	                proj4.defs(this.props.title, this.props.meta.proj);
	                defaultProj = this.props.title;
	            }
	            this.format = new ol.format.GeoJSON({
	                defaultDataProjection: defaultProj
	            });
	            this.vectorSource = new ol.source.Vector({
	                url: this.props.source,
	                format: this.format,
	                wrapX: false
	            });
	            this.vectorLayer = new ol.layer.Vector({
	                name: 'Default',
	                source: this.vectorSource,
	                style: _default2.default
	            });
	            this.editLayer = null;
	            this.contours = null;
	            this.select = new ol.interaction.Select();
	            this.map.addInteraction(this.select);
	            this.select.setActive(false);

	            this.selectedFeatures = this.select.getFeatures();

	            // a DragBox interaction used to select features by drawing boxes
	            this.dragBox = new ol.interaction.DragBox({
	                condition: ol.events.condition.platformModifierKeyOnly
	            });

	            this.modify = new ol.interaction.Modify({
	                features: this.select.getFeatures()
	            });

	            this.modify.on('modifyend', function (evt) {
	                _this3.history.onModifyEnd(evt);
	            });
	            this.modify.on('modifystart', function (evt) {
	                _this3.history.onModifyStart(evt);
	            });

	            this.map.addInteraction(this.dragBox);
	            this.map.addInteraction(this.modify);
	            this.history = new _MapHistory2.default(this.map, this.props.id);

	            this.dragBox.on('boxend', function () {
	                if (_this3.editLayer == null) {
	                    return;
	                }
	                var extent = _this3.dragBox.getGeometry().getExtent();
	                _this3.editLayer.getSource().forEachFeatureIntersectingExtent(extent, function (feature) {
	                    _this3.selectedFeatures.push(feature);
	                });
	            });
	            this.dragBox.on('boxstart', function () {
	                _this3.selectedFeatures.clear();
	            });

	            this.map.on('dblclick', function () {
	                _this3.selectedFeatures.clear();
	            });
	            var projExtent = ol.proj.transformExtent(this.props.extent, defaultProj, 'EPSG:3857');
	            this.map.addLayer(this.vectorLayer);
	            this.map.addControl(new ol.control.ScaleLine());
	            this.map.addControl(new ol.control.MousePosition());
	            this.map.getView().fit(projExtent, this.map.getSize());
	            this.map.render();
	            this.setState({ map: this.map });
	            this.registerKeyBoardEvent();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('div', { className: 'map-editor-container', ref: 'mapDoc' });
	        }
	    }]);

	    return Map;
	}(React.Component);

	exports.default = Map;

/***/ },

/***/ 512:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var styles = [new ol.style.Style({
	    fill: new ol.style.Fill({
	        color: 'rgba(255,255,255,0.4)'
	    }),
	    stroke: new ol.style.Stroke({
	        color: 'rgba(0,0,0,1)',
	        width: 1
	    }),
	    image: new ol.style.Circle({
	        fill: new ol.style.Fill({ color: 'rgba(0,0,0,1)' }),
	        radius: 2
	    })

	})];

	exports.default = styles;

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _message = __webpack_require__(451);

	var _message2 = _interopRequireDefault(_message);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _queue = __webpack_require__(514);

	var _queue2 = _interopRequireDefault(_queue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *
	 * @authors 祝志颖 (c0de4ac@baicizhan.com)
	 * @date    2016-03-28 15:12
	 * @version 1.0.0
	 */

	var MapHistory = function () {
	    function MapHistory(map, id) {
	        var historySize = arguments.length <= 2 || arguments[2] === undefined ? 16 : arguments[2];

	        _classCallCheck(this, MapHistory);

	        this.prevStates = new _queue2.default(historySize);
	        this.nextStates = new _queue2.default(historySize);
	        this.beforeStates = new _queue2.default(historySize);
	        this.endStates = new _queue2.default(historySize);
	        this.maxSize = historySize;
	        this.map = map;
	        this.id = id;
	    }

	    _createClass(MapHistory, [{
	        key: 'clear',
	        value: function clear() {
	            this.nextStates.clear();
	            this.prevStates.clear();
	        }
	    }, {
	        key: 'autoSave',
	        value: function autoSave() {
	            var hide = _message2.default.info('正在自动保存文件!');
	            var layers = this.map.getLayers();
	            var featureColection = [];
	            layers.forEach(function (layer) {
	                var source = layer.getSource();
	                source.forEachFeature(function (feature) {
	                    featureColection.push(feature);
	                });
	            });
	            var json_feature = new ol.format.GeoJSON({
	                defaultDataProjection: 'EPSG:3857'
	            }).writeFeatures(featureColection);
	            $.post('/karte/auto_save', { id: this.id, json_data: json_feature }, function (result) {
	                if (result.msg == 'success') {
	                    hide();
	                    _message2.default.info('自动保存文件成功!');
	                } else {
	                    hide();
	                    _message2.default.info('自动保存文件失败!');
	                }
	            }).error(function () {
	                hide();
	                _message2.default.info('自动保存文件失败!');
	            });
	        }
	    }, {
	        key: 'onDrawEnd',
	        value: function onDrawEnd(evt) {
	            var state = {
	                type: evt.type,
	                target: evt.target,
	                feature: evt.feature
	            };
	            console.log(state);
	            this.prevStates.pushBack(state);
	            this.nextStates.clear();
	        }
	    }, {
	        key: 'onModifyStart',
	        value: function onModifyStart(evt) {
	            var features = new ol.Collection();
	            evt.features.forEach(function (feature) {
	                features.push(feature.clone());
	            });
	            var state = {
	                type: evt.type,
	                target: evt.target,
	                startfeatures: features
	            };
	            if (this.hasPrevState()) {
	                var pstate = this.prevStates.popBack();
	                if (pstate.type == 'modifyend') {
	                    pstate.endfeatures = features;
	                    this.prevStates.pushBack(pstate);
	                }
	            }
	            this.prevStates.pushBack(state);
	            this.nextStates.clear();
	        }
	    }, {
	        key: 'onModifyEnd',
	        value: function onModifyEnd(evt) {
	            var state = void 0;
	            var features = new ol.Collection();
	            evt.features.forEach(function (feature) {
	                features.push(feature);
	            });
	            if (this.hasPrevState()) {
	                state = this.prevStates.popBack();
	                state.type = evt.type;
	                state.endfeatures = features;
	                this.prevStates.pushBack(state);
	                this.nextStates.clear();
	            } else {
	                console.log('not find start state');
	                return;
	            }
	        }
	    }, {
	        key: 'hasPrevState',
	        value: function hasPrevState() {
	            return this.prevStates.size() > 0;
	        }
	    }, {
	        key: 'hasNextState',
	        value: function hasNextState() {
	            return this.nextStates.size() > 0;
	        }
	    }, {
	        key: 'toPrevState',
	        value: function toPrevState() {
	            if (this.hasPrevState()) {
	                var state = this.prevStates.popBack();
	                this.nextStates.pushBack(state);
	                return state;
	            }
	        }
	    }, {
	        key: 'toNextState',
	        value: function toNextState() {
	            if (this.hasNextState()) {
	                var state = this.nextStates.popBack();
	                this.prevStates.pushBack(state);
	                return state;
	            }
	        }
	    }]);

	    return MapHistory;
	}();

	exports.default = MapHistory;

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _linkedlist = __webpack_require__(515);

	var _linkedlist2 = _interopRequireDefault(_linkedlist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DeQueue = function () {
	    function DeQueue() {
	        var cap = arguments.length <= 0 || arguments[0] === undefined ? 128 : arguments[0];

	        _classCallCheck(this, DeQueue);

	        this.cap = cap;
	        this.list = new _linkedlist2.default();
	    }

	    _createClass(DeQueue, [{
	        key: 'overSize',
	        value: function overSize() {
	            return this.size() >= this.cap;
	        }
	    }, {
	        key: 'pushBack',
	        value: function pushBack(element) {
	            if (this.overSize()) {
	                this.popFont();
	            }
	            this.list.add(element);
	        }
	    }, {
	        key: 'pushFont',
	        value: function pushFont(element) {
	            if (this.overSize()) {
	                this.popBack();
	            }
	            this.list.add(element, 0);
	        }
	    }, {
	        key: 'popBack',
	        value: function popBack() {
	            var elem;
	            if (this.list.size() !== 0) {
	                elem = this.list.last();
	                this.list.removeAtIndex(this.size() - 1);
	                return elem;
	            }
	            return null;
	        }
	    }, {
	        key: 'popFont',
	        value: function popFont() {
	            var elem;
	            if (this.list.size() !== 0) {
	                elem = this.list.first();
	                this.list.removeAtIndex(0);
	                return elem;
	            }
	            return null;
	        }
	    }, {
	        key: 'peek',
	        value: function peek() {
	            if (this.list.size() !== 0) {
	                return this.list.first();
	            }
	            return null;
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.list.clear();
	        }
	    }, {
	        key: 'include',
	        value: function include(elem, equalsFunc) {
	            return this.list.include(elem, equalsFunc);
	        }
	    }, {
	        key: 'size',
	        value: function size() {
	            return this.list.size();
	        }
	    }]);

	    return DeQueue;
	}();

	exports.default = DeQueue;

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _util = __webpack_require__(516);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LinkedList = function () {
	    function LinkedList() {
	        _classCallCheck(this, LinkedList);

	        this.nElement = 0;
	        this.firstNode = null;
	        this.lastNode = null;
	    }

	    _createClass(LinkedList, [{
	        key: 'add',
	        value: function add(item, index) {
	            var newNode = void 0,
	                prev = void 0;
	            if (_util2.default.isUnfefined(index)) {
	                index = this.nElement;
	            }

	            if (index < 0 || index > this.nElement || _util2.default.isUnfefined(item)) {
	                return false;
	            }
	            newNode = {
	                element: item,
	                next: null
	            };

	            if (this.nElement === 0) {
	                this.firstNode = newNode;
	                this.lastNode = newNode;
	            } else if (index === this.nElement) {
	                this.lastNode.next = newNode;
	                this.lastNode = newNode;
	            } else if (index === 0) {
	                newNode.next = this.firstNode;
	                this.firstNode = newNode;
	            } else {
	                prev = this.nodeAtIndex(index - 1);
	                newNode.next = prev.next;
	                prev.next = newNode;
	            }
	            this.nElement += 1;
	            return true;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(element, equalFunc) {
	            var eqaulsF = equalFunc || _util2.default.defaultEqual;
	            var currentNode = this.firstNode;
	            var prevNode = null;

	            if (this.nElement < 1 || _util2.default.isUnfefined(element)) {
	                return false;
	            }

	            while (currentNode !== null) {
	                if (eqaulsF(currentNode.element, element)) {
	                    if (currentNode === this.firstNode) {
	                        this.firstNode = this.firstNode.next;
	                        if (currentNode === this.lastNode) {
	                            this.lastNode = null;
	                        }
	                    } else if (currentNode === this.lastNode) {
	                        this.lastNode = prevNode;
	                        prevNode.next = currentNode.next;
	                        currentNode.next = null;
	                    } else {
	                        prevNode.next = currentNode.next;
	                        currentNode.next = null;
	                    }
	                    this.nElement -= 1;
	                    return true;
	                }
	                prevNode = currentNode;
	                currentNode = currentNode.next;
	            }
	            return false;
	        }
	    }, {
	        key: 'removeAtIndex',
	        value: function removeAtIndex(index) {
	            var elem = void 0,
	                prev = void 0;
	            if (index < 0 || index >= this.nElement) {
	                return null;
	            }
	            if (this.nElement === 1) {
	                elem = this.firstNode.element;
	                this.firstNode = null;
	                this.lastNode = null;
	            } else {
	                prev = this.nodeAtIndex(index - 1);
	                if (prev === null) {
	                    elem = this.firstNode.element;
	                    this.firstNode = this.firstNode.next;
	                } else if (prev.next === this.lastNode) {
	                    elem = this.lastNode.element;
	                    this.lastNode = prev;
	                } else {
	                    elem = prev.next.element;
	                    prev.next = prev.next.next;
	                }
	            }
	            this.nElement -= 1;
	            return elem;
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.nElement = 0;
	            this.firstNode = null;
	            this.lastNode = null;
	        }
	    }, {
	        key: 'nodeAtIndex',
	        value: function nodeAtIndex(index) {
	            var node = void 0,
	                i = void 0;
	            if (index < 0 || index >= this.nElement) {
	                return null;
	            }
	            if (index === this.nElement - 1) {
	                return this.lastNode;
	            }
	            node = this.firstNode;
	            for (i = 0; i < index; i++) {
	                node = node.next;
	            }
	            return node;
	        }
	    }, {
	        key: 'elementAtIndex',
	        value: function elementAtIndex(index) {
	            var node = this.nodeAtIndex(index);
	            if (node === null) {
	                return null;
	            }
	            return node.element;
	        }
	    }, {
	        key: 'include',
	        value: function include(element, equalFunc) {
	            return this.indexOf(element, equalFunc) >= 0;
	        }
	    }, {
	        key: 'indexOf',
	        value: function indexOf(element, equalFunc) {
	            var eqaulsF = equalFunc || _util2.default.defaultEqual;
	            var currentNode = this.firstNode;
	            var index = 0;
	            if (_util2.default.isUnfefined(element)) {
	                return -1;
	            }
	            while (currentNode !== null) {
	                if (eqaulsF(currentNode.element, element)) {
	                    return index;
	                }
	                index += 1;
	                currentNode = currentNode.next;
	            }
	            return -1;
	        }
	    }, {
	        key: 'forEach',
	        value: function forEach(callBack) {
	            var currentNode = this.firstNode;
	            while (currentNode !== null) {
	                if (callBack(currentNode.element) === false) {
	                    break;
	                }
	                currentNode = currentNode.next;
	            }
	        }
	    }, {
	        key: 'first',
	        value: function first() {
	            if (this.firstNode !== null) {
	                return this.firstNode.element;
	            }
	            return null;
	        }
	    }, {
	        key: 'last',
	        value: function last() {
	            if (this.lastNode !== null) {
	                return this.lastNode.element;
	            }
	            return null;
	        }
	    }, {
	        key: 'size',
	        value: function size() {
	            return this.nElement;
	        }
	    }]);

	    return LinkedList;
	}();

	exports.default = LinkedList;

/***/ },

/***/ 516:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Util = function () {
	    function Util() {
	        _classCallCheck(this, Util);
	    }

	    _createClass(Util, null, [{
	        key: 'defaultEqual',
	        value: function defaultEqual(a, b) {
	            return a === b;
	        }
	    }, {
	        key: 'defaultCompare',
	        value: function defaultCompare(a, b) {
	            if (a < b) {
	                return -1;
	            } else if (a === b) {
	                return 0;
	            }
	            return 1;
	        }
	    }, {
	        key: 'isFunction',
	        value: function isFunction(func) {
	            return typeof func === 'function';
	        }
	    }, {
	        key: 'isUnfefined',
	        value: function isUnfefined(obj) {
	            return obj === undefined;
	        }
	    }, {
	        key: 'isString',
	        value: function isString(obj) {
	            return Object.prototype.toString.call(obj) === '[object String]';
	        }
	    }]);

	    return Util;
	}();

	exports.default = Util;

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _message = __webpack_require__(451);

	var _message2 = _interopRequireDefault(_message);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

	var _fileLoaderModal = __webpack_require__(518);

	var _fileLoaderModal2 = _interopRequireDefault(_fileLoaderModal);

	var _layerModal = __webpack_require__(519);

	var _layerModal2 = _interopRequireDefault(_layerModal);

	var _contourLineModal = __webpack_require__(527);

	var _contourLineModal2 = _interopRequireDefault(_contourLineModal);

	var _layerSelectModal = __webpack_require__(528);

	var _layerSelectModal2 = _interopRequireDefault(_layerSelectModal);

	var _DatLoader = __webpack_require__(537);

	var _DatLoader2 = _interopRequireDefault(_DatLoader);

	var _Delaunay = __webpack_require__(538);

	var _Delaunay2 = _interopRequireDefault(_Delaunay);

	var _smooth = __webpack_require__(539);

	var _smooth2 = _interopRequireDefault(_smooth);

	var _conrec = __webpack_require__(545);

	var _conrec2 = _interopRequireDefault(_conrec);

	var _default2 = __webpack_require__(512);

	var _default3 = _interopRequireDefault(_default2);

	var _triangleSetting = __webpack_require__(549);

	var _triangleSetting2 = _interopRequireDefault(_triangleSetting);

	var _contourSetting = __webpack_require__(550);

	var _contourSetting2 = _interopRequireDefault(_contourSetting);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

	var DrawTool = function (_React$Component) {
	    _inherits(DrawTool, _React$Component);

	    function DrawTool() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, DrawTool);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DrawTool)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = { type: null, draw: null, editable: false, prevLayer: null, editLayer: null, layers: null }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(DrawTool, [{
	        key: 'changeDrawType',
	        value: function changeDrawType(type) {
	            if (type == null) {
	                this.setState({ type: type });
	                this.setMousePointer('pointer');
	                if (this.state.draw != null) {
	                    this.getMap().map.removeInteraction(this.state.draw);
	                }
	                return;
	            }
	            if (!this.state.editLayer) {
	                _message2.default.info('还没有选择任何图层!', 0.5);
	                return;
	            }
	            this.setMousePointer('crosshair');
	            this.setState({ type: type });
	            if (this.state.draw != null) {
	                this.getMap().map.removeInteraction(this.state.draw);
	            }
	            var draw = this.getInteraction(type);
	            if (draw) {
	                this.setState({ draw: draw });
	                this.getMap().map.addInteraction(draw);
	            }
	        }
	    }, {
	        key: 'handleStartModify',
	        value: function handleStartModify() {
	            var _this2 = this;

	            if (this.state.editLayer != null) {
	                this.setState({ editLayer: null });
	                this.setState({ prevLayer: this.state.editLayer });
	                this.getMap().editLayer = null;
	                this.getMap().selectedFeatures.clear();
	                if (this.state.draw) {
	                    this.getMap().map.removeInteraction(this.state.draw);
	                }
	                this.setMousePointer('pointer');
	                return;
	            }
	            var map = this.getMap().map;
	            var layers = map.getLayers();
	            this.setState({ layers: layers });
	            this.refs.selectLayer.open(function (layer) {
	                if (_this2.state.prevLayer != layer) {
	                    _this2.getMap().history.clear();
	                }
	                _this2.setState({ editLayer: layer });
	                _this2.getMap().editLayer = layer;
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setMousePointer('pointer');
	        }
	    }, {
	        key: 'getMap',
	        value: function getMap() {
	            return this.props.map.refs.map;
	        }
	    }, {
	        key: 'getMapNode',
	        value: function getMapNode() {
	            if (this.props.map.refs.map) {
	                return this.props.map.refs.map.refs.mapDoc;
	            }
	        }
	    }, {
	        key: 'setMousePointer',
	        value: function setMousePointer() {
	            var style = arguments.length <= 0 || arguments[0] === undefined ? 'pointer' : arguments[0];

	            var node = this.getMapNode();
	            if (node) {
	                node.style.cursor = style;
	            }
	        }
	    }, {
	        key: 'getInteraction',
	        value: function getInteraction(value) {
	            var _this3 = this;

	            if (value != null) {
	                if (value == 'null') {
	                    return null;
	                }
	                var geometryFunction, maxPoints;
	                if (value == 'Square') {
	                    value = 'Circle';
	                    geometryFunction = ol.interaction.Draw.createRegularPolygon(4);
	                } else if (value == 'Box') {
	                    value = 'LineString';
	                    maxPoints = 2;
	                    geometryFunction = function geometryFunction(coordinates, geometry) {
	                        if (!geometry) {
	                            geometry = new ol.geom.Polygon(null);
	                        }
	                        var start = coordinates[0];
	                        var end = coordinates[1];
	                        geometry.setCoordinates([[start, [start[0], end[1]], end, [end[0], start[1]], start]]);
	                        return geometry;
	                    };
	                }

	                if (this.state.editLayer) {
	                    var draw = new ol.interaction.Draw({
	                        source: this.state.editLayer.getSource(),
	                        type: value,
	                        geometryFunction: geometryFunction,
	                        maxPoints: maxPoints,
	                        style: _default3.default
	                    });
	                    draw.setProperties({ type: value });
	                    draw.on('drawend', function (evt) {
	                        _this3.getMap().history.onDrawEnd(evt);
	                    });
	                    return draw;
	                }
	            }
	            return null;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'panel panel-default' },
	                React.createElement(
	                    'div',
	                    { className: 'panel-body tool-panel' },
	                    React.createElement(
	                        _reactBootstrap.ButtonGroup,
	                        null,
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.handleStartModify.bind(this), className: 'btn-tool  btn-app btn-flat' },
	                            React.createElement('i', { className: 'fa fa-pencil-square-o' }),
	                            this.state.editLayer == null ? '选择编辑图层' : '停止编辑'
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.changeDrawType.bind(this, null), id: 'null', className: 'btn-tool  btn-app btn-flat' },
	                            React.createElement('i', { className: 'fa fa-arrows-alt' }),
	                            '浏览'
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.changeDrawType.bind(this, 'Point'), id: 'Point', className: 'btn-tool  btn-app btn-flat' },
	                            React.createElement('i', { className: 'fa fa-dot-circle-o' }),
	                            '画点'
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.changeDrawType.bind(this, 'LineString'), id: 'LineString', className: 'btn-tool btn-app btn-flat' },
	                            React.createElement('i', { className: 'fa fa-vine' }),
	                            '画线'
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.changeDrawType.bind(this, 'Polygon'), id: 'Polygon', className: 'btn-tool  btn-app btn-flat' },
	                            React.createElement('i', { className: 'fa fa-square' }),
	                            '画面'
	                        )
	                    )
	                ),
	                React.createElement(_layerSelectModal2.default, { ref: 'selectLayer', layers: this.state.layers })
	            );
	        }
	    }]);

	    return DrawTool;
	}(React.Component);

	var ContourTool = function (_React$Component2) {
	    _inherits(ContourTool, _React$Component2);

	    function ContourTool() {
	        var _Object$getPrototypeO2;

	        var _temp2, _this4, _ret2;

	        _classCallCheck(this, ContourTool);

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(ContourTool)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this4), _this4.state = {
	            data: null,
	            triangle: null,
	            triangleLayer: null,
	            contourLayer: null,
	            layers: null,
	            zMin: Number.NEGATIVE_INFINITY,
	            zMax: Number.POSITIVE_INFINITY
	        }, _temp2), _possibleConstructorReturn(_this4, _ret2);
	    }

	    _createClass(ContourTool, [{
	        key: 'handleloadFile',
	        value: function handleloadFile() {
	            this.refs.reader.open(this.handleFileReaded.bind(this));
	        }
	    }, {
	        key: 'handleFileReaded',
	        value: function handleFileReaded(data) {
	            this.setState({ data: data });
	            var features = _DatLoader2.default.read(data);
	            var layer = new ol.layer.Vector({
	                name: '高程点',
	                source: new ol.source.Vector({
	                    features: features
	                }),
	                style: _default3.default
	            });
	            var extent = layer.getSource().getExtent();
	            this.getMap().map.addLayer(layer);
	            this.getMap().map.getView().fit(extent, this.getMap().map.getSize());
	        }
	    }, {
	        key: '_dulaunay',
	        value: function _dulaunay(data) {
	            if (this.state.triangleLayer != null) {
	                this.getMap().map.removeLayer(this.state.triangleLayer);
	            }
	            if (data != null) {
	                var points = _DatLoader2.default.readFeatures(data);
	                if (points.length < 3) {
	                    _message2.default.error('选择的离散点太少,无法生成三角网!', 2);
	                    return;
	                }
	                var triangles = _Delaunay2.default.triangulate(points);
	                var features = new ol.Collection();
	                var pTriangle = [];
	                var tMin = Number.POSITIVE_INFINITY;
	                var tMax = Number.NEGATIVE_INFINITY;
	                for (var i = 0; i < triangles.length;) {
	                    var p1 = points[triangles[i++]];
	                    var p2 = points[triangles[i++]];
	                    var p3 = points[triangles[i++]];
	                    pTriangle.push([{ x: p1[0], y: p1[1], z: p1[2] }, { x: p2[0], y: p2[1], z: p2[2] }, { x: p3[0], y: p3[1], z: p3[2] }]);
	                    tMin = p1[2] < tMin ? p1[2] : tMin;
	                    tMin = p2[2] < tMin ? p2[2] : tMin;
	                    tMin = p3[2] < tMin ? p3[2] : tMin;
	                    tMax = p1[2] > tMax ? p1[2] : tMax;
	                    tMax = p2[2] > tMax ? p2[2] : tMax;
	                    tMax = p3[2] > tMax ? p3[2] : tMax;
	                    var feature = new ol.Feature({
	                        geometry: new ol.geom.Polygon([[p1, p2, p3]], 'XYZ')
	                    });
	                    features.push(feature);
	                }
	                var layer = new ol.layer.Vector({
	                    name: '三角网',
	                    source: new ol.source.Vector({
	                        features: features
	                    }),
	                    style: _default3.default
	                });
	                var extent = layer.getSource().getExtent();
	                this.getMap().map.addLayer(layer);
	                this.getMap().map.getView().fit(extent, this.getMap().map.getSize());
	                this.setState({ triangle: pTriangle, zMin: tMin, zMax: tMax, triangleLayer: layer });
	                console.log([tMin, tMax]);
	            }
	        }
	    }, {
	        key: 'handleDulaunay',
	        value: function handleDulaunay() {
	            var layers = this.getMap().map.getLayers();
	            this.setState({ layers: layers });
	            this.refs.triSetter.open(this._dulaunay.bind(this));
	        }
	    }, {
	        key: '_contour',
	        value: function _contour() {
	            var step = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	            var smooth_type = arguments.length <= 1 || arguments[1] === undefined ? '0' : arguments[1];

	            if (this.state.triangle != null) {
	                var traceTool = new _conrec2.default(this.state.triangle, this.state.zMin, this.state.zMax, step);
	                var contourLines = traceTool.contourLineTrace();
	                var smothed_contourLines = contourLines;
	                switch (smooth_type) {
	                    case '0':
	                        break;
	                    case '1':
	                        smothed_contourLines = _smooth2.default.b_spline(contourLines);
	                        break;
	                    case '2':
	                        smothed_contourLines = _smooth2.default.cardinal_spline(contourLines);
	                        break;
	                }
	                contourLines = smothed_contourLines;
	                var features = new ol.Collection();
	                for (var i = 0; i < contourLines.length; i++) {
	                    var geom = new ol.geom.LineString([], 'XYZ');
	                    for (var j = 0; j < contourLines[i].listPoint.length; j++) {
	                        var point = contourLines[i].listPoint[j];
	                        if (point) {
	                            geom.appendCoordinate([point.x, point.y, point.z]);
	                        } else {
	                            console.log(i, j);
	                        }
	                    }
	                    if (contourLines[i].type == 1) {
	                        var _point = contourLines[i].listPoint[0];
	                        if (_point) {
	                            geom.appendCoordinate([_point.x, _point.y, _point.z]);
	                        } else {
	                            console.log(i);
	                        }
	                    }
	                    var feature = new ol.Feature({
	                        geometry: geom
	                    });
	                    features.push(feature);
	                    contourLines[i].feature = feature;
	                }
	                if (contourLines.length > 0) {
	                    var layer = new ol.layer.Vector({
	                        name: '等高线',
	                        source: new ol.source.Vector({
	                            features: features
	                        }),
	                        style: _default3.default
	                    });
	                    var extent = layer.getSource().getExtent();
	                    if (this.state.triangleLayer != null) {
	                        this.state.triangleLayer.setVisible(false);
	                    }
	                    this.getMap().contours = contourLines;

	                    this.getMap().map.addLayer(layer);
	                    this.getMap().map.getView().fit(extent, this.getMap().map.getSize());
	                    this.setState({ contourLayer: layer });
	                } else {
	                    _message2.default.info('未追踪到等高线!', 2);
	                }
	            } else {
	                _message2.default.warn('还没有生成三角网!', 2);
	            }
	        }
	    }, {
	        key: 'handleContour',
	        value: function handleContour() {
	            this.refs.contourSetter.open(this._contour.bind(this));
	        }
	    }, {
	        key: 'getMap',
	        value: function getMap() {
	            return this.props.map.refs.map;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'panel panel-default' },
	                React.createElement(
	                    'div',
	                    { className: 'panel-body tool-panel' },
	                    React.createElement(
	                        _reactBootstrap.ButtonGroup,
	                        null,
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.handleloadFile.bind(this), className: 'btn-tool  btn-app btn-flat' },
	                            '导入点文件'
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.handleDulaunay.bind(this), className: 'btn-tool  btn-app btn-flat' },
	                            '生成不规则三角网'
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.handleContour.bind(this), className: 'btn-tool  btn-app btn-flat' },
	                            '生成等高线'
	                        )
	                    )
	                ),
	                React.createElement(_fileLoaderModal2.default, { ref: 'reader' }),
	                React.createElement(_triangleSetting2.default, { ref: 'triSetter', layers: this.state.layers, map: this.props.map }),
	                React.createElement(_contourSetting2.default, { ref: 'contourSetter', map: this.props.map, zMin: this.state.zMin, zMax: this.state.zMax })
	            );
	        }
	    }]);

	    return ContourTool;
	}(React.Component);

	var DataTool = function (_React$Component3) {
	    _inherits(DataTool, _React$Component3);

	    function DataTool() {
	        var _Object$getPrototypeO3;

	        var _temp3, _this5, _ret3;

	        _classCallCheck(this, DataTool);

	        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            args[_key3] = arguments[_key3];
	        }

	        return _ret3 = (_temp3 = (_this5 = _possibleConstructorReturn(this, (_Object$getPrototypeO3 = Object.getPrototypeOf(DataTool)).call.apply(_Object$getPrototypeO3, [this].concat(args))), _this5), _this5.state = {
	            layers: null,
	            contours: null
	        }, _temp3), _possibleConstructorReturn(_this5, _ret3);
	    }

	    _createClass(DataTool, [{
	        key: 'layerInfo',
	        value: function layerInfo() {
	            //todo
	            var layers = this.getMap().map.getLayers();
	            this.setState({ layers: layers });
	            this.refs.layerView.open();
	        }
	    }, {
	        key: 'contourInfo',
	        value: function contourInfo() {
	            var contours = this.getMap().contours;
	            if (contours != null) {
	                this.setState({ contours: contours });
	                this.refs.contourView.open();
	            } else {
	                _message2.default.info('还没有生成等高线!', 2);
	            }
	        }
	    }, {
	        key: 'getMap',
	        value: function getMap() {
	            return this.props.map.refs.map;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'panel panel-default' },
	                React.createElement(
	                    'div',
	                    { className: 'panel-body tool-panel' },
	                    React.createElement(
	                        _reactBootstrap.ButtonGroup,
	                        null,
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.layerInfo.bind(this), className: 'btn-tool  btn-app btn-flat' },
	                            '图层信息'
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.contourInfo.bind(this), className: 'btn-tool  btn-app btn-flat' },
	                            '等高线信息'
	                        )
	                    )
	                ),
	                React.createElement(_layerModal2.default, { ref: 'layerView', layers: this.state.layers, map: this.props.map }),
	                React.createElement(_contourLineModal2.default, { ref: 'contourView', contours: this.state.contours, map: this.props.map })
	            );
	        }
	    }]);

	    return DataTool;
	}(React.Component);

	var ToolBar = function (_React$Component4) {
	    _inherits(ToolBar, _React$Component4);

	    function ToolBar() {
	        _classCallCheck(this, ToolBar);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ToolBar).apply(this, arguments));
	    }

	    _createClass(ToolBar, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'tool-container' },
	                React.createElement(
	                    _reactBootstrap.Tabs,
	                    { defaultActiveKey: 1 },
	                    React.createElement(
	                        _reactBootstrap.Tab,
	                        { eventKey: 1, title: '绘图' },
	                        React.createElement(DrawTool, { map: this.props.parent })
	                    ),
	                    React.createElement(
	                        _reactBootstrap.Tab,
	                        { eventKey: 2, title: '等高线' },
	                        React.createElement(ContourTool, { map: this.props.parent })
	                    ),
	                    React.createElement(
	                        _reactBootstrap.Tab,
	                        { eventKey: 3, title: '数据' },
	                        React.createElement(DataTool, { map: this.props.parent })
	                    )
	                )
	            );
	        }
	    }]);

	    return ToolBar;
	}(React.Component);

	exports.default = ToolBar;

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _modal = __webpack_require__(405);

	var _modal2 = _interopRequireDefault(_modal);

	var _icon = __webpack_require__(450);

	var _icon2 = _interopRequireDefault(_icon);

	var _message = __webpack_require__(451);

	var _message2 = _interopRequireDefault(_message);

	var _upload = __webpack_require__(455);

	var _upload2 = _interopRequireDefault(_upload);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

	var Dragger = _upload2.default.Dragger;

	var FileLoaderModal = function (_React$Component) {
	    _inherits(FileLoaderModal, _React$Component);

	    function FileLoaderModal() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, FileLoaderModal);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FileLoaderModal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            showModal: false,
	            loading: false,
	            data: null,
	            callback: null,
	            fileList: []
	        }, _this.uploadProps = {
	            name: 'file',
	            showUploadList: true,
	            action: '/karte/load_text_data'
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(FileLoaderModal, [{
	        key: 'open',
	        value: function open(callback) {
	            this.setState({ showModal: true, callback: callback });
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
	                if (file.response.data) {
	                    this.setState({ data: file.response.data });
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
	            } else {
	                this.setState({ data: null });
	            }
	            this.setState({ fileList: fileList });
	        }
	    }, {
	        key: 'read',
	        value: function read() {
	            if (this.state.data) {
	                if (this.state.callback != null) {
	                    this.state.callback(this.state.data);
	                }
	                this.close();
	                return true;
	            } else {
	                _message2.default.info('还未读取到离散点文件!', 3);
	                return false;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _modal2.default,
	                { title: '读取文件', visible: this.state.showModal, onCancel: this.close.bind(this), onOk: this.read.bind(this) },
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
	                                '支持的格式：txt , dat'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return FileLoaderModal;
	}(React.Component);

	exports.default = FileLoaderModal;

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _modal = __webpack_require__(405);

	var _modal2 = _interopRequireDefault(_modal);

	var _popconfirm = __webpack_require__(520);

	var _popconfirm2 = _interopRequireDefault(_popconfirm);

	var _switch = __webpack_require__(524);

	var _switch2 = _interopRequireDefault(_switch);

	var _message = __webpack_require__(451);

	var _message2 = _interopRequireDefault(_message);

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

	var LayerModal = function (_React$Component) {
	    _inherits(LayerModal, _React$Component);

	    function LayerModal() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, LayerModal);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(LayerModal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            showModal: false,
	            loading: false,
	            callback: null
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(LayerModal, [{
	        key: 'open',
	        value: function open(callback) {
	            this.setState({ showModal: true, callback: callback });
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            this.setState({ showModal: false });
	        }
	    }, {
	        key: 'updateLayers',
	        value: function updateLayers() {
	            this.setState({ showModal: false });
	        }
	    }, {
	        key: 'changeVisible',
	        value: function changeVisible(layer, checked) {
	            layer.setVisible(checked);
	            this.setState({ visible: checked });
	        }
	    }, {
	        key: 'deleteLayer',
	        value: function deleteLayer(layer) {
	            var map = this.props.map.refs.map.map;
	            if (this.props.layers && this.props.layers.getLength() > 1) {
	                map.removeLayer(layer);
	            } else {
	                _message2.default.warn('最后一个图层无法删除!', 2);
	            }

	            this.setState({ visible: true }); //reRender
	        }
	    }, {
	        key: 'renderLayerList',
	        value: function renderLayerList() {
	            var _this2 = this;

	            if (this.props.layers != null) {
	                var _ret2 = function () {
	                    var rows = [];
	                    _this2.props.layers.forEach(function (layer, index, arr) {
	                        var colorStyle = layer.getStyle()[0];
	                        var stroke = colorStyle.getStroke();
	                        var fill = colorStyle.getFill();
	                        rows.push(React.createElement(
	                            'tr',
	                            { key: index },
	                            React.createElement(
	                                'td',
	                                null,
	                                layer.get('name') || 'Undefined'
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                React.createElement(_switch2.default, { checked: layer.getVisible(), onChange: _this2.changeVisible.bind(_this2, layer) })
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                React.createElement('div', { style: { width: 60, height: 30, backgroundColor: stroke.getColor(), border: "1px solid #ddd" } })
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                React.createElement('div', { style: { width: 60, height: 30, backgroundColor: fill.getColor(), border: "1px solid #ddd" } })
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                '  ',
	                                React.createElement(
	                                    _popconfirm2.default,
	                                    { title: '确定要删除这个图层吗？', onConfirm: _this2.deleteLayer.bind(_this2, layer), onCancel: function onCancel() {} },
	                                    React.createElement(
	                                        'a',
	                                        { href: 'javascript:(0)', style: { color: '#c7254e', fontSize: 12 } },
	                                        '删除'
	                                    )
	                                )
	                            )
	                        ));
	                    });
	                    return {
	                        v: rows
	                    };
	                }();

	                if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _modal2.default,
	                { title: '图层信息', visible: this.state.showModal, onCancel: this.close.bind(this), onOk: this.updateLayers.bind(this), width: 800 },
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
	                                '图层名'
	                            ),
	                            React.createElement(
	                                'th',
	                                null,
	                                '显示状态'
	                            ),
	                            React.createElement(
	                                'th',
	                                null,
	                                '边框颜色'
	                            ),
	                            React.createElement(
	                                'th',
	                                null,
	                                '填充颜色'
	                            ),
	                            React.createElement('th', null)
	                        )
	                    ),
	                    React.createElement(
	                        'tbody',
	                        null,
	                        this.renderLayerList()
	                    )
	                )
	            );
	        }
	    }]);

	    return LayerModal;
	}(React.Component);

	exports.default = LayerModal;

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcTooltip = __webpack_require__(521);

	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

	var _icon = __webpack_require__(450);

	var _icon2 = _interopRequireDefault(_icon);

	var _button = __webpack_require__(446);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ant-popover';
	var noop = function noop() {};
	var transitionNames = {
	  top: 'zoom-down',
	  bottom: 'zoom-up',
	  left: 'zoom-right',
	  right: 'zoom-left',
	  topLeft: 'zoom-down',
	  bottomLeft: 'zoom-up',
	  leftTop: 'zoom-right',
	  rightTop: 'zoom-left',
	  topRight: 'zoom-down',
	  bottomRight: 'zoom-up',
	  leftBottom: 'zoom-right',
	  rightBottom: 'zoom-left'
	};

	exports.default = _react2.default.createClass({
	  displayName: 'popconfirm',
	  getInitialState: function getInitialState() {
	    return {
	      visible: false
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      transitionName: '',
	      placement: 'top',
	      trigger: 'click',
	      overlayStyle: {},
	      onConfirm: noop,
	      onCancel: noop,
	      okText: '确定',
	      cancelText: '取消',
	      onVisibleChange: function onVisibleChange() {}
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('visible' in nextProps) {
	      this.setState({ visible: nextProps.visible });
	    }
	  },
	  confirm: function confirm() {
	    this.setVisible(false);
	    this.props.onConfirm.call(this);
	  },
	  cancel: function cancel() {
	    this.setVisible(false);
	    this.props.onCancel.call(this);
	  },
	  onVisibleChange: function onVisibleChange(visible) {
	    this.setVisible(visible);
	    this.props.onVisibleChange(visible);
	  },
	  setVisible: function setVisible(visible) {
	    if (!('visible' in this.props)) {
	      this.setState({ visible: visible });
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var title = _props.title;
	    var okText = _props.okText;
	    var cancelText = _props.cancelText;
	    var placement = _props.placement;
	    var overlayStyle = _props.overlayStyle;
	    var trigger = _props.trigger;

	    var overlay = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: prefixCls + '-content' },
	        _react2.default.createElement(
	          'p',
	          { className: prefixCls + '-message' },
	          _react2.default.createElement(_icon2.default, { type: 'exclamation-circle' }),
	          title
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: prefixCls + '-buttons' },
	          _react2.default.createElement(
	            _button2.default,
	            { onClick: this.cancel, type: 'ghost', size: 'small' },
	            cancelText
	          ),
	          _react2.default.createElement(
	            _button2.default,
	            { onClick: this.confirm, type: 'primary', size: 'small' },
	            okText
	          )
	        )
	      )
	    );

	    var transitionName = transitionNames[placement];

	    return _react2.default.createElement(
	      _rcTooltip2.default,
	      { placement: placement,
	        overlayStyle: overlayStyle,
	        prefixCls: prefixCls,
	        onVisibleChange: this.onVisibleChange,
	        transitionName: transitionName,
	        visible: this.state.visible,
	        trigger: trigger,
	        overlay: overlay },
	      this.props.children
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(522);

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _placements = __webpack_require__(523);

	var _rcTrigger = __webpack_require__(492);

	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

	var Tooltip = _react2['default'].createClass({
	  displayName: 'Tooltip',

	  propTypes: {
	    trigger: _react.PropTypes.any,
	    children: _react.PropTypes.any,
	    defaultVisible: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    placement: _react.PropTypes.string,
	    transitionName: _react.PropTypes.string,
	    animation: _react.PropTypes.any,
	    onVisibleChange: _react.PropTypes.func,
	    afterVisibleChange: _react.PropTypes.func,
	    overlay: _react.PropTypes.node.isRequired,
	    overlayStyle: _react.PropTypes.object,
	    overlayClassName: _react.PropTypes.string,
	    prefixCls: _react.PropTypes.string,
	    mouseEnterDelay: _react.PropTypes.number,
	    mouseLeaveDelay: _react.PropTypes.number,
	    getTooltipContainer: _react.PropTypes.func,
	    destroyTooltipOnHide: _react.PropTypes.bool,
	    align: _react.PropTypes.shape({
	      offset: _react.PropTypes.array,
	      targetOffset: _react.PropTypes.array
	    }),
	    arrowContent: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-tooltip',
	      mouseEnterDelay: 0,
	      destroyTooltipOnHide: false,
	      mouseLeaveDelay: 0.1,
	      align: {},
	      placement: 'right',
	      trigger: ['hover'],
	      arrowContent: null
	    };
	  },

	  getPopupElement: function getPopupElement() {
	    var _props = this.props;
	    var arrowContent = _props.arrowContent;
	    var overlay = _props.overlay;
	    var prefixCls = _props.prefixCls;

	    return [_react2['default'].createElement(
	      'div',
	      { className: prefixCls + '-arrow', key: 'arrow' },
	      arrowContent
	    ), _react2['default'].createElement(
	      'div',
	      { className: prefixCls + '-inner', key: 'content' },
	      overlay
	    )];
	  },

	  getPopupDomNode: function getPopupDomNode() {
	    return this.refs.trigger.popupDomNode;
	  },

	  render: function render() {
	    var _props2 = this.props;
	    var overlayClassName = _props2.overlayClassName;
	    var trigger = _props2.trigger;
	    var mouseEnterDelay = _props2.mouseEnterDelay;
	    var mouseLeaveDelay = _props2.mouseLeaveDelay;
	    var overlayStyle = _props2.overlayStyle;
	    var prefixCls = _props2.prefixCls;
	    var children = _props2.children;
	    var onVisibleChange = _props2.onVisibleChange;
	    var transitionName = _props2.transitionName;
	    var animation = _props2.animation;
	    var placement = _props2.placement;
	    var align = _props2.align;
	    var destroyTooltipOnHide = _props2.destroyTooltipOnHide;
	    var defaultVisible = _props2.defaultVisible;
	    var getTooltipContainer = _props2.getTooltipContainer;

	    var restProps = _objectWithoutProperties(_props2, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

	    var extraProps = _extends({}, restProps);
	    if ('visible' in this.props) {
	      extraProps.popupVisible = this.props.visible;
	    }
	    return _react2['default'].createElement(
	      _rcTrigger2['default'],
	      _extends({ popupClassName: overlayClassName,
	        ref: 'trigger',
	        prefixCls: prefixCls,
	        popup: this.getPopupElement(),
	        action: trigger,
	        builtinPlacements: _placements.placements,
	        popupPlacement: placement,
	        popupAlign: align,
	        getPopupContainer: getTooltipContainer,
	        onPopupVisibleChange: onVisibleChange,
	        popupTransitionName: transitionName,
	        popupAnimation: animation,
	        defaultPopupVisible: defaultVisible,
	        destroyPopupOnHide: destroyTooltipOnHide,
	        mouseLeaveDelay: mouseLeaveDelay,
	        popupStyle: overlayStyle,
	        mouseEnterDelay: mouseEnterDelay
	      }, extraProps),
	      children
	    );
	  }
	});

	exports['default'] = Tooltip;
	module.exports = exports['default'];

/***/ },

/***/ 523:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var autoAdjustOverflow = {
	  adjustX: 1,
	  adjustY: 1
	};

	var targetOffset = [0, 0];

	var placements = {
	  left: {
	    points: ['cr', 'cl'],
	    overflow: autoAdjustOverflow,
	    offset: [-4, 0],
	    targetOffset: targetOffset
	  },
	  right: {
	    points: ['cl', 'cr'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  top: {
	    points: ['bc', 'tc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  bottom: {
	    points: ['tc', 'bc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  leftTop: {
	    points: ['tr', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [-3, 0],
	    targetOffset: targetOffset
	  },
	  topRight: {
	    points: ['br', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  rightTop: {
	    points: ['tl', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  bottomRight: {
	    points: ['tr', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  rightBottom: {
	    points: ['bl', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  leftBottom: {
	    points: ['br', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [-4, 0],
	    targetOffset: targetOffset
	  }
	};

	exports.placements = placements;
	exports['default'] = placements;

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rcSwitch = __webpack_require__(525);

	var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(195);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = _react2.default.createClass({
	  displayName: 'switch',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'ant-switch',
	      size: 'default'
	    };
	  },
	  render: function render() {
	    var _classNames;

	    var _props = this.props;
	    var prefixCls = _props.prefixCls;
	    var size = _props.size;
	    var className = _props.className;

	    var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-' + size, true), _classNames));
	    return _react2.default.createElement(_rcSwitch2.default, _extends({ className: cls }, this.props));
	  }
	});
	module.exports = exports['default'];

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(526);

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var React = __webpack_require__(1);
	var classNames = __webpack_require__(195);

	function noop() {}

	var Switch = React.createClass({
	  displayName: 'Switch',

	  propTypes: {
	    className: React.PropTypes.string,
	    prefixCls: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    style: React.PropTypes.object,
	    checkedChildren: React.PropTypes.any,
	    unCheckedChildren: React.PropTypes.any,
	    onChange: React.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-switch',
	      style: {},
	      checkedChildren: null,
	      unCheckedChildren: null,
	      className: '',
	      defaultChecked: false,
	      onChange: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var checked = false;
	    if ('checked' in props) {
	      checked = !!props.checked;
	    } else {
	      checked = !!props.defaultChecked;
	    }
	    return {
	      checked: checked
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('checked' in nextProps) {
	      this.setState({
	        checked: !!nextProps.checked
	      });
	    }
	  },
	  toggle: function toggle() {
	    var checked = !this.state.checked;
	    if (!('checked' in this.props)) {
	      this.setState({
	        checked: checked
	      });
	    }
	    this.props.onChange(checked);
	  },
	  render: function render() {
	    var _classNames;

	    var _props = this.props;
	    var className = _props.className;
	    var prefixCls = _props.prefixCls;
	    var disabled = _props.disabled;
	    var style = _props.style;
	    var checkedChildren = _props.checkedChildren;
	    var unCheckedChildren = _props.unCheckedChildren;

	    var checked = this.state.checked;
	    var switchClassName = classNames((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-checked', checked), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));
	    return React.createElement(
	      'span',
	      { className: switchClassName,
	        onClick: disabled ? noop : this.toggle,
	        style: style },
	      React.createElement(
	        'span',
	        { className: prefixCls + '-inner' },
	        checked ? checkedChildren : unCheckedChildren
	      )
	    );
	  }
	});

	module.exports = Switch;

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _modal = __webpack_require__(405);

	var _modal2 = _interopRequireDefault(_modal);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

	var LayerModal = function (_React$Component) {
	    _inherits(LayerModal, _React$Component);

	    function LayerModal() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, LayerModal);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(LayerModal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            showModal: false,
	            loading: false,
	            callback: null
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(LayerModal, [{
	        key: 'open',
	        value: function open(callback) {
	            this.setState({ showModal: true, callback: callback });
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            this.setState({ showModal: false });
	        }
	    }, {
	        key: 'updateLayers',
	        value: function updateLayers() {
	            this.setState({ showModal: false });
	        }
	    }, {
	        key: 'handleEdit',
	        value: function handleEdit(contour) {
	            var map = this.props.map.refs.map;
	            var feature = contour.feature;
	            map.selectedFeatures.clear();
	            map.selectedFeatures.push(feature);
	            this.close();
	        }
	    }, {
	        key: 'renderContourInfo',
	        value: function renderContourInfo() {
	            var _this2 = this;

	            console.log(this.props.contours);
	            if (this.props.contours != null) {
	                var rows = this.props.contours.map(function (contour, index) {
	                    return React.createElement(
	                        'tr',
	                        { key: index },
	                        React.createElement(
	                            'td',
	                            null,
	                            contour.value,
	                            ' m'
	                        ),
	                        React.createElement(
	                            'td',
	                            null,
	                            contour.type == 1 ? '闭合' : '开放'
	                        ),
	                        React.createElement(
	                            'td',
	                            null,
	                            React.createElement(
	                                'a',
	                                { href: 'javascript:(0)', onClick: _this2.handleEdit.bind(_this2, contour), style: { color: '#2db7f5', fontSize: 12 } },
	                                '编辑'
	                            )
	                        )
	                    );
	                });
	                return rows;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _modal2.default,
	                { title: '等高线信息', visible: this.state.showModal, onCancel: this.close.bind(this), width: 800 },
	                React.createElement(
	                    'div',
	                    { className: 'modal-body', style: { maxHeight: 360 } },
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
	                                    '高程值'
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
	                            this.renderContourInfo()
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return LayerModal;
	}(React.Component);

	exports.default = LayerModal;

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _modal = __webpack_require__(405);

	var _modal2 = _interopRequireDefault(_modal);

	var _radio = __webpack_require__(529);

	var _radio2 = _interopRequireDefault(_radio);

	var _message = __webpack_require__(451);

	var _message2 = _interopRequireDefault(_message);

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

	var LayerModal = function (_React$Component) {
	    _inherits(LayerModal, _React$Component);

	    function LayerModal() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, LayerModal);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(LayerModal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            showModal: false,
	            loading: false,
	            callback: null,
	            selected: null
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(LayerModal, [{
	        key: 'open',
	        value: function open(callback) {
	            this.setState({ showModal: true, callback: callback });
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            this.setState({ showModal: false });
	        }
	    }, {
	        key: 'ok',
	        value: function ok() {
	            if (this.state.selected == null) {
	                _message2.default.info('还没有选择任何图层!', 3);
	                return;
	            }
	            this.setState({ showModal: false });
	            if (this.state.callback != null) {
	                this.state.callback(this.state.selected);
	            }
	        }
	    }, {
	        key: 'handleSelect',
	        value: function handleSelect(layer) {
	            console.log(layer);
	            this.setState({ selected: layer });
	        }
	    }, {
	        key: 'renderLayerList',
	        value: function renderLayerList() {
	            var _this2 = this;

	            if (this.props.layers != null) {
	                var _ret2 = function () {
	                    var rows = [];
	                    _this2.props.layers.forEach(function (layer, index, arr) {
	                        var checked = false;
	                        if (layer == _this2.state.selected) {
	                            checked = true;
	                        }
	                        rows.push(React.createElement(
	                            'tr',
	                            { key: index },
	                            React.createElement(
	                                'td',
	                                null,
	                                ' ',
	                                React.createElement(_radio2.default, { checked: checked, onClick: _this2.handleSelect.bind(_this2, layer), readOnly: true })
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                index
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                layer.get('name') || 'Undefined'
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                '否'
	                            )
	                        ));
	                    });
	                    return {
	                        v: rows
	                    };
	                }();

	                if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _modal2.default,
	                { title: '选择需要开始编辑的图层', width: 680, visible: this.state.showModal, onCancel: this.close.bind(this), onOk: this.ok.bind(this) },
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
	                                '选择'
	                            ),
	                            React.createElement(
	                                'th',
	                                null,
	                                '编号'
	                            ),
	                            React.createElement(
	                                'th',
	                                null,
	                                '图层名'
	                            ),
	                            React.createElement(
	                                'th',
	                                null,
	                                '锁定'
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'tbody',
	                        null,
	                        this.renderLayerList()
	                    )
	                )
	            );
	        }
	    }]);

	    return LayerModal;
	}(React.Component);

	exports.default = LayerModal;

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _radio = __webpack_require__(530);

	var _radio2 = _interopRequireDefault(_radio);

	var _group = __webpack_require__(535);

	var _group2 = _interopRequireDefault(_group);

	var _radioButton = __webpack_require__(536);

	var _radioButton2 = _interopRequireDefault(_radioButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_radio2.default.Button = _radioButton2.default;
	_radio2.default.Group = _group2.default;
	exports.default = _radio2.default;
	module.exports = exports['default'];

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rcRadio = __webpack_require__(531);

	var _rcRadio2 = _interopRequireDefault(_rcRadio);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AntRadio = _react2.default.createClass({
	  displayName: 'AntRadio',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'ant-radio'
	    };
	  },
	  render: function render() {
	    var classString = this.props.className;
	    if (classString) {
	      classString += this.props.checked ? ' ' + classString + '-checked' : '';
	    }
	    if (this.props.disabled) {
	      classString += ' ' + this.props.className + '-disabled';
	    }
	    return _react2.default.createElement(
	      'label',
	      { className: classString },
	      _react2.default.createElement(_rcRadio2.default, _extends({}, this.props, { children: null })),
	      this.props.children
	    );
	  }
	});

	exports.default = AntRadio;
	module.exports = exports['default'];

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(532);

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var Checkbox = __webpack_require__(533);

	var Radio = React.createClass({
	  displayName: 'Radio',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-radio',
	      type: 'radio'
	    };
	  },

	  render: function render() {
	    return React.createElement(Checkbox, _extends({}, this.props, { ref: 'checkbox' }));
	  }
	});

	module.exports = Radio;

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(534);

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(195);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var Checkbox = (function (_React$Component) {
	  _inherits(Checkbox, _React$Component);

	  function Checkbox(props) {
	    _classCallCheck(this, Checkbox);

	    _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).call(this, props);
	    this.handleChange = this.handleChange.bind(this);
	    var checked = false;
	    if ('checked' in props) {
	      checked = props.checked;
	    } else {
	      checked = props.defaultChecked;
	    }
	    this.state = { checked: checked };
	  }

	  _createClass(Checkbox, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ('checked' in nextProps) {
	        this.setState({
	          checked: nextProps.checked
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var props = this.props;
	      var prefixCls = props.prefixCls;
	      var checked = this.state.checked;
	      if (typeof checked === 'boolean') {
	        checked = checked ? 1 : 0;
	      }
	      return _react2['default'].createElement(
	        'span',
	        { className: (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, props.className, !!props.className), _defineProperty(_classnames, prefixCls, 1), _defineProperty(_classnames, prefixCls + '-checked', checked), _defineProperty(_classnames, prefixCls + '-checked-' + checked, !!checked), _defineProperty(_classnames, prefixCls + '-disabled', props.disabled), _classnames)),
	          style: props.style
	        },
	        _react2['default'].createElement('span', { className: prefixCls + '-inner' }),
	        _react2['default'].createElement('input', _extends({}, props, {
	          defaultChecked: !!props.defaultChecked,
	          className: prefixCls + '-input',
	          checked: !!checked,
	          onChange: this.handleChange
	        }))
	      );
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      var checked = e.target.checked;
	      if (!('checked' in this.props)) {
	        this.setState({
	          checked: checked ? 1 : 0
	        });
	      }
	      this.props.onChange(e, this.state.checked);
	    }
	  }]);

	  return Checkbox;
	})(_react2['default'].Component);

	exports['default'] = Checkbox;

	Checkbox.propTypes = {
	  prefixCls: _react2['default'].PropTypes.string,
	  style: _react2['default'].PropTypes.object,
	  type: _react2['default'].PropTypes.string,
	  className: _react2['default'].PropTypes.string,
	  defaultChecked: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.bool]),
	  checked: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.bool]),
	  onChange: _react2['default'].PropTypes.func
	};

	Checkbox.defaultProps = {
	  prefixCls: 'rc-checkbox',
	  style: {},
	  type: 'checkbox',
	  className: '',
	  defaultChecked: 0,
	  onChange: function onChange() {}
	};
	module.exports = exports['default'];

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radio = __webpack_require__(530);

	var _radio2 = _interopRequireDefault(_radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getCheckedValue(children) {
	  var checkedValue = null;
	  _react2.default.Children.forEach(children, function (radio) {
	    if (radio.props && radio.props.checked) {
	      checkedValue = radio.props.value;
	    }
	  });
	  return checkedValue;
	}

	exports.default = _react2.default.createClass({
	  displayName: 'group',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'ant-radio-group',
	      disabled: false,
	      onChange: function onChange() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    return {
	      value: props.value || props.defaultValue || getCheckedValue(props.children)
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps || getCheckedValue(nextProps.children)) {
	      this.setState({
	        value: nextProps.value || getCheckedValue(nextProps.children)
	      });
	    }
	  },

	  render: function render() {
	    var _this = this;

	    var props = this.props;
	    var children = _react2.default.Children.map(props.children, function (radio) {
	      if (radio.props) {
	        return _react2.default.createElement(_radio2.default, _extends({
	          key: radio.props.value
	        }, radio.props, {
	          onChange: _this.onRadioChange,
	          checked: _this.state.value === radio.props.value,
	          disabled: radio.props.disabled || _this.props.disabled
	        }));
	      }
	      return radio;
	    });
	    return _react2.default.createElement(
	      'div',
	      { className: props.prefixCls },
	      children
	    );
	  },
	  onRadioChange: function onRadioChange(ev) {
	    this.setState({
	      value: ev.target.value
	    });
	    this.props.onChange(ev);
	  }
	});
	module.exports = exports['default'];

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radio = __webpack_require__(530);

	var _radio2 = _interopRequireDefault(_radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RadioButton = _react2.default.createClass({
	  displayName: 'RadioButton',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: 'ant-radio-button'
	    };
	  },
	  render: function render() {
	    return _react2.default.createElement(_radio2.default, this.props);
	  }
	});

	exports.default = RadioButton;
	module.exports = exports['default'];

/***/ },

/***/ 537:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DatLoader = function () {
	    function DatLoader() {
	        _classCallCheck(this, DatLoader);
	    }

	    _createClass(DatLoader, null, [{
	        key: 'read',
	        value: function read(source) {
	            var collection = new ol.Collection();
	            if (source.length <= 0) {
	                return collection;
	            }
	            for (var i = 0; i < source.length; i++) {
	                if (source[i].length < 4) {
	                    continue;
	                }
	                var feature = new ol.Feature({
	                    geometry: new ol.geom.Point([parseFloat(source[i][2]), parseFloat(source[i][3])]),
	                    name: source[i][0]
	                });
	                feature.getGeometry().set('z', parseFloat(source[i][4]));
	                collection.push(feature);
	            }
	            console.info(collection);
	            return collection;
	        }
	    }, {
	        key: 'readRaw',
	        value: function readRaw(source) {
	            var collection = new Array();
	            if (source.length <= 0) {
	                return collection;
	            }
	            for (var i = 0; i < source.length; i++) {
	                if (source[i].length < 4) {
	                    continue;
	                }
	                var x = parseFloat(source[i][2]);
	                var y = parseFloat(source[i][3]);
	                var z = parseFloat(source[i][4]);
	                collection.push([x, y, z]);
	            }
	            console.info(collection);
	            return collection;
	        }
	    }, {
	        key: 'readFeatures',
	        value: function readFeatures(features) {
	            var collection = new Array();
	            if (features.length <= 0) {
	                return collection;
	            }
	            features.forEach(function (feature) {
	                var geom = feature.getGeometry();
	                var cord = geom.getCoordinates();

	                var x = parseFloat(cord[0]);
	                var y = parseFloat(cord[1]);
	                var z = parseFloat(geom.get('z') || 0);
	                collection.push([x, y, z]);
	            });
	            console.info(collection);
	            return collection;
	        }
	    }]);

	    return DatLoader;
	}();

	exports.default = DatLoader;

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Delaunay;

	(function () {
	    "use strict";

	    var EPSILON = 1.0 / 1048576.0;

	    function supertriangle(vertices) {
	        var xmin = Number.POSITIVE_INFINITY,
	            ymin = Number.POSITIVE_INFINITY,
	            xmax = Number.NEGATIVE_INFINITY,
	            ymax = Number.NEGATIVE_INFINITY,
	            i,
	            dx,
	            dy,
	            dmax,
	            xmid,
	            ymid;

	        for (i = vertices.length; i--;) {
	            if (vertices[i][0] < xmin) xmin = vertices[i][0];
	            if (vertices[i][0] > xmax) xmax = vertices[i][0];
	            if (vertices[i][1] < ymin) ymin = vertices[i][1];
	            if (vertices[i][1] > ymax) ymax = vertices[i][1];
	        }

	        dx = xmax - xmin;
	        dy = ymax - ymin;
	        dmax = Math.max(dx, dy);
	        xmid = xmin + dx * 0.5;
	        ymid = ymin + dy * 0.5;

	        return [[xmid - 20 * dmax, ymid - dmax], [xmid, ymid + 20 * dmax], [xmid + 20 * dmax, ymid - dmax]];
	    }

	    function circumcircle(vertices, i, j, k) {
	        var x1 = vertices[i][0],
	            y1 = vertices[i][1],
	            x2 = vertices[j][0],
	            y2 = vertices[j][1],
	            x3 = vertices[k][0],
	            y3 = vertices[k][1],
	            fabsy1y2 = Math.abs(y1 - y2),
	            fabsy2y3 = Math.abs(y2 - y3),
	            xc,
	            yc,
	            m1,
	            m2,
	            mx1,
	            mx2,
	            my1,
	            my2,
	            dx,
	            dy;

	        /* Check for coincident points */
	        if (fabsy1y2 < EPSILON && fabsy2y3 < EPSILON) throw new Error("Eek! Coincident points!");

	        if (fabsy1y2 < EPSILON) {
	            m2 = -((x3 - x2) / (y3 - y2));
	            mx2 = (x2 + x3) / 2.0;
	            my2 = (y2 + y3) / 2.0;
	            xc = (x2 + x1) / 2.0;
	            yc = m2 * (xc - mx2) + my2;
	        } else if (fabsy2y3 < EPSILON) {
	            m1 = -((x2 - x1) / (y2 - y1));
	            mx1 = (x1 + x2) / 2.0;
	            my1 = (y1 + y2) / 2.0;
	            xc = (x3 + x2) / 2.0;
	            yc = m1 * (xc - mx1) + my1;
	        } else {
	            m1 = -((x2 - x1) / (y2 - y1));
	            m2 = -((x3 - x2) / (y3 - y2));
	            mx1 = (x1 + x2) / 2.0;
	            mx2 = (x2 + x3) / 2.0;
	            my1 = (y1 + y2) / 2.0;
	            my2 = (y2 + y3) / 2.0;
	            xc = (m1 * mx1 - m2 * mx2 + my2 - my1) / (m1 - m2);
	            yc = fabsy1y2 > fabsy2y3 ? m1 * (xc - mx1) + my1 : m2 * (xc - mx2) + my2;
	        }

	        dx = x2 - xc;
	        dy = y2 - yc;
	        return { i: i, j: j, k: k, x: xc, y: yc, r: dx * dx + dy * dy };
	    }

	    function dedup(edges) {
	        var i, j, a, b, m, n;

	        for (j = edges.length; j;) {
	            b = edges[--j];
	            a = edges[--j];

	            for (i = j; i;) {
	                n = edges[--i];
	                m = edges[--i];

	                if (a === m && b === n || a === n && b === m) {
	                    edges.splice(j, 2);
	                    edges.splice(i, 2);
	                    break;
	                }
	            }
	        }
	    }

	    Delaunay = {
	        triangulate: function triangulate(vertices, key) {
	            var n = vertices.length,
	                i,
	                j,
	                indices,
	                st,
	                open,
	                closed,
	                edges,
	                dx,
	                dy,
	                a,
	                b,
	                c;

	            /* Bail if there aren't enough vertices to form any triangles. */
	            if (n < 3) return [];

	            /* Slice out the actual vertices from the passed objects. (Duplicate the
	             * array even if we don't, though, since we need to make a supertriangle
	             * later on!) */
	            vertices = vertices.slice(0);

	            if (key) for (i = n; i--;) {
	                vertices[i] = vertices[i][key];
	            } /* Make an array of indices into the vertex array, sorted by the
	               * vertices' x-position. */
	            indices = new Array(n);

	            for (i = n; i--;) {
	                indices[i] = i;
	            }indices.sort(function (i, j) {
	                return vertices[j][0] - vertices[i][0];
	            });

	            /* Next, find the vertices of the supertriangle (which contains all other
	             * triangles), and append them onto the end of a (copy of) the vertex
	             * array. */
	            st = supertriangle(vertices);
	            vertices.push(st[0], st[1], st[2]);

	            /* Initialize the open list (containing the supertriangle and nothing
	             * else) and the closed list (which is empty since we havn't processed
	             * any triangles yet). */
	            open = [circumcircle(vertices, n + 0, n + 1, n + 2)];
	            closed = [];
	            edges = [];

	            /* Incrementally add each vertex to the mesh. */
	            for (i = indices.length; i--; edges.length = 0) {
	                c = indices[i];

	                /* For each open triangle, check to see if the current point is
	                 * inside it's circumcircle. If it is, remove the triangle and add
	                 * it's edges to an edge list. */
	                for (j = open.length; j--;) {
	                    /* If this point is to the right of this triangle's circumcircle,
	                     * then this triangle should never get checked again. Remove it
	                     * from the open list, add it to the closed list, and skip. */
	                    dx = vertices[c][0] - open[j].x;
	                    if (dx > 0.0 && dx * dx > open[j].r) {
	                        closed.push(open[j]);
	                        open.splice(j, 1);
	                        continue;
	                    }

	                    /* If we're outside the circumcircle, skip this triangle. */
	                    dy = vertices[c][1] - open[j].y;
	                    if (dx * dx + dy * dy - open[j].r > EPSILON) continue;

	                    /* Remove the triangle and add it's edges to the edge list. */
	                    edges.push(open[j].i, open[j].j, open[j].j, open[j].k, open[j].k, open[j].i);
	                    open.splice(j, 1);
	                }

	                /* Remove any doubled edges. */
	                dedup(edges);

	                /* Add a new triangle for each edge. */
	                for (j = edges.length; j;) {
	                    b = edges[--j];
	                    a = edges[--j];
	                    open.push(circumcircle(vertices, a, b, c));
	                }
	            }

	            /* Copy any remaining open triangles to the closed list, and then
	             * remove any triangles that share a vertex with the supertriangle,
	             * building a list of triplets that represent triangles. */
	            for (i = open.length; i--;) {
	                closed.push(open[i]);
	            }open.length = 0;

	            for (i = closed.length; i--;) {
	                if (closed[i].i < n && closed[i].j < n && closed[i].k < n) open.push(closed[i].i, closed[i].j, closed[i].k);
	            } /* Yay, we're done! */
	            return open;
	        },
	        contains: function contains(tri, p) {
	            /* Bounding box test first, for quick rejections. */
	            if (p[0] < tri[0][0] && p[0] < tri[1][0] && p[0] < tri[2][0] || p[0] > tri[0][0] && p[0] > tri[1][0] && p[0] > tri[2][0] || p[1] < tri[0][1] && p[1] < tri[1][1] && p[1] < tri[2][1] || p[1] > tri[0][1] && p[1] > tri[1][1] && p[1] > tri[2][1]) return null;

	            var a = tri[1][0] - tri[0][0],
	                b = tri[2][0] - tri[0][0],
	                c = tri[1][1] - tri[0][1],
	                d = tri[2][1] - tri[0][1],
	                i = a * d - b * c;

	            /* Degenerate tri. */
	            if (i === 0.0) return null;

	            var u = (d * (p[0] - tri[0][0]) - b * (p[1] - tri[0][1])) / i,
	                v = (a * (p[1] - tri[0][1]) - c * (p[0] - tri[0][0])) / i;

	            /* If we're outside the tri, fail. */
	            if (u < 0.0 || v < 0.0 || u + v > 1.0) return null;

	            return [u, v];
	        }
	    };

	    if (true) module.exports = Delaunay;
	})();

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _contourline = __webpack_require__(540);

	var _contourline2 = _interopRequireDefault(_contourline);

	var _point = __webpack_require__(541);

	var _point2 = _interopRequireDefault(_point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var bezier_js = __webpack_require__(542);
	var cardinal_spline_js = __webpack_require__(543);
	var b_spline_js = __webpack_require__(544);

	var Smooth = function () {
	    function Smooth() {
	        _classCallCheck(this, Smooth);
	    }

	    _createClass(Smooth, null, [{
	        key: 'b_spline',
	        value: function b_spline(contours) {
	            var smoothed_contours = [];
	            contours.forEach(function (contour) {
	                var points = contour.listPoint;
	                if (points.length <= 2) {
	                    smoothed_contours.push(contour);
	                    return;
	                }
	                var evel = contour.value;
	                var inpts = [];
	                var smoothed_contour = new _contourline2.default(evel);
	                smoothed_contour.type = contour.type;
	                for (var i = 0; i < points.length; i++) {
	                    inpts.push([points[i].x, points[i].y]);
	                }
	                for (var _i = 0; _i < 1; _i += 0.01) {
	                    var outpts = b_spline_js(_i, 3, inpts);
	                    var pt = new _point2.default(outpts[0], outpts[1], evel);
	                    smoothed_contour.listPoint.push(pt);
	                }
	                smoothed_contours.push(smoothed_contour);
	            });
	            return smoothed_contours;
	        }
	    }, {
	        key: 'cardinal_spline',
	        value: function cardinal_spline(contours) {
	            var smoothed_contours = [];
	            contours.forEach(function (contour) {
	                var points = contour.listPoint;
	                if (points.length <= 2) {
	                    smoothed_contours.push(contour);
	                    return;
	                }
	                var evel = contour.value;
	                var inpts = [];
	                var smoothed_contour = new _contourline2.default(evel);
	                smoothed_contour.type = contour.type;
	                for (var i = 0; i < points.length; i++) {
	                    inpts.push(points[i].x);
	                    inpts.push(points[i].y);
	                }
	                var outpts = cardinal_spline_js.getCurvePoints(inpts, 0.05, 20);
	                for (var _i2 = 0; _i2 < outpts.length; _i2 += 2) {
	                    var pt = new _point2.default(outpts[_i2], outpts[_i2 + 1], evel);
	                    smoothed_contour.listPoint.push(pt);
	                }
	                smoothed_contours.push(smoothed_contour);
	            });
	            return smoothed_contours;
	        }
	    }]);

	    return Smooth;
	}();

	exports.default = Smooth;

/***/ },

/***/ 540:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *
	 * @authors 祝志颖 (c0de4ac@baicizhan.com)
	 * @date    2016-03-06 15:12
	 * @version 1.0.0
	 */

	var CContourLine = function CContourLine(value) {
	    _classCallCheck(this, CContourLine);

	    this.value = value;
	    this.listPoint = [];
	    this.type = 1;
	};

	exports.default = CContourLine;

/***/ },

/***/ 541:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *
	 * @authors 祝志颖 (c0de4ac@baicizhan.com)
	 * @date    2016-03-06 15:12
	 * @version 1.0.0
	 */

	var CPoint = function CPoint(x, y, z) {
	    _classCallCheck(this, CPoint);

	    this.x = x;
	    this.y = y;
	    this.z = z;
	    this.id = -1;
	    this.listIdEdge = [];
	    this.listIdLine = [];
	    this.listIdTri = [];
	};

	exports.default = CPoint;

/***/ },

/***/ 542:
/***/ function(module, exports) {

	var cache = {
	    '1': bezier1
	  , '2': bezier2
	  , '3': bezier3
	  , '4': bezier4
	}

	module.exports = neat
	module.exports.prepare = prepare

	function neat(arr, t) {
	  return prepare(arr.length)(arr, t)
	}

	function prepare(pieces) {
	  pieces = +pieces|0
	  if (!pieces) throw new Error('Cannot create a interpolator with no elements')
	  if (cache[pieces]) return cache[pieces]

	  var fn = ['var ut = 1 - t', '']

	  var n = pieces
	  while (n--) {
	    for (var j = 0; j < n; j += 1) {
	      if (n+1 === pieces) {
	        fn.push('var p'+j+' = arr['+j+'] * ut + arr['+(j+1)+'] * t')
	      } else
	      if (n > 1) {
	        fn.push('p'+j+' = p'+j+' * ut + p'+(j+1)+' * t')
	      } else {
	        fn.push('return p'+j+' * ut + p'+(j+1)+' * t')
	      }
	    }
	    if (n > 1) fn.push('')
	  }

	  fn = [
	    'return function bezier'+pieces+'(arr, t) {'
	    , fn.map(function(s) { return '  ' + s }).join('\n')
	    , '}'
	  ].join('\n')

	  return Function(fn)()
	}

	//
	// Including the first four degrees
	// manually - there's a slight performance penalty
	// to generated code. It's outweighed by
	// the gains of the optimisations, but always
	// helps to cover the most common cases :)
	//

	function bezier1(arr) {
	  return arr[0]
	}

	function bezier2(arr, t) {
	  return arr[0] + (arr[1] - arr[0]) * t
	}

	function bezier3(arr, t) {
	  var ut = 1 - t
	  return (arr[0] * ut + arr[1] * t) * ut + (arr[1] * ut + arr[2] * t) * t
	}

	function bezier4(arr, t) {
	  var ut = 1 - t
	  var a1 = arr[1] * ut + arr[2] * t
	  return ((arr[0] * ut + arr[1] * t) * ut + a1 * t) * ut + (a1 * ut + (arr[2] * ut + arr[3] * t) * t) * t
	}


/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	/*!	Curve calc function for canvas 2.3.4
	 *	(c) Epistemex 2013-2016
	 *	www.epistemex.com
	 *	License: MIT
	 */

	/**
	 * Calculates an array containing points representing a cardinal spline through given point array.
	 * Points must be arranged as: [x1, y1, x2, y2, ..., xn, yn].
	 *
	 * The points for the cardinal spline are returned as a new array.
	 *
	 * @param {Array} points - point array
	 * @param {Number} [tension=0.5] - tension. Typically between [0.0, 1.0] but can be exceeded
	 * @param {Number} [numOfSeg=25] - number of segments between two points (line resolution)
	 * @param {Boolean} [close=false] - Close the ends making the line continuous
	 * @returns {Float32Array} New array with the calculated points that was added to the path
	 */
	function getCurvePoints(points, tension, numOfSeg, close) {

		'use strict';

		// options or defaults
		tension = (typeof tension === 'number') ? tension : 0.5;
		numOfSeg = (typeof numOfSeg === 'number') ? numOfSeg : 25;

		var pts,															// for cloning point array
			i = 1,
			l = points.length,
			rPos = 0,
			rLen = (l-2) * numOfSeg + 2 + (close ? 2 * numOfSeg: 0),
			res = new Float32Array(rLen),
			cache = new Float32Array((numOfSeg + 2) * 4),
			cachePtr = 4;

		pts = points.slice(0);

		if (close) {
			pts.unshift(points[l - 1]);										// insert end point as first point
			pts.unshift(points[l - 2]);
			pts.push(points[0], points[1]); 								// first point as last point
		}
		else {
			pts.unshift(points[1]);											// copy 1. point and insert at beginning
			pts.unshift(points[0]);
			pts.push(points[l - 2], points[l - 1]);							// duplicate end-points
		}

		// cache inner-loop calculations as they are based on t alone
		cache[0] = 1;														// 1,0,0,0

		for (; i < numOfSeg; i++) {

			var st = i / numOfSeg,
				st2 = st * st,
				st3 = st2 * st,
				st23 = st3 * 2,
				st32 = st2 * 3;

			cache[cachePtr++] =	st23 - st32 + 1;							// c1
			cache[cachePtr++] =	st32 - st23;								// c2
			cache[cachePtr++] =	st3 - 2 * st2 + st;							// c3
			cache[cachePtr++] =	st3 - st2;									// c4
		}

		cache[++cachePtr] = 1;												// 0,1,0,0

		// calc. points
		parse(pts, cache, l, tension);

		if (close) {
			//l = points.length;
			pts = [];
			pts.push(points[l - 4], points[l - 3],
					 points[l - 2], points[l - 1], 							// second last and last
					 points[0], points[1],
					 points[2], points[3]); 								// first and second
			parse(pts, cache, 4, tension);
		}

		function parse(pts, cache, l, tension) {

			for (var i = 2, t; i < l; i += 2) {

				var pt1 = pts[i],
					pt2 = pts[i+1],
					pt3 = pts[i+2],
					pt4 = pts[i+3],

					t1x = (pt3 - pts[i-2]) * tension,
					t1y = (pt4 - pts[i-1]) * tension,
					t2x = (pts[i+4] - pt1) * tension,
					t2y = (pts[i+5] - pt2) * tension,
					c = 0, c1, c2, c3, c4;

				for (t = 0; t < numOfSeg; t++) {

					c1 = cache[c++];
					c2 = cache[c++];
					c3 = cache[c++];
					c4 = cache[c++];

					res[rPos++] = c1 * pt1 + c2 * pt3 + c3 * t1x + c4 * t2x;
					res[rPos++] = c1 * pt2 + c2 * pt4 + c3 * t1y + c4 * t2y;
				}
			}
		}

		// add last point
		l = close ? 0 : points.length - 2;
		res[rPos++] = points[l++];
		res[rPos] = points[l];

		return res;
	}

	if (true) exports.getCurvePoints = getCurvePoints;


/***/ },

/***/ 544:
/***/ function(module, exports) {

	

	function interpolate(t, order, points, knots, weights, result) {

	  var n = points.length;    // points count
	  var d = points[0].length; // point dimensionality

	  if(order < 2) throw new Error('order must be at least 2 (linear)');
	  if(order > n) throw new Error('order must be less than point count');

	  if(!weights) {
	    // build weight vector
	    weights = new Array(n);
	    for(var i=0; i<n; i++) {
	      weights[i] = 1;
	    }
	  }

	  if(!knots) {
	    // build knot vector
	    var knots = new Array(n + order);
	    for(var i=0; i<n+order; i++) {
	      knots[i] = i;
	    }
	  } else {
	    if(knots.length !== n+order) throw new Error('bad knot vector length');
	  }

	  var domain = [
	    order-1,
	    knots.length-1 - (order-1)
	  ];

	  // remap t to the domain where the spline is defined
	  var low  = knots[domain[0]];
	  var high = knots[domain[1]];
	  t = t * (high - low) + low;

	  if(t < low || t > high) throw new Error('out of bounds');

	  for(var s=domain[0]; s<domain[1]; s++) {
	    if(t >= knots[s] && t <= knots[s+1]) {
	      break;
	    }
	  }

	  // convert points to homogeneous coordinates
	  var v = new Array(n);
	  for(var i=0; i<n; i++) {
	    v[i] = new Array(d + 1);
	    for(var j=0; j<d; j++) {
	      v[i][j] = points[i][j] * weights[i];
	    }
	    v[i][d] = weights[i];
	  }

	  // l (level) goes from 1 to the curve order
	  for(var l=1; l<=order; l++) {
	    // build level l of the pyramid
	    for(var i=s; i>s-order+l; i--) {
	      var a = (t - knots[i]) / (knots[i+order-l] - knots[i]);

	      // interpolate each component
	      for(var j=0; j<d+1; j++) {
	        v[i][j] = (1 - a) * v[i-1][j] + a * v[i][j];
	      }
	    }
	  }

	  // convert back to cartesian and return
	  var result = result || new Array(d);
	  for(var i=0; i<d; i++) {
	    result[i] = v[s][i] / v[s][d];
	  }

	  return result;
	}


	module.exports = interpolate;

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @authors 祝志颖 (c0de4ac@baicizhan.com)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date    2016-03-5 15:12
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @version 1.0.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _point2 = __webpack_require__(541);

	var _point3 = _interopRequireDefault(_point2);

	var _triangle = __webpack_require__(546);

	var _triangle2 = _interopRequireDefault(_triangle);

	var _line = __webpack_require__(547);

	var _line2 = _interopRequireDefault(_line);

	var _edge = __webpack_require__(548);

	var _edge2 = _interopRequireDefault(_edge);

	var _contourline = __webpack_require__(540);

	var _contourline2 = _interopRequireDefault(_contourline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContourTrance = function () {
	    function ContourTrance(triangleList, zMin, zMax, step) {
	        _classCallCheck(this, ContourTrance);

	        this.dMax = Number.POSITIVE_INFINITY;
	        this.dMin = Number.NEGATIVE_INFINITY;
	        this.lineValue = [];
	        this.lineNum = 10;
	        this.pointList = [];
	        this.edgeList = [];
	        this.triCheckIndex = new Set();
	        this.triTotal = [];
	        this.edgeBandIndex = [];
	        this.contourLine = [];

	        this.triangleNetWork = triangleList;
	        this.dMin = zMin;
	        this.dMax = zMax;
	        this.step = step;
	        this.initial();
	    }
	    //triBandIndex = [];


	    _createClass(ContourTrance, [{
	        key: 'initial',
	        value: function initial() {
	            var numTriangle = this.triangleNetWork.length;
	            if (numTriangle < 2) return;

	            for (var i = 0; i < numTriangle; i++) {
	                var triangle = this.triangleNetWork[i];
	                var tempPoint0 = this.assetPoint(new _point3.default(triangle[0].x, triangle[0].y, triangle[0].z));
	                var tempPoint1 = this.assetPoint(new _point3.default(triangle[1].x, triangle[1].y, triangle[1].z));
	                var tempPoint2 = this.assetPoint(new _point3.default(triangle[2].x, triangle[2].y, triangle[2].z));
	                if (tempPoint0.id == -1) {
	                    tempPoint0.id = this.pointList.length;
	                    this.pointList.push(tempPoint0);
	                }
	                if (tempPoint1.id == -1) {
	                    tempPoint1.id = this.pointList.length;
	                    this.pointList.push(tempPoint1);
	                }
	                if (tempPoint2.id == -1) {
	                    tempPoint2.id = this.pointList.length;
	                    this.pointList.push(tempPoint2);
	                }

	                var tempEdge0 = this.assetEdge(new _edge2.default(tempPoint0.id, tempPoint1.id));
	                var tempEdge1 = this.assetEdge(new _edge2.default(tempPoint1.id, tempPoint2.id));
	                var tempEdge2 = this.assetEdge(new _edge2.default(tempPoint2.id, tempPoint0.id));

	                if (tempEdge0.id == -1) {
	                    tempEdge0.id = this.edgeList.length;
	                    this.edgeList.push(tempEdge0);
	                }
	                tempPoint0.listIdEdge.push(tempEdge0.id);
	                tempPoint1.listIdEdge.push(tempEdge0.id);
	                if (tempEdge1.id == -1) {
	                    tempEdge1.id = this.edgeList.length;
	                    this.edgeList.push(tempEdge1);
	                }
	                tempPoint1.listIdEdge.push(tempEdge1.id);
	                tempPoint2.listIdEdge.push(tempEdge1.id);
	                if (tempEdge2.id == -1) {
	                    tempEdge2.id = this.edgeList.length;
	                    this.edgeList.push(tempEdge2);
	                }
	                tempPoint2.listIdEdge.push(tempEdge2.id);
	                tempPoint0.listIdEdge.push(tempEdge2.id);

	                var tempTriangle = new _triangle2.default();
	                tempTriangle.id = this.triTotal.length;
	                tempTriangle.edgeIndex.push(tempEdge0.id);
	                tempTriangle.edgeIndex.push(tempEdge1.id);
	                tempTriangle.edgeIndex.push(tempEdge2.id);
	                tempTriangle.pointIndex.push(tempPoint0.id);
	                tempTriangle.pointIndex.push(tempPoint1.id);
	                tempTriangle.pointIndex.push(tempPoint2.id);
	                this.triTotal.push(tempTriangle);

	                tempPoint0.listIdTri.push(tempTriangle.id);
	                tempPoint1.listIdTri.push(tempTriangle.id);
	                tempPoint2.listIdTri.push(tempTriangle.id);
	                tempEdge0.listTri.push(tempTriangle.id);
	                tempEdge1.listTri.push(tempTriangle.id);
	                tempEdge2.listTri.push(tempTriangle.id);
	                tempEdge0.numRef++;
	                tempEdge1.numRef++;
	                tempEdge2.numRef++;
	            }

	            for (var _i = 0; _i < this.edgeList.length; _i++) {
	                if (this.edgeList[_i].numRef < 2) {
	                    this.edgeBandIndex.push(this.edgeList[_i].id);
	                }
	            }
	        }
	    }, {
	        key: 'assetPoint',
	        value: function assetPoint(point) {
	            for (var i = 0; i < this.pointList.length; i++) {
	                var t = this.pointList[i];
	                if (point.x == t.x && point.y == t.y) {
	                    point = this.pointList[i];
	                    break;
	                }
	            }
	            return point;
	        }
	    }, {
	        key: 'assetEdge',
	        value: function assetEdge(edge) {
	            var isNew = true;
	            for (var i = 0; i < this.edgeList.length; i++) {
	                var e = this.edgeList[i];
	                if (edge.endId == e.endId && edge.startId == e.startId || edge.endId == e.startId && edge.startId == e.endId) {
	                    edge = this.edgeList[i];
	                    isNew = false;
	                }
	            }
	            return edge;
	        }
	    }, {
	        key: 'assetValue',
	        value: function assetValue(value) {
	            //todo
	        }
	    }, {
	        key: 'contourPointCalc',
	        value: function contourPointCalc(val, start, end) {
	            var tempP = new _point3.default(0, 0, val);
	            var v0 = this.pointList[start].z;
	            var v1 = this.pointList[end].z;
	            var d = (v0 - val) * (v1 - val);
	            var temp = (val - v0) / (v1 - v0);
	            tempP.x = this.pointList[start].x + temp * (this.pointList[end].x - this.pointList[start].x);
	            tempP.y = this.pointList[start].y + temp * (this.pointList[end].y - this.pointList[start].y);
	            return tempP;
	        }
	    }, {
	        key: 'contourLineCalc',
	        value: function contourLineCalc() {
	            for (var i = this.dMin + 1 | 0; i < (this.dMax | 0); i++) {
	                if (i % this.step == 0) {
	                    this.lineValue.push(i);
	                }
	            }
	        }
	    }, {
	        key: 'contourLineTrace',
	        value: function contourLineTrace() {
	            this.contourLineCalc();

	            for (var i = 0; i < this.lineValue.length; i++) {
	                var conVal = this.lineValue[i];
	                this.triCheckIndex.clear();

	                for (var iTri = 0; iTri < this.triTotal.length; iTri++) {
	                    var tempV0 = this.pointList[this.triTotal[iTri].pointIndex[0]].z;
	                    var tempV1 = this.pointList[this.triTotal[iTri].pointIndex[1]].z;
	                    var tempV2 = this.pointList[this.triTotal[iTri].pointIndex[2]].z;

	                    if ((tempV0 - conVal) * (tempV1 - conVal) <= 0) {
	                        //console.log((tempV0 - conVal) * (tempV1 - conVal));
	                        this.triCheckIndex.add(this.triTotal[iTri].id);
	                        continue;
	                    }
	                    if ((tempV1 - conVal) * (tempV2 - conVal) <= 0) {
	                        //console.log((tempV1 - conVal) * (tempV2 - conVal));
	                        this.triCheckIndex.add(this.triTotal[iTri].id);
	                        continue;
	                    }
	                    if ((tempV2 - conVal) * (tempV0 - conVal) <= 0) {
	                        //console.log((tempV2 - conVal) * (tempV0 - conVal));
	                        this.triCheckIndex.add(this.triTotal[iTri].id);
	                        continue;
	                    }
	                }
	                if (this.triCheckIndex.size < 2) {
	                    continue;
	                }

	                for (var iBound = 0; iBound < this.edgeBandIndex.length; iBound++) {
	                    var edge = this.edgeBandIndex[iBound];
	                    var conLine = new _contourline2.default();
	                    if (this.isContourOnEdge(conVal, edge)) {
	                        var conPoint = this.contourPointCalc(conVal, this.edgeList[edge].startId, this.edgeList[edge].endId);
	                        conPoint.listIdEdge.push(edge);
	                        conLine.listPoint.push(conPoint);

	                        while (this.triCheckIndex.size > 0) {
	                            var tri = this.searchTriangle(edge);
	                            if (tri == -1) {
	                                break;
	                            }
	                            var outEdge = this.traceTriangle(conVal, tri, edge);
	                            if (outEdge != -1) {
	                                edge = outEdge;
	                                if (this.isContourOnEdge(conVal, outEdge)) {
	                                    var conOutPoint = this.contourPointCalc(conVal, this.edgeList[outEdge].startId, this.edgeList[outEdge].endId);
	                                    conOutPoint.listIdEdge.push(outEdge);
	                                    conLine.listPoint.push(conOutPoint);
	                                }
	                                if (this.edgeList[outEdge].numRef < 2) {
	                                    conLine.type = 0;
	                                    conLine.value = conVal;
	                                    console.log(conLine);
	                                    this.contourLine.push(conLine);
	                                    conLine = new _contourline2.default();
	                                    break;
	                                }
	                            }
	                        }
	                        if (this.triCheckIndex.size < 1) {
	                            break;
	                        }
	                    }
	                }

	                if (this.triCheckIndex.size > 2) {
	                    var tempEdgeIndex = -1;
	                    while (this.triCheckIndex.size > 0) {
	                        var _tri = null;
	                        var _iteratorNormalCompletion = true;
	                        var _didIteratorError = false;
	                        var _iteratorError = undefined;

	                        try {
	                            for (var _iterator = this.triCheckIndex.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                var x = _step.value;

	                                _tri = x;
	                                break;
	                            }
	                        } catch (err) {
	                            _didIteratorError = true;
	                            _iteratorError = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion && _iterator.return) {
	                                    _iterator.return();
	                                }
	                            } finally {
	                                if (_didIteratorError) {
	                                    throw _iteratorError;
	                                }
	                            }
	                        }

	                        this.triCheckIndex.delete(_tri);
	                        var _conLine = new _contourline2.default();
	                        var tempTri = this.triTotal[_tri];
	                        for (var j = 0; j < tempTri.edgeIndex.length; j++) {
	                            if (this.isContourOnEdge(conVal, tempTri.edgeIndex[j])) {
	                                tempEdgeIndex = tempTri.edgeIndex[j];
	                                var conTempPoint = this.contourPointCalc(conVal, this.edgeList[tempEdgeIndex].startId, this.edgeList[tempEdgeIndex].endId);
	                                conTempPoint.listIdEdge.push(tempEdgeIndex);
	                                _conLine.listPoint.push(conTempPoint);
	                                break;
	                            }
	                        }

	                        while (this.triCheckIndex.size > 0) {
	                            var newTriangle = this.searchTriangle(tempEdgeIndex);
	                            if (newTriangle == -1) {
	                                var point = _conLine.listPoint.slice(-1)[0];
	                                _conLine.type = 1;
	                                if (point && this.isEdgeTriangleOnBand(point.listIdEdge[0])) {
	                                    _conLine.type = 0;
	                                }
	                                _conLine.value = conVal;
	                                this.contourLine.push(_conLine);
	                                _conLine = new _contourline2.default();
	                                break;
	                            }
	                            var newEdge = this.traceTriangle(conVal, newTriangle, tempEdgeIndex);
	                            if (newEdge != -1) {
	                                tempEdgeIndex = newEdge;
	                                if (this.isContourOnEdge(conVal, newEdge)) {
	                                    var _conTempPoint = this.contourPointCalc(conVal, this.edgeList[tempEdgeIndex].startId, this.edgeList[tempEdgeIndex].endId);
	                                    _conTempPoint.listIdEdge.push(tempEdgeIndex);
	                                    _conLine.listPoint.push(_conTempPoint);
	                                }
	                            }
	                            if (this.triCheckIndex.size == 0) {
	                                var _point = _conLine.listPoint.slice(-1)[0];
	                                console.log(_point);
	                                _conLine.type = 1;
	                                if (_point && this.isEdgeTriangleOnBand(_point.listIdEdge[0])) {
	                                    _conLine.type = 0;
	                                }
	                                _conLine.value = conVal;
	                                //console.log(conLine);
	                                this.contourLine.push(_conLine);
	                                _conLine = new _contourline2.default();
	                                break;
	                            }
	                        }
	                    }
	                }
	            }
	            return this.contourLine;
	        }
	    }, {
	        key: 'isEdgeTriangleOnBand',
	        value: function isEdgeTriangleOnBand(edgeId) {
	            console.log('checking');
	            var edge = this.edgeList[edgeId];
	            for (var t = 0; t < edge.listTri.length; t++) {
	                var tri = this.triTotal[edge.listTri[t]];
	                for (var i = 0; i < tri.edgeIndex.length; i++) {
	                    if (this.edgeList[tri.edgeIndex[i]].numRef < 2) {
	                        return true;
	                    }
	                }
	            }
	            return false;
	        }
	    }, {
	        key: 'isContourOnEdge',
	        value: function isContourOnEdge(value, edgeIndex) {
	            var edge = this.edgeList[edgeIndex];
	            var P1 = this.pointList[edge.startId];
	            var P2 = this.pointList[edge.endId];

	            var d = (P1.z - value) * (P2.z - value);
	            //console.log(d);
	            if (d == 0) {
	                for (var i = 0; i < this.pointList.length; i++) {
	                    if (Math.abs(this.pointList[i].z - value) < 0.00000001) {
	                        this.pointList[i].z += 0.0001;
	                    }
	                }
	                return true;
	            } else if (d < 0) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: 'searchTriangle',
	        value: function searchTriangle(edgeIndex) {
	            var edge = this.edgeList[edgeIndex];
	            for (var i = 0; i < edge.listTri.length; i++) {
	                if (this.triCheckIndex.has(edge.listTri[i])) {
	                    this.triCheckIndex.delete(edge.listTri[i]);
	                    return edge.listTri[i];
	                }
	            }
	            return -1;
	        }
	    }, {
	        key: 'traceTriangle',
	        value: function traceTriangle(contourValue, TriIndex, edgeIndex) {
	            var triangle = this.triTotal[TriIndex];
	            var tempEdge = [];
	            tempEdge.push(this.edgeList[triangle.edgeIndex[0]]);
	            tempEdge.push(this.edgeList[triangle.edgeIndex[1]]);
	            tempEdge.push(this.edgeList[triangle.edgeIndex[2]]);
	            for (var i = 0; i < tempEdge.length; i++) {
	                var edge = tempEdge[i];
	                if (edge.id != edgeIndex) {
	                    var d = (this.pointList[edge.startId].z - contourValue) * (this.pointList[edge.endId].z - contourValue);
	                    if (d <= 0) {
	                        return edge.id;
	                    }
	                }
	            }
	            return -1;
	        }
	    }, {
	        key: 'traceFill',
	        value: function traceFill() {
	            //todo
	        }
	    }]);

	    return ContourTrance;
	}();

	exports.default = ContourTrance;

/***/ },

/***/ 546:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *
	 * @authors 祝志颖 (c0de4ac@baicizhan.com)
	 * @date    2016-03-06 15:12
	 * @version 1.0.0
	 */

	var CTriangle = function CTriangle() {
	    _classCallCheck(this, CTriangle);

	    this.id = -1;
	    this.edgeIndex = [];
	    this.pointIndex = [];
	};

	exports.default = CTriangle;

/***/ },

/***/ 547:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *
	 * @authors 祝志颖 (c0de4ac@baicizhan.com)
	 * @date    2016-03-06 15:12
	 * @version 1.0.0
	 */

	var CLine = function () {
	    function CLine() {
	        _classCallCheck(this, CLine);

	        this.listPoints = [];
	    }

	    _createClass(CLine, [{
	        key: "start",
	        value: function start() {
	            return this.listPoints[0];
	        }
	    }, {
	        key: "end",
	        value: function end() {
	            var length = this.listPoints.length;
	            return this.listPoints[length - 1];
	        }
	    }, {
	        key: "insertPoint",
	        value: function insertPoint(point) {
	            //todo
	        }
	    }]);

	    return CLine;
	}();

	exports.default = CLine;

/***/ },

/***/ 548:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *
	 * @authors 祝志颖 (c0de4ac@baicizhan.com)
	 * @date    2016-03-06 15:12
	 * @version 1.0.0
	 */

	var CEdge = function CEdge(start, end) {
	    _classCallCheck(this, CEdge);

	    this.id = -1;
	    this.numRef = 0;
	    this.listTri = [];
	    this.startId = start;
	    this.endId = end;
	};

	exports.default = CEdge;

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _modal = __webpack_require__(405);

	var _modal2 = _interopRequireDefault(_modal);

	var _button = __webpack_require__(446);

	var _button2 = _interopRequireDefault(_button);

	var _message = __webpack_require__(451);

	var _message2 = _interopRequireDefault(_message);

	var _radio = __webpack_require__(529);

	var _radio2 = _interopRequireDefault(_radio);

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);
	var RadioButton = _radio2.default.Button;
	var RadioGroup = _radio2.default.Group;

	var TriSetting = function (_React$Component) {
	    _inherits(TriSetting, _React$Component);

	    function TriSetting() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, TriSetting);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TriSetting)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            showModal: false,
	            selected: null,
	            type: '0',
	            file: null,
	            callback: null
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(TriSetting, [{
	        key: 'open',
	        value: function open(callback) {
	            this.setState({ showModal: true, callback: callback });
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            this.setState({ showModal: false });
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            this.setState({ type: e.target.value });
	        }
	    }, {
	        key: 'handleSelect',
	        value: function handleSelect(layer) {
	            this.setState({ selected: layer });
	        }
	    }, {
	        key: 'handleOk',
	        value: function handleOk() {
	            var _this2 = this;

	            if (this.state.selected) {
	                (function () {
	                    _this2.close();
	                    var selecetedFeatures = _this2.props.map.refs.map.select.getFeatures();
	                    selecetedFeatures.clear();
	                    if (_this2.state.type == '0') {
	                        var source = _this2.state.selected.getSource();
	                        var features = source.getFeatures();
	                        features.forEach(function (feature) {
	                            var geom = feature.getGeometry();
	                            if (geom instanceof ol.geom.Point) {
	                                selecetedFeatures.push(feature);
	                            }
	                        });
	                        if (_this2.state.callback != null) {
	                            _this2.state.callback(selecetedFeatures);
	                        }
	                    } else {
	                        (function () {
	                            var hide = _message2.default.info('请选择地图上的高程点!', 0);
	                            var promise = new Promise(function (resolve, reject) {
	                                var dragbox = _this2.props.map.refs.map.dragBox;
	                                dragbox.once('boxend', function () {
	                                    var extent = dragbox.getGeometry().getExtent();
	                                    _this2.state.selected.getSource().forEachFeatureIntersectingExtent(extent, function (feature) {
	                                        var geom = feature.getGeometry();
	                                        if (geom instanceof ol.geom.Point) {
	                                            selecetedFeatures.push(feature);
	                                        }
	                                    });
	                                    resolve(selecetedFeatures);
	                                });
	                                setTimeout(reject, 30000);
	                            });
	                            promise.then(function (features) {
	                                hide();
	                                if (_this2.state.callback != null) {
	                                    _this2.state.callback(features);
	                                }
	                            }, function () {
	                                hide();
	                                _message2.default.info('选择高程点超时!', 2);
	                            });
	                        })();
	                    }
	                })();
	            } else {
	                _message2.default.info('还没有选择图层', 2);
	            }
	        }
	    }, {
	        key: 'renderLayerList',
	        value: function renderLayerList() {
	            var _this3 = this;

	            if (this.props.layers != null) {
	                var _ret4 = function () {
	                    var rows = [];
	                    _this3.props.layers.forEach(function (layer, index, arr) {
	                        var checked = false;
	                        if (layer == _this3.state.selected) {
	                            checked = true;
	                        }
	                        rows.push(React.createElement(
	                            'tr',
	                            { key: index },
	                            React.createElement(
	                                'td',
	                                null,
	                                ' ',
	                                React.createElement(_radio2.default, { type: 'radio', checked: checked, onClick: _this3.handleSelect.bind(_this3, layer), readOnly: true })
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                index
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                layer.get('name') || 'Undefined'
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                '否'
	                            )
	                        ));
	                    });
	                    return {
	                        v: rows
	                    };
	                }();

	                if ((typeof _ret4 === 'undefined' ? 'undefined' : _typeof(_ret4)) === "object") return _ret4.v;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _modal2.default,
	                { title: '生成三角网', visible: this.state.showModal, onCancel: this.close.bind(this),
	                    footer: React.createElement(
	                        _button2.default,
	                        { type: 'primary', onClick: this.handleOk.bind(this) },
	                        '确定'
	                    ) },
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'h5',
	                        null,
	                        '选择离散点图层'
	                    ),
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
	                                    '选择'
	                                ),
	                                React.createElement(
	                                    'th',
	                                    null,
	                                    '编号'
	                                ),
	                                React.createElement(
	                                    'th',
	                                    null,
	                                    '图层名'
	                                ),
	                                React.createElement(
	                                    'th',
	                                    null,
	                                    '锁定'
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            'tbody',
	                            null,
	                            this.renderLayerList()
	                        )
	                    ),
	                    React.createElement(
	                        RadioGroup,
	                        { value: this.state.type, onChange: this.onChange.bind(this) },
	                        React.createElement(
	                            _radio2.default,
	                            { value: '0' },
	                            '使用图层全部点'
	                        ),
	                        React.createElement(
	                            _radio2.default,
	                            { value: '1' },
	                            '框选部分数据'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return TriSetting;
	}(React.Component);

	exports.default = TriSetting;

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _modal = __webpack_require__(405);

	var _modal2 = _interopRequireDefault(_modal);

	var _row = __webpack_require__(551);

	var _row2 = _interopRequireDefault(_row);

	var _col = __webpack_require__(555);

	var _col2 = _interopRequireDefault(_col);

	var _input = __webpack_require__(556);

	var _input2 = _interopRequireDefault(_input);

	var _button = __webpack_require__(446);

	var _button2 = _interopRequireDefault(_button);

	var _form = __webpack_require__(557);

	var _form2 = _interopRequireDefault(_form);

	var _radio = __webpack_require__(529);

	var _radio2 = _interopRequireDefault(_radio);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);
	var RadioButton = _radio2.default.Button;
	var RadioGroup = _radio2.default.Group;
	var FormItem = _form2.default.Item;

	var ContourSetting = function (_React$Component) {
	    _inherits(ContourSetting, _React$Component);

	    function ContourSetting() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, ContourSetting);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ContourSetting)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            showModal: false,
	            selected: null,
	            type: '0',
	            file: null,
	            step: 1,
	            callback: null
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(ContourSetting, [{
	        key: 'open',
	        value: function open(callback) {
	            this.setState({ showModal: true, callback: callback });
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            this.setState({ showModal: false });
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            console.log('radio checked:' + e.target.value);
	            this.setState({ type: e.target.value });
	        }
	    }, {
	        key: 'handleSelect',
	        value: function handleSelect(layer) {
	            console.log(layer);
	            this.setState({ selected: layer });
	        }
	    }, {
	        key: 'handleOk',
	        value: function handleOk() {
	            if (this.state.callback != null) {
	                this.state.callback(this.state.step, this.state.type);
	            }
	            this.close();
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(e) {
	            this.setState({ step: e.target.value });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _modal2.default,
	                { title: '生成等高线', visible: this.state.showModal, onCancel: this.close.bind(this),
	                    footer: React.createElement(
	                        _button2.default,
	                        { type: 'primary', onClick: this.handleOk.bind(this) },
	                        '确定'
	                    ) },
	                React.createElement(
	                    _row2.default,
	                    null,
	                    React.createElement(
	                        _col2.default,
	                        { span: '8' },
	                        React.createElement(
	                            FormItem,
	                            {
	                                label: '最小高程：',
	                                labelCol: { span: 10 },
	                                wrapperCol: { span: 14 } },
	                            React.createElement(_input2.default, { disabled: true, value: this.props.zMin || 0 })
	                        )
	                    ),
	                    React.createElement(
	                        _col2.default,
	                        { span: '8' },
	                        React.createElement(
	                            FormItem,
	                            {
	                                label: '最大高程：',
	                                labelCol: { span: 10 },
	                                wrapperCol: { span: 14 } },
	                            React.createElement(_input2.default, { disabled: true, value: this.props.zMax || 0 })
	                        )
	                    ),
	                    React.createElement(
	                        _col2.default,
	                        { span: '8' },
	                        React.createElement(
	                            FormItem,
	                            {
	                                label: '等高距：',
	                                labelCol: { span: 10 },
	                                wrapperCol: { span: 14 } },
	                            React.createElement(_input2.default, { value: this.state.step, onChange: this.handleChange.bind(this) })
	                        )
	                    ),
	                    React.createElement(
	                        _col2.default,
	                        { span: '24' },
	                        React.createElement(
	                            'p',
	                            { style: { marginTop: 10 } },
	                            '等高线光滑参数设置'
	                        ),
	                        React.createElement(
	                            RadioGroup,
	                            { value: this.state.type, onChange: this.onChange.bind(this) },
	                            React.createElement(
	                                _radio2.default,
	                                { value: '0' },
	                                '不平滑'
	                            ),
	                            React.createElement(
	                                _radio2.default,
	                                { value: '1' },
	                                '三次B样条函数平滑'
	                            ),
	                            React.createElement(
	                                _radio2.default,
	                                { value: '2' },
	                                '张力样条函数平滑'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ContourSetting;
	}(React.Component);

	exports.default = ContourSetting;

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _layout = __webpack_require__(552);

	exports.default = _layout.Row;
	module.exports = exports['default'];

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Col = exports.Row = undefined;

	var _row = __webpack_require__(553);

	var _row2 = _interopRequireDefault(_row);

	var _col = __webpack_require__(554);

	var _col2 = _interopRequireDefault(_col);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Row = _row2.default;
	exports.Col = _col2.default;

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(195);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Row = _react2.default.createClass({
	  displayName: 'Row',

	  propTypes: {
	    type: _react2.default.PropTypes.string,
	    align: _react2.default.PropTypes.string,
	    justify: _react2.default.PropTypes.string,
	    className: _react2.default.PropTypes.string,
	    children: _react2.default.PropTypes.node
	  },
	  render: function render() {
	    var _classNames;

	    var _props = this.props;
	    var type = _props.type;
	    var justify = _props.justify;
	    var align = _props.align;
	    var className = _props.className;

	    var others = _objectWithoutProperties(_props, ['type', 'justify', 'align', 'className']);

	    var classes = (0, _classnames2.default)((_classNames = {
	      'row': true
	    }, _defineProperty(_classNames, 'row-' + type, type), _defineProperty(_classNames, 'row-' + type + '-' + justify, justify), _defineProperty(_classNames, 'row-' + type + '-' + align, align), _defineProperty(_classNames, className, className), _classNames));
	    return _react2.default.createElement(
	      'div',
	      _extends({}, others, { className: classes }),
	      this.props.children
	    );
	  }
	});

	exports.default = Row;
	module.exports = exports['default'];

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(195);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Col = _react2.default.createClass({
	  displayName: 'Col',

	  propTypes: {
	    span: _react2.default.PropTypes.string,
	    order: _react2.default.PropTypes.string,
	    offset: _react2.default.PropTypes.string,
	    push: _react2.default.PropTypes.string,
	    pull: _react2.default.PropTypes.string,
	    className: _react2.default.PropTypes.string,
	    children: _react2.default.PropTypes.node
	  },
	  render: function render() {
	    var _classNames;

	    var _props = this.props;
	    var span = _props.span;
	    var order = _props.order;
	    var offset = _props.offset;
	    var push = _props.push;
	    var pull = _props.pull;
	    var className = _props.className;

	    var others = _objectWithoutProperties(_props, ['span', 'order', 'offset', 'push', 'pull', 'className']);

	    var classes = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'col-' + span, span), _defineProperty(_classNames, 'col-order-' + order, order), _defineProperty(_classNames, 'col-offset-' + offset, offset), _defineProperty(_classNames, 'col-push-' + push, push), _defineProperty(_classNames, 'col-pull-' + pull, pull), _defineProperty(_classNames, className, className), _classNames));
	    return _react2.default.createElement(
	      'div',
	      _extends({}, others, { className: classes }),
	      this.props.children
	    );
	  }
	});

	exports.default = Col;
	module.exports = exports['default'];

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _layout = __webpack_require__(552);

	exports.default = _layout.Col;
	module.exports = exports['default'];

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(432);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function prefixClsFn(prefixCls) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  return args.map(function (s) {
	    return prefixCls + '-' + s;
	  }).join(' ');
	}

	function ieGT9() {
	  if ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) === undefined) {
	    return false;
	  }
	  var documentMode = document.documentMode || 0;
	  return documentMode > 9;
	}

	function fixControlledValue(value) {
	  if (typeof value === 'undefined' || value === null) {
	    return '';
	  }
	  return value;
	}

	var Group = function (_React$Component) {
	  _inherits(Group, _React$Component);

	  function Group() {
	    _classCallCheck(this, Group);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Group).apply(this, arguments));
	  }

	  _createClass(Group, [{
	    key: 'render',
	    value: function render() {
	      var className = 'ant-input-group ' + (this.props.className || '');
	      return _react2.default.createElement(
	        'span',
	        { className: className,
	          style: this.props.style },
	        this.props.children
	      );
	    }
	  }]);

	  return Group;
	}(_react2.default.Component);

	Group.propTypes = {
	  children: _react2.default.PropTypes.any
	};

	var Input = function (_React$Component2) {
	  _inherits(Input, _React$Component2);

	  function Input() {
	    _classCallCheck(this, Input);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
	  }

	  _createClass(Input, [{
	    key: 'renderLabledInput',
	    value: function renderLabledInput(children) {
	      var props = this.props;
	      var wrapperClassName = prefixClsFn(props.prefixCls, 'input-group');
	      var addonClassName = prefixClsFn(wrapperClassName, 'addon');
	      var addonBefore = props.addonBefore ? _react2.default.createElement(
	        'span',
	        { className: addonClassName },
	        props.addonBefore
	      ) : null;

	      var addonAfter = props.addonAfter ? _react2.default.createElement(
	        'span',
	        { className: addonClassName },
	        props.addonAfter
	      ) : null;

	      return _react2.default.createElement(
	        'span',
	        { className: addonBefore || addonAfter ? wrapperClassName : '' },
	        addonBefore,
	        children,
	        addonAfter
	      );
	    }
	  }, {
	    key: 'renderInput',
	    value: function renderInput() {
	      var props = (0, _objectAssign2.default)({}, this.props);
	      var prefixCls = props.prefixCls;
	      var inputClassName = prefixClsFn(prefixCls, 'input');
	      if (!props.type) {
	        return props.children;
	      }

	      switch (props.size) {
	        case 'small':
	          inputClassName = prefixClsFn(prefixCls, 'input', 'input-sm');break;
	        case 'large':
	          inputClassName = prefixClsFn(prefixCls, 'input', 'input-lg');break;
	        default:
	      }
	      var placeholder = props.placeholder;
	      if (placeholder && ieGT9()) {
	        placeholder = null;
	      }
	      if ('value' in props) {
	        props.value = fixControlledValue(props.value);
	      }
	      switch (props.type) {
	        case 'textarea':
	          return _react2.default.createElement('textarea', _extends({}, props, { placeholder: placeholder, className: inputClassName, ref: 'input' }));
	        default:
	          inputClassName = props.className ? props.className : inputClassName;
	          return _react2.default.createElement('input', _extends({}, props, { placeholder: placeholder, className: inputClassName, ref: 'input' }));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.renderLabledInput(this.renderInput());
	    }
	  }]);

	  return Input;
	}(_react2.default.Component);

	Input.propTypes = {
	  type: _react2.default.PropTypes.string,
	  id: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  size: _react2.default.PropTypes.oneOf(['small', 'default', 'large']),
	  disabled: _react2.default.PropTypes.bool,
	  value: _react2.default.PropTypes.any,
	  defaultValue: _react2.default.PropTypes.any,
	  className: _react2.default.PropTypes.string,
	  addonBefore: _react2.default.PropTypes.node,
	  addonAfter: _react2.default.PropTypes.node,
	  prefixCls: _react2.default.PropTypes.string
	};

	Input.defaultProps = {
	  defaultValue: '',
	  disabled: false,
	  prefixCls: 'ant',
	  type: 'text'
	};

	module.exports = Input;
	module.exports.Group = Group;

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Form = __webpack_require__(558);

	var _Form2 = _interopRequireDefault(_Form);

	var _FormItem = __webpack_require__(559);

	var _FormItem2 = _interopRequireDefault(_FormItem);

	var _ValueMixin = __webpack_require__(560);

	var _ValueMixin2 = _interopRequireDefault(_ValueMixin);

	var _input = __webpack_require__(556);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Form2.default.Item = _FormItem2.default;
	_Form2.default.ValueMixin = _ValueMixin2.default;

	// 对于 import { Form, Input } from 'antd/lib/form/';
	// 的方式做向下兼容
	// https://github.com/ant-design/ant-design/pull/566
	_Form2.default.Form = _Form2.default;
	_Form2.default.Input = _input2.default;

	exports.default = _Form2.default;
	module.exports = exports['default'];

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(195);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_React$Component) {
	  _inherits(Form, _React$Component);

	  function Form() {
	    _classCallCheck(this, Form);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
	  }

	  _createClass(Form, [{
	    key: 'render',
	    value: function render() {
	      var _classNames;

	      var _props = this.props;
	      var prefixCls = _props.prefixCls;
	      var className = _props.className;

	      var formClassName = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-horizontal', this.props.horizontal), _defineProperty(_classNames, prefixCls + '-inline', this.props.inline), _classNames));

	      return _react2.default.createElement(
	        'form',
	        _extends({}, this.props, { className: formClassName }),
	        this.props.children
	      );
	    }
	  }]);

	  return Form;
	}(_react2.default.Component);

	Form.propTypes = {
	  prefixCls: _react2.default.PropTypes.string,
	  horizontal: _react2.default.PropTypes.bool,
	  inline: _react2.default.PropTypes.bool,
	  children: _react2.default.PropTypes.any,
	  onSubmit: _react2.default.PropTypes.func
	};

	Form.defaultProps = {
	  prefixCls: 'ant-form'
	};

	module.exports = Form;

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(195);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function prefixClsFn(prefixCls) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  return args.map(function (s) {
	    return prefixCls + '-' + s;
	  }).join(' ');
	}

	var FormItem = function (_React$Component) {
	  _inherits(FormItem, _React$Component);

	  function FormItem() {
	    _classCallCheck(this, FormItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FormItem).apply(this, arguments));
	  }

	  _createClass(FormItem, [{
	    key: '_getLayoutClass',
	    value: function _getLayoutClass(colDef) {
	      if (!colDef) {
	        return '';
	      }
	      var span = colDef.span;
	      var offset = colDef.offset;

	      var col = span ? 'col-' + span : '';
	      var offsetCol = offset ? ' col-offset-' + offset : '';
	      return col + offsetCol;
	    }
	  }, {
	    key: 'renderHelp',
	    value: function renderHelp() {
	      var prefixCls = this.props.prefixCls;
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.help ? prefixClsFn(prefixCls, 'explain') : '', key: 'help' },
	        this.props.help
	      );
	    }
	  }, {
	    key: 'renderValidateWrapper',
	    value: function renderValidateWrapper(c1, c2) {
	      var classes = '';
	      if (this.props.validateStatus) {
	        classes = (0, _classnames2.default)({
	          'has-feedback': this.props.hasFeedback,
	          'has-success': this.props.validateStatus === 'success',
	          'has-warning': this.props.validateStatus === 'warning',
	          'has-error': this.props.validateStatus === 'error',
	          'is-validating': this.props.validateStatus === 'validating'
	        });
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: classes },
	        c1,
	        ' ',
	        c2
	      );
	    }
	  }, {
	    key: 'renderWrapper',
	    value: function renderWrapper(children) {
	      var wrapperCol = this.props.wrapperCol;
	      return _react2.default.createElement(
	        'div',
	        { className: this._getLayoutClass(wrapperCol), key: 'wrapper' },
	        children
	      );
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel() {
	      var labelCol = this.props.labelCol;
	      var required = this.props.required ? 'required' : '';

	      return this.props.label ? _react2.default.createElement(
	        'label',
	        { htmlFor: this.props.id, className: this._getLayoutClass(labelCol), required: required, key: 'label' },
	        this.props.label
	      ) : null;
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      return [this.renderLabel(), this.renderWrapper(this.renderValidateWrapper(this.props.children, this.renderHelp()))];
	    }

	    // 判断是否要 `.ant-form-item-compact` 样式类

	  }, {
	    key: '_isCompact',
	    value: function _isCompact(children) {
	      var _this2 = this;

	      var compactControls = ['checkbox', 'radio', 'radio-group', 'static', 'file'];
	      var isCompact = false;

	      if (!Array.isArray(children)) {
	        children = [children];
	      }
	      children.map(function (child) {
	        var type = child.props && child.props.type;
	        var prefixCls = child.props && child.props.prefixCls;
	        prefixCls = prefixCls ? prefixCls.substring(prefixCls.indexOf('-') + 1) : '';

	        if (type && compactControls.indexOf(type) > -1 || prefixCls && compactControls.indexOf(prefixCls) > -1) {
	          isCompact = true;
	        } else if (child.props && _typeof(child.props.children) === 'object') {
	          isCompact = _this2._isCompact(child.props.children);
	        }
	      });

	      return isCompact;
	    }
	  }, {
	    key: 'renderFormItem',
	    value: function renderFormItem(children) {
	      var _itemClassName;

	      var props = this.props;
	      var prefixCls = props.prefixCls;
	      var itemClassName = (_itemClassName = {}, _defineProperty(_itemClassName, prefixCls + '-item', true), _defineProperty(_itemClassName, prefixCls + '-item-compact', this._isCompact(props.children)), _defineProperty(_itemClassName, prefixCls + '-item-with-help', !!props.help), _itemClassName);

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(itemClassName) },
	        children
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.renderChildren();
	      return this.renderFormItem(children);
	    }
	  }]);

	  return FormItem;
	}(_react2.default.Component);

	FormItem.propTypes = {
	  prefixCls: _react2.default.PropTypes.string,
	  label: _react2.default.PropTypes.node,
	  labelCol: _react2.default.PropTypes.object,
	  help: _react2.default.PropTypes.node,
	  validateStatus: _react2.default.PropTypes.oneOf(['', 'success', 'warning', 'error', 'validating']),
	  hasFeedback: _react2.default.PropTypes.bool,
	  wrapperCol: _react2.default.PropTypes.object,
	  className: _react2.default.PropTypes.string,
	  children: _react2.default.PropTypes.node
	};

	FormItem.defaultProps = {
	  hasFeedback: false,
	  required: false,
	  prefixCls: 'ant-form'
	};

	module.exports = FormItem;

/***/ },

/***/ 560:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function merge() {
	  var ret = {};
	  var args = [].slice.call(arguments, 0);
	  args.forEach(function (a) {
	    Object.keys(a).forEach(function (k) {
	      ret[k] = a[k];
	    });
	  });
	  return ret;
	}

	var ValueMixin = {
	  setValue: function setValue(field, e) {
	    var v = e;
	    var target = e && e.target;
	    if (target) {
	      if ((target.nodeName + '').toLowerCase() === 'input' && target.type === 'checkbox') {
	        v = target.checked;
	      } else {
	        v = e.target.value;
	      }
	    }
	    var newFormData = {};
	    newFormData[field] = v;
	    this.setState({
	      formData: merge(this.state.formData, newFormData)
	    });
	  }
	};

	exports.default = ValueMixin;
	module.exports = exports['default'];

/***/ },

/***/ 561:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var $ = typeof window.jQuery !== 'undefined' && window.jQuery;

	var ReactMountor = function () {
	    function ReactMountor() {
	        _classCallCheck(this, ReactMountor);
	    }

	    _createClass(ReactMountor, null, [{
	        key: 'getProps',
	        value: function getProps(Selector) {
	            var props = null;
	            if ($) {
	                props = $(Selector).attr('data-react-props');
	            } else {
	                props = document.querySelector(Selector).getAttribute('data-react-props');
	            }
	            if (props != null) {
	                props = JSON.parse(props);
	            }
	            return props;
	        }
	    }, {
	        key: 'mountComponents',
	        value: function mountComponents(Selector) {
	            var nodes = null;
	        }
	    }]);

	    return ReactMountor;
	}();

	exports.default = ReactMountor;

/***/ }

});