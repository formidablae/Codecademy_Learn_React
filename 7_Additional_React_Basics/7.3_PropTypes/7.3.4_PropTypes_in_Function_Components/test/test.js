let TestedComponent = require('../components/GuineaPigs').GuineaPigs,
    React = require('react');

describe('', function () {
    it('', function () {
        let pT = TestedComponent.propTypes;

        {
            const message =
                '`GuineaPigs` should have a property with a name of `propTypes` and a value of an object.';
            expect(pT, message).to.exist;
            expect(typeof pT, message).to.equal('object');
        }

        expect(
            pT && pT.src,
            "`GuineaPigs`'s `propTypes` object should have a property of `src: React.PropTypes.string.isRequired`."
        ).to.equal(React.PropTypes.string.isRequired);
    });
});
