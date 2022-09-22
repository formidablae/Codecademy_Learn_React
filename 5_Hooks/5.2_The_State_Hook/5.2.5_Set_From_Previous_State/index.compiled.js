(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = App;

        var _react = _interopRequireDefault(require("react"));

        var _QuizNavBar = _interopRequireDefault(require("./QuizNavBar"));

        var _dataModel = require("./dataModel");

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function App() {
            return /*#__PURE__*/_react["default"].createElement(_QuizNavBar["default"], {
                questions: _dataModel.questions
            });
        }

    }, { "./QuizNavBar": 2, "./dataModel": 3, "react": undefined }], 2: [function (require, module, exports) {
        "use strict";

        function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = QuizNavBar;

        var _react = _interopRequireWildcard(require("react"));

        function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

        function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

        function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

        function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

        function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

        function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

        function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

        function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

        function QuizNavBar(_ref) {
            var questions = _ref.questions;

            var _useState = (0, _react.useState)(0),
                _useState2 = _slicedToArray(_useState, 2),
                questionIndex = _useState2[0],
                setQuestionIndex = _useState2[1]; // define event handlers 


            var goBack = function goBack() {
                setQuestionIndex(function (prevQuestionIndex) {
                    return prevQuestionIndex - 1;
                });
            };

            var goToNext = function goToNext() {
                setQuestionIndex(function (prevQuestionIndex) {
                    return prevQuestionIndex + 1;
                });
            }; // determine if on the first question or not 


            var onFirstQuestion = questionIndex === 0;
            var onLastQuestion = questionIndex === questions.length - 1;
            return /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("span", null, "Question #", questionIndex + 1), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
                disabled: onFirstQuestion,
                onClick: goBack
            }, "Go Back"), /*#__PURE__*/_react["default"].createElement("button", {
                disabled: onLastQuestion,
                onClick: goToNext
            }, "Next Question")));
        }

    }, { "react": undefined }], 3: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.questions = void 0;
        var questions = [{
            id: 123,
            prompt: "What two things can you never eat for breakfast?",
            answer: "Lunch and dinner"
        }, {
            id: 124,
            prompt: "What word is spelled incorrectly in every single dictionary?",
            answer: "Incorrectly"
        }, {
            id: 125,
            prompt: "What do you answer every day, even though it never asks you a question?",
            answer: "Your phone"
        }, {
            id: 126,
            prompt: "What starts with “e” and ends with “e” but only has one letter in it?",
            answer: "An envelope."
        }, {
            id: 127,
            prompt: "What has a face and two hands, but no arms or legs?",
            answer: "A clock"
        }]; // Shout out to [Thought Catalog](https://thoughtcatalog.com/january-nelson/2018/03/65-riddles-for-kids-guaranteed-to-stump-you-too/) for these important questions :)

        exports.questions = questions;

    }, {}], 4: [function (require, module, exports) {
        "use strict";

        var _react = _interopRequireDefault(require("react"));

        var _reactDom = _interopRequireDefault(require("react-dom"));

        var _App = _interopRequireDefault(require("./App"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_App["default"], null), document.getElementById("app"));

    }, { "./App": 1, "react": undefined, "react-dom": undefined }]
}, {}, [4]);
