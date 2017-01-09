
'use strict'

var assert = require('expect');


var myApp = require('../app/fizzBuzz.js');

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3)).to.be.a('Fizz');
  });
  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(18)).to.be.a('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(125)).to.be.a('Buzz');
  });
  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5)).to.be.a('Buzz');
  });
  it("should return `FizzBuzz` for 15", function() {
    expect(myApp.fizzBuzz(15)).to.be.a('FizzBuzz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(7)).to.be.a(7);
  });
  it("should return 31 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(31)).to.be.a(31);
  });

});