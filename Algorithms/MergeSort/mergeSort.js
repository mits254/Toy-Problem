function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);
    mergeSort(leftArray);
    mergeSort(rightArray);
    mergeArr(leftArray, rightArray, arr)
    return arr;
  }
  
  function mergeArr(leftArray, rightArray, arr) {
    let index = 0;
    while(leftArray.length && rightArray.length){
      if(rightArray[0] < leftArray[0]){
        arr[index++] = rightArray.shift();
      } else {
        arr[index++] = leftArray.shift();
      }
    }
    while(leftArray.length){
      arr[index++] = leftArray.shift();
    }
    while(rightArray.length){
      arr[index++] = rightArray.shift();
    }
  }

  //mergeSort([4,2.2,1,9,2.5,11])
  module.exports = mergeSort;