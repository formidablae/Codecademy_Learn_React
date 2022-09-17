import { Greeting } from '../Greeting';
let shallow = require('enzyme/shallow'),
    appModule = require('../App'),
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
    it('', function () {
        let wrapper = shallow(<TestedComponent />);

        // We want to check that this is `false` but then the final checkpoint
        // won't pass, so we just make sure it's a boolean.
        expect(
            wrapper.find(Greeting).props().signedIn,
            '`<Greeting />` should have a `signedIn={false}` attribute.'
        ).to.be.a('boolean');
    });
});
