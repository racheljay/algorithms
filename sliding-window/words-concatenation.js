const find_word_concatenation = function (str, words) {
    result_indices = [];
    const wordBank = {}
    for (let i = 0; i < words.length; i++) {
        wordBank[words[i]] = 0
    }

    let start = 0
    let wordStart = 0
    const currentWords = []
    let numOfWords = 0

    for (let end = 0; end < str.length; end++) {
        const slicedString = str.slice(wordStart, end + 1)

        if (slicedString in wordBank) {
            wordBank[slicedString] += 1
            wordStart = end + 1
            currentWords.push(slicedString)
            if (wordBank[slicedString] === 1) {
                numOfWords++
            }

            if (wordBank[slicedString] > 1) {
                wordBank[slicedString] -= 1
                start += currentWords[0].length
                currentWords.shift()
            }

            if (numOfWords === words.length) {
                result_indices.push(start)
                start += currentWords[0].length
                wordBank[currentWords[0]] -= 1
                currentWords.shift()
                numOfWords--
            }
        }
    }
    console.log(result_indices)
    return result_indices;
};

const words = ["cat", "fox"]

const string1 = "catfoxcat"
const string2 = "catcatfoxfox"

find_word_concatenation(string1, words)

// find_word_concatenation(string2, words)
