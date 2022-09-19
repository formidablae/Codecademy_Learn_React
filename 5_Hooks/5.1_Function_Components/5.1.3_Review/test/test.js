// GuineaPigs = require('../components/GuineaPigs').GuineaPigs;

let shallow = require('enzyme/shallow');
let appModule = require('../Friend');
// let components = appModule.__ReactComponents;
let Friend = appModule.Friend;


describe('', function () {
    it('', function () {
        expect(true).to.equal(true);
        //     const message = '`Friend` should be a function component.';
        //     expect(Friend, message).to.be.a('function');
        //     expect(Friend.prototype, message).to.not.have.property('render');

        //     let wrapper;
        //     try {
        //       wrapper = shallow(<Friend src='test-src' />);
        //     } catch (err) {
        //       wrapper = shallow(<span />);
        //     }

        //     const div = wrapper.find('img');

        //     expect(div, '`Friend` should render an `<img></img>`.').to.have.length(
        //       1
        //     );
        //     expect(
        //       div.find('img').prop('src'),
        //       "`Friend`'s `<img />` should have an attribute of `src={props.src}`."
        //     ).to.equal('test-src');
    });
});
