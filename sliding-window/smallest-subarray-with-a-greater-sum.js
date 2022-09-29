/*
The time complexity of the above algorithm will be O(N)O(N)O(N). 
The outer for loop runs for all elements, 
and the inner while loop processes each element only once; 
therefore, the time complexity of the algorithm will be O(N+N)O(N+N)O(N+N), 
which is asymptotically equivalent to O(N)O(N)O(N).
*/

const smallest_subarray_sum = function (s, arr) {

    let currentTotal = 0
    let storage = []
    let start = 0
    let minLength = Number.MAX_SAFE_INTEGER

    for (let end = 0; end < arr.length; end++) {
        currentTotal += arr[end]
        storage.push(arr[end])

        while (currentTotal >= s) {
            console.log({ storage })
            minLength = Math.min(minLength, storage.length)
            currentTotal -= arr[start]
            storage.shift()
            start = start + 1
        }
    }
    console.log({ minLength })
    return minLength
};

arr1 = [2, 1, 5, 2, 3, 2]
arr2 = [2, 1, 5, 2, 8]

smallest_subarray_sum(7, arr2)