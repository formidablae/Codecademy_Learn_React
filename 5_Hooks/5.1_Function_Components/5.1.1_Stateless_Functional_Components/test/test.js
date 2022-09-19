let shallow = require('enzyme/shallow'),
    appModule = require('../Friend'),
    components = appModule.__ReactComponents,
    Friend = components[0];

describe('', function () {
    it('', function () {

        expect(true, JSON.stringify(appModule)).to.equal(false);
        // const message = '`Friend` should be a function component.';
        // expect(Friend, message).to.be.a('function');
        // expect(Friend.prototype, message).to.not.have.property('render');

        //     let wrapper;
        //     try {
        //       wrapper = shallow(<Friend />);
        //     } catch (err) {
        //       wrapper = shallow(<span />);
        //     }

        //     const div = wrapper.find('img');

        //     expect(div, '`Friend` should render an `<img></img>`.').to.have.length(
        //       1
        //     );

        //     expect(
        //       div.find('img').prop('src'),
        //       "`Friend`'s `<img />` should have a `src` attribute."
        //     ).to.exist();
    });
});
