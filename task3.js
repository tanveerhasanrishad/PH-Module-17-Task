function make_avg(arr, len) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / len;
}

const arr = [2, 4, 6, 8, 8, 2];
const length = arr.length;
const result = make_avg(arr, length);

console.log("Result:", result);
