let mount = require('enzyme/mount'),
    sinon = require('sinon'),
    appModule = require('../Parent'),
    Child = require('../Child').Child,
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
    it('', function () {
        const parentWrapper = mount(<TestedComponent />);

        expect(
            typeof parentWrapper.instance().changeName,
            '`<Parent>` should have a `changeName()` method.'
        ).to.equal('function');

        parentWrapper.instance().changeName('Glornald');
        expect(
            parentWrapper.state(),
            "`<Parent>`'s `changeName()` method should have a `newName` parameter. It should call `this.setState({ name: newName })`."
        ).to.eql({ name: 'Glornald' });

        expect(
            (parentWrapper.find(Child).props() || {}).onChange,
            "In `<Parent>'s `render()` method, `<Child>` should have an attribute of `onChange={this.changeName}`."
        ).to.equal(parentWrapper.instance().changeName);

        const test = sinon.spy();
        const childWrapper = mount(<Child onChange={test} />);

        expect(
            childWrapper.instance().handleChange,
            '`<Child>` should have a `handleChange()` method.'
        ).to.be.a('function');

        expect(
            childWrapper.find('select').prop('onChange'),
            "In `<Child>`'s `render()` method, `<select></select>` should have an attribute of `onChange={this.handleChange}`."
        ).to.equal(childWrapper.instance().handleChange);

        const message =
            'Make sure that `handleChange()` passes `e.target.value` to `this.props.onChange()`.';
        childWrapper.instance().handleChange({
            target: { value: 'yo' },
        });
        expect(test.callCount, message).to.equal(1);
        expect(test.calledWithExactly('yo'), message).to.be.true;
    });
});
