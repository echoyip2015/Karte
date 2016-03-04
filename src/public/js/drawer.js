webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _header = __webpack_require__(403);

	var _map_container = __webpack_require__(405);

	var _map_container2 = _interopRequireDefault(_map_container);

	var _preloader = __webpack_require__(409);

	var _preloader2 = _interopRequireDefault(_preloader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = __webpack_require__(410);
	var ReactDOM = __webpack_require__(411);

	var props = _preloader2.default.getProps('#map-editor');
	var map = React.createElement(_map_container2.default, props);

	ReactDOM.render(React.createElement(_header.DrawerHeader, null), document.getElementById('header'));

	ReactDOM.render(map, document.getElementById('drawer'));

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MainMenu = exports.MainSiderBar = exports.DrawerHeader = exports.HomeHeader = undefined;

	var _upload_modal = __webpack_require__(404);

	var _upload_modal2 = _interopRequireDefault(_upload_modal);

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
	                                    'welcome! ,  visitor'
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
	        _classCallCheck(this, DrawerHeader);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(DrawerHeader).apply(this, arguments));
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
	                                    '准备就绪'
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
	                                    'welcome! ,  visitor'
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(MainMenu, { ref: 'menu' })
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
	        _classCallCheck(this, MainMenu);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MainMenu).apply(this, arguments));
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
	                                '另存为'
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
	                                'li',
	                                { className: 'template-item', onclick: 'Karte.MainTool.newMapFile()' },
	                                React.createElement(
	                                    'span',
	                                    { className: 'ng-binding' },
	                                    '空白地图'
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
	                            React.createElement(
	                                'li',
	                                { className: 'ng-scope', onclick: 'Karte.MainTool.openMapFile()' },
	                                React.createElement(
	                                    'span',
	                                    { className: 'icon' },
	                                    React.createElement('i', { className: 'fa fa-file-image-o' })
	                                ),
	                                React.createElement(
	                                    'span',
	                                    { className: 'filename ng-binding' },
	                                    '地形图绘制系统功能设计.km'
	                                ),
	                                React.createElement(
	                                    'span',
	                                    { className: 'info ng-binding' },
	                                    '5 天前'
	                                )
	                            )
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
	                            '另存为'
	                        ),
	                        React.createElement(
	                            'ul',
	                            { className: 'items' },
	                            React.createElement(
	                                'li',
	                                { className: 'item', onclick: 'Karte.MainTool.reSaveFile()' },
	                                React.createElement('i', { className: 'glyphicon glyphicon-duplicate icon' }),
	                                React.createElement(
	                                    'span',
	                                    { className: 'item-name' },
	                                    '另存为'
	                                ),
	                                React.createElement(
	                                    'span',
	                                    { className: 'item-info' },
	                                    '保存副本到我的文档'
	                                )
	                            ),
	                            React.createElement(
	                                'li',
	                                { className: 'item', onclick: 'Karte.MainTool.renameFile()' },
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
	                                { className: 'item', onclick: 'Karte.MainTool.exportFile()' },
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
	                React.createElement(_upload_modal2.default, { ref: 'fileUploader' })
	            );
	        }
	    }]);

	    return MainMenu;
	}(React.Component);

/***/ },

/***/ 404:
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

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

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
	            showModal: false
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
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _reactBootstrap.Modal,
	                { show: this.state.showModal, onHide: this.close.bind(this) },
	                React.createElement(
	                    _reactBootstrap.Modal.Header,
	                    { closeButton: true },
	                    React.createElement(
	                        _reactBootstrap.Modal.Title,
	                        null,
	                        '打开文件'
	                    )
	                ),
	                React.createElement(
	                    'form',
	                    { id: 'mapUploader', action: '/karte/upload', method: 'post', encType: 'multipart/form-data' },
	                    React.createElement(
	                        _reactBootstrap.Modal.Body,
	                        null,
	                        React.createElement(
	                            'div',
	                            { className: 'modal-body' },
	                            React.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                React.createElement(
	                                    'label',
	                                    { htmlFor: 'uploadFile' },
	                                    '选择本地文件'
	                                ),
	                                React.createElement('input', { type: 'file', id: 'uploadFile', accept: '.dxf,.json,.kml', name: 'file' }),
	                                React.createElement(
	                                    'p',
	                                    { className: 'help-block ng-binding' },
	                                    '支持的格式：ShapeFile 格式(.shp), GeoJson 格式(.json), KML 格式(.kml), AutoCad DXF 格式(.dxf)'
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        _reactBootstrap.Modal.Footer,
	                        null,
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.close.bind(this) },
	                            'Close'
	                        ),
	                        React.createElement('input', { type: 'submit', className: 'btn btn-primary' })
	                    )
	                )
	            );
	        }
	    }]);

	    return FileUploader;
	}(React.Component);

	exports.default = FileUploader;

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _map = __webpack_require__(406);

	var _map2 = _interopRequireDefault(_map);

	var _tool_bar = __webpack_require__(407);

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
	                React.createElement(_map2.default, { ref: 'map', center: this.props.center, extent: this.props.extent, source: this.props.source })
	            );
	        }
	    }]);

	    return MapContainer;
	}(React.Component);

	exports.default = MapContainer;

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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
	        return _this;
	    }

	    _createClass(Map, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
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
	            this.vectorSource = new ol.source.Vector({
	                url: this.props.source,
	                format: new ol.format.KML(),
	                wrapX: false
	            });
	            this.vectorLayer = new ol.layer.Vector({
	                source: this.vectorSource
	            });
	            this.map.addLayer(this.vectorLayer);
	            this.map.addControl(new ol.control.ScaleLine());
	            this.map.addControl(new ol.control.MousePosition());
	            this.map.getView().fit(this.props.extent, this.map.getSize());
	            this.map.render();
	            this.setState({ map: this.map });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('div', { className: 'map-editor-container', ref: 'mapDoc' });
	        }
	    }]);

	    return Map;
	}(React.Component);

	Map.defaultStyle = {};
	exports.default = Map;

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactBootstrap = __webpack_require__(159);

	var _fileLoaderModal = __webpack_require__(408);

	var _fileLoaderModal2 = _interopRequireDefault(_fileLoaderModal);

	var _DatLoader = __webpack_require__(413);

	var _DatLoader2 = _interopRequireDefault(_DatLoader);

	var _Delaunay = __webpack_require__(414);

	var _Delaunay2 = _interopRequireDefault(_Delaunay);

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

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DrawTool)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = { type: null, draw: null }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(DrawTool, [{
	        key: 'changeDrawType',
	        value: function changeDrawType(e) {
	            this.setState({ type: e.currentTarget.id });
	            var draw = this.getInteraction(e.currentTarget.id);
	            if (draw) {
	                this.setState({ draw: draw });
	                this.getMap().map.addInteraction(draw);
	            } else if (this.state.draw != null) {
	                this.getMap().map.removeInteraction(this.state.draw);
	            }
	        }
	    }, {
	        key: 'getMap',
	        value: function getMap() {
	            return this.props.map.refs.map;
	        }
	    }, {
	        key: 'getInteraction',
	        value: function getInteraction(value) {
	            if (value != null) {
	                if (value === 'null') {
	                    return null;
	                }
	                var geometryFunction, maxPoints;
	                if (value === 'Square') {
	                    value = 'Circle';
	                    geometryFunction = ol.interaction.Draw.createRegularPolygon(4);
	                } else if (value === 'Box') {
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
	                var draw = new ol.interaction.Draw({
	                    source: this.getMap().vectorSource,
	                    type: value,
	                    geometryFunction: geometryFunction,
	                    maxPoints: maxPoints
	                });
	                return draw;
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
	                            { onClick: this.changeDrawType.bind(this), id: 'null', className: 'btn-tool  btn-app btn-flat' },
	                            '浏览'
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.changeDrawType.bind(this), id: 'Point', className: 'btn-tool  btn-app btn-flat' },
	                            React.createElement('i', { className: 'fa fa-dot-circle-o' }),
	                            '画点'
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.changeDrawType.bind(this), id: 'LineString', className: 'btn-tool btn-app btn-flat' },
	                            React.createElement('i', { className: 'fa fa-vine' }),
	                            '画线'
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.changeDrawType.bind(this), id: 'Polygon', className: 'btn-tool  btn-app btn-flat' },
	                            React.createElement('i', { className: 'fa fa-square' }),
	                            '画面'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return DrawTool;
	}(React.Component);

	var ContourTool = function (_React$Component2) {
	    _inherits(ContourTool, _React$Component2);

	    function ContourTool() {
	        var _Object$getPrototypeO2;

	        var _temp2, _this2, _ret2;

	        _classCallCheck(this, ContourTool);

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(ContourTool)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _this2.state = { data: null }, _temp2), _possibleConstructorReturn(_this2, _ret2);
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
	                source: new ol.source.Vector({
	                    features: features
	                })
	            });
	            var extent = layer.getSource().getExtent();
	            this.getMap().map.addLayer(layer);
	            this.getMap().map.getView().fit(extent, this.getMap().map.getSize());
	        }
	    }, {
	        key: 'handleDulaunay',
	        value: function handleDulaunay() {
	            if (this.state.data != null) {
	                var points = _DatLoader2.default.readRaw(this.state.data);
	                var triangles = _Delaunay2.default.triangulate(points);
	                var features = new ol.Collection();
	                for (var i = 0; i < triangles.length;) {
	                    var p1 = points[triangles[i++]];
	                    var p2 = points[triangles[i++]];
	                    var p3 = points[triangles[i++]];
	                    var feature = new ol.Feature({
	                        geometry: new ol.geom.Polygon([[p1, p2, p3]], 'XYZ')
	                    });
	                    features.push(feature);
	                }
	                var layer = new ol.layer.Vector({
	                    source: new ol.source.Vector({
	                        features: features
	                    })
	                });
	                var extent = layer.getSource().getExtent();
	                this.getMap().map.addLayer(layer);
	                this.getMap().map.getView().fit(extent, this.getMap().map.getSize());
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
	                            { className: 'btn-tool  btn-app btn-flat' },
	                            '生成等高线'
	                        )
	                    )
	                ),
	                React.createElement(_fileLoaderModal2.default, { ref: 'reader' })
	            );
	        }
	    }]);

	    return ContourTool;
	}(React.Component);

	var ToolBar = function (_React$Component3) {
	    _inherits(ToolBar, _React$Component3);

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
	                        'Tab 3 content'
	                    )
	                )
	            );
	        }
	    }]);

	    return ToolBar;
	}(React.Component);

	exports.default = ToolBar;

/***/ },

/***/ 408:
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

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);

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
	            callback: null
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
	        key: 'read',
	        value: function read() {
	            var _this2 = this;

	            var data = new FormData(this.refs.form);
	            var file = $(this.refs.file)[0];
	            data.append(file.name, file.files[0]);
	            this.setState({ loading: true });
	            $.ajax({
	                url: "/karte/load_text_data",
	                type: "POST",
	                data: data,
	                processData: false,
	                contentType: false,
	                success: function success(res) {
	                    _this2.setState({ data: res.data, loading: false });
	                    if (_this2.state.callback != null) {
	                        _this2.state.callback(res.data);
	                    }
	                    console.log(res);
	                }
	            });
	            this.close();
	            return false;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _reactBootstrap.Modal,
	                { show: this.state.showModal, onHide: this.close.bind(this) },
	                React.createElement(
	                    _reactBootstrap.Modal.Header,
	                    { closeButton: true },
	                    React.createElement(
	                        _reactBootstrap.Modal.Title,
	                        null,
	                        '读取文件'
	                    )
	                ),
	                React.createElement(
	                    'form',
	                    { id: 'mapUploader', ref: 'form', encType: 'multipart/form-data' },
	                    React.createElement(
	                        _reactBootstrap.Modal.Body,
	                        null,
	                        React.createElement(
	                            'div',
	                            { className: 'modal-body' },
	                            React.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                React.createElement(
	                                    'label',
	                                    { htmlFor: 'uploadFile' },
	                                    '选择本地文件'
	                                ),
	                                React.createElement('input', { type: 'file', ref: 'file', accept: '.txt,.dat', name: 'file' }),
	                                React.createElement(
	                                    'p',
	                                    { className: 'help-block' },
	                                    '支持的格式：txt , dat'
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        _reactBootstrap.Modal.Footer,
	                        null,
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.close.bind(this) },
	                            'Close'
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.read.bind(this), className: 'btn btn-primary' },
	                            '确定'
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

/***/ 409:
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["React"] = __webpack_require__(1);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["ReactDOM"] = __webpack_require__(158);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 413:
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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
	                    geometry: new ol.geom.Point([source[i][3], source[i][2]]),
	                    name: source[i][0]
	                });
	                feature.getGeometry().set('z', source[i][4]);
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
	                var x = parseFloat(source[i][3]);
	                var y = parseFloat(source[i][2]);
	                var z = parseFloat(source[i][4]);
	                collection.push([x, y, z]);
	            }
	            console.info(collection);
	            return collection;
	        }
	    }]);

	    return DatLoader;
	}();

	exports.default = DatLoader;

/***/ },

/***/ 414:
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

/***/ }

});