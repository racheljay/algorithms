const backspace_compare = function (str1, str2) {

    let i = str1.length - 1
    let j = str2.length - 1
    let firstHash = 0
    let secondHash = 0


    while (i > 0 && j > 0) {
        if (str1[i] === str2[j] && firstHash === 0 && secondHash === 0) {
            i--
            j--
        } else if (str1[i] === "#") {
            firstHash++
            i--
        } else if (str2[j] === "#") {
            secondHash++
            j--
        } else if (str1[i] !== "#" && firstHash > 0) {
            i--
            firstHash--
        } else if (str2[j] !== "#" && secondHash > 0) {
            j--
            secondHash--
        } else if (firstHash === 0 && secondHash === 0 && str1[i] !== str2[j]) {
            console.log("false")
            return false
        }
    }
    console.log("true")
    return true

    // return the cleaned up string
    // const removeExtras = (str) => {
    //     let poundCount = 0
    //     let remainder = [] 
    //     for (let i = str.length - 1; i >= 0; i--) {
    //         let char = str[i]

    //         if(char === "#") {
    //             poundCount++
    //         }
    //         if(char !== "#" && poundCount > 0) {
    //             poundCount--
    //             continue
    //         }
    //         if(poundCount === 0 && char !== "#") {
    //             remainder.push(char)
    //         }
    //     }
    //     // console.log({remainder})
    //     return remainder.join("")
    // }

    // const first = removeExtras(str1)
    // const second = removeExtras(str2)
    // console.log(first === second)
    // return first === second
};

// backspace_compare("xy#z", "xzz#") // should return true
backspace_compare("xy#z", "xyz#") // should return false
