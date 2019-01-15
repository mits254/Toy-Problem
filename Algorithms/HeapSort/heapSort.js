function buildMaxHeap(array) {
    var i;
    i = array.length / 2 - 1;
    i = Math.floor(i);

    // Build a max heap out of
    // all array elements passed in.
    while (i >= 0) {
        heapify(array, i, array.length);
        i -= 1;
    }
}
function heapify(array, mid, max) { // array, mid, arr.length
    var index, leftChild, righChild;
    while (mid < max) { // 3 < 8
        index = mid;    //3
        leftChild = 2 * mid + 1; // 7
        righChild = leftChild + 1; //8
        // arr[7] > arr[3]
        // 6 > 7
        //console.log(array[righChild])
        if (leftChild < max && array[leftChild] > array[index]) {
            index = leftChild;
        }

        if (righChild < max && array[righChild] > array[index]) {
            index = righChild;
        }

        if (index == mid) {
            return;
        }

        swap(array, mid, index);

        mid = index;
    }
}
function swap(array, firstItemIndex, lastItemInde) {
    var tmp = array[firstItemIndex];

    // Swap first and last items in the array.
    array[firstItemIndex] = array[lastItemInde];
    array[lastItemInde] = tmp;
    //return array
}
function heapSort(array) {
    // Build our max heap.
    buildMaxHeap(array);

    // Find last element.
    lastElement = array.length - 1;

    // Continue heap sorting until we have
    // just one element left in the array.
    while (lastElement > 0) {
        swap(array, 0, lastElement);

        heapify(array, 0, lastElement);

        lastElement -= 1
    }
    return array
}

module.exports = heapSort;

//heapSort([7, 8, 2, 1, 5, 3, 4, 6, 10, 9])