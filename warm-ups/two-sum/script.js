// take an array of integers and one target integer

// return the indices of the two numbers that add up to the target number


const twoSum = (arr, target) => {
  for (i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return "Not Found"
}

console.log(twoSum([4,4,4], 4));

// twoSum([1,2,3], 4);
// returns [0, 2] because 1 + 3 equals 4