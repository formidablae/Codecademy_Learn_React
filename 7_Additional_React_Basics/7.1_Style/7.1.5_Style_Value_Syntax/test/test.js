let shallow = require('enzyme/shallow'),
    rewire = require('rewire'),
    appModule = rewire('../styleMe');

describe('', function () {
    it('', function () {
        // This helps us disambiguate between `styles` never being defined and things like
        // `let styles = undefined;` or `let styles;`.
        const neverDefined = Symbol('never defined');
        let styles;
        try {
            styles = appModule.__get__('styles');
        } catch (err) {
            styles = neverDefined;
        }

        expect(styles, 'Declare a variable named `styles`.').not.to.equal(
            neverDefined
        );
        expect(
            Boolean(styles) && typeof styles === 'object' && !Array.isArray(styles),
            '`styles` should be an object.'
        ).to.be.true;
        expect(
            styles.background,
            "Make sure that your `styles` object has a property of `background: 'lightblue'`."
        ).to.equal('lightblue');
        expect(
            styles.color,
            "Make sure that your `styles` object has a property of `color: 'darkred'`."
        ).to.equal('darkred');
        expect(
            styles.marginTop,
            "Make sure that your `styles` object has a property of `marginTop: '100px'`."
        ).to.equal('100px');
        expect(
            styles.fontSize,
            "Make sure that your `styles` object has a property of `fontSize: '50px'`."
        ).to.equal('50px');
    });
});
