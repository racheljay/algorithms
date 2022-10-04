/*
    Not terrible.
    * uses sliding window
    * only includes logic to look ahead
*/

const length_of_longest_substring = function (str, k) {
    let maxLength = 0

    for (let i = 0; i < str.length; i++) {
        const leftSide = str[i]

        let right = i
        let extra = k
        while ((str[right] === leftSide || extra > 0) && right < str.length ) {
            if(str[right] !== leftSide){
                extra--
            }
            maxLength = Math.max(maxLength, right - i + 1)
            right++
        }
    }
    console.log({maxLength})
    return maxLength
};

// Input: String="aabccbb", k=2
const string = "aabccbb"
const string2 = "abbcb"
const string3 = "abccde"
const string4 = "abcc" // edge case that does not work
length_of_longest_substring(string4, 2)
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".

/*
    Course solution:
    * Better use of window
*/

function length_of_longest_substring(str, k) {
    let windowStart = 0,
      maxLength = 0,
      maxRepeatLetterCount = 0,
      frequencyMap = {};
  
    // Try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (!(rightChar in frequencyMap)) {
        frequencyMap[rightChar] = 0;
      }
      frequencyMap[rightChar] += 1;
      maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);
  
      // Current window size is from windowStart to windowEnd, overall we have a letter which is
      // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
      // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
      // if the remaining letters are more than 'k', it is the time to shrink the window as we
      // are not allowed to replace more than 'k' letters
      if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) { // take out max repeat number, because those don't count towards being invalid
        leftChar = str[windowStart];
        frequencyMap[leftChar] -= 1; // take credit away, starting from the first
        windowStart += 1; // move the start forward (old start is now gone)
      }
  
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }
  
  
  console.log(length_of_longest_substring('aabccbb', 2));
  console.log(length_of_longest_substring('abbcb', 1));
  console.log(length_of_longest_substring('abccde', 1));