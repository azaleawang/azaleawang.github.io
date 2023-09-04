function binarySearchPosition(numbers, target) {
    // your code here
    const N = numbers.length;
    let index = Math.round(N / 2) - 1;
    while (target !== numbers[index]) {

        // compare to the middle index
        if (target > numbers[index]) {
            index += Math.round((N - index) / 2);
        } else {
            index = Math.round(index / 2) - 1;
        }
        if (index >= N || index <= -1) return "Not found"
    }
    return index;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3