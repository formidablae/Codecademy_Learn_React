console.log = function () { };
const { expect } = require("chai");
const rewire = require("rewire");

describe("foo test", function () {
    it("did you set `foo` to `bar`?", function () {
        let appModule;
        try {
            appModule = rewire("../main.js");
        } catch (e) {
            expect(
                true,
                "Try checking your code again. You likely have a syntax error."
            ).to.equal(false);
        }

        let varLearnerDeclares;
        let learnerVariableName = "foo";
        try {
            varLearnerDeclares = appModule.__get__(learnerVariableName);
        } catch (e) {
            expect(
                true,
                `Did you declare a \`${learnerVariableName}\` variable or function?`
            ).to.equal(false);
        }

        // These are just two possible examples, you can use the whole Chai expect API
        expect(varLearnerDeclares(), 'Did you set `foo` to "bar"?').to.equal("bar");
    });
});
