/*
    Time Complexity: O(n) -> N is the length of the string and we travel it once
    Space Complexity: O(n) -> most of the expression is nested in itself
*/

function calculator(expression) {
    let number = 0
    let signVal = 1
    let result = 0
    const calcStack = []

    for (let i = 0; i < expression.length; i++) {
        // console.log(calcStack)
        let char = expression[i]

        if (expression.charCodeAt(i) >= 48 && expression.charCodeAt(i) <= 57) {
            number = (number * 10) + parseInt(char)
        }
        if (char === "+" || char === "-") {
            result += number * signVal
            // result = (result * signVal) + number
            if (char === "+") {
                signVal = 1
            } else if (char === "-") {
                signVal = -1
            }
            number = 0
        }
        else if (char === "(") {
            calcStack.push([result, signVal])
            signVal = 1
            result = 0
        }
        else if (char === ")") {
            result += signVal * number
            // result = (result * signVal) + number

            let popped = calcStack.pop()
            console.log({popped})
            let poppedVal = popped[0]
            signVal = popped[1]
            result *= signVal
            result += poppedVal

            // result = (result * signVal) + number
            number = 0
        }
    }

    // console.log(result, number, signVal)
    console.log(result + number * signVal)
    return result + number * signVal
}

const expression1 = "12 - (6 + 2) + 5"
const expression2 = "(8 + 100) + (13 - 8 - (2 + 1))"

calculator(expression1)
calculator(expression2)