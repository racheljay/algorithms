function removeDuplicates(string) {
    const stack = [];

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if(stack.length === 0) {
            stack.push([char, 1]);
            continue;
        }
        if (char !== stack[stack.length - 1][0]) {
            stack.push([char, 1]);
        } else {
            stack[stack.length - 1][1]++;
        };
        if (stack[stack.length - 1][1] > 1) {
            stack.pop();
        };
    }
    // console.log(stack);

    const letters = []
    stack.forEach(letter => {
        letters.push(letter[0]);
    });
    // console.log(letters);
    return letters.join("");
}

const case1 = "g"
const case2 = "ggaabcdeb"
const case3 = "abbddaccaaabcd"
const case4 = "aabbccdd"
const case5 = "aannkwwwkkkwna"
const case6 = "sadyydassa"

removeDuplicates(case6)