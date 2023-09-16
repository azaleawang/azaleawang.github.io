function twoSum(nums, target) {
  const dic = {};
  for (let i = 0; i < nums.length; i++) {
    let complm = target - nums[i];
    if (complm in dic) {
      return [dic[complm], i];
    }
    dic[nums[i]] = i; // store num as key, index as value in dictionary
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 8)); // return [0, 1]
