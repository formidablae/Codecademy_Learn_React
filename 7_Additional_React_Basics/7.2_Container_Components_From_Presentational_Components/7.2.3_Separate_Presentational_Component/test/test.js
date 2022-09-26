const shallow = require('enzyme/shallow');
const rewire = require('rewire');

describe('', function () {

    let appModule, appModuleContainer;

    try {
        appModule = rewire('../components/GuineaPigs.js');
        appModuleContainer = rewire('../containers/GuineaPigsContainer.js');
    } catch (e) {
        expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
    }

    it('', function () {
        const message = 'Make sure that **components/GuineaPigs.js** and **containers/GuineaPigsContainer.js** are identical.';

        const TestedComponent = appModule.__get__('GuineaPigs');
        const TestedContainer = appModuleContainer.__get__('GuineaPigs');

        //const message = TestedContainer;

        expect(() => {
            shallow(<TestedComponent />);
        }, message).to.not.throw();
        expect(() => {
            shallow(<TestedContainer />);
        }, message).to.not.throw();

        //expect(TestedComponent.name, message).to.equal(TestedContainer.name);
        expect(TestedComponent.name, 'test').to.equal('GuineaPigs');
        //expect(TestedContainer.name.startsWith('GuineaPigs'), message).to.be.true;
    });
});
