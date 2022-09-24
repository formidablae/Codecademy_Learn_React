(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        "use strict";

        function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = Forecast;

        var _react = _interopRequireWildcard(require("react"));

        var _fetch = require("./mockBackend/fetch");

        function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

        function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

        function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

        function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

        function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

        function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

        function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

        function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

        function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

        function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

        function Forecast() {
            var _useState = (0, _react.useState)(),
                _useState2 = _slicedToArray(_useState, 2),
                data = _useState2[0],
                setData = _useState2[1];

            var _useState3 = (0, _react.useState)({}),
                _useState4 = _slicedToArray(_useState3, 2),
                notes = _useState4[0],
                setNotes = _useState4[1];

            var _useState5 = (0, _react.useState)('/daily'),
                _useState6 = _slicedToArray(_useState5, 2),
                forecastType = _useState6[0],
                setForecastType = _useState6[1];

            (0, _react.useEffect)(function () {
                alert('Requested data from server...');
                (0, _fetch.get)(forecastType).then(function (response) {
                    alert('Response: ' + JSON.stringify(response, '', 2));
                    setData(response.data);
                });
            }, [forecastType]);

            var handleChange = function handleChange(index) {
                return function (_ref) {
                    var target = _ref.target;
                    return setNotes(function (prev) {
                        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, index, target.value));
                    });
                };
            }; // Just before the existing JSX, use an if block to check if data is falsey.
            // If it is, return the loading paragraph like so:
            // if (!data) {
            //     return <p>Loading...</p>;
            // }


            return /*#__PURE__*/_react["default"].createElement("div", {
                className: "App"
            }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
                onClick: function onClick() {
                    return setForecastType('/daily');
                }
            }, "5-day"), /*#__PURE__*/_react["default"].createElement("button", {
                onClick: function onClick() {
                    return setForecastType('/hourly');
                }
            }, "Today")), /*#__PURE__*/_react["default"].createElement("h1", null, "My Weather Planner"), !data && /*#__PURE__*/_react["default"].createElement("p", null, "Loading..."), data && /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Summary"), /*#__PURE__*/_react["default"].createElement("th", null, "Avg Temp"), /*#__PURE__*/_react["default"].createElement("th", null, "Precip"), /*#__PURE__*/_react["default"].createElement("th", null, "Notes"))), /*#__PURE__*/_react["default"].createElement("tbody", null, data.map(function (item, i) {
                return /*#__PURE__*/_react["default"].createElement("tr", {
                    key: item.id
                }, /*#__PURE__*/_react["default"].createElement("td", null, item.summary), /*#__PURE__*/_react["default"].createElement("td", null, " ", item.temp.avg, "\xB0F"), /*#__PURE__*/_react["default"].createElement("td", null, item.precip, "%"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("input", {
                    value: notes[item.id] || '',
                    onChange: handleChange(item.id)
                })));
            }))));
        }

    }, { "./mockBackend/fetch": 4, "react": undefined }], 2: [function (require, module, exports) {
        "use strict";

        var _react = _interopRequireDefault(require("react"));

        var _reactDom = _interopRequireDefault(require("react-dom"));

        var _Forecast = _interopRequireDefault(require("./Forecast"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_Forecast["default"], null), document.getElementById("app"));

    }, { "./Forecast": 1, "react": undefined, "react-dom": undefined }], 3: [function (require, module, exports) {
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

        var summaries = ["Rainy", "Cloudy", "Partly Cloudy", "Partly Sunny", "Mostly Sunny", "Sunny"];

        var randomFromList = function randomFromList(list) {
            return list[getRandomNumber(0, list.length)];
        };

        var getTemp = function getTemp() {
            var avg = getRandomNumber(60, 30);
            return {
                avg: avg,
                min: avg - 10,
                max: avg + 10
            };
        };

        var getWeatherItem = function getWeatherItem() {
            return {
                id: getRandomId(),
                summary: randomFromList(summaries),
                temp: getTemp(),
                precip: getRandomNumber(0, 100)
            };
        };

        var _default = {
            "/daily": Array.from({
                length: 5
            }, getWeatherItem),
            "/hourly": Array.from({
                length: 24
            }, getWeatherItem)
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
            var delay = Math.floor(Math.random() * 1000);
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
