(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.GuineaPigs = void 0;

        var _react = _interopRequireDefault(require("react"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

        function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

        function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

        function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

        function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

        function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

        function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }

        function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

        var GUINEAPATHS = ['https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg', 'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg', 'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg', 'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'];

        var GuineaPigs = /*#__PURE__*/function (_React$Component) {
            _inherits(GuineaPigs, _React$Component);

            var _super = _createSuper(GuineaPigs);

            function GuineaPigs(props) {
                var _this;

                _classCallCheck(this, GuineaPigs);

                _this = _super.call(this, props);
                _this.state = {
                    currentGP: 0
                };
                _this.interval = null;
                _this.nextGP = _this.nextGP.bind(_assertThisInitialized(_this));
                return _this;
            }

            _createClass(GuineaPigs, [{
                key: "nextGP",
                value: function nextGP() {
                    var current = this.state.currentGP;
                    var next = ++current % GUINEAPATHS.length;
                    this.setState({
                        currentGP: next
                    });
                }
            }, {
                key: "componentDidMount",
                value: function componentDidMount() {
                    this.interval = setInterval(this.nextGP, 5000);
                }
            }, {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    clearInterval(this.interval);
                }
            }, {
                key: "render",
                value: function render() {
                    var src = GUINEAPATHS[this.state.currentGP];
                    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Cute Guinea Pigs"), /*#__PURE__*/_react["default"].createElement("img", {
                        src: src
                    }));
                }
            }]);

            return GuineaPigs;
        }(_react["default"].Component);

        exports.GuineaPigs = GuineaPigs;

    }, { "react": undefined }]
}, {}, [1]);
