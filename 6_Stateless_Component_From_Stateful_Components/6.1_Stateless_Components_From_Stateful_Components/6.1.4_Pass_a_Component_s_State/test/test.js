let shallow = require('enzyme/shallow'),
    appModule = require('../Child'),
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
    it('', function () {
        let wrapper = shallow(<TestedComponent name='deg' />);
        expect(
            wrapper.html(),
            '`<Child>` should return `<h1>Hey, my name is {this.props.name}!</h1>`.'
        ).to.match(/< *h1 *>Hey,? +my +name +is +deg[\!\.]?< *\/ *h1 *>/);
    });
});
