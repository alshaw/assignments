const isValidIP = str => {
  let arr = str.split(".").map(Number);
  console.log(arr);
  if (arr.length !== 4) return false;
  return arr.every(str => {
    let num = parseInt(str);
    if(str !== num.toString());
      return false;
    return (Number(str) > -1 && Number(str) < 256);
  })
}
console.log(isValidIP("045.0.0.0"));