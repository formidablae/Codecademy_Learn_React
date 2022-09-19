(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Friend = void 0;

        var _react = _interopRequireDefault(require("react"));

        var _reactDom = _interopRequireDefault(require("react-dom"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        var Friend = function Friend() {
            return /*#__PURE__*/_react["default"].createElement("img", {
                src: "https://content.codecademy.com/courses/React/react_photo-octopus.jpg"
            });
        };

        exports.Friend = Friend;

        _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Friend, null), document.getElementById('app'));

    }, { "react": undefined, "react-dom": undefined }]
}, {}, [1]);
