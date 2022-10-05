const length_of_longest_substring = function (arr, k) {
    let start = 0
    let maxLength = 0
    let storage = {}

    for (let end = 0; end < arr.length; end++) {
        const number = arr[end]

        if (!(number in storage)) {
            storage[number] = 0
        }
        storage[number] = storage[number] + 1

        if (storage['0'] > k) {
            storage[arr[start]] = storage[arr[start]] - 1
            start++
        }


        maxLength = Math.max(maxLength, end - start + 1)
    }
    console.log(maxLength)
    console.log(storage, start)
};

const array = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1] //k=2

length_of_longest_substring(array, 2)
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.



/**
 * course Solution
 * basically the same thing I did, but slightly better on space complexity, because they are only tracking 1 and not 0
 * 1 uses a single variable instead of an object
 */

 function length_of_longest_substring(arr, k) {
    let windowStart = 0,
      maxLength = 0,
      maxOnesCount = 0;
  
    // Try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      if (arr[windowEnd] === 1) {
        maxOnesCount += 1;
      }
  
      // Current window size is from windowStart to windowEnd, overall we have a maximum of 1s
      // repeating 'maxOnesCount' times, this means we can have a window with 'maxOnesCount' 1s
      // and the remaining are 0s which should replace with 1s.
      // now, if the remaining 0s are more than 'k', it is the time to shrink the window as we
      // are not allowed to replace more than 'k' 0s
      if ((windowEnd - windowStart + 1 - maxOnesCount) > k) {
        if (arr[windowStart] === 1) {
          maxOnesCount -= 1;
        }
        windowStart += 1;
      }
  
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }
  
  
  console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
  console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));