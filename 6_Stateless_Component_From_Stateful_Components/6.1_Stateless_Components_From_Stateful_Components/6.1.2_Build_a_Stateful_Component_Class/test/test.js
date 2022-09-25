let shallow = require('enzyme/shallow'),
    appModule = require('../Child'),
    components = appModule.__ReactComponents;

describe('', function () {
    it('', function () {
        const TestedComponent = Array.isArray(components) ? components[0] : null;
        expect(TestedComponent, 'Did you declare a `<Child>` component?').to.be.ok;

        let wrapper = shallow(<TestedComponent />);
        expect(wrapper.html(), '`<Child>` should return `<h1></h1>`.').to.equal(
            '<h1></h1>'
        );
    });
});
