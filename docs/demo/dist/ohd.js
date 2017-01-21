(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babelNotNeeded"));
	else if(typeof define === 'function' && define.amd)
		define(["babelNotNeeded"], factory);
	else if(typeof exports === 'object')
		exports["objectHistoryDebugger"] = factory(require("babelNotNeeded"));
	else
		root["objectHistoryDebugger"] = factory(root["babelNotNeeded"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var CodePreprocessor = __webpack_require__(1);
	var babelPlugin = __webpack_require__(3);
	var resolveFrameWorkerAsString = __webpack_require__(4);
	var ohd = __webpack_require__(5);

	window.fromJSResolveFrameWorkerCode = resolveFrameWorkerAsString;
	window.codePreprocessor = new __odpCodePreprocessorClass({ babelPlugin: babelPlugin });
	window.codePreprocessor.enable();
	window.f__useValue = function (v) {
	  return v;
	};

	module.exports = ohd;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	exports["CodePreprocessor"] =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};
		/******/
		/******/ // The require function
		/******/function __webpack_require__(moduleId) {
			/******/
			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;
			/******/
			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };
			/******/
			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
			/******/
			/******/ // Flag the module as loaded
			/******/module.loaded = true;
			/******/
			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}
		/******/
		/******/
		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;
		/******/
		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;
		/******/
		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";
		/******/
		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(1);

		/***/
	},
	/* 1 */
	/***/function (module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _processJavaScriptCode = __webpack_require__(2);

		var _processJavaScriptCode2 = _interopRequireDefault(_processJavaScriptCode);

		var _underscore = __webpack_require__(5);

		var _underscore2 = _interopRequireDefault(_underscore);

		var _createResolveFrameWorker = __webpack_require__(6);

		var _createResolveFrameWorker2 = _interopRequireDefault(_createResolveFrameWorker);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		var nativeEval = window.eval;
		var nativeHTMLScriptElementTextDescriptor = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "text");
		var nativeFunction = window.Function;
		var nativeNodeTextContentDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
		var nativeDocumentWrite = document.write;
		var nativeAppendChildDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, "appendChild");
		var nativeInsertBefore = Node.prototype.insertBefore;

		var CodePreprocessor = function () {
			function CodePreprocessor(_ref) {
				var babelPlugin = _ref.babelPlugin;

				_classCallCheck(this, CodePreprocessor);

				this.documentReadyState = "loading";
				this.babelPlugin = babelPlugin;
				this.onCodeProcessed = function () {};
				this.getNewFunctionCode = function (fnStart, code, fnEnd) {
					return fnStart + code + fnEnd;
				};
				this.useValue = function (val) {
					return val;
				};
				this.makeDocumentWrite = function (write) {
					return function () {
						write.apply(this, arguments);
					};
				};
				this.makeAppendChild = function (appendChild) {
					return function () {
						return appendChild.apply(this, arguments);
					};
				};
				this.onBeforeEnable = function () {};
				this.onAfterEnable = function () {};
				this.onBeforeDisable = function () {};
				this.onAfterDisable = function () {};
				this.isEnabled = false;

				this.loadScriptTag = function (script, callback, container) {
					if (window.__loadScriptTag) {
						// Chrome extension
						window.__loadScriptTag.apply(null, arguments);
					} else {
						// local server
						nativeAppendChildDescriptor.value.apply(container, [script]);
					}
				};

				var self = this;
				this.preprocessCode = function (code, options) {
					self.disable();
					var ret = (0, _processJavaScriptCode2.default)(self.babelPlugin)(code, options);
					self.enable();
					return ret;
				};

				this.setGlobalFunctions();

				this.resolveFrameWorker = (0, _createResolveFrameWorker2.default)();
				this.resolveFrameWorker.on("fetchUrl", function (url, cb) {
					if (window.__sendMessageToBackgroundPage) {
						window.__sendMessageToBackgroundPage("fetchUrl", {
							url: url
						}, cb);
					} else {
						var r = new XMLHttpRequest();
						r.addEventListener("load", function () {
							cb(f__useValue(r.responseText));
						});
						r.open("GET", url);
						r.send();
					}
				});
			}

			_createClass(CodePreprocessor, [{
				key: "resolveFrame",
				value: function resolveFrame(frameString, callback) {
					this.resolveFrameWorker.send("resolveFrame", frameString, callback);
				}
			}, {
				key: "setGlobalFunctions",
				value: function setGlobalFunctions() {
					var self = this;
					window.f__getReadyState = function f__getReadyState(obj) {
						if (obj === document) {
							return self.documentReadyState;
						} else {
							return obj.readyState;
						}
					};
					window.f__setDocumentReadyState = function f__setDocumentReadyState(value) {
						self.documentReadyState = value;
					};
				}
			}, {
				key: "setOptions",
				value: function setOptions(_ref2) {
					var onCodeProcessed = _ref2.onCodeProcessed,
					    getNewFunctionCode = _ref2.getNewFunctionCode,
					    useValue = _ref2.useValue,
					    makeDocumentWrite = _ref2.makeDocumentWrite,
					    onBeforeEnable = _ref2.onBeforeEnable,
					    onBeforeDisable = _ref2.onBeforeDisable,
					    onAfterEnable = _ref2.onAfterEnable,
					    onAfterDisable = _ref2.onAfterDisable,
					    makeAppendChild = _ref2.makeAppendChild;

					this.onCodeProcessed = onCodeProcessed;
					this.getNewFunctionCode = getNewFunctionCode;
					this.useValue = useValue;
					this.makeDocumentWrite = makeDocumentWrite;
					this.makeAppendChild = makeAppendChild;

					if (onBeforeEnable) {
						this.onBeforeEnable = onBeforeEnable;
					}
					if (onAfterEnable) {
						this.onAfterEnable = onAfterEnable;
					}
					if (onBeforeDisable) {
						this.onBeforeDisable = onBeforeDisable;
					}
					if (onAfterDisable) {
						this.onAfterDisable = onAfterDisable;
					}

					var self = this;
				}
			}, {
				key: "enable",
				value: function enable() {
					var self = this;
					if (this.isEnabled) {
						return;
					}
					this.isEnabled = true;

					self.onBeforeEnable();

					function processScriptTagCodeAssignment(code) {
						var id = _underscore2.default.uniqueId();
						var filename = "ScriptTag" + id + ".js";
						var res = self.preprocessCode(code, { filename: filename });

						var fnName = "DynamicFunction" + id;
						var smFilename = filename + ".map";
						var evalCode = res.code + "\n" + "\n//# sourceURL=" + filename + "\n//# sourceMappingURL=" + smFilename;

						self.onCodeProcessed(filename, code, evalCode, res.map);

						return evalCode;
					}

					window.eval = function (code) {
						if (typeof self.useValue(code) !== "string") {
							return code;
						}

						var id = _underscore2.default.uniqueId();
						var filename = "DynamicScript" + id + ".js";
						var res = self.preprocessCode(code, { filename: filename });

						var smFilename = filename + ".map";
						var evalCode = res.code + "\n//# sourceURL=" + filename + "\n//# sourceMappingURL=" + smFilename;

						self.onCodeProcessed(filename, code, evalCode, res.map);

						return nativeEval(evalCode);
					};

					["text", "textContent"].forEach(function handleTextAssignment(propertyName) {
						Object.defineProperty(HTMLScriptElement.prototype, propertyName, {
							get: function get() {
								// text !== textContent, but close enough
								return nativeHTMLScriptElementTextDescriptor.get.apply(this, arguments);
							},
							set: function set(text) {
								text = processScriptTagCodeAssignment(text);
								// text !== textContent, but close enough
								return nativeHTMLScriptElementTextDescriptor.set.apply(this, [text]);
							},
							configurable: true
						});
					});

					window.Function = function (code) {
						var args = Array.prototype.slice.apply(arguments);
						var code = args.pop();
						code = (0, _processJavaScriptCode.removeSourceMapIfAny)(code);
						var argsWithoutCode = args.slice();

						var id = _underscore2.default.uniqueId();
						var filename = "DynamicFunction" + id + ".js";

						var fnName = "DynamicFunction" + id;
						var fnStart = "function " + fnName + "(" + argsWithoutCode.join(",") + "){";
						var fnEnd = "}";
						code = self.getNewFunctionCode(fnStart, code, fnEnd);

						var res = self.preprocessCode(self.useValue(code), { filename: filename });
						args.push(res.code);

						var smFilename = filename + ".map";
						var evalCode = res.code + "\n//# sourceURL=" + filename + "\n//# sourceMappingURL=" + smFilename;

						// create script tag instead of eval to prevent strict mode from propagating
						// (I'm guessing if you call eval from code that's in strict mode  strict mode will
						// propagate to the eval'd code.)
						var script = document.createElement("script");
						script.innerHTML = evalCode;
						nativeAppendChildDescriptor.value.apply(document.body, [script]);

						script.remove();

						self.onCodeProcessed(filename, code, evalCode, res.map, "Dynamic Function");

						return function () {
							return window[fnName].apply(this, arguments);
						};
					};

					window.Function.prototype = nativeFunction.prototype;

					document.write = this.makeDocumentWrite(function (str, beforeAppend) {
						var div = originalCreateElement.call(document, "div");
						div.innerHTML = str;
						nativeInnerHTMLDescriptor.set.call(div, str);

						if (beforeAppend) {
							beforeAppend(div);
						}

						var children = Array.from(div.childNodes);
						children.forEach(function (child) {
							document.body.appendChild(child);
						});

						return div;
					});

					Node.prototype.insertBefore = function (newEl, referenceEl) {
						if (newEl.tagName === "SCRIPT") {
							self.loadScriptTag(newEl, function () {}, this);
							return newEl;
						} else {
							return nativeInsertBefore.apply(this, arguments);
						}
					};

					Object.defineProperty(Node.prototype, "appendChild", {
						get: function get() {
							return function (appendedEl) {
								if (appendedEl.tagName === "SCRIPT") {
									self.loadScriptTag(appendedEl, function () {}, this);
									return appendedEl;
								} else {
									return self.makeAppendChild(nativeAppendChildDescriptor.value).apply(this, arguments);
								}
							};
						},
						set: function set() {
							console.error("Not overwriting Node.prototype.appendChild");
						}
					});

					this.onAfterEnable();
				}
			}, {
				key: "runFunctionWhileDisabled",
				value: function runFunctionWhileDisabled(fn) {
					var enabledAtStart = this.isEnabled;
					if (enabledAtStart) {
						this.disable();
					}
					try {
						var ret = fn();
					} finally {
						if (enabledAtStart) {
							this.enable();
						}
					}
					return ret;
				}
			}, {
				key: "disable",
				value: function disable() {
					this.onBeforeDisable();

					window.eval = nativeEval;
					Object.defineProperty(HTMLScriptElement.prototype, "text", nativeHTMLScriptElementTextDescriptor);
					// HTMLScriptElement doesn't normally have textcontent on own prototype, inherits the prop from Node
					Object.defineProperty(HTMLScriptElement.prototype, "textContent", nativeNodeTextContentDescriptor);
					Node.prototype.insertBefore = nativeInsertBefore;
					Object.defineProperty(Node.prototype, "appendChild", nativeAppendChildDescriptor);

					document.write = nativeDocumentWrite;
					window.Function = nativeFunction;

					this.isEnabled = false;

					this.onAfterDisable();
				}
			}]);

			return CodePreprocessor;
		}();

		exports.default = CodePreprocessor;
		window.__odpCodePreprocessorClass = CodePreprocessor;

		/***/
	},
	/* 2 */
	/***/function (module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.removeSourceMapIfAny = removeSourceMapIfAny;

		exports.default = function (babelPlugin) {

			return function processJavaScriptCode(code, options) {
				code = removeSourceMapIfAny(code);

				var ast = babylon.parse(code, {
					strict: false,
					allowReturnOutsideFunction: true,
					sourceFilename: options !== undefined ? options.filename + ".dontprocess" : undefined
				});

				babelPlugin.sourceCode = code;

				var res = babel.transformFromAst(ast, code, {
					sourceMaps: true,
					compact: false,
					plugins: [sharedPlugin, babelPlugin]
				});
				res.map.sourcesContent = undefined;

				delete babelPlugin.sourceCode;

				return res;
			};
		};

		var babel = __webpack_require__(3);
		var babylon = __webpack_require__(4);

		// This code is required to simulate the fake page load in the Chrome extension
		// Might reuse it later if moving the fake load / Babel processing to a separate module
		var sharedPlugin = function sharedPlugin(babel) {
			return {
				visitor: {
					MemberExpression: function MemberExpression(path) {
						var ancestor = path.parentPath;
						while (ancestor.node.type === "MemberExpression") {
							ancestor = ancestor.parentPath;
						}
						var ancestorIsAssignmentExpression = ancestor.node.type === "AssignmentExpression";

						// We can't overwrite document.readyState in the brower, so instead
						// try to intercept lookups for `readyState` properties
						// This won't catch document["ready" + "state"], but it's good enough
						if (!ancestorIsAssignmentExpression && (path.node.property.value === "readyState" || path.node.property.name === "readyState")) {
							var call = babel.types.callExpression(babel.types.identifier("f__getReadyState"), [path.node.object]);
							path.replaceWith(call);
						}
					}
				}
			};
		};

		var sourceMapRegex = /\/\/#[\W]*sourceMappingURL=.*$/;
		function removeSourceMapIfAny(code) {
			// In theory we might be able to use this source map, but right now
			// 1) parsing source maps on the frontend is hard, because FE JS doesn't
			//    natively support parsing UTF-8 base64 which is used for inline source maps
			// 2) It could break things if we don't take it out, so need to do some work
			//    to handle the existing source map properly
			if (sourceMapRegex.test(code)) {
				var sourceMapComment = code.match(/\/\/#[\W]*sourceMappingURL=.*$/)[0];
				code = code.replace(sourceMapComment, "");
			}
			return code;
		}

		/***/
	},
	/* 3 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(2);

		/***/
	},
	/* 4 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(2);

		/***/
	},
	/* 5 */
	/***/function (module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; //     Underscore.js 1.8.3
		//     http://underscorejs.org
		//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
		//     Underscore may be freely distributed under the MIT license.

		(function () {

			// Baseline setup
			// --------------

			// Establish the root object, `window` in the browser, or `exports` on the server.
			var root = this;

			// Save the previous value of the `_` variable.
			var previousUnderscore = root._;

			// Save bytes in the minified (but not gzipped) version:
			var ArrayProto = Array.prototype,
			    ObjProto = Object.prototype,
			    FuncProto = Function.prototype;

			// Create quick reference variables for speed access to core prototypes.
			var push = ArrayProto.push,
			    slice = ArrayProto.slice,
			    toString = ObjProto.toString,
			    hasOwnProperty = ObjProto.hasOwnProperty;

			// All **ECMAScript 5** native function implementations that we hope to use
			// are declared here.
			var nativeIsArray = Array.isArray,
			    nativeKeys = Object.keys,
			    nativeBind = FuncProto.bind,
			    nativeCreate = Object.create;

			// Naked function reference for surrogate-prototype-swapping.
			var Ctor = function Ctor() {};

			// Create a safe reference to the Underscore object for use below.
			var _ = function _(obj) {
				if (obj instanceof _) return obj;
				if (!(this instanceof _)) return new _(obj);
				this._wrapped = obj;
			};

			// Export the Underscore object for **Node.js**, with
			// backwards-compatibility for the old `require()` API. If we're in
			// the browser, add `_` as a global object.
			if (true) {
				if (typeof module !== 'undefined' && module.exports) {
					exports = module.exports = _;
				}
				exports._ = _;
			} else {
				root._ = _;
			}

			// Current version.
			_.VERSION = '1.8.3';

			// Internal function that returns an efficient (for current engines) version
			// of the passed-in callback, to be repeatedly applied in other Underscore
			// functions.
			var optimizeCb = function optimizeCb(func, context, argCount) {
				if (context === void 0) return func;
				switch (argCount == null ? 3 : argCount) {
					case 1:
						return function (value) {
							return func.call(context, value);
						};
					case 2:
						return function (value, other) {
							return func.call(context, value, other);
						};
					case 3:
						return function (value, index, collection) {
							return func.call(context, value, index, collection);
						};
					case 4:
						return function (accumulator, value, index, collection) {
							return func.call(context, accumulator, value, index, collection);
						};
				}
				return function () {
					return func.apply(context, arguments);
				};
			};

			// A mostly-internal function to generate callbacks that can be applied
			// to each element in a collection, returning the desired result — either
			// identity, an arbitrary callback, a property matcher, or a property accessor.
			var cb = function cb(value, context, argCount) {
				if (value == null) return _.identity;
				if (_.isFunction(value)) return optimizeCb(value, context, argCount);
				if (_.isObject(value)) return _.matcher(value);
				return _.property(value);
			};
			_.iteratee = function (value, context) {
				return cb(value, context, Infinity);
			};

			// An internal function for creating assigner functions.
			var createAssigner = function createAssigner(keysFunc, undefinedOnly) {
				return function (obj) {
					var length = arguments.length;
					if (length < 2 || obj == null) return obj;
					for (var index = 1; index < length; index++) {
						var source = arguments[index],
						    keys = keysFunc(source),
						    l = keys.length;
						for (var i = 0; i < l; i++) {
							var key = keys[i];
							if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
						}
					}
					return obj;
				};
			};

			// An internal function for creating a new object that inherits from another.
			var baseCreate = function baseCreate(prototype) {
				if (!_.isObject(prototype)) return {};
				if (nativeCreate) return nativeCreate(prototype);
				Ctor.prototype = prototype;
				var result = new Ctor();
				Ctor.prototype = null;
				return result;
			};

			var property = function property(key) {
				return function (obj) {
					return obj == null ? void 0 : obj[key];
				};
			};

			// Helper for collection methods to determine whether a collection
			// should be iterated as an array or as an object
			// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
			// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
			var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
			var getLength = property('length');
			var isArrayLike = function isArrayLike(collection) {
				var length = getLength(collection);
				return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
			};

			// Collection Functions
			// --------------------

			// The cornerstone, an `each` implementation, aka `forEach`.
			// Handles raw objects in addition to array-likes. Treats all
			// sparse array-likes as if they were dense.
			_.each = _.forEach = function (obj, iteratee, context) {
				iteratee = optimizeCb(iteratee, context);
				var i, length;
				if (isArrayLike(obj)) {
					for (i = 0, length = obj.length; i < length; i++) {
						iteratee(obj[i], i, obj);
					}
				} else {
					var keys = _.keys(obj);
					for (i = 0, length = keys.length; i < length; i++) {
						iteratee(obj[keys[i]], keys[i], obj);
					}
				}
				return obj;
			};

			// Return the results of applying the iteratee to each element.
			_.map = _.collect = function (obj, iteratee, context) {
				iteratee = cb(iteratee, context);
				var keys = !isArrayLike(obj) && _.keys(obj),
				    length = (keys || obj).length,
				    results = Array(length);
				for (var index = 0; index < length; index++) {
					var currentKey = keys ? keys[index] : index;
					results[index] = iteratee(obj[currentKey], currentKey, obj);
				}
				return results;
			};

			// Create a reducing function iterating left or right.
			function createReduce(dir) {
				// Optimized iterator function as using arguments.length
				// in the main function will deoptimize the, see #1991.
				function iterator(obj, iteratee, memo, keys, index, length) {
					for (; index >= 0 && index < length; index += dir) {
						var currentKey = keys ? keys[index] : index;
						memo = iteratee(memo, obj[currentKey], currentKey, obj);
					}
					return memo;
				}

				return function (obj, iteratee, memo, context) {
					iteratee = optimizeCb(iteratee, context, 4);
					var keys = !isArrayLike(obj) && _.keys(obj),
					    length = (keys || obj).length,
					    index = dir > 0 ? 0 : length - 1;
					// Determine the initial value if none is provided.
					if (arguments.length < 3) {
						memo = obj[keys ? keys[index] : index];
						index += dir;
					}
					return iterator(obj, iteratee, memo, keys, index, length);
				};
			}

			// **Reduce** builds up a single result from a list of values, aka `inject`,
			// or `foldl`.
			_.reduce = _.foldl = _.inject = createReduce(1);

			// The right-associative version of reduce, also known as `foldr`.
			_.reduceRight = _.foldr = createReduce(-1);

			// Return the first value which passes a truth test. Aliased as `detect`.
			_.find = _.detect = function (obj, predicate, context) {
				var key;
				if (isArrayLike(obj)) {
					key = _.findIndex(obj, predicate, context);
				} else {
					key = _.findKey(obj, predicate, context);
				}
				if (key !== void 0 && key !== -1) return obj[key];
			};

			// Return all the elements that pass a truth test.
			// Aliased as `select`.
			_.filter = _.select = function (obj, predicate, context) {
				var results = [];
				predicate = cb(predicate, context);
				_.each(obj, function (value, index, list) {
					if (predicate(value, index, list)) results.push(value);
				});
				return results;
			};

			// Return all the elements for which a truth test fails.
			_.reject = function (obj, predicate, context) {
				return _.filter(obj, _.negate(cb(predicate)), context);
			};

			// Determine whether all of the elements match a truth test.
			// Aliased as `all`.
			_.every = _.all = function (obj, predicate, context) {
				predicate = cb(predicate, context);
				var keys = !isArrayLike(obj) && _.keys(obj),
				    length = (keys || obj).length;
				for (var index = 0; index < length; index++) {
					var currentKey = keys ? keys[index] : index;
					if (!predicate(obj[currentKey], currentKey, obj)) return false;
				}
				return true;
			};

			// Determine if at least one element in the object matches a truth test.
			// Aliased as `any`.
			_.some = _.any = function (obj, predicate, context) {
				predicate = cb(predicate, context);
				var keys = !isArrayLike(obj) && _.keys(obj),
				    length = (keys || obj).length;
				for (var index = 0; index < length; index++) {
					var currentKey = keys ? keys[index] : index;
					if (predicate(obj[currentKey], currentKey, obj)) return true;
				}
				return false;
			};

			// Determine if the array or object contains a given item (using `===`).
			// Aliased as `includes` and `include`.
			_.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
				if (!isArrayLike(obj)) obj = _.values(obj);
				if (typeof fromIndex != 'number' || guard) fromIndex = 0;
				return _.indexOf(obj, item, fromIndex) >= 0;
			};

			// Invoke a method (with arguments) on every item in a collection.
			_.invoke = function (obj, method) {
				var args = slice.call(arguments, 2);
				var isFunc = _.isFunction(method);
				return _.map(obj, function (value) {
					var func = isFunc ? method : value[method];
					return func == null ? func : func.apply(value, args);
				});
			};

			// Convenience version of a common use case of `map`: fetching a property.
			_.pluck = function (obj, key) {
				return _.map(obj, _.property(key));
			};

			// Convenience version of a common use case of `filter`: selecting only objects
			// containing specific `key:value` pairs.
			_.where = function (obj, attrs) {
				return _.filter(obj, _.matcher(attrs));
			};

			// Convenience version of a common use case of `find`: getting the first object
			// containing specific `key:value` pairs.
			_.findWhere = function (obj, attrs) {
				return _.find(obj, _.matcher(attrs));
			};

			// Return the maximum element (or element-based computation).
			_.max = function (obj, iteratee, context) {
				var result = -Infinity,
				    lastComputed = -Infinity,
				    value,
				    computed;
				if (iteratee == null && obj != null) {
					obj = isArrayLike(obj) ? obj : _.values(obj);
					for (var i = 0, length = obj.length; i < length; i++) {
						value = obj[i];
						if (value > result) {
							result = value;
						}
					}
				} else {
					iteratee = cb(iteratee, context);
					_.each(obj, function (value, index, list) {
						computed = iteratee(value, index, list);
						if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
							result = value;
							lastComputed = computed;
						}
					});
				}
				return result;
			};

			// Return the minimum element (or element-based computation).
			_.min = function (obj, iteratee, context) {
				var result = Infinity,
				    lastComputed = Infinity,
				    value,
				    computed;
				if (iteratee == null && obj != null) {
					obj = isArrayLike(obj) ? obj : _.values(obj);
					for (var i = 0, length = obj.length; i < length; i++) {
						value = obj[i];
						if (value < result) {
							result = value;
						}
					}
				} else {
					iteratee = cb(iteratee, context);
					_.each(obj, function (value, index, list) {
						computed = iteratee(value, index, list);
						if (computed < lastComputed || computed === Infinity && result === Infinity) {
							result = value;
							lastComputed = computed;
						}
					});
				}
				return result;
			};

			// Shuffle a collection, using the modern version of the
			// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
			_.shuffle = function (obj) {
				var set = isArrayLike(obj) ? obj : _.values(obj);
				var length = set.length;
				var shuffled = Array(length);
				for (var index = 0, rand; index < length; index++) {
					rand = _.random(0, index);
					if (rand !== index) shuffled[index] = shuffled[rand];
					shuffled[rand] = set[index];
				}
				return shuffled;
			};

			// Sample **n** random values from a collection.
			// If **n** is not specified, returns a single random element.
			// The internal `guard` argument allows it to work with `map`.
			_.sample = function (obj, n, guard) {
				if (n == null || guard) {
					if (!isArrayLike(obj)) obj = _.values(obj);
					return obj[_.random(obj.length - 1)];
				}
				return _.shuffle(obj).slice(0, Math.max(0, n));
			};

			// Sort the object's values by a criterion produced by an iteratee.
			_.sortBy = function (obj, iteratee, context) {
				iteratee = cb(iteratee, context);
				return _.pluck(_.map(obj, function (value, index, list) {
					return {
						value: value,
						index: index,
						criteria: iteratee(value, index, list)
					};
				}).sort(function (left, right) {
					var a = left.criteria;
					var b = right.criteria;
					if (a !== b) {
						if (a > b || a === void 0) return 1;
						if (a < b || b === void 0) return -1;
					}
					return left.index - right.index;
				}), 'value');
			};

			// An internal function used for aggregate "group by" operations.
			var group = function group(behavior) {
				return function (obj, iteratee, context) {
					var result = {};
					iteratee = cb(iteratee, context);
					_.each(obj, function (value, index) {
						var key = iteratee(value, index, obj);
						behavior(result, value, key);
					});
					return result;
				};
			};

			// Groups the object's values by a criterion. Pass either a string attribute
			// to group by, or a function that returns the criterion.
			_.groupBy = group(function (result, value, key) {
				if (_.has(result, key)) result[key].push(value);else result[key] = [value];
			});

			// Indexes the object's values by a criterion, similar to `groupBy`, but for
			// when you know that your index values will be unique.
			_.indexBy = group(function (result, value, key) {
				result[key] = value;
			});

			// Counts instances of an object that group by a certain criterion. Pass
			// either a string attribute to count by, or a function that returns the
			// criterion.
			_.countBy = group(function (result, value, key) {
				if (_.has(result, key)) result[key]++;else result[key] = 1;
			});

			// Safely create a real, live array from anything iterable.
			_.toArray = function (obj) {
				if (!obj) return [];
				if (_.isArray(obj)) return slice.call(obj);
				if (isArrayLike(obj)) return _.map(obj, _.identity);
				return _.values(obj);
			};

			// Return the number of elements in an object.
			_.size = function (obj) {
				if (obj == null) return 0;
				return isArrayLike(obj) ? obj.length : _.keys(obj).length;
			};

			// Split a collection into two arrays: one whose elements all satisfy the given
			// predicate, and one whose elements all do not satisfy the predicate.
			_.partition = function (obj, predicate, context) {
				predicate = cb(predicate, context);
				var pass = [],
				    fail = [];
				_.each(obj, function (value, key, obj) {
					(predicate(value, key, obj) ? pass : fail).push(value);
				});
				return [pass, fail];
			};

			// Array Functions
			// ---------------

			// Get the first element of an array. Passing **n** will return the first N
			// values in the array. Aliased as `head` and `take`. The **guard** check
			// allows it to work with `_.map`.
			_.first = _.head = _.take = function (array, n, guard) {
				if (array == null) return void 0;
				if (n == null || guard) return array[0];
				return _.initial(array, array.length - n);
			};

			// Returns everything but the last entry of the array. Especially useful on
			// the arguments object. Passing **n** will return all the values in
			// the array, excluding the last N.
			_.initial = function (array, n, guard) {
				return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
			};

			// Get the last element of an array. Passing **n** will return the last N
			// values in the array.
			_.last = function (array, n, guard) {
				if (array == null) return void 0;
				if (n == null || guard) return array[array.length - 1];
				return _.rest(array, Math.max(0, array.length - n));
			};

			// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
			// Especially useful on the arguments object. Passing an **n** will return
			// the rest N values in the array.
			_.rest = _.tail = _.drop = function (array, n, guard) {
				return slice.call(array, n == null || guard ? 1 : n);
			};

			// Trim out all falsy values from an array.
			_.compact = function (array) {
				return _.filter(array, _.identity);
			};

			// Internal implementation of a recursive `flatten` function.
			var flatten = function flatten(input, shallow, strict, startIndex) {
				var output = [],
				    idx = 0;
				for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
					var value = input[i];
					if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
						//flatten current level of array or arguments object
						if (!shallow) value = flatten(value, shallow, strict);
						var j = 0,
						    len = value.length;
						output.length += len;
						while (j < len) {
							output[idx++] = value[j++];
						}
					} else if (!strict) {
						output[idx++] = value;
					}
				}
				return output;
			};

			// Flatten out an array, either recursively (by default), or just one level.
			_.flatten = function (array, shallow) {
				return flatten(array, shallow, false);
			};

			// Return a version of the array that does not contain the specified value(s).
			_.without = function (array) {
				return _.difference(array, slice.call(arguments, 1));
			};

			// Produce a duplicate-free version of the array. If the array has already
			// been sorted, you have the option of using a faster algorithm.
			// Aliased as `unique`.
			_.uniq = _.unique = function (array, isSorted, iteratee, context) {
				if (!_.isBoolean(isSorted)) {
					context = iteratee;
					iteratee = isSorted;
					isSorted = false;
				}
				if (iteratee != null) iteratee = cb(iteratee, context);
				var result = [];
				var seen = [];
				for (var i = 0, length = getLength(array); i < length; i++) {
					var value = array[i],
					    computed = iteratee ? iteratee(value, i, array) : value;
					if (isSorted) {
						if (!i || seen !== computed) result.push(value);
						seen = computed;
					} else if (iteratee) {
						if (!_.contains(seen, computed)) {
							seen.push(computed);
							result.push(value);
						}
					} else if (!_.contains(result, value)) {
						result.push(value);
					}
				}
				return result;
			};

			// Produce an array that contains the union: each distinct element from all of
			// the passed-in arrays.
			_.union = function () {
				return _.uniq(flatten(arguments, true, true));
			};

			// Produce an array that contains every item shared between all the
			// passed-in arrays.
			_.intersection = function (array) {
				var result = [];
				var argsLength = arguments.length;
				for (var i = 0, length = getLength(array); i < length; i++) {
					var item = array[i];
					if (_.contains(result, item)) continue;
					for (var j = 1; j < argsLength; j++) {
						if (!_.contains(arguments[j], item)) break;
					}
					if (j === argsLength) result.push(item);
				}
				return result;
			};

			// Take the difference between one array and a number of other arrays.
			// Only the elements present in just the first array will remain.
			_.difference = function (array) {
				var rest = flatten(arguments, true, true, 1);
				return _.filter(array, function (value) {
					return !_.contains(rest, value);
				});
			};

			// Zip together multiple lists into a single array -- elements that share
			// an index go together.
			_.zip = function () {
				return _.unzip(arguments);
			};

			// Complement of _.zip. Unzip accepts an array of arrays and groups
			// each array's elements on shared indices
			_.unzip = function (array) {
				var length = array && _.max(array, getLength).length || 0;
				var result = Array(length);

				for (var index = 0; index < length; index++) {
					result[index] = _.pluck(array, index);
				}
				return result;
			};

			// Converts lists into objects. Pass either a single array of `[key, value]`
			// pairs, or two parallel arrays of the same length -- one of keys, and one of
			// the corresponding values.
			_.object = function (list, values) {
				var result = {};
				for (var i = 0, length = getLength(list); i < length; i++) {
					if (values) {
						result[list[i]] = values[i];
					} else {
						result[list[i][0]] = list[i][1];
					}
				}
				return result;
			};

			// Generator function to create the findIndex and findLastIndex functions
			function createPredicateIndexFinder(dir) {
				return function (array, predicate, context) {
					predicate = cb(predicate, context);
					var length = getLength(array);
					var index = dir > 0 ? 0 : length - 1;
					for (; index >= 0 && index < length; index += dir) {
						if (predicate(array[index], index, array)) return index;
					}
					return -1;
				};
			}

			// Returns the first index on an array-like that passes a predicate test
			_.findIndex = createPredicateIndexFinder(1);
			_.findLastIndex = createPredicateIndexFinder(-1);

			// Use a comparator function to figure out the smallest index at which
			// an object should be inserted so as to maintain order. Uses binary search.
			_.sortedIndex = function (array, obj, iteratee, context) {
				iteratee = cb(iteratee, context, 1);
				var value = iteratee(obj);
				var low = 0,
				    high = getLength(array);
				while (low < high) {
					var mid = Math.floor((low + high) / 2);
					if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
				}
				return low;
			};

			// Generator function to create the indexOf and lastIndexOf functions
			function createIndexFinder(dir, predicateFind, sortedIndex) {
				return function (array, item, idx) {
					var i = 0,
					    length = getLength(array);
					if (typeof idx == 'number') {
						if (dir > 0) {
							i = idx >= 0 ? idx : Math.max(idx + length, i);
						} else {
							length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
						}
					} else if (sortedIndex && idx && length) {
						idx = sortedIndex(array, item);
						return array[idx] === item ? idx : -1;
					}
					if (item !== item) {
						idx = predicateFind(slice.call(array, i, length), _.isNaN);
						return idx >= 0 ? idx + i : -1;
					}
					for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
						if (array[idx] === item) return idx;
					}
					return -1;
				};
			}

			// Return the position of the first occurrence of an item in an array,
			// or -1 if the item is not included in the array.
			// If the array is large and already in sort order, pass `true`
			// for **isSorted** to use binary search.
			_.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
			_.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

			// Generate an integer Array containing an arithmetic progression. A port of
			// the native Python `range()` function. See
			// [the Python documentation](http://docs.python.org/library/functions.html#range).
			_.range = function (start, stop, step) {
				if (stop == null) {
					stop = start || 0;
					start = 0;
				}
				step = step || 1;

				var length = Math.max(Math.ceil((stop - start) / step), 0);
				var range = Array(length);

				for (var idx = 0; idx < length; idx++, start += step) {
					range[idx] = start;
				}

				return range;
			};

			// Function (ahem) Functions
			// ------------------

			// Determines whether to execute a function as a constructor
			// or a normal function with the provided arguments
			var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
				if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
				var self = baseCreate(sourceFunc.prototype);
				var result = sourceFunc.apply(self, args);
				if (_.isObject(result)) return result;
				return self;
			};

			// Create a function bound to a given object (assigning `this`, and arguments,
			// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
			// available.
			_.bind = function (func, context) {
				if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
				if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
				var args = slice.call(arguments, 2);
				var bound = function bound() {
					return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
				};
				return bound;
			};

			// Partially apply a function by creating a version that has had some of its
			// arguments pre-filled, without changing its dynamic `this` context. _ acts
			// as a placeholder, allowing any combination of arguments to be pre-filled.
			_.partial = function (func) {
				var boundArgs = slice.call(arguments, 1);
				var bound = function bound() {
					var position = 0,
					    length = boundArgs.length;
					var args = Array(length);
					for (var i = 0; i < length; i++) {
						args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
					}
					while (position < arguments.length) {
						args.push(arguments[position++]);
					}return executeBound(func, bound, this, this, args);
				};
				return bound;
			};

			// Bind a number of an object's methods to that object. Remaining arguments
			// are the method names to be bound. Useful for ensuring that all callbacks
			// defined on an object belong to it.
			_.bindAll = function (obj) {
				var i,
				    length = arguments.length,
				    key;
				if (length <= 1) throw new Error('bindAll must be passed function names');
				for (i = 1; i < length; i++) {
					key = arguments[i];
					obj[key] = _.bind(obj[key], obj);
				}
				return obj;
			};

			// Memoize an expensive function by storing its results.
			_.memoize = function (func, hasher) {
				var memoize = function memoize(key) {
					var cache = memoize.cache;
					var address = '' + (hasher ? hasher.apply(this, arguments) : key);
					if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
					return cache[address];
				};
				memoize.cache = {};
				return memoize;
			};

			// Delays a function for the given number of milliseconds, and then calls
			// it with the arguments supplied.
			_.delay = function (func, wait) {
				var args = slice.call(arguments, 2);
				return setTimeout(function () {
					return func.apply(null, args);
				}, wait);
			};

			// Defers a function, scheduling it to run after the current call stack has
			// cleared.
			_.defer = _.partial(_.delay, _, 1);

			// Returns a function, that, when invoked, will only be triggered at most once
			// during a given window of time. Normally, the throttled function will run
			// as much as it can, without ever going more than once per `wait` duration;
			// but if you'd like to disable the execution on the leading edge, pass
			// `{leading: false}`. To disable execution on the trailing edge, ditto.
			_.throttle = function (func, wait, options) {
				var context, args, result;
				var timeout = null;
				var previous = 0;
				if (!options) options = {};
				var later = function later() {
					previous = options.leading === false ? 0 : _.now();
					timeout = null;
					result = func.apply(context, args);
					if (!timeout) context = args = null;
				};
				return function () {
					var now = _.now();
					if (!previous && options.leading === false) previous = now;
					var remaining = wait - (now - previous);
					context = this;
					args = arguments;
					if (remaining <= 0 || remaining > wait) {
						if (timeout) {
							clearTimeout(timeout);
							timeout = null;
						}
						previous = now;
						result = func.apply(context, args);
						if (!timeout) context = args = null;
					} else if (!timeout && options.trailing !== false) {
						timeout = setTimeout(later, remaining);
					}
					return result;
				};
			};

			// Returns a function, that, as long as it continues to be invoked, will not
			// be triggered. The function will be called after it stops being called for
			// N milliseconds. If `immediate` is passed, trigger the function on the
			// leading edge, instead of the trailing.
			_.debounce = function (func, wait, immediate) {
				var timeout, args, context, timestamp, result;

				var later = function later() {
					var last = _.now() - timestamp;

					if (last < wait && last >= 0) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						if (!immediate) {
							result = func.apply(context, args);
							if (!timeout) context = args = null;
						}
					}
				};

				return function () {
					context = this;
					args = arguments;
					timestamp = _.now();
					var callNow = immediate && !timeout;
					if (!timeout) timeout = setTimeout(later, wait);
					if (callNow) {
						result = func.apply(context, args);
						context = args = null;
					}

					return result;
				};
			};

			// Returns the first function passed as an argument to the second,
			// allowing you to adjust arguments, run code before and after, and
			// conditionally execute the original function.
			_.wrap = function (func, wrapper) {
				return _.partial(wrapper, func);
			};

			// Returns a negated version of the passed-in predicate.
			_.negate = function (predicate) {
				return function () {
					return !predicate.apply(this, arguments);
				};
			};

			// Returns a function that is the composition of a list of functions, each
			// consuming the return value of the function that follows.
			_.compose = function () {
				var args = arguments;
				var start = args.length - 1;
				return function () {
					var i = start;
					var result = args[start].apply(this, arguments);
					while (i--) {
						result = args[i].call(this, result);
					}return result;
				};
			};

			// Returns a function that will only be executed on and after the Nth call.
			_.after = function (times, func) {
				return function () {
					if (--times < 1) {
						return func.apply(this, arguments);
					}
				};
			};

			// Returns a function that will only be executed up to (but not including) the Nth call.
			_.before = function (times, func) {
				var memo;
				return function () {
					if (--times > 0) {
						memo = func.apply(this, arguments);
					}
					if (times <= 1) func = null;
					return memo;
				};
			};

			// Returns a function that will be executed at most one time, no matter how
			// often you call it. Useful for lazy initialization.
			_.once = _.partial(_.before, 2);

			// Object Functions
			// ----------------

			// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
			var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
			var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

			function collectNonEnumProps(obj, keys) {
				var nonEnumIdx = nonEnumerableProps.length;
				var constructor = obj.constructor;
				var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

				// Constructor is a special case.
				var prop = 'constructor';
				if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

				while (nonEnumIdx--) {
					prop = nonEnumerableProps[nonEnumIdx];
					if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
						keys.push(prop);
					}
				}
			}

			// Retrieve the names of an object's own properties.
			// Delegates to **ECMAScript 5**'s native `Object.keys`
			_.keys = function (obj) {
				if (!_.isObject(obj)) return [];
				if (nativeKeys) return nativeKeys(obj);
				var keys = [];
				for (var key in obj) {
					if (_.has(obj, key)) keys.push(key);
				} // Ahem, IE < 9.
				if (hasEnumBug) collectNonEnumProps(obj, keys);
				return keys;
			};

			// Retrieve all the property names of an object.
			_.allKeys = function (obj) {
				if (!_.isObject(obj)) return [];
				var keys = [];
				for (var key in obj) {
					keys.push(key);
				} // Ahem, IE < 9.
				if (hasEnumBug) collectNonEnumProps(obj, keys);
				return keys;
			};

			// Retrieve the values of an object's properties.
			_.values = function (obj) {
				var keys = _.keys(obj);
				var length = keys.length;
				var values = Array(length);
				for (var i = 0; i < length; i++) {
					values[i] = obj[keys[i]];
				}
				return values;
			};

			// Returns the results of applying the iteratee to each element of the object
			// In contrast to _.map it returns an object
			_.mapObject = function (obj, iteratee, context) {
				iteratee = cb(iteratee, context);
				var keys = _.keys(obj),
				    length = keys.length,
				    results = {},
				    currentKey;
				for (var index = 0; index < length; index++) {
					currentKey = keys[index];
					results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
				}
				return results;
			};

			// Convert an object into a list of `[key, value]` pairs.
			_.pairs = function (obj) {
				var keys = _.keys(obj);
				var length = keys.length;
				var pairs = Array(length);
				for (var i = 0; i < length; i++) {
					pairs[i] = [keys[i], obj[keys[i]]];
				}
				return pairs;
			};

			// Invert the keys and values of an object. The values must be serializable.
			_.invert = function (obj) {
				var result = {};
				var keys = _.keys(obj);
				for (var i = 0, length = keys.length; i < length; i++) {
					result[obj[keys[i]]] = keys[i];
				}
				return result;
			};

			// Return a sorted list of the function names available on the object.
			// Aliased as `methods`
			_.functions = _.methods = function (obj) {
				var names = [];
				for (var key in obj) {
					if (_.isFunction(obj[key])) names.push(key);
				}
				return names.sort();
			};

			// Extend a given object with all the properties in passed-in object(s).
			_.extend = createAssigner(_.allKeys);

			// Assigns a given object with all the own properties in the passed-in object(s)
			// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
			_.extendOwn = _.assign = createAssigner(_.keys);

			// Returns the first key on an object that passes a predicate test
			_.findKey = function (obj, predicate, context) {
				predicate = cb(predicate, context);
				var keys = _.keys(obj),
				    key;
				for (var i = 0, length = keys.length; i < length; i++) {
					key = keys[i];
					if (predicate(obj[key], key, obj)) return key;
				}
			};

			// Return a copy of the object only containing the whitelisted properties.
			_.pick = function (object, oiteratee, context) {
				var result = {},
				    obj = object,
				    iteratee,
				    keys;
				if (obj == null) return result;
				if (_.isFunction(oiteratee)) {
					keys = _.allKeys(obj);
					iteratee = optimizeCb(oiteratee, context);
				} else {
					keys = flatten(arguments, false, false, 1);
					iteratee = function iteratee(value, key, obj) {
						return key in obj;
					};
					obj = Object(obj);
				}
				for (var i = 0, length = keys.length; i < length; i++) {
					var key = keys[i];
					var value = obj[key];
					if (iteratee(value, key, obj)) result[key] = value;
				}
				return result;
			};

			// Return a copy of the object without the blacklisted properties.
			_.omit = function (obj, iteratee, context) {
				if (_.isFunction(iteratee)) {
					iteratee = _.negate(iteratee);
				} else {
					var keys = _.map(flatten(arguments, false, false, 1), String);
					iteratee = function iteratee(value, key) {
						return !_.contains(keys, key);
					};
				}
				return _.pick(obj, iteratee, context);
			};

			// Fill in a given object with default properties.
			_.defaults = createAssigner(_.allKeys, true);

			// Creates an object that inherits from the given prototype object.
			// If additional properties are provided then they will be added to the
			// created object.
			_.create = function (prototype, props) {
				var result = baseCreate(prototype);
				if (props) _.extendOwn(result, props);
				return result;
			};

			// Create a (shallow-cloned) duplicate of an object.
			_.clone = function (obj) {
				if (!_.isObject(obj)) return obj;
				return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
			};

			// Invokes interceptor with the obj, and then returns obj.
			// The primary purpose of this method is to "tap into" a method chain, in
			// order to perform operations on intermediate results within the chain.
			_.tap = function (obj, interceptor) {
				interceptor(obj);
				return obj;
			};

			// Returns whether an object has a given set of `key:value` pairs.
			_.isMatch = function (object, attrs) {
				var keys = _.keys(attrs),
				    length = keys.length;
				if (object == null) return !length;
				var obj = Object(object);
				for (var i = 0; i < length; i++) {
					var key = keys[i];
					if (attrs[key] !== obj[key] || !(key in obj)) return false;
				}
				return true;
			};

			// Internal recursive comparison function for `isEqual`.
			var eq = function eq(a, b, aStack, bStack) {
				// Identical objects are equal. `0 === -0`, but they aren't identical.
				// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
				if (a === b) return a !== 0 || 1 / a === 1 / b;
				// A strict comparison is necessary because `null == undefined`.
				if (a == null || b == null) return a === b;
				// Unwrap any wrapped objects.
				if (a instanceof _) a = a._wrapped;
				if (b instanceof _) b = b._wrapped;
				// Compare `[[Class]]` names.
				var className = toString.call(a);
				if (className !== toString.call(b)) return false;
				switch (className) {
					// Strings, numbers, regular expressions, dates, and booleans are compared by value.
					case '[object RegExp]':
					// RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
					case '[object String]':
						// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
						// equivalent to `new String("5")`.
						return '' + a === '' + b;
					case '[object Number]':
						// `NaN`s are equivalent, but non-reflexive.
						// Object(NaN) is equivalent to NaN
						if (+a !== +a) return +b !== +b;
						// An `egal` comparison is performed for other numeric values.
						return +a === 0 ? 1 / +a === 1 / b : +a === +b;
					case '[object Date]':
					case '[object Boolean]':
						// Coerce dates and booleans to numeric primitive values. Dates are compared by their
						// millisecond representations. Note that invalid dates with millisecond representations
						// of `NaN` are not equivalent.
						return +a === +b;
				}

				var areArrays = className === '[object Array]';
				if (!areArrays) {
					if ((typeof a === "undefined" ? "undefined" : _typeof(a)) != 'object' || (typeof b === "undefined" ? "undefined" : _typeof(b)) != 'object') return false;

					// Objects with different constructors are not equivalent, but `Object`s or `Array`s
					// from different frames are.
					var aCtor = a.constructor,
					    bCtor = b.constructor;
					if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
						return false;
					}
				}
				// Assume equality for cyclic structures. The algorithm for detecting cyclic
				// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

				// Initializing stack of traversed objects.
				// It's done here since we only need them for objects and arrays comparison.
				aStack = aStack || [];
				bStack = bStack || [];
				var length = aStack.length;
				while (length--) {
					// Linear search. Performance is inversely proportional to the number of
					// unique nested structures.
					if (aStack[length] === a) return bStack[length] === b;
				}

				// Add the first object to the stack of traversed objects.
				aStack.push(a);
				bStack.push(b);

				// Recursively compare objects and arrays.
				if (areArrays) {
					// Compare array lengths to determine if a deep comparison is necessary.
					length = a.length;
					if (length !== b.length) return false;
					// Deep compare the contents, ignoring non-numeric properties.
					while (length--) {
						if (!eq(a[length], b[length], aStack, bStack)) return false;
					}
				} else {
					// Deep compare objects.
					var keys = _.keys(a),
					    key;
					length = keys.length;
					// Ensure that both objects contain the same number of properties before comparing deep equality.
					if (_.keys(b).length !== length) return false;
					while (length--) {
						// Deep compare each member
						key = keys[length];
						if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
					}
				}
				// Remove the first object from the stack of traversed objects.
				aStack.pop();
				bStack.pop();
				return true;
			};

			// Perform a deep comparison to check if two objects are equal.
			_.isEqual = function (a, b) {
				return eq(a, b);
			};

			// Is a given array, string, or object empty?
			// An "empty" object has no enumerable own-properties.
			_.isEmpty = function (obj) {
				if (obj == null) return true;
				if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
				return _.keys(obj).length === 0;
			};

			// Is a given value a DOM element?
			_.isElement = function (obj) {
				return !!(obj && obj.nodeType === 1);
			};

			// Is a given value an array?
			// Delegates to ECMA5's native Array.isArray
			_.isArray = nativeIsArray || function (obj) {
				return toString.call(obj) === '[object Array]';
			};

			// Is a given variable an object?
			_.isObject = function (obj) {
				var type = typeof obj === "undefined" ? "undefined" : _typeof(obj);
				return type === 'function' || type === 'object' && !!obj;
			};

			// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
			_.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
				_['is' + name] = function (obj) {
					return toString.call(obj) === '[object ' + name + ']';
				};
			});

			// Define a fallback version of the method in browsers (ahem, IE < 9), where
			// there isn't any inspectable "Arguments" type.
			if (!_.isArguments(arguments)) {
				_.isArguments = function (obj) {
					return _.has(obj, 'callee');
				};
			}

			// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
			// IE 11 (#1621), and in Safari 8 (#1929).
			if (typeof /./ != 'function' && (typeof Int8Array === "undefined" ? "undefined" : _typeof(Int8Array)) != 'object') {
				_.isFunction = function (obj) {
					return typeof obj == 'function' || false;
				};
			}

			// Is a given object a finite number?
			_.isFinite = function (obj) {
				return isFinite(obj) && !isNaN(parseFloat(obj));
			};

			// Is the given value `NaN`? (NaN is the only number which does not equal itself).
			_.isNaN = function (obj) {
				return _.isNumber(obj) && obj !== +obj;
			};

			// Is a given value a boolean?
			_.isBoolean = function (obj) {
				return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
			};

			// Is a given value equal to null?
			_.isNull = function (obj) {
				return obj === null;
			};

			// Is a given variable undefined?
			_.isUndefined = function (obj) {
				return obj === void 0;
			};

			// Shortcut function for checking if an object has a given property directly
			// on itself (in other words, not on a prototype).
			_.has = function (obj, key) {
				return obj != null && hasOwnProperty.call(obj, key);
			};

			// Utility Functions
			// -----------------

			// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
			// previous owner. Returns a reference to the Underscore object.
			_.noConflict = function () {
				root._ = previousUnderscore;
				return this;
			};

			// Keep the identity function around for default iteratees.
			_.identity = function (value) {
				return value;
			};

			// Predicate-generating functions. Often useful outside of Underscore.
			_.constant = function (value) {
				return function () {
					return value;
				};
			};

			_.noop = function () {};

			_.property = property;

			// Generates a function for a given object that returns a given property.
			_.propertyOf = function (obj) {
				return obj == null ? function () {} : function (key) {
					return obj[key];
				};
			};

			// Returns a predicate for checking whether an object has a given set of
			// `key:value` pairs.
			_.matcher = _.matches = function (attrs) {
				attrs = _.extendOwn({}, attrs);
				return function (obj) {
					return _.isMatch(obj, attrs);
				};
			};

			// Run a function **n** times.
			_.times = function (n, iteratee, context) {
				var accum = Array(Math.max(0, n));
				iteratee = optimizeCb(iteratee, context, 1);
				for (var i = 0; i < n; i++) {
					accum[i] = iteratee(i);
				}return accum;
			};

			// Return a random integer between min and max (inclusive).
			_.random = function (min, max) {
				if (max == null) {
					max = min;
					min = 0;
				}
				return min + Math.floor(Math.random() * (max - min + 1));
			};

			// A (possibly faster) way to get the current timestamp as an integer.
			_.now = Date.now || function () {
				return new Date().getTime();
			};

			// List of HTML entities for escaping.
			var escapeMap = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#x27;',
				'`': '&#x60;'
			};
			var unescapeMap = _.invert(escapeMap);

			// Functions for escaping and unescaping strings to/from HTML interpolation.
			var createEscaper = function createEscaper(map) {
				var escaper = function escaper(match) {
					return map[match];
				};
				// Regexes for identifying a key that needs to be escaped
				var source = '(?:' + _.keys(map).join('|') + ')';
				var testRegexp = RegExp(source);
				var replaceRegexp = RegExp(source, 'g');
				return function (string) {
					string = string == null ? '' : '' + string;
					return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
				};
			};
			_.escape = createEscaper(escapeMap);
			_.unescape = createEscaper(unescapeMap);

			// If the value of the named `property` is a function then invoke it with the
			// `object` as context; otherwise, return it.
			_.result = function (object, property, fallback) {
				var value = object == null ? void 0 : object[property];
				if (value === void 0) {
					value = fallback;
				}
				return _.isFunction(value) ? value.call(object) : value;
			};

			// Generate a unique integer id (unique within the entire client session).
			// Useful for temporary DOM ids.
			var idCounter = 0;
			_.uniqueId = function (prefix) {
				var id = ++idCounter + '';
				return prefix ? prefix + id : id;
			};

			// By default, Underscore uses ERB-style template delimiters, change the
			// following template settings to use alternative delimiters.
			_.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};

			// When customizing `templateSettings`, if you don't want to define an
			// interpolation, evaluation or escaping regex, we need one that is
			// guaranteed not to match.
			var noMatch = /(.)^/;

			// Certain characters need to be escaped so that they can be put into a
			// string literal.
			var escapes = {
				"'": "'",
				'\\': '\\',
				'\r': 'r',
				'\n': 'n',
				"\u2028": 'u2028',
				"\u2029": 'u2029'
			};

			var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

			var escapeChar = function escapeChar(match) {
				return '\\' + escapes[match];
			};

			// JavaScript micro-templating, similar to John Resig's implementation.
			// Underscore templating handles arbitrary delimiters, preserves whitespace,
			// and correctly escapes quotes within interpolated code.
			// NB: `oldSettings` only exists for backwards compatibility.
			_.template = function (text, settings, oldSettings) {
				if (!settings && oldSettings) settings = oldSettings;
				settings = _.defaults({}, settings, _.templateSettings);

				// Combine delimiters into one regular expression via alternation.
				var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

				// Compile the template source, escaping string literals appropriately.
				var index = 0;
				var source = "__p+='";
				text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
					source += text.slice(index, offset).replace(escaper, escapeChar);
					index = offset + match.length;

					if (escape) {
						source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
					} else if (interpolate) {
						source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
					} else if (evaluate) {
						source += "';\n" + evaluate + "\n__p+='";
					}

					// Adobe VMs need the match returned to produce the correct offest.
					return match;
				});
				source += "';\n";

				// If a variable is not specified, place data values in local scope.
				if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

				source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';

				try {
					var render = new Function(settings.variable || 'obj', '_', source);
				} catch (e) {
					e.source = source;
					throw e;
				}

				var template = function template(data) {
					return render.call(this, data, _);
				};

				// Provide the compiled source as a convenience for precompilation.
				var argument = settings.variable || 'obj';
				template.source = 'function(' + argument + '){\n' + source + '}';

				return template;
			};

			// Add a "chain" function. Start chaining a wrapped Underscore object.
			_.chain = function (obj) {
				var instance = _(obj);
				instance._chain = true;
				return instance;
			};

			// OOP
			// ---------------
			// If Underscore is called as a function, it returns a wrapped object that
			// can be used OO-style. This wrapper holds altered versions of all the
			// underscore functions. Wrapped objects may be chained.

			// Helper function to continue chaining intermediate results.
			var result = function result(instance, obj) {
				return instance._chain ? _(obj).chain() : obj;
			};

			// Add your own custom functions to the Underscore object.
			_.mixin = function (obj) {
				_.each(_.functions(obj), function (name) {
					var func = _[name] = obj[name];
					_.prototype[name] = function () {
						var args = [this._wrapped];
						push.apply(args, arguments);
						return result(this, func.apply(_, args));
					};
				});
			};

			// Add all of the Underscore functions to the wrapper object.
			_.mixin(_);

			// Add all mutator Array functions to the wrapper.
			_.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
				var method = ArrayProto[name];
				_.prototype[name] = function () {
					var obj = this._wrapped;
					method.apply(obj, arguments);
					if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
					return result(this, obj);
				};
			});

			// Add all accessor Array functions to the wrapper.
			_.each(['concat', 'join', 'slice'], function (name) {
				var method = ArrayProto[name];
				_.prototype[name] = function () {
					return result(this, method.apply(this._wrapped, arguments));
				};
			});

			// Extracts the result from a wrapped and chained object.
			_.prototype.value = function () {
				return this._wrapped;
			};

			// Provide unwrapping proxy for some methods used in engine operations
			// such as arithmetic and JSON stringification.
			_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

			_.prototype.toString = function () {
				return '' + this._wrapped;
			};

			// AMD registration happens at the end for compatibility with AMD loaders
			// that may not enforce next-turn semantics on modules. Even though general
			// practice for AMD registration is to be anonymous, underscore registers
			// as a named module because, like jQuery, it is a base library that is
			// popular enough to be bundled in a third party lib, but not be part of
			// an AMD load request. Those cases could generate an error when an
			// anonymous define() is called outside of a loader request.
			if (true) {
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
					return _;
				}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			}
		}).call(this);

		/***/
	},
	/* 6 */
	/***/function (module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = createResolveFrameWorker;

		var _RoundTripMessageWrapper = __webpack_require__(7);

		var _RoundTripMessageWrapper2 = _interopRequireDefault(_RoundTripMessageWrapper);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function createResolveFrameWorker() {
			var workerURL = "/fromjs-internals/resolveFrameWorker.js";
			if (window.fromJSInternalsRoot) {
				workerURL = window.fromJSInternalsRoot + "resolveFrameWorker.js";
			}
			if (window.fromJSResolveFrameWorkerCode) {
				// Load as string from background page, because
				// you can't load a Worker from a chrome-extension:// URL directly
				workerURL = URL.createObjectURL(new Blob([window.fromJSResolveFrameWorkerCode]));
			}
			var webWorkerInstance = new Worker(workerURL);
			var wrapper = new _RoundTripMessageWrapper2.default(webWorkerInstance, "Inspected App/ResolveFrameWorker");
			wrapper.terminate = function () {
				webWorkerInstance.terminate();
			};

			return wrapper;
		}

		/***/
	},
	/* 7 */
	/***/function (module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _underscore = __webpack_require__(5);

		var _underscore2 = _interopRequireDefault(_underscore);

		var _config = __webpack_require__(8);

		var _config2 = _interopRequireDefault(_config);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		var RoundTripMessageWrapper = function () {
			function RoundTripMessageWrapper(target, connectionName) {
				var _this = this;

				_classCallCheck(this, RoundTripMessageWrapper);

				var onMessage, postMessage, targetHref, close;

				var userPassedInFunctions = target.onMessage && target.postMessage;
				var targetIsWorkerGlobalScope = typeof DedicatedWorkerGlobalScope !== "undefined" && target instanceof DedicatedWorkerGlobalScope;
				var targetIsWebWorker = typeof Worker !== "undefined" && target instanceof Worker;
				// do this rather than `instanceof Window` because sometimes the constructor is a different
				// `Window` object I think (probalby the Window object of the parent frame)
				var targetIsWindow = target.constructor.toString().indexOf("function Window() { [native code] }") !== -1;
				if (userPassedInFunctions) {
					onMessage = target.onMessage;
					postMessage = target.postMessage;
				} else if (targetIsWorkerGlobalScope) {
					onMessage = function onMessage(callback) {
						target.addEventListener("message", callback);
					};
					close = function close() {
						target.removeEventListener("message", _this._handle);
					};
					postMessage = function postMessage() {
						target.postMessage.apply(null, arguments);
					};
				} else if (targetIsWebWorker) {
					onMessage = function onMessage(callback) {
						target.onmessage = callback;
					};
					close = function close() {
						target.onmessage = null;
					};
					postMessage = function postMessage() {
						target.postMessage.apply(target, arguments);
					};
				} else if (targetIsWindow) {
					targetHref = target.location.href;
					onMessage = function onMessage(callback) {
						window.addEventListener("message", callback);
					};
					close = function close() {
						window.removeEventListener("message", _this._handle);
					};
					postMessage = function postMessage() {
						target.postMessage.apply(target, arguments);
					};
				} else {
					throw Error("Unknown RoundTripMessageWrapper target");
				}

				this.argsForDebugging = arguments;
				this._handle = this._handle.bind(this);
				onMessage(this._handle);
				this._connectionName = connectionName;
				this._targetHref = targetHref;
				this.close = close;
				this._postMessage = function (data) {
					if (_this.postMessageWrapper) {
						_this.postMessageWrapper(doPostMessage);
					} else {
						doPostMessage();
					}

					function doPostMessage() {
						data.timeSent = new Date();
						postMessage(data, targetHref);
					}
				};
				this._handlers = {};
			}

			_createClass(RoundTripMessageWrapper, [{
				key: "_handle",
				value: function _handle(e) {
					var data = e.data;
					if (!data.isRoundTripMessage) {
						return;
					}

					var messageType = data.messageType;
					var handlers = this._handlers[messageType];

					if (_config2.default.logReceivedInspectorMessages) {
						var timeTaken = new Date().valueOf() - new Date(data.timeSent).valueOf();
						var size = "";
						var content = "";
						// size += "Size: " + (JSON.stringify(data).length / 1024) + "KB"
						// content = data
						console.log(this._connectionName + " received", messageType, "took", timeTaken + "ms", size, content);
					}

					if (!handlers) {
						return;
					}

					var self = this;
					var callback = function callback() {
						self._postMessage({
							isRoundTripMessage: true,
							messageType: messageType + data.id,
							args: Array.from(arguments),
							isResponse: true
						});
					};

					handlers.forEach(function (handler) {
						if (data.isResponse || !data.hasCallBack) {
							handler.apply(null, [].concat(_toConsumableArray(data.args)));
						} else {
							handler.apply(null, [].concat(_toConsumableArray(data.args), [callback]));
						}
					});
				}
			}, {
				key: "on",
				value: function on(messageType, callback) {
					var handlers = this._handlers[messageType];
					if (!handlers) {
						handlers = [];
					}
					handlers.push(callback);
					this._handlers[messageType] = handlers;
				}
			}, {
				key: "send",
				value: function send() {
					var args = Array.from(arguments);
					var messageType = args.shift();
					var canceled = false;

					var callback;
					var hasCallBack = typeof _underscore2.default.last(args) === "function";
					if (hasCallBack) {
						callback = args.pop();
					}

					var id = _underscore2.default.uniqueId();

					if (hasCallBack) {
						this.on(messageType + id, function () {
							if (canceled) {
								return;
							}
							callback.apply(null, arguments);
						});
					}

					this._postMessage({
						isRoundTripMessage: true,
						messageType: messageType,
						id: id,
						args: args,
						hasCallBack: hasCallBack
					});

					return function cancel() {
						canceled = true;
					};
				}
			}]);

			return RoundTripMessageWrapper;
		}();

		exports.default = RoundTripMessageWrapper;

		/***/
	},
	/* 8 */
	/***/function (module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function (process) {
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _underscore = __webpack_require__(5);

			var _underscore2 = _interopRequireDefault(_underscore);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var defaultConfig = {
				logUntrackedStrings: false,
				logUntrackedPropertyNames: false,
				validateHtmlMapping: false,
				logTracingSteps: false,
				// show value field below code, normally hidden for original page HTML
				alwaysShowValue: false,
				// Catch errors to avoid making app crash completely, but annoying for debugging
				catchUIErrors: true,
				logReceivedInspectorMessages: false,
				// useful for debugging, especially E2E tests in CI environement
				logBGPageLogsOnInspectedPage: false
			};

			var customConfig;
			if (process.env.NODE_ENV === "production") {
				customConfig = {};
			} else {
				customConfig = {
					alwaysShowValue: true,
					catchUIErrors: false,
					validateHtmlMapping: false,
					logTracingSteps: false,
					logReceivedInspectorMessages: false,
					logBGPageLogsOnInspectedPage: true
				};
			}

			var config = _underscore2.default.extend(defaultConfig, customConfig);

			exports.default = config;
			/* WEBPACK VAR INJECTION */
		}).call(exports, __webpack_require__(9));

		/***/
	},
	/* 9 */
	/***/function (module, exports) {

		// shim for using process in browser
		var process = module.exports = {};

		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.

		var cachedSetTimeout;
		var cachedClearTimeout;

		function defaultSetTimout() {
			throw new Error('setTimeout has not been defined');
		}
		function defaultClearTimeout() {
			throw new Error('clearTimeout has not been defined');
		}
		(function () {
			try {
				if (typeof setTimeout === 'function') {
					cachedSetTimeout = setTimeout;
				} else {
					cachedSetTimeout = defaultSetTimout;
				}
			} catch (e) {
				cachedSetTimeout = defaultSetTimout;
			}
			try {
				if (typeof clearTimeout === 'function') {
					cachedClearTimeout = clearTimeout;
				} else {
					cachedClearTimeout = defaultClearTimeout;
				}
			} catch (e) {
				cachedClearTimeout = defaultClearTimeout;
			}
		})();
		function runTimeout(fun) {
			if (cachedSetTimeout === setTimeout) {
				//normal enviroments in sane situations
				return setTimeout(fun, 0);
			}
			// if setTimeout wasn't available but was latter defined
			if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
				cachedSetTimeout = setTimeout;
				return setTimeout(fun, 0);
			}
			try {
				// when when somebody has screwed with setTimeout but no I.E. maddness
				return cachedSetTimeout(fun, 0);
			} catch (e) {
				try {
					// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
					return cachedSetTimeout.call(null, fun, 0);
				} catch (e) {
					// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
					return cachedSetTimeout.call(this, fun, 0);
				}
			}
		}
		function runClearTimeout(marker) {
			if (cachedClearTimeout === clearTimeout) {
				//normal enviroments in sane situations
				return clearTimeout(marker);
			}
			// if clearTimeout wasn't available but was latter defined
			if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
				cachedClearTimeout = clearTimeout;
				return clearTimeout(marker);
			}
			try {
				// when when somebody has screwed with setTimeout but no I.E. maddness
				return cachedClearTimeout(marker);
			} catch (e) {
				try {
					// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
					return cachedClearTimeout.call(null, marker);
				} catch (e) {
					// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
					// Some versions of I.E. have different rules for clearTimeout vs setTimeout
					return cachedClearTimeout.call(this, marker);
				}
			}
		}
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;

		function cleanUpNextTick() {
			if (!draining || !currentQueue) {
				return;
			}
			draining = false;
			if (currentQueue.length) {
				queue = currentQueue.concat(queue);
			} else {
				queueIndex = -1;
			}
			if (queue.length) {
				drainQueue();
			}
		}

		function drainQueue() {
			if (draining) {
				return;
			}
			var timeout = runTimeout(cleanUpNextTick);
			draining = true;

			var len = queue.length;
			while (len) {
				currentQueue = queue;
				queue = [];
				while (++queueIndex < len) {
					if (currentQueue) {
						currentQueue[queueIndex].run();
					}
				}
				queueIndex = -1;
				len = queue.length;
			}
			currentQueue = null;
			draining = false;
			runClearTimeout(timeout);
		}

		process.nextTick = function (fun) {
			var args = new Array(arguments.length - 1);
			if (arguments.length > 1) {
				for (var i = 1; i < arguments.length; i++) {
					args[i - 1] = arguments[i];
				}
			}
			queue.push(new Item(fun, args));
			if (queue.length === 1 && !draining) {
				runTimeout(drainQueue);
			}
		};

		// v8 likes predictible objects
		function Item(fun, array) {
			this.fun = fun;
			this.array = array;
		}
		Item.prototype.run = function () {
			this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;

		process.binding = function (name) {
			throw new Error('process.binding is not supported');
		};

		process.cwd = function () {
			return '/';
		};
		process.chdir = function (dir) {
			throw new Error('process.chdir is not supported');
		};
		process.umask = function () {
			return 0;
		};

		/***/
	}
	/******/]);
	//# sourceMappingURL=CodePreprocessor.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var plugin = function plugin(babel) {
	    return {
	        visitor: {
	            ObjectExpression: function ObjectExpression(path) {

	                path.node.properties.forEach(function (prop) {
	                    if (prop.key.type === "Identifier") {
	                        var keyLoc = prop.key.loc;
	                        prop.key = babel.types.stringLiteral(prop.key.name);
	                        prop.key.loc = keyLoc;
	                    }
	                });

	                var call = babel.types.callExpression(babel.types.identifier("__ohdMakeObject"), [babel.types.arrayExpression(path.node.properties.map(function (prop) {
	                    var type = babel.types.stringLiteral(prop.type);
	                    type.ignore = true;
	                    if (prop.type === "ObjectMethod") {
	                        // getter/setter
	                        var kind = babel.types.stringLiteral(prop.kind);
	                        kind.ignore = true;
	                        var propArray = babel.types.arrayExpression([type, prop.key, kind, babel.types.functionExpression(null, prop.params, prop.body)]);
	                        return propArray;
	                    } else {
	                        var propArray = babel.types.arrayExpression([type, prop.key, prop.value]);
	                        return propArray;
	                    }
	                    console.log("continue with type", prop.type);
	                }))]);
	                path.replaceWith(call);
	            },
	            AssignmentExpression: function AssignmentExpression(path) {
	                if (path.node.ignore) {
	                    return;
	                }

	                if (["+=", "-=", "/=", "*="].indexOf(path.node.operator) !== -1) {
	                    // I don't think this replacement is always going to be 100% equivalent
	                    // to the +=/... operation, but it's close enough for now
	                    // e.g. maybe there'd be props if path.node.left is sth like a.sth().aa would
	                    // call sth twice
	                    var operator = { "+=": "+", "-=": "-", "/=": "/", "*=": "*" }[path.node.operator];
	                    var value = babel.types.binaryExpression(operator, path.node.left, path.node.right);
	                    var replacement = babel.types.assignmentExpression("=", path.node.left, value);
	                    path.replaceWith(replacement);
	                }

	                if (path.node.operator === "=" && path.node.left.type === "MemberExpression") {
	                    var property;
	                    if (path.node.left.computed === true) {
	                        property = path.node.left.property;
	                    } else {
	                        property = babel.types.stringLiteral(path.node.left.property.name);
	                        property.loc = path.node.left.property.loc;
	                    }
	                    var assignExpression = babel.types.callExpression(babel.types.identifier("__ohdAssign"), [path.node.left.object, property, path.node.right]);
	                    assignExpression.loc = path.node.loc;
	                    path.replaceWith(assignExpression);
	                }
	            },
	            UnaryExpression: function UnaryExpression(path) {
	                if (path.node.operator === "delete") {
	                    var prop = path.node.argument.property;
	                    if (prop.type === "Identifier") {
	                        prop = babel.types.stringLiteral(prop.name);
	                    }
	                    var call = babel.types.callExpression(babel.types.identifier("__ohdDeleteProperty"), [path.node.argument.object, prop]);
	                    path.replaceWith(call);
	                }
	            }
	        }
	    };
	};

	if (false) {
	    window.babelPlugin = plugin;
	} else {
	    module.exports = plugin;
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	module.exports = decodeURI("/******/%20(function(modules)%20%7B%20//%20webpackBootstrap%0A/******/%20%09//%20The%20module%20cache%0A/******/%20%09var%20installedModules%20=%20%7B%7D;%0A/******/%0A/******/%20%09//%20The%20require%20function%0A/******/%20%09function%20__webpack_require__(moduleId)%20%7B%0A/******/%0A/******/%20%09%09//%20Check%20if%20module%20is%20in%20cache%0A/******/%20%09%09if(installedModules%5BmoduleId%5D)%0A/******/%20%09%09%09return%20installedModules%5BmoduleId%5D.exports;%0A/******/%0A/******/%20%09%09//%20Create%20a%20new%20module%20(and%20put%20it%20into%20the%20cache)%0A/******/%20%09%09var%20module%20=%20installedModules%5BmoduleId%5D%20=%20%7B%0A/******/%20%09%09%09exports:%20%7B%7D,%0A/******/%20%09%09%09id:%20moduleId,%0A/******/%20%09%09%09loaded:%20false%0A/******/%20%09%09%7D;%0A/******/%0A/******/%20%09%09//%20Execute%20the%20module%20function%0A/******/%20%09%09modules%5BmoduleId%5D.call(module.exports,%20module,%20module.exports,%20__webpack_require__);%0A/******/%0A/******/%20%09%09//%20Flag%20the%20module%20as%20loaded%0A/******/%20%09%09module.loaded%20=%20true;%0A/******/%0A/******/%20%09%09//%20Return%20the%20exports%20of%20the%20module%0A/******/%20%09%09return%20module.exports;%0A/******/%20%09%7D%0A/******/%0A/******/%0A/******/%20%09//%20expose%20the%20modules%20object%20(__webpack_modules__)%0A/******/%20%09__webpack_require__.m%20=%20modules;%0A/******/%0A/******/%20%09//%20expose%20the%20module%20cache%0A/******/%20%09__webpack_require__.c%20=%20installedModules;%0A/******/%0A/******/%20%09//%20__webpack_public_path__%0A/******/%20%09__webpack_require__.p%20=%20%22%22;%0A/******/%0A/******/%20%09//%20Load%20entry%20module%20and%20return%20exports%0A/******/%20%09return%20__webpack_require__(0);%0A/******/%20%7D)%0A/************************************************************************/%0A/******/%20(%7B%0A%0A/***/%200:%0A/***/%20function(module,%20exports,%20__webpack_require__)%20%7B%0A%0A%09module.exports%20=%20__webpack_require__(875);%0A%0A%0A/***/%20%7D,%0A%0A/***/%204:%0A/***/%20function(module,%20exports,%20__webpack_require__)%20%7B%0A%0A%09/*%20WEBPACK%20VAR%20INJECTION%20*/(function(process)%20%7B%22use%20strict%22;%0A%09%0A%09Object.defineProperty(exports,%20%22__esModule%22,%20%7B%0A%09%20%20%20%20value:%20true%0A%09%7D);%0A%09%0A%09var%20_underscore%20=%20__webpack_require__(6);%0A%09%0A%09var%20_underscore2%20=%20_interopRequireDefault(_underscore);%0A%09%0A%09function%20_interopRequireDefault(obj)%20%7B%20return%20obj%20&&%20obj.__esModule%20?%20obj%20:%20%7B%20default:%20obj%20%7D;%20%7D%0A%09%0A%09var%20defaultConfig%20=%20%7B%0A%09%20%20%20%20logUntrackedStrings:%20false,%0A%09%20%20%20%20logUntrackedPropertyNames:%20false,%0A%09%20%20%20%20validateHtmlMapping:%20false,%0A%09%20%20%20%20logTracingSteps:%20false,%0A%09%20%20%20%20//%20show%20value%20field%20below%20code,%20normally%20hidden%20for%20original%20page%20HTML%0A%09%20%20%20%20alwaysShowValue:%20false,%0A%09%20%20%20%20//%20Catch%20errors%20to%20avoid%20making%20app%20crash%20completely,%20but%20annoying%20for%20debugging%0A%09%20%20%20%20catchUIErrors:%20true,%0A%09%20%20%20%20logReceivedInspectorMessages:%20false,%0A%09%20%20%20%20//%20useful%20for%20debugging,%20especially%20E2E%20tests%20in%20CI%20environement%0A%09%20%20%20%20logBGPageLogsOnInspectedPage:%20false%0A%09%7D;%0A%09%0A%09var%20customConfig;%0A%09if%20(process.env.NODE_ENV%20===%20%22production%22)%20%7B%0A%09%20%20%20%20customConfig%20=%20%7B%7D;%0A%09%7D%20else%20%7B%0A%09%20%20%20%20customConfig%20=%20%7B%0A%09%20%20%20%20%20%20%20%20alwaysShowValue:%20true,%0A%09%20%20%20%20%20%20%20%20catchUIErrors:%20false,%0A%09%20%20%20%20%20%20%20%20validateHtmlMapping:%20false,%0A%09%20%20%20%20%20%20%20%20logTracingSteps:%20false,%0A%09%20%20%20%20%20%20%20%20logReceivedInspectorMessages:%20false,%0A%09%20%20%20%20%20%20%20%20logBGPageLogsOnInspectedPage:%20true%0A%09%20%20%20%20%7D;%0A%09%7D%0A%09%0A%09var%20config%20=%20_underscore2.default.extend(defaultConfig,%20customConfig);%0A%09%0A%09exports.default%20=%20config;%0A%09/*%20WEBPACK%20VAR%20INJECTION%20*/%7D.call(exports,%20__webpack_require__(5)))%0A%0A/***/%20%7D,%0A%0A/***/%205:%0A/***/%20function(module,%20exports)%20%7B%0A%0A%09//%20shim%20for%20using%20process%20in%20browser%0A%09var%20process%20=%20module.exports%20=%20%7B%7D;%0A%09%0A%09//%20cached%20from%20whatever%20global%20is%20present%20so%20that%20test%20runners%20that%20stub%20it%0A%09//%20don't%20break%20things.%20%20But%20we%20need%20to%20wrap%20it%20in%20a%20try%20catch%20in%20case%20it%20is%0A%09//%20wrapped%20in%20strict%20mode%20code%20which%20doesn't%20define%20any%20globals.%20%20It's%20inside%20a%0A%09//%20function%20because%20try/catches%20deoptimize%20in%20certain%20engines.%0A%09%0A%09var%20cachedSetTimeout;%0A%09var%20cachedClearTimeout;%0A%09%0A%09function%20defaultSetTimout()%20%7B%0A%09%20%20%20%20throw%20new%20Error('setTimeout%20has%20not%20been%20defined');%0A%09%7D%0A%09function%20defaultClearTimeout%20()%20%7B%0A%09%20%20%20%20throw%20new%20Error('clearTimeout%20has%20not%20been%20defined');%0A%09%7D%0A%09(function%20()%20%7B%0A%09%20%20%20%20try%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(typeof%20setTimeout%20===%20'function')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20cachedSetTimeout%20=%20setTimeout;%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20cachedSetTimeout%20=%20defaultSetTimout;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%20catch%20(e)%20%7B%0A%09%20%20%20%20%20%20%20%20cachedSetTimeout%20=%20defaultSetTimout;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20try%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(typeof%20clearTimeout%20===%20'function')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20cachedClearTimeout%20=%20clearTimeout;%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20cachedClearTimeout%20=%20defaultClearTimeout;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%20catch%20(e)%20%7B%0A%09%20%20%20%20%20%20%20%20cachedClearTimeout%20=%20defaultClearTimeout;%0A%09%20%20%20%20%7D%0A%09%7D%20())%0A%09function%20runTimeout(fun)%20%7B%0A%09%20%20%20%20if%20(cachedSetTimeout%20===%20setTimeout)%20%7B%0A%09%20%20%20%20%20%20%20%20//normal%20enviroments%20in%20sane%20situations%0A%09%20%20%20%20%20%20%20%20return%20setTimeout(fun,%200);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20//%20if%20setTimeout%20wasn't%20available%20but%20was%20latter%20defined%0A%09%20%20%20%20if%20((cachedSetTimeout%20===%20defaultSetTimout%20%7C%7C%20!cachedSetTimeout)%20&&%20setTimeout)%20%7B%0A%09%20%20%20%20%20%20%20%20cachedSetTimeout%20=%20setTimeout;%0A%09%20%20%20%20%20%20%20%20return%20setTimeout(fun,%200);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20try%20%7B%0A%09%20%20%20%20%20%20%20%20//%20when%20when%20somebody%20has%20screwed%20with%20setTimeout%20but%20no%20I.E.%20maddness%0A%09%20%20%20%20%20%20%20%20return%20cachedSetTimeout(fun,%200);%0A%09%20%20%20%20%7D%20catch(e)%7B%0A%09%20%20%20%20%20%20%20%20try%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20When%20we%20are%20in%20I.E.%20but%20the%20script%20has%20been%20evaled%20so%20I.E.%20doesn't%20trust%20the%20global%20object%20when%20called%20normally%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20cachedSetTimeout.call(null,%20fun,%200);%0A%09%20%20%20%20%20%20%20%20%7D%20catch(e)%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20same%20as%20above%20but%20when%20it's%20a%20version%20of%20I.E.%20that%20must%20have%20the%20global%20object%20for%20'this',%20hopfully%20our%20context%20correct%20otherwise%20it%20will%20throw%20a%20global%20error%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20cachedSetTimeout.call(this,%20fun,%200);%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%0A%09%0A%09%7D%0A%09function%20runClearTimeout(marker)%20%7B%0A%09%20%20%20%20if%20(cachedClearTimeout%20===%20clearTimeout)%20%7B%0A%09%20%20%20%20%20%20%20%20//normal%20enviroments%20in%20sane%20situations%0A%09%20%20%20%20%20%20%20%20return%20clearTimeout(marker);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20//%20if%20clearTimeout%20wasn't%20available%20but%20was%20latter%20defined%0A%09%20%20%20%20if%20((cachedClearTimeout%20===%20defaultClearTimeout%20%7C%7C%20!cachedClearTimeout)%20&&%20clearTimeout)%20%7B%0A%09%20%20%20%20%20%20%20%20cachedClearTimeout%20=%20clearTimeout;%0A%09%20%20%20%20%20%20%20%20return%20clearTimeout(marker);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20try%20%7B%0A%09%20%20%20%20%20%20%20%20//%20when%20when%20somebody%20has%20screwed%20with%20setTimeout%20but%20no%20I.E.%20maddness%0A%09%20%20%20%20%20%20%20%20return%20cachedClearTimeout(marker);%0A%09%20%20%20%20%7D%20catch%20(e)%7B%0A%09%20%20%20%20%20%20%20%20try%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20When%20we%20are%20in%20I.E.%20but%20the%20script%20has%20been%20evaled%20so%20I.E.%20doesn't%20%20trust%20the%20global%20object%20when%20called%20normally%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20cachedClearTimeout.call(null,%20marker);%0A%09%20%20%20%20%20%20%20%20%7D%20catch%20(e)%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20same%20as%20above%20but%20when%20it's%20a%20version%20of%20I.E.%20that%20must%20have%20the%20global%20object%20for%20'this',%20hopfully%20our%20context%20correct%20otherwise%20it%20will%20throw%20a%20global%20error.%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20Some%20versions%20of%20I.E.%20have%20different%20rules%20for%20clearTimeout%20vs%20setTimeout%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20cachedClearTimeout.call(this,%20marker);%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%0A%09%0A%09%0A%09%7D%0A%09var%20queue%20=%20%5B%5D;%0A%09var%20draining%20=%20false;%0A%09var%20currentQueue;%0A%09var%20queueIndex%20=%20-1;%0A%09%0A%09function%20cleanUpNextTick()%20%7B%0A%09%20%20%20%20if%20(!draining%20%7C%7C%20!currentQueue)%20%7B%0A%09%20%20%20%20%20%20%20%20return;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20draining%20=%20false;%0A%09%20%20%20%20if%20(currentQueue.length)%20%7B%0A%09%20%20%20%20%20%20%20%20queue%20=%20currentQueue.concat(queue);%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20queueIndex%20=%20-1;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20if%20(queue.length)%20%7B%0A%09%20%20%20%20%20%20%20%20drainQueue();%0A%09%20%20%20%20%7D%0A%09%7D%0A%09%0A%09function%20drainQueue()%20%7B%0A%09%20%20%20%20if%20(draining)%20%7B%0A%09%20%20%20%20%20%20%20%20return;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20var%20timeout%20=%20runTimeout(cleanUpNextTick);%0A%09%20%20%20%20draining%20=%20true;%0A%09%0A%09%20%20%20%20var%20len%20=%20queue.length;%0A%09%20%20%20%20while(len)%20%7B%0A%09%20%20%20%20%20%20%20%20currentQueue%20=%20queue;%0A%09%20%20%20%20%20%20%20%20queue%20=%20%5B%5D;%0A%09%20%20%20%20%20%20%20%20while%20(++queueIndex%20%3C%20len)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(currentQueue)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20currentQueue%5BqueueIndex%5D.run();%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20queueIndex%20=%20-1;%0A%09%20%20%20%20%20%20%20%20len%20=%20queue.length;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20currentQueue%20=%20null;%0A%09%20%20%20%20draining%20=%20false;%0A%09%20%20%20%20runClearTimeout(timeout);%0A%09%7D%0A%09%0A%09process.nextTick%20=%20function%20(fun)%20%7B%0A%09%20%20%20%20var%20args%20=%20new%20Array(arguments.length%20-%201);%0A%09%20%20%20%20if%20(arguments.length%20%3E%201)%20%7B%0A%09%20%20%20%20%20%20%20%20for%20(var%20i%20=%201;%20i%20%3C%20arguments.length;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20args%5Bi%20-%201%5D%20=%20arguments%5Bi%5D;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20queue.push(new%20Item(fun,%20args));%0A%09%20%20%20%20if%20(queue.length%20===%201%20&&%20!draining)%20%7B%0A%09%20%20%20%20%20%20%20%20runTimeout(drainQueue);%0A%09%20%20%20%20%7D%0A%09%7D;%0A%09%0A%09//%20v8%20likes%20predictible%20objects%0A%09function%20Item(fun,%20array)%20%7B%0A%09%20%20%20%20this.fun%20=%20fun;%0A%09%20%20%20%20this.array%20=%20array;%0A%09%7D%0A%09Item.prototype.run%20=%20function%20()%20%7B%0A%09%20%20%20%20this.fun.apply(null,%20this.array);%0A%09%7D;%0A%09process.title%20=%20'browser';%0A%09process.browser%20=%20true;%0A%09process.env%20=%20%7B%7D;%0A%09process.argv%20=%20%5B%5D;%0A%09process.version%20=%20'';%20//%20empty%20string%20to%20avoid%20regexp%20issues%0A%09process.versions%20=%20%7B%7D;%0A%09%0A%09function%20noop()%20%7B%7D%0A%09%0A%09process.on%20=%20noop;%0A%09process.addListener%20=%20noop;%0A%09process.once%20=%20noop;%0A%09process.off%20=%20noop;%0A%09process.removeListener%20=%20noop;%0A%09process.removeAllListeners%20=%20noop;%0A%09process.emit%20=%20noop;%0A%09%0A%09process.binding%20=%20function%20(name)%20%7B%0A%09%20%20%20%20throw%20new%20Error('process.binding%20is%20not%20supported');%0A%09%7D;%0A%09%0A%09process.cwd%20=%20function%20()%20%7B%20return%20'/'%20%7D;%0A%09process.chdir%20=%20function%20(dir)%20%7B%0A%09%20%20%20%20throw%20new%20Error('process.chdir%20is%20not%20supported');%0A%09%7D;%0A%09process.umask%20=%20function()%20%7B%20return%200;%20%7D;%0A%0A%0A/***/%20%7D,%0A%0A/***/%206:%0A/***/%20function(module,%20exports,%20__webpack_require__)%20%7B%0A%0A%09var%20__WEBPACK_AMD_DEFINE_ARRAY__,%20__WEBPACK_AMD_DEFINE_RESULT__;//%20%20%20%20%20Underscore.js%201.8.3%0A%09//%20%20%20%20%20http://underscorejs.org%0A%09//%20%20%20%20%20(c)%202009-2015%20Jeremy%20Ashkenas,%20DocumentCloud%20and%20Investigative%20Reporters%20&%20Editors%0A%09//%20%20%20%20%20Underscore%20may%20be%20freely%20distributed%20under%20the%20MIT%20license.%0A%09%0A%09(function()%20%7B%0A%09%0A%09%20%20//%20Baseline%20setup%0A%09%20%20//%20--------------%0A%09%0A%09%20%20//%20Establish%20the%20root%20object,%20%60window%60%20in%20the%20browser,%20or%20%60exports%60%20on%20the%20server.%0A%09%20%20var%20root%20=%20this;%0A%09%0A%09%20%20//%20Save%20the%20previous%20value%20of%20the%20%60_%60%20variable.%0A%09%20%20var%20previousUnderscore%20=%20root._;%0A%09%0A%09%20%20//%20Save%20bytes%20in%20the%20minified%20(but%20not%20gzipped)%20version:%0A%09%20%20var%20ArrayProto%20=%20Array.prototype,%20ObjProto%20=%20Object.prototype,%20FuncProto%20=%20Function.prototype;%0A%09%0A%09%20%20//%20Create%20quick%20reference%20variables%20for%20speed%20access%20to%20core%20prototypes.%0A%09%20%20var%0A%09%20%20%20%20push%20%20%20%20%20%20%20%20%20%20%20%20%20=%20ArrayProto.push,%0A%09%20%20%20%20slice%20%20%20%20%20%20%20%20%20%20%20%20=%20ArrayProto.slice,%0A%09%20%20%20%20toString%20%20%20%20%20%20%20%20%20=%20ObjProto.toString,%0A%09%20%20%20%20hasOwnProperty%20%20%20=%20ObjProto.hasOwnProperty;%0A%09%0A%09%20%20//%20All%20**ECMAScript%205**%20native%20function%20implementations%20that%20we%20hope%20to%20use%0A%09%20%20//%20are%20declared%20here.%0A%09%20%20var%0A%09%20%20%20%20nativeIsArray%20%20%20%20%20%20=%20Array.isArray,%0A%09%20%20%20%20nativeKeys%20%20%20%20%20%20%20%20%20=%20Object.keys,%0A%09%20%20%20%20nativeBind%20%20%20%20%20%20%20%20%20=%20FuncProto.bind,%0A%09%20%20%20%20nativeCreate%20%20%20%20%20%20%20=%20Object.create;%0A%09%0A%09%20%20//%20Naked%20function%20reference%20for%20surrogate-prototype-swapping.%0A%09%20%20var%20Ctor%20=%20function()%7B%7D;%0A%09%0A%09%20%20//%20Create%20a%20safe%20reference%20to%20the%20Underscore%20object%20for%20use%20below.%0A%09%20%20var%20_%20=%20function(obj)%20%7B%0A%09%20%20%20%20if%20(obj%20instanceof%20_)%20return%20obj;%0A%09%20%20%20%20if%20(!(this%20instanceof%20_))%20return%20new%20_(obj);%0A%09%20%20%20%20this._wrapped%20=%20obj;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Export%20the%20Underscore%20object%20for%20**Node.js**,%20with%0A%09%20%20//%20backwards-compatibility%20for%20the%20old%20%60require()%60%20API.%20If%20we're%20in%0A%09%20%20//%20the%20browser,%20add%20%60_%60%20as%20a%20global%20object.%0A%09%20%20if%20(true)%20%7B%0A%09%20%20%20%20if%20(typeof%20module%20!==%20'undefined'%20&&%20module.exports)%20%7B%0A%09%20%20%20%20%20%20exports%20=%20module.exports%20=%20_;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20exports._%20=%20_;%0A%09%20%20%7D%20else%20%7B%0A%09%20%20%20%20root._%20=%20_;%0A%09%20%20%7D%0A%09%0A%09%20%20//%20Current%20version.%0A%09%20%20_.VERSION%20=%20'1.8.3';%0A%09%0A%09%20%20//%20Internal%20function%20that%20returns%20an%20efficient%20(for%20current%20engines)%20version%0A%09%20%20//%20of%20the%20passed-in%20callback,%20to%20be%20repeatedly%20applied%20in%20other%20Underscore%0A%09%20%20//%20functions.%0A%09%20%20var%20optimizeCb%20=%20function(func,%20context,%20argCount)%20%7B%0A%09%20%20%20%20if%20(context%20===%20void%200)%20return%20func;%0A%09%20%20%20%20switch%20(argCount%20==%20null%20?%203%20:%20argCount)%20%7B%0A%09%20%20%20%20%20%20case%201:%20return%20function(value)%20%7B%0A%09%20%20%20%20%20%20%20%20return%20func.call(context,%20value);%0A%09%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20case%202:%20return%20function(value,%20other)%20%7B%0A%09%20%20%20%20%20%20%20%20return%20func.call(context,%20value,%20other);%0A%09%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20case%203:%20return%20function(value,%20index,%20collection)%20%7B%0A%09%20%20%20%20%20%20%20%20return%20func.call(context,%20value,%20index,%20collection);%0A%09%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20case%204:%20return%20function(accumulator,%20value,%20index,%20collection)%20%7B%0A%09%20%20%20%20%20%20%20%20return%20func.call(context,%20accumulator,%20value,%20index,%20collection);%0A%09%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20function()%20%7B%0A%09%20%20%20%20%20%20return%20func.apply(context,%20arguments);%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20A%20mostly-internal%20function%20to%20generate%20callbacks%20that%20can%20be%20applied%0A%09%20%20//%20to%20each%20element%20in%20a%20collection,%20returning%20the%20desired%20result%20%E2%80%94%20either%0A%09%20%20//%20identity,%20an%20arbitrary%20callback,%20a%20property%20matcher,%20or%20a%20property%20accessor.%0A%09%20%20var%20cb%20=%20function(value,%20context,%20argCount)%20%7B%0A%09%20%20%20%20if%20(value%20==%20null)%20return%20_.identity;%0A%09%20%20%20%20if%20(_.isFunction(value))%20return%20optimizeCb(value,%20context,%20argCount);%0A%09%20%20%20%20if%20(_.isObject(value))%20return%20_.matcher(value);%0A%09%20%20%20%20return%20_.property(value);%0A%09%20%20%7D;%0A%09%20%20_.iteratee%20=%20function(value,%20context)%20%7B%0A%09%20%20%20%20return%20cb(value,%20context,%20Infinity);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20An%20internal%20function%20for%20creating%20assigner%20functions.%0A%09%20%20var%20createAssigner%20=%20function(keysFunc,%20undefinedOnly)%20%7B%0A%09%20%20%20%20return%20function(obj)%20%7B%0A%09%20%20%20%20%20%20var%20length%20=%20arguments.length;%0A%09%20%20%20%20%20%20if%20(length%20%3C%202%20%7C%7C%20obj%20==%20null)%20return%20obj;%0A%09%20%20%20%20%20%20for%20(var%20index%20=%201;%20index%20%3C%20length;%20index++)%20%7B%0A%09%20%20%20%20%20%20%20%20var%20source%20=%20arguments%5Bindex%5D,%0A%09%20%20%20%20%20%20%20%20%20%20%20%20keys%20=%20keysFunc(source),%0A%09%20%20%20%20%20%20%20%20%20%20%20%20l%20=%20keys.length;%0A%09%20%20%20%20%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20l;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20var%20key%20=%20keys%5Bi%5D;%0A%09%20%20%20%20%20%20%20%20%20%20if%20(!undefinedOnly%20%7C%7C%20obj%5Bkey%5D%20===%20void%200)%20obj%5Bkey%5D%20=%20source%5Bkey%5D;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20return%20obj;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20An%20internal%20function%20for%20creating%20a%20new%20object%20that%20inherits%20from%20another.%0A%09%20%20var%20baseCreate%20=%20function(prototype)%20%7B%0A%09%20%20%20%20if%20(!_.isObject(prototype))%20return%20%7B%7D;%0A%09%20%20%20%20if%20(nativeCreate)%20return%20nativeCreate(prototype);%0A%09%20%20%20%20Ctor.prototype%20=%20prototype;%0A%09%20%20%20%20var%20result%20=%20new%20Ctor;%0A%09%20%20%20%20Ctor.prototype%20=%20null;%0A%09%20%20%20%20return%20result;%0A%09%20%20%7D;%0A%09%0A%09%20%20var%20property%20=%20function(key)%20%7B%0A%09%20%20%20%20return%20function(obj)%20%7B%0A%09%20%20%20%20%20%20return%20obj%20==%20null%20?%20void%200%20:%20obj%5Bkey%5D;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Helper%20for%20collection%20methods%20to%20determine%20whether%20a%20collection%0A%09%20%20//%20should%20be%20iterated%20as%20an%20array%20or%20as%20an%20object%0A%09%20%20//%20Related:%20http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength%0A%09%20%20//%20Avoids%20a%20very%20nasty%20iOS%208%20JIT%20bug%20on%20ARM-64.%20#2094%0A%09%20%20var%20MAX_ARRAY_INDEX%20=%20Math.pow(2,%2053)%20-%201;%0A%09%20%20var%20getLength%20=%20property('length');%0A%09%20%20var%20isArrayLike%20=%20function(collection)%20%7B%0A%09%20%20%20%20var%20length%20=%20getLength(collection);%0A%09%20%20%20%20return%20typeof%20length%20==%20'number'%20&&%20length%20%3E=%200%20&&%20length%20%3C=%20MAX_ARRAY_INDEX;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Collection%20Functions%0A%09%20%20//%20--------------------%0A%09%0A%09%20%20//%20The%20cornerstone,%20an%20%60each%60%20implementation,%20aka%20%60forEach%60.%0A%09%20%20//%20Handles%20raw%20objects%20in%20addition%20to%20array-likes.%20Treats%20all%0A%09%20%20//%20sparse%20array-likes%20as%20if%20they%20were%20dense.%0A%09%20%20_.each%20=%20_.forEach%20=%20function(obj,%20iteratee,%20context)%20%7B%0A%09%20%20%20%20iteratee%20=%20optimizeCb(iteratee,%20context);%0A%09%20%20%20%20var%20i,%20length;%0A%09%20%20%20%20if%20(isArrayLike(obj))%20%7B%0A%09%20%20%20%20%20%20for%20(i%20=%200,%20length%20=%20obj.length;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20iteratee(obj%5Bi%5D,%20i,%20obj);%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20var%20keys%20=%20_.keys(obj);%0A%09%20%20%20%20%20%20for%20(i%20=%200,%20length%20=%20keys.length;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20iteratee(obj%5Bkeys%5Bi%5D%5D,%20keys%5Bi%5D,%20obj);%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20obj;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Return%20the%20results%20of%20applying%20the%20iteratee%20to%20each%20element.%0A%09%20%20_.map%20=%20_.collect%20=%20function(obj,%20iteratee,%20context)%20%7B%0A%09%20%20%20%20iteratee%20=%20cb(iteratee,%20context);%0A%09%20%20%20%20var%20keys%20=%20!isArrayLike(obj)%20&&%20_.keys(obj),%0A%09%20%20%20%20%20%20%20%20length%20=%20(keys%20%7C%7C%20obj).length,%0A%09%20%20%20%20%20%20%20%20results%20=%20Array(length);%0A%09%20%20%20%20for%20(var%20index%20=%200;%20index%20%3C%20length;%20index++)%20%7B%0A%09%20%20%20%20%20%20var%20currentKey%20=%20keys%20?%20keys%5Bindex%5D%20:%20index;%0A%09%20%20%20%20%20%20results%5Bindex%5D%20=%20iteratee(obj%5BcurrentKey%5D,%20currentKey,%20obj);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20results;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Create%20a%20reducing%20function%20iterating%20left%20or%20right.%0A%09%20%20function%20createReduce(dir)%20%7B%0A%09%20%20%20%20//%20Optimized%20iterator%20function%20as%20using%20arguments.length%0A%09%20%20%20%20//%20in%20the%20main%20function%20will%20deoptimize%20the,%20see%20#1991.%0A%09%20%20%20%20function%20iterator(obj,%20iteratee,%20memo,%20keys,%20index,%20length)%20%7B%0A%09%20%20%20%20%20%20for%20(;%20index%20%3E=%200%20&&%20index%20%3C%20length;%20index%20+=%20dir)%20%7B%0A%09%20%20%20%20%20%20%20%20var%20currentKey%20=%20keys%20?%20keys%5Bindex%5D%20:%20index;%0A%09%20%20%20%20%20%20%20%20memo%20=%20iteratee(memo,%20obj%5BcurrentKey%5D,%20currentKey,%20obj);%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20return%20memo;%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20return%20function(obj,%20iteratee,%20memo,%20context)%20%7B%0A%09%20%20%20%20%20%20iteratee%20=%20optimizeCb(iteratee,%20context,%204);%0A%09%20%20%20%20%20%20var%20keys%20=%20!isArrayLike(obj)%20&&%20_.keys(obj),%0A%09%20%20%20%20%20%20%20%20%20%20length%20=%20(keys%20%7C%7C%20obj).length,%0A%09%20%20%20%20%20%20%20%20%20%20index%20=%20dir%20%3E%200%20?%200%20:%20length%20-%201;%0A%09%20%20%20%20%20%20//%20Determine%20the%20initial%20value%20if%20none%20is%20provided.%0A%09%20%20%20%20%20%20if%20(arguments.length%20%3C%203)%20%7B%0A%09%20%20%20%20%20%20%20%20memo%20=%20obj%5Bkeys%20?%20keys%5Bindex%5D%20:%20index%5D;%0A%09%20%20%20%20%20%20%20%20index%20+=%20dir;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20return%20iterator(obj,%20iteratee,%20memo,%20keys,%20index,%20length);%0A%09%20%20%20%20%7D;%0A%09%20%20%7D%0A%09%0A%09%20%20//%20**Reduce**%20builds%20up%20a%20single%20result%20from%20a%20list%20of%20values,%20aka%20%60inject%60,%0A%09%20%20//%20or%20%60foldl%60.%0A%09%20%20_.reduce%20=%20_.foldl%20=%20_.inject%20=%20createReduce(1);%0A%09%0A%09%20%20//%20The%20right-associative%20version%20of%20reduce,%20also%20known%20as%20%60foldr%60.%0A%09%20%20_.reduceRight%20=%20_.foldr%20=%20createReduce(-1);%0A%09%0A%09%20%20//%20Return%20the%20first%20value%20which%20passes%20a%20truth%20test.%20Aliased%20as%20%60detect%60.%0A%09%20%20_.find%20=%20_.detect%20=%20function(obj,%20predicate,%20context)%20%7B%0A%09%20%20%20%20var%20key;%0A%09%20%20%20%20if%20(isArrayLike(obj))%20%7B%0A%09%20%20%20%20%20%20key%20=%20_.findIndex(obj,%20predicate,%20context);%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20key%20=%20_.findKey(obj,%20predicate,%20context);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20if%20(key%20!==%20void%200%20&&%20key%20!==%20-1)%20return%20obj%5Bkey%5D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Return%20all%20the%20elements%20that%20pass%20a%20truth%20test.%0A%09%20%20//%20Aliased%20as%20%60select%60.%0A%09%20%20_.filter%20=%20_.select%20=%20function(obj,%20predicate,%20context)%20%7B%0A%09%20%20%20%20var%20results%20=%20%5B%5D;%0A%09%20%20%20%20predicate%20=%20cb(predicate,%20context);%0A%09%20%20%20%20_.each(obj,%20function(value,%20index,%20list)%20%7B%0A%09%20%20%20%20%20%20if%20(predicate(value,%20index,%20list))%20results.push(value);%0A%09%20%20%20%20%7D);%0A%09%20%20%20%20return%20results;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Return%20all%20the%20elements%20for%20which%20a%20truth%20test%20fails.%0A%09%20%20_.reject%20=%20function(obj,%20predicate,%20context)%20%7B%0A%09%20%20%20%20return%20_.filter(obj,%20_.negate(cb(predicate)),%20context);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Determine%20whether%20all%20of%20the%20elements%20match%20a%20truth%20test.%0A%09%20%20//%20Aliased%20as%20%60all%60.%0A%09%20%20_.every%20=%20_.all%20=%20function(obj,%20predicate,%20context)%20%7B%0A%09%20%20%20%20predicate%20=%20cb(predicate,%20context);%0A%09%20%20%20%20var%20keys%20=%20!isArrayLike(obj)%20&&%20_.keys(obj),%0A%09%20%20%20%20%20%20%20%20length%20=%20(keys%20%7C%7C%20obj).length;%0A%09%20%20%20%20for%20(var%20index%20=%200;%20index%20%3C%20length;%20index++)%20%7B%0A%09%20%20%20%20%20%20var%20currentKey%20=%20keys%20?%20keys%5Bindex%5D%20:%20index;%0A%09%20%20%20%20%20%20if%20(!predicate(obj%5BcurrentKey%5D,%20currentKey,%20obj))%20return%20false;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20true;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Determine%20if%20at%20least%20one%20element%20in%20the%20object%20matches%20a%20truth%20test.%0A%09%20%20//%20Aliased%20as%20%60any%60.%0A%09%20%20_.some%20=%20_.any%20=%20function(obj,%20predicate,%20context)%20%7B%0A%09%20%20%20%20predicate%20=%20cb(predicate,%20context);%0A%09%20%20%20%20var%20keys%20=%20!isArrayLike(obj)%20&&%20_.keys(obj),%0A%09%20%20%20%20%20%20%20%20length%20=%20(keys%20%7C%7C%20obj).length;%0A%09%20%20%20%20for%20(var%20index%20=%200;%20index%20%3C%20length;%20index++)%20%7B%0A%09%20%20%20%20%20%20var%20currentKey%20=%20keys%20?%20keys%5Bindex%5D%20:%20index;%0A%09%20%20%20%20%20%20if%20(predicate(obj%5BcurrentKey%5D,%20currentKey,%20obj))%20return%20true;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20false;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Determine%20if%20the%20array%20or%20object%20contains%20a%20given%20item%20(using%20%60===%60).%0A%09%20%20//%20Aliased%20as%20%60includes%60%20and%20%60include%60.%0A%09%20%20_.contains%20=%20_.includes%20=%20_.include%20=%20function(obj,%20item,%20fromIndex,%20guard)%20%7B%0A%09%20%20%20%20if%20(!isArrayLike(obj))%20obj%20=%20_.values(obj);%0A%09%20%20%20%20if%20(typeof%20fromIndex%20!=%20'number'%20%7C%7C%20guard)%20fromIndex%20=%200;%0A%09%20%20%20%20return%20_.indexOf(obj,%20item,%20fromIndex)%20%3E=%200;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Invoke%20a%20method%20(with%20arguments)%20on%20every%20item%20in%20a%20collection.%0A%09%20%20_.invoke%20=%20function(obj,%20method)%20%7B%0A%09%20%20%20%20var%20args%20=%20slice.call(arguments,%202);%0A%09%20%20%20%20var%20isFunc%20=%20_.isFunction(method);%0A%09%20%20%20%20return%20_.map(obj,%20function(value)%20%7B%0A%09%20%20%20%20%20%20var%20func%20=%20isFunc%20?%20method%20:%20value%5Bmethod%5D;%0A%09%20%20%20%20%20%20return%20func%20==%20null%20?%20func%20:%20func.apply(value,%20args);%0A%09%20%20%20%20%7D);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Convenience%20version%20of%20a%20common%20use%20case%20of%20%60map%60:%20fetching%20a%20property.%0A%09%20%20_.pluck%20=%20function(obj,%20key)%20%7B%0A%09%20%20%20%20return%20_.map(obj,%20_.property(key));%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Convenience%20version%20of%20a%20common%20use%20case%20of%20%60filter%60:%20selecting%20only%20objects%0A%09%20%20//%20containing%20specific%20%60key:value%60%20pairs.%0A%09%20%20_.where%20=%20function(obj,%20attrs)%20%7B%0A%09%20%20%20%20return%20_.filter(obj,%20_.matcher(attrs));%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Convenience%20version%20of%20a%20common%20use%20case%20of%20%60find%60:%20getting%20the%20first%20object%0A%09%20%20//%20containing%20specific%20%60key:value%60%20pairs.%0A%09%20%20_.findWhere%20=%20function(obj,%20attrs)%20%7B%0A%09%20%20%20%20return%20_.find(obj,%20_.matcher(attrs));%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Return%20the%20maximum%20element%20(or%20element-based%20computation).%0A%09%20%20_.max%20=%20function(obj,%20iteratee,%20context)%20%7B%0A%09%20%20%20%20var%20result%20=%20-Infinity,%20lastComputed%20=%20-Infinity,%0A%09%20%20%20%20%20%20%20%20value,%20computed;%0A%09%20%20%20%20if%20(iteratee%20==%20null%20&&%20obj%20!=%20null)%20%7B%0A%09%20%20%20%20%20%20obj%20=%20isArrayLike(obj)%20?%20obj%20:%20_.values(obj);%0A%09%20%20%20%20%20%20for%20(var%20i%20=%200,%20length%20=%20obj.length;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20value%20=%20obj%5Bi%5D;%0A%09%20%20%20%20%20%20%20%20if%20(value%20%3E%20result)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20result%20=%20value;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20iteratee%20=%20cb(iteratee,%20context);%0A%09%20%20%20%20%20%20_.each(obj,%20function(value,%20index,%20list)%20%7B%0A%09%20%20%20%20%20%20%20%20computed%20=%20iteratee(value,%20index,%20list);%0A%09%20%20%20%20%20%20%20%20if%20(computed%20%3E%20lastComputed%20%7C%7C%20computed%20===%20-Infinity%20&&%20result%20===%20-Infinity)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20result%20=%20value;%0A%09%20%20%20%20%20%20%20%20%20%20lastComputed%20=%20computed;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20result;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Return%20the%20minimum%20element%20(or%20element-based%20computation).%0A%09%20%20_.min%20=%20function(obj,%20iteratee,%20context)%20%7B%0A%09%20%20%20%20var%20result%20=%20Infinity,%20lastComputed%20=%20Infinity,%0A%09%20%20%20%20%20%20%20%20value,%20computed;%0A%09%20%20%20%20if%20(iteratee%20==%20null%20&&%20obj%20!=%20null)%20%7B%0A%09%20%20%20%20%20%20obj%20=%20isArrayLike(obj)%20?%20obj%20:%20_.values(obj);%0A%09%20%20%20%20%20%20for%20(var%20i%20=%200,%20length%20=%20obj.length;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20value%20=%20obj%5Bi%5D;%0A%09%20%20%20%20%20%20%20%20if%20(value%20%3C%20result)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20result%20=%20value;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20iteratee%20=%20cb(iteratee,%20context);%0A%09%20%20%20%20%20%20_.each(obj,%20function(value,%20index,%20list)%20%7B%0A%09%20%20%20%20%20%20%20%20computed%20=%20iteratee(value,%20index,%20list);%0A%09%20%20%20%20%20%20%20%20if%20(computed%20%3C%20lastComputed%20%7C%7C%20computed%20===%20Infinity%20&&%20result%20===%20Infinity)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20result%20=%20value;%0A%09%20%20%20%20%20%20%20%20%20%20lastComputed%20=%20computed;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20result;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Shuffle%20a%20collection,%20using%20the%20modern%20version%20of%20the%0A%09%20%20//%20%5BFisher-Yates%20shuffle%5D(http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).%0A%09%20%20_.shuffle%20=%20function(obj)%20%7B%0A%09%20%20%20%20var%20set%20=%20isArrayLike(obj)%20?%20obj%20:%20_.values(obj);%0A%09%20%20%20%20var%20length%20=%20set.length;%0A%09%20%20%20%20var%20shuffled%20=%20Array(length);%0A%09%20%20%20%20for%20(var%20index%20=%200,%20rand;%20index%20%3C%20length;%20index++)%20%7B%0A%09%20%20%20%20%20%20rand%20=%20_.random(0,%20index);%0A%09%20%20%20%20%20%20if%20(rand%20!==%20index)%20shuffled%5Bindex%5D%20=%20shuffled%5Brand%5D;%0A%09%20%20%20%20%20%20shuffled%5Brand%5D%20=%20set%5Bindex%5D;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20shuffled;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Sample%20**n**%20random%20values%20from%20a%20collection.%0A%09%20%20//%20If%20**n**%20is%20not%20specified,%20returns%20a%20single%20random%20element.%0A%09%20%20//%20The%20internal%20%60guard%60%20argument%20allows%20it%20to%20work%20with%20%60map%60.%0A%09%20%20_.sample%20=%20function(obj,%20n,%20guard)%20%7B%0A%09%20%20%20%20if%20(n%20==%20null%20%7C%7C%20guard)%20%7B%0A%09%20%20%20%20%20%20if%20(!isArrayLike(obj))%20obj%20=%20_.values(obj);%0A%09%20%20%20%20%20%20return%20obj%5B_.random(obj.length%20-%201)%5D;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20_.shuffle(obj).slice(0,%20Math.max(0,%20n));%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Sort%20the%20object's%20values%20by%20a%20criterion%20produced%20by%20an%20iteratee.%0A%09%20%20_.sortBy%20=%20function(obj,%20iteratee,%20context)%20%7B%0A%09%20%20%20%20iteratee%20=%20cb(iteratee,%20context);%0A%09%20%20%20%20return%20_.pluck(_.map(obj,%20function(value,%20index,%20list)%20%7B%0A%09%20%20%20%20%20%20return%20%7B%0A%09%20%20%20%20%20%20%20%20value:%20value,%0A%09%20%20%20%20%20%20%20%20index:%20index,%0A%09%20%20%20%20%20%20%20%20criteria:%20iteratee(value,%20index,%20list)%0A%09%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%7D).sort(function(left,%20right)%20%7B%0A%09%20%20%20%20%20%20var%20a%20=%20left.criteria;%0A%09%20%20%20%20%20%20var%20b%20=%20right.criteria;%0A%09%20%20%20%20%20%20if%20(a%20!==%20b)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(a%20%3E%20b%20%7C%7C%20a%20===%20void%200)%20return%201;%0A%09%20%20%20%20%20%20%20%20if%20(a%20%3C%20b%20%7C%7C%20b%20===%20void%200)%20return%20-1;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20return%20left.index%20-%20right.index;%0A%09%20%20%20%20%7D),%20'value');%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20An%20internal%20function%20used%20for%20aggregate%20%22group%20by%22%20operations.%0A%09%20%20var%20group%20=%20function(behavior)%20%7B%0A%09%20%20%20%20return%20function(obj,%20iteratee,%20context)%20%7B%0A%09%20%20%20%20%20%20var%20result%20=%20%7B%7D;%0A%09%20%20%20%20%20%20iteratee%20=%20cb(iteratee,%20context);%0A%09%20%20%20%20%20%20_.each(obj,%20function(value,%20index)%20%7B%0A%09%20%20%20%20%20%20%20%20var%20key%20=%20iteratee(value,%20index,%20obj);%0A%09%20%20%20%20%20%20%20%20behavior(result,%20value,%20key);%0A%09%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%20%20return%20result;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Groups%20the%20object's%20values%20by%20a%20criterion.%20Pass%20either%20a%20string%20attribute%0A%09%20%20//%20to%20group%20by,%20or%20a%20function%20that%20returns%20the%20criterion.%0A%09%20%20_.groupBy%20=%20group(function(result,%20value,%20key)%20%7B%0A%09%20%20%20%20if%20(_.has(result,%20key))%20result%5Bkey%5D.push(value);%20else%20result%5Bkey%5D%20=%20%5Bvalue%5D;%0A%09%20%20%7D);%0A%09%0A%09%20%20//%20Indexes%20the%20object's%20values%20by%20a%20criterion,%20similar%20to%20%60groupBy%60,%20but%20for%0A%09%20%20//%20when%20you%20know%20that%20your%20index%20values%20will%20be%20unique.%0A%09%20%20_.indexBy%20=%20group(function(result,%20value,%20key)%20%7B%0A%09%20%20%20%20result%5Bkey%5D%20=%20value;%0A%09%20%20%7D);%0A%09%0A%09%20%20//%20Counts%20instances%20of%20an%20object%20that%20group%20by%20a%20certain%20criterion.%20Pass%0A%09%20%20//%20either%20a%20string%20attribute%20to%20count%20by,%20or%20a%20function%20that%20returns%20the%0A%09%20%20//%20criterion.%0A%09%20%20_.countBy%20=%20group(function(result,%20value,%20key)%20%7B%0A%09%20%20%20%20if%20(_.has(result,%20key))%20result%5Bkey%5D++;%20else%20result%5Bkey%5D%20=%201;%0A%09%20%20%7D);%0A%09%0A%09%20%20//%20Safely%20create%20a%20real,%20live%20array%20from%20anything%20iterable.%0A%09%20%20_.toArray%20=%20function(obj)%20%7B%0A%09%20%20%20%20if%20(!obj)%20return%20%5B%5D;%0A%09%20%20%20%20if%20(_.isArray(obj))%20return%20slice.call(obj);%0A%09%20%20%20%20if%20(isArrayLike(obj))%20return%20_.map(obj,%20_.identity);%0A%09%20%20%20%20return%20_.values(obj);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Return%20the%20number%20of%20elements%20in%20an%20object.%0A%09%20%20_.size%20=%20function(obj)%20%7B%0A%09%20%20%20%20if%20(obj%20==%20null)%20return%200;%0A%09%20%20%20%20return%20isArrayLike(obj)%20?%20obj.length%20:%20_.keys(obj).length;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Split%20a%20collection%20into%20two%20arrays:%20one%20whose%20elements%20all%20satisfy%20the%20given%0A%09%20%20//%20predicate,%20and%20one%20whose%20elements%20all%20do%20not%20satisfy%20the%20predicate.%0A%09%20%20_.partition%20=%20function(obj,%20predicate,%20context)%20%7B%0A%09%20%20%20%20predicate%20=%20cb(predicate,%20context);%0A%09%20%20%20%20var%20pass%20=%20%5B%5D,%20fail%20=%20%5B%5D;%0A%09%20%20%20%20_.each(obj,%20function(value,%20key,%20obj)%20%7B%0A%09%20%20%20%20%20%20(predicate(value,%20key,%20obj)%20?%20pass%20:%20fail).push(value);%0A%09%20%20%20%20%7D);%0A%09%20%20%20%20return%20%5Bpass,%20fail%5D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Array%20Functions%0A%09%20%20//%20---------------%0A%09%0A%09%20%20//%20Get%20the%20first%20element%20of%20an%20array.%20Passing%20**n**%20will%20return%20the%20first%20N%0A%09%20%20//%20values%20in%20the%20array.%20Aliased%20as%20%60head%60%20and%20%60take%60.%20The%20**guard**%20check%0A%09%20%20//%20allows%20it%20to%20work%20with%20%60_.map%60.%0A%09%20%20_.first%20=%20_.head%20=%20_.take%20=%20function(array,%20n,%20guard)%20%7B%0A%09%20%20%20%20if%20(array%20==%20null)%20return%20void%200;%0A%09%20%20%20%20if%20(n%20==%20null%20%7C%7C%20guard)%20return%20array%5B0%5D;%0A%09%20%20%20%20return%20_.initial(array,%20array.length%20-%20n);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20everything%20but%20the%20last%20entry%20of%20the%20array.%20Especially%20useful%20on%0A%09%20%20//%20the%20arguments%20object.%20Passing%20**n**%20will%20return%20all%20the%20values%20in%0A%09%20%20//%20the%20array,%20excluding%20the%20last%20N.%0A%09%20%20_.initial%20=%20function(array,%20n,%20guard)%20%7B%0A%09%20%20%20%20return%20slice.call(array,%200,%20Math.max(0,%20array.length%20-%20(n%20==%20null%20%7C%7C%20guard%20?%201%20:%20n)));%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Get%20the%20last%20element%20of%20an%20array.%20Passing%20**n**%20will%20return%20the%20last%20N%0A%09%20%20//%20values%20in%20the%20array.%0A%09%20%20_.last%20=%20function(array,%20n,%20guard)%20%7B%0A%09%20%20%20%20if%20(array%20==%20null)%20return%20void%200;%0A%09%20%20%20%20if%20(n%20==%20null%20%7C%7C%20guard)%20return%20array%5Barray.length%20-%201%5D;%0A%09%20%20%20%20return%20_.rest(array,%20Math.max(0,%20array.length%20-%20n));%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20everything%20but%20the%20first%20entry%20of%20the%20array.%20Aliased%20as%20%60tail%60%20and%20%60drop%60.%0A%09%20%20//%20Especially%20useful%20on%20the%20arguments%20object.%20Passing%20an%20**n**%20will%20return%0A%09%20%20//%20the%20rest%20N%20values%20in%20the%20array.%0A%09%20%20_.rest%20=%20_.tail%20=%20_.drop%20=%20function(array,%20n,%20guard)%20%7B%0A%09%20%20%20%20return%20slice.call(array,%20n%20==%20null%20%7C%7C%20guard%20?%201%20:%20n);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Trim%20out%20all%20falsy%20values%20from%20an%20array.%0A%09%20%20_.compact%20=%20function(array)%20%7B%0A%09%20%20%20%20return%20_.filter(array,%20_.identity);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Internal%20implementation%20of%20a%20recursive%20%60flatten%60%20function.%0A%09%20%20var%20flatten%20=%20function(input,%20shallow,%20strict,%20startIndex)%20%7B%0A%09%20%20%20%20var%20output%20=%20%5B%5D,%20idx%20=%200;%0A%09%20%20%20%20for%20(var%20i%20=%20startIndex%20%7C%7C%200,%20length%20=%20getLength(input);%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20var%20value%20=%20input%5Bi%5D;%0A%09%20%20%20%20%20%20if%20(isArrayLike(value)%20&&%20(_.isArray(value)%20%7C%7C%20_.isArguments(value)))%20%7B%0A%09%20%20%20%20%20%20%20%20//flatten%20current%20level%20of%20array%20or%20arguments%20object%0A%09%20%20%20%20%20%20%20%20if%20(!shallow)%20value%20=%20flatten(value,%20shallow,%20strict);%0A%09%20%20%20%20%20%20%20%20var%20j%20=%200,%20len%20=%20value.length;%0A%09%20%20%20%20%20%20%20%20output.length%20+=%20len;%0A%09%20%20%20%20%20%20%20%20while%20(j%20%3C%20len)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20output%5Bidx++%5D%20=%20value%5Bj++%5D;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%7D%20else%20if%20(!strict)%20%7B%0A%09%20%20%20%20%20%20%20%20output%5Bidx++%5D%20=%20value;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20output;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Flatten%20out%20an%20array,%20either%20recursively%20(by%20default),%20or%20just%20one%20level.%0A%09%20%20_.flatten%20=%20function(array,%20shallow)%20%7B%0A%09%20%20%20%20return%20flatten(array,%20shallow,%20false);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Return%20a%20version%20of%20the%20array%20that%20does%20not%20contain%20the%20specified%20value(s).%0A%09%20%20_.without%20=%20function(array)%20%7B%0A%09%20%20%20%20return%20_.difference(array,%20slice.call(arguments,%201));%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Produce%20a%20duplicate-free%20version%20of%20the%20array.%20If%20the%20array%20has%20already%0A%09%20%20//%20been%20sorted,%20you%20have%20the%20option%20of%20using%20a%20faster%20algorithm.%0A%09%20%20//%20Aliased%20as%20%60unique%60.%0A%09%20%20_.uniq%20=%20_.unique%20=%20function(array,%20isSorted,%20iteratee,%20context)%20%7B%0A%09%20%20%20%20if%20(!_.isBoolean(isSorted))%20%7B%0A%09%20%20%20%20%20%20context%20=%20iteratee;%0A%09%20%20%20%20%20%20iteratee%20=%20isSorted;%0A%09%20%20%20%20%20%20isSorted%20=%20false;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20if%20(iteratee%20!=%20null)%20iteratee%20=%20cb(iteratee,%20context);%0A%09%20%20%20%20var%20result%20=%20%5B%5D;%0A%09%20%20%20%20var%20seen%20=%20%5B%5D;%0A%09%20%20%20%20for%20(var%20i%20=%200,%20length%20=%20getLength(array);%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20var%20value%20=%20array%5Bi%5D,%0A%09%20%20%20%20%20%20%20%20%20%20computed%20=%20iteratee%20?%20iteratee(value,%20i,%20array)%20:%20value;%0A%09%20%20%20%20%20%20if%20(isSorted)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(!i%20%7C%7C%20seen%20!==%20computed)%20result.push(value);%0A%09%20%20%20%20%20%20%20%20seen%20=%20computed;%0A%09%20%20%20%20%20%20%7D%20else%20if%20(iteratee)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(!_.contains(seen,%20computed))%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20seen.push(computed);%0A%09%20%20%20%20%20%20%20%20%20%20result.push(value);%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%7D%20else%20if%20(!_.contains(result,%20value))%20%7B%0A%09%20%20%20%20%20%20%20%20result.push(value);%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20result;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Produce%20an%20array%20that%20contains%20the%20union:%20each%20distinct%20element%20from%20all%20of%0A%09%20%20//%20the%20passed-in%20arrays.%0A%09%20%20_.union%20=%20function()%20%7B%0A%09%20%20%20%20return%20_.uniq(flatten(arguments,%20true,%20true));%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Produce%20an%20array%20that%20contains%20every%20item%20shared%20between%20all%20the%0A%09%20%20//%20passed-in%20arrays.%0A%09%20%20_.intersection%20=%20function(array)%20%7B%0A%09%20%20%20%20var%20result%20=%20%5B%5D;%0A%09%20%20%20%20var%20argsLength%20=%20arguments.length;%0A%09%20%20%20%20for%20(var%20i%20=%200,%20length%20=%20getLength(array);%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20var%20item%20=%20array%5Bi%5D;%0A%09%20%20%20%20%20%20if%20(_.contains(result,%20item))%20continue;%0A%09%20%20%20%20%20%20for%20(var%20j%20=%201;%20j%20%3C%20argsLength;%20j++)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(!_.contains(arguments%5Bj%5D,%20item))%20break;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20if%20(j%20===%20argsLength)%20result.push(item);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20result;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Take%20the%20difference%20between%20one%20array%20and%20a%20number%20of%20other%20arrays.%0A%09%20%20//%20Only%20the%20elements%20present%20in%20just%20the%20first%20array%20will%20remain.%0A%09%20%20_.difference%20=%20function(array)%20%7B%0A%09%20%20%20%20var%20rest%20=%20flatten(arguments,%20true,%20true,%201);%0A%09%20%20%20%20return%20_.filter(array,%20function(value)%7B%0A%09%20%20%20%20%20%20return%20!_.contains(rest,%20value);%0A%09%20%20%20%20%7D);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Zip%20together%20multiple%20lists%20into%20a%20single%20array%20--%20elements%20that%20share%0A%09%20%20//%20an%20index%20go%20together.%0A%09%20%20_.zip%20=%20function()%20%7B%0A%09%20%20%20%20return%20_.unzip(arguments);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Complement%20of%20_.zip.%20Unzip%20accepts%20an%20array%20of%20arrays%20and%20groups%0A%09%20%20//%20each%20array's%20elements%20on%20shared%20indices%0A%09%20%20_.unzip%20=%20function(array)%20%7B%0A%09%20%20%20%20var%20length%20=%20array%20&&%20_.max(array,%20getLength).length%20%7C%7C%200;%0A%09%20%20%20%20var%20result%20=%20Array(length);%0A%09%0A%09%20%20%20%20for%20(var%20index%20=%200;%20index%20%3C%20length;%20index++)%20%7B%0A%09%20%20%20%20%20%20result%5Bindex%5D%20=%20_.pluck(array,%20index);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20result;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Converts%20lists%20into%20objects.%20Pass%20either%20a%20single%20array%20of%20%60%5Bkey,%20value%5D%60%0A%09%20%20//%20pairs,%20or%20two%20parallel%20arrays%20of%20the%20same%20length%20--%20one%20of%20keys,%20and%20one%20of%0A%09%20%20//%20the%20corresponding%20values.%0A%09%20%20_.object%20=%20function(list,%20values)%20%7B%0A%09%20%20%20%20var%20result%20=%20%7B%7D;%0A%09%20%20%20%20for%20(var%20i%20=%200,%20length%20=%20getLength(list);%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20if%20(values)%20%7B%0A%09%20%20%20%20%20%20%20%20result%5Blist%5Bi%5D%5D%20=%20values%5Bi%5D;%0A%09%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20result%5Blist%5Bi%5D%5B0%5D%5D%20=%20list%5Bi%5D%5B1%5D;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20result;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Generator%20function%20to%20create%20the%20findIndex%20and%20findLastIndex%20functions%0A%09%20%20function%20createPredicateIndexFinder(dir)%20%7B%0A%09%20%20%20%20return%20function(array,%20predicate,%20context)%20%7B%0A%09%20%20%20%20%20%20predicate%20=%20cb(predicate,%20context);%0A%09%20%20%20%20%20%20var%20length%20=%20getLength(array);%0A%09%20%20%20%20%20%20var%20index%20=%20dir%20%3E%200%20?%200%20:%20length%20-%201;%0A%09%20%20%20%20%20%20for%20(;%20index%20%3E=%200%20&&%20index%20%3C%20length;%20index%20+=%20dir)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(predicate(array%5Bindex%5D,%20index,%20array))%20return%20index;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20return%20-1;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D%0A%09%0A%09%20%20//%20Returns%20the%20first%20index%20on%20an%20array-like%20that%20passes%20a%20predicate%20test%0A%09%20%20_.findIndex%20=%20createPredicateIndexFinder(1);%0A%09%20%20_.findLastIndex%20=%20createPredicateIndexFinder(-1);%0A%09%0A%09%20%20//%20Use%20a%20comparator%20function%20to%20figure%20out%20the%20smallest%20index%20at%20which%0A%09%20%20//%20an%20object%20should%20be%20inserted%20so%20as%20to%20maintain%20order.%20Uses%20binary%20search.%0A%09%20%20_.sortedIndex%20=%20function(array,%20obj,%20iteratee,%20context)%20%7B%0A%09%20%20%20%20iteratee%20=%20cb(iteratee,%20context,%201);%0A%09%20%20%20%20var%20value%20=%20iteratee(obj);%0A%09%20%20%20%20var%20low%20=%200,%20high%20=%20getLength(array);%0A%09%20%20%20%20while%20(low%20%3C%20high)%20%7B%0A%09%20%20%20%20%20%20var%20mid%20=%20Math.floor((low%20+%20high)%20/%202);%0A%09%20%20%20%20%20%20if%20(iteratee(array%5Bmid%5D)%20%3C%20value)%20low%20=%20mid%20+%201;%20else%20high%20=%20mid;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20low;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Generator%20function%20to%20create%20the%20indexOf%20and%20lastIndexOf%20functions%0A%09%20%20function%20createIndexFinder(dir,%20predicateFind,%20sortedIndex)%20%7B%0A%09%20%20%20%20return%20function(array,%20item,%20idx)%20%7B%0A%09%20%20%20%20%20%20var%20i%20=%200,%20length%20=%20getLength(array);%0A%09%20%20%20%20%20%20if%20(typeof%20idx%20==%20'number')%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(dir%20%3E%200)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20i%20=%20idx%20%3E=%200%20?%20idx%20:%20Math.max(idx%20+%20length,%20i);%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20length%20=%20idx%20%3E=%200%20?%20Math.min(idx%20+%201,%20length)%20:%20idx%20+%20length%20+%201;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%7D%20else%20if%20(sortedIndex%20&&%20idx%20&&%20length)%20%7B%0A%09%20%20%20%20%20%20%20%20idx%20=%20sortedIndex(array,%20item);%0A%09%20%20%20%20%20%20%20%20return%20array%5Bidx%5D%20===%20item%20?%20idx%20:%20-1;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20if%20(item%20!==%20item)%20%7B%0A%09%20%20%20%20%20%20%20%20idx%20=%20predicateFind(slice.call(array,%20i,%20length),%20_.isNaN);%0A%09%20%20%20%20%20%20%20%20return%20idx%20%3E=%200%20?%20idx%20+%20i%20:%20-1;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20for%20(idx%20=%20dir%20%3E%200%20?%20i%20:%20length%20-%201;%20idx%20%3E=%200%20&&%20idx%20%3C%20length;%20idx%20+=%20dir)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(array%5Bidx%5D%20===%20item)%20return%20idx;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20return%20-1;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D%0A%09%0A%09%20%20//%20Return%20the%20position%20of%20the%20first%20occurrence%20of%20an%20item%20in%20an%20array,%0A%09%20%20//%20or%20-1%20if%20the%20item%20is%20not%20included%20in%20the%20array.%0A%09%20%20//%20If%20the%20array%20is%20large%20and%20already%20in%20sort%20order,%20pass%20%60true%60%0A%09%20%20//%20for%20**isSorted**%20to%20use%20binary%20search.%0A%09%20%20_.indexOf%20=%20createIndexFinder(1,%20_.findIndex,%20_.sortedIndex);%0A%09%20%20_.lastIndexOf%20=%20createIndexFinder(-1,%20_.findLastIndex);%0A%09%0A%09%20%20//%20Generate%20an%20integer%20Array%20containing%20an%20arithmetic%20progression.%20A%20port%20of%0A%09%20%20//%20the%20native%20Python%20%60range()%60%20function.%20See%0A%09%20%20//%20%5Bthe%20Python%20documentation%5D(http://docs.python.org/library/functions.html#range).%0A%09%20%20_.range%20=%20function(start,%20stop,%20step)%20%7B%0A%09%20%20%20%20if%20(stop%20==%20null)%20%7B%0A%09%20%20%20%20%20%20stop%20=%20start%20%7C%7C%200;%0A%09%20%20%20%20%20%20start%20=%200;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20step%20=%20step%20%7C%7C%201;%0A%09%0A%09%20%20%20%20var%20length%20=%20Math.max(Math.ceil((stop%20-%20start)%20/%20step),%200);%0A%09%20%20%20%20var%20range%20=%20Array(length);%0A%09%0A%09%20%20%20%20for%20(var%20idx%20=%200;%20idx%20%3C%20length;%20idx++,%20start%20+=%20step)%20%7B%0A%09%20%20%20%20%20%20range%5Bidx%5D%20=%20start;%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20return%20range;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Function%20(ahem)%20Functions%0A%09%20%20//%20------------------%0A%09%0A%09%20%20//%20Determines%20whether%20to%20execute%20a%20function%20as%20a%20constructor%0A%09%20%20//%20or%20a%20normal%20function%20with%20the%20provided%20arguments%0A%09%20%20var%20executeBound%20=%20function(sourceFunc,%20boundFunc,%20context,%20callingContext,%20args)%20%7B%0A%09%20%20%20%20if%20(!(callingContext%20instanceof%20boundFunc))%20return%20sourceFunc.apply(context,%20args);%0A%09%20%20%20%20var%20self%20=%20baseCreate(sourceFunc.prototype);%0A%09%20%20%20%20var%20result%20=%20sourceFunc.apply(self,%20args);%0A%09%20%20%20%20if%20(_.isObject(result))%20return%20result;%0A%09%20%20%20%20return%20self;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Create%20a%20function%20bound%20to%20a%20given%20object%20(assigning%20%60this%60,%20and%20arguments,%0A%09%20%20//%20optionally).%20Delegates%20to%20**ECMAScript%205**'s%20native%20%60Function.bind%60%20if%0A%09%20%20//%20available.%0A%09%20%20_.bind%20=%20function(func,%20context)%20%7B%0A%09%20%20%20%20if%20(nativeBind%20&&%20func.bind%20===%20nativeBind)%20return%20nativeBind.apply(func,%20slice.call(arguments,%201));%0A%09%20%20%20%20if%20(!_.isFunction(func))%20throw%20new%20TypeError('Bind%20must%20be%20called%20on%20a%20function');%0A%09%20%20%20%20var%20args%20=%20slice.call(arguments,%202);%0A%09%20%20%20%20var%20bound%20=%20function()%20%7B%0A%09%20%20%20%20%20%20return%20executeBound(func,%20bound,%20context,%20this,%20args.concat(slice.call(arguments)));%0A%09%20%20%20%20%7D;%0A%09%20%20%20%20return%20bound;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Partially%20apply%20a%20function%20by%20creating%20a%20version%20that%20has%20had%20some%20of%20its%0A%09%20%20//%20arguments%20pre-filled,%20without%20changing%20its%20dynamic%20%60this%60%20context.%20_%20acts%0A%09%20%20//%20as%20a%20placeholder,%20allowing%20any%20combination%20of%20arguments%20to%20be%20pre-filled.%0A%09%20%20_.partial%20=%20function(func)%20%7B%0A%09%20%20%20%20var%20boundArgs%20=%20slice.call(arguments,%201);%0A%09%20%20%20%20var%20bound%20=%20function()%20%7B%0A%09%20%20%20%20%20%20var%20position%20=%200,%20length%20=%20boundArgs.length;%0A%09%20%20%20%20%20%20var%20args%20=%20Array(length);%0A%09%20%20%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20args%5Bi%5D%20=%20boundArgs%5Bi%5D%20===%20_%20?%20arguments%5Bposition++%5D%20:%20boundArgs%5Bi%5D;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20while%20(position%20%3C%20arguments.length)%20args.push(arguments%5Bposition++%5D);%0A%09%20%20%20%20%20%20return%20executeBound(func,%20bound,%20this,%20this,%20args);%0A%09%20%20%20%20%7D;%0A%09%20%20%20%20return%20bound;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Bind%20a%20number%20of%20an%20object's%20methods%20to%20that%20object.%20Remaining%20arguments%0A%09%20%20//%20are%20the%20method%20names%20to%20be%20bound.%20Useful%20for%20ensuring%20that%20all%20callbacks%0A%09%20%20//%20defined%20on%20an%20object%20belong%20to%20it.%0A%09%20%20_.bindAll%20=%20function(obj)%20%7B%0A%09%20%20%20%20var%20i,%20length%20=%20arguments.length,%20key;%0A%09%20%20%20%20if%20(length%20%3C=%201)%20throw%20new%20Error('bindAll%20must%20be%20passed%20function%20names');%0A%09%20%20%20%20for%20(i%20=%201;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20key%20=%20arguments%5Bi%5D;%0A%09%20%20%20%20%20%20obj%5Bkey%5D%20=%20_.bind(obj%5Bkey%5D,%20obj);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20obj;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Memoize%20an%20expensive%20function%20by%20storing%20its%20results.%0A%09%20%20_.memoize%20=%20function(func,%20hasher)%20%7B%0A%09%20%20%20%20var%20memoize%20=%20function(key)%20%7B%0A%09%20%20%20%20%20%20var%20cache%20=%20memoize.cache;%0A%09%20%20%20%20%20%20var%20address%20=%20''%20+%20(hasher%20?%20hasher.apply(this,%20arguments)%20:%20key);%0A%09%20%20%20%20%20%20if%20(!_.has(cache,%20address))%20cache%5Baddress%5D%20=%20func.apply(this,%20arguments);%0A%09%20%20%20%20%20%20return%20cache%5Baddress%5D;%0A%09%20%20%20%20%7D;%0A%09%20%20%20%20memoize.cache%20=%20%7B%7D;%0A%09%20%20%20%20return%20memoize;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Delays%20a%20function%20for%20the%20given%20number%20of%20milliseconds,%20and%20then%20calls%0A%09%20%20//%20it%20with%20the%20arguments%20supplied.%0A%09%20%20_.delay%20=%20function(func,%20wait)%20%7B%0A%09%20%20%20%20var%20args%20=%20slice.call(arguments,%202);%0A%09%20%20%20%20return%20setTimeout(function()%7B%0A%09%20%20%20%20%20%20return%20func.apply(null,%20args);%0A%09%20%20%20%20%7D,%20wait);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Defers%20a%20function,%20scheduling%20it%20to%20run%20after%20the%20current%20call%20stack%20has%0A%09%20%20//%20cleared.%0A%09%20%20_.defer%20=%20_.partial(_.delay,%20_,%201);%0A%09%0A%09%20%20//%20Returns%20a%20function,%20that,%20when%20invoked,%20will%20only%20be%20triggered%20at%20most%20once%0A%09%20%20//%20during%20a%20given%20window%20of%20time.%20Normally,%20the%20throttled%20function%20will%20run%0A%09%20%20//%20as%20much%20as%20it%20can,%20without%20ever%20going%20more%20than%20once%20per%20%60wait%60%20duration;%0A%09%20%20//%20but%20if%20you'd%20like%20to%20disable%20the%20execution%20on%20the%20leading%20edge,%20pass%0A%09%20%20//%20%60%7Bleading:%20false%7D%60.%20To%20disable%20execution%20on%20the%20trailing%20edge,%20ditto.%0A%09%20%20_.throttle%20=%20function(func,%20wait,%20options)%20%7B%0A%09%20%20%20%20var%20context,%20args,%20result;%0A%09%20%20%20%20var%20timeout%20=%20null;%0A%09%20%20%20%20var%20previous%20=%200;%0A%09%20%20%20%20if%20(!options)%20options%20=%20%7B%7D;%0A%09%20%20%20%20var%20later%20=%20function()%20%7B%0A%09%20%20%20%20%20%20previous%20=%20options.leading%20===%20false%20?%200%20:%20_.now();%0A%09%20%20%20%20%20%20timeout%20=%20null;%0A%09%20%20%20%20%20%20result%20=%20func.apply(context,%20args);%0A%09%20%20%20%20%20%20if%20(!timeout)%20context%20=%20args%20=%20null;%0A%09%20%20%20%20%7D;%0A%09%20%20%20%20return%20function()%20%7B%0A%09%20%20%20%20%20%20var%20now%20=%20_.now();%0A%09%20%20%20%20%20%20if%20(!previous%20&&%20options.leading%20===%20false)%20previous%20=%20now;%0A%09%20%20%20%20%20%20var%20remaining%20=%20wait%20-%20(now%20-%20previous);%0A%09%20%20%20%20%20%20context%20=%20this;%0A%09%20%20%20%20%20%20args%20=%20arguments;%0A%09%20%20%20%20%20%20if%20(remaining%20%3C=%200%20%7C%7C%20remaining%20%3E%20wait)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(timeout)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20clearTimeout(timeout);%0A%09%20%20%20%20%20%20%20%20%20%20timeout%20=%20null;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20previous%20=%20now;%0A%09%20%20%20%20%20%20%20%20result%20=%20func.apply(context,%20args);%0A%09%20%20%20%20%20%20%20%20if%20(!timeout)%20context%20=%20args%20=%20null;%0A%09%20%20%20%20%20%20%7D%20else%20if%20(!timeout%20&&%20options.trailing%20!==%20false)%20%7B%0A%09%20%20%20%20%20%20%20%20timeout%20=%20setTimeout(later,%20remaining);%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20return%20result;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20a%20function,%20that,%20as%20long%20as%20it%20continues%20to%20be%20invoked,%20will%20not%0A%09%20%20//%20be%20triggered.%20The%20function%20will%20be%20called%20after%20it%20stops%20being%20called%20for%0A%09%20%20//%20N%20milliseconds.%20If%20%60immediate%60%20is%20passed,%20trigger%20the%20function%20on%20the%0A%09%20%20//%20leading%20edge,%20instead%20of%20the%20trailing.%0A%09%20%20_.debounce%20=%20function(func,%20wait,%20immediate)%20%7B%0A%09%20%20%20%20var%20timeout,%20args,%20context,%20timestamp,%20result;%0A%09%0A%09%20%20%20%20var%20later%20=%20function()%20%7B%0A%09%20%20%20%20%20%20var%20last%20=%20_.now()%20-%20timestamp;%0A%09%0A%09%20%20%20%20%20%20if%20(last%20%3C%20wait%20&&%20last%20%3E=%200)%20%7B%0A%09%20%20%20%20%20%20%20%20timeout%20=%20setTimeout(later,%20wait%20-%20last);%0A%09%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20timeout%20=%20null;%0A%09%20%20%20%20%20%20%20%20if%20(!immediate)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20result%20=%20func.apply(context,%20args);%0A%09%20%20%20%20%20%20%20%20%20%20if%20(!timeout)%20context%20=%20args%20=%20null;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D;%0A%09%0A%09%20%20%20%20return%20function()%20%7B%0A%09%20%20%20%20%20%20context%20=%20this;%0A%09%20%20%20%20%20%20args%20=%20arguments;%0A%09%20%20%20%20%20%20timestamp%20=%20_.now();%0A%09%20%20%20%20%20%20var%20callNow%20=%20immediate%20&&%20!timeout;%0A%09%20%20%20%20%20%20if%20(!timeout)%20timeout%20=%20setTimeout(later,%20wait);%0A%09%20%20%20%20%20%20if%20(callNow)%20%7B%0A%09%20%20%20%20%20%20%20%20result%20=%20func.apply(context,%20args);%0A%09%20%20%20%20%20%20%20%20context%20=%20args%20=%20null;%0A%09%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20return%20result;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20the%20first%20function%20passed%20as%20an%20argument%20to%20the%20second,%0A%09%20%20//%20allowing%20you%20to%20adjust%20arguments,%20run%20code%20before%20and%20after,%20and%0A%09%20%20//%20conditionally%20execute%20the%20original%20function.%0A%09%20%20_.wrap%20=%20function(func,%20wrapper)%20%7B%0A%09%20%20%20%20return%20_.partial(wrapper,%20func);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20a%20negated%20version%20of%20the%20passed-in%20predicate.%0A%09%20%20_.negate%20=%20function(predicate)%20%7B%0A%09%20%20%20%20return%20function()%20%7B%0A%09%20%20%20%20%20%20return%20!predicate.apply(this,%20arguments);%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20a%20function%20that%20is%20the%20composition%20of%20a%20list%20of%20functions,%20each%0A%09%20%20//%20consuming%20the%20return%20value%20of%20the%20function%20that%20follows.%0A%09%20%20_.compose%20=%20function()%20%7B%0A%09%20%20%20%20var%20args%20=%20arguments;%0A%09%20%20%20%20var%20start%20=%20args.length%20-%201;%0A%09%20%20%20%20return%20function()%20%7B%0A%09%20%20%20%20%20%20var%20i%20=%20start;%0A%09%20%20%20%20%20%20var%20result%20=%20args%5Bstart%5D.apply(this,%20arguments);%0A%09%20%20%20%20%20%20while%20(i--)%20result%20=%20args%5Bi%5D.call(this,%20result);%0A%09%20%20%20%20%20%20return%20result;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20a%20function%20that%20will%20only%20be%20executed%20on%20and%20after%20the%20Nth%20call.%0A%09%20%20_.after%20=%20function(times,%20func)%20%7B%0A%09%20%20%20%20return%20function()%20%7B%0A%09%20%20%20%20%20%20if%20(--times%20%3C%201)%20%7B%0A%09%20%20%20%20%20%20%20%20return%20func.apply(this,%20arguments);%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20a%20function%20that%20will%20only%20be%20executed%20up%20to%20(but%20not%20including)%20the%20Nth%20call.%0A%09%20%20_.before%20=%20function(times,%20func)%20%7B%0A%09%20%20%20%20var%20memo;%0A%09%20%20%20%20return%20function()%20%7B%0A%09%20%20%20%20%20%20if%20(--times%20%3E%200)%20%7B%0A%09%20%20%20%20%20%20%20%20memo%20=%20func.apply(this,%20arguments);%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20if%20(times%20%3C=%201)%20func%20=%20null;%0A%09%20%20%20%20%20%20return%20memo;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20a%20function%20that%20will%20be%20executed%20at%20most%20one%20time,%20no%20matter%20how%0A%09%20%20//%20often%20you%20call%20it.%20Useful%20for%20lazy%20initialization.%0A%09%20%20_.once%20=%20_.partial(_.before,%202);%0A%09%0A%09%20%20//%20Object%20Functions%0A%09%20%20//%20----------------%0A%09%0A%09%20%20//%20Keys%20in%20IE%20%3C%209%20that%20won't%20be%20iterated%20by%20%60for%20key%20in%20...%60%20and%20thus%20missed.%0A%09%20%20var%20hasEnumBug%20=%20!%7BtoString:%20null%7D.propertyIsEnumerable('toString');%0A%09%20%20var%20nonEnumerableProps%20=%20%5B'valueOf',%20'isPrototypeOf',%20'toString',%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'propertyIsEnumerable',%20'hasOwnProperty',%20'toLocaleString'%5D;%0A%09%0A%09%20%20function%20collectNonEnumProps(obj,%20keys)%20%7B%0A%09%20%20%20%20var%20nonEnumIdx%20=%20nonEnumerableProps.length;%0A%09%20%20%20%20var%20constructor%20=%20obj.constructor;%0A%09%20%20%20%20var%20proto%20=%20(_.isFunction(constructor)%20&&%20constructor.prototype)%20%7C%7C%20ObjProto;%0A%09%0A%09%20%20%20%20//%20Constructor%20is%20a%20special%20case.%0A%09%20%20%20%20var%20prop%20=%20'constructor';%0A%09%20%20%20%20if%20(_.has(obj,%20prop)%20&&%20!_.contains(keys,%20prop))%20keys.push(prop);%0A%09%0A%09%20%20%20%20while%20(nonEnumIdx--)%20%7B%0A%09%20%20%20%20%20%20prop%20=%20nonEnumerableProps%5BnonEnumIdx%5D;%0A%09%20%20%20%20%20%20if%20(prop%20in%20obj%20&&%20obj%5Bprop%5D%20!==%20proto%5Bprop%5D%20&&%20!_.contains(keys,%20prop))%20%7B%0A%09%20%20%20%20%20%20%20%20keys.push(prop);%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%20%20%7D%0A%09%0A%09%20%20//%20Retrieve%20the%20names%20of%20an%20object's%20own%20properties.%0A%09%20%20//%20Delegates%20to%20**ECMAScript%205**'s%20native%20%60Object.keys%60%0A%09%20%20_.keys%20=%20function(obj)%20%7B%0A%09%20%20%20%20if%20(!_.isObject(obj))%20return%20%5B%5D;%0A%09%20%20%20%20if%20(nativeKeys)%20return%20nativeKeys(obj);%0A%09%20%20%20%20var%20keys%20=%20%5B%5D;%0A%09%20%20%20%20for%20(var%20key%20in%20obj)%20if%20(_.has(obj,%20key))%20keys.push(key);%0A%09%20%20%20%20//%20Ahem,%20IE%20%3C%209.%0A%09%20%20%20%20if%20(hasEnumBug)%20collectNonEnumProps(obj,%20keys);%0A%09%20%20%20%20return%20keys;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Retrieve%20all%20the%20property%20names%20of%20an%20object.%0A%09%20%20_.allKeys%20=%20function(obj)%20%7B%0A%09%20%20%20%20if%20(!_.isObject(obj))%20return%20%5B%5D;%0A%09%20%20%20%20var%20keys%20=%20%5B%5D;%0A%09%20%20%20%20for%20(var%20key%20in%20obj)%20keys.push(key);%0A%09%20%20%20%20//%20Ahem,%20IE%20%3C%209.%0A%09%20%20%20%20if%20(hasEnumBug)%20collectNonEnumProps(obj,%20keys);%0A%09%20%20%20%20return%20keys;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Retrieve%20the%20values%20of%20an%20object's%20properties.%0A%09%20%20_.values%20=%20function(obj)%20%7B%0A%09%20%20%20%20var%20keys%20=%20_.keys(obj);%0A%09%20%20%20%20var%20length%20=%20keys.length;%0A%09%20%20%20%20var%20values%20=%20Array(length);%0A%09%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20values%5Bi%5D%20=%20obj%5Bkeys%5Bi%5D%5D;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20values;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20the%20results%20of%20applying%20the%20iteratee%20to%20each%20element%20of%20the%20object%0A%09%20%20//%20In%20contrast%20to%20_.map%20it%20returns%20an%20object%0A%09%20%20_.mapObject%20=%20function(obj,%20iteratee,%20context)%20%7B%0A%09%20%20%20%20iteratee%20=%20cb(iteratee,%20context);%0A%09%20%20%20%20var%20keys%20=%20%20_.keys(obj),%0A%09%20%20%20%20%20%20%20%20%20%20length%20=%20keys.length,%0A%09%20%20%20%20%20%20%20%20%20%20results%20=%20%7B%7D,%0A%09%20%20%20%20%20%20%20%20%20%20currentKey;%0A%09%20%20%20%20%20%20for%20(var%20index%20=%200;%20index%20%3C%20length;%20index++)%20%7B%0A%09%20%20%20%20%20%20%20%20currentKey%20=%20keys%5Bindex%5D;%0A%09%20%20%20%20%20%20%20%20results%5BcurrentKey%5D%20=%20iteratee(obj%5BcurrentKey%5D,%20currentKey,%20obj);%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20return%20results;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Convert%20an%20object%20into%20a%20list%20of%20%60%5Bkey,%20value%5D%60%20pairs.%0A%09%20%20_.pairs%20=%20function(obj)%20%7B%0A%09%20%20%20%20var%20keys%20=%20_.keys(obj);%0A%09%20%20%20%20var%20length%20=%20keys.length;%0A%09%20%20%20%20var%20pairs%20=%20Array(length);%0A%09%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20pairs%5Bi%5D%20=%20%5Bkeys%5Bi%5D,%20obj%5Bkeys%5Bi%5D%5D%5D;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20pairs;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Invert%20the%20keys%20and%20values%20of%20an%20object.%20The%20values%20must%20be%20serializable.%0A%09%20%20_.invert%20=%20function(obj)%20%7B%0A%09%20%20%20%20var%20result%20=%20%7B%7D;%0A%09%20%20%20%20var%20keys%20=%20_.keys(obj);%0A%09%20%20%20%20for%20(var%20i%20=%200,%20length%20=%20keys.length;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20result%5Bobj%5Bkeys%5Bi%5D%5D%5D%20=%20keys%5Bi%5D;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20result;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Return%20a%20sorted%20list%20of%20the%20function%20names%20available%20on%20the%20object.%0A%09%20%20//%20Aliased%20as%20%60methods%60%0A%09%20%20_.functions%20=%20_.methods%20=%20function(obj)%20%7B%0A%09%20%20%20%20var%20names%20=%20%5B%5D;%0A%09%20%20%20%20for%20(var%20key%20in%20obj)%20%7B%0A%09%20%20%20%20%20%20if%20(_.isFunction(obj%5Bkey%5D))%20names.push(key);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20names.sort();%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Extend%20a%20given%20object%20with%20all%20the%20properties%20in%20passed-in%20object(s).%0A%09%20%20_.extend%20=%20createAssigner(_.allKeys);%0A%09%0A%09%20%20//%20Assigns%20a%20given%20object%20with%20all%20the%20own%20properties%20in%20the%20passed-in%20object(s)%0A%09%20%20//%20(https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)%0A%09%20%20_.extendOwn%20=%20_.assign%20=%20createAssigner(_.keys);%0A%09%0A%09%20%20//%20Returns%20the%20first%20key%20on%20an%20object%20that%20passes%20a%20predicate%20test%0A%09%20%20_.findKey%20=%20function(obj,%20predicate,%20context)%20%7B%0A%09%20%20%20%20predicate%20=%20cb(predicate,%20context);%0A%09%20%20%20%20var%20keys%20=%20_.keys(obj),%20key;%0A%09%20%20%20%20for%20(var%20i%20=%200,%20length%20=%20keys.length;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20key%20=%20keys%5Bi%5D;%0A%09%20%20%20%20%20%20if%20(predicate(obj%5Bkey%5D,%20key,%20obj))%20return%20key;%0A%09%20%20%20%20%7D%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Return%20a%20copy%20of%20the%20object%20only%20containing%20the%20whitelisted%20properties.%0A%09%20%20_.pick%20=%20function(object,%20oiteratee,%20context)%20%7B%0A%09%20%20%20%20var%20result%20=%20%7B%7D,%20obj%20=%20object,%20iteratee,%20keys;%0A%09%20%20%20%20if%20(obj%20==%20null)%20return%20result;%0A%09%20%20%20%20if%20(_.isFunction(oiteratee))%20%7B%0A%09%20%20%20%20%20%20keys%20=%20_.allKeys(obj);%0A%09%20%20%20%20%20%20iteratee%20=%20optimizeCb(oiteratee,%20context);%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20keys%20=%20flatten(arguments,%20false,%20false,%201);%0A%09%20%20%20%20%20%20iteratee%20=%20function(value,%20key,%20obj)%20%7B%20return%20key%20in%20obj;%20%7D;%0A%09%20%20%20%20%20%20obj%20=%20Object(obj);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20for%20(var%20i%20=%200,%20length%20=%20keys.length;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20var%20key%20=%20keys%5Bi%5D;%0A%09%20%20%20%20%20%20var%20value%20=%20obj%5Bkey%5D;%0A%09%20%20%20%20%20%20if%20(iteratee(value,%20key,%20obj))%20result%5Bkey%5D%20=%20value;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20result;%0A%09%20%20%7D;%0A%09%0A%09%20%20%20//%20Return%20a%20copy%20of%20the%20object%20without%20the%20blacklisted%20properties.%0A%09%20%20_.omit%20=%20function(obj,%20iteratee,%20context)%20%7B%0A%09%20%20%20%20if%20(_.isFunction(iteratee))%20%7B%0A%09%20%20%20%20%20%20iteratee%20=%20_.negate(iteratee);%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20var%20keys%20=%20_.map(flatten(arguments,%20false,%20false,%201),%20String);%0A%09%20%20%20%20%20%20iteratee%20=%20function(value,%20key)%20%7B%0A%09%20%20%20%20%20%20%20%20return%20!_.contains(keys,%20key);%0A%09%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20_.pick(obj,%20iteratee,%20context);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Fill%20in%20a%20given%20object%20with%20default%20properties.%0A%09%20%20_.defaults%20=%20createAssigner(_.allKeys,%20true);%0A%09%0A%09%20%20//%20Creates%20an%20object%20that%20inherits%20from%20the%20given%20prototype%20object.%0A%09%20%20//%20If%20additional%20properties%20are%20provided%20then%20they%20will%20be%20added%20to%20the%0A%09%20%20//%20created%20object.%0A%09%20%20_.create%20=%20function(prototype,%20props)%20%7B%0A%09%20%20%20%20var%20result%20=%20baseCreate(prototype);%0A%09%20%20%20%20if%20(props)%20_.extendOwn(result,%20props);%0A%09%20%20%20%20return%20result;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Create%20a%20(shallow-cloned)%20duplicate%20of%20an%20object.%0A%09%20%20_.clone%20=%20function(obj)%20%7B%0A%09%20%20%20%20if%20(!_.isObject(obj))%20return%20obj;%0A%09%20%20%20%20return%20_.isArray(obj)%20?%20obj.slice()%20:%20_.extend(%7B%7D,%20obj);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Invokes%20interceptor%20with%20the%20obj,%20and%20then%20returns%20obj.%0A%09%20%20//%20The%20primary%20purpose%20of%20this%20method%20is%20to%20%22tap%20into%22%20a%20method%20chain,%20in%0A%09%20%20//%20order%20to%20perform%20operations%20on%20intermediate%20results%20within%20the%20chain.%0A%09%20%20_.tap%20=%20function(obj,%20interceptor)%20%7B%0A%09%20%20%20%20interceptor(obj);%0A%09%20%20%20%20return%20obj;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20whether%20an%20object%20has%20a%20given%20set%20of%20%60key:value%60%20pairs.%0A%09%20%20_.isMatch%20=%20function(object,%20attrs)%20%7B%0A%09%20%20%20%20var%20keys%20=%20_.keys(attrs),%20length%20=%20keys.length;%0A%09%20%20%20%20if%20(object%20==%20null)%20return%20!length;%0A%09%20%20%20%20var%20obj%20=%20Object(object);%0A%09%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20length;%20i++)%20%7B%0A%09%20%20%20%20%20%20var%20key%20=%20keys%5Bi%5D;%0A%09%20%20%20%20%20%20if%20(attrs%5Bkey%5D%20!==%20obj%5Bkey%5D%20%7C%7C%20!(key%20in%20obj))%20return%20false;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20true;%0A%09%20%20%7D;%0A%09%0A%09%0A%09%20%20//%20Internal%20recursive%20comparison%20function%20for%20%60isEqual%60.%0A%09%20%20var%20eq%20=%20function(a,%20b,%20aStack,%20bStack)%20%7B%0A%09%20%20%20%20//%20Identical%20objects%20are%20equal.%20%600%20===%20-0%60,%20but%20they%20aren't%20identical.%0A%09%20%20%20%20//%20See%20the%20%5BHarmony%20%60egal%60%20proposal%5D(http://wiki.ecmascript.org/doku.php?id=harmony:egal).%0A%09%20%20%20%20if%20(a%20===%20b)%20return%20a%20!==%200%20%7C%7C%201%20/%20a%20===%201%20/%20b;%0A%09%20%20%20%20//%20A%20strict%20comparison%20is%20necessary%20because%20%60null%20==%20undefined%60.%0A%09%20%20%20%20if%20(a%20==%20null%20%7C%7C%20b%20==%20null)%20return%20a%20===%20b;%0A%09%20%20%20%20//%20Unwrap%20any%20wrapped%20objects.%0A%09%20%20%20%20if%20(a%20instanceof%20_)%20a%20=%20a._wrapped;%0A%09%20%20%20%20if%20(b%20instanceof%20_)%20b%20=%20b._wrapped;%0A%09%20%20%20%20//%20Compare%20%60%5B%5BClass%5D%5D%60%20names.%0A%09%20%20%20%20var%20className%20=%20toString.call(a);%0A%09%20%20%20%20if%20(className%20!==%20toString.call(b))%20return%20false;%0A%09%20%20%20%20switch%20(className)%20%7B%0A%09%20%20%20%20%20%20//%20Strings,%20numbers,%20regular%20expressions,%20dates,%20and%20booleans%20are%20compared%20by%20value.%0A%09%20%20%20%20%20%20case%20'%5Bobject%20RegExp%5D':%0A%09%20%20%20%20%20%20//%20RegExps%20are%20coerced%20to%20strings%20for%20comparison%20(Note:%20''%20+%20/a/i%20===%20'/a/i')%0A%09%20%20%20%20%20%20case%20'%5Bobject%20String%5D':%0A%09%20%20%20%20%20%20%20%20//%20Primitives%20and%20their%20corresponding%20object%20wrappers%20are%20equivalent;%20thus,%20%60%225%22%60%20is%0A%09%20%20%20%20%20%20%20%20//%20equivalent%20to%20%60new%20String(%225%22)%60.%0A%09%20%20%20%20%20%20%20%20return%20''%20+%20a%20===%20''%20+%20b;%0A%09%20%20%20%20%20%20case%20'%5Bobject%20Number%5D':%0A%09%20%20%20%20%20%20%20%20//%20%60NaN%60s%20are%20equivalent,%20but%20non-reflexive.%0A%09%20%20%20%20%20%20%20%20//%20Object(NaN)%20is%20equivalent%20to%20NaN%0A%09%20%20%20%20%20%20%20%20if%20(+a%20!==%20+a)%20return%20+b%20!==%20+b;%0A%09%20%20%20%20%20%20%20%20//%20An%20%60egal%60%20comparison%20is%20performed%20for%20other%20numeric%20values.%0A%09%20%20%20%20%20%20%20%20return%20+a%20===%200%20?%201%20/%20+a%20===%201%20/%20b%20:%20+a%20===%20+b;%0A%09%20%20%20%20%20%20case%20'%5Bobject%20Date%5D':%0A%09%20%20%20%20%20%20case%20'%5Bobject%20Boolean%5D':%0A%09%20%20%20%20%20%20%20%20//%20Coerce%20dates%20and%20booleans%20to%20numeric%20primitive%20values.%20Dates%20are%20compared%20by%20their%0A%09%20%20%20%20%20%20%20%20//%20millisecond%20representations.%20Note%20that%20invalid%20dates%20with%20millisecond%20representations%0A%09%20%20%20%20%20%20%20%20//%20of%20%60NaN%60%20are%20not%20equivalent.%0A%09%20%20%20%20%20%20%20%20return%20+a%20===%20+b;%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20var%20areArrays%20=%20className%20===%20'%5Bobject%20Array%5D';%0A%09%20%20%20%20if%20(!areArrays)%20%7B%0A%09%20%20%20%20%20%20if%20(typeof%20a%20!=%20'object'%20%7C%7C%20typeof%20b%20!=%20'object')%20return%20false;%0A%09%0A%09%20%20%20%20%20%20//%20Objects%20with%20different%20constructors%20are%20not%20equivalent,%20but%20%60Object%60s%20or%20%60Array%60s%0A%09%20%20%20%20%20%20//%20from%20different%20frames%20are.%0A%09%20%20%20%20%20%20var%20aCtor%20=%20a.constructor,%20bCtor%20=%20b.constructor;%0A%09%20%20%20%20%20%20if%20(aCtor%20!==%20bCtor%20&&%20!(_.isFunction(aCtor)%20&&%20aCtor%20instanceof%20aCtor%20&&%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20_.isFunction(bCtor)%20&&%20bCtor%20instanceof%20bCtor)%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20&&%20('constructor'%20in%20a%20&&%20'constructor'%20in%20b))%20%7B%0A%09%20%20%20%20%20%20%20%20return%20false;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20//%20Assume%20equality%20for%20cyclic%20structures.%20The%20algorithm%20for%20detecting%20cyclic%0A%09%20%20%20%20//%20structures%20is%20adapted%20from%20ES%205.1%20section%2015.12.3,%20abstract%20operation%20%60JO%60.%0A%09%0A%09%20%20%20%20//%20Initializing%20stack%20of%20traversed%20objects.%0A%09%20%20%20%20//%20It's%20done%20here%20since%20we%20only%20need%20them%20for%20objects%20and%20arrays%20comparison.%0A%09%20%20%20%20aStack%20=%20aStack%20%7C%7C%20%5B%5D;%0A%09%20%20%20%20bStack%20=%20bStack%20%7C%7C%20%5B%5D;%0A%09%20%20%20%20var%20length%20=%20aStack.length;%0A%09%20%20%20%20while%20(length--)%20%7B%0A%09%20%20%20%20%20%20//%20Linear%20search.%20Performance%20is%20inversely%20proportional%20to%20the%20number%20of%0A%09%20%20%20%20%20%20//%20unique%20nested%20structures.%0A%09%20%20%20%20%20%20if%20(aStack%5Blength%5D%20===%20a)%20return%20bStack%5Blength%5D%20===%20b;%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20//%20Add%20the%20first%20object%20to%20the%20stack%20of%20traversed%20objects.%0A%09%20%20%20%20aStack.push(a);%0A%09%20%20%20%20bStack.push(b);%0A%09%0A%09%20%20%20%20//%20Recursively%20compare%20objects%20and%20arrays.%0A%09%20%20%20%20if%20(areArrays)%20%7B%0A%09%20%20%20%20%20%20//%20Compare%20array%20lengths%20to%20determine%20if%20a%20deep%20comparison%20is%20necessary.%0A%09%20%20%20%20%20%20length%20=%20a.length;%0A%09%20%20%20%20%20%20if%20(length%20!==%20b.length)%20return%20false;%0A%09%20%20%20%20%20%20//%20Deep%20compare%20the%20contents,%20ignoring%20non-numeric%20properties.%0A%09%20%20%20%20%20%20while%20(length--)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(!eq(a%5Blength%5D,%20b%5Blength%5D,%20aStack,%20bStack))%20return%20false;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20//%20Deep%20compare%20objects.%0A%09%20%20%20%20%20%20var%20keys%20=%20_.keys(a),%20key;%0A%09%20%20%20%20%20%20length%20=%20keys.length;%0A%09%20%20%20%20%20%20//%20Ensure%20that%20both%20objects%20contain%20the%20same%20number%20of%20properties%20before%20comparing%20deep%20equality.%0A%09%20%20%20%20%20%20if%20(_.keys(b).length%20!==%20length)%20return%20false;%0A%09%20%20%20%20%20%20while%20(length--)%20%7B%0A%09%20%20%20%20%20%20%20%20//%20Deep%20compare%20each%20member%0A%09%20%20%20%20%20%20%20%20key%20=%20keys%5Blength%5D;%0A%09%20%20%20%20%20%20%20%20if%20(!(_.has(b,%20key)%20&&%20eq(a%5Bkey%5D,%20b%5Bkey%5D,%20aStack,%20bStack)))%20return%20false;%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20//%20Remove%20the%20first%20object%20from%20the%20stack%20of%20traversed%20objects.%0A%09%20%20%20%20aStack.pop();%0A%09%20%20%20%20bStack.pop();%0A%09%20%20%20%20return%20true;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Perform%20a%20deep%20comparison%20to%20check%20if%20two%20objects%20are%20equal.%0A%09%20%20_.isEqual%20=%20function(a,%20b)%20%7B%0A%09%20%20%20%20return%20eq(a,%20b);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Is%20a%20given%20array,%20string,%20or%20object%20empty?%0A%09%20%20//%20An%20%22empty%22%20object%20has%20no%20enumerable%20own-properties.%0A%09%20%20_.isEmpty%20=%20function(obj)%20%7B%0A%09%20%20%20%20if%20(obj%20==%20null)%20return%20true;%0A%09%20%20%20%20if%20(isArrayLike(obj)%20&&%20(_.isArray(obj)%20%7C%7C%20_.isString(obj)%20%7C%7C%20_.isArguments(obj)))%20return%20obj.length%20===%200;%0A%09%20%20%20%20return%20_.keys(obj).length%20===%200;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Is%20a%20given%20value%20a%20DOM%20element?%0A%09%20%20_.isElement%20=%20function(obj)%20%7B%0A%09%20%20%20%20return%20!!(obj%20&&%20obj.nodeType%20===%201);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Is%20a%20given%20value%20an%20array?%0A%09%20%20//%20Delegates%20to%20ECMA5's%20native%20Array.isArray%0A%09%20%20_.isArray%20=%20nativeIsArray%20%7C%7C%20function(obj)%20%7B%0A%09%20%20%20%20return%20toString.call(obj)%20===%20'%5Bobject%20Array%5D';%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Is%20a%20given%20variable%20an%20object?%0A%09%20%20_.isObject%20=%20function(obj)%20%7B%0A%09%20%20%20%20var%20type%20=%20typeof%20obj;%0A%09%20%20%20%20return%20type%20===%20'function'%20%7C%7C%20type%20===%20'object'%20&&%20!!obj;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Add%20some%20isType%20methods:%20isArguments,%20isFunction,%20isString,%20isNumber,%20isDate,%20isRegExp,%20isError.%0A%09%20%20_.each(%5B'Arguments',%20'Function',%20'String',%20'Number',%20'Date',%20'RegExp',%20'Error'%5D,%20function(name)%20%7B%0A%09%20%20%20%20_%5B'is'%20+%20name%5D%20=%20function(obj)%20%7B%0A%09%20%20%20%20%20%20return%20toString.call(obj)%20===%20'%5Bobject%20'%20+%20name%20+%20'%5D';%0A%09%20%20%20%20%7D;%0A%09%20%20%7D);%0A%09%0A%09%20%20//%20Define%20a%20fallback%20version%20of%20the%20method%20in%20browsers%20(ahem,%20IE%20%3C%209),%20where%0A%09%20%20//%20there%20isn't%20any%20inspectable%20%22Arguments%22%20type.%0A%09%20%20if%20(!_.isArguments(arguments))%20%7B%0A%09%20%20%20%20_.isArguments%20=%20function(obj)%20%7B%0A%09%20%20%20%20%20%20return%20_.has(obj,%20'callee');%0A%09%20%20%20%20%7D;%0A%09%20%20%7D%0A%09%0A%09%20%20//%20Optimize%20%60isFunction%60%20if%20appropriate.%20Work%20around%20some%20typeof%20bugs%20in%20old%20v8,%0A%09%20%20//%20IE%2011%20(#1621),%20and%20in%20Safari%208%20(#1929).%0A%09%20%20if%20(typeof%20/./%20!=%20'function'%20&&%20typeof%20Int8Array%20!=%20'object')%20%7B%0A%09%20%20%20%20_.isFunction%20=%20function(obj)%20%7B%0A%09%20%20%20%20%20%20return%20typeof%20obj%20==%20'function'%20%7C%7C%20false;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D%0A%09%0A%09%20%20//%20Is%20a%20given%20object%20a%20finite%20number?%0A%09%20%20_.isFinite%20=%20function(obj)%20%7B%0A%09%20%20%20%20return%20isFinite(obj)%20&&%20!isNaN(parseFloat(obj));%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Is%20the%20given%20value%20%60NaN%60?%20(NaN%20is%20the%20only%20number%20which%20does%20not%20equal%20itself).%0A%09%20%20_.isNaN%20=%20function(obj)%20%7B%0A%09%20%20%20%20return%20_.isNumber(obj)%20&&%20obj%20!==%20+obj;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Is%20a%20given%20value%20a%20boolean?%0A%09%20%20_.isBoolean%20=%20function(obj)%20%7B%0A%09%20%20%20%20return%20obj%20===%20true%20%7C%7C%20obj%20===%20false%20%7C%7C%20toString.call(obj)%20===%20'%5Bobject%20Boolean%5D';%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Is%20a%20given%20value%20equal%20to%20null?%0A%09%20%20_.isNull%20=%20function(obj)%20%7B%0A%09%20%20%20%20return%20obj%20===%20null;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Is%20a%20given%20variable%20undefined?%0A%09%20%20_.isUndefined%20=%20function(obj)%20%7B%0A%09%20%20%20%20return%20obj%20===%20void%200;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Shortcut%20function%20for%20checking%20if%20an%20object%20has%20a%20given%20property%20directly%0A%09%20%20//%20on%20itself%20(in%20other%20words,%20not%20on%20a%20prototype).%0A%09%20%20_.has%20=%20function(obj,%20key)%20%7B%0A%09%20%20%20%20return%20obj%20!=%20null%20&&%20hasOwnProperty.call(obj,%20key);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Utility%20Functions%0A%09%20%20//%20-----------------%0A%09%0A%09%20%20//%20Run%20Underscore.js%20in%20*noConflict*%20mode,%20returning%20the%20%60_%60%20variable%20to%20its%0A%09%20%20//%20previous%20owner.%20Returns%20a%20reference%20to%20the%20Underscore%20object.%0A%09%20%20_.noConflict%20=%20function()%20%7B%0A%09%20%20%20%20root._%20=%20previousUnderscore;%0A%09%20%20%20%20return%20this;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Keep%20the%20identity%20function%20around%20for%20default%20iteratees.%0A%09%20%20_.identity%20=%20function(value)%20%7B%0A%09%20%20%20%20return%20value;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Predicate-generating%20functions.%20Often%20useful%20outside%20of%20Underscore.%0A%09%20%20_.constant%20=%20function(value)%20%7B%0A%09%20%20%20%20return%20function()%20%7B%0A%09%20%20%20%20%20%20return%20value;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20_.noop%20=%20function()%7B%7D;%0A%09%0A%09%20%20_.property%20=%20property;%0A%09%0A%09%20%20//%20Generates%20a%20function%20for%20a%20given%20object%20that%20returns%20a%20given%20property.%0A%09%20%20_.propertyOf%20=%20function(obj)%20%7B%0A%09%20%20%20%20return%20obj%20==%20null%20?%20function()%7B%7D%20:%20function(key)%20%7B%0A%09%20%20%20%20%20%20return%20obj%5Bkey%5D;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Returns%20a%20predicate%20for%20checking%20whether%20an%20object%20has%20a%20given%20set%20of%0A%09%20%20//%20%60key:value%60%20pairs.%0A%09%20%20_.matcher%20=%20_.matches%20=%20function(attrs)%20%7B%0A%09%20%20%20%20attrs%20=%20_.extendOwn(%7B%7D,%20attrs);%0A%09%20%20%20%20return%20function(obj)%20%7B%0A%09%20%20%20%20%20%20return%20_.isMatch(obj,%20attrs);%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Run%20a%20function%20**n**%20times.%0A%09%20%20_.times%20=%20function(n,%20iteratee,%20context)%20%7B%0A%09%20%20%20%20var%20accum%20=%20Array(Math.max(0,%20n));%0A%09%20%20%20%20iteratee%20=%20optimizeCb(iteratee,%20context,%201);%0A%09%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20n;%20i++)%20accum%5Bi%5D%20=%20iteratee(i);%0A%09%20%20%20%20return%20accum;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Return%20a%20random%20integer%20between%20min%20and%20max%20(inclusive).%0A%09%20%20_.random%20=%20function(min,%20max)%20%7B%0A%09%20%20%20%20if%20(max%20==%20null)%20%7B%0A%09%20%20%20%20%20%20max%20=%20min;%0A%09%20%20%20%20%20%20min%20=%200;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20min%20+%20Math.floor(Math.random()%20*%20(max%20-%20min%20+%201));%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20A%20(possibly%20faster)%20way%20to%20get%20the%20current%20timestamp%20as%20an%20integer.%0A%09%20%20_.now%20=%20Date.now%20%7C%7C%20function()%20%7B%0A%09%20%20%20%20return%20new%20Date().getTime();%0A%09%20%20%7D;%0A%09%0A%09%20%20%20//%20List%20of%20HTML%20entities%20for%20escaping.%0A%09%20%20var%20escapeMap%20=%20%7B%0A%09%20%20%20%20'&':%20'&amp;',%0A%09%20%20%20%20'%3C':%20'&lt;',%0A%09%20%20%20%20'%3E':%20'&gt;',%0A%09%20%20%20%20'%22':%20'&quot;',%0A%09%20%20%20%20%22'%22:%20'&#x27;',%0A%09%20%20%20%20'%60':%20'&#x60;'%0A%09%20%20%7D;%0A%09%20%20var%20unescapeMap%20=%20_.invert(escapeMap);%0A%09%0A%09%20%20//%20Functions%20for%20escaping%20and%20unescaping%20strings%20to/from%20HTML%20interpolation.%0A%09%20%20var%20createEscaper%20=%20function(map)%20%7B%0A%09%20%20%20%20var%20escaper%20=%20function(match)%20%7B%0A%09%20%20%20%20%20%20return%20map%5Bmatch%5D;%0A%09%20%20%20%20%7D;%0A%09%20%20%20%20//%20Regexes%20for%20identifying%20a%20key%20that%20needs%20to%20be%20escaped%0A%09%20%20%20%20var%20source%20=%20'(?:'%20+%20_.keys(map).join('%7C')%20+%20')';%0A%09%20%20%20%20var%20testRegexp%20=%20RegExp(source);%0A%09%20%20%20%20var%20replaceRegexp%20=%20RegExp(source,%20'g');%0A%09%20%20%20%20return%20function(string)%20%7B%0A%09%20%20%20%20%20%20string%20=%20string%20==%20null%20?%20''%20:%20''%20+%20string;%0A%09%20%20%20%20%20%20return%20testRegexp.test(string)%20?%20string.replace(replaceRegexp,%20escaper)%20:%20string;%0A%09%20%20%20%20%7D;%0A%09%20%20%7D;%0A%09%20%20_.escape%20=%20createEscaper(escapeMap);%0A%09%20%20_.unescape%20=%20createEscaper(unescapeMap);%0A%09%0A%09%20%20//%20If%20the%20value%20of%20the%20named%20%60property%60%20is%20a%20function%20then%20invoke%20it%20with%20the%0A%09%20%20//%20%60object%60%20as%20context;%20otherwise,%20return%20it.%0A%09%20%20_.result%20=%20function(object,%20property,%20fallback)%20%7B%0A%09%20%20%20%20var%20value%20=%20object%20==%20null%20?%20void%200%20:%20object%5Bproperty%5D;%0A%09%20%20%20%20if%20(value%20===%20void%200)%20%7B%0A%09%20%20%20%20%20%20value%20=%20fallback;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20_.isFunction(value)%20?%20value.call(object)%20:%20value;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Generate%20a%20unique%20integer%20id%20(unique%20within%20the%20entire%20client%20session).%0A%09%20%20//%20Useful%20for%20temporary%20DOM%20ids.%0A%09%20%20var%20idCounter%20=%200;%0A%09%20%20_.uniqueId%20=%20function(prefix)%20%7B%0A%09%20%20%20%20var%20id%20=%20++idCounter%20+%20'';%0A%09%20%20%20%20return%20prefix%20?%20prefix%20+%20id%20:%20id;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20By%20default,%20Underscore%20uses%20ERB-style%20template%20delimiters,%20change%20the%0A%09%20%20//%20following%20template%20settings%20to%20use%20alternative%20delimiters.%0A%09%20%20_.templateSettings%20=%20%7B%0A%09%20%20%20%20evaluate%20%20%20%20:%20/%3C%25(%5B%5Cs%5CS%5D+?)%25%3E/g,%0A%09%20%20%20%20interpolate%20:%20/%3C%25=(%5B%5Cs%5CS%5D+?)%25%3E/g,%0A%09%20%20%20%20escape%20%20%20%20%20%20:%20/%3C%25-(%5B%5Cs%5CS%5D+?)%25%3E/g%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20When%20customizing%20%60templateSettings%60,%20if%20you%20don't%20want%20to%20define%20an%0A%09%20%20//%20interpolation,%20evaluation%20or%20escaping%20regex,%20we%20need%20one%20that%20is%0A%09%20%20//%20guaranteed%20not%20to%20match.%0A%09%20%20var%20noMatch%20=%20/(.)%5E/;%0A%09%0A%09%20%20//%20Certain%20characters%20need%20to%20be%20escaped%20so%20that%20they%20can%20be%20put%20into%20a%0A%09%20%20//%20string%20literal.%0A%09%20%20var%20escapes%20=%20%7B%0A%09%20%20%20%20%22'%22:%20%20%20%20%20%20%22'%22,%0A%09%20%20%20%20'%5C%5C':%20%20%20%20%20'%5C%5C',%0A%09%20%20%20%20'%5Cr':%20%20%20%20%20'r',%0A%09%20%20%20%20'%5Cn':%20%20%20%20%20'n',%0A%09%20%20%20%20'%5Cu2028':%20'u2028',%0A%09%20%20%20%20'%5Cu2029':%20'u2029'%0A%09%20%20%7D;%0A%09%0A%09%20%20var%20escaper%20=%20/%5C%5C%7C'%7C%5Cr%7C%5Cn%7C%5Cu2028%7C%5Cu2029/g;%0A%09%0A%09%20%20var%20escapeChar%20=%20function(match)%20%7B%0A%09%20%20%20%20return%20'%5C%5C'%20+%20escapes%5Bmatch%5D;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20JavaScript%20micro-templating,%20similar%20to%20John%20Resig's%20implementation.%0A%09%20%20//%20Underscore%20templating%20handles%20arbitrary%20delimiters,%20preserves%20whitespace,%0A%09%20%20//%20and%20correctly%20escapes%20quotes%20within%20interpolated%20code.%0A%09%20%20//%20NB:%20%60oldSettings%60%20only%20exists%20for%20backwards%20compatibility.%0A%09%20%20_.template%20=%20function(text,%20settings,%20oldSettings)%20%7B%0A%09%20%20%20%20if%20(!settings%20&&%20oldSettings)%20settings%20=%20oldSettings;%0A%09%20%20%20%20settings%20=%20_.defaults(%7B%7D,%20settings,%20_.templateSettings);%0A%09%0A%09%20%20%20%20//%20Combine%20delimiters%20into%20one%20regular%20expression%20via%20alternation.%0A%09%20%20%20%20var%20matcher%20=%20RegExp(%5B%0A%09%20%20%20%20%20%20(settings.escape%20%7C%7C%20noMatch).source,%0A%09%20%20%20%20%20%20(settings.interpolate%20%7C%7C%20noMatch).source,%0A%09%20%20%20%20%20%20(settings.evaluate%20%7C%7C%20noMatch).source%0A%09%20%20%20%20%5D.join('%7C')%20+%20'%7C$',%20'g');%0A%09%0A%09%20%20%20%20//%20Compile%20the%20template%20source,%20escaping%20string%20literals%20appropriately.%0A%09%20%20%20%20var%20index%20=%200;%0A%09%20%20%20%20var%20source%20=%20%22__p+='%22;%0A%09%20%20%20%20text.replace(matcher,%20function(match,%20escape,%20interpolate,%20evaluate,%20offset)%20%7B%0A%09%20%20%20%20%20%20source%20+=%20text.slice(index,%20offset).replace(escaper,%20escapeChar);%0A%09%20%20%20%20%20%20index%20=%20offset%20+%20match.length;%0A%09%0A%09%20%20%20%20%20%20if%20(escape)%20%7B%0A%09%20%20%20%20%20%20%20%20source%20+=%20%22'+%5Cn((__t=(%22%20+%20escape%20+%20%22))==null?'':_.escape(__t))+%5Cn'%22;%0A%09%20%20%20%20%20%20%7D%20else%20if%20(interpolate)%20%7B%0A%09%20%20%20%20%20%20%20%20source%20+=%20%22'+%5Cn((__t=(%22%20+%20interpolate%20+%20%22))==null?'':__t)+%5Cn'%22;%0A%09%20%20%20%20%20%20%7D%20else%20if%20(evaluate)%20%7B%0A%09%20%20%20%20%20%20%20%20source%20+=%20%22';%5Cn%22%20+%20evaluate%20+%20%22%5Cn__p+='%22;%0A%09%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20//%20Adobe%20VMs%20need%20the%20match%20returned%20to%20produce%20the%20correct%20offest.%0A%09%20%20%20%20%20%20return%20match;%0A%09%20%20%20%20%7D);%0A%09%20%20%20%20source%20+=%20%22';%5Cn%22;%0A%09%0A%09%20%20%20%20//%20If%20a%20variable%20is%20not%20specified,%20place%20data%20values%20in%20local%20scope.%0A%09%20%20%20%20if%20(!settings.variable)%20source%20=%20'with(obj%7C%7C%7B%7D)%7B%5Cn'%20+%20source%20+%20'%7D%5Cn';%0A%09%0A%09%20%20%20%20source%20=%20%22var%20__t,__p='',__j=Array.prototype.join,%22%20+%0A%09%20%20%20%20%20%20%22print=function()%7B__p+=__j.call(arguments,'');%7D;%5Cn%22%20+%0A%09%20%20%20%20%20%20source%20+%20'return%20__p;%5Cn';%0A%09%0A%09%20%20%20%20try%20%7B%0A%09%20%20%20%20%20%20var%20render%20=%20new%20Function(settings.variable%20%7C%7C%20'obj',%20'_',%20source);%0A%09%20%20%20%20%7D%20catch%20(e)%20%7B%0A%09%20%20%20%20%20%20e.source%20=%20source;%0A%09%20%20%20%20%20%20throw%20e;%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20var%20template%20=%20function(data)%20%7B%0A%09%20%20%20%20%20%20return%20render.call(this,%20data,%20_);%0A%09%20%20%20%20%7D;%0A%09%0A%09%20%20%20%20//%20Provide%20the%20compiled%20source%20as%20a%20convenience%20for%20precompilation.%0A%09%20%20%20%20var%20argument%20=%20settings.variable%20%7C%7C%20'obj';%0A%09%20%20%20%20template.source%20=%20'function('%20+%20argument%20+%20')%7B%5Cn'%20+%20source%20+%20'%7D';%0A%09%0A%09%20%20%20%20return%20template;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Add%20a%20%22chain%22%20function.%20Start%20chaining%20a%20wrapped%20Underscore%20object.%0A%09%20%20_.chain%20=%20function(obj)%20%7B%0A%09%20%20%20%20var%20instance%20=%20_(obj);%0A%09%20%20%20%20instance._chain%20=%20true;%0A%09%20%20%20%20return%20instance;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20OOP%0A%09%20%20//%20---------------%0A%09%20%20//%20If%20Underscore%20is%20called%20as%20a%20function,%20it%20returns%20a%20wrapped%20object%20that%0A%09%20%20//%20can%20be%20used%20OO-style.%20This%20wrapper%20holds%20altered%20versions%20of%20all%20the%0A%09%20%20//%20underscore%20functions.%20Wrapped%20objects%20may%20be%20chained.%0A%09%0A%09%20%20//%20Helper%20function%20to%20continue%20chaining%20intermediate%20results.%0A%09%20%20var%20result%20=%20function(instance,%20obj)%20%7B%0A%09%20%20%20%20return%20instance._chain%20?%20_(obj).chain()%20:%20obj;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Add%20your%20own%20custom%20functions%20to%20the%20Underscore%20object.%0A%09%20%20_.mixin%20=%20function(obj)%20%7B%0A%09%20%20%20%20_.each(_.functions(obj),%20function(name)%20%7B%0A%09%20%20%20%20%20%20var%20func%20=%20_%5Bname%5D%20=%20obj%5Bname%5D;%0A%09%20%20%20%20%20%20_.prototype%5Bname%5D%20=%20function()%20%7B%0A%09%20%20%20%20%20%20%20%20var%20args%20=%20%5Bthis._wrapped%5D;%0A%09%20%20%20%20%20%20%20%20push.apply(args,%20arguments);%0A%09%20%20%20%20%20%20%20%20return%20result(this,%20func.apply(_,%20args));%0A%09%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%7D);%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Add%20all%20of%20the%20Underscore%20functions%20to%20the%20wrapper%20object.%0A%09%20%20_.mixin(_);%0A%09%0A%09%20%20//%20Add%20all%20mutator%20Array%20functions%20to%20the%20wrapper.%0A%09%20%20_.each(%5B'pop',%20'push',%20'reverse',%20'shift',%20'sort',%20'splice',%20'unshift'%5D,%20function(name)%20%7B%0A%09%20%20%20%20var%20method%20=%20ArrayProto%5Bname%5D;%0A%09%20%20%20%20_.prototype%5Bname%5D%20=%20function()%20%7B%0A%09%20%20%20%20%20%20var%20obj%20=%20this._wrapped;%0A%09%20%20%20%20%20%20method.apply(obj,%20arguments);%0A%09%20%20%20%20%20%20if%20((name%20===%20'shift'%20%7C%7C%20name%20===%20'splice')%20&&%20obj.length%20===%200)%20delete%20obj%5B0%5D;%0A%09%20%20%20%20%20%20return%20result(this,%20obj);%0A%09%20%20%20%20%7D;%0A%09%20%20%7D);%0A%09%0A%09%20%20//%20Add%20all%20accessor%20Array%20functions%20to%20the%20wrapper.%0A%09%20%20_.each(%5B'concat',%20'join',%20'slice'%5D,%20function(name)%20%7B%0A%09%20%20%20%20var%20method%20=%20ArrayProto%5Bname%5D;%0A%09%20%20%20%20_.prototype%5Bname%5D%20=%20function()%20%7B%0A%09%20%20%20%20%20%20return%20result(this,%20method.apply(this._wrapped,%20arguments));%0A%09%20%20%20%20%7D;%0A%09%20%20%7D);%0A%09%0A%09%20%20//%20Extracts%20the%20result%20from%20a%20wrapped%20and%20chained%20object.%0A%09%20%20_.prototype.value%20=%20function()%20%7B%0A%09%20%20%20%20return%20this._wrapped;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20Provide%20unwrapping%20proxy%20for%20some%20methods%20used%20in%20engine%20operations%0A%09%20%20//%20such%20as%20arithmetic%20and%20JSON%20stringification.%0A%09%20%20_.prototype.valueOf%20=%20_.prototype.toJSON%20=%20_.prototype.value;%0A%09%0A%09%20%20_.prototype.toString%20=%20function()%20%7B%0A%09%20%20%20%20return%20''%20+%20this._wrapped;%0A%09%20%20%7D;%0A%09%0A%09%20%20//%20AMD%20registration%20happens%20at%20the%20end%20for%20compatibility%20with%20AMD%20loaders%0A%09%20%20//%20that%20may%20not%20enforce%20next-turn%20semantics%20on%20modules.%20Even%20though%20general%0A%09%20%20//%20practice%20for%20AMD%20registration%20is%20to%20be%20anonymous,%20underscore%20registers%0A%09%20%20//%20as%20a%20named%20module%20because,%20like%20jQuery,%20it%20is%20a%20base%20library%20that%20is%0A%09%20%20//%20popular%20enough%20to%20be%20bundled%20in%20a%20third%20party%20lib,%20but%20not%20be%20part%20of%0A%09%20%20//%20an%20AMD%20load%20request.%20Those%20cases%20could%20generate%20an%20error%20when%20an%0A%09%20%20//%20anonymous%20define()%20is%20called%20outside%20of%20a%20loader%20request.%0A%09%20%20if%20(true)%20%7B%0A%09%20%20%20%20!(__WEBPACK_AMD_DEFINE_ARRAY__%20=%20%5B%5D,%20__WEBPACK_AMD_DEFINE_RESULT__%20=%20function()%20%7B%0A%09%20%20%20%20%20%20return%20_;%0A%09%20%20%20%20%7D.apply(exports,%20__WEBPACK_AMD_DEFINE_ARRAY__),%20__WEBPACK_AMD_DEFINE_RESULT__%20!==%20undefined%20&&%20(module.exports%20=%20__WEBPACK_AMD_DEFINE_RESULT__));%0A%09%20%20%7D%0A%09%7D.call(this));%0A%0A%0A/***/%20%7D,%0A%0A/***/%20576:%0A/***/%20function(module,%20exports,%20__webpack_require__)%20%7B%0A%0A%09%22use%20strict%22;%0A%09%0A%09Object.defineProperty(exports,%20%22__esModule%22,%20%7B%0A%09%20%20%20%20value:%20true%0A%09%7D);%0A%09%0A%09var%20_extends%20=%20Object.assign%20%7C%7C%20function%20(target)%20%7B%20for%20(var%20i%20=%201;%20i%20%3C%20arguments.length;%20i++)%20%7B%20var%20source%20=%20arguments%5Bi%5D;%20for%20(var%20key%20in%20source)%20%7B%20if%20(Object.prototype.hasOwnProperty.call(source,%20key))%20%7B%20target%5Bkey%5D%20=%20source%5Bkey%5D;%20%7D%20%7D%20%7D%20return%20target;%20%7D;%0A%09%0A%09var%20_underscore%20=%20__webpack_require__(6);%0A%09%0A%09var%20_underscore2%20=%20_interopRequireDefault(_underscore);%0A%09%0A%09function%20_interopRequireDefault(obj)%20%7B%20return%20obj%20&&%20obj.__esModule%20?%20obj%20:%20%7B%20default:%20obj%20%7D;%20%7D%0A%09%0A%09var%20endsWith%20=%20__webpack_require__(577);%0A%09var%20StackTraceGPS%20=%20__webpack_require__(578);%0A%09var%20ErrorStackParser%20=%20__webpack_require__(581);%0A%09class%20FrameResolver%20%7B%0A%09%20%20%20%20constructor(ajax)%20%7B%0A%09%20%20%20%20%20%20%20%20this._gps%20=%20new%20StackTraceGPS(%7B%20ajax:%20ajax%20%7D);;%0A%09%20%20%20%20%20%20%20%20this._resolvedFrameCache%20=%20%7B%7D;%0A%09%20%20%20%20%20%20%20%20this._frameStringsCurrentlyBeingResolved%20=%20%7B%7D;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20_addCodeToFrame(frameObject,%20callback)%20%7B%0A%09%20%20%20%20%20%20%20%20this._gps._get(frameObject.fileName).then(function%20(src)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20lines%20=%20src.split(%22%5Cn%22);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20zeroIndexedLineNumber%20=%20frameObject.lineNumber%20-%201;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20frameObject%20=%20_extends(%7B%7D,%20frameObject);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20frameObject.prevLines%20=%20lines.slice(0,%20zeroIndexedLineNumber);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20frameObject.line%20=%20lines%5BzeroIndexedLineNumber%5D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20frameObject.nextLines%20=%20lines.slice(zeroIndexedLineNumber%20+%201);%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20originalFilename%20=%20frameObject.fileName.replace(%22.dontprocess%22,%20%22%22);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20filenameParts%20=%20originalFilename.split(%22/%22);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20frameObject.uiFileName%20=%20_underscore2.default.last(filenameParts);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(frameObject.line%20===%20undefined)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20debugger;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20callback(null,%20frameObject);%0A%09%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20resolve(frameString,%20callback)%20%7B%0A%09%20%20%20%20%20%20%20%20//%20console.time(%22Resolve%20Frame%20%22%20+%20frameString)%0A%09%20%20%20%20%20%20%20%20var%20self%20=%20this;%0A%09%20%20%20%20%20%20%20%20if%20(this._resolvedFrameCache%5BframeString%5D)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20done(%5Bnull,%20this._resolvedFrameCache%5BframeString%5D%5D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20var%20isCanceled%20=%20false;%0A%09%0A%09%20%20%20%20%20%20%20%20var%20frameObject%20=%20ErrorStackParser.parse(%7B%20stack:%20frameString%20%7D)%5B0%5D;%0A%09%0A%09%20%20%20%20%20%20%20%20if%20(endsWith(frameObject.fileName,%20%22.html%22))%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20don't%20bother%20looking%20for%20source%20map%20file%0A%09%20%20%20%20%20%20%20%20%20%20%20%20frameObject.fileName%20+=%20%22.dontprocess%22;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20this._addCodeToFrame(frameObject,%20callback);%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20Use%20promises%20so%20we%20can%20re-use%20them,%20so%20if%20the%20same%20frame%20is%20requested%20again%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20before%20the%20first%20one%20succeeded%20we%20don't%20attempt%20to%20resolve%20again%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20isAlreadyResolvingFrameString%20=%20!!self._frameStringsCurrentlyBeingResolved%5BframeString%5D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(!isAlreadyResolvingFrameString)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self._frameStringsCurrentlyBeingResolved%5BframeString%5D%20=%20new%20Promise(function%20(resolve,%20reject)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self._gps.pinpoint(frameObject).then(function%20(newFrame)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self._addCodeToFrame(newFrame,%20function%20(err,%20frame)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(%5Berr,%20frame%5D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D,%20function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self._addCodeToFrame(frameObject,%20function%20(err,%20frame)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(%5Berr,%20frame%5D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(%22error%22,%20arguments);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20self._frameStringsCurrentlyBeingResolved%5BframeString%5D.then(done);%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20function%20done(args)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20%5Berr,%20frame%5D%20=%20args;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20console.timeEnd(%22Resolve%20Frame%20%22%20+%20frameString)%0A%09%20%20%20%20%20%20%20%20%20%20%20%20delete%20self._frameStringsCurrentlyBeingResolved%5BframeString%5D;%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20self._resolvedFrameCache%5BframeString%5D%20=%20frame;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(!isCanceled)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20callback(err,%20frame);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20return%20function%20cancel()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20isCanceled%20=%20true;%0A%09%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20addFilesToCache(files)%20%7B%0A%09%20%20%20%20%20%20%20%20this._gps.sourceCache%20=%20_underscore2.default.extend(this._gps.sourceCache,%20files);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20getSourceFileContent(filePath,%20callback)%20%7B%0A%09%20%20%20%20%20%20%20%20this._gps._get(filePath).then(function%20(src)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20callback(src);%0A%09%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%7D%0A%09%7D%0A%09exports.default%20=%20FrameResolver;%0A%0A/***/%20%7D,%0A%0A/***/%20577:%0A/***/%20function(module,%20exports)%20%7B%0A%0A%09/*!%0A%09%20*%20ends-with%20%3Chttps://github.com/jonschlinkert/ends-with%3E%0A%09%20*%0A%09%20*%20Copyright%20(c)%202014%20Jon%20Schlinkert,%20contributors.%0A%09%20*%20Licensed%20under%20the%20MIT%20license.%0A%09%20*/%0A%09%0A%09'use%20strict';%0A%09%0A%09module.exports%20=%20function%20(a,%20b)%20%7B%0A%09%20%20if%20(Array.isArray(a))%20%7B%0A%09%20%20%20%20return%20a%5Ba.length%20-%201%5D%20===%20b;%0A%09%20%20%7D%0A%09%0A%09%20%20a%20=%20String(a);%0A%09%20%20b%20=%20String(b);%0A%09%0A%09%20%20var%20i%20=%20b.length;%0A%09%20%20var%20len%20=%20a.length%20-%20i;%0A%09%0A%09%20%20while%20(i--)%20%7B%0A%09%20%20%20%20if%20(b.charAt(i)%20!==%20a.charAt(len%20+%20i))%20%7B%0A%09%20%20%20%20%20%20return%20false;%0A%09%20%20%20%20%7D%0A%09%20%20%7D%0A%09%20%20return%20true;%0A%09%7D;%0A%0A/***/%20%7D,%0A%0A/***/%20578:%0A/***/%20function(module,%20exports,%20__webpack_require__)%20%7B%0A%0A%09var%20__WEBPACK_AMD_DEFINE_FACTORY__,%20__WEBPACK_AMD_DEFINE_ARRAY__,%20__WEBPACK_AMD_DEFINE_RESULT__;'use%20strict';%0A%09%0A%09/*%0A%09%20%20%20%20originally%20stored%20this%20file%20in%20repo%20because%20I%20had%20some%20issues%20loading%20the%0A%09%20%20%20%20correctly%20versioned%20files%20of%20the%20different%20stacktrace.js%20libraries%0A%09%0A%09%20%20%20%20Now%20I%20also%20added%20a%20patch%20to%20cache%20the%20map%20consumer%20object.%0A%09%20%20%20%20See%20here:%20https://github.com/stacktracejs/stacktrace-gps/issues/41%0A%09*/%0A%09%0A%09(function%20(root,%20factory)%20%7B%0A%09%20%20%20%20'use%20strict';%0A%09%20%20%20%20//%20Universal%20Module%20Definition%20(UMD)%20to%20support%20AMD,%20CommonJS/Node.js,%20Rhino,%20and%20browsers.%0A%09%0A%09%20%20%20%20/*%20istanbul%20ignore%20next%20*/%0A%09%0A%09%20%20%20%20if%20(true)%20%7B%0A%09%20%20%20%20%20%20%20%20!(__WEBPACK_AMD_DEFINE_ARRAY__%20=%20%5B__webpack_require__(579),%20__webpack_require__(580)%5D,%20__WEBPACK_AMD_DEFINE_FACTORY__%20=%20(factory),%20__WEBPACK_AMD_DEFINE_RESULT__%20=%20(typeof%20__WEBPACK_AMD_DEFINE_FACTORY__%20===%20'function'%20?%20(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,%20__WEBPACK_AMD_DEFINE_ARRAY__))%20:%20__WEBPACK_AMD_DEFINE_FACTORY__),%20__WEBPACK_AMD_DEFINE_RESULT__%20!==%20undefined%20&&%20(module.exports%20=%20__WEBPACK_AMD_DEFINE_RESULT__));%0A%09%20%20%20%20%7D%20else%20if%20(typeof%20exports%20===%20'object')%20%7B%0A%09%20%20%20%20%20%20%20%20module.exports%20=%20factory(require('source-map/lib/source-map-consumer'),%20require('./stackframe'));%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20root.StackTraceGPS%20=%20factory(root.SourceMap%20%7C%7C%20root.sourceMap,%20root.StackFrame);%0A%09%20%20%20%20%7D%0A%09%7D)(undefined,%20function%20(SourceMap,%20StackFrame)%20%7B%0A%09%20%20%20%20'use%20strict';%0A%09%0A%09%20%20%20%20/**%0A%09%20%20%20%20%20*%20Make%20a%20X-Domain%20request%20to%20url%20and%20callback.%0A%09%20%20%20%20%20*%0A%09%20%20%20%20%20*%20@param%20%7BString%7D%20url%0A%09%20%20%20%20%20*%20@returns%20%7BPromise%7D%20with%20response%20text%20if%20fulfilled%0A%09%20%20%20%20%20*/%0A%09%0A%09%20%20%20%20function%20_xdr(url)%20%7B%0A%09%20%20%20%20%20%20%20%20return%20new%20Promise(function%20(resolve,%20reject)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20req%20=%20new%20XMLHttpRequest();%0A%09%20%20%20%20%20%20%20%20%20%20%20%20req.open('get',%20url);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20req.onerror%20=%20reject;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20req.onreadystatechange%20=%20function%20onreadystatechange()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(req.readyState%20===%204)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(req.status%20%3E=%20200%20&&%20req.status%20%3C%20300)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(req.responseText);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reject(new%20Error('HTTP%20status:%20'%20+%20req.status%20+%20'%20retrieving%20'%20+%20url));%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20req.send();%0A%09%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20/**%0A%09%20%20%20%20%20*%20Convert%20a%20Base64-encoded%20string%20into%20its%20original%20representation.%0A%09%20%20%20%20%20*%20Used%20for%20inline%20sourcemaps.%0A%09%20%20%20%20%20*%0A%09%20%20%20%20%20*%20@param%20%7BString%7D%20b64str%20Base-64%20encoded%20string%0A%09%20%20%20%20%20*%20@returns%20%7BString%7D%20original%20representation%20of%20the%20base64-encoded%20string.%0A%09%20%20%20%20%20*/%0A%09%20%20%20%20function%20_atob(b64str)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(typeof%20window%20!==%20'undefined'%20&&%20window.atob)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20window.atob(b64str);%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20Error('You%20must%20supply%20a%20polyfill%20for%20window.atob%20in%20this%20environment');%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20function%20_parseJson(string)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(typeof%20JSON%20!==%20'undefined'%20&&%20JSON.parse)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20JSON.parse(string);%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20Error('You%20must%20supply%20a%20polyfill%20for%20JSON.parse%20in%20this%20environment');%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20function%20_findFunctionName(source,%20lineNumber%20/*,%20columnNumber*/)%20%7B%0A%09%20%20%20%20%20%20%20%20//%20function%20%7Bname%7D(%7Bargs%7D)%20m%5B1%5D=name%20m%5B2%5D=args%0A%09%20%20%20%20%20%20%20%20var%20reFunctionDeclaration%20=%20/function%5Cs+(%5B%5E(%5D*?)%5Cs*%5C((%5B%5E)%5D*)%5C)/;%0A%09%20%20%20%20%20%20%20%20//%20%7Bname%7D%20=%20function%20(%7Bargs%7D)%20TODO%20args%20capture%0A%09%20%20%20%20%20%20%20%20var%20reFunctionExpression%20=%20/%5B'%22%5D?(%5B$_A-Za-z%5D%5B$_A-Za-z0-9%5D*)%5B'%22%5D?%5Cs*%5B:=%5D%5Cs*function%5Cb/;%0A%09%20%20%20%20%20%20%20%20//%20%7Bname%7D%20=%20eval()%0A%09%20%20%20%20%20%20%20%20var%20reFunctionEvaluation%20=%20/%5B'%22%5D?(%5B$_A-Za-z%5D%5B$_A-Za-z0-9%5D*)%5B'%22%5D?%5Cs*%5B:=%5D%5Cs*(?:eval%7Cnew%20Function)%5Cb/;%0A%09%20%20%20%20%20%20%20%20var%20lines%20=%20source.split('%5Cn');%0A%09%0A%09%20%20%20%20%20%20%20%20//%20Walk%20backwards%20in%20the%20source%20lines%20until%20we%20find%20the%20line%20which%20matches%20one%20of%20the%20patterns%20above%0A%09%20%20%20%20%20%20%20%20var%20code%20=%20'';%0A%09%20%20%20%20%20%20%20%20var%20maxLines%20=%20Math.min(lineNumber,%2020);%0A%09%20%20%20%20%20%20%20%20var%20m;%0A%09%20%20%20%20%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20maxLines;%20++i)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20lineNo%20is%201-based,%20source%5B%5D%20is%200-based%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20line%20=%20lines%5BlineNumber%20-%20i%20-%201%5D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20commentPos%20=%20line.indexOf('//');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(commentPos%20%3E=%200)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20line%20=%20line.substr(0,%20commentPos);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(line)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20code%20=%20line%20+%20code;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20m%20=%20reFunctionExpression.exec(code);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(m%20&&%20m%5B1%5D)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20m%5B1%5D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20m%20=%20reFunctionDeclaration.exec(code);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(m%20&&%20m%5B1%5D)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20m%5B1%5D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20m%20=%20reFunctionEvaluation.exec(code);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(m%20&&%20m%5B1%5D)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20m%5B1%5D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20return%20undefined;%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20function%20_ensureSupportedEnvironment()%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(typeof%20Object.defineProperty%20!==%20'function'%20%7C%7C%20typeof%20Object.create%20!==%20'function')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20Error('Unable%20to%20consume%20source%20maps%20in%20older%20browsers');%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20function%20_ensureStackFrameIsLegit(stackframe)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(typeof%20stackframe%20!==%20'object')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20TypeError('Given%20StackFrame%20is%20not%20an%20object');%0A%09%20%20%20%20%20%20%20%20%7D%20else%20if%20(typeof%20stackframe.fileName%20!==%20'string')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20TypeError('Given%20file%20name%20is%20not%20a%20String');%0A%09%20%20%20%20%20%20%20%20%7D%20else%20if%20(typeof%20stackframe.lineNumber%20!==%20'number'%20%7C%7C%20stackframe.lineNumber%20%25%201%20!==%200%20%7C%7C%20stackframe.lineNumber%20%3C%201)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20TypeError('Given%20line%20number%20must%20be%20a%20positive%20integer');%0A%09%20%20%20%20%20%20%20%20%7D%20else%20if%20(typeof%20stackframe.columnNumber%20!==%20'number'%20%7C%7C%20stackframe.columnNumber%20%25%201%20!==%200%20%7C%7C%20stackframe.columnNumber%20%3C%200)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20TypeError('Given%20column%20number%20must%20be%20a%20non-negative%20integer');%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20return%20true;%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20function%20_findSourceMappingURL(source)%20%7B%0A%09%20%20%20%20%20%20%20%20var%20m%20=%20/%5C/%5C/%5B#@%5D%20?sourceMappingURL=(%5B%5E%5Cs'%22%5D+)%5Cs*$/.exec(source);%0A%09%20%20%20%20%20%20%20%20if%20(m%20&&%20m%5B1%5D)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20m%5B1%5D;%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20console.warn(%22not%20found%20for%22,%20source);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20Error('sourceMappingURL%20not%20found');%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20var%20consumers%20=%20new%20Map();%0A%09%20%20%20%20function%20getMapConsumer(rawSourceMap)%20%7B%0A%09%20%20%20%20%20%20%20%20var%20consumer%20=%20consumers.get(rawSourceMap);%0A%09%20%20%20%20%20%20%20%20if%20(!consumer)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20consumer%20=%20new%20SourceMap.SourceMapConsumer(rawSourceMap);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20consumers.set(rawSourceMap,%20consumer);%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20return%20consumer;%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20function%20_extractLocationInfoFromSourceMap(stackframe,%20rawSourceMap,%20sourceCache)%20%7B%0A%09%20%20%20%20%20%20%20%20return%20new%20Promise(function%20(resolve,%20reject)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20mapConsumer%20=%20getMapConsumer(rawSourceMap);%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20loc%20=%20mapConsumer.originalPositionFor(%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20line:%20stackframe.lineNumber,%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20column:%20stackframe.columnNumber%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(loc.source)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20mappedSource%20=%20mapConsumer.sourceContentFor(loc.source);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(mappedSource)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20sourceCache%5Bloc.source%5D%20=%20mappedSource;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20newStackFrame%20=%20new%20StackFrame(loc.name%20%7C%7C%20stackframe.functionName,%20stackframe.args,%20loc.source,%20loc.line,%20loc.column);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20console.log(%22new%20stackframe%22,%20newStackFrame)%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(newStackFrame);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reject(new%20Error('Could%20not%20get%20original%20source%20for%20given%20stackframe%20and%20source%20map'));%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20/**%0A%09%20%20%20%20%20*%20@constructor%0A%09%20%20%20%20%20*%20@param%20%7BObject%7D%20opts%0A%09%20%20%20%20%20*%20%20%20%20%20%20opts.sourceCache%20=%20%7Burl:%20%22Source%20String%22%7D%20=%3E%20preload%20source%20cache%0A%09%20%20%20%20%20*%20%20%20%20%20%20opts.offline%20=%20True%20to%20prevent%20network%20requests.%0A%09%20%20%20%20%20*%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20effort%20without%20sources%20or%20source%20maps.%0A%09%20%20%20%20%20*%20%20%20%20%20%20opts.ajax%20=%20Promise%20returning%20function%20to%20make%20X-Domain%20requests%0A%09%20%20%20%20%20*/%0A%09%20%20%20%20return%20function%20StackTraceGPS(opts)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(!(this%20instanceof%20StackTraceGPS))%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20new%20StackTraceGPS(opts);%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20opts%20=%20opts%20%7C%7C%20%7B%7D;%0A%09%0A%09%20%20%20%20%20%20%20%20this.sourceCache%20=%20opts.sourceCache%20%7C%7C%20%7B%7D;%0A%09%0A%09%20%20%20%20%20%20%20%20this.ajax%20=%20opts.ajax%20%7C%7C%20_xdr;%0A%09%0A%09%20%20%20%20%20%20%20%20this._atob%20=%20opts.atob%20%7C%7C%20_atob;%0A%09%0A%09%20%20%20%20%20%20%20%20this._get%20=%20function%20_get(location)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20new%20Promise(function%20(resolve,%20reject)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20isDataUrl%20=%20location.substr(0,%205)%20===%20'data:';%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(this.sourceCache%5Blocation%5D)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(this.sourceCache%5Blocation%5D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(opts.offline%20&&%20!isDataUrl)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reject(new%20Error('Cannot%20make%20network%20requests%20in%20offline%20mode'));%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(isDataUrl)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20data%20URLs%20can%20have%20parameters.%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20see%20http://tools.ietf.org/html/rfc2397%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20supportedEncodingRegexp%20=%20/%5Edata:application%5C/json;(%5B%5Cw=:%22-%5D+;)*base64,/;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20match%20=%20location.match(supportedEncodingRegexp);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(match)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20sourceMapStart%20=%20match%5B0%5D.length;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20encodedSource%20=%20location.substr(sourceMapStart);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20source%20=%20this._atob(encodedSource);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.sourceCache%5Blocation%5D%20=%20source;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(source);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reject(new%20Error('The%20encoding%20of%20the%20inline%20sourcemap%20is%20not%20supported'));%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20xhrPromise%20=%20this.ajax(location,%20%7B%20method:%20'get'%20%7D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20Cache%20the%20Promise%20to%20prevent%20duplicate%20in-flight%20requests%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.sourceCache%5Blocation%5D%20=%20xhrPromise;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20xhrPromise.then(resolve,%20reject);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D.bind(this));%0A%09%20%20%20%20%20%20%20%20%7D;%0A%09%0A%09%20%20%20%20%20%20%20%20/**%0A%09%20%20%20%20%20%20%20%20%20*%20Given%20a%20StackFrame,%20enhance%20function%20name%20and%20use%20source%20maps%20for%20a%0A%09%20%20%20%20%20%20%20%20%20*%20better%20StackFrame.%0A%09%20%20%20%20%20%20%20%20%20*%0A%09%20%20%20%20%20%20%20%20%20*%20@param%20%7BStackFrame%7D%20stackframe%20object%0A%09%20%20%20%20%20%20%20%20%20*%20@returns%20%7BPromise%7D%20that%20resolves%20with%20with%20source-mapped%20StackFrame%0A%09%20%20%20%20%20%20%20%20%20*/%0A%09%20%20%20%20%20%20%20%20this.pinpoint%20=%20function%20StackTraceGPS$$pinpoint(stackframe)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20new%20Promise(function%20(resolve,%20reject)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.getMappedLocation(stackframe).then(function%20(mappedStackFrame)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20function%20resolveMappedStackFrame()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(mappedStackFrame);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.findFunctionName(mappedStackFrame).then(resolve,%20resolveMappedStackFrame)%5B'catch'%5D(resolveMappedStackFrame);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D.bind(this),%20reject);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D.bind(this));%0A%09%20%20%20%20%20%20%20%20%7D;%0A%09%0A%09%20%20%20%20%20%20%20%20/**%0A%09%20%20%20%20%20%20%20%20%20*%20Given%20a%20StackFrame,%20guess%20function%20name%20from%20location%20information.%0A%09%20%20%20%20%20%20%20%20%20*%0A%09%20%20%20%20%20%20%20%20%20*%20@param%20%7BStackFrame%7D%20stackframe%0A%09%20%20%20%20%20%20%20%20%20*%20@returns%20%7BPromise%7D%20that%20resolves%20with%20enhanced%20StackFrame.%0A%09%20%20%20%20%20%20%20%20%20*/%0A%09%20%20%20%20%20%20%20%20this.findFunctionName%20=%20function%20StackTraceGPS$$findFunctionName(stackframe)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20new%20Promise(function%20(resolve,%20reject)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20_ensureStackFrameIsLegit(stackframe);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this._get(stackframe.fileName).then(function%20getSourceCallback(source)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20lineNumber%20=%20stackframe.lineNumber;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20columnNumber%20=%20stackframe.columnNumber;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20guessedFunctionName%20=%20_findFunctionName(source,%20lineNumber,%20columnNumber);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20Only%20replace%20functionName%20if%20we%20found%20something%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(guessedFunctionName)%20%7B%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20newStackFrame%20=%20new%20StackFrame(guessedFunctionName,%20stackframe.args,%20stackframe.fileName,%20lineNumber,%20columnNumber);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(newStackFrame);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(stackframe);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D,%20reject)%5B'catch'%5D(reject);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D.bind(this));%0A%09%20%20%20%20%20%20%20%20%7D;%0A%09%0A%09%20%20%20%20%20%20%20%20/**%0A%09%20%20%20%20%20%20%20%20%20*%20Given%20a%20StackFrame,%20seek%20source-mapped%20location%20and%20return%20new%20enhanced%20StackFrame.%0A%09%20%20%20%20%20%20%20%20%20*%0A%09%20%20%20%20%20%20%20%20%20*%20@param%20%7BStackFrame%7D%20stackframe%0A%09%20%20%20%20%20%20%20%20%20*%20@returns%20%7BPromise%7D%20that%20resolves%20with%20enhanced%20StackFrame.%0A%09%20%20%20%20%20%20%20%20%20*/%0A%09%20%20%20%20%20%20%20%20this.getMappedLocation%20=%20function%20StackTraceGPS$$getMappedLocation(stackframe)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20new%20Promise(function%20(resolve,%20reject)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20_ensureSupportedEnvironment();%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20_ensureStackFrameIsLegit(stackframe);%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20sourceCache%20=%20this.sourceCache;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20fileName%20=%20stackframe.fileName;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this._get(fileName).then(function%20(source)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20sourceMappingURL%20=%20_findSourceMappingURL(source);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20isDataUrl%20=%20sourceMappingURL.substr(0,%205)%20===%20'data:';%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20base%20=%20fileName.substring(0,%20fileName.lastIndexOf('/')%20+%201);%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(sourceMappingURL%5B0%5D%20!==%20'/'%20&&%20!isDataUrl%20&&%20!/%5Ehttps?:%5C/%5C/%7C%5E%5C/%5C//i.test(sourceMappingURL))%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20sourceMappingURL%20=%20base%20+%20sourceMappingURL;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this._get(sourceMappingURL).then(function%20(sourceMap)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(typeof%20sourceMap%20===%20'string')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20sourceMap%20=%20_parseJson(sourceMap.replace(/%5E%5C)%5C%5D%5C%7D'/,%20''));%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20map%20needs%20source%20map%20used%20in%20.get%20to%20be%20identical%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.sourceCache%5BsourceMappingURL%5D%20=%20sourceMap;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(typeof%20sourceMap.sourceRoot%20===%20'undefined')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20sourceMap.sourceRoot%20=%20base;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20_extractLocationInfoFromSourceMap(stackframe,%20sourceMap,%20sourceCache).then(function%20()%20%7B%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve.apply(this,%20arguments);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%5B'catch'%5D(function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(stackframe);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D.bind(this),%20reject)%5B'catch'%5D(reject);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D.bind(this),%20reject)%5B'catch'%5D(reject);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D.bind(this));%0A%09%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%7D;%0A%09%7D);%0A%0A/***/%20%7D,%0A%0A/***/%20579:%0A/***/%20function(module,%20exports,%20__webpack_require__)%20%7B%0A%0A%09'use%20strict';(function%20webpackUniversalModuleDefinition(root,factory)%7Bif(true)module.exports=factory();else%20if(typeof%20define==='function'&&define.amd)define(%5B%5D,factory);else%20if(typeof%20exports==='object')exports%5B%22sourceMap%22%5D=factory();else%20root%5B%22sourceMap%22%5D=factory();%7D)(undefined,function()%7Breturn(/******/function(modules)%7B//%20webpackBootstrap%0A%09/******///%20The%20module%20cache%0A%09/******/var%20installedModules=%7B%7D;/******///%20The%20require%20function%0A%09/******/function%20__webpack_require__(moduleId)%7B/******///%20Check%20if%20module%20is%20in%20cache%0A%09/******/if(installedModules%5BmoduleId%5D)/******/return%20installedModules%5BmoduleId%5D.exports;/******///%20Create%20a%20new%20module%20(and%20put%20it%20into%20the%20cache)%0A%09/******/var%20module=installedModules%5BmoduleId%5D=%7B/******/exports:%7B%7D,/******/id:moduleId,/******/loaded:false/******/%7D;/******///%20Execute%20the%20module%20function%0A%09/******/modules%5BmoduleId%5D.call(module.exports,module,module.exports,__webpack_require__);/******///%20Flag%20the%20module%20as%20loaded%0A%09/******/module.loaded=true;/******///%20Return%20the%20exports%20of%20the%20module%0A%09/******/return%20module.exports;/******/%7D/******///%20expose%20the%20modules%20object%20(__webpack_modules__)%0A%09/******/__webpack_require__.m=modules;/******///%20expose%20the%20module%20cache%0A%09/******/__webpack_require__.c=installedModules;/******///%20__webpack_public_path__%0A%09/******/__webpack_require__.p=%22%22;/******///%20Load%20entry%20module%20and%20return%20exports%0A%09/******/return%20__webpack_require__(0);/******/%7D(/************************************************************************//******/%5B/*%200%20*//***/function(module,exports,__webpack_require__)%7B/*%0A%09%09%20*%20Copyright%202009-2011%20Mozilla%20Foundation%20and%20contributors%0A%09%09%20*%20Licensed%20under%20the%20New%20BSD%20license.%20See%20LICENSE.txt%20or:%0A%09%09%20*%20http://opensource.org/licenses/BSD-3-Clause%0A%09%09%20*/exports.SourceMapGenerator=__webpack_require__(1).SourceMapGenerator;exports.SourceMapConsumer=__webpack_require__(7).SourceMapConsumer;exports.SourceNode=__webpack_require__(10).SourceNode;/***/%7D,/*%201%20*//***/function(module,exports,__webpack_require__)%7B/*%20-*-%20Mode:%20js;%20js-indent-level:%202;%20-*-%20*//*%0A%09%09%20*%20Copyright%202011%20Mozilla%20Foundation%20and%20contributors%0A%09%09%20*%20Licensed%20under%20the%20New%20BSD%20license.%20See%20LICENSE%20or:%0A%09%09%20*%20http://opensource.org/licenses/BSD-3-Clause%0A%09%09%20*/var%20base64VLQ=__webpack_require__(2);var%20util=__webpack_require__(4);var%20ArraySet=__webpack_require__(5).ArraySet;var%20MappingList=__webpack_require__(6).MappingList;/**%0A%09%09%20*%20An%20instance%20of%20the%20SourceMapGenerator%20represents%20a%20source%20map%20which%20is%0A%09%09%20*%20being%20built%20incrementally.%20You%20may%20pass%20an%20object%20with%20the%20following%0A%09%09%20*%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20file:%20The%20filename%20of%20the%20generated%20source.%0A%09%09%20*%20%20%20-%20sourceRoot:%20A%20root%20for%20all%20relative%20URLs%20in%20this%20source%20map.%0A%09%09%20*/function%20SourceMapGenerator(aArgs)%7Bif(!aArgs)%7BaArgs=%7B%7D;%7Dthis._file=util.getArg(aArgs,'file',null);this._sourceRoot=util.getArg(aArgs,'sourceRoot',null);this._skipValidation=util.getArg(aArgs,'skipValidation',false);this._sources=new%20ArraySet();this._names=new%20ArraySet();this._mappings=new%20MappingList();this._sourcesContents=null;%7DSourceMapGenerator.prototype._version=3;/**%0A%09%09%20*%20Creates%20a%20new%20SourceMapGenerator%20based%20on%20a%20SourceMapConsumer%0A%09%09%20*%0A%09%09%20*%20@param%20aSourceMapConsumer%20The%20SourceMap.%0A%09%09%20*/SourceMapGenerator.fromSourceMap=function%20SourceMapGenerator_fromSourceMap(aSourceMapConsumer)%7Bvar%20sourceRoot=aSourceMapConsumer.sourceRoot;var%20generator=new%20SourceMapGenerator(%7Bfile:aSourceMapConsumer.file,sourceRoot:sourceRoot%7D);aSourceMapConsumer.eachMapping(function(mapping)%7Bvar%20newMapping=%7Bgenerated:%7Bline:mapping.generatedLine,column:mapping.generatedColumn%7D%7D;if(mapping.source!=null)%7BnewMapping.source=mapping.source;if(sourceRoot!=null)%7BnewMapping.source=util.relative(sourceRoot,newMapping.source);%7DnewMapping.original=%7Bline:mapping.originalLine,column:mapping.originalColumn%7D;if(mapping.name!=null)%7BnewMapping.name=mapping.name;%7D%7Dgenerator.addMapping(newMapping);%7D);aSourceMapConsumer.sources.forEach(function(sourceFile)%7Bvar%20content=aSourceMapConsumer.sourceContentFor(sourceFile);if(content!=null)%7Bgenerator.setSourceContent(sourceFile,content);%7D%7D);return%20generator;%7D;/**%0A%09%09%20*%20Add%20a%20single%20mapping%20from%20original%20source%20line%20and%20column%20to%20the%20generated%0A%09%09%20*%20source's%20line%20and%20column%20for%20this%20source%20map%20being%20created.%20The%20mapping%0A%09%09%20*%20object%20should%20have%20the%20following%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20generated:%20An%20object%20with%20the%20generated%20line%20and%20column%20positions.%0A%09%09%20*%20%20%20-%20original:%20An%20object%20with%20the%20original%20line%20and%20column%20positions.%0A%09%09%20*%20%20%20-%20source:%20The%20original%20source%20file%20(relative%20to%20the%20sourceRoot).%0A%09%09%20*%20%20%20-%20name:%20An%20optional%20original%20token%20name%20for%20this%20mapping.%0A%09%09%20*/SourceMapGenerator.prototype.addMapping=function%20SourceMapGenerator_addMapping(aArgs)%7Bvar%20generated=util.getArg(aArgs,'generated');var%20original=util.getArg(aArgs,'original',null);var%20source=util.getArg(aArgs,'source',null);var%20name=util.getArg(aArgs,'name',null);if(!this._skipValidation)%7Bthis._validateMapping(generated,original,source,name);%7Dif(source!=null)%7Bsource=String(source);if(!this._sources.has(source))%7Bthis._sources.add(source);%7D%7Dif(name!=null)%7Bname=String(name);if(!this._names.has(name))%7Bthis._names.add(name);%7D%7Dthis._mappings.add(%7BgeneratedLine:generated.line,generatedColumn:generated.column,originalLine:original!=null&&original.line,originalColumn:original!=null&&original.column,source:source,name:name%7D);%7D;/**%0A%09%09%20*%20Set%20the%20source%20content%20for%20a%20source%20file.%0A%09%09%20*/SourceMapGenerator.prototype.setSourceContent=function%20SourceMapGenerator_setSourceContent(aSourceFile,aSourceContent)%7Bvar%20source=aSourceFile;if(this._sourceRoot!=null)%7Bsource=util.relative(this._sourceRoot,source);%7Dif(aSourceContent!=null)%7B//%20Add%20the%20source%20content%20to%20the%20_sourcesContents%20map.%0A%09//%20Create%20a%20new%20_sourcesContents%20map%20if%20the%20property%20is%20null.%0A%09if(!this._sourcesContents)%7Bthis._sourcesContents=Object.create(null);%7Dthis._sourcesContents%5Butil.toSetString(source)%5D=aSourceContent;%7Delse%20if(this._sourcesContents)%7B//%20Remove%20the%20source%20file%20from%20the%20_sourcesContents%20map.%0A%09//%20If%20the%20_sourcesContents%20map%20is%20empty,%20set%20the%20property%20to%20null.%0A%09delete%20this._sourcesContents%5Butil.toSetString(source)%5D;if(Object.keys(this._sourcesContents).length===0)%7Bthis._sourcesContents=null;%7D%7D%7D;/**%0A%09%09%20*%20Applies%20the%20mappings%20of%20a%20sub-source-map%20for%20a%20specific%20source%20file%20to%20the%0A%09%09%20*%20source%20map%20being%20generated.%20Each%20mapping%20to%20the%20supplied%20source%20file%20is%0A%09%09%20*%20rewritten%20using%20the%20supplied%20source%20map.%20Note:%20The%20resolution%20for%20the%0A%09%09%20*%20resulting%20mappings%20is%20the%20minimium%20of%20this%20map%20and%20the%20supplied%20map.%0A%09%09%20*%0A%09%09%20*%20@param%20aSourceMapConsumer%20The%20source%20map%20to%20be%20applied.%0A%09%09%20*%20@param%20aSourceFile%20Optional.%20The%20filename%20of%20the%20source%20file.%0A%09%09%20*%20%20%20%20%20%20%20%20If%20omitted,%20SourceMapConsumer's%20file%20property%20will%20be%20used.%0A%09%09%20*%20@param%20aSourceMapPath%20Optional.%20The%20dirname%20of%20the%20path%20to%20the%20source%20map%0A%09%09%20*%20%20%20%20%20%20%20%20to%20be%20applied.%20If%20relative,%20it%20is%20relative%20to%20the%20SourceMapConsumer.%0A%09%09%20*%20%20%20%20%20%20%20%20This%20parameter%20is%20needed%20when%20the%20two%20source%20maps%20aren't%20in%20the%20same%0A%09%09%20*%20%20%20%20%20%20%20%20directory,%20and%20the%20source%20map%20to%20be%20applied%20contains%20relative%20source%0A%09%09%20*%20%20%20%20%20%20%20%20paths.%20If%20so,%20those%20relative%20source%20paths%20need%20to%20be%20rewritten%0A%09%09%20*%20%20%20%20%20%20%20%20relative%20to%20the%20SourceMapGenerator.%0A%09%09%20*/SourceMapGenerator.prototype.applySourceMap=function%20SourceMapGenerator_applySourceMap(aSourceMapConsumer,aSourceFile,aSourceMapPath)%7Bvar%20sourceFile=aSourceFile;//%20If%20aSourceFile%20is%20omitted,%20we%20will%20use%20the%20file%20property%20of%20the%20SourceMap%0A%09if(aSourceFile==null)%7Bif(aSourceMapConsumer.file==null)%7Bthrow%20new%20Error('SourceMapGenerator.prototype.applySourceMap%20requires%20either%20an%20explicit%20source%20file,%20'+'or%20the%20source%20map%5C's%20%22file%22%20property.%20Both%20were%20omitted.');%7DsourceFile=aSourceMapConsumer.file;%7Dvar%20sourceRoot=this._sourceRoot;//%20Make%20%22sourceFile%22%20relative%20if%20an%20absolute%20Url%20is%20passed.%0A%09if(sourceRoot!=null)%7BsourceFile=util.relative(sourceRoot,sourceFile);%7D//%20Applying%20the%20SourceMap%20can%20add%20and%20remove%20items%20from%20the%20sources%20and%0A%09//%20the%20names%20array.%0A%09var%20newSources=new%20ArraySet();var%20newNames=new%20ArraySet();//%20Find%20mappings%20for%20the%20%22sourceFile%22%0A%09this._mappings.unsortedForEach(function(mapping)%7Bif(mapping.source===sourceFile&&mapping.originalLine!=null)%7B//%20Check%20if%20it%20can%20be%20mapped%20by%20the%20source%20map,%20then%20update%20the%20mapping.%0A%09var%20original=aSourceMapConsumer.originalPositionFor(%7Bline:mapping.originalLine,column:mapping.originalColumn%7D);if(original.source!=null)%7B//%20Copy%20mapping%0A%09mapping.source=original.source;if(aSourceMapPath!=null)%7Bmapping.source=util.join(aSourceMapPath,mapping.source);%7Dif(sourceRoot!=null)%7Bmapping.source=util.relative(sourceRoot,mapping.source);%7Dmapping.originalLine=original.line;mapping.originalColumn=original.column;if(original.name!=null)%7Bmapping.name=original.name;%7D%7D%7Dvar%20source=mapping.source;if(source!=null&&!newSources.has(source))%7BnewSources.add(source);%7Dvar%20name=mapping.name;if(name!=null&&!newNames.has(name))%7BnewNames.add(name);%7D%7D,this);this._sources=newSources;this._names=newNames;//%20Copy%20sourcesContents%20of%20applied%20map.%0A%09aSourceMapConsumer.sources.forEach(function(sourceFile)%7Bvar%20content=aSourceMapConsumer.sourceContentFor(sourceFile);if(content!=null)%7Bif(aSourceMapPath!=null)%7BsourceFile=util.join(aSourceMapPath,sourceFile);%7Dif(sourceRoot!=null)%7BsourceFile=util.relative(sourceRoot,sourceFile);%7Dthis.setSourceContent(sourceFile,content);%7D%7D,this);%7D;/**%0A%09%09%20*%20A%20mapping%20can%20have%20one%20of%20the%20three%20levels%20of%20data:%0A%09%09%20*%0A%09%09%20*%20%20%201.%20Just%20the%20generated%20position.%0A%09%09%20*%20%20%202.%20The%20Generated%20position,%20original%20position,%20and%20original%20source.%0A%09%09%20*%20%20%203.%20Generated%20and%20original%20position,%20original%20source,%20as%20well%20as%20a%20name%0A%09%09%20*%20%20%20%20%20%20token.%0A%09%09%20*%0A%09%09%20*%20To%20maintain%20consistency,%20we%20validate%20that%20any%20new%20mapping%20being%20added%20falls%0A%09%09%20*%20in%20to%20one%20of%20these%20categories.%0A%09%09%20*/SourceMapGenerator.prototype._validateMapping=function%20SourceMapGenerator_validateMapping(aGenerated,aOriginal,aSource,aName)%7Bif(aGenerated&&'line'in%20aGenerated&&'column'in%20aGenerated&&aGenerated.line%3E0&&aGenerated.column%3E=0&&!aOriginal&&!aSource&&!aName)%7B//%20Case%201.%0A%09return;%7Delse%20if(aGenerated&&'line'in%20aGenerated&&'column'in%20aGenerated&&aOriginal&&'line'in%20aOriginal&&'column'in%20aOriginal&&aGenerated.line%3E0&&aGenerated.column%3E=0&&aOriginal.line%3E0&&aOriginal.column%3E=0&&aSource)%7B//%20Cases%202%20and%203.%0A%09return;%7Delse%7Bthrow%20new%20Error('Invalid%20mapping:%20'+JSON.stringify(%7Bgenerated:aGenerated,source:aSource,original:aOriginal,name:aName%7D));%7D%7D;/**%0A%09%09%20*%20Serialize%20the%20accumulated%20mappings%20in%20to%20the%20stream%20of%20base%2064%20VLQs%0A%09%09%20*%20specified%20by%20the%20source%20map%20format.%0A%09%09%20*/SourceMapGenerator.prototype._serializeMappings=function%20SourceMapGenerator_serializeMappings()%7Bvar%20previousGeneratedColumn=0;var%20previousGeneratedLine=1;var%20previousOriginalColumn=0;var%20previousOriginalLine=0;var%20previousName=0;var%20previousSource=0;var%20result='';var%20next;var%20mapping;var%20nameIdx;var%20sourceIdx;var%20mappings=this._mappings.toArray();for(var%20i=0,len=mappings.length;i%3Clen;i++)%7Bmapping=mappings%5Bi%5D;next='';if(mapping.generatedLine!==previousGeneratedLine)%7BpreviousGeneratedColumn=0;while(mapping.generatedLine!==previousGeneratedLine)%7Bnext+=';';previousGeneratedLine++;%7D%7Delse%7Bif(i%3E0)%7Bif(!util.compareByGeneratedPositionsInflated(mapping,mappings%5Bi-1%5D))%7Bcontinue;%7Dnext+=',';%7D%7Dnext+=base64VLQ.encode(mapping.generatedColumn-previousGeneratedColumn);previousGeneratedColumn=mapping.generatedColumn;if(mapping.source!=null)%7BsourceIdx=this._sources.indexOf(mapping.source);next+=base64VLQ.encode(sourceIdx-previousSource);previousSource=sourceIdx;//%20lines%20are%20stored%200-based%20in%20SourceMap%20spec%20version%203%0A%09next+=base64VLQ.encode(mapping.originalLine-1-previousOriginalLine);previousOriginalLine=mapping.originalLine-1;next+=base64VLQ.encode(mapping.originalColumn-previousOriginalColumn);previousOriginalColumn=mapping.originalColumn;if(mapping.name!=null)%7BnameIdx=this._names.indexOf(mapping.name);next+=base64VLQ.encode(nameIdx-previousName);previousName=nameIdx;%7D%7Dresult+=next;%7Dreturn%20result;%7D;SourceMapGenerator.prototype._generateSourcesContent=function%20SourceMapGenerator_generateSourcesContent(aSources,aSourceRoot)%7Breturn%20aSources.map(function(source)%7Bif(!this._sourcesContents)%7Breturn%20null;%7Dif(aSourceRoot!=null)%7Bsource=util.relative(aSourceRoot,source);%7Dvar%20key=util.toSetString(source);return%20Object.prototype.hasOwnProperty.call(this._sourcesContents,key)?this._sourcesContents%5Bkey%5D:null;%7D,this);%7D;/**%0A%09%09%20*%20Externalize%20the%20source%20map.%0A%09%09%20*/SourceMapGenerator.prototype.toJSON=function%20SourceMapGenerator_toJSON()%7Bvar%20map=%7Bversion:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()%7D;if(this._file!=null)%7Bmap.file=this._file;%7Dif(this._sourceRoot!=null)%7Bmap.sourceRoot=this._sourceRoot;%7Dif(this._sourcesContents)%7Bmap.sourcesContent=this._generateSourcesContent(map.sources,map.sourceRoot);%7Dreturn%20map;%7D;/**%0A%09%09%20*%20Render%20the%20source%20map%20being%20generated%20to%20a%20string.%0A%09%09%20*/SourceMapGenerator.prototype.toString=function%20SourceMapGenerator_toString()%7Breturn%20JSON.stringify(this.toJSON());%7D;exports.SourceMapGenerator=SourceMapGenerator;/***/%7D,/*%202%20*//***/function(module,exports,__webpack_require__)%7B/*%20-*-%20Mode:%20js;%20js-indent-level:%202;%20-*-%20*//*%0A%09%09%20*%20Copyright%202011%20Mozilla%20Foundation%20and%20contributors%0A%09%09%20*%20Licensed%20under%20the%20New%20BSD%20license.%20See%20LICENSE%20or:%0A%09%09%20*%20http://opensource.org/licenses/BSD-3-Clause%0A%09%09%20*%0A%09%09%20*%20Based%20on%20the%20Base%2064%20VLQ%20implementation%20in%20Closure%20Compiler:%0A%09%09%20*%20https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java%0A%09%09%20*%0A%09%09%20*%20Copyright%202011%20The%20Closure%20Compiler%20Authors.%20All%20rights%20reserved.%0A%09%09%20*%20Redistribution%20and%20use%20in%20source%20and%20binary%20forms,%20with%20or%20without%0A%09%09%20*%20modification,%20are%20permitted%20provided%20that%20the%20following%20conditions%20are%0A%09%09%20*%20met:%0A%09%09%20*%0A%09%09%20*%20%20*%20Redistributions%20of%20source%20code%20must%20retain%20the%20above%20copyright%0A%09%09%20*%20%20%20%20notice,%20this%20list%20of%20conditions%20and%20the%20following%20disclaimer.%0A%09%09%20*%20%20*%20Redistributions%20in%20binary%20form%20must%20reproduce%20the%20above%0A%09%09%20*%20%20%20%20copyright%20notice,%20this%20list%20of%20conditions%20and%20the%20following%0A%09%09%20*%20%20%20%20disclaimer%20in%20the%20documentation%20and/or%20other%20materials%20provided%0A%09%09%20*%20%20%20%20with%20the%20distribution.%0A%09%09%20*%20%20*%20Neither%20the%20name%20of%20Google%20Inc.%20nor%20the%20names%20of%20its%0A%09%09%20*%20%20%20%20contributors%20may%20be%20used%20to%20endorse%20or%20promote%20products%20derived%0A%09%09%20*%20%20%20%20from%20this%20software%20without%20specific%20prior%20written%20permission.%0A%09%09%20*%0A%09%09%20*%20THIS%20SOFTWARE%20IS%20PROVIDED%20BY%20THE%20COPYRIGHT%20HOLDERS%20AND%20CONTRIBUTORS%0A%09%09%20*%20%22AS%20IS%22%20AND%20ANY%20EXPRESS%20OR%20IMPLIED%20WARRANTIES,%20INCLUDING,%20BUT%20NOT%0A%09%09%20*%20LIMITED%20TO,%20THE%20IMPLIED%20WARRANTIES%20OF%20MERCHANTABILITY%20AND%20FITNESS%20FOR%0A%09%09%20*%20A%20PARTICULAR%20PURPOSE%20ARE%20DISCLAIMED.%20IN%20NO%20EVENT%20SHALL%20THE%20COPYRIGHT%0A%09%09%20*%20OWNER%20OR%20CONTRIBUTORS%20BE%20LIABLE%20FOR%20ANY%20DIRECT,%20INDIRECT,%20INCIDENTAL,%0A%09%09%20*%20SPECIAL,%20EXEMPLARY,%20OR%20CONSEQUENTIAL%20DAMAGES%20(INCLUDING,%20BUT%20NOT%0A%09%09%20*%20LIMITED%20TO,%20PROCUREMENT%20OF%20SUBSTITUTE%20GOODS%20OR%20SERVICES;%20LOSS%20OF%20USE,%0A%09%09%20*%20DATA,%20OR%20PROFITS;%20OR%20BUSINESS%20INTERRUPTION)%20HOWEVER%20CAUSED%20AND%20ON%20ANY%0A%09%09%20*%20THEORY%20OF%20LIABILITY,%20WHETHER%20IN%20CONTRACT,%20STRICT%20LIABILITY,%20OR%20TORT%0A%09%09%20*%20(INCLUDING%20NEGLIGENCE%20OR%20OTHERWISE)%20ARISING%20IN%20ANY%20WAY%20OUT%20OF%20THE%20USE%0A%09%09%20*%20OF%20THIS%20SOFTWARE,%20EVEN%20IF%20ADVISED%20OF%20THE%20POSSIBILITY%20OF%20SUCH%20DAMAGE.%0A%09%09%20*/var%20base64=__webpack_require__(3);//%20A%20single%20base%2064%20digit%20can%20contain%206%20bits%20of%20data.%20For%20the%20base%2064%20variable%0A%09//%20length%20quantities%20we%20use%20in%20the%20source%20map%20spec,%20the%20first%20bit%20is%20the%20sign,%0A%09//%20the%20next%20four%20bits%20are%20the%20actual%20value,%20and%20the%206th%20bit%20is%20the%0A%09//%20continuation%20bit.%20The%20continuation%20bit%20tells%20us%20whether%20there%20are%20more%0A%09//%20digits%20in%20this%20value%20following%20this%20digit.%0A%09//%0A%09//%20%20%20Continuation%0A%09//%20%20%20%7C%20%20%20%20Sign%0A%09//%20%20%20%7C%20%20%20%20%7C%0A%09//%20%20%20V%20%20%20%20V%0A%09//%20%20%20101011%0A%09var%20VLQ_BASE_SHIFT=5;//%20binary:%20100000%0A%09var%20VLQ_BASE=1%3C%3CVLQ_BASE_SHIFT;//%20binary:%20011111%0A%09var%20VLQ_BASE_MASK=VLQ_BASE-1;//%20binary:%20100000%0A%09var%20VLQ_CONTINUATION_BIT=VLQ_BASE;/**%0A%09%09%20*%20Converts%20from%20a%20two-complement%20value%20to%20a%20value%20where%20the%20sign%20bit%20is%0A%09%09%20*%20placed%20in%20the%20least%20significant%20bit.%20%20For%20example,%20as%20decimals:%0A%09%09%20*%20%20%201%20becomes%202%20(10%20binary),%20-1%20becomes%203%20(11%20binary)%0A%09%09%20*%20%20%202%20becomes%204%20(100%20binary),%20-2%20becomes%205%20(101%20binary)%0A%09%09%20*/function%20toVLQSigned(aValue)%7Breturn%20aValue%3C0?(-aValue%3C%3C1)+1:(aValue%3C%3C1)+0;%7D/**%0A%09%09%20*%20Converts%20to%20a%20two-complement%20value%20from%20a%20value%20where%20the%20sign%20bit%20is%0A%09%09%20*%20placed%20in%20the%20least%20significant%20bit.%20%20For%20example,%20as%20decimals:%0A%09%09%20*%20%20%202%20(10%20binary)%20becomes%201,%203%20(11%20binary)%20becomes%20-1%0A%09%09%20*%20%20%204%20(100%20binary)%20becomes%202,%205%20(101%20binary)%20becomes%20-2%0A%09%09%20*/function%20fromVLQSigned(aValue)%7Bvar%20isNegative=(aValue&1)===1;var%20shifted=aValue%3E%3E1;return%20isNegative?-shifted:shifted;%7D/**%0A%09%09%20*%20Returns%20the%20base%2064%20VLQ%20encoded%20value.%0A%09%09%20*/exports.encode=function%20base64VLQ_encode(aValue)%7Bvar%20encoded=%22%22;var%20digit;var%20vlq=toVLQSigned(aValue);do%7Bdigit=vlq&VLQ_BASE_MASK;vlq%3E%3E%3E=VLQ_BASE_SHIFT;if(vlq%3E0)%7B//%20There%20are%20still%20more%20digits%20in%20this%20value,%20so%20we%20must%20make%20sure%20the%0A%09//%20continuation%20bit%20is%20marked.%0A%09digit%7C=VLQ_CONTINUATION_BIT;%7Dencoded+=base64.encode(digit);%7Dwhile(vlq%3E0);return%20encoded;%7D;/**%0A%09%09%20*%20Decodes%20the%20next%20base%2064%20VLQ%20value%20from%20the%20given%20string%20and%20returns%20the%0A%09%09%20*%20value%20and%20the%20rest%20of%20the%20string%20via%20the%20out%20parameter.%0A%09%09%20*/exports.decode=function%20base64VLQ_decode(aStr,aIndex,aOutParam)%7Bvar%20strLen=aStr.length;var%20result=0;var%20shift=0;var%20continuation,digit;do%7Bif(aIndex%3E=strLen)%7Bthrow%20new%20Error(%22Expected%20more%20digits%20in%20base%2064%20VLQ%20value.%22);%7Ddigit=base64.decode(aStr.charCodeAt(aIndex++));if(digit===-1)%7Bthrow%20new%20Error(%22Invalid%20base64%20digit:%20%22+aStr.charAt(aIndex-1));%7Dcontinuation=!!(digit&VLQ_CONTINUATION_BIT);digit&=VLQ_BASE_MASK;result=result+(digit%3C%3Cshift);shift+=VLQ_BASE_SHIFT;%7Dwhile(continuation);aOutParam.value=fromVLQSigned(result);aOutParam.rest=aIndex;%7D;/***/%7D,/*%203%20*//***/function(module,exports)%7B/*%20-*-%20Mode:%20js;%20js-indent-level:%202;%20-*-%20*//*%0A%09%09%20*%20Copyright%202011%20Mozilla%20Foundation%20and%20contributors%0A%09%09%20*%20Licensed%20under%20the%20New%20BSD%20license.%20See%20LICENSE%20or:%0A%09%09%20*%20http://opensource.org/licenses/BSD-3-Clause%0A%09%09%20*/var%20intToCharMap='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');/**%0A%09%09%20*%20Encode%20an%20integer%20in%20the%20range%20of%200%20to%2063%20to%20a%20single%20base%2064%20digit.%0A%09%09%20*/exports.encode=function(number)%7Bif(0%3C=number&&number%3CintToCharMap.length)%7Breturn%20intToCharMap%5Bnumber%5D;%7Dthrow%20new%20TypeError(%22Must%20be%20between%200%20and%2063:%20%22+number);%7D;/**%0A%09%09%20*%20Decode%20a%20single%20base%2064%20character%20code%20digit%20to%20an%20integer.%20Returns%20-1%20on%0A%09%09%20*%20failure.%0A%09%09%20*/exports.decode=function(charCode)%7Bvar%20bigA=65;//%20'A'%0A%09var%20bigZ=90;//%20'Z'%0A%09var%20littleA=97;//%20'a'%0A%09var%20littleZ=122;//%20'z'%0A%09var%20zero=48;//%20'0'%0A%09var%20nine=57;//%20'9'%0A%09var%20plus=43;//%20'+'%0A%09var%20slash=47;//%20'/'%0A%09var%20littleOffset=26;var%20numberOffset=52;//%200%20-%2025:%20ABCDEFGHIJKLMNOPQRSTUVWXYZ%0A%09if(bigA%3C=charCode&&charCode%3C=bigZ)%7Breturn%20charCode-bigA;%7D//%2026%20-%2051:%20abcdefghijklmnopqrstuvwxyz%0A%09if(littleA%3C=charCode&&charCode%3C=littleZ)%7Breturn%20charCode-littleA+littleOffset;%7D//%2052%20-%2061:%200123456789%0A%09if(zero%3C=charCode&&charCode%3C=nine)%7Breturn%20charCode-zero+numberOffset;%7D//%2062:%20+%0A%09if(charCode==plus)%7Breturn%2062;%7D//%2063:%20/%0A%09if(charCode==slash)%7Breturn%2063;%7D//%20Invalid%20base64%20digit.%0A%09return-1;%7D;/***/%7D,/*%204%20*//***/function(module,exports)%7B/*%20-*-%20Mode:%20js;%20js-indent-level:%202;%20-*-%20*//*%0A%09%09%20*%20Copyright%202011%20Mozilla%20Foundation%20and%20contributors%0A%09%09%20*%20Licensed%20under%20the%20New%20BSD%20license.%20See%20LICENSE%20or:%0A%09%09%20*%20http://opensource.org/licenses/BSD-3-Clause%0A%09%09%20*//**%0A%09%09%20*%20This%20is%20a%20helper%20function%20for%20getting%20values%20from%20parameter/options%0A%09%09%20*%20objects.%0A%09%09%20*%0A%09%09%20*%20@param%20args%20The%20object%20we%20are%20extracting%20values%20from%0A%09%09%20*%20@param%20name%20The%20name%20of%20the%20property%20we%20are%20getting.%0A%09%09%20*%20@param%20defaultValue%20An%20optional%20value%20to%20return%20if%20the%20property%20is%20missing%0A%09%09%20*%20from%20the%20object.%20If%20this%20is%20not%20specified%20and%20the%20property%20is%20missing,%20an%0A%09%09%20*%20error%20will%20be%20thrown.%0A%09%09%20*/function%20getArg(aArgs,aName,aDefaultValue)%7Bif(aName%20in%20aArgs)%7Breturn%20aArgs%5BaName%5D;%7Delse%20if(arguments.length===3)%7Breturn%20aDefaultValue;%7Delse%7Bthrow%20new%20Error('%22'+aName+'%22%20is%20a%20required%20argument.');%7D%7Dexports.getArg=getArg;var%20urlRegexp=/%5E(?:(%5B%5Cw+%5C-.%5D+):)?%5C/%5C/(?:(%5Cw+:%5Cw+)@)?(%5B%5Cw.%5D*)(?::(%5Cd+))?(%5CS*)$/;var%20dataUrlRegexp=/%5Edata:.+%5C,.+$/;function%20urlParse(aUrl)%7Bvar%20match=aUrl.match(urlRegexp);if(!match)%7Breturn%20null;%7Dreturn%7Bscheme:match%5B1%5D,auth:match%5B2%5D,host:match%5B3%5D,port:match%5B4%5D,path:match%5B5%5D%7D;%7Dexports.urlParse=urlParse;function%20urlGenerate(aParsedUrl)%7Bvar%20url='';if(aParsedUrl.scheme)%7Burl+=aParsedUrl.scheme+':';%7Durl+='//';if(aParsedUrl.auth)%7Burl+=aParsedUrl.auth+'@';%7Dif(aParsedUrl.host)%7Burl+=aParsedUrl.host;%7Dif(aParsedUrl.port)%7Burl+=%22:%22+aParsedUrl.port;%7Dif(aParsedUrl.path)%7Burl+=aParsedUrl.path;%7Dreturn%20url;%7Dexports.urlGenerate=urlGenerate;/**%0A%09%09%20*%20Normalizes%20a%20path,%20or%20the%20path%20portion%20of%20a%20URL:%0A%09%09%20*%0A%09%09%20*%20-%20Replaces%20consequtive%20slashes%20with%20one%20slash.%0A%09%09%20*%20-%20Removes%20unnecessary%20'.'%20parts.%0A%09%09%20*%20-%20Removes%20unnecessary%20'%3Cdir%3E/..'%20parts.%0A%09%09%20*%0A%09%09%20*%20Based%20on%20code%20in%20the%20Node.js%20'path'%20core%20module.%0A%09%09%20*%0A%09%09%20*%20@param%20aPath%20The%20path%20or%20url%20to%20normalize.%0A%09%09%20*/function%20normalize(aPath)%7Bvar%20path=aPath;var%20url=urlParse(aPath);if(url)%7Bif(!url.path)%7Breturn%20aPath;%7Dpath=url.path;%7Dvar%20isAbsolute=exports.isAbsolute(path);var%20parts=path.split(/%5C/+/);for(var%20part,up=0,i=parts.length-1;i%3E=0;i--)%7Bpart=parts%5Bi%5D;if(part==='.')%7Bparts.splice(i,1);%7Delse%20if(part==='..')%7Bup++;%7Delse%20if(up%3E0)%7Bif(part==='')%7B//%20The%20first%20part%20is%20blank%20if%20the%20path%20is%20absolute.%20Trying%20to%20go%0A%09//%20above%20the%20root%20is%20a%20no-op.%20Therefore%20we%20can%20remove%20all%20'..'%20parts%0A%09//%20directly%20after%20the%20root.%0A%09parts.splice(i+1,up);up=0;%7Delse%7Bparts.splice(i,2);up--;%7D%7D%7Dpath=parts.join('/');if(path==='')%7Bpath=isAbsolute?'/':'.';%7Dif(url)%7Burl.path=path;return%20urlGenerate(url);%7Dreturn%20path;%7Dexports.normalize=normalize;/**%0A%09%09%20*%20Joins%20two%20paths/URLs.%0A%09%09%20*%0A%09%09%20*%20@param%20aRoot%20The%20root%20path%20or%20URL.%0A%09%09%20*%20@param%20aPath%20The%20path%20or%20URL%20to%20be%20joined%20with%20the%20root.%0A%09%09%20*%0A%09%09%20*%20-%20If%20aPath%20is%20a%20URL%20or%20a%20data%20URI,%20aPath%20is%20returned,%20unless%20aPath%20is%20a%0A%09%09%20*%20%20%20scheme-relative%20URL:%20Then%20the%20scheme%20of%20aRoot,%20if%20any,%20is%20prepended%0A%09%09%20*%20%20%20first.%0A%09%09%20*%20-%20Otherwise%20aPath%20is%20a%20path.%20If%20aRoot%20is%20a%20URL,%20then%20its%20path%20portion%0A%09%09%20*%20%20%20is%20updated%20with%20the%20result%20and%20aRoot%20is%20returned.%20Otherwise%20the%20result%0A%09%09%20*%20%20%20is%20returned.%0A%09%09%20*%20%20%20-%20If%20aPath%20is%20absolute,%20the%20result%20is%20aPath.%0A%09%09%20*%20%20%20-%20Otherwise%20the%20two%20paths%20are%20joined%20with%20a%20slash.%0A%09%09%20*%20-%20Joining%20for%20example%20'http://'%20and%20'www.example.com'%20is%20also%20supported.%0A%09%09%20*/function%20join(aRoot,aPath)%7Bif(aRoot===%22%22)%7BaRoot=%22.%22;%7Dif(aPath===%22%22)%7BaPath=%22.%22;%7Dvar%20aPathUrl=urlParse(aPath);var%20aRootUrl=urlParse(aRoot);if(aRootUrl)%7BaRoot=aRootUrl.path%7C%7C'/';%7D//%20%60join(foo,%20'//www.example.org')%60%0A%09if(aPathUrl&&!aPathUrl.scheme)%7Bif(aRootUrl)%7BaPathUrl.scheme=aRootUrl.scheme;%7Dreturn%20urlGenerate(aPathUrl);%7Dif(aPathUrl%7C%7CaPath.match(dataUrlRegexp))%7Breturn%20aPath;%7D//%20%60join('http://',%20'www.example.com')%60%0A%09if(aRootUrl&&!aRootUrl.host&&!aRootUrl.path)%7BaRootUrl.host=aPath;return%20urlGenerate(aRootUrl);%7Dvar%20joined=aPath.charAt(0)==='/'?aPath:normalize(aRoot.replace(/%5C/+$/,'')+'/'+aPath);if(aRootUrl)%7BaRootUrl.path=joined;return%20urlGenerate(aRootUrl);%7Dreturn%20joined;%7Dexports.join=join;exports.isAbsolute=function(aPath)%7Breturn%20aPath.charAt(0)==='/'%7C%7C!!aPath.match(urlRegexp);%7D;/**%0A%09%09%20*%20Make%20a%20path%20relative%20to%20a%20URL%20or%20another%20path.%0A%09%09%20*%0A%09%09%20*%20@param%20aRoot%20The%20root%20path%20or%20URL.%0A%09%09%20*%20@param%20aPath%20The%20path%20or%20URL%20to%20be%20made%20relative%20to%20aRoot.%0A%09%09%20*/function%20relative(aRoot,aPath)%7Bif(aRoot===%22%22)%7BaRoot=%22.%22;%7DaRoot=aRoot.replace(/%5C/$/,'');//%20It%20is%20possible%20for%20the%20path%20to%20be%20above%20the%20root.%20In%20this%20case,%20simply%0A%09//%20checking%20whether%20the%20root%20is%20a%20prefix%20of%20the%20path%20won't%20work.%20Instead,%20we%0A%09//%20need%20to%20remove%20components%20from%20the%20root%20one%20by%20one,%20until%20either%20we%20find%0A%09//%20a%20prefix%20that%20fits,%20or%20we%20run%20out%20of%20components%20to%20remove.%0A%09var%20level=0;while(aPath.indexOf(aRoot+'/')!==0)%7Bvar%20index=aRoot.lastIndexOf(%22/%22);if(index%3C0)%7Breturn%20aPath;%7D//%20If%20the%20only%20part%20of%20the%20root%20that%20is%20left%20is%20the%20scheme%20(i.e.%20http://,%0A%09//%20file:///,%20etc.),%20one%20or%20more%20slashes%20(/),%20or%20simply%20nothing%20at%20all,%20we%0A%09//%20have%20exhausted%20all%20components,%20so%20the%20path%20is%20not%20relative%20to%20the%20root.%0A%09aRoot=aRoot.slice(0,index);if(aRoot.match(/%5E(%5B%5E%5C/%5D+:%5C/)?%5C/*$/))%7Breturn%20aPath;%7D++level;%7D//%20Make%20sure%20we%20add%20a%20%22../%22%20for%20each%20component%20we%20removed%20from%20the%20root.%0A%09return%20Array(level+1).join(%22../%22)+aPath.substr(aRoot.length+1);%7Dexports.relative=relative;var%20supportsNullProto=function()%7Bvar%20obj=Object.create(null);return!('__proto__'in%20obj);%7D();function%20identity(s)%7Breturn%20s;%7D/**%0A%09%09%20*%20Because%20behavior%20goes%20wacky%20when%20you%20set%20%60__proto__%60%20on%20objects,%20we%0A%09%09%20*%20have%20to%20prefix%20all%20the%20strings%20in%20our%20set%20with%20an%20arbitrary%20character.%0A%09%09%20*%0A%09%09%20*%20See%20https://github.com/mozilla/source-map/pull/31%20and%0A%09%09%20*%20https://github.com/mozilla/source-map/issues/30%0A%09%09%20*%0A%09%09%20*%20@param%20String%20aStr%0A%09%09%20*/function%20toSetString(aStr)%7Bif(isProtoString(aStr))%7Breturn'$'+aStr;%7Dreturn%20aStr;%7Dexports.toSetString=supportsNullProto?identity:toSetString;function%20fromSetString(aStr)%7Bif(isProtoString(aStr))%7Breturn%20aStr.slice(1);%7Dreturn%20aStr;%7Dexports.fromSetString=supportsNullProto?identity:fromSetString;function%20isProtoString(s)%7Bif(!s)%7Breturn%20false;%7Dvar%20length=s.length;if(length%3C9/*%20%22__proto__%22.length%20*/)%7Breturn%20false;%7Dif(s.charCodeAt(length-1)!==95/*%20'_'%20*/%7C%7Cs.charCodeAt(length-2)!==95/*%20'_'%20*/%7C%7Cs.charCodeAt(length-3)!==111/*%20'o'%20*/%7C%7Cs.charCodeAt(length-4)!==116/*%20't'%20*/%7C%7Cs.charCodeAt(length-5)!==111/*%20'o'%20*/%7C%7Cs.charCodeAt(length-6)!==114/*%20'r'%20*/%7C%7Cs.charCodeAt(length-7)!==112/*%20'p'%20*/%7C%7Cs.charCodeAt(length-8)!==95/*%20'_'%20*/%7C%7Cs.charCodeAt(length-9)!==95/*%20'_'%20*/)%7Breturn%20false;%7Dfor(var%20i=length-10;i%3E=0;i--)%7Bif(s.charCodeAt(i)!==36/*%20'$'%20*/)%7Breturn%20false;%7D%7Dreturn%20true;%7D/**%0A%09%09%20*%20Comparator%20between%20two%20mappings%20where%20the%20original%20positions%20are%20compared.%0A%09%09%20*%0A%09%09%20*%20Optionally%20pass%20in%20%60true%60%20as%20%60onlyCompareGenerated%60%20to%20consider%20two%0A%09%09%20*%20mappings%20with%20the%20same%20original%20source/line/column,%20but%20different%20generated%0A%09%09%20*%20line%20and%20column%20the%20same.%20Useful%20when%20searching%20for%20a%20mapping%20with%20a%0A%09%09%20*%20stubbed%20out%20mapping.%0A%09%09%20*/function%20compareByOriginalPositions(mappingA,mappingB,onlyCompareOriginal)%7Bvar%20cmp=mappingA.source-mappingB.source;if(cmp!==0)%7Breturn%20cmp;%7Dcmp=mappingA.originalLine-mappingB.originalLine;if(cmp!==0)%7Breturn%20cmp;%7Dcmp=mappingA.originalColumn-mappingB.originalColumn;if(cmp!==0%7C%7ConlyCompareOriginal)%7Breturn%20cmp;%7Dcmp=mappingA.generatedColumn-mappingB.generatedColumn;if(cmp!==0)%7Breturn%20cmp;%7Dcmp=mappingA.generatedLine-mappingB.generatedLine;if(cmp!==0)%7Breturn%20cmp;%7Dreturn%20mappingA.name-mappingB.name;%7Dexports.compareByOriginalPositions=compareByOriginalPositions;/**%0A%09%09%20*%20Comparator%20between%20two%20mappings%20with%20deflated%20source%20and%20name%20indices%20where%0A%09%09%20*%20the%20generated%20positions%20are%20compared.%0A%09%09%20*%0A%09%09%20*%20Optionally%20pass%20in%20%60true%60%20as%20%60onlyCompareGenerated%60%20to%20consider%20two%0A%09%09%20*%20mappings%20with%20the%20same%20generated%20line%20and%20column,%20but%20different%0A%09%09%20*%20source/name/original%20line%20and%20column%20the%20same.%20Useful%20when%20searching%20for%20a%0A%09%09%20*%20mapping%20with%20a%20stubbed%20out%20mapping.%0A%09%09%20*/function%20compareByGeneratedPositionsDeflated(mappingA,mappingB,onlyCompareGenerated)%7Bvar%20cmp=mappingA.generatedLine-mappingB.generatedLine;if(cmp!==0)%7Breturn%20cmp;%7Dcmp=mappingA.generatedColumn-mappingB.generatedColumn;if(cmp!==0%7C%7ConlyCompareGenerated)%7Breturn%20cmp;%7Dcmp=mappingA.source-mappingB.source;if(cmp!==0)%7Breturn%20cmp;%7Dcmp=mappingA.originalLine-mappingB.originalLine;if(cmp!==0)%7Breturn%20cmp;%7Dcmp=mappingA.originalColumn-mappingB.originalColumn;if(cmp!==0)%7Breturn%20cmp;%7Dreturn%20mappingA.name-mappingB.name;%7Dexports.compareByGeneratedPositionsDeflated=compareByGeneratedPositionsDeflated;function%20strcmp(aStr1,aStr2)%7Bif(aStr1===aStr2)%7Breturn%200;%7Dif(aStr1%3EaStr2)%7Breturn%201;%7Dreturn-1;%7D/**%0A%09%09%20*%20Comparator%20between%20two%20mappings%20with%20inflated%20source%20and%20name%20strings%20where%0A%09%09%20*%20the%20generated%20positions%20are%20compared.%0A%09%09%20*/function%20compareByGeneratedPositionsInflated(mappingA,mappingB)%7Bvar%20cmp=mappingA.generatedLine-mappingB.generatedLine;if(cmp!==0)%7Breturn%20cmp;%7Dcmp=mappingA.generatedColumn-mappingB.generatedColumn;if(cmp!==0)%7Breturn%20cmp;%7Dcmp=strcmp(mappingA.source,mappingB.source);if(cmp!==0)%7Breturn%20cmp;%7Dcmp=mappingA.originalLine-mappingB.originalLine;if(cmp!==0)%7Breturn%20cmp;%7Dcmp=mappingA.originalColumn-mappingB.originalColumn;if(cmp!==0)%7Breturn%20cmp;%7Dreturn%20strcmp(mappingA.name,mappingB.name);%7Dexports.compareByGeneratedPositionsInflated=compareByGeneratedPositionsInflated;/***/%7D,/*%205%20*//***/function(module,exports,__webpack_require__)%7B/*%20-*-%20Mode:%20js;%20js-indent-level:%202;%20-*-%20*//*%0A%09%09%20*%20Copyright%202011%20Mozilla%20Foundation%20and%20contributors%0A%09%09%20*%20Licensed%20under%20the%20New%20BSD%20license.%20See%20LICENSE%20or:%0A%09%09%20*%20http://opensource.org/licenses/BSD-3-Clause%0A%09%09%20*/var%20util=__webpack_require__(4);var%20has=Object.prototype.hasOwnProperty;/**%0A%09%09%20*%20A%20data%20structure%20which%20is%20a%20combination%20of%20an%20array%20and%20a%20set.%20Adding%20a%20new%0A%09%09%20*%20member%20is%20O(1),%20testing%20for%20membership%20is%20O(1),%20and%20finding%20the%20index%20of%20an%0A%09%09%20*%20element%20is%20O(1).%20Removing%20elements%20from%20the%20set%20is%20not%20supported.%20Only%0A%09%09%20*%20strings%20are%20supported%20for%20membership.%0A%09%09%20*/function%20ArraySet()%7Bthis._array=%5B%5D;this._set=Object.create(null);%7D/**%0A%09%09%20*%20Static%20method%20for%20creating%20ArraySet%20instances%20from%20an%20existing%20array.%0A%09%09%20*/ArraySet.fromArray=function%20ArraySet_fromArray(aArray,aAllowDuplicates)%7Bvar%20set=new%20ArraySet();for(var%20i=0,len=aArray.length;i%3Clen;i++)%7Bset.add(aArray%5Bi%5D,aAllowDuplicates);%7Dreturn%20set;%7D;/**%0A%09%09%20*%20Return%20how%20many%20unique%20items%20are%20in%20this%20ArraySet.%20If%20duplicates%20have%20been%0A%09%09%20*%20added,%20than%20those%20do%20not%20count%20towards%20the%20size.%0A%09%09%20*%0A%09%09%20*%20@returns%20Number%0A%09%09%20*/ArraySet.prototype.size=function%20ArraySet_size()%7Breturn%20Object.getOwnPropertyNames(this._set).length;%7D;/**%0A%09%09%20*%20Add%20the%20given%20string%20to%20this%20set.%0A%09%09%20*%0A%09%09%20*%20@param%20String%20aStr%0A%09%09%20*/ArraySet.prototype.add=function%20ArraySet_add(aStr,aAllowDuplicates)%7Bvar%20sStr=util.toSetString(aStr);var%20isDuplicate=has.call(this._set,sStr);var%20idx=this._array.length;if(!isDuplicate%7C%7CaAllowDuplicates)%7Bthis._array.push(aStr);%7Dif(!isDuplicate)%7Bthis._set%5BsStr%5D=idx;%7D%7D;/**%0A%09%09%20*%20Is%20the%20given%20string%20a%20member%20of%20this%20set?%0A%09%09%20*%0A%09%09%20*%20@param%20String%20aStr%0A%09%09%20*/ArraySet.prototype.has=function%20ArraySet_has(aStr)%7Bvar%20sStr=util.toSetString(aStr);return%20has.call(this._set,sStr);%7D;/**%0A%09%09%20*%20What%20is%20the%20index%20of%20the%20given%20string%20in%20the%20array?%0A%09%09%20*%0A%09%09%20*%20@param%20String%20aStr%0A%09%09%20*/ArraySet.prototype.indexOf=function%20ArraySet_indexOf(aStr)%7Bvar%20sStr=util.toSetString(aStr);if(has.call(this._set,sStr))%7Breturn%20this._set%5BsStr%5D;%7Dthrow%20new%20Error('%22'+aStr+'%22%20is%20not%20in%20the%20set.');%7D;/**%0A%09%09%20*%20What%20is%20the%20element%20at%20the%20given%20index?%0A%09%09%20*%0A%09%09%20*%20@param%20Number%20aIdx%0A%09%09%20*/ArraySet.prototype.at=function%20ArraySet_at(aIdx)%7Bif(aIdx%3E=0&&aIdx%3Cthis._array.length)%7Breturn%20this._array%5BaIdx%5D;%7Dthrow%20new%20Error('No%20element%20indexed%20by%20'+aIdx);%7D;/**%0A%09%09%20*%20Returns%20the%20array%20representation%20of%20this%20set%20(which%20has%20the%20proper%20indices%0A%09%09%20*%20indicated%20by%20indexOf).%20Note%20that%20this%20is%20a%20copy%20of%20the%20internal%20array%20used%0A%09%09%20*%20for%20storing%20the%20members%20so%20that%20no%20one%20can%20mess%20with%20internal%20state.%0A%09%09%20*/ArraySet.prototype.toArray=function%20ArraySet_toArray()%7Breturn%20this._array.slice();%7D;exports.ArraySet=ArraySet;/***/%7D,/*%206%20*//***/function(module,exports,__webpack_require__)%7B/*%20-*-%20Mode:%20js;%20js-indent-level:%202;%20-*-%20*//*%0A%09%09%20*%20Copyright%202014%20Mozilla%20Foundation%20and%20contributors%0A%09%09%20*%20Licensed%20under%20the%20New%20BSD%20license.%20See%20LICENSE%20or:%0A%09%09%20*%20http://opensource.org/licenses/BSD-3-Clause%0A%09%09%20*/var%20util=__webpack_require__(4);/**%0A%09%09%20*%20Determine%20whether%20mappingB%20is%20after%20mappingA%20with%20respect%20to%20generated%0A%09%09%20*%20position.%0A%09%09%20*/function%20generatedPositionAfter(mappingA,mappingB)%7B//%20Optimized%20for%20most%20common%20case%0A%09var%20lineA=mappingA.generatedLine;var%20lineB=mappingB.generatedLine;var%20columnA=mappingA.generatedColumn;var%20columnB=mappingB.generatedColumn;return%20lineB%3ElineA%7C%7ClineB==lineA&&columnB%3E=columnA%7C%7Cutil.compareByGeneratedPositionsInflated(mappingA,mappingB)%3C=0;%7D/**%0A%09%09%20*%20A%20data%20structure%20to%20provide%20a%20sorted%20view%20of%20accumulated%20mappings%20in%20a%0A%09%09%20*%20performance%20conscious%20manner.%20It%20trades%20a%20neglibable%20overhead%20in%20general%0A%09%09%20*%20case%20for%20a%20large%20speedup%20in%20case%20of%20mappings%20being%20added%20in%20order.%0A%09%09%20*/function%20MappingList()%7Bthis._array=%5B%5D;this._sorted=true;//%20Serves%20as%20infimum%0A%09this._last=%7BgeneratedLine:-1,generatedColumn:0%7D;%7D/**%0A%09%09%20*%20Iterate%20through%20internal%20items.%20This%20method%20takes%20the%20same%20arguments%20that%0A%09%09%20*%20%60Array.prototype.forEach%60%20takes.%0A%09%09%20*%0A%09%09%20*%20NOTE:%20The%20order%20of%20the%20mappings%20is%20NOT%20guaranteed.%0A%09%09%20*/MappingList.prototype.unsortedForEach=function%20MappingList_forEach(aCallback,aThisArg)%7Bthis._array.forEach(aCallback,aThisArg);%7D;/**%0A%09%09%20*%20Add%20the%20given%20source%20mapping.%0A%09%09%20*%0A%09%09%20*%20@param%20Object%20aMapping%0A%09%09%20*/MappingList.prototype.add=function%20MappingList_add(aMapping)%7Bif(generatedPositionAfter(this._last,aMapping))%7Bthis._last=aMapping;this._array.push(aMapping);%7Delse%7Bthis._sorted=false;this._array.push(aMapping);%7D%7D;/**%0A%09%09%20*%20Returns%20the%20flat,%20sorted%20array%20of%20mappings.%20The%20mappings%20are%20sorted%20by%0A%09%09%20*%20generated%20position.%0A%09%09%20*%0A%09%09%20*%20WARNING:%20This%20method%20returns%20internal%20data%20without%20copying,%20for%0A%09%09%20*%20performance.%20The%20return%20value%20must%20NOT%20be%20mutated,%20and%20should%20be%20treated%20as%0A%09%09%20*%20an%20immutable%20borrow.%20If%20you%20want%20to%20take%20ownership,%20you%20must%20make%20your%20own%0A%09%09%20*%20copy.%0A%09%09%20*/MappingList.prototype.toArray=function%20MappingList_toArray()%7Bif(!this._sorted)%7Bthis._array.sort(util.compareByGeneratedPositionsInflated);this._sorted=true;%7Dreturn%20this._array;%7D;exports.MappingList=MappingList;/***/%7D,/*%207%20*//***/function(module,exports,__webpack_require__)%7B/*%20-*-%20Mode:%20js;%20js-indent-level:%202;%20-*-%20*//*%0A%09%09%20*%20Copyright%202011%20Mozilla%20Foundation%20and%20contributors%0A%09%09%20*%20Licensed%20under%20the%20New%20BSD%20license.%20See%20LICENSE%20or:%0A%09%09%20*%20http://opensource.org/licenses/BSD-3-Clause%0A%09%09%20*/var%20util=__webpack_require__(4);var%20binarySearch=__webpack_require__(8);var%20ArraySet=__webpack_require__(5).ArraySet;var%20base64VLQ=__webpack_require__(2);var%20quickSort=__webpack_require__(9).quickSort;function%20SourceMapConsumer(aSourceMap)%7Bvar%20sourceMap=aSourceMap;if(typeof%20aSourceMap==='string')%7BsourceMap=JSON.parse(aSourceMap.replace(/%5E%5C)%5C%5D%5C%7D'/,''));%7Dreturn%20sourceMap.sections!=null?new%20IndexedSourceMapConsumer(sourceMap):new%20BasicSourceMapConsumer(sourceMap);%7DSourceMapConsumer.fromSourceMap=function(aSourceMap)%7Breturn%20BasicSourceMapConsumer.fromSourceMap(aSourceMap);%7D;/**%0A%09%09%20*%20The%20version%20of%20the%20source%20mapping%20spec%20that%20we%20are%20consuming.%0A%09%09%20*/SourceMapConsumer.prototype._version=3;//%20%60__generatedMappings%60%20and%20%60__originalMappings%60%20are%20arrays%20that%20hold%20the%0A%09//%20parsed%20mapping%20coordinates%20from%20the%20source%20map's%20%22mappings%22%20attribute.%20They%0A%09//%20are%20lazily%20instantiated,%20accessed%20via%20the%20%60_generatedMappings%60%20and%0A%09//%20%60_originalMappings%60%20getters%20respectively,%20and%20we%20only%20parse%20the%20mappings%0A%09//%20and%20create%20these%20arrays%20once%20queried%20for%20a%20source%20location.%20We%20jump%20through%0A%09//%20these%20hoops%20because%20there%20can%20be%20many%20thousands%20of%20mappings,%20and%20parsing%0A%09//%20them%20is%20expensive,%20so%20we%20only%20want%20to%20do%20it%20if%20we%20must.%0A%09//%0A%09//%20Each%20object%20in%20the%20arrays%20is%20of%20the%20form:%0A%09//%0A%09//%20%20%20%20%20%7B%0A%09//%20%20%20%20%20%20%20generatedLine:%20The%20line%20number%20in%20the%20generated%20code,%0A%09//%20%20%20%20%20%20%20generatedColumn:%20The%20column%20number%20in%20the%20generated%20code,%0A%09//%20%20%20%20%20%20%20source:%20The%20path%20to%20the%20original%20source%20file%20that%20generated%20this%0A%09//%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20chunk%20of%20code,%0A%09//%20%20%20%20%20%20%20originalLine:%20The%20line%20number%20in%20the%20original%20source%20that%0A%09//%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20corresponds%20to%20this%20chunk%20of%20generated%20code,%0A%09//%20%20%20%20%20%20%20originalColumn:%20The%20column%20number%20in%20the%20original%20source%20that%0A%09//%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20corresponds%20to%20this%20chunk%20of%20generated%20code,%0A%09//%20%20%20%20%20%20%20name:%20The%20name%20of%20the%20original%20symbol%20which%20generated%20this%20chunk%20of%0A%09//%20%20%20%20%20%20%20%20%20%20%20%20%20code.%0A%09//%20%20%20%20%20%7D%0A%09//%0A%09//%20All%20properties%20except%20for%20%60generatedLine%60%20and%20%60generatedColumn%60%20can%20be%0A%09//%20%60null%60.%0A%09//%0A%09//%20%60_generatedMappings%60%20is%20ordered%20by%20the%20generated%20positions.%0A%09//%0A%09//%20%60_originalMappings%60%20is%20ordered%20by%20the%20original%20positions.%0A%09SourceMapConsumer.prototype.__generatedMappings=null;Object.defineProperty(SourceMapConsumer.prototype,'_generatedMappings',%7Bget:function()%7Bif(!this.__generatedMappings)%7Bthis._parseMappings(this._mappings,this.sourceRoot);%7Dreturn%20this.__generatedMappings;%7D%7D);SourceMapConsumer.prototype.__originalMappings=null;Object.defineProperty(SourceMapConsumer.prototype,'_originalMappings',%7Bget:function()%7Bif(!this.__originalMappings)%7Bthis._parseMappings(this._mappings,this.sourceRoot);%7Dreturn%20this.__originalMappings;%7D%7D);SourceMapConsumer.prototype._charIsMappingSeparator=function%20SourceMapConsumer_charIsMappingSeparator(aStr,index)%7Bvar%20c=aStr.charAt(index);return%20c===%22;%22%7C%7Cc===%22,%22;%7D;/**%0A%09%09%20*%20Parse%20the%20mappings%20in%20a%20string%20in%20to%20a%20data%20structure%20which%20we%20can%20easily%0A%09%09%20*%20query%20(the%20ordered%20arrays%20in%20the%20%60this.__generatedMappings%60%20and%0A%09%09%20*%20%60this.__originalMappings%60%20properties).%0A%09%09%20*/SourceMapConsumer.prototype._parseMappings=function%20SourceMapConsumer_parseMappings(aStr,aSourceRoot)%7Bthrow%20new%20Error(%22Subclasses%20must%20implement%20_parseMappings%22);%7D;SourceMapConsumer.GENERATED_ORDER=1;SourceMapConsumer.ORIGINAL_ORDER=2;SourceMapConsumer.GREATEST_LOWER_BOUND=1;SourceMapConsumer.LEAST_UPPER_BOUND=2;/**%0A%09%09%20*%20Iterate%20over%20each%20mapping%20between%20an%20original%20source/line/column%20and%20a%0A%09%09%20*%20generated%20line/column%20in%20this%20source%20map.%0A%09%09%20*%0A%09%09%20*%20@param%20Function%20aCallback%0A%09%09%20*%20%20%20%20%20%20%20%20The%20function%20that%20is%20called%20with%20each%20mapping.%0A%09%09%20*%20@param%20Object%20aContext%0A%09%09%20*%20%20%20%20%20%20%20%20Optional.%20If%20specified,%20this%20object%20will%20be%20the%20value%20of%20%60this%60%20every%0A%09%09%20*%20%20%20%20%20%20%20%20time%20that%20%60aCallback%60%20is%20called.%0A%09%09%20*%20@param%20aOrder%0A%09%09%20*%20%20%20%20%20%20%20%20Either%20%60SourceMapConsumer.GENERATED_ORDER%60%20or%0A%09%09%20*%20%20%20%20%20%20%20%20%60SourceMapConsumer.ORIGINAL_ORDER%60.%20Specifies%20whether%20you%20want%20to%0A%09%09%20*%20%20%20%20%20%20%20%20iterate%20over%20the%20mappings%20sorted%20by%20the%20generated%20file's%20line/column%0A%09%09%20*%20%20%20%20%20%20%20%20order%20or%20the%20original's%20source/line/column%20order,%20respectively.%20Defaults%20to%0A%09%09%20*%20%20%20%20%20%20%20%20%60SourceMapConsumer.GENERATED_ORDER%60.%0A%09%09%20*/SourceMapConsumer.prototype.eachMapping=function%20SourceMapConsumer_eachMapping(aCallback,aContext,aOrder)%7Bvar%20context=aContext%7C%7Cnull;var%20order=aOrder%7C%7CSourceMapConsumer.GENERATED_ORDER;var%20mappings;switch(order)%7Bcase%20SourceMapConsumer.GENERATED_ORDER:mappings=this._generatedMappings;break;case%20SourceMapConsumer.ORIGINAL_ORDER:mappings=this._originalMappings;break;default:throw%20new%20Error(%22Unknown%20order%20of%20iteration.%22);%7Dvar%20sourceRoot=this.sourceRoot;mappings.map(function(mapping)%7Bvar%20source=mapping.source===null?null:this._sources.at(mapping.source);if(source!=null&&sourceRoot!=null)%7Bsource=util.join(sourceRoot,source);%7Dreturn%7Bsource:source,generatedLine:mapping.generatedLine,generatedColumn:mapping.generatedColumn,originalLine:mapping.originalLine,originalColumn:mapping.originalColumn,name:mapping.name===null?null:this._names.at(mapping.name)%7D;%7D,this).forEach(aCallback,context);%7D;/**%0A%09%09%20*%20Returns%20all%20generated%20line%20and%20column%20information%20for%20the%20original%20source,%0A%09%09%20*%20line,%20and%20column%20provided.%20If%20no%20column%20is%20provided,%20returns%20all%20mappings%0A%09%09%20*%20corresponding%20to%20a%20either%20the%20line%20we%20are%20searching%20for%20or%20the%20next%0A%09%09%20*%20closest%20line%20that%20has%20any%20mappings.%20Otherwise,%20returns%20all%20mappings%0A%09%09%20*%20corresponding%20to%20the%20given%20line%20and%20either%20the%20column%20we%20are%20searching%20for%0A%09%09%20*%20or%20the%20next%20closest%20column%20that%20has%20any%20offsets.%0A%09%09%20*%0A%09%09%20*%20The%20only%20argument%20is%20an%20object%20with%20the%20following%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20source:%20The%20filename%20of%20the%20original%20source.%0A%09%09%20*%20%20%20-%20line:%20The%20line%20number%20in%20the%20original%20source.%0A%09%09%20*%20%20%20-%20column:%20Optional.%20the%20column%20number%20in%20the%20original%20source.%0A%09%09%20*%0A%09%09%20*%20and%20an%20array%20of%20objects%20is%20returned,%20each%20with%20the%20following%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20line:%20The%20line%20number%20in%20the%20generated%20source,%20or%20null.%0A%09%09%20*%20%20%20-%20column:%20The%20column%20number%20in%20the%20generated%20source,%20or%20null.%0A%09%09%20*/SourceMapConsumer.prototype.allGeneratedPositionsFor=function%20SourceMapConsumer_allGeneratedPositionsFor(aArgs)%7Bvar%20line=util.getArg(aArgs,'line');//%20When%20there%20is%20no%20exact%20match,%20BasicSourceMapConsumer.prototype._findMapping%0A%09//%20returns%20the%20index%20of%20the%20closest%20mapping%20less%20than%20the%20needle.%20By%0A%09//%20setting%20needle.originalColumn%20to%200,%20we%20thus%20find%20the%20last%20mapping%20for%0A%09//%20the%20given%20line,%20provided%20such%20a%20mapping%20exists.%0A%09var%20needle=%7Bsource:util.getArg(aArgs,'source'),originalLine:line,originalColumn:util.getArg(aArgs,'column',0)%7D;if(this.sourceRoot!=null)%7Bneedle.source=util.relative(this.sourceRoot,needle.source);%7Dif(!this._sources.has(needle.source))%7Breturn%5B%5D;%7Dneedle.source=this._sources.indexOf(needle.source);var%20mappings=%5B%5D;var%20index=this._findMapping(needle,this._originalMappings,%22originalLine%22,%22originalColumn%22,util.compareByOriginalPositions,binarySearch.LEAST_UPPER_BOUND);if(index%3E=0)%7Bvar%20mapping=this._originalMappings%5Bindex%5D;if(aArgs.column===undefined)%7Bvar%20originalLine=mapping.originalLine;//%20Iterate%20until%20either%20we%20run%20out%20of%20mappings,%20or%20we%20run%20into%0A%09//%20a%20mapping%20for%20a%20different%20line%20than%20the%20one%20we%20found.%20Since%0A%09//%20mappings%20are%20sorted,%20this%20is%20guaranteed%20to%20find%20all%20mappings%20for%0A%09//%20the%20line%20we%20found.%0A%09while(mapping&&mapping.originalLine===originalLine)%7Bmappings.push(%7Bline:util.getArg(mapping,'generatedLine',null),column:util.getArg(mapping,'generatedColumn',null),lastColumn:util.getArg(mapping,'lastGeneratedColumn',null)%7D);mapping=this._originalMappings%5B++index%5D;%7D%7Delse%7Bvar%20originalColumn=mapping.originalColumn;//%20Iterate%20until%20either%20we%20run%20out%20of%20mappings,%20or%20we%20run%20into%0A%09//%20a%20mapping%20for%20a%20different%20line%20than%20the%20one%20we%20were%20searching%20for.%0A%09//%20Since%20mappings%20are%20sorted,%20this%20is%20guaranteed%20to%20find%20all%20mappings%20for%0A%09//%20the%20line%20we%20are%20searching%20for.%0A%09while(mapping&&mapping.originalLine===line&&mapping.originalColumn==originalColumn)%7Bmappings.push(%7Bline:util.getArg(mapping,'generatedLine',null),column:util.getArg(mapping,'generatedColumn',null),lastColumn:util.getArg(mapping,'lastGeneratedColumn',null)%7D);mapping=this._originalMappings%5B++index%5D;%7D%7D%7Dreturn%20mappings;%7D;exports.SourceMapConsumer=SourceMapConsumer;/**%0A%09%09%20*%20A%20BasicSourceMapConsumer%20instance%20represents%20a%20parsed%20source%20map%20which%20we%20can%0A%09%09%20*%20query%20for%20information%20about%20the%20original%20file%20positions%20by%20giving%20it%20a%20file%0A%09%09%20*%20position%20in%20the%20generated%20source.%0A%09%09%20*%0A%09%09%20*%20The%20only%20parameter%20is%20the%20raw%20source%20map%20(either%20as%20a%20JSON%20string,%20or%0A%09%09%20*%20already%20parsed%20to%20an%20object).%20According%20to%20the%20spec,%20source%20maps%20have%20the%0A%09%09%20*%20following%20attributes:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20version:%20Which%20version%20of%20the%20source%20map%20spec%20this%20map%20is%20following.%0A%09%09%20*%20%20%20-%20sources:%20An%20array%20of%20URLs%20to%20the%20original%20source%20files.%0A%09%09%20*%20%20%20-%20names:%20An%20array%20of%20identifiers%20which%20can%20be%20referrenced%20by%20individual%20mappings.%0A%09%09%20*%20%20%20-%20sourceRoot:%20Optional.%20The%20URL%20root%20from%20which%20all%20sources%20are%20relative.%0A%09%09%20*%20%20%20-%20sourcesContent:%20Optional.%20An%20array%20of%20contents%20of%20the%20original%20source%20files.%0A%09%09%20*%20%20%20-%20mappings:%20A%20string%20of%20base64%20VLQs%20which%20contain%20the%20actual%20mappings.%0A%09%09%20*%20%20%20-%20file:%20Optional.%20The%20generated%20file%20this%20source%20map%20is%20associated%20with.%0A%09%09%20*%0A%09%09%20*%20Here%20is%20an%20example%20source%20map,%20taken%20from%20the%20source%20map%20spec%5B0%5D:%0A%09%09%20*%0A%09%09%20*%20%20%20%20%20%7B%0A%09%09%20*%20%20%20%20%20%20%20version%20:%203,%0A%09%09%20*%20%20%20%20%20%20%20file:%20%22out.js%22,%0A%09%09%20*%20%20%20%20%20%20%20sourceRoot%20:%20%22%22,%0A%09%09%20*%20%20%20%20%20%20%20sources:%20%5B%22foo.js%22,%20%22bar.js%22%5D,%0A%09%09%20*%20%20%20%20%20%20%20names:%20%5B%22src%22,%20%22maps%22,%20%22are%22,%20%22fun%22%5D,%0A%09%09%20*%20%20%20%20%20%20%20mappings:%20%22AA,AB;;ABCDE;%22%0A%09%09%20*%20%20%20%20%20%7D%0A%09%09%20*%0A%09%09%20*%20%5B0%5D:%20https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#%0A%09%09%20*/function%20BasicSourceMapConsumer(aSourceMap)%7Bvar%20sourceMap=aSourceMap;if(typeof%20aSourceMap==='string')%7BsourceMap=JSON.parse(aSourceMap.replace(/%5E%5C)%5C%5D%5C%7D'/,''));%7Dvar%20version=util.getArg(sourceMap,'version');var%20sources=util.getArg(sourceMap,'sources');//%20Sass%203.3%20leaves%20out%20the%20'names'%20array,%20so%20we%20deviate%20from%20the%20spec%20(which%0A%09//%20requires%20the%20array)%20to%20play%20nice%20here.%0A%09var%20names=util.getArg(sourceMap,'names',%5B%5D);var%20sourceRoot=util.getArg(sourceMap,'sourceRoot',null);var%20sourcesContent=util.getArg(sourceMap,'sourcesContent',null);var%20mappings=util.getArg(sourceMap,'mappings');var%20file=util.getArg(sourceMap,'file',null);//%20Once%20again,%20Sass%20deviates%20from%20the%20spec%20and%20supplies%20the%20version%20as%20a%0A%09//%20string%20rather%20than%20a%20number,%20so%20we%20use%20loose%20equality%20checking%20here.%0A%09if(version!=this._version)%7Bthrow%20new%20Error('Unsupported%20version:%20'+version);%7Dsources=sources.map(String)//%20Some%20source%20maps%20produce%20relative%20source%20paths%20like%20%22./foo.js%22%20instead%20of%0A%09//%20%22foo.js%22.%20%20Normalize%20these%20first%20so%20that%20future%20comparisons%20will%20succeed.%0A%09//%20See%20bugzil.la/1090768.%0A%09.map(util.normalize)//%20Always%20ensure%20that%20absolute%20sources%20are%20internally%20stored%20relative%20to%0A%09//%20the%20source%20root,%20if%20the%20source%20root%20is%20absolute.%20Not%20doing%20this%20would%0A%09//%20be%20particularly%20problematic%20when%20the%20source%20root%20is%20a%20prefix%20of%20the%0A%09//%20source%20(valid,%20but%20why??).%20See%20github%20issue%20#199%20and%20bugzil.la/1188982.%0A%09.map(function(source)%7Breturn%20sourceRoot&&util.isAbsolute(sourceRoot)&&util.isAbsolute(source)?util.relative(sourceRoot,source):source;%7D);//%20Pass%20%60true%60%20below%20to%20allow%20duplicate%20names%20and%20sources.%20While%20source%20maps%0A%09//%20are%20intended%20to%20be%20compressed%20and%20deduplicated,%20the%20TypeScript%20compiler%0A%09//%20sometimes%20generates%20source%20maps%20with%20duplicates%20in%20them.%20See%20Github%20issue%0A%09//%20#72%20and%20bugzil.la/889492.%0A%09this._names=ArraySet.fromArray(names.map(String),true);this._sources=ArraySet.fromArray(sources,true);this.sourceRoot=sourceRoot;this.sourcesContent=sourcesContent;this._mappings=mappings;this.file=file;%7DBasicSourceMapConsumer.prototype=Object.create(SourceMapConsumer.prototype);BasicSourceMapConsumer.prototype.consumer=SourceMapConsumer;/**%0A%09%09%20*%20Create%20a%20BasicSourceMapConsumer%20from%20a%20SourceMapGenerator.%0A%09%09%20*%0A%09%09%20*%20@param%20SourceMapGenerator%20aSourceMap%0A%09%09%20*%20%20%20%20%20%20%20%20The%20source%20map%20that%20will%20be%20consumed.%0A%09%09%20*%20@returns%20BasicSourceMapConsumer%0A%09%09%20*/BasicSourceMapConsumer.fromSourceMap=function%20SourceMapConsumer_fromSourceMap(aSourceMap)%7Bvar%20smc=Object.create(BasicSourceMapConsumer.prototype);var%20names=smc._names=ArraySet.fromArray(aSourceMap._names.toArray(),true);var%20sources=smc._sources=ArraySet.fromArray(aSourceMap._sources.toArray(),true);smc.sourceRoot=aSourceMap._sourceRoot;smc.sourcesContent=aSourceMap._generateSourcesContent(smc._sources.toArray(),smc.sourceRoot);smc.file=aSourceMap._file;//%20Because%20we%20are%20modifying%20the%20entries%20(by%20converting%20string%20sources%20and%0A%09//%20names%20to%20indices%20into%20the%20sources%20and%20names%20ArraySets),%20we%20have%20to%20make%0A%09//%20a%20copy%20of%20the%20entry%20or%20else%20bad%20things%20happen.%20Shared%20mutable%20state%0A%09//%20strikes%20again!%20See%20github%20issue%20#191.%0A%09var%20generatedMappings=aSourceMap._mappings.toArray().slice();var%20destGeneratedMappings=smc.__generatedMappings=%5B%5D;var%20destOriginalMappings=smc.__originalMappings=%5B%5D;for(var%20i=0,length=generatedMappings.length;i%3Clength;i++)%7Bvar%20srcMapping=generatedMappings%5Bi%5D;var%20destMapping=new%20Mapping();destMapping.generatedLine=srcMapping.generatedLine;destMapping.generatedColumn=srcMapping.generatedColumn;if(srcMapping.source)%7BdestMapping.source=sources.indexOf(srcMapping.source);destMapping.originalLine=srcMapping.originalLine;destMapping.originalColumn=srcMapping.originalColumn;if(srcMapping.name)%7BdestMapping.name=names.indexOf(srcMapping.name);%7DdestOriginalMappings.push(destMapping);%7DdestGeneratedMappings.push(destMapping);%7DquickSort(smc.__originalMappings,util.compareByOriginalPositions);return%20smc;%7D;/**%0A%09%09%20*%20The%20version%20of%20the%20source%20mapping%20spec%20that%20we%20are%20consuming.%0A%09%09%20*/BasicSourceMapConsumer.prototype._version=3;/**%0A%09%09%20*%20The%20list%20of%20original%20sources.%0A%09%09%20*/Object.defineProperty(BasicSourceMapConsumer.prototype,'sources',%7Bget:function()%7Breturn%20this._sources.toArray().map(function(s)%7Breturn%20this.sourceRoot!=null?util.join(this.sourceRoot,s):s;%7D,this);%7D%7D);/**%0A%09%09%20*%20Provide%20the%20JIT%20with%20a%20nice%20shape%20/%20hidden%20class.%0A%09%09%20*/function%20Mapping()%7Bthis.generatedLine=0;this.generatedColumn=0;this.source=null;this.originalLine=null;this.originalColumn=null;this.name=null;%7D/**%0A%09%09%20*%20Parse%20the%20mappings%20in%20a%20string%20in%20to%20a%20data%20structure%20which%20we%20can%20easily%0A%09%09%20*%20query%20(the%20ordered%20arrays%20in%20the%20%60this.__generatedMappings%60%20and%0A%09%09%20*%20%60this.__originalMappings%60%20properties).%0A%09%09%20*/BasicSourceMapConsumer.prototype._parseMappings=function%20SourceMapConsumer_parseMappings(aStr,aSourceRoot)%7Bvar%20generatedLine=1;var%20previousGeneratedColumn=0;var%20previousOriginalLine=0;var%20previousOriginalColumn=0;var%20previousSource=0;var%20previousName=0;var%20length=aStr.length;var%20index=0;var%20cachedSegments=%7B%7D;var%20temp=%7B%7D;var%20originalMappings=%5B%5D;var%20generatedMappings=%5B%5D;var%20mapping,str,segment,end,value;while(index%3Clength)%7Bif(aStr.charAt(index)===';')%7BgeneratedLine++;index++;previousGeneratedColumn=0;%7Delse%20if(aStr.charAt(index)===',')%7Bindex++;%7Delse%7Bmapping=new%20Mapping();mapping.generatedLine=generatedLine;//%20Because%20each%20offset%20is%20encoded%20relative%20to%20the%20previous%20one,%0A%09//%20many%20segments%20often%20have%20the%20same%20encoding.%20We%20can%20exploit%20this%0A%09//%20fact%20by%20caching%20the%20parsed%20variable%20length%20fields%20of%20each%20segment,%0A%09//%20allowing%20us%20to%20avoid%20a%20second%20parse%20if%20we%20encounter%20the%20same%0A%09//%20segment%20again.%0A%09for(end=index;end%3Clength;end++)%7Bif(this._charIsMappingSeparator(aStr,end))%7Bbreak;%7D%7Dstr=aStr.slice(index,end);segment=cachedSegments%5Bstr%5D;if(segment)%7Bindex+=str.length;%7Delse%7Bsegment=%5B%5D;while(index%3Cend)%7Bbase64VLQ.decode(aStr,index,temp);value=temp.value;index=temp.rest;segment.push(value);%7Dif(segment.length===2)%7Bthrow%20new%20Error('Found%20a%20source,%20but%20no%20line%20and%20column');%7Dif(segment.length===3)%7Bthrow%20new%20Error('Found%20a%20source%20and%20line,%20but%20no%20column');%7DcachedSegments%5Bstr%5D=segment;%7D//%20Generated%20column.%0A%09mapping.generatedColumn=previousGeneratedColumn+segment%5B0%5D;previousGeneratedColumn=mapping.generatedColumn;if(segment.length%3E1)%7B//%20Original%20source.%0A%09mapping.source=previousSource+segment%5B1%5D;previousSource+=segment%5B1%5D;//%20Original%20line.%0A%09mapping.originalLine=previousOriginalLine+segment%5B2%5D;previousOriginalLine=mapping.originalLine;//%20Lines%20are%20stored%200-based%0A%09mapping.originalLine+=1;//%20Original%20column.%0A%09mapping.originalColumn=previousOriginalColumn+segment%5B3%5D;previousOriginalColumn=mapping.originalColumn;if(segment.length%3E4)%7B//%20Original%20name.%0A%09mapping.name=previousName+segment%5B4%5D;previousName+=segment%5B4%5D;%7D%7DgeneratedMappings.push(mapping);if(typeof%20mapping.originalLine==='number')%7BoriginalMappings.push(mapping);%7D%7D%7DquickSort(generatedMappings,util.compareByGeneratedPositionsDeflated);this.__generatedMappings=generatedMappings;quickSort(originalMappings,util.compareByOriginalPositions);this.__originalMappings=originalMappings;%7D;/**%0A%09%09%20*%20Find%20the%20mapping%20that%20best%20matches%20the%20hypothetical%20%22needle%22%20mapping%20that%0A%09%09%20*%20we%20are%20searching%20for%20in%20the%20given%20%22haystack%22%20of%20mappings.%0A%09%09%20*/BasicSourceMapConsumer.prototype._findMapping=function%20SourceMapConsumer_findMapping(aNeedle,aMappings,aLineName,aColumnName,aComparator,aBias)%7B//%20To%20return%20the%20position%20we%20are%20searching%20for,%20we%20must%20first%20find%20the%0A%09//%20mapping%20for%20the%20given%20position%20and%20then%20return%20the%20opposite%20position%20it%0A%09//%20points%20to.%20Because%20the%20mappings%20are%20sorted,%20we%20can%20use%20binary%20search%20to%0A%09//%20find%20the%20best%20mapping.%0A%09if(aNeedle%5BaLineName%5D%3C=0)%7Bthrow%20new%20TypeError('Line%20must%20be%20greater%20than%20or%20equal%20to%201,%20got%20'+aNeedle%5BaLineName%5D);%7Dif(aNeedle%5BaColumnName%5D%3C0)%7Bthrow%20new%20TypeError('Column%20must%20be%20greater%20than%20or%20equal%20to%200,%20got%20'+aNeedle%5BaColumnName%5D);%7Dreturn%20binarySearch.search(aNeedle,aMappings,aComparator,aBias);%7D;/**%0A%09%09%20*%20Compute%20the%20last%20column%20for%20each%20generated%20mapping.%20The%20last%20column%20is%0A%09%09%20*%20inclusive.%0A%09%09%20*/BasicSourceMapConsumer.prototype.computeColumnSpans=function%20SourceMapConsumer_computeColumnSpans()%7Bfor(var%20index=0;index%3Cthis._generatedMappings.length;++index)%7Bvar%20mapping=this._generatedMappings%5Bindex%5D;//%20Mappings%20do%20not%20contain%20a%20field%20for%20the%20last%20generated%20columnt.%20We%0A%09//%20can%20come%20up%20with%20an%20optimistic%20estimate,%20however,%20by%20assuming%20that%0A%09//%20mappings%20are%20contiguous%20(i.e.%20given%20two%20consecutive%20mappings,%20the%0A%09//%20first%20mapping%20ends%20where%20the%20second%20one%20starts).%0A%09if(index+1%3Cthis._generatedMappings.length)%7Bvar%20nextMapping=this._generatedMappings%5Bindex+1%5D;if(mapping.generatedLine===nextMapping.generatedLine)%7Bmapping.lastGeneratedColumn=nextMapping.generatedColumn-1;continue;%7D%7D//%20The%20last%20mapping%20for%20each%20line%20spans%20the%20entire%20line.%0A%09mapping.lastGeneratedColumn=Infinity;%7D%7D;/**%0A%09%09%20*%20Returns%20the%20original%20source,%20line,%20and%20column%20information%20for%20the%20generated%0A%09%09%20*%20source's%20line%20and%20column%20positions%20provided.%20The%20only%20argument%20is%20an%20object%0A%09%09%20*%20with%20the%20following%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20line:%20The%20line%20number%20in%20the%20generated%20source.%0A%09%09%20*%20%20%20-%20column:%20The%20column%20number%20in%20the%20generated%20source.%0A%09%09%20*%20%20%20-%20bias:%20Either%20'SourceMapConsumer.GREATEST_LOWER_BOUND'%20or%0A%09%09%20*%20%20%20%20%20'SourceMapConsumer.LEAST_UPPER_BOUND'.%20Specifies%20whether%20to%20return%20the%0A%09%09%20*%20%20%20%20%20closest%20element%20that%20is%20smaller%20than%20or%20greater%20than%20the%20one%20we%20are%0A%09%09%20*%20%20%20%20%20searching%20for,%20respectively,%20if%20the%20exact%20element%20cannot%20be%20found.%0A%09%09%20*%20%20%20%20%20Defaults%20to%20'SourceMapConsumer.GREATEST_LOWER_BOUND'.%0A%09%09%20*%0A%09%09%20*%20and%20an%20object%20is%20returned%20with%20the%20following%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20source:%20The%20original%20source%20file,%20or%20null.%0A%09%09%20*%20%20%20-%20line:%20The%20line%20number%20in%20the%20original%20source,%20or%20null.%0A%09%09%20*%20%20%20-%20column:%20The%20column%20number%20in%20the%20original%20source,%20or%20null.%0A%09%09%20*%20%20%20-%20name:%20The%20original%20identifier,%20or%20null.%0A%09%09%20*/BasicSourceMapConsumer.prototype.originalPositionFor=function%20SourceMapConsumer_originalPositionFor(aArgs)%7Bvar%20needle=%7BgeneratedLine:util.getArg(aArgs,'line'),generatedColumn:util.getArg(aArgs,'column')%7D;var%20index=this._findMapping(needle,this._generatedMappings,%22generatedLine%22,%22generatedColumn%22,util.compareByGeneratedPositionsDeflated,util.getArg(aArgs,'bias',SourceMapConsumer.GREATEST_LOWER_BOUND));if(index%3E=0)%7Bvar%20mapping=this._generatedMappings%5Bindex%5D;if(mapping.generatedLine===needle.generatedLine)%7Bvar%20source=util.getArg(mapping,'source',null);if(source!==null)%7Bsource=this._sources.at(source);if(this.sourceRoot!=null)%7Bsource=util.join(this.sourceRoot,source);%7D%7Dvar%20name=util.getArg(mapping,'name',null);if(name!==null)%7Bname=this._names.at(name);%7Dreturn%7Bsource:source,line:util.getArg(mapping,'originalLine',null),column:util.getArg(mapping,'originalColumn',null),name:name%7D;%7D%7Dreturn%7Bsource:null,line:null,column:null,name:null%7D;%7D;/**%0A%09%09%20*%20Return%20true%20if%20we%20have%20the%20source%20content%20for%20every%20source%20in%20the%20source%0A%09%09%20*%20map,%20false%20otherwise.%0A%09%09%20*/BasicSourceMapConsumer.prototype.hasContentsOfAllSources=function%20BasicSourceMapConsumer_hasContentsOfAllSources()%7Bif(!this.sourcesContent)%7Breturn%20false;%7Dreturn%20this.sourcesContent.length%3E=this._sources.size()&&!this.sourcesContent.some(function(sc)%7Breturn%20sc==null;%7D);%7D;/**%0A%09%09%20*%20Returns%20the%20original%20source%20content.%20The%20only%20argument%20is%20the%20url%20of%20the%0A%09%09%20*%20original%20source%20file.%20Returns%20null%20if%20no%20original%20source%20content%20is%0A%09%09%20*%20available.%0A%09%09%20*/BasicSourceMapConsumer.prototype.sourceContentFor=function%20SourceMapConsumer_sourceContentFor(aSource,nullOnMissing)%7Bif(!this.sourcesContent)%7Breturn%20null;%7Dif(this.sourceRoot!=null)%7BaSource=util.relative(this.sourceRoot,aSource);%7Dif(this._sources.has(aSource))%7Breturn%20this.sourcesContent%5Bthis._sources.indexOf(aSource)%5D;%7Dvar%20url;if(this.sourceRoot!=null&&(url=util.urlParse(this.sourceRoot)))%7B//%20XXX:%20file://%20URIs%20and%20absolute%20paths%20lead%20to%20unexpected%20behavior%20for%0A%09//%20many%20users.%20We%20can%20help%20them%20out%20when%20they%20expect%20file://%20URIs%20to%0A%09//%20behave%20like%20it%20would%20if%20they%20were%20running%20a%20local%20HTTP%20server.%20See%0A%09//%20https://bugzilla.mozilla.org/show_bug.cgi?id=885597.%0A%09var%20fileUriAbsPath=aSource.replace(/%5Efile:%5C/%5C//,%22%22);if(url.scheme==%22file%22&&this._sources.has(fileUriAbsPath))%7Breturn%20this.sourcesContent%5Bthis._sources.indexOf(fileUriAbsPath)%5D;%7Dif((!url.path%7C%7Curl.path==%22/%22)&&this._sources.has(%22/%22+aSource))%7Breturn%20this.sourcesContent%5Bthis._sources.indexOf(%22/%22+aSource)%5D;%7D%7D//%20This%20function%20is%20used%20recursively%20from%0A%09//%20IndexedSourceMapConsumer.prototype.sourceContentFor.%20In%20that%20case,%20we%0A%09//%20don't%20want%20to%20throw%20if%20we%20can't%20find%20the%20source%20-%20we%20just%20want%20to%0A%09//%20return%20null,%20so%20we%20provide%20a%20flag%20to%20exit%20gracefully.%0A%09if(nullOnMissing)%7Breturn%20null;%7Delse%7Bthrow%20new%20Error('%22'+aSource+'%22%20is%20not%20in%20the%20SourceMap.');%7D%7D;/**%0A%09%09%20*%20Returns%20the%20generated%20line%20and%20column%20information%20for%20the%20original%20source,%0A%09%09%20*%20line,%20and%20column%20positions%20provided.%20The%20only%20argument%20is%20an%20object%20with%0A%09%09%20*%20the%20following%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20source:%20The%20filename%20of%20the%20original%20source.%0A%09%09%20*%20%20%20-%20line:%20The%20line%20number%20in%20the%20original%20source.%0A%09%09%20*%20%20%20-%20column:%20The%20column%20number%20in%20the%20original%20source.%0A%09%09%20*%20%20%20-%20bias:%20Either%20'SourceMapConsumer.GREATEST_LOWER_BOUND'%20or%0A%09%09%20*%20%20%20%20%20'SourceMapConsumer.LEAST_UPPER_BOUND'.%20Specifies%20whether%20to%20return%20the%0A%09%09%20*%20%20%20%20%20closest%20element%20that%20is%20smaller%20than%20or%20greater%20than%20the%20one%20we%20are%0A%09%09%20*%20%20%20%20%20searching%20for,%20respectively,%20if%20the%20exact%20element%20cannot%20be%20found.%0A%09%09%20*%20%20%20%20%20Defaults%20to%20'SourceMapConsumer.GREATEST_LOWER_BOUND'.%0A%09%09%20*%0A%09%09%20*%20and%20an%20object%20is%20returned%20with%20the%20following%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20line:%20The%20line%20number%20in%20the%20generated%20source,%20or%20null.%0A%09%09%20*%20%20%20-%20column:%20The%20column%20number%20in%20the%20generated%20source,%20or%20null.%0A%09%09%20*/BasicSourceMapConsumer.prototype.generatedPositionFor=function%20SourceMapConsumer_generatedPositionFor(aArgs)%7Bvar%20source=util.getArg(aArgs,'source');if(this.sourceRoot!=null)%7Bsource=util.relative(this.sourceRoot,source);%7Dif(!this._sources.has(source))%7Breturn%7Bline:null,column:null,lastColumn:null%7D;%7Dsource=this._sources.indexOf(source);var%20needle=%7Bsource:source,originalLine:util.getArg(aArgs,'line'),originalColumn:util.getArg(aArgs,'column')%7D;var%20index=this._findMapping(needle,this._originalMappings,%22originalLine%22,%22originalColumn%22,util.compareByOriginalPositions,util.getArg(aArgs,'bias',SourceMapConsumer.GREATEST_LOWER_BOUND));if(index%3E=0)%7Bvar%20mapping=this._originalMappings%5Bindex%5D;if(mapping.source===needle.source)%7Breturn%7Bline:util.getArg(mapping,'generatedLine',null),column:util.getArg(mapping,'generatedColumn',null),lastColumn:util.getArg(mapping,'lastGeneratedColumn',null)%7D;%7D%7Dreturn%7Bline:null,column:null,lastColumn:null%7D;%7D;exports.BasicSourceMapConsumer=BasicSourceMapConsumer;/**%0A%09%09%20*%20An%20IndexedSourceMapConsumer%20instance%20represents%20a%20parsed%20source%20map%20which%0A%09%09%20*%20we%20can%20query%20for%20information.%20It%20differs%20from%20BasicSourceMapConsumer%20in%0A%09%09%20*%20that%20it%20takes%20%22indexed%22%20source%20maps%20(i.e.%20ones%20with%20a%20%22sections%22%20field)%20as%0A%09%09%20*%20input.%0A%09%09%20*%0A%09%09%20*%20The%20only%20parameter%20is%20a%20raw%20source%20map%20(either%20as%20a%20JSON%20string,%20or%20already%0A%09%09%20*%20parsed%20to%20an%20object).%20According%20to%20the%20spec%20for%20indexed%20source%20maps,%20they%0A%09%09%20*%20have%20the%20following%20attributes:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20version:%20Which%20version%20of%20the%20source%20map%20spec%20this%20map%20is%20following.%0A%09%09%20*%20%20%20-%20file:%20Optional.%20The%20generated%20file%20this%20source%20map%20is%20associated%20with.%0A%09%09%20*%20%20%20-%20sections:%20A%20list%20of%20section%20definitions.%0A%09%09%20*%0A%09%09%20*%20Each%20value%20under%20the%20%22sections%22%20field%20has%20two%20fields:%0A%09%09%20*%20%20%20-%20offset:%20The%20offset%20into%20the%20original%20specified%20at%20which%20this%20section%0A%09%09%20*%20%20%20%20%20%20%20begins%20to%20apply,%20defined%20as%20an%20object%20with%20a%20%22line%22%20and%20%22column%22%0A%09%09%20*%20%20%20%20%20%20%20field.%0A%09%09%20*%20%20%20-%20map:%20A%20source%20map%20definition.%20This%20source%20map%20could%20also%20be%20indexed,%0A%09%09%20*%20%20%20%20%20%20%20but%20doesn't%20have%20to%20be.%0A%09%09%20*%0A%09%09%20*%20Instead%20of%20the%20%22map%22%20field,%20it's%20also%20possible%20to%20have%20a%20%22url%22%20field%0A%09%09%20*%20specifying%20a%20URL%20to%20retrieve%20a%20source%20map%20from,%20but%20that's%20currently%0A%09%09%20*%20unsupported.%0A%09%09%20*%0A%09%09%20*%20Here's%20an%20example%20source%20map,%20taken%20from%20the%20source%20map%20spec%5B0%5D,%20but%0A%09%09%20*%20modified%20to%20omit%20a%20section%20which%20uses%20the%20%22url%22%20field.%0A%09%09%20*%0A%09%09%20*%20%20%7B%0A%09%09%20*%20%20%20%20version%20:%203,%0A%09%09%20*%20%20%20%20file:%20%22app.js%22,%0A%09%09%20*%20%20%20%20sections:%20%5B%7B%0A%09%09%20*%20%20%20%20%20%20offset:%20%7Bline:100,%20column:10%7D,%0A%09%09%20*%20%20%20%20%20%20map:%20%7B%0A%09%09%20*%20%20%20%20%20%20%20%20version%20:%203,%0A%09%09%20*%20%20%20%20%20%20%20%20file:%20%22section.js%22,%0A%09%09%20*%20%20%20%20%20%20%20%20sources:%20%5B%22foo.js%22,%20%22bar.js%22%5D,%0A%09%09%20*%20%20%20%20%20%20%20%20names:%20%5B%22src%22,%20%22maps%22,%20%22are%22,%20%22fun%22%5D,%0A%09%09%20*%20%20%20%20%20%20%20%20mappings:%20%22AAAA,E;;ABCDE;%22%0A%09%09%20*%20%20%20%20%20%20%7D%0A%09%09%20*%20%20%20%20%7D%5D,%0A%09%09%20*%20%20%7D%0A%09%09%20*%0A%09%09%20*%20%5B0%5D:%20https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt%0A%09%09%20*/function%20IndexedSourceMapConsumer(aSourceMap)%7Bvar%20sourceMap=aSourceMap;if(typeof%20aSourceMap==='string')%7BsourceMap=JSON.parse(aSourceMap.replace(/%5E%5C)%5C%5D%5C%7D'/,''));%7Dvar%20version=util.getArg(sourceMap,'version');var%20sections=util.getArg(sourceMap,'sections');if(version!=this._version)%7Bthrow%20new%20Error('Unsupported%20version:%20'+version);%7Dthis._sources=new%20ArraySet();this._names=new%20ArraySet();var%20lastOffset=%7Bline:-1,column:0%7D;this._sections=sections.map(function(s)%7Bif(s.url)%7B//%20The%20url%20field%20will%20require%20support%20for%20asynchronicity.%0A%09//%20See%20https://github.com/mozilla/source-map/issues/16%0A%09throw%20new%20Error('Support%20for%20url%20field%20in%20sections%20not%20implemented.');%7Dvar%20offset=util.getArg(s,'offset');var%20offsetLine=util.getArg(offset,'line');var%20offsetColumn=util.getArg(offset,'column');if(offsetLine%3ClastOffset.line%7C%7CoffsetLine===lastOffset.line&&offsetColumn%3ClastOffset.column)%7Bthrow%20new%20Error('Section%20offsets%20must%20be%20ordered%20and%20non-overlapping.');%7DlastOffset=offset;return%7BgeneratedOffset:%7B//%20The%20offset%20fields%20are%200-based,%20but%20we%20use%201-based%20indices%20when%0A%09//%20encoding/decoding%20from%20VLQ.%0A%09generatedLine:offsetLine+1,generatedColumn:offsetColumn+1%7D,consumer:new%20SourceMapConsumer(util.getArg(s,'map'))%7D;%7D);%7DIndexedSourceMapConsumer.prototype=Object.create(SourceMapConsumer.prototype);IndexedSourceMapConsumer.prototype.constructor=SourceMapConsumer;/**%0A%09%09%20*%20The%20version%20of%20the%20source%20mapping%20spec%20that%20we%20are%20consuming.%0A%09%09%20*/IndexedSourceMapConsumer.prototype._version=3;/**%0A%09%09%20*%20The%20list%20of%20original%20sources.%0A%09%09%20*/Object.defineProperty(IndexedSourceMapConsumer.prototype,'sources',%7Bget:function()%7Bvar%20sources=%5B%5D;for(var%20i=0;i%3Cthis._sections.length;i++)%7Bfor(var%20j=0;j%3Cthis._sections%5Bi%5D.consumer.sources.length;j++)%7Bsources.push(this._sections%5Bi%5D.consumer.sources%5Bj%5D);%7D%7Dreturn%20sources;%7D%7D);/**%0A%09%09%20*%20Returns%20the%20original%20source,%20line,%20and%20column%20information%20for%20the%20generated%0A%09%09%20*%20source's%20line%20and%20column%20positions%20provided.%20The%20only%20argument%20is%20an%20object%0A%09%09%20*%20with%20the%20following%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20line:%20The%20line%20number%20in%20the%20generated%20source.%0A%09%09%20*%20%20%20-%20column:%20The%20column%20number%20in%20the%20generated%20source.%0A%09%09%20*%0A%09%09%20*%20and%20an%20object%20is%20returned%20with%20the%20following%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20source:%20The%20original%20source%20file,%20or%20null.%0A%09%09%20*%20%20%20-%20line:%20The%20line%20number%20in%20the%20original%20source,%20or%20null.%0A%09%09%20*%20%20%20-%20column:%20The%20column%20number%20in%20the%20original%20source,%20or%20null.%0A%09%09%20*%20%20%20-%20name:%20The%20original%20identifier,%20or%20null.%0A%09%09%20*/IndexedSourceMapConsumer.prototype.originalPositionFor=function%20IndexedSourceMapConsumer_originalPositionFor(aArgs)%7Bvar%20needle=%7BgeneratedLine:util.getArg(aArgs,'line'),generatedColumn:util.getArg(aArgs,'column')%7D;//%20Find%20the%20section%20containing%20the%20generated%20position%20we're%20trying%20to%20map%0A%09//%20to%20an%20original%20position.%0A%09var%20sectionIndex=binarySearch.search(needle,this._sections,function(needle,section)%7Bvar%20cmp=needle.generatedLine-section.generatedOffset.generatedLine;if(cmp)%7Breturn%20cmp;%7Dreturn%20needle.generatedColumn-section.generatedOffset.generatedColumn;%7D);var%20section=this._sections%5BsectionIndex%5D;if(!section)%7Breturn%7Bsource:null,line:null,column:null,name:null%7D;%7Dreturn%20section.consumer.originalPositionFor(%7Bline:needle.generatedLine-(section.generatedOffset.generatedLine-1),column:needle.generatedColumn-(section.generatedOffset.generatedLine===needle.generatedLine?section.generatedOffset.generatedColumn-1:0),bias:aArgs.bias%7D);%7D;/**%0A%09%09%20*%20Return%20true%20if%20we%20have%20the%20source%20content%20for%20every%20source%20in%20the%20source%0A%09%09%20*%20map,%20false%20otherwise.%0A%09%09%20*/IndexedSourceMapConsumer.prototype.hasContentsOfAllSources=function%20IndexedSourceMapConsumer_hasContentsOfAllSources()%7Breturn%20this._sections.every(function(s)%7Breturn%20s.consumer.hasContentsOfAllSources();%7D);%7D;/**%0A%09%09%20*%20Returns%20the%20original%20source%20content.%20The%20only%20argument%20is%20the%20url%20of%20the%0A%09%09%20*%20original%20source%20file.%20Returns%20null%20if%20no%20original%20source%20content%20is%0A%09%09%20*%20available.%0A%09%09%20*/IndexedSourceMapConsumer.prototype.sourceContentFor=function%20IndexedSourceMapConsumer_sourceContentFor(aSource,nullOnMissing)%7Bfor(var%20i=0;i%3Cthis._sections.length;i++)%7Bvar%20section=this._sections%5Bi%5D;var%20content=section.consumer.sourceContentFor(aSource,true);if(content)%7Breturn%20content;%7D%7Dif(nullOnMissing)%7Breturn%20null;%7Delse%7Bthrow%20new%20Error('%22'+aSource+'%22%20is%20not%20in%20the%20SourceMap.');%7D%7D;/**%0A%09%09%20*%20Returns%20the%20generated%20line%20and%20column%20information%20for%20the%20original%20source,%0A%09%09%20*%20line,%20and%20column%20positions%20provided.%20The%20only%20argument%20is%20an%20object%20with%0A%09%09%20*%20the%20following%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20source:%20The%20filename%20of%20the%20original%20source.%0A%09%09%20*%20%20%20-%20line:%20The%20line%20number%20in%20the%20original%20source.%0A%09%09%20*%20%20%20-%20column:%20The%20column%20number%20in%20the%20original%20source.%0A%09%09%20*%0A%09%09%20*%20and%20an%20object%20is%20returned%20with%20the%20following%20properties:%0A%09%09%20*%0A%09%09%20*%20%20%20-%20line:%20The%20line%20number%20in%20the%20generated%20source,%20or%20null.%0A%09%09%20*%20%20%20-%20column:%20The%20column%20number%20in%20the%20generated%20source,%20or%20null.%0A%09%09%20*/IndexedSourceMapConsumer.prototype.generatedPositionFor=function%20IndexedSourceMapConsumer_generatedPositionFor(aArgs)%7Bfor(var%20i=0;i%3Cthis._sections.length;i++)%7Bvar%20section=this._sections%5Bi%5D;//%20Only%20consider%20this%20section%20if%20the%20requested%20source%20is%20in%20the%20list%20of%0A%09//%20sources%20of%20the%20consumer.%0A%09if(section.consumer.sources.indexOf(util.getArg(aArgs,'source'))===-1)%7Bcontinue;%7Dvar%20generatedPosition=section.consumer.generatedPositionFor(aArgs);if(generatedPosition)%7Bvar%20ret=%7Bline:generatedPosition.line+(section.generatedOffset.generatedLine-1),column:generatedPosition.column+(section.generatedOffset.generatedLine===generatedPosition.line?section.generatedOffset.generatedColumn-1:0)%7D;return%20ret;%7D%7Dreturn%7Bline:null,column:null%7D;%7D;/**%0A%09%09%20*%20Parse%20the%20mappings%20in%20a%20string%20in%20to%20a%20data%20structure%20which%20we%20can%20easily%0A%09%09%20*%20query%20(the%20ordered%20arrays%20in%20the%20%60this.__generatedMappings%60%20and%0A%09%09%20*%20%60this.__originalMappings%60%20properties).%0A%09%09%20*/IndexedSourceMapConsumer.prototype._parseMappings=function%20IndexedSourceMapConsumer_parseMappings(aStr,aSourceRoot)%7Bthis.__generatedMappings=%5B%5D;this.__originalMappings=%5B%5D;for(var%20i=0;i%3Cthis._sections.length;i++)%7Bvar%20section=this._sections%5Bi%5D;var%20sectionMappings=section.consumer._generatedMappings;for(var%20j=0;j%3CsectionMappings.length;j++)%7Bvar%20mapping=sectionMappings%5Bj%5D;var%20source=section.consumer._sources.at(mapping.source);if(section.consumer.sourceRoot!==null)%7Bsource=util.join(section.consumer.sourceRoot,source);%7Dthis._sources.add(source);source=this._sources.indexOf(source);var%20name=section.consumer._names.at(mapping.name);this._names.add(name);name=this._names.indexOf(name);//%20The%20mappings%20coming%20from%20the%20consumer%20for%20the%20section%20have%0A%09//%20generated%20positions%20relative%20to%20the%20start%20of%20the%20section,%20so%20we%0A%09//%20need%20to%20offset%20them%20to%20be%20relative%20to%20the%20start%20of%20the%20concatenated%0A%09//%20generated%20file.%0A%09var%20adjustedMapping=%7Bsource:source,generatedLine:mapping.generatedLine+(section.generatedOffset.generatedLine-1),generatedColumn:mapping.generatedColumn+(section.generatedOffset.generatedLine===mapping.generatedLine?section.generatedOffset.generatedColumn-1:0),originalLine:mapping.originalLine,originalColumn:mapping.originalColumn,name:name%7D;this.__generatedMappings.push(adjustedMapping);if(typeof%20adjustedMapping.originalLine==='number')%7Bthis.__originalMappings.push(adjustedMapping);%7D%7D%7DquickSort(this.__generatedMappings,util.compareByGeneratedPositionsDeflated);quickSort(this.__originalMappings,util.compareByOriginalPositions);%7D;exports.IndexedSourceMapConsumer=IndexedSourceMapConsumer;/***/%7D,/*%208%20*//***/function(module,exports)%7B/*%20-*-%20Mode:%20js;%20js-indent-level:%202;%20-*-%20*//*%0A%09%09%20*%20Copyright%202011%20Mozilla%20Foundation%20and%20contributors%0A%09%09%20*%20Licensed%20under%20the%20New%20BSD%20license.%20See%20LICENSE%20or:%0A%09%09%20*%20http://opensource.org/licenses/BSD-3-Clause%0A%09%09%20*/exports.GREATEST_LOWER_BOUND=1;exports.LEAST_UPPER_BOUND=2;/**%0A%09%09%20*%20Recursive%20implementation%20of%20binary%20search.%0A%09%09%20*%0A%09%09%20*%20@param%20aLow%20Indices%20here%20and%20lower%20do%20not%20contain%20the%20needle.%0A%09%09%20*%20@param%20aHigh%20Indices%20here%20and%20higher%20do%20not%20contain%20the%20needle.%0A%09%09%20*%20@param%20aNeedle%20The%20element%20being%20searched%20for.%0A%09%09%20*%20@param%20aHaystack%20The%20non-empty%20array%20being%20searched.%0A%09%09%20*%20@param%20aCompare%20Function%20which%20takes%20two%20elements%20and%20returns%20-1,%200,%20or%201.%0A%09%09%20*%20@param%20aBias%20Either%20'binarySearch.GREATEST_LOWER_BOUND'%20or%0A%09%09%20*%20%20%20%20%20'binarySearch.LEAST_UPPER_BOUND'.%20Specifies%20whether%20to%20return%20the%0A%09%09%20*%20%20%20%20%20closest%20element%20that%20is%20smaller%20than%20or%20greater%20than%20the%20one%20we%20are%0A%09%09%20*%20%20%20%20%20searching%20for,%20respectively,%20if%20the%20exact%20element%20cannot%20be%20found.%0A%09%09%20*/function%20recursiveSearch(aLow,aHigh,aNeedle,aHaystack,aCompare,aBias)%7B//%20This%20function%20terminates%20when%20one%20of%20the%20following%20is%20true:%0A%09//%0A%09//%20%20%201.%20We%20find%20the%20exact%20element%20we%20are%20looking%20for.%0A%09//%0A%09//%20%20%202.%20We%20did%20not%20find%20the%20exact%20element,%20but%20we%20can%20return%20the%20index%20of%0A%09//%20%20%20%20%20%20the%20next-closest%20element.%0A%09//%0A%09//%20%20%203.%20We%20did%20not%20find%20the%20exact%20element,%20and%20there%20is%20no%20next-closest%0A%09//%20%20%20%20%20%20element%20than%20the%20one%20we%20are%20searching%20for,%20so%20we%20return%20-1.%0A%09var%20mid=Math.floor((aHigh-aLow)/2)+aLow;var%20cmp=aCompare(aNeedle,aHaystack%5Bmid%5D,true);if(cmp===0)%7B//%20Found%20the%20element%20we%20are%20looking%20for.%0A%09return%20mid;%7Delse%20if(cmp%3E0)%7B//%20Our%20needle%20is%20greater%20than%20aHaystack%5Bmid%5D.%0A%09if(aHigh-mid%3E1)%7B//%20The%20element%20is%20in%20the%20upper%20half.%0A%09return%20recursiveSearch(mid,aHigh,aNeedle,aHaystack,aCompare,aBias);%7D//%20The%20exact%20needle%20element%20was%20not%20found%20in%20this%20haystack.%20Determine%20if%0A%09//%20we%20are%20in%20termination%20case%20(3)%20or%20(2)%20and%20return%20the%20appropriate%20thing.%0A%09if(aBias==exports.LEAST_UPPER_BOUND)%7Breturn%20aHigh%3CaHaystack.length?aHigh:-1;%7Delse%7Breturn%20mid;%7D%7Delse%7B//%20Our%20needle%20is%20less%20than%20aHaystack%5Bmid%5D.%0A%09if(mid-aLow%3E1)%7B//%20The%20element%20is%20in%20the%20lower%20half.%0A%09return%20recursiveSearch(aLow,mid,aNeedle,aHaystack,aCompare,aBias);%7D//%20we%20are%20in%20termination%20case%20(3)%20or%20(2)%20and%20return%20the%20appropriate%20thing.%0A%09if(aBias==exports.LEAST_UPPER_BOUND)%7Breturn%20mid;%7Delse%7Breturn%20aLow%3C0?-1:aLow;%7D%7D%7D/**%0A%09%09%20*%20This%20is%20an%20implementation%20of%20binary%20search%20which%20will%20always%20try%20and%20return%0A%09%09%20*%20the%20index%20of%20the%20closest%20element%20if%20there%20is%20no%20exact%20hit.%20This%20is%20because%0A%09%09%20*%20mappings%20between%20original%20and%20generated%20line/col%20pairs%20are%20single%20points,%0A%09%09%20*%20and%20there%20is%20an%20implicit%20region%20between%20each%20of%20them,%20so%20a%20miss%20just%20means%0A%09%09%20*%20that%20you%20aren't%20on%20the%20very%20start%20of%20a%20region.%0A%09%09%20*%0A%09%09%20*%20@param%20aNeedle%20The%20element%20you%20are%20looking%20for.%0A%09%09%20*%20@param%20aHaystack%20The%20array%20that%20is%20being%20searched.%0A%09%09%20*%20@param%20aCompare%20A%20function%20which%20takes%20the%20needle%20and%20an%20element%20in%20the%0A%09%09%20*%20%20%20%20%20array%20and%20returns%20-1,%200,%20or%201%20depending%20on%20whether%20the%20needle%20is%20less%0A%09%09%20*%20%20%20%20%20than,%20equal%20to,%20or%20greater%20than%20the%20element,%20respectively.%0A%09%09%20*%20@param%20aBias%20Either%20'binarySearch.GREATEST_LOWER_BOUND'%20or%0A%09%09%20*%20%20%20%20%20'binarySearch.LEAST_UPPER_BOUND'.%20Specifies%20whether%20to%20return%20the%0A%09%09%20*%20%20%20%20%20closest%20element%20that%20is%20smaller%20than%20or%20greater%20than%20the%20one%20we%20are%0A%09%09%20*%20%20%20%20%20searching%20for,%20respectively,%20if%20the%20exact%20element%20cannot%20be%20found.%0A%09%09%20*%20%20%20%20%20Defaults%20to%20'binarySearch.GREATEST_LOWER_BOUND'.%0A%09%09%20*/exports.search=function%20search(aNeedle,aHaystack,aCompare,aBias)%7Bif(aHaystack.length===0)%7Breturn-1;%7Dvar%20index=recursiveSearch(-1,aHaystack.length,aNeedle,aHaystack,aCompare,aBias%7C%7Cexports.GREATEST_LOWER_BOUND);if(index%3C0)%7Breturn-1;%7D//%20We%20have%20found%20either%20the%20exact%20element,%20or%20the%20next-closest%20element%20than%0A%09//%20the%20one%20we%20are%20searching%20for.%20However,%20there%20may%20be%20more%20than%20one%20such%0A%09//%20element.%20Make%20sure%20we%20always%20return%20the%20smallest%20of%20these.%0A%09while(index-1%3E=0)%7Bif(aCompare(aHaystack%5Bindex%5D,aHaystack%5Bindex-1%5D,true)!==0)%7Bbreak;%7D--index;%7Dreturn%20index;%7D;/***/%7D,/*%209%20*//***/function(module,exports)%7B/*%20-*-%20Mode:%20js;%20js-indent-level:%202;%20-*-%20*//*%0A%09%09%20*%20Copyright%202011%20Mozilla%20Foundation%20and%20contributors%0A%09%09%20*%20Licensed%20under%20the%20New%20BSD%20license.%20See%20LICENSE%20or:%0A%09%09%20*%20http://opensource.org/licenses/BSD-3-Clause%0A%09%09%20*///%20It%20turns%20out%20that%20some%20(most?)%20JavaScript%20engines%20don't%20self-host%0A%09//%20%60Array.prototype.sort%60.%20This%20makes%20sense%20because%20C++%20will%20likely%20remain%0A%09//%20faster%20than%20JS%20when%20doing%20raw%20CPU-intensive%20sorting.%20However,%20when%20using%20a%0A%09//%20custom%20comparator%20function,%20calling%20back%20and%20forth%20between%20the%20VM's%20C++%20and%0A%09//%20JIT'd%20JS%20is%20rather%20slow%20*and*%20loses%20JIT%20type%20information,%20resulting%20in%0A%09//%20worse%20generated%20code%20for%20the%20comparator%20function%20than%20would%20be%20optimal.%20In%0A%09//%20fact,%20when%20sorting%20with%20a%20comparator,%20these%20costs%20outweigh%20the%20benefits%20of%0A%09//%20sorting%20in%20C++.%20By%20using%20our%20own%20JS-implemented%20Quick%20Sort%20(below),%20we%20get%0A%09//%20a%20~3500ms%20mean%20speed-up%20in%20%60bench/bench.html%60.%0A%09/**%0A%09%09%20*%20Swap%20the%20elements%20indexed%20by%20%60x%60%20and%20%60y%60%20in%20the%20array%20%60ary%60.%0A%09%09%20*%0A%09%09%20*%20@param%20%7BArray%7D%20ary%0A%09%09%20*%20%20%20%20%20%20%20%20The%20array.%0A%09%09%20*%20@param%20%7BNumber%7D%20x%0A%09%09%20*%20%20%20%20%20%20%20%20The%20index%20of%20the%20first%20item.%0A%09%09%20*%20@param%20%7BNumber%7D%20y%0A%09%09%20*%20%20%20%20%20%20%20%20The%20index%20of%20the%20second%20item.%0A%09%09%20*/function%20swap(ary,x,y)%7Bvar%20temp=ary%5Bx%5D;ary%5Bx%5D=ary%5By%5D;ary%5By%5D=temp;%7D/**%0A%09%09%20*%20Returns%20a%20random%20integer%20within%20the%20range%20%60low%20..%20high%60%20inclusive.%0A%09%09%20*%0A%09%09%20*%20@param%20%7BNumber%7D%20low%0A%09%09%20*%20%20%20%20%20%20%20%20The%20lower%20bound%20on%20the%20range.%0A%09%09%20*%20@param%20%7BNumber%7D%20high%0A%09%09%20*%20%20%20%20%20%20%20%20The%20upper%20bound%20on%20the%20range.%0A%09%09%20*/function%20randomIntInRange(low,high)%7Breturn%20Math.round(low+Math.random()*(high-low));%7D/**%0A%09%09%20*%20The%20Quick%20Sort%20algorithm.%0A%09%09%20*%0A%09%09%20*%20@param%20%7BArray%7D%20ary%0A%09%09%20*%20%20%20%20%20%20%20%20An%20array%20to%20sort.%0A%09%09%20*%20@param%20%7Bfunction%7D%20comparator%0A%09%09%20*%20%20%20%20%20%20%20%20Function%20to%20use%20to%20compare%20two%20items.%0A%09%09%20*%20@param%20%7BNumber%7D%20p%0A%09%09%20*%20%20%20%20%20%20%20%20Start%20index%20of%20the%20array%0A%09%09%20*%20@param%20%7BNumber%7D%20r%0A%09%09%20*%20%20%20%20%20%20%20%20End%20index%20of%20the%20array%0A%09%09%20*/function%20doQuickSort(ary,comparator,p,r)%7B//%20If%20our%20lower%20bound%20is%20less%20than%20our%20upper%20bound,%20we%20(1)%20partition%20the%0A%09//%20array%20into%20two%20pieces%20and%20(2)%20recurse%20on%20each%20half.%20If%20it%20is%20not,%20this%20is%0A%09//%20the%20empty%20array%20and%20our%20base%20case.%0A%09if(p%3Cr)%7B//%20(1)%20Partitioning.%0A%09//%0A%09//%20The%20partitioning%20chooses%20a%20pivot%20between%20%60p%60%20and%20%60r%60%20and%20moves%20all%0A%09//%20elements%20that%20are%20less%20than%20or%20equal%20to%20the%20pivot%20to%20the%20before%20it,%20and%0A%09//%20all%20the%20elements%20that%20are%20greater%20than%20it%20after%20it.%20The%20effect%20is%20that%0A%09//%20once%20partition%20is%20done,%20the%20pivot%20is%20in%20the%20exact%20place%20it%20will%20be%20when%0A%09//%20the%20array%20is%20put%20in%20sorted%20order,%20and%20it%20will%20not%20need%20to%20be%20moved%0A%09//%20again.%20This%20runs%20in%20O(n)%20time.%0A%09//%20Always%20choose%20a%20random%20pivot%20so%20that%20an%20input%20array%20which%20is%20reverse%0A%09//%20sorted%20does%20not%20cause%20O(n%5E2)%20running%20time.%0A%09var%20pivotIndex=randomIntInRange(p,r);var%20i=p-1;swap(ary,pivotIndex,r);var%20pivot=ary%5Br%5D;//%20Immediately%20after%20%60j%60%20is%20incremented%20in%20this%20loop,%20the%20following%20hold%0A%09//%20true:%0A%09//%0A%09//%20%20%20*%20Every%20element%20in%20%60ary%5Bp%20..%20i%5D%60%20is%20less%20than%20or%20equal%20to%20the%20pivot.%0A%09//%0A%09//%20%20%20*%20Every%20element%20in%20%60ary%5Bi+1%20..%20j-1%5D%60%20is%20greater%20than%20the%20pivot.%0A%09for(var%20j=p;j%3Cr;j++)%7Bif(comparator(ary%5Bj%5D,pivot)%3C=0)%7Bi+=1;swap(ary,i,j);%7D%7Dswap(ary,i+1,j);var%20q=i+1;//%20(2)%20Recurse%20on%20each%20half.%0A%09doQuickSort(ary,comparator,p,q-1);doQuickSort(ary,comparator,q+1,r);%7D%7D/**%0A%09%09%20*%20Sort%20the%20given%20array%20in-place%20with%20the%20given%20comparator%20function.%0A%09%09%20*%0A%09%09%20*%20@param%20%7BArray%7D%20ary%0A%09%09%20*%20%20%20%20%20%20%20%20An%20array%20to%20sort.%0A%09%09%20*%20@param%20%7Bfunction%7D%20comparator%0A%09%09%20*%20%20%20%20%20%20%20%20Function%20to%20use%20to%20compare%20two%20items.%0A%09%09%20*/exports.quickSort=function(ary,comparator)%7BdoQuickSort(ary,comparator,0,ary.length-1);%7D;/***/%7D,/*%2010%20*//***/function(module,exports,__webpack_require__)%7B/*%20-*-%20Mode:%20js;%20js-indent-level:%202;%20-*-%20*//*%0A%09%09%20*%20Copyright%202011%20Mozilla%20Foundation%20and%20contributors%0A%09%09%20*%20Licensed%20under%20the%20New%20BSD%20license.%20See%20LICENSE%20or:%0A%09%09%20*%20http://opensource.org/licenses/BSD-3-Clause%0A%09%09%20*/var%20SourceMapGenerator=__webpack_require__(1).SourceMapGenerator;var%20util=__webpack_require__(4);//%20Matches%20a%20Windows-style%20%60%5Cr%5Cn%60%20newline%20or%20a%20%60%5Cn%60%20newline%20used%20by%20all%20other%0A%09//%20operating%20systems%20these%20days%20(capturing%20the%20result).%0A%09var%20REGEX_NEWLINE=/(%5Cr?%5Cn)/;//%20Newline%20character%20code%20for%20charCodeAt()%20comparisons%0A%09var%20NEWLINE_CODE=10;//%20Private%20symbol%20for%20identifying%20%60SourceNode%60s%20when%20multiple%20versions%20of%0A%09//%20the%20source-map%20library%20are%20loaded.%20This%20MUST%20NOT%20CHANGE%20across%0A%09//%20versions!%0A%09var%20isSourceNode=%22$$$isSourceNode$$$%22;/**%0A%09%09%20*%20SourceNodes%20provide%20a%20way%20to%20abstract%20over%20interpolating/concatenating%0A%09%09%20*%20snippets%20of%20generated%20JavaScript%20source%20code%20while%20maintaining%20the%20line%20and%0A%09%09%20*%20column%20information%20associated%20with%20the%20original%20source%20code.%0A%09%09%20*%0A%09%09%20*%20@param%20aLine%20The%20original%20line%20number.%0A%09%09%20*%20@param%20aColumn%20The%20original%20column%20number.%0A%09%09%20*%20@param%20aSource%20The%20original%20source's%20filename.%0A%09%09%20*%20@param%20aChunks%20Optional.%20An%20array%20of%20strings%20which%20are%20snippets%20of%0A%09%09%20*%20%20%20%20%20%20%20%20generated%20JS,%20or%20other%20SourceNodes.%0A%09%09%20*%20@param%20aName%20The%20original%20identifier.%0A%09%09%20*/function%20SourceNode(aLine,aColumn,aSource,aChunks,aName)%7Bthis.children=%5B%5D;this.sourceContents=%7B%7D;this.line=aLine==null?null:aLine;this.column=aColumn==null?null:aColumn;this.source=aSource==null?null:aSource;this.name=aName==null?null:aName;this%5BisSourceNode%5D=true;if(aChunks!=null)this.add(aChunks);%7D/**%0A%09%09%20*%20Creates%20a%20SourceNode%20from%20generated%20code%20and%20a%20SourceMapConsumer.%0A%09%09%20*%0A%09%09%20*%20@param%20aGeneratedCode%20The%20generated%20code%0A%09%09%20*%20@param%20aSourceMapConsumer%20The%20SourceMap%20for%20the%20generated%20code%0A%09%09%20*%20@param%20aRelativePath%20Optional.%20The%20path%20that%20relative%20sources%20in%20the%0A%09%09%20*%20%20%20%20%20%20%20%20SourceMapConsumer%20should%20be%20relative%20to.%0A%09%09%20*/SourceNode.fromStringWithSourceMap=function%20SourceNode_fromStringWithSourceMap(aGeneratedCode,aSourceMapConsumer,aRelativePath)%7B//%20The%20SourceNode%20we%20want%20to%20fill%20with%20the%20generated%20code%0A%09//%20and%20the%20SourceMap%0A%09var%20node=new%20SourceNode();//%20All%20even%20indices%20of%20this%20array%20are%20one%20line%20of%20the%20generated%20code,%0A%09//%20while%20all%20odd%20indices%20are%20the%20newlines%20between%20two%20adjacent%20lines%0A%09//%20(since%20%60REGEX_NEWLINE%60%20captures%20its%20match).%0A%09//%20Processed%20fragments%20are%20removed%20from%20this%20array,%20by%20calling%20%60shiftNextLine%60.%0A%09var%20remainingLines=aGeneratedCode.split(REGEX_NEWLINE);var%20shiftNextLine=function()%7Bvar%20lineContents=remainingLines.shift();//%20The%20last%20line%20of%20a%20file%20might%20not%20have%20a%20newline.%0A%09var%20newLine=remainingLines.shift()%7C%7C%22%22;return%20lineContents+newLine;%7D;//%20We%20need%20to%20remember%20the%20position%20of%20%22remainingLines%22%0A%09var%20lastGeneratedLine=1,lastGeneratedColumn=0;//%20The%20generate%20SourceNodes%20we%20need%20a%20code%20range.%0A%09//%20To%20extract%20it%20current%20and%20last%20mapping%20is%20used.%0A%09//%20Here%20we%20store%20the%20last%20mapping.%0A%09var%20lastMapping=null;aSourceMapConsumer.eachMapping(function(mapping)%7Bif(lastMapping!==null)%7B//%20We%20add%20the%20code%20from%20%22lastMapping%22%20to%20%22mapping%22:%0A%09//%20First%20check%20if%20there%20is%20a%20new%20line%20in%20between.%0A%09if(lastGeneratedLine%3Cmapping.generatedLine)%7B//%20Associate%20first%20line%20with%20%22lastMapping%22%0A%09addMappingWithCode(lastMapping,shiftNextLine());lastGeneratedLine++;lastGeneratedColumn=0;//%20The%20remaining%20code%20is%20added%20without%20mapping%0A%09%7Delse%7B//%20There%20is%20no%20new%20line%20in%20between.%0A%09//%20Associate%20the%20code%20between%20%22lastGeneratedColumn%22%20and%0A%09//%20%22mapping.generatedColumn%22%20with%20%22lastMapping%22%0A%09var%20nextLine=remainingLines%5B0%5D;var%20code=nextLine.substr(0,mapping.generatedColumn-lastGeneratedColumn);remainingLines%5B0%5D=nextLine.substr(mapping.generatedColumn-lastGeneratedColumn);lastGeneratedColumn=mapping.generatedColumn;addMappingWithCode(lastMapping,code);//%20No%20more%20remaining%20code,%20continue%0A%09lastMapping=mapping;return;%7D%7D//%20We%20add%20the%20generated%20code%20until%20the%20first%20mapping%0A%09//%20to%20the%20SourceNode%20without%20any%20mapping.%0A%09//%20Each%20line%20is%20added%20as%20separate%20string.%0A%09while(lastGeneratedLine%3Cmapping.generatedLine)%7Bnode.add(shiftNextLine());lastGeneratedLine++;%7Dif(lastGeneratedColumn%3Cmapping.generatedColumn)%7Bvar%20nextLine=remainingLines%5B0%5D;node.add(nextLine.substr(0,mapping.generatedColumn));remainingLines%5B0%5D=nextLine.substr(mapping.generatedColumn);lastGeneratedColumn=mapping.generatedColumn;%7DlastMapping=mapping;%7D,this);//%20We%20have%20processed%20all%20mappings.%0A%09if(remainingLines.length%3E0)%7Bif(lastMapping)%7B//%20Associate%20the%20remaining%20code%20in%20the%20current%20line%20with%20%22lastMapping%22%0A%09addMappingWithCode(lastMapping,shiftNextLine());%7D//%20and%20add%20the%20remaining%20lines%20without%20any%20mapping%0A%09node.add(remainingLines.join(%22%22));%7D//%20Copy%20sourcesContent%20into%20SourceNode%0A%09aSourceMapConsumer.sources.forEach(function(sourceFile)%7Bvar%20content=aSourceMapConsumer.sourceContentFor(sourceFile);if(content!=null)%7Bif(aRelativePath!=null)%7BsourceFile=util.join(aRelativePath,sourceFile);%7Dnode.setSourceContent(sourceFile,content);%7D%7D);return%20node;function%20addMappingWithCode(mapping,code)%7Bif(mapping===null%7C%7Cmapping.source===undefined)%7Bnode.add(code);%7Delse%7Bvar%20source=aRelativePath?util.join(aRelativePath,mapping.source):mapping.source;node.add(new%20SourceNode(mapping.originalLine,mapping.originalColumn,source,code,mapping.name));%7D%7D%7D;/**%0A%09%09%20*%20Add%20a%20chunk%20of%20generated%20JS%20to%20this%20source%20node.%0A%09%09%20*%0A%09%09%20*%20@param%20aChunk%20A%20string%20snippet%20of%20generated%20JS%20code,%20another%20instance%20of%0A%09%09%20*%20%20%20%20%20%20%20%20SourceNode,%20or%20an%20array%20where%20each%20member%20is%20one%20of%20those%20things.%0A%09%09%20*/SourceNode.prototype.add=function%20SourceNode_add(aChunk)%7Bif(Array.isArray(aChunk))%7BaChunk.forEach(function(chunk)%7Bthis.add(chunk);%7D,this);%7Delse%20if(aChunk%5BisSourceNode%5D%7C%7Ctypeof%20aChunk===%22string%22)%7Bif(aChunk)%7Bthis.children.push(aChunk);%7D%7Delse%7Bthrow%20new%20TypeError(%22Expected%20a%20SourceNode,%20string,%20or%20an%20array%20of%20SourceNodes%20and%20strings.%20Got%20%22+aChunk);%7Dreturn%20this;%7D;/**%0A%09%09%20*%20Add%20a%20chunk%20of%20generated%20JS%20to%20the%20beginning%20of%20this%20source%20node.%0A%09%09%20*%0A%09%09%20*%20@param%20aChunk%20A%20string%20snippet%20of%20generated%20JS%20code,%20another%20instance%20of%0A%09%09%20*%20%20%20%20%20%20%20%20SourceNode,%20or%20an%20array%20where%20each%20member%20is%20one%20of%20those%20things.%0A%09%09%20*/SourceNode.prototype.prepend=function%20SourceNode_prepend(aChunk)%7Bif(Array.isArray(aChunk))%7Bfor(var%20i=aChunk.length-1;i%3E=0;i--)%7Bthis.prepend(aChunk%5Bi%5D);%7D%7Delse%20if(aChunk%5BisSourceNode%5D%7C%7Ctypeof%20aChunk===%22string%22)%7Bthis.children.unshift(aChunk);%7Delse%7Bthrow%20new%20TypeError(%22Expected%20a%20SourceNode,%20string,%20or%20an%20array%20of%20SourceNodes%20and%20strings.%20Got%20%22+aChunk);%7Dreturn%20this;%7D;/**%0A%09%09%20*%20Walk%20over%20the%20tree%20of%20JS%20snippets%20in%20this%20node%20and%20its%20children.%20The%0A%09%09%20*%20walking%20function%20is%20called%20once%20for%20each%20snippet%20of%20JS%20and%20is%20passed%20that%0A%09%09%20*%20snippet%20and%20the%20its%20original%20associated%20source's%20line/column%20location.%0A%09%09%20*%0A%09%09%20*%20@param%20aFn%20The%20traversal%20function.%0A%09%09%20*/SourceNode.prototype.walk=function%20SourceNode_walk(aFn)%7Bvar%20chunk;for(var%20i=0,len=this.children.length;i%3Clen;i++)%7Bchunk=this.children%5Bi%5D;if(chunk%5BisSourceNode%5D)%7Bchunk.walk(aFn);%7Delse%7Bif(chunk!=='')%7BaFn(chunk,%7Bsource:this.source,line:this.line,column:this.column,name:this.name%7D);%7D%7D%7D%7D;/**%0A%09%09%20*%20Like%20%60String.prototype.join%60%20except%20for%20SourceNodes.%20Inserts%20%60aStr%60%20between%0A%09%09%20*%20each%20of%20%60this.children%60.%0A%09%09%20*%0A%09%09%20*%20@param%20aSep%20The%20separator.%0A%09%09%20*/SourceNode.prototype.join=function%20SourceNode_join(aSep)%7Bvar%20newChildren;var%20i;var%20len=this.children.length;if(len%3E0)%7BnewChildren=%5B%5D;for(i=0;i%3Clen-1;i++)%7BnewChildren.push(this.children%5Bi%5D);newChildren.push(aSep);%7DnewChildren.push(this.children%5Bi%5D);this.children=newChildren;%7Dreturn%20this;%7D;/**%0A%09%09%20*%20Call%20String.prototype.replace%20on%20the%20very%20right-most%20source%20snippet.%20Useful%0A%09%09%20*%20for%20trimming%20whitespace%20from%20the%20end%20of%20a%20source%20node,%20etc.%0A%09%09%20*%0A%09%09%20*%20@param%20aPattern%20The%20pattern%20to%20replace.%0A%09%09%20*%20@param%20aReplacement%20The%20thing%20to%20replace%20the%20pattern%20with.%0A%09%09%20*/SourceNode.prototype.replaceRight=function%20SourceNode_replaceRight(aPattern,aReplacement)%7Bvar%20lastChild=this.children%5Bthis.children.length-1%5D;if(lastChild%5BisSourceNode%5D)%7BlastChild.replaceRight(aPattern,aReplacement);%7Delse%20if(typeof%20lastChild==='string')%7Bthis.children%5Bthis.children.length-1%5D=lastChild.replace(aPattern,aReplacement);%7Delse%7Bthis.children.push(''.replace(aPattern,aReplacement));%7Dreturn%20this;%7D;/**%0A%09%09%20*%20Set%20the%20source%20content%20for%20a%20source%20file.%20This%20will%20be%20added%20to%20the%20SourceMapGenerator%0A%09%09%20*%20in%20the%20sourcesContent%20field.%0A%09%09%20*%0A%09%09%20*%20@param%20aSourceFile%20The%20filename%20of%20the%20source%20file%0A%09%09%20*%20@param%20aSourceContent%20The%20content%20of%20the%20source%20file%0A%09%09%20*/SourceNode.prototype.setSourceContent=function%20SourceNode_setSourceContent(aSourceFile,aSourceContent)%7Bthis.sourceContents%5Butil.toSetString(aSourceFile)%5D=aSourceContent;%7D;/**%0A%09%09%20*%20Walk%20over%20the%20tree%20of%20SourceNodes.%20The%20walking%20function%20is%20called%20for%20each%0A%09%09%20*%20source%20file%20content%20and%20is%20passed%20the%20filename%20and%20source%20content.%0A%09%09%20*%0A%09%09%20*%20@param%20aFn%20The%20traversal%20function.%0A%09%09%20*/SourceNode.prototype.walkSourceContents=function%20SourceNode_walkSourceContents(aFn)%7Bfor(var%20i=0,len=this.children.length;i%3Clen;i++)%7Bif(this.children%5Bi%5D%5BisSourceNode%5D)%7Bthis.children%5Bi%5D.walkSourceContents(aFn);%7D%7Dvar%20sources=Object.keys(this.sourceContents);for(var%20i=0,len=sources.length;i%3Clen;i++)%7BaFn(util.fromSetString(sources%5Bi%5D),this.sourceContents%5Bsources%5Bi%5D%5D);%7D%7D;/**%0A%09%09%20*%20Return%20the%20string%20representation%20of%20this%20source%20node.%20Walks%20over%20the%20tree%0A%09%09%20*%20and%20concatenates%20all%20the%20various%20snippets%20together%20to%20one%20string.%0A%09%09%20*/SourceNode.prototype.toString=function%20SourceNode_toString()%7Bvar%20str=%22%22;this.walk(function(chunk)%7Bstr+=chunk;%7D);return%20str;%7D;/**%0A%09%09%20*%20Returns%20the%20string%20representation%20of%20this%20source%20node%20along%20with%20a%20source%0A%09%09%20*%20map.%0A%09%09%20*/SourceNode.prototype.toStringWithSourceMap=function%20SourceNode_toStringWithSourceMap(aArgs)%7Bvar%20generated=%7Bcode:%22%22,line:1,column:0%7D;var%20map=new%20SourceMapGenerator(aArgs);var%20sourceMappingActive=false;var%20lastOriginalSource=null;var%20lastOriginalLine=null;var%20lastOriginalColumn=null;var%20lastOriginalName=null;this.walk(function(chunk,original)%7Bgenerated.code+=chunk;if(original.source!==null&&original.line!==null&&original.column!==null)%7Bif(lastOriginalSource!==original.source%7C%7ClastOriginalLine!==original.line%7C%7ClastOriginalColumn!==original.column%7C%7ClastOriginalName!==original.name)%7Bmap.addMapping(%7Bsource:original.source,original:%7Bline:original.line,column:original.column%7D,generated:%7Bline:generated.line,column:generated.column%7D,name:original.name%7D);%7DlastOriginalSource=original.source;lastOriginalLine=original.line;lastOriginalColumn=original.column;lastOriginalName=original.name;sourceMappingActive=true;%7Delse%20if(sourceMappingActive)%7Bmap.addMapping(%7Bgenerated:%7Bline:generated.line,column:generated.column%7D%7D);lastOriginalSource=null;sourceMappingActive=false;%7Dfor(var%20idx=0,length=chunk.length;idx%3Clength;idx++)%7Bif(chunk.charCodeAt(idx)===NEWLINE_CODE)%7Bgenerated.line++;generated.column=0;//%20Mappings%20end%20at%20eol%0A%09if(idx+1===length)%7BlastOriginalSource=null;sourceMappingActive=false;%7Delse%20if(sourceMappingActive)%7Bmap.addMapping(%7Bsource:original.source,original:%7Bline:original.line,column:original.column%7D,generated:%7Bline:generated.line,column:generated.column%7D,name:original.name%7D);%7D%7Delse%7Bgenerated.column++;%7D%7D%7D);this.walkSourceContents(function(sourceFile,sourceContent)%7Bmap.setSourceContent(sourceFile,sourceContent);%7D);return%7Bcode:generated.code,map:map%7D;%7D;exports.SourceNode=SourceNode;/***/%7D/******/%5D));%7D);;%0A%0A/***/%20%7D,%0A%0A/***/%20580:%0A/***/%20function(module,%20exports,%20__webpack_require__)%20%7B%0A%0A%09var%20__WEBPACK_AMD_DEFINE_FACTORY__,%20__WEBPACK_AMD_DEFINE_ARRAY__,%20__WEBPACK_AMD_DEFINE_RESULT__;'use%20strict';%0A%09%0A%09(function%20(root,%20factory)%20%7B%0A%09%20%20%20%20'use%20strict';%0A%09%20%20%20%20//%20Universal%20Module%20Definition%20(UMD)%20to%20support%20AMD,%20CommonJS/Node.js,%20Rhino,%20and%20browsers.%0A%09%0A%09%20%20%20%20/*%20istanbul%20ignore%20next%20*/%0A%09%0A%09%20%20%20%20if%20(true)%20%7B%0A%09%20%20%20%20%20%20%20%20!(__WEBPACK_AMD_DEFINE_ARRAY__%20=%20%5B%5D,%20__WEBPACK_AMD_DEFINE_FACTORY__%20=%20(factory),%20__WEBPACK_AMD_DEFINE_RESULT__%20=%20(typeof%20__WEBPACK_AMD_DEFINE_FACTORY__%20===%20'function'%20?%20(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,%20__WEBPACK_AMD_DEFINE_ARRAY__))%20:%20__WEBPACK_AMD_DEFINE_FACTORY__),%20__WEBPACK_AMD_DEFINE_RESULT__%20!==%20undefined%20&&%20(module.exports%20=%20__WEBPACK_AMD_DEFINE_RESULT__));%0A%09%20%20%20%20%7D%20else%20if%20(typeof%20exports%20===%20'object')%20%7B%0A%09%20%20%20%20%20%20%20%20module.exports%20=%20factory();%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20root.StackFrame%20=%20factory();%0A%09%20%20%20%20%7D%0A%09%7D)(undefined,%20function%20()%20%7B%0A%09%20%20%20%20'use%20strict';%0A%09%0A%09%20%20%20%20function%20_isNumber(n)%20%7B%0A%09%20%20%20%20%20%20%20%20return%20!isNaN(parseFloat(n))%20&&%20isFinite(n);%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20function%20_capitalize(str)%20%7B%0A%09%20%20%20%20%20%20%20%20return%20str%5B0%5D.toUpperCase()%20+%20str.substring(1);%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20function%20_getter(p)%20%7B%0A%09%20%20%20%20%20%20%20%20return%20function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20this%5Bp%5D;%0A%09%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20var%20booleanProps%20=%20%5B'isConstructor',%20'isEval',%20'isNative',%20'isToplevel'%5D;%0A%09%20%20%20%20var%20numericProps%20=%20%5B'columnNumber',%20'lineNumber'%5D;%0A%09%20%20%20%20var%20stringProps%20=%20%5B'fileName',%20'functionName',%20'source'%5D;%0A%09%20%20%20%20var%20arrayProps%20=%20%5B'args'%5D;%0A%09%0A%09%20%20%20%20var%20props%20=%20booleanProps.concat(numericProps,%20stringProps,%20arrayProps);%0A%09%0A%09%20%20%20%20function%20StackFrame(functionName,%20args,%20fileName,%20lineNumber,%20columnNumber,%20source)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(functionName%20instanceof%20Object)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20obj%20=%20functionName;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20props%20=%20booleanProps.concat(numericProps.concat(stringProps.concat(arrayProps)));%0A%09%20%20%20%20%20%20%20%20%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20props.length;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(obj.hasOwnProperty(props%5Bi%5D)%20&&%20obj%5Bprops%5Bi%5D%5D%20!==%20undefined)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this%5B'set'%20+%20_capitalize(props%5Bi%5D)%5D(obj%5Bprops%5Bi%5D%5D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(functionName%20!==%20undefined)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.setFunctionName(functionName);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(args%20!==%20undefined)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.setArgs(args);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(fileName%20!==%20undefined)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.setFileName(fileName);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(lineNumber%20!==%20undefined)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.setLineNumber(lineNumber);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(columnNumber%20!==%20undefined)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.setColumnNumber(columnNumber);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(source%20!==%20undefined)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.setSource(source);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20StackFrame.prototype%20=%20%7B%0A%09%20%20%20%20%20%20%20%20getArgs:%20function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20this.args;%0A%09%20%20%20%20%20%20%20%20%7D,%0A%09%20%20%20%20%20%20%20%20setArgs:%20function%20(v)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(Object.prototype.toString.call(v)%20!==%20'%5Bobject%20Array%5D')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20TypeError('Args%20must%20be%20an%20Array');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20this.args%20=%20v;%0A%09%20%20%20%20%20%20%20%20%7D,%0A%09%0A%09%20%20%20%20%20%20%20%20getEvalOrigin:%20function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20this.evalOrigin;%0A%09%20%20%20%20%20%20%20%20%7D,%0A%09%20%20%20%20%20%20%20%20setEvalOrigin:%20function%20(v)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(v%20instanceof%20StackFrame)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.evalOrigin%20=%20v;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(v%20instanceof%20Object)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.evalOrigin%20=%20new%20StackFrame(v);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20TypeError('Eval%20Origin%20must%20be%20an%20Object%20or%20StackFrame');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%7D,%0A%09%0A%09%20%20%20%20%20%20%20%20toString:%20function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20functionName%20=%20this.getFunctionName()%20%7C%7C%20'%7Banonymous%7D';%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20args%20=%20'('%20+%20(this.getArgs()%20%7C%7C%20%5B%5D).join(',')%20+%20')';%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20fileName%20=%20this.getFileName()%20?%20'@'%20+%20this.getFileName()%20:%20'';%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20lineNumber%20=%20_isNumber(this.getLineNumber())%20?%20':'%20+%20this.getLineNumber()%20:%20'';%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20columnNumber%20=%20_isNumber(this.getColumnNumber())%20?%20':'%20+%20this.getColumnNumber()%20:%20'';%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20functionName%20+%20args%20+%20fileName%20+%20lineNumber%20+%20columnNumber;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D;%0A%09%0A%09%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20booleanProps.length;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20StackFrame.prototype%5B'get'%20+%20_capitalize(booleanProps%5Bi%5D)%5D%20=%20_getter(booleanProps%5Bi%5D);%0A%09%20%20%20%20%20%20%20%20StackFrame.prototype%5B'set'%20+%20_capitalize(booleanProps%5Bi%5D)%5D%20=%20function%20(p)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20function%20(v)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this%5Bp%5D%20=%20Boolean(v);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%7D(booleanProps%5Bi%5D);%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20for%20(var%20j%20=%200;%20j%20%3C%20numericProps.length;%20j++)%20%7B%0A%09%20%20%20%20%20%20%20%20StackFrame.prototype%5B'get'%20+%20_capitalize(numericProps%5Bj%5D)%5D%20=%20_getter(numericProps%5Bj%5D);%0A%09%20%20%20%20%20%20%20%20StackFrame.prototype%5B'set'%20+%20_capitalize(numericProps%5Bj%5D)%5D%20=%20function%20(p)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20function%20(v)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(!_isNumber(v))%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20TypeError(p%20+%20'%20must%20be%20a%20Number');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this%5Bp%5D%20=%20Number(v);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%7D(numericProps%5Bj%5D);%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20for%20(var%20k%20=%200;%20k%20%3C%20stringProps.length;%20k++)%20%7B%0A%09%20%20%20%20%20%20%20%20StackFrame.prototype%5B'get'%20+%20_capitalize(stringProps%5Bk%5D)%5D%20=%20_getter(stringProps%5Bk%5D);%0A%09%20%20%20%20%20%20%20%20StackFrame.prototype%5B'set'%20+%20_capitalize(stringProps%5Bk%5D)%5D%20=%20function%20(p)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20function%20(v)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this%5Bp%5D%20=%20String(v);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%7D(stringProps%5Bk%5D);%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20return%20StackFrame;%0A%09%7D);%0A%0A/***/%20%7D,%0A%0A/***/%20581:%0A/***/%20function(module,%20exports,%20__webpack_require__)%20%7B%0A%0A%09var%20__WEBPACK_AMD_DEFINE_FACTORY__,%20__WEBPACK_AMD_DEFINE_ARRAY__,%20__WEBPACK_AMD_DEFINE_RESULT__;'use%20strict';%0A%09%0A%09(function%20(root,%20factory)%20%7B%0A%09%20%20%20%20'use%20strict';%0A%09%20%20%20%20//%20Universal%20Module%20Definition%20(UMD)%20to%20support%20AMD,%20CommonJS/Node.js,%20Rhino,%20and%20browsers.%0A%09%0A%09%20%20%20%20/*%20istanbul%20ignore%20next%20*/%0A%09%0A%09%20%20%20%20if%20(true)%20%7B%0A%09%20%20%20%20%20%20%20%20!(__WEBPACK_AMD_DEFINE_ARRAY__%20=%20%5B__webpack_require__(580)%5D,%20__WEBPACK_AMD_DEFINE_FACTORY__%20=%20(factory),%20__WEBPACK_AMD_DEFINE_RESULT__%20=%20(typeof%20__WEBPACK_AMD_DEFINE_FACTORY__%20===%20'function'%20?%20(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,%20__WEBPACK_AMD_DEFINE_ARRAY__))%20:%20__WEBPACK_AMD_DEFINE_FACTORY__),%20__WEBPACK_AMD_DEFINE_RESULT__%20!==%20undefined%20&&%20(module.exports%20=%20__WEBPACK_AMD_DEFINE_RESULT__));%0A%09%20%20%20%20%7D%20else%20if%20(typeof%20exports%20===%20'object')%20%7B%0A%09%20%20%20%20%20%20%20%20module.exports%20=%20factory(require('./stackframe'));%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20root.ErrorStackParser%20=%20factory(root.StackFrame);%0A%09%20%20%20%20%7D%0A%09%7D)(undefined,%20function%20ErrorStackParser(StackFrame)%20%7B%0A%09%20%20%20%20'use%20strict';%0A%09%0A%09%20%20%20%20var%20FIREFOX_SAFARI_STACK_REGEXP%20=%20/(%5E%7C@)%5CS+%5C:%5Cd+/;%0A%09%20%20%20%20var%20CHROME_IE_STACK_REGEXP%20=%20/%5E%5Cs*at%20.*(%5CS+%5C:%5Cd+%7C%5C(native%5C))/m;%0A%09%20%20%20%20var%20SAFARI_NATIVE_CODE_REGEXP%20=%20/%5E(eval@)?(%5C%5Bnative%20code%5C%5D)?$/;%0A%09%0A%09%20%20%20%20function%20_map(array,%20fn,%20thisArg)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(typeof%20Array.prototype.map%20===%20'function')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20array.map(fn,%20thisArg);%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20output%20=%20new%20Array(array.length);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20array.length;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20output%5Bi%5D%20=%20fn.call(thisArg,%20array%5Bi%5D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20output;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20function%20_filter(array,%20fn,%20thisArg)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(typeof%20Array.prototype.filter%20===%20'function')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20array.filter(fn,%20thisArg);%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20output%20=%20%5B%5D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20array.length;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(fn.call(thisArg,%20array%5Bi%5D))%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20output.push(array%5Bi%5D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20output;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20function%20_indexOf(array,%20target)%20%7B%0A%09%20%20%20%20%20%20%20%20if%20(typeof%20Array.prototype.indexOf%20===%20'function')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20array.indexOf(target);%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20array.length;%20i++)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(array%5Bi%5D%20===%20target)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20i;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20-1;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D%0A%09%0A%09%20%20%20%20return%20%7B%0A%09%20%20%20%20%20%20%20%20/**%0A%09%20%20%20%20%20%20%20%20%20*%20Given%20an%20Error%20object,%20extract%20the%20most%20information%20from%20it.%0A%09%20%20%20%20%20%20%20%20%20*%0A%09%20%20%20%20%20%20%20%20%20*%20@param%20%7BError%7D%20error%20object%0A%09%20%20%20%20%20%20%20%20%20*%20@return%20%7BArray%7D%20of%20StackFrames%0A%09%20%20%20%20%20%20%20%20%20*/%0A%09%20%20%20%20%20%20%20%20parse:%20function%20ErrorStackParser$$parse(error)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(typeof%20error.stacktrace%20!==%20'undefined'%20%7C%7C%20typeof%20error%5B'opera#sourceloc'%5D%20!==%20'undefined')%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20this.parseOpera(error);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(error.stack%20&&%20error.stack.match(CHROME_IE_STACK_REGEXP))%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20this.parseV8OrIE(error);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(error.stack)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20this.parseFFOrSafari(error);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20Error('Cannot%20parse%20given%20Error%20object');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%7D,%0A%09%0A%09%20%20%20%20%20%20%20%20//%20Separate%20line%20and%20column%20numbers%20from%20a%20string%20of%20the%20form:%20(URI:Line:Column)%0A%09%20%20%20%20%20%20%20%20extractLocation:%20function%20ErrorStackParser$$extractLocation(urlLike)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20Fail-fast%20but%20return%20locations%20like%20%22(native)%22%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(urlLike.indexOf(':')%20===%20-1)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%5BurlLike%5D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20regExp%20=%20/(.+?)(?:%5C:(%5Cd+))?(?:%5C:(%5Cd+))?$/;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20parts%20=%20regExp.exec(urlLike.replace(/%5B%5C(%5C)%5D/g,%20''));%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20%5Bparts%5B1%5D,%20parts%5B2%5D%20%7C%7C%20undefined,%20parts%5B3%5D%20%7C%7C%20undefined%5D;%0A%09%20%20%20%20%20%20%20%20%7D,%0A%09%0A%09%20%20%20%20%20%20%20%20parseV8OrIE:%20function%20ErrorStackParser$$parseV8OrIE(error)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20filtered%20=%20_filter(error.stack.split('%5Cn'),%20function%20(line)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20!!line.match(CHROME_IE_STACK_REGEXP);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D,%20this);%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20_map(filtered,%20function%20(line)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(line.indexOf('(eval%20')%20%3E%20-1)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20Throw%20away%20eval%20information%20until%20we%20implement%20stacktrace.js/stackframe#8%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20line%20=%20line.replace(/eval%20code/g,%20'eval').replace(/(%5C(eval%20at%20%5B%5E%5C()%5D*)%7C(%5C)%5C,.*$)/g,%20'');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20tokens%20=%20line.replace(/%5E%5Cs+/,%20'').replace(/%5C(eval%20code/g,%20'(').split(/%5Cs+/).slice(1);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20locationParts%20=%20this.extractLocation(tokens.pop());%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20functionName%20=%20tokens.join('%20')%20%7C%7C%20undefined;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20fileName%20=%20_indexOf(%5B'eval',%20'%3Canonymous%3E'%5D,%20locationParts%5B0%5D)%20%3E%20-1%20?%20undefined%20:%20locationParts%5B0%5D;%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20new%20StackFrame(functionName,%20undefined,%20fileName,%20locationParts%5B1%5D,%20locationParts%5B2%5D,%20line);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D,%20this);%0A%09%20%20%20%20%20%20%20%20%7D,%0A%09%0A%09%20%20%20%20%20%20%20%20parseFFOrSafari:%20function%20ErrorStackParser$$parseFFOrSafari(error)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20filtered%20=%20_filter(error.stack.split('%5Cn'),%20function%20(line)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20!line.match(SAFARI_NATIVE_CODE_REGEXP);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D,%20this);%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20_map(filtered,%20function%20(line)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20Throw%20away%20eval%20information%20until%20we%20implement%20stacktrace.js/stackframe#8%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(line.indexOf('%20%3E%20eval')%20%3E%20-1)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20line%20=%20line.replace(/%20line%20(%5Cd+)(?:%20%3E%20eval%20line%20%5Cd+)*%20%3E%20eval%5C:%5Cd+%5C:%5Cd+/g,%20':$1');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(line.indexOf('@')%20===%20-1%20&&%20line.indexOf(':')%20===%20-1)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20Safari%20eval%20frames%20only%20have%20function%20names%20and%20nothing%20else%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20new%20StackFrame(line);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20tokens%20=%20line.split('@');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20locationParts%20=%20this.extractLocation(tokens.pop());%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20functionName%20=%20tokens.join('@')%20%7C%7C%20undefined;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20new%20StackFrame(functionName,%20undefined,%20locationParts%5B0%5D,%20locationParts%5B1%5D,%20locationParts%5B2%5D,%20line);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D,%20this);%0A%09%20%20%20%20%20%20%20%20%7D,%0A%09%0A%09%20%20%20%20%20%20%20%20parseOpera:%20function%20ErrorStackParser$$parseOpera(e)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(!e.stacktrace%20%7C%7C%20e.message.indexOf('%5Cn')%20%3E%20-1%20&&%20e.message.split('%5Cn').length%20%3E%20e.stacktrace.split('%5Cn').length)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20this.parseOpera9(e);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(!e.stack)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20this.parseOpera10(e);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20this.parseOpera11(e);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%7D,%0A%09%0A%09%20%20%20%20%20%20%20%20parseOpera9:%20function%20ErrorStackParser$$parseOpera9(e)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20lineRE%20=%20/Line%20(%5Cd+).*script%20(?:in%20)?(%5CS+)/i;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20lines%20=%20e.message.split('%5Cn');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20result%20=%20%5B%5D;%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20for%20(var%20i%20=%202,%20len%20=%20lines.length;%20i%20%3C%20len;%20i%20+=%202)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20match%20=%20lineRE.exec(lines%5Bi%5D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(match)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20result.push(new%20StackFrame(undefined,%20undefined,%20match%5B2%5D,%20match%5B1%5D,%20undefined,%20lines%5Bi%5D));%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20result;%0A%09%20%20%20%20%20%20%20%20%7D,%0A%09%0A%09%20%20%20%20%20%20%20%20parseOpera10:%20function%20ErrorStackParser$$parseOpera10(e)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20lineRE%20=%20/Line%20(%5Cd+).*script%20(?:in%20)?(%5CS+)(?::%20In%20function%20(%5CS+))?$/i;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20lines%20=%20e.stacktrace.split('%5Cn');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20result%20=%20%5B%5D;%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20for%20(var%20i%20=%200,%20len%20=%20lines.length;%20i%20%3C%20len;%20i%20+=%202)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20match%20=%20lineRE.exec(lines%5Bi%5D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(match)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20result.push(new%20StackFrame(match%5B3%5D%20%7C%7C%20undefined,%20undefined,%20match%5B2%5D,%20match%5B1%5D,%20undefined,%20lines%5Bi%5D));%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20result;%0A%09%20%20%20%20%20%20%20%20%7D,%0A%09%0A%09%20%20%20%20%20%20%20%20//%20Opera%2010.65+%20Error.stack%20very%20similar%20to%20FF/Safari%0A%09%20%20%20%20%20%20%20%20parseOpera11:%20function%20ErrorStackParser$$parseOpera11(error)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20filtered%20=%20_filter(error.stack.split('%5Cn'),%20function%20(line)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20!!line.match(FIREFOX_SAFARI_STACK_REGEXP)%20&&%20!line.match(/%5EError%20created%20at/);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D,%20this);%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return%20_map(filtered,%20function%20(line)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20tokens%20=%20line.split('@');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20locationParts%20=%20this.extractLocation(tokens.pop());%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20functionCall%20=%20tokens.shift()%20%7C%7C%20'';%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20functionName%20=%20functionCall.replace(/%3Canonymous%20function(:%20(%5Cw+))?%3E/,%20'$2').replace(/%5C(%5B%5E%5C)%5D*%5C)/g,%20'')%20%7C%7C%20undefined;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20argsRaw;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(functionCall.match(/%5C((%5B%5E%5C)%5D*)%5C)/))%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20argsRaw%20=%20functionCall.replace(/%5E%5B%5E%5C(%5D+%5C((%5B%5E%5C)%5D*)%5C)$/,%20'$1');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20args%20=%20argsRaw%20===%20undefined%20%7C%7C%20argsRaw%20===%20'%5Barguments%20not%20available%5D'%20?%20undefined%20:%20argsRaw.split(',');%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20new%20StackFrame(functionName,%20args,%20locationParts%5B0%5D,%20locationParts%5B1%5D,%20locationParts%5B2%5D,%20line);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D,%20this);%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%7D;%0A%09%7D);%0A%0A/***/%20%7D,%0A%0A/***/%20682:%0A/***/%20function(module,%20exports,%20__webpack_require__)%20%7B%0A%0A%09%22use%20strict%22;%0A%09%0A%09Object.defineProperty(exports,%20%22__esModule%22,%20%7B%0A%09%20%20%20%20value:%20true%0A%09%7D);%0A%09%0A%09var%20_underscore%20=%20__webpack_require__(6);%0A%09%0A%09var%20_underscore2%20=%20_interopRequireDefault(_underscore);%0A%09%0A%09var%20_config%20=%20__webpack_require__(4);%0A%09%0A%09var%20_config2%20=%20_interopRequireDefault(_config);%0A%09%0A%09function%20_interopRequireDefault(obj)%20%7B%20return%20obj%20&&%20obj.__esModule%20?%20obj%20:%20%7B%20default:%20obj%20%7D;%20%7D%0A%09%0A%09class%20RoundTripMessageWrapper%20%7B%0A%09%20%20%20%20constructor(target,%20connectionName)%20%7B%0A%09%20%20%20%20%20%20%20%20var%20onMessage,%20postMessage,%20targetHref,%20close;%0A%09%0A%09%20%20%20%20%20%20%20%20var%20userPassedInFunctions%20=%20target.onMessage%20&&%20target.postMessage;%0A%09%20%20%20%20%20%20%20%20var%20targetIsWorkerGlobalScope%20=%20typeof%20DedicatedWorkerGlobalScope%20!==%20%22undefined%22%20&&%20target%20instanceof%20DedicatedWorkerGlobalScope;%0A%09%20%20%20%20%20%20%20%20var%20targetIsWebWorker%20=%20typeof%20Worker%20!==%20%22undefined%22%20&&%20target%20instanceof%20Worker;%0A%09%20%20%20%20%20%20%20%20//%20do%20this%20rather%20than%20%60instanceof%20Window%60%20because%20sometimes%20the%20constructor%20is%20a%20different%0A%09%20%20%20%20%20%20%20%20//%20%60Window%60%20object%20I%20think%20(probalby%20the%20Window%20object%20of%20the%20parent%20frame)%0A%09%20%20%20%20%20%20%20%20var%20targetIsWindow%20=%20target.constructor.toString().indexOf(%22function%20Window()%20%7B%20%5Bnative%20code%5D%20%7D%22)%20!==%20-1;%0A%09%20%20%20%20%20%20%20%20if%20(userPassedInFunctions)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20onMessage%20=%20target.onMessage;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20postMessage%20=%20target.postMessage;%0A%09%20%20%20%20%20%20%20%20%7D%20else%20if%20(targetIsWorkerGlobalScope)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20onMessage%20=%20function%20(callback)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20target.addEventListener(%22message%22,%20callback);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20close%20=%20()%20=%3E%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20target.removeEventListener(%22message%22,%20this._handle);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20postMessage%20=%20function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20target.postMessage.apply(null,%20arguments);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%7D%20else%20if%20(targetIsWebWorker)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20onMessage%20=%20function%20(callback)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20target.onmessage%20=%20callback;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20close%20=%20function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20target.onmessage%20=%20null;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20postMessage%20=%20function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20target.postMessage.apply(target,%20arguments);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%7D%20else%20if%20(targetIsWindow)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20targetHref%20=%20target.location.href;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20onMessage%20=%20function%20(callback)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.addEventListener(%22message%22,%20callback);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20close%20=%20()%20=%3E%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.removeEventListener(%22message%22,%20this._handle);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20postMessage%20=%20function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20target.postMessage.apply(target,%20arguments);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20throw%20Error(%22Unknown%20RoundTripMessageWrapper%20target%22);%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20this.argsForDebugging%20=%20arguments;%0A%09%20%20%20%20%20%20%20%20this._handle%20=%20this._handle.bind(this);%0A%09%20%20%20%20%20%20%20%20onMessage(this._handle);%0A%09%20%20%20%20%20%20%20%20this._connectionName%20=%20connectionName;%0A%09%20%20%20%20%20%20%20%20this._targetHref%20=%20targetHref;%0A%09%20%20%20%20%20%20%20%20this.close%20=%20close;%0A%09%20%20%20%20%20%20%20%20this._postMessage%20=%20data%20=%3E%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(this.postMessageWrapper)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.postMessageWrapper(doPostMessage);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20doPostMessage();%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20%20%20%20%20function%20doPostMessage()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data.timeSent%20=%20new%20Date();%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20postMessage(data,%20targetHref);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%20%20%20%20this._handlers%20=%20%7B%7D;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20_handle(e)%20%7B%0A%09%20%20%20%20%20%20%20%20var%20data%20=%20e.data;%0A%09%20%20%20%20%20%20%20%20if%20(!data.isRoundTripMessage)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20var%20messageType%20=%20data.messageType;%0A%09%20%20%20%20%20%20%20%20var%20handlers%20=%20this._handlers%5BmessageType%5D;%0A%09%0A%09%20%20%20%20%20%20%20%20if%20(_config2.default.logReceivedInspectorMessages)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20timeTaken%20=%20new%20Date().valueOf()%20-%20new%20Date(data.timeSent).valueOf();%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20size%20=%20%22%22;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20var%20content%20=%20%22%22;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20size%20+=%20%22Size:%20%22%20+%20(JSON.stringify(data).length%20/%201024)%20+%20%22KB%22%0A%09%20%20%20%20%20%20%20%20%20%20%20%20//%20content%20=%20data%0A%09%20%20%20%20%20%20%20%20%20%20%20%20console.log(this._connectionName%20+%20%22%20received%22,%20messageType,%20%22took%22,%20timeTaken%20+%20%22ms%22,%20size,%20content);%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20if%20(!handlers)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20return;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20var%20self%20=%20this;%0A%09%20%20%20%20%20%20%20%20var%20callback%20=%20function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20self._postMessage(%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20isRoundTripMessage:%20true,%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20messageType:%20messageType%20+%20data.id,%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20args:%20Array.from(arguments),%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20isResponse:%20true%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%20%20%20%20%7D;%0A%09%0A%09%20%20%20%20%20%20%20%20handlers.forEach(function%20(handler)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20if%20(data.isResponse%20%7C%7C%20!data.hasCallBack)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20handler.apply(null,%20%5B...data.args%5D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20handler.apply(null,%20%5B...data.args,%20callback%5D);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%7D%0A%09%20%20%20%20on(messageType,%20callback)%20%7B%0A%09%20%20%20%20%20%20%20%20var%20handlers%20=%20this._handlers%5BmessageType%5D;%0A%09%20%20%20%20%20%20%20%20if%20(!handlers)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20handlers%20=%20%5B%5D;%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20handlers.push(callback);%0A%09%20%20%20%20%20%20%20%20this._handlers%5BmessageType%5D%20=%20handlers;%0A%09%20%20%20%20%7D%0A%09%20%20%20%20send()%20%7B%0A%09%20%20%20%20%20%20%20%20var%20args%20=%20Array.from(arguments);%0A%09%20%20%20%20%20%20%20%20var%20messageType%20=%20args.shift();%0A%09%20%20%20%20%20%20%20%20var%20canceled%20=%20false;%0A%09%0A%09%20%20%20%20%20%20%20%20var%20callback;%0A%09%20%20%20%20%20%20%20%20var%20hasCallBack%20=%20typeof%20_underscore2.default.last(args)%20===%20%22function%22;%0A%09%20%20%20%20%20%20%20%20if%20(hasCallBack)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20callback%20=%20args.pop();%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20var%20id%20=%20_underscore2.default.uniqueId();%0A%09%0A%09%20%20%20%20%20%20%20%20if%20(hasCallBack)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20this.on(messageType%20+%20id,%20function%20()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(canceled)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return;%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20callback.apply(null,%20arguments);%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%0A%09%20%20%20%20%20%20%20%20this._postMessage(%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20isRoundTripMessage:%20true,%0A%09%20%20%20%20%20%20%20%20%20%20%20%20messageType,%0A%09%20%20%20%20%20%20%20%20%20%20%20%20id,%0A%09%20%20%20%20%20%20%20%20%20%20%20%20args,%0A%09%20%20%20%20%20%20%20%20%20%20%20%20hasCallBack%0A%09%20%20%20%20%20%20%20%20%7D);%0A%09%0A%09%20%20%20%20%20%20%20%20return%20function%20cancel()%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20canceled%20=%20true;%0A%09%20%20%20%20%20%20%20%20%7D;%0A%09%20%20%20%20%7D%0A%09%7D%0A%09exports.default%20=%20RoundTripMessageWrapper;%0A%0A/***/%20%7D,%0A%0A/***/%20875:%0A/***/%20function(module,%20exports,%20__webpack_require__)%20%7B%0A%0A%09%22use%20strict%22;%0A%09%0A%09var%20_resolveFrame%20=%20__webpack_require__(576);%0A%09%0A%09var%20_resolveFrame2%20=%20_interopRequireDefault(_resolveFrame);%0A%09%0A%09var%20_RoundTripMessageWrapper%20=%20__webpack_require__(682);%0A%09%0A%09var%20_RoundTripMessageWrapper2%20=%20_interopRequireDefault(_RoundTripMessageWrapper);%0A%09%0A%09function%20_interopRequireDefault(obj)%20%7B%20return%20obj%20&&%20obj.__esModule%20?%20obj%20:%20%7B%20default:%20obj%20%7D;%20%7D%0A%09%0A%09var%20wrapper%20=%20new%20_RoundTripMessageWrapper2.default(self,%20%22ResolveFrameWorker%22);%0A%09var%20frameResolver%20=%20new%20_resolveFrame2.default(function%20ajax(url)%20%7B%0A%09%20%20%20%20return%20new%20Promise(function%20(resolve,%20reject)%20%7B%0A%09%20%20%20%20%20%20%20%20wrapper.send(%22fetchUrl%22,%20url,%20function%20(text)%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20resolve(text);%0A%09%20%20%20%20%20%20%20%20%7D);%0A%09%20%20%20%20%7D);%0A%09%7D);%0A%09%0A%09wrapper.on(%22resolveFrame%22,%20function%20(frameString,%20callback)%20%7B%0A%09%20%20%20%20frameResolver.resolve(frameString,%20function%20(err,%20res)%20%7B%0A%09%20%20%20%20%20%20%20%20callback(err,%20res);%0A%09%20%20%20%20%7D);%0A%09%7D);%0A%09%0A%09wrapper.on(%22registerDynamicFiles%22,%20function%20(files,%20callback)%20%7B%0A%09%20%20%20%20frameResolver.addFilesToCache(files);%0A%09%20%20%20%20callback();%0A%09%7D);%0A%09%0A%09wrapper.on(%22getSourceFileContent%22,%20function%20(path,%20callback)%20%7B%0A%09%20%20%20%20frameResolver.getSourceFileContent(path,%20callback);%0A%09%7D);%0A%0A/***/%20%7D%0A%0A/******/%20%7D);%0A//#%20sourceMappingURL=resolveFrameWorker.js.map");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function () {
	    var objectHistoryDebugger = {
	        trackAllObjects: true,
	        _specificallyTrackedObjects: [],
	        trackObject: function trackObject(obj) {
	            this._specificallyTrackedObjects.push(obj);
	        },
	        untrackObject: function untrackObject(objToUntrack) {
	            this._specificallyTrackedObjects = this._specificallyTrackedObjects.filter(function (obj) {
	                return obj !== objToUntrack;
	            });
	        },

	        _isTrackingObject: function _isTrackingObject(obj) {
	            if (this.trackAllObjects) {
	                return true;
	            }

	            return this._specificallyTrackedObjects.indexOf(obj) !== -1;
	        }
	    };

	    var isMobile = navigator.userAgent.match(/iPhone|iPad|IEMobile|Android/);
	    var isChrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
	    var isFirefox = /firefox/.test(navigator.userAgent.toLowerCase());
	    var isDesktopChrome = !isMobile && isChrome;
	    var canPrettyPrint = !isMobile && (isChrome || isFirefox);

	    function PropertyHistory(propertyName) {
	        Object.defineProperties(this, {
	            propertyName: {
	                value: propertyName,
	                enumerable: false
	            },
	            fullHistory: {
	                value: [],
	                enumerable: false
	            }
	        });
	    }
	    PropertyHistory.prototype.clone = function () {
	        return {
	            fullHistory: this.fullHistory.slice().map(function (assignment) {
	                return {
	                    value: assignment.value,
	                    stack: assignment.stack.slice()
	                };
	            })
	        };
	    };
	    PropertyHistory.prototype.prettyPrint = function () {
	        if (!canPrettyPrint) {
	            console.error("Pretty print only works in Chrome and Firefox");
	            return;
	        }
	        console.info("Pretty print is asynchronous, so if you're paused in the debugger you first need to continue execution.");

	        var fullHistory = this.clone().fullHistory;
	        var self = this;

	        var framesLeftToResolve = 0;

	        fullHistory.forEach(function (assignment, assignmentIndex) {
	            assignment.stack.forEach(function (frameString, frameIndex) {
	                framesLeftToResolve++;

	                codePreprocessor.resolveFrame(frameString, function (err, resolvedFrame) {
	                    framesLeftToResolve--;

	                    fullHistory[assignmentIndex].stack[frameIndex] = resolvedFrame;

	                    if (framesLeftToResolve === 0) {
	                        console.log("done");
	                        self._log(fullHistory);
	                    }
	                });
	            });
	        });
	    };
	    PropertyHistory.prototype.prettyPrintSynchronously = function () {
	        var hist = this;

	        console.info("Pretty print synchronously will display history right away, but it won't apply source maps to show your original code.");

	        this._log(hist.fullHistory);
	    };
	    PropertyHistory.prototype._log = function (fullHistory) {
	        var mostRecentAssignmentsMessage = "Most recent '" + this.propertyName + "' assignments:";
	        if (isDesktopChrome) {
	            console.group("%c " + mostRecentAssignmentsMessage, "color: red; text-transform: uppercase; font-weight: bold; font-size: 10px");
	        } else {
	            console.log(String.fromCharCode(0x25BC) + " " + mostRecentAssignmentsMessage);
	        }

	        fullHistory.forEach(function (assignment, i) {
	            var frame = assignment.stack[0];
	            if (typeof frame === "string") {
	                console.log("[" + i + "] Set to ", assignment.value, frame);
	            } else {
	                console.log("[" + i + "] Set to ", assignment.value);
	                logFrameObject(frame, false);
	            }

	            if (isDesktopChrome) {
	                console.groupCollapsed("%c MORE", "font-weight: bold; font-size: 7px;color: #777");
	                assignment.stack.forEach(function (frame) {
	                    if (typeof frame === "string") {
	                        console.log(frame);
	                    } else if ((typeof frame === "undefined" ? "undefined" : _typeof(frame)) === "object") {
	                        logFrameObject(frame, true);
	                    }
	                });
	                console.groupEnd();
	            }
	        });
	        if (isDesktopChrome) {
	            console.groupEnd();
	        }

	        function logFrameObject(frame, isDetailed) {
	            var path = frame.fileName.replace(".dontprocess", "");
	            var parts = path.split("/");
	            var fileName = parts[parts.length - 1];
	            console.log("Original location:", fileName + ":" + frame.lineNumber + ":" + frame.columnNumber);
	            if (isDetailed) {
	                var previousLine = frame.prevLines[frame.prevLines.length - 1];
	                var nextLine = frame.nextLines[0];
	                if (previousLine) {
	                    console.log("###", previousLine);
	                }
	                console.log(">>>", frame.line);
	                if (nextLine) {
	                    console.log("###", nextLine);
	                }
	            } else {
	                console.log(frame.line);
	            }
	        }
	    };
	    Object.defineProperty(PropertyHistory.prototype, "clickDotsToPrettyPrintSynchronously", {
	        get: function get() {
	            this.prettyPrintSynchronously();
	            return "Printed to console";
	        },
	        enumerable: true
	    });
	    Object.defineProperty(PropertyHistory.prototype, "clickDotsToPrettyPrint", {
	        get: function get() {
	            this.prettyPrint();
	            return "See console, note pretty print is asynchronous";
	        },
	        enumerable: true
	    });

	    var nativeObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
	    Object.getOwnPropertyNames = function () {
	        // If DevTools calls it we want to show all names because
	        // the __history__ properties should be visible to developer
	        // We are checking stack to do that... works but possibly slow
	        // and could break in future if DevTools/Chrome code changes
	        var stack = Error().stack;
	        var calledFromDevTools = stack.indexOf("_propertyDescriptors.next") !== -1 && stack.indexOf("InjectedScript") !== -1;

	        var names = nativeObjectGetOwnPropertyNames.apply(this, arguments);
	        if (calledFromDevTools) {
	            return names;
	        } else {
	            return names.filter(removeHistoryPropertyNames);
	        }

	        function removeHistoryPropertyNames(name) {
	            return name.indexOf("__history__") === -1;
	        }
	    };

	    var nativeObjectGetOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
	    Object.getOwnPropertyDescriptors = function () {
	        var descriptors = nativeObjectGetOwnPropertyDescriptors.apply(this, arguments);
	        var ret = {};
	        for (key in descriptors) {
	            if (key.indexOf("__history__") === -1) {
	                ret[key] = descriptors[key];
	            }
	        }

	        return ret;
	    };

	    window.__ohdAssign = function (object, propertyName, value) {
	        if (objectHistoryDebugger._isTrackingObject(object)) {
	            var propertyNameString = propertyName.toString();

	            var propertyNameType = typeof propertyName === "undefined" ? "undefined" : _typeof(propertyName);
	            // Either Symbol() or Object(Symbol())
	            var propertyNameIsSymbol = propertyNameType === "symbol" || propertyNameString === "Symbol()";
	            if (!propertyNameIsSymbol) {
	                if (propertyName === null || propertyName === undefined || propertyNameType !== "string") {
	                    propertyName = propertyNameString;
	                }
	            }

	            addToHistory(object, propertyName, value);
	        }

	        return object[propertyName] = value;
	    };

	    window.__ohdMakeObject = function (properties) {
	        var obj = {};
	        var methodProperties = {};
	        for (var i = 0; i < properties.length; i++) {
	            var property = properties[i];
	            var propertyType = property[0];
	            var propertyKey = property[1];
	            if (propertyType === "ObjectProperty") {
	                __ohdAssign(obj, property[1], property[2]);
	            } else if (propertyType === "ObjectMethod") {
	                var propertyKind = property[2];
	                var fn = property[3];
	                if (!methodProperties[propertyKey]) {
	                    methodProperties[propertyKey] = {
	                        enumerable: true,
	                        configurable: true
	                    };
	                }
	                methodProperties[propertyKey][propertyKind] = fn;
	            }
	        }
	        Object.defineProperties(obj, methodProperties);
	        return obj;
	    };

	    window.__ohdDeleteProperty = function (object, propertyName) {
	        addToHistory(object, propertyName, undefined);
	        return delete object[propertyName];
	    };

	    function addToHistory(object, propertyName, value) {
	        var propertyNameString = propertyName.toString();
	        var storagePropName = propertyNameString + "__history__";

	        if (object[storagePropName] === undefined) {
	            Object.defineProperty(object, storagePropName, {
	                value: new PropertyHistory(propertyNameString),
	                enumerable: false,
	                writable: true
	            });
	        }

	        Error.stackTraceLimit = 100;
	        var stack = Error().stack.split("\n");
	        stack = stack.filter(function (frameString) {
	            if (frameString === "Error") {
	                return false;
	            }
	            if (frameString.indexOf("__ohd") !== -1) {
	                return false;
	            }
	            if (frameString.indexOf("<anonymous>:") !== -1) {
	                return false;
	            }
	            if (frameString.indexOf("/ohd.js") !== -1) {
	                return false;
	            }
	            return true;
	        });

	        object[storagePropName].fullHistory.unshift({
	            stack: stack,
	            value: value
	        });

	        if (object[storagePropName].fullHistory.length > 20) {
	            object[storagePropName].fullHistory = object[storagePropName].fullHistory.slice(0, 20);
	        }
	    }

	    // Only needed for tests I think... we can get rid of it once we have
	    // some kind of loader for Karma
	    window.objectHistoryDebugger = objectHistoryDebugger;

	    if (true) {
	        module.exports = objectHistoryDebugger;
	    }
	})();

/***/ }
/******/ ])
});
;