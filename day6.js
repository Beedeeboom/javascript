
function adder(x, y) {
    return new Promise((resolve, reject) => {
        let answer = x + y

        if (isNaN(answer)) {
            reject("Input must be a number")
        }

        resolve(answer)
    })
}

// Main
adder(2, 5)
    .then(data1 => {
        return adder(data1, 20) // The chained then will handle this Promise
    })
    .then(data2 => {
        console.log(data2)
    })
    .catch(err => {
        console.log(err)
    })

console.log("End of file")

