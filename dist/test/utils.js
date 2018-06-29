"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("../lib/utils");
var chai_1 = require("chai");
describe('word parser', function () {
    beforeEach(function () {
        // Set up before running tests.
    });
    it('initializes', function () {
        chai_1.expect(lib.splitWord('ave')).to.equal('a -- ve');
    });
    it('double consonant', function () {
        chai_1.expect(lib.splitWord('cheche')).to.equal('che -- che');
    });
    it('upper case', function () {
        chai_1.expect(lib.splitWord('BonDye')).to.equal('Bon -- Dye');
    });
    it('accents', function () {
        chai_1.expect(lib.splitWord('Jézi')).to.equal('Jé -- zi');
    });
});
