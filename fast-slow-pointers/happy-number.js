// class provided helper function
function sumDigits(number) {
    let totalSum = 0;
    while (number > 0) {
        let temp = Math.floor(number / 10),
            digit = number % 10;
        number = temp;
        totalSum += digit ** 2;
    }
    return totalSum;
}

function isHappyNumber(n){
    let slow = n
    let fast = sumDigits(n)

    while(fast !== 1 && slow !== fast) {
        console.log({fast}, {slow})
        slow = sumDigits(slow)
        fast = sumDigits(sumDigits(fast))
    }
    console.log({fast}, {slow})

    if (fast === 1 ) return true
    return false
}

const case1 = 2147483646
const case2 = 1
const case3 = 19
const case4 = 8
const case5 = 7 // true

console.log(isHappyNumber(case4))