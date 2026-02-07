function evenOdd(number) {
  if (number % 2 == 0) {
    return number / 2;
  } else {
    return number * 2;
  }
}

const result = evenOdd(117);

console.log("Result:", result);
