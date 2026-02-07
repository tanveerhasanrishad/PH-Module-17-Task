function count_zero(str) {
  let count = 0;
  for (let num of str) {
    if (num === "0") {
      count++;
    }
  }
  return count;
}

const str = "0101101110";

const result = count_zero(str);

console.log("Result:", result);
