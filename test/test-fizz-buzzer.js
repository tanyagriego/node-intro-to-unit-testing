// Inside this file, write unit tests for the fizzBuzzer 
//function found in fizzBuzzer.js. Be sure to test the normal case 
//on a range of representative inputs, and test for at least one 
//edge case (for instance, non-numeric inputs).

const expect = require('chai').expect;
const fizzBuzzer = require('../fizzbuzzer');

describe('fizzBuzzer', function() {
    it ('should return "fizz-buzz" for multiples of 15', function() {
        [15, 30, 45].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

    it('should return "fizz" for multiples of 3', function() {
        [3, 6, 9, 12].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz');
        
        });
    });

    it('should return "buzz" fir multiples of 5', function() {
        [5, 10, 20].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal(input);
        });
    });

    it('should produce error if input isn\'t number', function(){
        const badInputs = [true, false, 'cat', function(){}, [1,2,3]];
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});

lalalala