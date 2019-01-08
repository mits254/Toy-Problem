const palindromearr = require('../palindrome');
const expect = require('chai').expect;

console.log(palindromearr);

describe('this tests are for palindrome', ()=>{
    let str = 'water';
    let reversed = !str.split('').reverse().join('')
    it('should be equal to the input',()=>{
        expect(palindromearr(str)).to.be.equal(reversed);
    })
})
