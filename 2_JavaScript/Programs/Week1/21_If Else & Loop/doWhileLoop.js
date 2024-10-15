/** Do- While Loop */
//Guess the number

let randomNum = Math.round(Math.random() * 10);
console.log(randomNum);

let guessedNum;

do {
  guessedNum = prompt('Guess the Number: ');
  if (guessedNum == randomNum) {
    console.log('Guessed Correctly!!');
  } else {
    console.log('Take another guess');
  }
} while (guessedNum != randomNum);
