var expect = require('chai').expect;
var index = require('./index');

describe('Add Command', function () {
    it('2 + 2 = 4', function () {
        var actual = index.add(2, 2);
        expect(actual).to.equal(4);
    });
});