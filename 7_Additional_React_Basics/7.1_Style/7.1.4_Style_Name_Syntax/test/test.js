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
            styles,
            "Make sure that `styles` is equal to `{ background: 'lightblue', color: 'darkred' }`."
        ).to.eql({
            background: 'lightblue',
            color: 'darkred',
        });
    });
});
