let shallow = require('enzyme/shallow'),
    rewire = require('rewire'),
    appModule = rewire('../app');

describe('', function () {
    it('', function () {
        // This helps us differentiate between `p2` being totally missing and
        // things like `const p2 = undefined`.
        const neverDefined = Symbol('never defined');

        let p2;
        try {
            p2 = appModule.__get__('p2');
        } catch (err) {
            p2 = neverDefined;
        }

        expect(p2, 'Did you declare a variable using `const p2`?').to.not.equal(
            neverDefined
        );

        let wrapper;
        try {
            wrapper = shallow(p2);
        } catch (err) {
            wrapper = shallow(<div />);
        }

        expect(
            wrapper.find('p'),
            'Does your JSX expression include an `<p></p>` element?'
        ).to.have.length(1);

        expect(
            wrapper.text(),
            'Did you set your variable equal to `<p>bar</p>`?'
        ).to.match(/bar/i);
    });
});
