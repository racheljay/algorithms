const find_string_anagrams = function (str, pattern) {
    const result_indexes = [];

    const patternData = {}
    const currentLetters = {}

    for (let i = 0; i < pattern.length; i++) {

        if (pattern[i] in patternData === false) {
            patternData[pattern[i]] = 0
        }
        patternData[pattern[i]] += 1
    }

    let start = 0

    for (let end = 0; end < str.length; end++) {
        let letter = str[end]

        if (letter in currentLetters === false && letter in patternData) {
            currentLetters[letter] = 0
        }
        currentLetters[letter] += 1

        if (end - start + 1 > pattern.length) {
            currentLetters[str[start]] -= 1
            if(currentLetters[str[start]] === 0) {
                delete currentLetters[str[start]]
            }
            start++
        }

        if(Object.keys(currentLetters).length === pattern.length) {
            result_indexes.push(start)
            console.log(Object.keys(currentLetters))
        }


    }

    console.log(result_indexes)
    return result_indexes

};


const string1 = "ppqp"
const pattern1 = "pq"

// find_string_anagrams(string1, pattern1)
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

const string2 = "abbcabc"
const pattern2 = "abc"

find_string_anagrams(string2, pattern2)
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".