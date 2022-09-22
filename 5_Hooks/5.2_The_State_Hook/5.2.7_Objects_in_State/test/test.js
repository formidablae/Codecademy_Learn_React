const fs = require('fs');

describe('', function () {
    let moduleSourceCode;
    try {
        moduleSourceCode = fs.readFileSync('EditProfile.js', 'utf8');
    } catch (e) {
        expect(
            true,
            'Try checking your code again. You likely have a syntax error.',
        ).to.equal(false);
    }

    it('', function () {
        function scaffoldedTest(msg, regex) {
            const passScaffoldedTest = regex.test(moduleSourceCode);
            expect(passScaffoldedTest, msg).to.be.true;
        }

        scaffoldedTest(
            'Initialize `profile` as an empty object',
            /const \[profile, setProfile\] = useState\( ?{ ?} ?\);?/,
        );
    });
});
