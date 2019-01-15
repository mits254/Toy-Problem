let expect = require('chai').expect;
let heapSort = require('../heapSort');

describe('#heapSort', function() {

   

    it('sorts an array of positive numbers', function() {
      expect(heapSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
    });

    it('sorts an array of negative numbers', function() {
      expect(heapSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
    });

    it('sorts an array of positive and negative numbers', function() {
      expect(heapSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
    });

    it('works with arrays that are already sorted', function() {
      expect(heapSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
    });

  });