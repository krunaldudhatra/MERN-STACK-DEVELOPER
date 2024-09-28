/** Break Vs Continue */

const inputs = [
  11,
  32,
  12,
  45,
  65,
  94,
  7,
  78,
  10,
  100,
  131,
  67,
  81,
  92,
  53,
];
const evenNumbers = [];

for (let i of inputs) {
  if (i % 2 !== 0) {
    continue;
  }
  evenNumbers.push(i);

  if (evenNumbers.length === 5) {
    break;
  }

  console.log(evenNumbers);
}
console.log(evenNumbers);
