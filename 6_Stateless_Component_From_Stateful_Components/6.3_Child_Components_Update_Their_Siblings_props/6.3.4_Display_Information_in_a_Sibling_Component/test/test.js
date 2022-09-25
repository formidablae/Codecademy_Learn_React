let mount = require('enzyme/mount'),
    appModule = require('../Parent'),
    Child = require('../Child').Child,
    Sibling = require('../Sibling').Sibling,
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
    it('', function () {
        let wrapper = mount(<TestedComponent />);
        expect(
            wrapper.find(Child).props().name,
            'In **Parent.js**, `<Child />` should not have a `name` attribute.'
        ).to.not.exist;
    });
});
