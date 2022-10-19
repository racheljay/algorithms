const triplet_with_smaller_sum = function (arr, target) {
    arr.sort((a, b) => a - b)

    console.log(arr)
    let match = 0

    for (let i = 0; i < arr.length; i++) {
        let left = i + 1
        let right = left + 1

        let sum = arr[i] + arr[left] + arr[right]

        while (sum < target) {
            console.log(arr[left], arr[right])
            right++
            match++
            sum = arr[i] + arr[left] + arr[right]
            if (right === arr.length - 1 && sum < target) {
                console.log("inside if", arr[left], arr[right])
                left++
                right = left + 1
                match++
                sum = arr[i] + arr[left] + arr[right]
            }
        }

    }
    console.log(match)
    return match
};

const arr1 = [-1, 0, 2, 3]
const arr2 = [-1, 4, 2, 1, 3]

// triplet_with_smaller_sum(arr1, 3)
triplet_with_smaller_sum(arr2, 5)

/*
    class solution
*/

function triplet_with_smaller_sum(arr, target) {
    arr.sort((a, b) => a - b);
    let count = 0;
    for (i = 0; i < arr.length - 2; i++) {
        count += search_pair(arr, target - arr[i], i);
    }
    return count;
}


function search_pair(arr, target_sum, first) {
    let count = 0;
    let left = first + 1,
        right = arr.length - 1;
    while (left < right) {
        if (arr[left] + arr[right] < target_sum) { // found the triplet
            // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
            // left and right to get a sum less than the target sum
            count += right - left;
            left += 1;
        } else {
            right -= 1; // we need a pair with a smaller sum
        }
    }
    return count;
}


console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));