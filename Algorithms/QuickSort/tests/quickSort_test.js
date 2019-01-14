let expect = require('chai').expect;
let quickSort = require('../quickSort');

describe('#quickSort', function() {

   

    it('sorts an array of positive numbers', function() {
      expect(quickSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
    });

    it('sorts an array of negative numbers', function() {
      expect(quickSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
    });

    it('sorts an array of positive and negative numbers', function() {
      expect(quickSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
    });

    it('works with arrays that are already sorted', function() {
      expect(quickSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
    });

  });
