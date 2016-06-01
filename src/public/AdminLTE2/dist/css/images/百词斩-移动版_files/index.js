webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(553), RootInstanceProvider = __webpack_require__(561), ReactMount = __webpack_require__(28), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactRedux = __webpack_require__(161);

	var _QuestionPage = __webpack_require__(563);

	var _QuestionPage2 = _interopRequireDefault(_QuestionPage);

	var _configStore = __webpack_require__(570);

	var _configStore2 = _interopRequireDefault(_configStore);

	var _config = __webpack_require__(572);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _configStore2.default)(_config2.default);

	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_QuestionPage2.default, null)
	), document.getElementById('app'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(565); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(482)(module)))

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(554);

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var makePatchReactClass = __webpack_require__(555);

	/**
	 * Returns a function that, when invoked, patches a React class with a new
	 * version of itself. To patch different classes, pass different IDs.
	 */
	module.exports = function makeMakeHot(getRootInstances, React) {
	  if (typeof getRootInstances !== 'function') {
	    throw new Error('Expected getRootInstances to be a function.');
	  }

	  var patchers = {};

	  return function makeHot(NextClass, persistentId) {
	    persistentId = persistentId || NextClass.displayName || NextClass.name;

	    if (!persistentId) {
	      console.error(
	        'Hot reload is disabled for one of your types. To enable it, pass a ' +
	        'string uniquely identifying this class within this current module ' +
	        'as a second parameter to makeHot.'
	      );
	      return NextClass;
	    }

	    if (!patchers[persistentId]) {
	      patchers[persistentId] = makePatchReactClass(getRootInstances, React);
	    }

	    var patchReactClass = patchers[persistentId];
	    return patchReactClass(NextClass);
	  };
	};

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var makeAssimilatePrototype = __webpack_require__(556),
	    requestForceUpdateAll = __webpack_require__(557);

	function hasNonStubTypeProperty(ReactClass) {
	  if (!ReactClass.hasOwnProperty('type')) {
	    return false;
	  }

	  var descriptor = Object.getOwnPropertyDescriptor(ReactClass, 'type');
	  if (typeof descriptor.get === 'function') {
	    return false;
	  }

	  return true;
	}

	function getPrototype(ReactClass) {
	  var prototype = ReactClass.prototype,
	      seemsLegit = prototype && typeof prototype.render === 'function';

	  if (!seemsLegit && hasNonStubTypeProperty(ReactClass)) {
	    prototype = ReactClass.type.prototype;
	  }

	  return prototype;
	}

	/**
	 * Returns a function that will patch React class with new versions of itself
	 * on subsequent invocations. Both legacy and ES6 style classes are supported.
	 */
	module.exports = function makePatchReactClass(getRootInstances, React) {
	  var assimilatePrototype = makeAssimilatePrototype(),
	      FirstClass = null;

	  return function patchReactClass(NextClass) {
	    var nextPrototype = getPrototype(NextClass);
	    assimilatePrototype(nextPrototype);

	    if (FirstClass) {
	      requestForceUpdateAll(getRootInstances, React);
	    }

	    return FirstClass || (FirstClass = NextClass);
	  };
	};

/***/ },

/***/ 556:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Returns a function that establishes the first prototype passed to it
	 * as the "source of truth" and patches its methods on subsequent invocations,
	 * also patching current and previous prototypes to forward calls to it.
	 */
	module.exports = function makeAssimilatePrototype() {
	  var storedPrototype,
	      knownPrototypes = [];

	  function wrapMethod(key) {
	    return function () {
	      if (storedPrototype[key]) {
	        return storedPrototype[key].apply(this, arguments);
	      }
	    };
	  }

	  function patchProperty(proto, key) {
	    proto[key] = storedPrototype[key];

	    if (typeof proto[key] !== 'function' ||
	      key === 'type' ||
	      key === 'constructor') {
	      return;
	    }

	    proto[key] = wrapMethod(key);

	    if (storedPrototype[key].isReactClassApproved) {
	      proto[key].isReactClassApproved = storedPrototype[key].isReactClassApproved;
	    }

	    if (proto.__reactAutoBindMap && proto.__reactAutoBindMap[key]) {
	      proto.__reactAutoBindMap[key] = proto[key];
	    }
	  }

	  function updateStoredPrototype(freshPrototype) {
	    storedPrototype = {};

	    Object.getOwnPropertyNames(freshPrototype).forEach(function (key) {
	      storedPrototype[key] = freshPrototype[key];
	    });
	  }

	  function reconcileWithStoredPrototypes(freshPrototype) {
	    knownPrototypes.push(freshPrototype);
	    knownPrototypes.forEach(function (proto) {
	      Object.getOwnPropertyNames(storedPrototype).forEach(function (key) {
	        patchProperty(proto, key);
	      });
	    });
	  }

	  return function assimilatePrototype(freshPrototype) {
	    if (Object.prototype.hasOwnProperty.call(freshPrototype, '__isAssimilatedByReactHotAPI')) {
	      return;
	    }

	    updateStoredPrototype(freshPrototype);
	    reconcileWithStoredPrototypes(freshPrototype);
	    freshPrototype.__isAssimilatedByReactHotAPI = true;
	  };
	};

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	var deepForceUpdate = __webpack_require__(558);

	var isRequestPending = false;

	module.exports = function requestForceUpdateAll(getRootInstances, React) {
	  if (isRequestPending) {
	    return;
	  }

	  /**
	   * Forces deep re-render of all mounted React components.
	   * Hats off to Omar Skalli (@Chetane) for suggesting this approach:
	   * https://gist.github.com/Chetane/9a230a9fdcdca21a4e29
	   */
	  function forceUpdateAll() {
	    isRequestPending = false;

	    var rootInstances = getRootInstances(),
	        rootInstance;

	    for (var key in rootInstances) {
	      if (rootInstances.hasOwnProperty(key)) {
	        rootInstance = rootInstances[key];

	        // `|| rootInstance` for React 0.12 and earlier
	        rootInstance = rootInstance._reactInternalInstance || rootInstance;
	        deepForceUpdate(rootInstance, React);
	      }
	    }
	  }

	  setTimeout(forceUpdateAll);
	};


/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var bindAutoBindMethods = __webpack_require__(559);
	var traverseRenderedChildren = __webpack_require__(560);

	function setPendingForceUpdate(internalInstance) {
	  if (internalInstance._pendingForceUpdate === false) {
	    internalInstance._pendingForceUpdate = true;
	  }
	}

	function forceUpdateIfPending(internalInstance, React) {
	  if (internalInstance._pendingForceUpdate === true) {
	    // `|| internalInstance` for React 0.12 and earlier
	    var instance = internalInstance._instance || internalInstance;

	    if (instance.forceUpdate) {
	      instance.forceUpdate();
	    } else if (React && React.Component) {
	      React.Component.prototype.forceUpdate.call(instance);
	    }
	  }
	}

	/**
	 * Updates a React component recursively, so even if children define funky
	 * `shouldComponentUpdate`, they are forced to re-render.
	 * Makes sure that any newly added methods are properly auto-bound.
	 */
	function deepForceUpdate(internalInstance, React) {
	  traverseRenderedChildren(internalInstance, bindAutoBindMethods);
	  traverseRenderedChildren(internalInstance, setPendingForceUpdate);
	  traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
	}

	module.exports = deepForceUpdate;


/***/ },

/***/ 559:
/***/ function(module, exports) {

	'use strict';

	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);

	  boundMethod.__reactBoundContext = component;
	  boundMethod.__reactBoundMethod = method;
	  boundMethod.__reactBoundArguments = null;

	  var componentName = component.constructor.displayName,
	      _bind = boundMethod.bind;

	  boundMethod.bind = function (newThis) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    if (newThis !== component && newThis !== null) {
	      console.warn(
	        'bind(): React component methods may only be bound to the ' +
	        'component instance. See ' + componentName
	      );
	    } else if (!args.length) {
	      console.warn(
	        'bind(): You are binding a component method to the component. ' +
	        'React does this for you automatically in a high-performance ' +
	        'way, so you can safely remove this call. See ' + componentName
	      );
	      return boundMethod;
	    }

	    var reboundMethod = _bind.apply(boundMethod, arguments);
	    reboundMethod.__reactBoundContext = component;
	    reboundMethod.__reactBoundMethod = method;
	    reboundMethod.__reactBoundArguments = args;

	    return reboundMethod;
	  };

	  return boundMethod;
	}

	/**
	 * Performs auto-binding similar to how React does it.
	 * Skips already auto-bound methods.
	 * Based on https://github.com/facebook/react/blob/b264372e2b3ad0b0c0c0cc95a2f383e4a1325c3d/src/classic/class/ReactClass.js#L639-L705
	 */
	module.exports = function bindAutoBindMethods(internalInstance) {
	  var component = typeof internalInstance.getPublicInstance === 'function' ?
	    internalInstance.getPublicInstance() :
	    internalInstance;

	  if (!component) {
	    // React 0.14 stateless component has no instance
	    return;
	  }

	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      continue;
	    }

	    // Skip already bound methods
	    if (component.hasOwnProperty(autoBindKey) &&
	        component[autoBindKey].__reactBoundContext === component) {
	      continue;
	    }

	    var method = component.__reactAutoBindMap[autoBindKey];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	};

/***/ },

/***/ 560:
/***/ function(module, exports) {

	'use strict';

	function traverseRenderedChildren(internalInstance, callback, argument) {
	  callback(internalInstance, argument);

	  if (internalInstance._renderedComponent) {
	    traverseRenderedChildren(
	      internalInstance._renderedComponent,
	      callback,
	      argument
	    );
	  } else {
	    for (var key in internalInstance._renderedChildren) {
	      traverseRenderedChildren(
	        internalInstance._renderedChildren[key],
	        callback,
	        argument
	      );
	    }
	  }
	}

	module.exports = traverseRenderedChildren;


/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getRootInstancesFromReactMount = __webpack_require__(562);

	var injectedProvider = null,
	    didWarn = false;

	function warnOnce() {
	  if (!didWarn) {
	    console.warn(
	      'It appears that React Hot Loader isn\'t configured correctly. ' +
	      'If you\'re using NPM, make sure your dependencies don\'t drag duplicate React distributions into their node_modules and that require("react") corresponds to the React instance you render your app with.',
	      'If you\'re using a precompiled version of React, see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react for integration instructions.'
	    );
	  }

	  didWarn = true;
	}

	var RootInstanceProvider = {
	  injection: {
	    injectProvider: function (provider) {
	      injectedProvider = provider;
	    }
	  },

	  getRootInstances: function (ReactMount) {
	    if (injectedProvider) {
	      return injectedProvider.getRootInstances();
	    }

	    var instances = ReactMount && getRootInstancesFromReactMount(ReactMount) || [];
	    if (!Object.keys(instances).length) {
	      warnOnce();
	    }

	    return instances;
	  }
	};

	module.exports = RootInstanceProvider;

/***/ },

/***/ 562:
/***/ function(module, exports) {

	'use strict';

	function getRootInstancesFromReactMount(ReactMount) {
	  return ReactMount._instancesByReactRootID || ReactMount._instancesByContainerID || [];
	}

	module.exports = getRootInstancesFromReactMount;

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(553), RootInstanceProvider = __webpack_require__(561), ReactMount = __webpack_require__(28), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(161);

	var _actions = __webpack_require__(564);

	var _Question = __webpack_require__(568);

	var _Question2 = _interopRequireDefault(_Question);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionPage = function (_React$Component) {
	  _inherits(QuestionPage, _React$Component);

	  function QuestionPage(props) {
	    _classCallCheck(this, QuestionPage);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionPage).call(this, props));
	  }

	  _createClass(QuestionPage, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'goQuestion',
	    value: function goQuestion(levelId, questionIndex, correct) {
	      var dispatch = this.props.dispatch;

	      dispatch((0, _actions.enterQuestion)(levelId, questionIndex, correct));
	    }
	  }, {
	    key: 'goWiki',
	    value: function goWiki(levelId, questionIndex, correct) {
	      var dispatch = this.props.dispatch;

	      dispatch((0, _actions.enterWiki)(levelId, questionIndex, correct));
	    }
	  }, {
	    key: 'goResult',
	    value: function goResult(levelId, correct) {
	      var dispatch = this.props.dispatch;

	      dispatch((0, _actions.enterResult)(levelId, correct));
	    }
	  }, {
	    key: 'goHome',
	    value: function goHome() {
	      var dispatch = this.props.dispatch;

	      dispatch((0, _actions.enterHome)());
	      this.props.navigator.pop();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var childProps = {
	        goWiki: this.goWiki.bind(this),
	        goQuestion: this.goQuestion.bind(this),
	        goResult: this.goResult.bind(this),
	        goHome: this.goHome.bind(this),
	        levelId: this.props.levelId || 1,
	        index: this.props.questionIndex || 1,
	        data: this.props.questionData,
	        levelListData: this.props.levelListData,
	        correct: this.props.correct || 0
	      };

	      switch (this.props.action) {
	        default:
	          return _react2.default.createElement(_Question2.default, null);
	      }
	    }
	  }]);

	  return QuestionPage;
	}(_react2.default.Component);

	function mapStateToProps(state) {
	  var action = state.action;
	  var levelId = state.levelId;
	  var questionIndex = state.questionIndex;

	  return {
	    action: action,
	    levelId: levelId,
	    questionIndex: questionIndex,
	    questionData: state.wordData,
	    levelListData: state.levelListData,
	    correct: state.correct
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(QuestionPage);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(565); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "QuestionPage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(482)(module)))

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(553), RootInstanceProvider = __webpack_require__(561), ReactMount = __webpack_require__(28), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.enterHome = enterHome;
	exports.enterLevel = enterLevel;
	exports.enterQuestion = enterQuestion;
	exports.enterWiki = enterWiki;
	exports.enterResult = enterResult;
	exports.loadProcess = loadProcess;
	var ENTER_LEVEL = exports.ENTER_LEVEL = 'ENTER_LEVEL';
	var ENTER_HOME = exports.ENTER_HOME = 'ENTER_HOME';
	var ENTER_QUESTION = exports.ENTER_QUESTION = 'ENTER_QUESTION';
	var ENTER_WIKI = exports.ENTER_WIKI = 'ENTER_WIKI';
	var ENTER_RESULT = exports.ENTER_RESULT = 'ENTER_RESULT';
	var LOAD_PROCESS = exports.LOAD_PROCESS = 'LOAD_PROCESS';

	function enterHome() {
	    return {
	        type: ENTER_HOME
	    };
	}

	function enterLevel(levelId, showIntro) {
	    return {
	        type: ENTER_LEVEL,
	        levelId: levelId,
	        questionIndex: (levelId - 1) * 16 + 1,
	        showIntro: showIntro
	    };
	}

	function enterQuestion(levelId, questionIndex, correct) {
	    return {
	        type: ENTER_QUESTION,
	        levelId: levelId,
	        questionIndex: questionIndex,
	        correct: correct
	    };
	}

	function enterWiki(levelId, questionIndex, correct) {
	    return {
	        type: ENTER_WIKI,
	        levelId: levelId,
	        questionIndex: questionIndex,
	        correct: correct
	    };
	}

	function enterResult(levelId, correct) {
	    return {
	        type: ENTER_RESULT,
	        levelId: levelId,
	        correct: correct
	    };
	}

	function loadProcess(user, newData) {
	    return {
	        type: LOAD_PROCESS,
	        user: user,
	        newData: newData
	    };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(565); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(482)(module)))

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isReactClassish = __webpack_require__(566),
	    isReactElementish = __webpack_require__(567);

	function makeExportsHot(m, React) {
	  if (isReactElementish(m.exports, React)) {
	    // React elements are never valid React classes
	    return false;
	  }

	  var freshExports = m.exports,
	      exportsReactClass = isReactClassish(m.exports, React),
	      foundReactClasses = false;

	  if (exportsReactClass) {
	    m.exports = m.makeHot(m.exports, '__MODULE_EXPORTS');
	    foundReactClasses = true;
	  }

	  for (var key in m.exports) {
	    if (!Object.prototype.hasOwnProperty.call(freshExports, key)) {
	      continue;
	    }

	    if (exportsReactClass && key === 'type') {
	      // React 0.12 also puts classes under `type` property for compat.
	      // Skip to avoid updating twice.
	      continue;
	    }

	    var value;
	    try {
	      value = freshExports[key];
	    } catch (err) {
	      continue;
	    }

	    if (!isReactClassish(value, React)) {
	      continue;
	    }

	    if (Object.getOwnPropertyDescriptor(m.exports, key).writable) {
	      m.exports[key] = m.makeHot(value, '__MODULE_EXPORTS_' + key);
	      foundReactClasses = true;
	    } else {
	      console.warn("Can't make class " + key + " hot reloadable due to being read-only. To fix this you can try two solutions. First, you can exclude files or directories (for example, /node_modules/) using 'exclude' option in loader configuration. Second, if you are using Babel, you can enable loose mode for `es6.modules` using the 'loose' option. See: http://babeljs.io/docs/advanced/loose/ and http://babeljs.io/docs/usage/options/");
	    }
	  }

	  return foundReactClasses;
	}

	module.exports = makeExportsHot;


/***/ },

/***/ 566:
/***/ function(module, exports) {

	function hasRender(Class) {
	  var prototype = Class.prototype;
	  if (!prototype) {
	    return false;
	  }

	  return typeof prototype.render === 'function';
	}

	function descendsFromReactComponent(Class, React) {
	  if (!React.Component) {
	    return false;
	  }

	  var Base = Object.getPrototypeOf(Class);
	  while (Base) {
	    if (Base === React.Component) {
	      return true;
	    }

	    Base = Object.getPrototypeOf(Base);
	  }

	  return false;
	}

	function isReactClassish(Class, React) {
	  if (typeof Class !== 'function') {
	    return false;
	  }

	  // React 0.13
	  if (hasRender(Class) || descendsFromReactComponent(Class, React)) {
	    return true;
	  }

	  // React 0.12 and earlier
	  if (Class.type && hasRender(Class.type)) {
	    return true;
	  }

	  return false;
	}

	module.exports = isReactClassish;

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	var isReactClassish = __webpack_require__(566);

	function isReactElementish(obj, React) {
	  if (!obj) {
	    return false;
	  }

	  return Object.prototype.toString.call(obj.props) === '[object Object]' &&
	         isReactClassish(obj.type, React);
	}

	module.exports = isReactElementish;

/***/ },

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

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c863e9b1308aa4f0ed700f0b16381abf.png";

/***/ },

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(553), RootInstanceProvider = __webpack_require__(561), ReactMount = __webpack_require__(28), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(168);

	var _reducers = __webpack_require__(571);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore(initialState) {
	  var store = (0, _redux.createStore)(_reducers2.default, initialState);
	  return store;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(565); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "configStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(482)(module)))

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(553), RootInstanceProvider = __webpack_require__(561), ReactMount = __webpack_require__(28), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _actions = __webpack_require__(564);

	function updateData(state, action) {
	    var star = 0;
	    if (action.correct == 8) {
	        star = 3;
	    } else if (action.correct == 7) {
	        star = 2;
	    } else if (action.correct == 6) {
	        star = 1;
	    }
	    if (state.levelListData) {
	        var old = Number(state.levelListData.items[action.levelId - 1].process.split('/')[0]);
	        var now = action.correct > old ? action.correct : old;
	        var newData = Object.assign({}, state.levelListData);
	        newData.items[action.levelId - 1].process = '' + now + '/8';
	        if (action.levelId < newData.items.length && star != 0) {
	            newData.items[action.levelId].is_light = true;
	        }
	        return newData;
	    }
	}

	function reducer(state, action) {
	    switch (action.type) {
	        case _actions.ENTER_LEVEL:
	            console.log('reducer');
	            return Object.assign({}, state, {
	                levelId: action.levelId,
	                inLevel: true,
	                questionIndex: action.questionIndex,
	                correct: 0,
	                showIntro: action.showIntro,
	                action: action.showIntro ? '' : 'question'
	            });
	        case _actions.ENTER_QUESTION:
	            return Object.assign({}, state, {
	                levelId: action.levelId,
	                questionIndex: action.questionIndex,
	                correct: action.correct,
	                action: 'question'
	            });
	        case _actions.ENTER_WIKI:
	            return Object.assign({}, state, {
	                levelId: action.levelId,
	                questionIndex: action.questionIndex,
	                correct: action.correct,
	                action: 'wiki'
	            });
	        case _actions.ENTER_RESULT:
	            return Object.assign({}, state, {
	                levelId: action.levelId,
	                correct: action.correct,
	                levelListData: updateData(state, action),
	                action: 'result'
	            });
	        case _actions.ENTER_HOME:
	            return Object.assign({}, state, {
	                inLevel: false
	            });
	        case _actions.LOAD_PROCESS:
	            return Object.assign({}, state, {
	                levelListData: action.newData,
	                user: action.user
	            });
	        default:
	            return state;
	    }
	}

	exports.default = reducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(565); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(482)(module)))

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(553), RootInstanceProvider = __webpack_require__(561), ReactMount = __webpack_require__(28), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(565); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "config.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(482)(module)))

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(553), RootInstanceProvider = __webpack_require__(561), ReactMount = __webpack_require__(28), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultStyle = {
	    base: {
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
	    ispressed: {
	        backgroundColor: '#eee9dd'
	    }
	};

	var Button = function (_React$Component) {
	    _inherits(Button, _React$Component);

	    function Button() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Button);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Button)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            style: defaultStyle.base
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Button, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.onMouseUp();
	        }
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown() {
	            var pressedStyle = Object.assign({}, this.props.style || defaultStyle.base, this.props.pressStyle || defaultStyle.ispressed);
	            this.setState({ style: pressedStyle });
	        }
	    }, {
	        key: 'onMouseUp',
	        value: function onMouseUp() {

	            if (this.props.style) {
	                this.setState({ style: this.props.style });
	            } else {
	                this.setState({ style: defaultStyle.base });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'button',
	                { style: this.state.style, onMouseDown: this.onMouseDown.bind(this), onMouseUp: this.onMouseUp.bind(this), onTouchStart: this.onMouseDown.bind(this), onTouchEnd: this.onMouseUp.bind(this) },
	                this.props.children
	            );
	        }
	    }]);

	    return Button;
	}(_react2.default.Component);

	exports.default = Button;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(565); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "button.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(482)(module)))

/***/ }

});