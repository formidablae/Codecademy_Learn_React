let TestedComponent = require('../BestSeller').BestSeller,
    React = require('react');

describe('', function () {
    it("BestSeller should have a property with a name of propTypes and a value of an object.", function () {
        let pT = TestedComponent.propTypes;
        expect(pT).to.exist;
        expect(typeof pT).to.equal('object');
    });
    it("BestSeller's'propTypes object should have a property of title: React.PropTypes.string.isRequired", function () {
        let pT = TestedComponent.propTypes;
        expect(pT && pT.title).to.equal(React.PropTypes.string.isRequired);
    });
    it("BestSeller's'propTypes object should have a property of author: React.PropTypes.string.isRequired", function () {
        let pT = TestedComponent.propTypes;
        expect(pT && pT.author).to.equal(React.PropTypes.string.isRequired);
    });
    it("BestSeller's'propTypes object should have a property of weeksOnList: React.PropTypes.number.isRequired", function () {
        let pT = TestedComponent.propTypes;
        expect(pT && pT.weeksOnList).to.equal(React.PropTypes.number.isRequired);
    });
});
