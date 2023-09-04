function count(input) {
    // your code here
    // return an object which shows the count of each character
    let dict = {}
    for (const key of input) {
        dict[key] = (dict[key] || 0) + 1;
    }

    return dict;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
    // your code here
    // return an object which shows the summed-up value of each key
    let dict = {}
    for (const entry of input) {
        dict[entry.key] = (dict[entry.key] || 0) + entry.value
    }
    return dict;
}
let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}