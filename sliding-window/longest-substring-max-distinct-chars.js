// my solution

const longest_substring_with_k_distinct = function (str, k) {

    let seenLetters = {}
    let start = 0
    let longestLength = 0
    let currentLength = 0

    for (let i = 0; i < str.length; i++) {
        let numOfLetters = Object.keys(seenLetters).length

        const letter = str[i]

        while (letter in seenLetters === false && numOfLetters === k) {

            if (seenLetters[str[start]] > 1) {
                seenLetters[str[start]] -= 1
                currentLength--
                start++
            }
            if (seenLetters[str[start]] === 1) {
                delete seenLetters[str[start]]
                currentLength--
                start++
            }
            seenLetters[letter] = 1
            currentLength++
        }
        if (letter in seenLetters) {
            seenLetters[letter] += 1
            currentLength++
        }

        if (letter in seenLetters === false) {
            seenLetters[letter] = 1
            currentLength++

        }
        if (currentLength > longestLength) longestLength = currentLength
    }

    console.log({ longestLength })
};

string1 = "araaci"

longest_substring_with_k_distinct(string1, 2)

/*********** */

//solution from the course

function longest_substring_with_k_distinct(str, k) {
    let windowStart = 0,
      maxLength = 0,
      charFrequency = {};
  
    // in the following loop we'll try to extend the range [window_start, window_end]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (!(rightChar in charFrequency)) {
        charFrequency[rightChar] = 0;
      }
      charFrequency[rightChar] += 1;
      // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
      while (Object.keys(charFrequency).length > k) {
        const leftChar = str[windowStart];
        charFrequency[leftChar] -= 1;
        if (charFrequency[leftChar] === 0) {
          delete charFrequency[leftChar];
        }
        windowStart += 1; // shrink the window
      }
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  
    return maxLength;
  }
  
  
  console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
  console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
  console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);