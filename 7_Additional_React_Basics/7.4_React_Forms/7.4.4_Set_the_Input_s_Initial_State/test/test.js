let shallow = require('enzyme/shallow'),
    appModule = require('../Input'),
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
    it('', function () {
        let wrapper = shallow(<TestedComponent />);

        expect(
            typeof wrapper.instance().handleUserInput,
            '`Input` should have a `handleUserInput()` method.'
        ).to.equal('function');

        expect(
            wrapper.find('input').props().onChange,
            'In **Input.js**, `<input />` should have an attribute of `onChange={this.handleUserInput}`.'
        ).to.equal(wrapper.instance().handleUserInput);

        const message =
            '`handleUserInput()` should call `this.setState({ e.target.value })`.';
        wrapper.setState({ userInput: 'Hey' });
        expect(wrapper.state().userInput, message).to.equal('Hey');
        wrapper.instance().handleUserInput({
            target: { value: 'Yo' },
        });
        expect(wrapper.state().userInput, message).to.equal('Yo');
    });
});
