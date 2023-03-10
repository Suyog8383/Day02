let a = 5,
  b = 6;
function swapping(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return { a, b };
}
console.log("@SN ", swapping(a, b));
