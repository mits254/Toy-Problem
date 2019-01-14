let expect = require('chai').expect;
 
let mergeSort = require('../mergeSort')
describe('mergeSort', function() {

    //let mergeSort = require('../../src/sorting/sortingAlgorithmsPart2').mergeSort;

    it('sorts an array of positive numbers', function() {
      expect(mergeSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
    });

    it('sorts an array of negative numbers', function() {
      expect(mergeSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
    });

    it('sorts an array of positive and negative numbers', function() {
      expect(mergeSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
    });

    it('works with arrays that are already sorted', function() {
      expect(mergeSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
    });

  });
