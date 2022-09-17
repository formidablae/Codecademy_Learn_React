(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        "use strict";

        /**
         * Uses the react-transform babel plugin
         * to rewrite modules so that all react components are
         * exported.
         *
         * This allows us to access those components and test them.
         *
         * ex:
         *
         * // component.js
         *
         * var MyComponent = React.createClass({});
         *
         * // component-test.js
         *
         * var components = require('../component.js');
         *
         * console.log(components.__ReactComponents.MyComponent);
         *
         */

        module.exports = function createExport(_ref) {
            var locals = _ref.locals;


            return function (ReactClass, componentId) {

                if (!locals[0].exports) {
                    locals[0].exports = {};
                }

                if (!locals[0].exports.__ReactComponents) {
                    locals[0].exports.__ReactComponents = [];
                }

                locals[0].exports.__ReactComponents.push(ReactClass);

                return ReactClass;
            };
        };

    }, {}], 2: [function (require, module, exports) {
        'use strict';

        var _react2 = require('react');

        var _react3 = _interopRequireDefault(_react2);

        var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');

        var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);

        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        var _reactDom = require('react-dom');

        var _reactDom2 = _interopRequireDefault(_reactDom);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _components = {
            QuoteMaker: {
                displayName: 'QuoteMaker'
            }
        };

        var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
            filename: '/home/ccuser/workspace/react-101-react-components-advanced-jsx-render-multiline-jsx-v2/QuoteMaker.js',
            components: _components,
            locals: [module],
            imports: [_react3.default]
        });

        function _wrapComponent(id) {
            return function (Component) {
                return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
            };
        }

        var QuoteMaker = _wrapComponent('QuoteMaker')(function (_React$Component) {
            _inherits(QuoteMaker, _React$Component);

            function QuoteMaker() {
                _classCallCheck(this, QuoteMaker);

                return _possibleConstructorReturn(this, (QuoteMaker.__proto__ || Object.getPrototypeOf(QuoteMaker)).apply(this, arguments));
            }

            _createClass(QuoteMaker, [{
                key: 'render',
                value: function render() {
                    return _react3.default.createElement(
                        'blockquote',
                        null,
                        _react3.default.createElement(
                            'p',
                            null,
                            'The world is full of objects, more or less interesting; I do not wish to add any more.'
                        ),
                        _react3.default.createElement(
                            'cite',
                            null,
                            _react3.default.createElement(
                                'a',
                                {
                                    target: '_blank',
                                    href: 'https://en.wikipedia.org/wiki/Douglas_Huebler'
                                },
                                'Douglas Huebler'
                            )
                        )
                    );
                }
            }]);

            return QuoteMaker;
        }(_react3.default.Component));

        ;

        _reactDom2.default.render(_react3.default.createElement(QuoteMaker, null), document.getElementById('app'));

    }, { "/home/ccuser/.babelscripts/react-transform-component-exports": 1, "react": undefined, "react-dom": undefined }], 3: [function (require, module, exports) {
        "use strict";

        var _react2 = require("react");

        var _react3 = _interopRequireDefault(_react2);

        var _reactTransformComponentExports = require("/home/ccuser/.babelscripts/react-transform-component-exports");

        var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);

        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        var _reactDom = require("react-dom");

        var _reactDom2 = _interopRequireDefault(_reactDom);

        var _QuoteMaker = require("./QuoteMaker");

        var _QuoteMaker2 = _interopRequireDefault(_QuoteMaker);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _components = {
            App: {
                displayName: "App"
            }
        };

        var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
            filename: "/home/ccuser/workspace/react-101-react-components-advanced-jsx-render-multiline-jsx-v2/app.js",
            components: _components,
            locals: [module],
            imports: [_react3.default]
        });

        function _wrapComponent(id) {
            return function (Component) {
                return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
            };
        }

        var App = _wrapComponent("App")(function (_React$Component) {
            _inherits(App, _React$Component);

            function App() {
                _classCallCheck(this, App);

                return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
            }

            _createClass(App, [{
                key: "render",
                value: function render() {
                    return _react3.default.createElement(
                        "blockquote",
                        null,
                        _react3.default.createElement(
                            "p",
                            null,
                            "What is important now is to recover our senses."
                        ),
                        _react3.default.createElement(
                            "cite",
                            null,
                            _react3.default.createElement(
                                "a",
                                {
                                    target: "_blank",
                                    href: "https://en.wikipedia.org/wiki/Susan_Sontag"
                                },
                                "Susan Sontag"
                            )
                        )
                    );
                }
            }]);

            return App;
        }(_react3.default.Component));

        _reactDom2.default.render(_react3.default.createElement(App, null), document.getElementById("app"));

    }, { "./QuoteMaker": 2, "/home/ccuser/.babelscripts/react-transform-component-exports": 1, "react": undefined, "react-dom": undefined }]
}, {}, [3]);
