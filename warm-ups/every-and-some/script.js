//EVERY
//check every item in the array against the callback
//bail as soon as one is false
//else return true


const every = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i])) return false;
  }
  return true;
}

console.log(every([1,3,5], num => num % 2));


//SOME
//check every item again
//bail as sooon as one is true
//return false

const some = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) return true;
  }
  return false;
}
console.log(some([2,4,6,1], num => num % 2));