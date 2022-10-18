const triplet_sum_close_to_target = function (arr, target_sum) {
    arr.sort((a, b) => a - b)

    console.log(arr)

    let closestSum = Number.MAX_SAFE_INTEGER
    let currentSum = 0

    const addTwoPointers = (arr, iterate, left) => {
        let right = arr.length - 1
        currentSum = arr[iterate] + arr[left] + arr[right]
        // closestSum = currentSum

        while (left < right) {
            currentSum = arr[iterate] + arr[left] + arr[right]
            if (currentSum === target_sum) {
                closestSum = currentSum
                break
            }
            if (currentSum < target_sum) {
                left++
            } else {
                right--
            }
            if (Math.abs(target_sum - currentSum) < Math.abs(target_sum - closestSum)) {
                closestSum = currentSum
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        addTwoPointers(arr, i, i + 1)
        console.log({ closestSum })
    }
    return closestSum

};

const arr1 = [-2, 0, 1, 2]
const arr2 = [-3, -1, 1, 2]
const arr3 = [1, 0, 1, 1]

// triplet_sum_close_to_target(arr1, 2)
// triplet_sum_close_to_target(arr2, 1)
triplet_sum_close_to_target(arr3, 100)