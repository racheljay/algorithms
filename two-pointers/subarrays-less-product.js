const find_subarrays = function (arr, target) {
    const solution = []

    const getProduct = (array, start, end) => {
        let total = array[start]
        start++
        while (start <= end) {
            console.log(array[start])
            total = total * array[start]
            start++
        }
        return total
    }

    for (let start = 0; start < arr.length; start++) {
        let right = start
        let product = getProduct(arr, start, right)
        solution.push([product])

        while (product < target) {
                right++
                product = getProduct(arr, start, right)
                if(product < target) {
                    solution.push(arr.slice(start, right + 1))
                }
        }
    }

    console.log(solution)
    return solution
};

const arr1 = [2, 5, 3, 10]
const arr2 = [8, 2, 6, 5]

// find_subarrays(arr1, 30)
find_subarrays(arr2, 50)