let shallow = require('enzyme/shallow'),
    appModule = require('../Button'),
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
    it('', function () {
        let wrapper = shallow(<TestedComponent />);
        expect(
            wrapper.text(),
            "`Button.defaultProps` should equal `{ text: 'I am a button' }`"
        ).to.contain('I am a button');
    });
});
