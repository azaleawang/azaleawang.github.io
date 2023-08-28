function countAandB(input) {
    // your code here
    return input.reduce(
        (count, e) => count + (['a', 'b'].includes(e.toLowerCase()) ? 1 : 0), 
        0)
}

function toNumber(input) {
    // your code here
    return input.map((e) => e.toLowerCase().charCodeAt() - 'a'.charCodeAt() + 1)
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]