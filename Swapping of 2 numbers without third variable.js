let a = 5,
  b = 6;
function swapping(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return { a, b };
}
console.log("@SN ", swapping(a, b));
