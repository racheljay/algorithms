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

/*
    Official Course solution
    (both solutions are O(N^2))
*/

function triplet_sum_close_to_target(arr, targetSum) {
    arr.sort((a, b) => a - b);
    let smallest_difference = Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
      let left = i + 1,
        right = arr.length - 1;
      while (left < right) {
        const target_diff = targetSum - arr[i] - arr[left] - arr[right];
        if (target_diff === 0) { // we've found a triplet with an exact sum
          return targetSum - target_diff; // return sum of all the numbers
        }
  
        if (Math.abs(target_diff) < Math.abs(smallest_difference)) {
          smallest_difference = target_diff; // save the closest difference
        }
        // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
        if (Math.abs(target_diff) < Math.abs(smallest_difference) ||
          (Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
          smallest_difference = target_diff; // save the closest and the biggest difference
        }
  
  
        if (target_diff > 0) {
          left += 1; // we need a triplet with a bigger sum
        } else {
          right -= 1; // we need a triplet with a smaller sum
        }
      }
    }
    return targetSum - smallest_difference;
  }
  
  
  console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
  console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
  console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));