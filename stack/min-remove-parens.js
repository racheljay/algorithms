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
    
    if (parenStack.length > 0) {
        let j = 0;
        let badIndex = 0
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            
            if (j < parenStack.length) {
                badIndex = parenStack[j][1];
            }

            if (i === badIndex) {
                j++
            } else {
                legalChars.push(char);
            }
        }
        console.log(legalChars.join(""));
        return legalChars.join("");
    } else {
        console.log({s})
        return s;
    }

}

const case1 = "()"
const case2 = "("
const case3 = ")"
const case4 = ")("
const case5 = "ab)ca(so)(sc(s)("
const case6 = ")((xyz)())"

minRemoveParentheses(case6)