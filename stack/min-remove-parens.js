function minRemoveParentheses(s) {
    const parenStack = [];
    let validString = s

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (
            parenStack.length > 0 &&
            parenStack[parenStack.length - 1][0] === "(" &&
            char === ")"
        ) {
            parenStack.pop()
        } else if (char === ")" || char === "(") {
            parenStack.push([char, i])
        }
    }

    console.log(parenStack);

    while (parenStack.length > 0) {
        let popped = parenStack.pop()
        console.log(popped)
        let badIndex = popped[1]

        validString =
            validString.slice(0, badIndex) +
            validString.slice(badIndex + 1, validString.length);
    }
    console.log(validString)
    return validString


}

const case1 = "()"
const case2 = "("
const case3 = ")"
const case4 = ")("
const case5 = "ab)ca(so)(sc(s)("
const case6 = ")((xyz)())"

minRemoveParentheses(case2)