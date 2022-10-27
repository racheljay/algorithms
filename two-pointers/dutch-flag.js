const dutch_flag_sort = function (arr) {
    let end = arr.length - 1
    let i = 0

    while (i < end) {

        while (arr[end] === 2) {
            end--
        }

        if (arr[i] > arr[end]) {
            const oldStart = arr[i]
            arr[i] = arr[end]
            arr[end] = oldStart
        }

        if (arr[i + 1] >= arr[i]) {
            i++
        }
    }

    console.log(arr)
    return arr
};

const arr1 = [1, 0, 2, 1, 0]
const arr2 = [2, 2, 0, 1, 2, 0]

dutch_flag_sort(arr1)
dutch_flag_sort(arr2)