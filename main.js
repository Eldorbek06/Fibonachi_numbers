let fibonachi = [0, 1]
``
let stop = +prompt('Any number:')

for (let i = 0; i <= stop; i++) {
    let fibonachi2 = fibonachi[i] + fibonachi[i + 1]
    fibonachi.push(fibonachi2)
}

console.log(fibonachi);