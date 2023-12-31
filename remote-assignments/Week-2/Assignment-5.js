
function binarySearchPosition(numbers, target) {
  let left = 0;
  let right = numbers.length - 1; // last index

  while (left <= right) {
    const midIdx = Math.floor((left + right) / 2);
    
    if (numbers[midIdx] === target) {
      return midIdx; // Target found
    } else if (target < numbers[midIdx]) {
      // go left
      right = midIdx - 1;
    } else {
      // go right
      left = midIdx + 1;
    }
  }

  return -1; // not found
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7, 9, 10, 13, 15, 20], 10)); // should print 6
