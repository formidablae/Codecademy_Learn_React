const shallow = require('enzyme/shallow');
const { GuineaPigs } = require('../components/GuineaPigs');

describe('', function () {
    it('', function () {
        const wrapper = shallow(
            <GuineaPigs
                guineaPig={{
                    saying: 'fred',
                    path: 'bed',
                }}
            />
        );
        const instance = wrapper.instance();

        const message =
            '`GuineaPigs` should have a `render` function, but no other properties';

        [
            'getInitialState',
            'nextGP',
            'nextGuinea',
            'interval',
            'componentDidMount',
            'componentWillUnmount',
        ].forEach(function (prop) {
            expect(instance[prop], message).to.not.exist;
        });
        expect(typeof instance.render, message).to.equal('function');
    });
});
