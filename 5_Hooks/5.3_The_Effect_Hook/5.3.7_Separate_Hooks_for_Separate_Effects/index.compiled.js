(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        "use strict";

        function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = SocialNetwork;

        var _react = _interopRequireWildcard(require("react"));

        var _fetch = require("./mockBackend/fetch");

        function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

        function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

        function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

        function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

        function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

        function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

        function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

        function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

        function SocialNetwork() {
            var _useState = (0, _react.useState)(null),
                _useState2 = _slicedToArray(_useState, 2),
                menu = _useState2[0],
                setMenu = _useState2[1];

            (0, _react.useEffect)(function () {
                (0, _fetch.get)('/menu').then(function (_ref) {
                    var data = _ref.data;
                    setMenu(data);
                });
            }, []);

            var _useState3 = (0, _react.useState)(null),
                _useState4 = _slicedToArray(_useState3, 2),
                newsFeed = _useState4[0],
                setNewsFeed = _useState4[1];

            (0, _react.useEffect)(function () {
                (0, _fetch.get)('/news-feed').then(function (_ref2) {
                    var data = _ref2.data;
                    setNewsFeed(data);
                });
            }, []);

            var _useState5 = (0, _react.useState)(null),
                _useState6 = _slicedToArray(_useState5, 2),
                friends = _useState6[0],
                setFriends = _useState6[1];

            (0, _react.useEffect)(function () {
                (0, _fetch.get)('/friends').then(function (_ref3) {
                    var data = _ref3.data;
                    setFriends(data);
                });
            }, []);
            return /*#__PURE__*/_react["default"].createElement("div", {
                className: "App"
            }, /*#__PURE__*/_react["default"].createElement("h1", null, "My Network"), !menu ? /*#__PURE__*/_react["default"].createElement("p", null, "Loading..") : /*#__PURE__*/_react["default"].createElement("nav", null, menu.map(function (menuItem) {
                return /*#__PURE__*/_react["default"].createElement("button", {
                    key: menuItem
                }, menuItem);
            })), /*#__PURE__*/_react["default"].createElement("div", {
                className: "content"
            }, !newsFeed ? /*#__PURE__*/_react["default"].createElement("p", null, "Loading..") : /*#__PURE__*/_react["default"].createElement("section", null, newsFeed.map(function (_ref4) {
                var id = _ref4.id,
                    title = _ref4.title,
                    message = _ref4.message,
                    imgSrc = _ref4.imgSrc;
                return /*#__PURE__*/_react["default"].createElement("article", {
                    key: id
                }, /*#__PURE__*/_react["default"].createElement("h3", null, title), /*#__PURE__*/_react["default"].createElement("p", null, message), /*#__PURE__*/_react["default"].createElement("img", {
                    src: imgSrc,
                    alt: ""
                }));
            })), !friends ? /*#__PURE__*/_react["default"].createElement("p", null, "Loading..") : /*#__PURE__*/_react["default"].createElement("aside", null, /*#__PURE__*/_react["default"].createElement("ul", null, friends.sort(function (a, b) {
                return a.isOnline && !b.isOnline ? -1 : 0;
            }).map(function (_ref5) {
                var id = _ref5.id,
                    name = _ref5.name,
                    isOnline = _ref5.isOnline;
                return /*#__PURE__*/_react["default"].createElement("li", {
                    key: id,
                    className: isOnline ? 'online' : 'offline'
                }, name);
            })))));
        }

    }, { "./mockBackend/fetch": 4, "react": undefined }], 2: [function (require, module, exports) {
        "use strict";

        var _react = _interopRequireDefault(require("react"));

        var _reactDom = _interopRequireDefault(require("react-dom"));

        var _SocialNetwork = _interopRequireDefault(require("./SocialNetwork"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_SocialNetwork["default"], null), document.getElementById("app"));

    }, { "./SocialNetwork": 1, "react": undefined, "react-dom": undefined }], 3: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = void 0;

        // You don't need to look at this, but you can if you want!
        //
        // In this modele, we use some functions like Math.random(), 
        // Math.floor(), and Array.from() to generate some fake data.
        // When building user interfaces, it can be helpful to 
        // mock out simplified versions of the data that our code
        // will eventually fetch from backend servers
        var getRandomId = function getRandomId() {
            return "".concat(Math.random(), "-").concat(Math.random());
        };

        var getRandomNumber = function getRandomNumber(min, range) {
            return Math.floor(Math.random() * 100 * range / 100) + min;
        };

        var randomFromList = function randomFromList(list) {
            return list[getRandomNumber(0, list.length)];
        };

        var names = ["Anita", "Anima", "Asa", "Asha", "Azami", "Laila", "Haris", "Talia", "Noor", "Malik", "Basia", "Arya", "Duska", "Idris", "Kala", "Kamal", "Baz", "Ken", "Evander", "Kim", "Lina", "Lulu", "Caris", "Nia", "Paz", "Raisa", "Samir", "Zahara"]; // source for names: https://www.mother.ly/life/28-baby-names-that-bridge-cultures-arya-to-zahara

        var getNewsItem = function getNewsItem() {
            return {
                id: getRandomId(),
                title: "Title Placeholder",
                message: "Message about item in the news feed (placeholder)",
                imgSrc: "https://via.placeholder.com/300x100.png?text=News+Feed+Image+Placeholder"
            };
        };

        var getFriend = function getFriend() {
            return {
                id: getRandomId(),
                name: randomFromList(names),
                isOnline: Math.random() < 0.5
            };
        };

        var _default = {
            "/menu": ["Home", "Profile", "Events", "Clubs"],
            "/news-feed": Array.from({
                length: 5
            }, getNewsItem),
            "/friends": Array.from({
                length: 12
            }, getFriend)
        };
        exports["default"] = _default;

    }, {}], 4: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.get = get;

        var _data = _interopRequireDefault(require("./data"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        // You don't need to look at this, but you can if you want!
        // This module exports fake data fetching functionality.
        // In a real app, this would grab data from the internet, but
        // this module just waits a little bit before responding.
        function get(endpoint) {
            var delay = Math.floor(Math.random() * 1000) + 500;
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (!_data["default"].hasOwnProperty(endpoint)) {
                        var validEndpoints = Object.keys(_data["default"]).map(function (endpoint) {
                            return " - \"".concat(endpoint, "\"");
                        }).join("\n ");
                        reject("\"".concat(endpoint, "\" is an invalid endpoint. Try getting data from: \n ").concat(validEndpoints));
                    }

                    var response = {
                        status: 200,
                        data: _data["default"][endpoint]
                    };
                    resolve(response);
                }, delay);
            });
        }

    }, { "./data": 3 }]
}, {}, [2]);
