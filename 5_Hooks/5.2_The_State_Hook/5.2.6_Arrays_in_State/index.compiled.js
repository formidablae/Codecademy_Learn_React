(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        "use strict";

        function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = GroceryCart;

        var _react = _interopRequireWildcard(require("react"));

        var _ItemList = _interopRequireDefault(require("./ItemList"));

        var _storeItems = require("./storeItems");

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

        function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

        function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

        function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

        function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

        function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

        function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

        function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

        function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

        function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

        function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

        function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

        function GroceryCart() {
            // declare and initialize state 
            var _useState = (0, _react.useState)([]),
                _useState2 = _slicedToArray(_useState, 2),
                cart = _useState2[0],
                setCart = _useState2[1];

            var addItem = function addItem(item) {
                // update state 
                setCart(function (cart) {
                    return [].concat(_toConsumableArray(cart), [item]);
                });
            };

            var removeItem = function removeItem(targetIndex) {
                // update state 
                setCart(function (cart) {
                    return cart.filter(function (item, index) {
                        return index !== targetIndex;
                    });
                });
            };

            return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Grocery Cart"), /*#__PURE__*/_react["default"].createElement("ul", null, cart.map(function (item, index) {
                return /*#__PURE__*/_react["default"].createElement("li", {
                    onClick: function onClick() {
                        return removeItem(index);
                    },
                    key: index
                }, item);
            })), /*#__PURE__*/_react["default"].createElement("h2", null, "Produce"), /*#__PURE__*/_react["default"].createElement(_ItemList["default"], {
                items: _storeItems.produce,
                onItemClick: addItem
            }), /*#__PURE__*/_react["default"].createElement("h2", null, "Pantry Items"), /*#__PURE__*/_react["default"].createElement(_ItemList["default"], {
                items: _storeItems.pantryItems,
                onItemClick: addItem
            }));
        }

    }, { "./ItemList": 2, "./storeItems": 4, "react": undefined }], 2: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = ItemList;

        var _react = _interopRequireDefault(require("react"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function ItemList(_ref) {
            var items = _ref.items,
                onItemClick = _ref.onItemClick;

            var handleClick = function handleClick(_ref2) {
                var target = _ref2.target;
                var item = target.value;
                onItemClick(item);
            };

            return /*#__PURE__*/_react["default"].createElement("div", null, items.map(function (item, index) {
                return /*#__PURE__*/_react["default"].createElement("button", {
                    value: item,
                    onClick: handleClick,
                    key: index
                }, item);
            }));
        }

    }, { "react": undefined }], 3: [function (require, module, exports) {
        "use strict";

        var _react = _interopRequireDefault(require("react"));

        var _reactDom = _interopRequireDefault(require("react-dom"));

        var _GroceryCart = _interopRequireDefault(require("./GroceryCart"));

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_GroceryCart["default"], null), document.getElementById("app"));

    }, { "./GroceryCart": 1, "react": undefined, "react-dom": undefined }], 4: [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.pantryItems = exports.produce = void 0;
        var produce = ["Carrots", "Cucumbers", "Bell peppers", "Avocados", "Spinach", "Kale", "Tomatoes", "Bananas", "Lemons", "Ginger", "Onions", "Potatoes", "Sweet potatoes", "Purple cabbage", "Broccoli", "Mushrooms", "Cilantro"];
        exports.produce = produce;
        var pantryItems = ["Chia", "Goji berries", "Peanut butter", "Bread", "Cashews", "Pumpkin seeds", "Peanuts", "Olive oil", "Sesame oil", "Tamari", "Pinto beans", "Black beans", "Coffee", "Rice", "Dates", "Quinoa"];
        exports.pantryItems = pantryItems;

    }, {}]
}, {}, [3]);
