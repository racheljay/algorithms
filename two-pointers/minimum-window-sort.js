const shortest_window_sort = function (arr) {

    let start = 0
    let end = arr.length - 1

    while (start < end) {
        if (arr[start] < arr[start + 1]) {
            start++
        }
        if (arr[end] > arr[end - 1]) {
            end--
        }
        if (arr[end] < arr[0]) {
            start = 0
            break
        }
        if (arr[start] > arr[start + 1] && arr[end] < arr[end - 1]) {
            break
        }
    }
    if (start > end || start === end) {
        console.log("none")
        return 0
    }

    console.log(start, end, (end - start + 1))
    return end - start + 1

};

const arr1 = [1, 2, 5, 3, 7, 10, 9, 12] // works
const arr2 = [1, 3, 2, 0, -1, 7, 10] // works
const arr3 = [1, 2, 3] // works
const arr4 = [3, 2, 1] // works
shortest_window_sort(arr1)
shortest_window_sort(arr2)
shortest_window_sort(arr3)
shortest_window_sort(arr4)


// class solution
function shortest_window_sort(arr) {
    let low = 0,
      high = arr.length - 1;
    // find the first number out of sorting order from the beginning
    while ((low < arr.length - 1 && arr[low] <= arr[low + 1])) {
      low += 1;
    }
  
    if (low === arr.length - 1) { // if the array is sorted
      return 0;
    }
  
    // find the first number out of sorting order from the end
    while (high > 0 && arr[high] >= arr[high - 1]) {
      high -= 1;
    }
  
    // find the maximum and minimum of the subarray
    let subarrayMax = -Infinity,
      subarrayMin = Infinity;
    for (k = low; k < high + 1; k++) {
      subarrayMax = Math.max(subarrayMax, arr[k]);
      subarrayMin = Math.min(subarrayMin, arr[k]);
    }
  
    // extend the subarray to include any number which is bigger than the minimum of the subarray
    while (low > 0 && arr[low - 1] > subarrayMin) {
      low -= 1;
    }
    // extend the subarray to include any number which is smaller than the maximum of the subarray
    while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
      high += 1;
    }
  
    return high - low + 1;
  }
  
  
  console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
  console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
  console.log(shortest_window_sort([1, 2, 3]));
  console.log(shortest_window_sort([3, 2, 1]));