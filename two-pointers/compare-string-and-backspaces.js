const backspace_compare = function (str1, str2) {
    
    // return the cleaned up string
    const removeExtras = (str) => {
        let poundCount = 0
        let remainder = [] 
        for (let i = str.length - 1; i >= 0; i--) {
            let char = str[i]

            if(char === "#") {
                poundCount++
            }
            if(char !== "#" && poundCount > 0) {
                poundCount--
                continue
            }
            if(poundCount === 0 && char !== "#") {
                remainder.push(char)
            }
        }
        // console.log({remainder})
        return remainder.join("")
    }

    const first = removeExtras(str1)
    const second = removeExtras(str2)
    console.log(first === second)
    return first === second
};

backspace_compare("xy#z","xzz#") // should return true
backspace_compare("xy#z","xyz#") // should return false
