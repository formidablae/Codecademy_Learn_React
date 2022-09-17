let shallow = require('enzyme/shallow'),
    appModule = require('../Toggle'),
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe("", function () {
    /*it("Toggle should have a constructor function.", function () {
      let wrapper = shallow(<TestedComponent />);
      expect(wrapper.instance().constructor).to.exist;
    }); ????? */

    it("", function () {
        let wrapper = shallow(<TestedComponent />),
            green = '#39D1B4',
            yellow = '#FFD712';


        expect(
            wrapper.state(),
            "`this.state` should initially return `{ color: green }`."
        ).to.eql({ color: green });

        expect(
            wrapper.find('div').props().style.background,
            "The `<div></div>` should have an attribute of `style={{ background: this.state.color }}`."
        ).to.equal(wrapper.state().color);

        expect(
            typeof wrapper.instance().changeColor,
            "`Toggle` should have a `changeColor` function."
        ).to.equal('function');

        expect(
            wrapper.state().color,
            "Look at `toggleMood` in **Mood.js**, and make `changeColor` toggle between `green` and `yellow`."
        ).to.equal(green);

        wrapper.instance().changeColor();

        expect(
            wrapper.state().color,
            "Look at `toggleMood` in **Mood.js**, and make `changeColor` toggle between `green` and `yellow`."
        ).to.equal(yellow);

        wrapper.instance().changeColor();

        expect(
            wrapper.state().color,
            "Look at `toggleMood` in **Mood.js**, and make `changeColor` toggle between `green` and `yellow`."
        ).to.equal(green);

        expect(
            wrapper.find('button'),
            "`Toggle` should render a `<button></button>`, inside of the `<div></div>`."
        ).to.have.length(1);

        expect(
            wrapper.find('button').text(),
            "`Toggle`'s `<button></button>` should contain the text `Change color`."
        ).to.contain('Change color');

        expect(
            wrapper.instance().changeColor,
            "`Toggle`'s `<button></button>` should have an attribute of `onClick={this.changeColor}`."
        ).to.equal(wrapper.find('button').props().onClick);

    });
});
