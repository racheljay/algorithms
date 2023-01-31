function minRemoveParentheses(s) {
    const parenStack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === ")" || char === "(") {
            if (parenStack.length === 0) {
                parenStack.push([char, i]);
            } else if (char === ")") {
                if (parenStack[parenStack.length - 1][0] === "(") {
                    parenStack.pop();
                } else {
                    parenStack.push([char, i]);
                }
            } else if (char === "(") {
                parenStack.push([char, i])
            }
        }
    }

    console.log(parenStack);
    const legalChars = [];
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        let badIndex = parenStack[j][1];

        if (i === badIndex) {
            j++
        } else {
            legalChars.push(char);
        }
    }
    // console.log(legalChars.join(""));
    return legalChars.join("");

}

const case1 = "()"
const case2 = "("
const case3 = ")"
const case4 = ")("
const case5 = "ab)ca(so)(sc(s)("

minRemoveParentheses(case5)