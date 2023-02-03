function reverseWords(sentence) {
    // reverse the string
    const reversed = sentence.split("").reverse().join("");
    console.log(reversed)
    // we will add new words here as they are reversed
    let resultString = ""

    let start = 0;
    let end = 0

    while (end < reversed.length - 1) {
        if (reversed[end] === " " && reversed[start] !== " ") {
            let word = reversed.slice(start, end).split("").reverse().join("")
            resultString += word
            resultString += reversed[end]
            start = end
        }
        // handle case for multiple spaces in a row
        while (reversed[start] === " ") {
            start++
            end++
        }
        end++
    }
    // when "end" has reached the end, split out the final word
    resultString += reversed.slice(start).split("").reverse().join("")
    console.log(resultString)
    return resultString
}

const case1 = "We love Python";
const case2 = "To be or not to be";
const case3 = "You are amazing";
const case4 = "Hello     World";
const case5 = "Hey";

reverseWords(case1);
reverseWords(case2);
reverseWords(case3);
reverseWords(case4);
reverseWords(case5);