let mount = require('enzyme/mount'),
    appModule = require('../Talker'),
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
    it("", function () {
        const wrapper = mount(<TestedComponent />);
        expect(wrapper.instance().handleClick, 'Rename the `talk` function to `handleClick`.').to.be.a('function');

        expect(wrapper.find('button').props().onClick, "In Button.js, `<button>`'s `onClick` attribute should be `{this.props.onClick}`.").to.eql(wrapper.instance().handleClick);
    });
});
