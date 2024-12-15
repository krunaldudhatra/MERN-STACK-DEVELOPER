//Refactor the given impure function to pure function.
function removeVowels(obj) {
    let clone = {value : obj.value}
  clone.value = clone.value.replace(/[aeiou]/gi, "");
    return clone;
}

let strObj = { value: "Hello World" };
// For pure function
// newObj = removeVowels(strObj);
let ans = removeVowels(strObj);
console.log(ans.value);