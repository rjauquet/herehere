var herehere = require('../src/herehere.js');

describe('herehere', function() {
    var here = herehere();
    it("logs how often a function is run", function() {
        for (var i = 0; i < 10; i++) {
            expect(here()).toEqual(i+1);
        }
    });
});