'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/arithGeo.js');

describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        expect(myApp.aritGeo([])).to.equal(0);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(myApp.aritGeo([2, 4, 6, 8, 10])).to.equal('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        expect(myApp.aritGeo([2, 6, 18, 54, 162])).to.equal('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        expect(myApp.aritGeo([1, 2, 3, 5, 8])).to.equal(-1);
      });
      
    });
});