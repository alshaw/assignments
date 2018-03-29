const multiD1 = [[true, false, true], ["a", "b", "c"]];

function checkTypes(arr) {
  return arr.every(subArr =>
    subArr.every(value =>
      typeof(value) === typeof(arr[0][0])
    )
  )
}

console.log(checkTypes(multiD1));


const checkDataTypesEvery = arr => 
  arr.every(subArr => 
    subArr.every(item => 
      typeof item === typeof arr[0][0]
    )
  );

  console.log(checkDataTypesEvery(multiD1));