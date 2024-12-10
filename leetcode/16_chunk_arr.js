function chunk(arr, size) {
  const resArr = [];
  for (let i = 0; i < arr.length; i += size) {
    const tempArr = [...arr];
    resArr.push(tempArr.slice(i, i + size));
  }

  return resArr;
}

console.log(chunk([1, 2, 4, 5, 6, 7, 6, 8], 2));
