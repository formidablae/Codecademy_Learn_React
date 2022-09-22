const fs = require('fs');

describe('', function () {
    let moduleSourceCode;
    try {
        moduleSourceCode = fs.readFileSync('PhoneNumber.js', 'utf8');
    } catch (e) {
        expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
    }

    it('', function () {

        function scaffoldedTest(msg, regex) {
            const passScaffoldedTest = regex.test(moduleSourceCode);
            expect(passScaffoldedTest, msg).to.be.true;
        }

        scaffoldedTest(
            "Import the State Hook from the 'react' library",
            /import React ?, ?{ ?useState ?} from ('|")react('|");?/
        );

        scaffoldedTest(
            "Use the State Hook to delcare and initialize `phone` and `setPhone`",
            /const \[ ?phone ?, ?setPhone ?\] ?= ?useState\((''|"")?\);?/
        );

        scaffoldedTest(
            "Give `phone` an initial value of an empty string",
            /const \[ ?phone ?, ?setPhone ?\] ?= ?useState\((''|"")\);?/
        );

        scaffoldedTest(
            "Use the State Hook at the beginning of the function component definition",
            /(PhoneNumber\(\)[\s\S]*)(const \[ ?phone ?, ?setPhone ?\])[\s\S]*(const handleChange)/
        );

    });
});
