let num = 5;
function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}
console.log("@SN ", factorial(num));

// let num = 5;
// function factorial(num) {
//   return num === 0 ? 1 : num * factorial(num - 1);
// }
// console.log("@SN ", factorial(num));
