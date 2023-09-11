// cannot use those built-in functions like Math.max() and Array.prototype.findIndex()

function max(numbers) {
  // your code here, for-loop method preferred
  // for-loop Solution
  let tmp;
  for (let i = 0; i < numbers.length; i++) {
    // cannot write !tmp for checking undefined becuz 0 is falsy
    if (tmp === undefined || numbers[i] > tmp) { 
      tmp = numbers[i];
    }
  }

  // for-each Solution
  // let tmp = numbers[0];
  // numbers.forEach(num => {
  //     tmp = num > tmp ? num : tmp ;
  // })

  return tmp;
}
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(max([0, -1, -2])); // should print 0

function findPosition(numbers, target) {
  // your code here, for-loop method preferred
  // for-loop Solution
  for (let index = 0; index < numbers.length; index++) {
    if (target === numbers[index]) {
      return index;
    }
  }
  return -1;

  // for-of Solution
  // for (const [i, value] of numbers.entries()) {
  //     if (target === value) return i;
  // }
  // return -1;
}
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1
