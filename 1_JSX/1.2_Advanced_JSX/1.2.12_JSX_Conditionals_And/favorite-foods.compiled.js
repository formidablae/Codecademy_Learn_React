(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        'use strict';

        var _react = require('react');

        var _react2 = _interopRequireDefault(_react);

        var _reactDom = require('react-dom');

        var _reactDom2 = _interopRequireDefault(_reactDom);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        // judgmental will be true half the time.
        var judgmental = Math.random() < 0.5;

        var favoriteFoods = _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h1',
                null,
                'My Favorite Foods'
            ),
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'Sushi Burrito'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'Rhubarb Pie'
                ),
                !judgmental && _react2.default.createElement(
                    'li',
                    null,
                    'Nacho Cheez Straight Out The Jar'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'Broiled Grapefruit'
                )
            )
        );

        _reactDom2.default.render(favoriteFoods, document.getElementById('app'));

    }, { "react": undefined, "react-dom": undefined }]
}, {}, [1]);
