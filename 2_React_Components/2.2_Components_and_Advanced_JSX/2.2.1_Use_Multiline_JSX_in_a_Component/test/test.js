const shallow = require('enzyme/shallow');

describe('', function () {
    it('', function () {
        let wrapper;
        try {
            const appModule = require('../app');
            const components = appModule.__ReactComponents;
            const TestedComponent = components[0];
            wrapper = shallow(<TestedComponent />);
        } catch (err) {
            wrapper = shallow(<div />);
        }

        expect(
            wrapper.find('blockquote'),
            'In app.js, your component should render a `<blockquote></blockquote>`.'
        ).to.have.length(1);
        expect(
            wrapper.find('blockquote').find('p'),
            "In app.js, your component's `<blockquote></blockquote>` should contain one nested `<p></p>`."
        ).to.have.length(1);
        expect(
            wrapper.find('p').text(),
            "In app.js, your component's `<p></p>` should contain text."
        ).to.have.length.above(0);
        expect(
            wrapper.find('blockquote').find('cite'),
            "In app.js, your component's `<blockquote></blockquote>` should contain one nested `<cite></cite>`."
        ).to.have.length(1);
        expect(
            wrapper.find('cite').find('a'),
            "In app.js, your component's `<cite></cite>` should contain one nested `<a></a>`."
        ).to.have.length(1);
        expect(
            wrapper.find('cite').find('a').text(),
            "In app.js, your component's `<a></a>` should contain text."
        ).to.have.length.above(0);
        expect(
            wrapper.find('cite').find('a[href]'),
            "In app.js, your component's `<a></a>` should have an `href` attribute."
        ).to.have.length(1);
        expect(
            wrapper.find('cite').find('a[target="_blank"]'),
            'In app.js, your component\'s `<a></a>` should have a `target="_blank"` attribute.'
        ).to.have.length(1);
    });
});
