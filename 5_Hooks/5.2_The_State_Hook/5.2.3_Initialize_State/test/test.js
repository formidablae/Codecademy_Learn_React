const shallow = require('enzyme/shallow');
const rewire = require('rewire');

describe('', function () {
    let appModule;
    try {
        appModule = rewire('../ColorPicker');
    } catch (e) {
        expect(
            true,
            'Try checking your code again. You likely have a syntax error.',
        ).to.equal(false);
    }
    const ColorPicker = appModule.__get__('ColorPicker');
    const wrapper = shallow(<ColorPicker />);
    const div = wrapper.find('div');

    it('', function () {
        expect(
            div,
            '`<ColorPicker />` should render a `<div>` but none was found.',
        ).to.have.lengthOf(1);

        const styleProp = div.prop('style');
        expect(
            styleProp,
            '`<ColorPicker />` should render a `<div>` with a style prop',
        ).to.be.an('object');

        expect(
            wrapper.find('div').prop('style').backgroundColor === 'Tomato',
            "The value of `color` should be `'Tomato'` for the first render",
        ).to.be.true;

        wrapper.find('button').at(0).simulate('click');
        wrapper.update();
        expect(
            wrapper.find('div').prop('style').backgroundColor !== 'Tomato',
            'Clicking any button should still update the color of the div',
        ).to.be.true;
    });
});
