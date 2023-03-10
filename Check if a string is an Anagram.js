let s = "anagram";
let t = "nagaram";
function checkAnagram(s1, s2) {
  let t1 = s1.split("").sort().join("");
  let t2 = s2.split("").sort().join("");

  if (t1 === t2) {
    return "angram";
  }
  return "not angram";
}
console.log("@SN ", checkAnagram(s, t));
