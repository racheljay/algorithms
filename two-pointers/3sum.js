function findSumOfThree(nums, target) {
    nums.sort((a, b) => a - b)

    let i = 0;
    
    while (i <= nums.length - 3) {
        let left = i + 1;
        let right = nums.length - 1;
        console.log(nums[i], nums[left], nums[right])
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === target) {
                return true;
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
        i++
    }
    return false;
}

const case1 = [1, -1, 0]
const case2 = [3, 7, 1, 2, 8, 4, 5]
const case3 = [3, 7, 1, 2, 8, 4, 5]
const case4 = [3, 7, 1, 2, 8, 4, 5]
const case5 = [-1, 2, 1, -4, 5, -3]
const case6 = [-1, 2, 1, -4, 5, -3]
const case7 = [-1, 2, 1, -4, 5, -3]

const happyTest = (arr, num) => {
    if (findSumOfThree(arr, num) === true) {
        console.log(`Correct: ${arr} has three numbers that add up to ${num}`);
    } else {
        throw new Error(`${arr} = ${num} -> Expected ${true} got ${findSumOfThree(arr, num)}`);
    }
}

const sadTest = (arr, num) => {
    if (findSumOfThree(arr, num) === false) {
        console.log(`Correct: ${arr} DOES NOT have three numbers that add up to ${num}`);
    } else {
        throw new Error(`${arr} = ${num} -> Expected ${false} got ${findSumOfThree(arr, num)}`);
    }
}

sadTest(case1, -1);
happyTest(case2, 10);
happyTest(case3, 20);
sadTest(case4, 21);
happyTest(case5, -8);
happyTest(case6, 0);
sadTest(case7, 7);