function isPalindrome(s) {
    let start = 0
    let end = s.length - 1

    while (start < end) {
        if (s[start] === s[end]) {
            start++
            end--
        } else return false
    }
    return true
}

const case1 ="kayak"
const case2 ="hello"
const case3 ="RACEACAR"
const case4 ="A"
const case5 ="ABCDABCD"
const case6 ="DCBAABCD"
const case7 ="ABCBA"

isPalindrome(case1) === true ? console.log(`Correct: ${case1} is a palindrome`) : console.log("WRONG")
// isPalindrome(case2)
// isPalindrome(case3)
// isPalindrome(case4)
// isPalindrome(case5)
// isPalindrome(case6)
// isPalindrome(case7)
