webpackJsonp([3],[
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ToolFunc = function () {
	    function ToolFunc() {
	        _classCallCheck(this, ToolFunc);
	    }

	    _createClass(ToolFunc, null, [{
	        key: 'closeMenu',
	        value: function closeMenu() {
	            $('.main-menu').css('left', '-740px');
	        }
	    }, {
	        key: 'openMenu',
	        value: function openMenu() {
	            $('.main-menu').css('left', '0px');
	        }
	    }, {
	        key: 'importFile',
	        value: function importFile() {
	            $('#openFileModal').modal('show');
	        }
	    }, {
	        key: 'newMapFile',
	        value: function newMapFile() {
	            //todo
	        }
	    }, {
	        key: 'openMapFile',
	        value: function openMapFile() {
	            //todo
	        }
	    }, {
	        key: 'reSaveFile',
	        value: function reSaveFile() {
	            //todo
	        }
	    }, {
	        key: 'renameFile',
	        value: function renameFile() {
	            //todo
	        }
	    }, {
	        key: 'exportFile',
	        value: function exportFile() {
	            //todo
	        }
	    }]);

	    return ToolFunc;
	}();

	var BaseTool = function BaseTool(elem) {
	    _classCallCheck(this, BaseTool);

	    this.target = elem;
	};

	var MapTool = function (_BaseTool) {
	    _inherits(MapTool, _BaseTool);

	    function MapTool(elem, options) {
	        _classCallCheck(this, MapTool);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MapTool).call(this, elem));

	        _this.mouse = options.mouse;
	        return _this;
	    }

	    _createClass(MapTool, [{
	        key: 'onClick',
	        value: function onClick() {
	            //todo
	        }
	    }]);

	    return MapTool;
	}(BaseTool);

	var MapDocument = function () {
	    function MapDocument(option) {
	        _classCallCheck(this, MapDocument);

	        this.map = new ol.Map({
	            target: option.target
	        });
	        this.mapTools = [];
	    }

	    _createClass(MapDocument, null, [{
	        key: 'registTool',
	        value: function registTool(obj) {
	            if (!(obj instanceof MapTool)) {
	                throw new TypeError("not an instance of Tool!");
	            }
	        }
	    }]);

	    return MapDocument;
	}();

	/* follow field generate the delaunay triangel */

	var XYZ = function () {

	    //EPSILON = 0.0000001;

	    function XYZ(x, y, z) {
	        _classCallCheck(this, XYZ);

	        this.x = x;
	        this.y = y;
	        this.z = z;
	    }

	    /**
	     *
	     * @Compare
	     * @param other {XYZ}
	     *
	     */

	    _createClass(XYZ, [{
	        key: 'Compare',
	        value: function Compare(other) {}
	        //todo

	        /**
	         *
	         * @inCircle
	         * @param triangle {TRIANGLE}
	         *
	         */

	    }, {
	        key: 'inCircle',
	        value: function inCircle(triangle) {
	            //todo
	        }
	    }]);

	    return XYZ;
	}();

	var TRIANGLE = function TRIANGLE(p1, p2, p3) {
	    _classCallCheck(this, TRIANGLE);

	    this.p1 = p1;
	    this.p2 = p2;
	    this.p3 = p3;
	};

	var EDGE = function EDGE(p1, p2) {
	    _classCallCheck(this, EDGE);

	    this.p1 = p1;
	    this.p2 = p2;
	};

	var Delaunay = function () {
	    function Delaunay() {
	        _classCallCheck(this, Delaunay);
	    }

	    _createClass(Delaunay, [{
	        key: 'Triangulate',
	        value: function Triangulate() {
	            //todo
	        }
	    }]);

	    return Delaunay;
	}();

	/* end generate delaunay triangle */

	var Karte = function Karte() {
	    _classCallCheck(this, Karte);
	};

	Karte.MainTool = ToolFunc;

/***/ }
]);