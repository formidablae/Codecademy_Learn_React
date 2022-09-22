(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        "use strict";

        function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = void 0;

        var _react = _interopRequireWildcard(require("react"));

        var _NewTask = _interopRequireDefault(require("../Presentational/NewTask"));

        var _TasksList = _interopRequireDefault(require("../Presentational/TasksList"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

        function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

        function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

        function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

        function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

        function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

        function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

        function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

        function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

        function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

        function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

        function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

        function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

        function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

        function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

        function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })); return true; } catch (e) { return false; } }

        function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

        var AppClass = /*#__PURE__*/function (_Component) {
            _inherits(AppClass, _Component);

            var _super = _createSuper(AppClass);

            function AppClass(props) {
                var _this;

                _classCallCheck(this, AppClass);

                _this = _super.call(this, props);
                _this.state = {
                    newTask: {},
                    allTasks: []
                };
                _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
                _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
                _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
                return _this;
            }

            _createClass(AppClass, [{
                key: "handleChange",
                value: function handleChange(_ref) {
                    var target = _ref.target;
                    var name = target.name,
                        value = target.value;
                    this.setState(function (prevState) {
                        var _objectSpread2;

                        return _objectSpread(_objectSpread({}, prevState), {}, {
                            newTask: _objectSpread(_objectSpread({}, prevState.newTask), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, name, value), _defineProperty(_objectSpread2, "id", Date.now()), _objectSpread2))
                        });
                    });
                }
            }, {
                key: "handleSubmit",
                value: function handleSubmit(event) {
                    event.preventDefault();
                    if (!this.state.newTask.title) return;
                    this.setState(function (prevState) {
                        return {
                            allTasks: [prevState.newTask].concat(_toConsumableArray(prevState.allTasks)),
                            newTask: {}
                        };
                    });
                }
            }, {
                key: "handleDelete",
                value: function handleDelete(taskIdToRemove) {
                    this.setState(function (prevState) {
                        return _objectSpread(_objectSpread({}, prevState), {}, {
                            allTasks: prevState.allTasks.filter(function (task) {
                                return task.id !== taskIdToRemove;
                            })
                        });
                    });
                }
            }, {
                key: "render",
                value: function render() {
                    return /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Tasks"), /*#__PURE__*/_react["default"].createElement(_NewTask["default"], {
                        newTask: this.state.newTask,
                        handleChange: this.handleChange,
                        handleSubmit: this.handleSubmit
                    }), /*#__PURE__*/_react["default"].createElement(_TasksList["default"], {
                        allTasks: this.state.allTasks,
                        handleDelete: this.handleDelete
                    }));
                }
            }]);

            return AppClass;
        }(_react.Component);

        exports["default"] = AppClass;

    }, { "../Presentational/NewTask": 2, "../Presentational/TasksList": 3, "react": undefined }], 2: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = NewTask;

        var _react = _interopRequireDefault(require("react"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function NewTask(_ref) {
            var newTask = _ref.newTask,
                handleChange = _ref.handleChange,
                handleSubmit = _ref.handleSubmit;
            return /*#__PURE__*/_react["default"].createElement("form", {
                onSubmit: handleSubmit
            }, /*#__PURE__*/_react["default"].createElement("input", {
                name: "title",
                placeholder: "New task",
                value: newTask.title || "",
                onChange: handleChange
            }), !newTask.title ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("textarea", {
                name: "description",
                placeholder: "Details...",
                value: newTask.description || "",
                onChange: handleChange
            }), /*#__PURE__*/_react["default"].createElement("button", {
                type: "submit"
            }, "Add Task")));
        }

    }, { "react": undefined }], 3: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = TasksList;

        var _react = _interopRequireDefault(require("react"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function TasksList(_ref) {
            var allTasks = _ref.allTasks,
                handleDelete = _ref.handleDelete;
            return /*#__PURE__*/_react["default"].createElement("ul", null, allTasks.map(function (_ref2) {
                var title = _ref2.title,
                    description = _ref2.description,
                    id = _ref2.id;
                return /*#__PURE__*/_react["default"].createElement("li", {
                    key: id
                }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, title), /*#__PURE__*/_react["default"].createElement("button", {
                    onClick: function onClick() {
                        return handleDelete(id);
                    }
                }, "X")), !description ? null : /*#__PURE__*/_react["default"].createElement("p", null, description));
            }));
        }

    }, { "react": undefined }], 4: [function (require, module, exports) {
        "use strict";

        var _react = _interopRequireDefault(require("react"));

        var _reactDom = _interopRequireDefault(require("react-dom"));

        var _AppClass = _interopRequireDefault(require("./Container/AppClass"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        // import App from "./Container/AppFunction";
        _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_AppClass["default"], null), document.getElementById("app"));

    }, { "./Container/AppClass": 1, "react": undefined, "react-dom": undefined }]
}, {}, [4]);
