const find_string_anagrams = function (str, pattern) {
    const result_indexes = [];

    const patternData = {}

    for (let i = 0; i < pattern.length; i++) {

        if (pattern[i] in patternData === false) {
            patternData[pattern[i]] = 0
        }
        patternData[pattern[i]] = patternData[pattern[i]] + 1
    }

    console.log(patternData)
    
    let end = pattern.length
    let start = 0

    for (let end = pattern.length; end < str.length - 1; end++) {
        console.log(end)

        while (start < end) {
            console.log(str[start])
            start++
        }

    }
    start++
    // return result_indexes;
};


const string1 = "ppqp"
const pattern1 = "pq"

find_string_anagrams(string1, pattern1)
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

const string2 = "abbcabc"
const pattern2 = "abc"

// find_string_anagrams(string2, pattern2)
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".