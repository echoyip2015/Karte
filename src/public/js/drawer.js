webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _header = __webpack_require__(403);

	var _map_container = __webpack_require__(405);

	var _map_container2 = _interopRequireDefault(_map_container);

	var _preloader = __webpack_require__(419);

	var _preloader2 = _interopRequireDefault(_preloader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = __webpack_require__(420);
	var ReactDOM = __webpack_require__(421);


	var props = _preloader2.default.getProps('#map-editor');
	var map = React.createElement(_map_container2.default, props);

	ReactDOM.render(React.createElement(_header.DrawerHeader, null), document.getElementById('header'));

	ReactDOM.render(map, document.getElementById('drawer'));

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
	                React.createElement(_uploadModal2.default, { ref: 'fileUploader' })
	            );
	        }
	    }]);

	    return MainMenu;
	}(React.Component);

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _map = __webpack_require__(406);

	var _map2 = _interopRequireDefault(_map);

	var _tool_bar = __webpack_require__(408);

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _default = __webpack_require__(407);

	var _default2 = _interopRequireDefault(_default);

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
	        return _this;
	    }

	    _createClass(Map, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

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

	            this.map.addInteraction(this.dragBox);

	            this.dragBox.on('boxend', function () {
	                if (_this2.editLayer == null) {
	                    return;
	                }
	                var extent = _this2.dragBox.getGeometry().getExtent();
	                _this2.editLayer.getSource().forEachFeatureIntersectingExtent(extent, function (feature) {
	                    _this2.selectedFeatures.push(feature);
	                });
	            });
	            this.dragBox.on('boxstart', function () {
	                _this2.selectedFeatures.clear();
	            });

	            this.map.on('click', function () {
	                _this2.selectedFeatures.clear();
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

	exports.default = Map;

/***/ },

/***/ 407:
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

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

	var _fileLoaderModal = __webpack_require__(409);

	var _fileLoaderModal2 = _interopRequireDefault(_fileLoaderModal);

	var _layerModal = __webpack_require__(410);

	var _layerModal2 = _interopRequireDefault(_layerModal);

	var _contourLineModal = __webpack_require__(425);

	var _contourLineModal2 = _interopRequireDefault(_contourLineModal);

	var _layerSelectModal = __webpack_require__(424);

	var _layerSelectModal2 = _interopRequireDefault(_layerSelectModal);

	var _DatLoader = __webpack_require__(411);

	var _DatLoader2 = _interopRequireDefault(_DatLoader);

	var _Delaunay = __webpack_require__(412);

	var _Delaunay2 = _interopRequireDefault(_Delaunay);

	var _conrec = __webpack_require__(413);

	var _conrec2 = _interopRequireDefault(_conrec);

	var _default = __webpack_require__(407);

	var _default2 = _interopRequireDefault(_default);

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

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DrawTool)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = { type: null, draw: null, editable: false, editLayer: null, layers: null }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(DrawTool, [{
	        key: 'changeDrawType',
	        value: function changeDrawType(type) {
	            if (type == null) {
	                this.setMousePointer('pointer');
	            } else {
	                this.setMousePointer('crosshair');
	            }

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
	                this.getMap().editLayer = null;
	                this.getMap().selectedFeatures.clear();
	                return;
	            }
	            var map = this.getMap().map;
	            var layers = map.getLayers();
	            this.setState({ layers: layers });
	            this.refs.selectLayer.open(function (layer) {
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
	                var draw = new ol.interaction.Draw({
	                    source: this.getMap().vectorSource,
	                    type: value,
	                    geometryFunction: geometryFunction,
	                    maxPoints: maxPoints,
	                    style: _default2.default
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
	                        ),
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { onClick: this.handleStartModify.bind(this), className: 'btn-tool  btn-app btn-flat' },
	                            React.createElement('i', { className: 'fa fa-pencil-square-o' }),
	                            this.state.editLayer == null ? '修改' : '停止修改'
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

	        var _temp2, _this3, _ret2;

	        _classCallCheck(this, ContourTool);

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(ContourTool)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this3), _this3.state = {
	            data: null,
	            triangle: null,
	            triangleLayer: null,
	            contourLayer: null,
	            zMin: Number.NEGATIVE_INFINITY,
	            zMax: Number.POSITIVE_INFINITY
	        }, _temp2), _possibleConstructorReturn(_this3, _ret2);
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
	                style: _default2.default
	            });
	            var extent = layer.getSource().getExtent();
	            this.getMap().map.addLayer(layer);
	            this.getMap().map.getView().fit(extent, this.getMap().map.getSize());
	        }
	    }, {
	        key: 'handleDulaunay',
	        value: function handleDulaunay() {
	            if (this.state.triangleLayer != null) {
	                this.getMap().map.removeLayer(this.state.triangleLayer);
	            }
	            if (this.state.data != null) {
	                var points = _DatLoader2.default.readRaw(this.state.data);
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
	                    style: _default2.default
	                });
	                var extent = layer.getSource().getExtent();
	                this.getMap().map.addLayer(layer);
	                this.getMap().map.getView().fit(extent, this.getMap().map.getSize());
	                this.setState({ triangle: pTriangle, zMin: tMin, zMax: tMax, triangleLayer: layer });
	                console.log([tMin, tMax]);
	            }
	        }
	    }, {
	        key: 'handleContour',
	        value: function handleContour() {
	            if (this.state.triangle != null) {
	                var traceTool = new _conrec2.default(this.state.triangle, this.state.zMin - 10, this.state.zMax + 10);
	                var contourLines = traceTool.contourLineTrace();
	                var features = new ol.Collection();
	                for (var i = 0; i < contourLines.length; i++) {
	                    var geom = new ol.geom.LineString([], 'XYZ');
	                    for (var j = 0; j < contourLines[i].listPoint.length; j++) {
	                        var point = contourLines[i].listPoint[j];
	                        geom.appendCoordinate([point.x, point.y, point.z]);
	                    }
	                    if (contourLines[i].type == 1) {
	                        var _point = contourLines[i].listPoint[0];
	                        geom.appendCoordinate([_point.x, _point.y, _point.z]);
	                    }
	                    var feature = new ol.Feature({
	                        geometry: geom
	                    });
	                    features.push(feature);
	                }
	                var layer = new ol.layer.Vector({
	                    name: '等高线',
	                    source: new ol.source.Vector({
	                        features: features
	                    }),
	                    style: _default2.default
	                });
	                var extent = layer.getSource().getExtent();
	                if (this.state.triangleLayer != null) {
	                    this.state.triangleLayer.setVisible(false);
	                }
	                this.getMap().contours = contourLines;

	                this.getMap().map.addLayer(layer);
	                this.getMap().map.getView().fit(extent, this.getMap().map.getSize());
	                this.setState({ contourLayer: layer });
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
	                            { onClick: this.handleContour.bind(this), className: 'btn-tool  btn-app btn-flat' },
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

	var DataTool = function (_React$Component3) {
	    _inherits(DataTool, _React$Component3);

	    function DataTool() {
	        var _Object$getPrototypeO3;

	        var _temp3, _this4, _ret3;

	        _classCallCheck(this, DataTool);

	        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            args[_key3] = arguments[_key3];
	        }

	        return _ret3 = (_temp3 = (_this4 = _possibleConstructorReturn(this, (_Object$getPrototypeO3 = Object.getPrototypeOf(DataTool)).call.apply(_Object$getPrototypeO3, [this].concat(args))), _this4), _this4.state = {
	            layers: null,
	            contours: null
	        }, _temp3), _possibleConstructorReturn(_this4, _ret3);
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
	                React.createElement(_layerModal2.default, { ref: 'layerView', layers: this.state.layers }),
	                React.createElement(_contourLineModal2.default, { ref: 'contourView', contours: this.state.contours })
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

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

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
	                                '否'
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                layer.getVisible() ? '显示' : '隐藏'
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
	                _reactBootstrap.Modal,
	                { show: this.state.showModal, onHide: this.close.bind(this), bsSize: 'lg' },
	                React.createElement(
	                    _reactBootstrap.Modal.Header,
	                    { closeButton: true },
	                    React.createElement(
	                        _reactBootstrap.Modal.Title,
	                        null,
	                        '图层信息'
	                    )
	                ),
	                React.createElement(
	                    _reactBootstrap.Modal.Body,
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
	                                    '图层名'
	                                ),
	                                React.createElement(
	                                    'th',
	                                    null,
	                                    '锁定'
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
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            'tbody',
	                            null,
	                            this.renderLayerList()
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
	                        { onClick: this.updateLayers.bind(this), className: 'btn btn-primary' },
	                        '确定'
	                    )
	                )
	            );
	        }
	    }]);

	    return LayerModal;
	}(React.Component);

	exports.default = LayerModal;

/***/ },

/***/ 411:
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
	                    geometry: new ol.geom.Point([source[i][2], source[i][3]]),
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
	                var x = parseFloat(source[i][2]);
	                var y = parseFloat(source[i][3]);
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

/***/ 412:
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

/***/ 413:
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


	var _point = __webpack_require__(414);

	var _point2 = _interopRequireDefault(_point);

	var _triangle = __webpack_require__(415);

	var _triangle2 = _interopRequireDefault(_triangle);

	var _line = __webpack_require__(416);

	var _line2 = _interopRequireDefault(_line);

	var _edge = __webpack_require__(417);

	var _edge2 = _interopRequireDefault(_edge);

	var _contourline = __webpack_require__(418);

	var _contourline2 = _interopRequireDefault(_contourline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContourTrance = function () {
	    function ContourTrance(triangleList, zMin, zMax) {
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
	                var tempPoint0 = this.assetPoint(new _point2.default(triangle[0].x, triangle[0].y, triangle[0].z));
	                var tempPoint1 = this.assetPoint(new _point2.default(triangle[1].x, triangle[1].y, triangle[1].z));
	                var tempPoint2 = this.assetPoint(new _point2.default(triangle[2].x, triangle[2].y, triangle[2].z));
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
	            var tempP = new _point2.default(0, 0, val);
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
	            for (var i = 0; i <= this.lineNum; i++) {
	                var val = (this.dMax - this.dMin) / this.lineNum * i + this.dMin;
	                this.lineValue.push(val);
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
	                                //console.log(conLine);
	                                _conLine.value = conVal;
	                                _conLine.type = 1;
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
	                                _conLine.type = 1;
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

/***/ 414:
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

/***/ 415:
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

/***/ 416:
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

/***/ 417:
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

/***/ 418:
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

/***/ 419:
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

/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["React"] = __webpack_require__(1);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["ReactDOM"] = __webpack_require__(158);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

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
	                alert('还没有选择任何图层!');
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
	                                React.createElement('input', { type: 'radio', checked: checked, onClick: _this2.handleSelect.bind(_this2, layer), readOnly: true })
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
	                _reactBootstrap.Modal,
	                { show: this.state.showModal, onHide: this.close.bind(this), bsSize: 'lg' },
	                React.createElement(
	                    _reactBootstrap.Modal.Header,
	                    { closeButton: true },
	                    React.createElement(
	                        _reactBootstrap.Modal.Title,
	                        null,
	                        '选择需要开始编辑的图层'
	                    )
	                ),
	                React.createElement(
	                    _reactBootstrap.Modal.Body,
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
	                        { onClick: this.ok.bind(this), className: 'btn btn-primary' },
	                        '确定'
	                    )
	                )
	            );
	        }
	    }]);

	    return LayerModal;
	}(React.Component);

	exports.default = LayerModal;

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(159);

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
	        key: 'renderContourInfo',
	        value: function renderContourInfo() {
	            console.log(this.props.contours);
	            if (this.props.contours != null) {
	                var rows = this.props.contours.map(function (contour, index) {
	                    return React.createElement(
	                        'tr',
	                        { key: index },
	                        React.createElement(
	                            'td',
	                            null,
	                            contour.value
	                        ),
	                        React.createElement(
	                            'td',
	                            null,
	                            contour.type == 1 ? '闭合' : '开放'
	                        ),
	                        React.createElement(
	                            'td',
	                            null,
	                            contour.listPoint.length
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
	                _reactBootstrap.Modal,
	                { show: this.state.showModal, onHide: this.close.bind(this), bsSize: 'lg' },
	                React.createElement(
	                    _reactBootstrap.Modal.Header,
	                    { closeButton: true },
	                    React.createElement(
	                        _reactBootstrap.Modal.Title,
	                        null,
	                        '等高线信息'
	                    )
	                ),
	                React.createElement(
	                    _reactBootstrap.Modal.Body,
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
	                                    '点数'
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            'tbody',
	                            null,
	                            this.renderContourInfo()
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
	                        { onClick: this.updateLayers.bind(this), className: 'btn btn-primary' },
	                        '确定'
	                    )
	                )
	            );
	        }
	    }]);

	    return LayerModal;
	}(React.Component);

	exports.default = LayerModal;

/***/ }

});