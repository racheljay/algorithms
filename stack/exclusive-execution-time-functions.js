class Log {
    constructor(content) {
        content = content.replace(" ", "");
        this.strs = content.split(":");
        this.id = parseInt(this.strs[0]);
        this.isStart = this.strs[1] == "start";
        this.time = parseInt(this.strs[2]);
    }
}

function exclusiveTime(n, events) {
    const resultArray = new Array(n).fill(0)

    const stack = []

    for (let i = 0; i < events.length; i++) {
        const log = events[i]
        const data = new Log(log)

        if (data.isStart) {
            stack.push(log)
        } else {
            // pop the stack
            let popped = stack.pop()
            let poppedData = new Log(popped)

            // find the diff between current and 
            let diff = data.time - poppedData.time + 1

            // place in the array
            resultArray[data.id] += diff
            // check for remainder in the stack
            
            if (stack.length > 0) {
                // take away the diff from the func that is still open
                let peeked = stack[stack.length - 1]
                console.log({peeked}, {log}, {popped})
                let peekedData = new Log(peeked)

                resultArray[peekedData.id] -= diff
                console.log({resultArray})
            }
        }
    }
    console.log({ resultArray })
    return resultArray
}

const case1 = ["0:start:0", "0:start:2", "0:end:5", "0:start:6", "0:end:6", "0:end:7"]
const case2 = ["0:start:0", "1:start:3", "1:end:6", "0:end:10"]
const case3 = ["0:start:0", "0:end:0", "1:start:1", "1:end:1", "2:start:2", "2:end:2", "2:start:3", "2:end:3"]
const case4 = ["0:start:0", "1:start:5", "1:end:9", "4:start:10", "2:start:13", "2:end:15", "3:start:16", "3:end:18", "4:end:21", "0:end:22"]
const case5 = ["0:start:0", "1:start:5", "2:start:8", "3:start:12", "4:start:15", "5:start:19", "5:end:22", "4:end:24", "3:end:27", "2:end:32", "1:end:35", "0:end:36"]

// exclusiveTime(1, case1) // [8]
// exclusiveTime(2, case2) // [7, 4]
// exclusiveTime(3, case3)
exclusiveTime(5, case4) // [6, 5, 3, 3, 6]