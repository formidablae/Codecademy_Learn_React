let shallow = require('enzyme/shallow'),
    appModule = require('../Parent'),
    Child = require('../Child').Child,
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
    it('', function () {
        let wrapper = shallow(<TestedComponent />);

        expect(
            typeof wrapper.instance().changeName,
            '`<Parent>` should have a `changeName()` method.'
        ).to.equal('function');

        wrapper.instance().changeName('Glornald');
        expect(
            wrapper.state(),
            "`<Parent>`'s `changeName()` method should have a `newName` parameter. It should call `this.setState({ name: newName })`."
        ).to.eql({ name: 'Glornald' });

        expect(
            (wrapper.find(Child).props() || {}).onChange,
            "In `<Parent>`'s `render()` method, `<Child>` should have an attribute of `onChange={this.changeName}`."
        ).to.equal(wrapper.instance().changeName);
    });
});
