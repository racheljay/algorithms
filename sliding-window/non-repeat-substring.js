/*
    My solution:
    * works but potentially expensive because the clear function must
    iterate through the set to get rid of our current results.
*/

const non_repeat_substring = function (str) {
    const currentLetters = new Set()
    let maxLength = 0

    for (let i = 0; i < str.length; i++) {
        const letter = str[i]
        console.log(currentLetters)

        if (currentLetters.has(letter)) {
            currentLetters.clear()
        }
        currentLetters.add(letter)
        maxLength = Math.max(maxLength, currentLetters.size)

    }
    console.log({maxLength})
    return maxLength
};

const string = "aabccbb"
non_repeat_substring(string)
// Output: 3
// Explanation: The longest substring with distinct characters is "abc".

/*
    Class solution
    * determines length by subtracting different indexes. efficient
    * uses object to store most recent letter and the index at which it appeared
*/

function non_repeat_substring2(str) {
    let windowStart = 0,
      maxLength = 0,
      charIndexMap = {};
  
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      // if the map already contains the 'rightChar', shrink the window from the beginning so that
      // we have only one occurrence of 'rightChar'
      if (rightChar in charIndexMap) {
        // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
        // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
        windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1); // ADD ONE BECAUSE WE HAVE NOT UPDATED YET -->
      }
      // insert the 'rightChar' into the map
      charIndexMap[rightChar] = windowEnd; // <--
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }