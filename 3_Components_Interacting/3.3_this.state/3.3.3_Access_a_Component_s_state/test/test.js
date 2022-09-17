let shallow = require('enzyme/shallow'),
    appModule = require('../App'),
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
    it('', function () {
        let wrapper = shallow(<TestedComponent />);
        expect(
            wrapper.state().title,
            '`App` should return `<h1>{this.state.title}</h1>`'
        ).to.equal(wrapper.find('h1').text());
    });
});
