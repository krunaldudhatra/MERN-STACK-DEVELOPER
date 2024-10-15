/** Nested Loops */
/* print multiplication Table of 4*/

// let num = 4;

for (let num = 2; num <= 10; num++) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
  console.log('*********');
}
