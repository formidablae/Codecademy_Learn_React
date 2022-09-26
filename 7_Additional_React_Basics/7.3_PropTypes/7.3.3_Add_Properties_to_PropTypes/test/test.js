// const fs = require('fs');
const shallow = require('enzyme/shallow');
const rewire = require('rewire');

describe('', function () {
    it("", function () {

        let appModule;
        try {
            appModule = rewire('../BestSeller.js');
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }

        const TestedComponent = appModule.__get__('BestSeller');
        let pT = TestedComponent.propTypes;

        expect(
            pT,
            "BestSeller should have a property with a name of `propTypes`."
        ).to.exist;

        expect(
            pT && pT.title,
            'BestSeller\'s `propTypes` object should have a property of `title` assigned to a prop type.'
        ).to.be.a('function');

        expect(
            pT && pT.author,
            'BestSeller\'s `propTypes` object should have a property of `author` assigned to a prop type.'
        ).to.be.a('function');

        expect(
            pT && pT.weeksOnList,
            'BestSeller\'s `propTypes` object should have a property of `weeksOnList` assigned to a prop type.'
        ).to.be.a('function');
    });
}); 
