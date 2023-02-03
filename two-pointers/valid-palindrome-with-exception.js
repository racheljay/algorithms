function isPalindrome(s) {
    let start = 0;
    let end = s.length - 1;
    let chances = 1

    while (start <= end) {
        if (s[start] === s[end]) {
            start++
            end--
        } else {
            if (s[start + 1] === s[end] && chances > 0) {
                start++
                chances--
            } else if (s[end - 1] === s[start] && chances > 0) {
                end--
                chances--
            } else return false
        }
    }
    return true
}

const case1 = "madame"
const case2 = "dead"
const case3 = "abca"
const case4 = "tebbem"
const case5 = "eeccccbebaeeabebccceea"
const case6 = "ognfjhgbjhzkqhzadmgqbwqsktzqwjexqvzjsopolnmvnymbbzoofzbbmynvmnloposjzvqxejwqztksqwbqgmdazhqkzhjbghjfno"

console.log(isPalindrome(case5))