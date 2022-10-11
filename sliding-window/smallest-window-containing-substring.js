const find_substring = function (str, pattern) {
    const patternData = {}

    for(let i = 0; i < pattern.length; i++) {
        if(pattern[i] in patternData === false) {
            patternData[pattern[i]] = 0
        }
        patternData[pattern[i]] = patternData[pattern[i]] + 1
    }

    let minLength = Number.MAX_SAFE_INTEGER
    let coordinates = []
    let start = 0
    const matchedLetters = {}

    for (let end = 0; end < str.length; end++) {
        const letter = str[end]

        if (letter in matchedLetters === false && letter in patternData) {
            matchedLetters[letter] = 0
        }
        if (letter in matchedLetters) {
            matchedLetters[letter] += 1
        }

        while (matchedLetters[letter] > patternData[letter]) {
            matchedLetters[letter] -= 1
            start++
        }
        if(str[start] in patternData === false) {
            start++
        }
        if (Object.keys(matchedLetters).length === Object.keys(patternData).length) {
            if (end - start + 1 < minLength) {
                minLength = end - start + 1
                coordinates = [start, end]
            }
        }

    }

    const smallestWindow = str.slice(coordinates[0], coordinates[1] + 1)
    console.log(smallestWindow)
    return smallestWindow

}

const string1 = "aabdec"
const pattern1 = "abc"

find_substring(string1, pattern1)
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"

const string2 = "aabdec"
const pattern2 = "abac"

// find_substring(string2, pattern2)

const string3 = "abdbca"
const pattern3 = "abc"

// find_substring(string3, pattern3)