const shallow = require('enzyme/shallow');
const rewire = require('rewire');

describe('', function () {

    it('', function () {
        let wrapper;
        try {
            const appModule = rewire('../Forecast');
            const Forecast = appModule.__get__('Forecast');
            wrapper = shallow(<Forecast />);
        } catch (e) {
            expect(
                false,
                'An error is being thrown when trying to render this component. If there is no data, return `<p>Loading...</p>` instead of trying to map over `undefined` data',
            ).to.be.true;
        }
        expect(
            wrapper.find('p'),
            '`<Forecast />` should render a `<p>` element before the data has loaded',
        ).to.have.lengthOf(1);
    });
});
