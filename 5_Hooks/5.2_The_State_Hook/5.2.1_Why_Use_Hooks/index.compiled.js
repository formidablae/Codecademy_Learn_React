(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        "use strict";

        function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = AppFunction;

        var _react = _interopRequireWildcard(require("react"));

        var _NewTask = _interopRequireDefault(require("../Presentational/NewTask"));

        var _TasksList = _interopRequireDefault(require("../Presentational/TasksList"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

        function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

        function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

        function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

        function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

        function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

        function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

        function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

        function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

        function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

        function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

        function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

        function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

        function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

        function AppFunction() {
            var _useState = (0, _react.useState)({}),
                _useState2 = _slicedToArray(_useState, 2),
                newTask = _useState2[0],
                setNewTask = _useState2[1];

            var handleChange = function handleChange(_ref) {
                var target = _ref.target;
                var name = target.name,
                    value = target.value;
                setNewTask(function (prev) {
                    return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({
                        id: Date.now()
                    }, name, value));
                });
            };

            var _useState3 = (0, _react.useState)([]),
                _useState4 = _slicedToArray(_useState3, 2),
                allTasks = _useState4[0],
                setAllTasks = _useState4[1];

            var handleSubmit = function handleSubmit(event) {
                event.preventDefault();
                if (!newTask.title) return;
                setAllTasks(function (prev) {
                    return [newTask].concat(_toConsumableArray(prev));
                });
                setNewTask({});
            };

            var handleDelete = function handleDelete(taskIdToRemove) {
                setAllTasks(function (prev) {
                    return prev.filter(function (task) {
                        return task.id !== taskIdToRemove;
                    });
                });
            };

            return /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Tasks"), /*#__PURE__*/_react["default"].createElement(_NewTask["default"], {
                newTask: newTask,
                handleChange: handleChange,
                handleSubmit: handleSubmit
            }), /*#__PURE__*/_react["default"].createElement(_TasksList["default"], {
                allTasks: allTasks,
                handleDelete: handleDelete
            }));
        }

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

        var _AppFunction = _interopRequireDefault(require("./Container/AppFunction"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        // import App from "./Container/AppClass";
        _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_AppFunction["default"], null), document.getElementById("app"));

    }, { "./Container/AppFunction": 1, "react": undefined, "react-dom": undefined }]
}, {}, [4]);
