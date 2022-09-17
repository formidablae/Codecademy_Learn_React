import { Greeting } from '../Greeting';
let shallow = require('enzyme/shallow'),
    appModule = require('../App'),
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
    it('', function () {
        let wrapper = shallow(<TestedComponent />);
        expect(
            wrapper.find(Greeting),
            'App should render a `<Greeting />` instance.'
        ).to.have.length(1);
        expect(
            wrapper.find(Greeting).props().name,
            '`<Greeting />` should have a `name="xyz"` attribute, where `"xyz"` is a string value of your choice.'
        ).to.exist;
    });
});
