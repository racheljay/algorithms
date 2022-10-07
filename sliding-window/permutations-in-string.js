const find_permutation = function (str, pattern) {
    const patternLetters = {}
    const validLetters = {}

    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] in patternLetters === false) {
            patternLetters[pattern[i]] = 0
        }
        patternLetters[pattern[i]] = patternLetters[pattern[i]] + 1
    }
    // console.log(patternLetters)

    let start = 0

    for (let end = 0; end < str.length; end++) {
        const letter = str[end]

        if (str[start] in patternLetters === false) {
            // console.log(`no ${str[start]}`, { letter })
            start++
        }

        if (letter in patternLetters) {
            if (letter in validLetters === false) {
                validLetters[letter] = 0
            }
            validLetters[letter] = validLetters[str[start]] + 1

            if (validLetters[str[start]] > patternLetters[str[start]]) {
                // console.log(validLetters)
                validLetters[letter] = validLetters[letter] - 1
                start++
            }
            // console.log({validLetters})
            // console.log({start}, str[start])
        }
        if (letter in patternLetters && (end - start + 1) === pattern.length) {
            console.log("true", { letter }, str[start], (end - start + 1))
            return true
        }
    }
    console.log("false")
    return false
};

const string = "oidbcaf"
const pattern = "abc"

const string2 = "odicf"
const pattern2 = "dc"

const string3 = "bcdxabcdy"
const pattern3 = "bcdyabcdx"

const string4 = "aaacb"
const pattern4 = "abc"
find_permutation(string3, pattern3)
// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.