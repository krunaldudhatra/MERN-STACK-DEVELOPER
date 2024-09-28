let num = 10;
let str = 'String';
let bigNum = 10n;
let bool = true;

console.log(num.__proto__);
console.log(str.__proto__);
console.log(bigNum.__proto__);
console.log(bool.__proto__);

console.log(str.length);
console.log(str.indexOf("i"))
//In JavaScript, primitive types like string, number, and boolean are not objects. However, JavaScript automatically creates wrapper objects around these types to allow you to use methods and properties on them.