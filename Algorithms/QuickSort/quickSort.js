function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    } else {
      let pivot = arr.pop();
      let left = [];
      let right = [];
      let newArray = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
  }

  module.exports = quickSort