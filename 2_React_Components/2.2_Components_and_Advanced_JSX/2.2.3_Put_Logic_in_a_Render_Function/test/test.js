const shallow = require('enzyme/shallow');

const titles = [
    'Yummmmmmm',
    // We are testing both one or two spaces in this title due to an inconsistency in the workspace code supplied
    'Hey Guys! Wait Up!',
    'Hey Guys!  Wait Up!',
    'Yikes',
];

describe('', function () {
    it('', function () {
        let wrapper;
        try {
            const appModule = require('../app');
            const components = appModule.__ReactComponents;
            const TestedComponent = components[0];
            wrapper = shallow(<TestedComponent />);
        } catch (err) {
            wrapper = shallow(<span />);
        }

        expect(
            wrapper.find('div'),
            '`<Friend />` should return a `<div></div>`.'
        ).to.have.length(1);
        expect(
            wrapper.find('div').find('h1'),
            "`<Friend>`'s `<div></div>` should contain one nested `<h1></h1>`."
        ).to.have.length(1);
        expect(
            titles.indexOf(wrapper.find('h1').text()),
            "`<Friend>`'s' `<h1></h1>` should contain `{friend.title}`."
        ).to.be.at.least(0);
        expect(
            wrapper.find('div').find('img'),
            "`<Friend>`'s' `<div></div>` should contain a nested `<img />`."
        ).to.have.length(1);
    });
});
