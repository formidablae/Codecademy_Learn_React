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

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.GuineaPigs = undefined;

        var _react2 = require('react');

        var _react3 = _interopRequireDefault(_react2);

        var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');

        var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);

        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _components = {
            GuineaPigs: {
                displayName: 'GuineaPigs'
            }
        };

        var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
            filename: '/home/ccuser/workspace/react-render-presentational-component-in-container-component/components/GuineaPigs.js',
            components: _components,
            locals: [module],
            imports: [_react3.default]
        });

        function _wrapComponent(id) {
            return function (Component) {
                return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
            };
        }

        var GUINEAPATHS = ['https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg', 'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg', 'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg', 'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'];

        var GuineaPigs = exports.GuineaPigs = _wrapComponent('GuineaPigs')(function (_React$Component) {
            _inherits(GuineaPigs, _React$Component);

            function GuineaPigs(props) {
                _classCallCheck(this, GuineaPigs);

                var _this = _possibleConstructorReturn(this, (GuineaPigs.__proto__ || Object.getPrototypeOf(GuineaPigs)).call(this, props));

                _this.state = { currentGP: 0 };

                _this.interval = null;

                _this.nextGP = _this.nextGP.bind(_this);
                return _this;
            }

            _createClass(GuineaPigs, [{
                key: 'nextGP',
                value: function nextGP() {
                    var current = this.state.currentGP;
                    var next = ++current % GUINEAPATHS.length;
                    this.setState({ currentGP: next });
                }
            }, {
                key: 'componentDidMount',
                value: function componentDidMount() {
                    this.interval = setInterval(this.nextGP, 5000);
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    clearInterval(this.interval);
                }
            }, {
                key: 'render',
                value: function render() {
                    var src = GUINEAPATHS[this.state.currentGP];
                    return _react3.default.createElement(
                        'div',
                        null,
                        _react3.default.createElement(
                            'h1',
                            null,
                            'Cute Guinea Pigs'
                        ),
                        _react3.default.createElement('img', { src: src })
                    );
                }
            }]);

            return GuineaPigs;
        }(_react3.default.Component));

    }, { "/home/ccuser/.babelscripts/react-transform-component-exports": 1, "react": undefined }], 3: [function (require, module, exports) {
        'use strict';

        var _react2 = require('react');

        var _react3 = _interopRequireDefault(_react2);

        var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');

        var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);

        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        var _reactDom = require('react-dom');

        var _reactDom2 = _interopRequireDefault(_reactDom);

        var _GuineaPigs = require('../components/GuineaPigs');

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _components = {
            GuineaPigsContainer: {
                displayName: 'GuineaPigsContainer'
            }
        };

        var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
            filename: '/home/ccuser/workspace/react-render-presentational-component-in-container-component/containers/GuineaPigsContainer.js',
            components: _components,
            locals: [module],
            imports: [_react3.default]
        });

        function _wrapComponent(id) {
            return function (Component) {
                return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
            };
        }

        var GUINEAPATHS = ['https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg', 'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg', 'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg', 'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'];

        var GuineaPigsContainer = _wrapComponent('GuineaPigsContainer')(function (_React$Component) {
            _inherits(GuineaPigsContainer, _React$Component);

            function GuineaPigsContainer(props) {
                _classCallCheck(this, GuineaPigsContainer);

                var _this = _possibleConstructorReturn(this, (GuineaPigsContainer.__proto__ || Object.getPrototypeOf(GuineaPigsContainer)).call(this, props));

                _this.state = { currentGP: 0 };

                _this.interval = null;

                _this.nextGP = _this.nextGP.bind(_this);
                return _this;
            }

            _createClass(GuineaPigsContainer, [{
                key: 'nextGP',
                value: function nextGP() {
                    var current = this.state.currentGP;
                    var next = ++current % GUINEAPATHS.length;
                    this.setState({ currentGP: next });
                }
            }, {
                key: 'componentDidMount',
                value: function componentDidMount() {
                    this.interval = setInterval(this.nextGP, 5000);
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    clearInterval(this.interval);
                }
            }, {
                key: 'render',
                value: function render() {
                    var src = GUINEAPATHS[this.state.currentGP];
                    return _react3.default.createElement(_GuineaPigs.GuineaPigs, { src: src });
                }
            }]);

            return GuineaPigsContainer;
        }(_react3.default.Component));

        _reactDom2.default.render(_react3.default.createElement(GuineaPigsContainer, null), document.getElementById('app'));

    }, { "../components/GuineaPigs": 2, "/home/ccuser/.babelscripts/react-transform-component-exports": 1, "react": undefined, "react-dom": undefined }]
}, {}, [3]);
