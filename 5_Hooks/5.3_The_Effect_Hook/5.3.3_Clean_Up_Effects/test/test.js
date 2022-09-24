let shallow = require('enzyme/shallow'),
    appModule = require('../app'),
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
    it("The <button></button> should have an onClick attribute.", function () {
        let wrapper = shallow(<TestedComponent />);
        expect('onClick' in wrapper.props()).to.equal(true);
    });
    it("onClick should be equal to {this.scream}", function () {
        let wrapper = shallow(<TestedComponent />);
        expect(wrapper.props().onClick).to.eql(wrapper.instance().scream);
    });
});
