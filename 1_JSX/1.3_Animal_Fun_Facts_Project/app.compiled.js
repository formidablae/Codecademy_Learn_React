(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var animals = exports.animals = {
            dolphin: {
                image: '/images/dolphin.jpg',
                facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
            },
            lobster: {
                image: '/images/lobster.jpg',
                facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
            },
            starfish: {
                image: '/images/starfish.jpg',
                facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
            }
        };

    }, {}], 2: [function (require, module, exports) {
        'use strict';

        var _animals = require('./animals');

        var _react = require('react');

        var _react2 = _interopRequireDefault(_react);

        var _reactDom = require('react-dom');

        var _reactDom2 = _interopRequireDefault(_reactDom);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        var title = '';
        var showBackground = true;

        var background = _react2.default.createElement('img', {
            className: 'background',
            alt: 'ocean',
            src: '/images/ocean.jpg'
        });

        function displayFact(e) {
            var selectedAnimal = e.target.alt;
            var animalInfo = _animals.animals[selectedAnimal];
            var optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
            var funFact = animalInfo.facts[optionIndex];
            document.getElementById('fact').innerHTML = funFact;
        }

        var images = [];
        for (var animal in _animals.animals) {
            images.push(_react2.default.createElement('img', {
                className: 'animal',
                alt: animal,
                key: animal,
                src: _animals.animals[animal].image,
                'aria-label': animal,
                role: 'button',
                onClick: displayFact
            }));
        }

        var animalFacts = _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h1',
                null,
                title === '' ? 'Click an animal for a fun fact' : title
            ),
            showBackground && background,
            _react2.default.createElement(
                'div',
                { className: 'animals' },
                images
            ),
            _react2.default.createElement('p', { id: 'fact' })
        );

        _reactDom2.default.render(animalFacts, document.getElementById('root'));

    }, { "./animals": 1, "react": undefined, "react-dom": undefined }]
}, {}, [2]);
