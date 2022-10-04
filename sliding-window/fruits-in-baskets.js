const gatherFruits = (arr) => {
    const basket = {}
    let start = 0
    let maxFruit = 0

    for(let end = 0; end < arr.length; end++) {
        const fruit = arr[end]
        const numOfBaskets = Object.keys(basket).length

        while(fruit in basket === false && numOfBaskets === 2) {
            if(arr[start] in basket) {
                basket[arr[start]] = basket[arr[start]] - 1
            }
            if(basket[arr[start]] <= 0) {
                delete basket[arr[start]]
            }
            start++
            basket[fruit] = 0
        }
    
        if(!(fruit in basket)) {
          basket[fruit] = 0
        }
        basket[fruit] = basket[fruit] + 1

        maxFruit = Math.max(maxFruit, (end - start + 1))
      }
    
      console.log({maxFruit})
      console.log(basket)
      return maxFruit
}

const fruit1=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
gatherFruits(fruit1)