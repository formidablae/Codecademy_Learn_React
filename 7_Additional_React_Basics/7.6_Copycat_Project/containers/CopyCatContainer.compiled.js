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
        exports.CopyCat = undefined;

        var _react2 = require('react');

        var _react3 = _interopRequireDefault(_react2);

        var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');

        var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);

        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        var _styles = require('../styles');

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _components = {
            CopyCat: {
                displayName: 'CopyCat'
            }
        };

        var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
            filename: '/home/ccuser/workspace/react-102-advanced-react-copycat/components/CopyCat.js',
            components: _components,
            locals: [module],
            imports: [_react3.default]
        });

        function _wrapComponent(id) {
            return function (Component) {
                return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
            };
        }

        var images = {
            copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
            quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
        };

        var CopyCat = exports.CopyCat = _wrapComponent('CopyCat')(function (_React$Component) {
            _inherits(CopyCat, _React$Component);

            function CopyCat() {
                _classCallCheck(this, CopyCat);

                return _possibleConstructorReturn(this, (CopyCat.__proto__ || Object.getPrototypeOf(CopyCat)).apply(this, arguments));
            }

            _createClass(CopyCat, [{
                key: 'render',
                value: function render() {
                    return _react3.default.createElement(
                        'div',
                        { style: _styles.styles.divStyles },
                        _react3.default.createElement(
                            'h1',
                            { style: { marginBottom: 80 } },
                            'Copy Cat'
                        ),
                        _react3.default.createElement('input', { type: 'text', value: this.props.input, onChange: this.props.handleChange }),
                        _react3.default.createElement('img', {
                            alt: 'cat',
                            src: this.props.copying ? images.copycat : images.quietcat,
                            onClick: this.props.toggleTape,
                            style: _styles.styles.imgStyles
                        }),
                        _react3.default.createElement(
                            'p',
                            null,
                            this.props.copying && this.props.input
                        )
                    );
                }
            }]);

            return CopyCat;
        }(_react3.default.Component));

    }, { "../styles": 4, "/home/ccuser/.babelscripts/react-transform-component-exports": 1, "react": undefined }], 3: [function (require, module, exports) {
        'use strict';

        var _react2 = require('react');

        var _react3 = _interopRequireDefault(_react2);

        var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');

        var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);

        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        var _reactDom = require('react-dom');

        var _reactDom2 = _interopRequireDefault(_reactDom);

        var _CopyCat = require('../components/CopyCat');

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _components = {
            CopyCatContainer: {
                displayName: 'CopyCatContainer'
            }
        };

        var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
            filename: '/home/ccuser/workspace/react-102-advanced-react-copycat/containers/CopyCatContainer.js',
            components: _components,
            locals: [module],
            imports: [_react3.default]
        });

        function _wrapComponent(id) {
            return function (Component) {
                return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
            };
        }

        var images = {
            copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
            quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
        };

        var CopyCatContainer = _wrapComponent('CopyCatContainer')(function (_React$Component) {
            _inherits(CopyCatContainer, _React$Component);

            function CopyCatContainer(props) {
                _classCallCheck(this, CopyCatContainer);

                var _this = _possibleConstructorReturn(this, (CopyCatContainer.__proto__ || Object.getPrototypeOf(CopyCatContainer)).call(this, props));

                _this.state = {
                    copying: true,
                    input: ''
                };

                _this.toggleTape = _this.toggleTape.bind(_this);
                _this.handleChange = _this.handleChange.bind(_this);
                return _this;
            }

            _createClass(CopyCatContainer, [{
                key: 'toggleTape',
                value: function toggleTape() {
                    this.setState({ copying: !this.state.copying });
                }
            }, {
                key: 'handleChange',
                value: function handleChange(e) {
                    this.setState({ input: e.target.value });
                }
            }, {
                key: 'render',
                value: function render() {
                    return _react3.default.createElement(_CopyCat.CopyCat, {
                        copying: this.state.copying,
                        toggleTape: this.toggleTape,
                        input: this.state.input,
                        handleChange: this.handleChange
                    });
                }
            }]);

            return CopyCatContainer;
        }(_react3.default.Component));

        _reactDom2.default.render(_react3.default.createElement(CopyCatContainer, null), document.getElementById('app'));

    }, { "../components/CopyCat": 2, "/home/ccuser/.babelscripts/react-transform-component-exports": 1, "react": undefined, "react-dom": undefined }], 4: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
        var fontSize = '5vh';
        var backgroundColor = '#282c34';
        var minHeight = '100vh';
        var minWidth = 400;
        var display = 'flex';
        var flexDirection = 'column';
        var alignItems = 'center';
        var justifyContent = 'center';
        var color = 'white';
        var marginTop = '20px';
        var width = '50%';

        var divStyles = {
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: color,
            backgroundColor: backgroundColor,
            minHeight: minHeight,
            minWidth: minWidth,
            display: display,
            flexDirection: flexDirection,
            alignItems: alignItems,
            justifyContent: justifyContent
        };

        var imgStyles = {
            marginTop: marginTop,
            width: width
        };

        var styles = exports.styles = {
            divStyles: divStyles,
            imgStyles: imgStyles
        };

    }, {}]
}, {}, [3]);
