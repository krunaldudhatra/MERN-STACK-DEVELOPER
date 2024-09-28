/** Iterations - For Loop */
// print a message 10 times

// for (let i = 1; i <= 5; i++) {
//   console.log('Falak');
// }

// print a series of number from 1 - 20
// let i;
// for (i = 1; i <= 20; i++) {
//   console.log(i);
// }

// print all the even numbers between 1 - 50
// let i = 2;
// for (; i <= 50; ) {
//   console.log(i);
//   i += 2;
// }

// prime or not
let num = 7;
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log('Prime');
} else {
  console.log('Not Prime');
}
