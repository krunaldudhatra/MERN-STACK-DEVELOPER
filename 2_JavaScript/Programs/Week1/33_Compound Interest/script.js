function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
  let answer = principalAmount;
  
  for (let year = 1; year <= numberOfYears; year++) {
    answer = answer * (1 + annualInterestRate);
  }
  
  return answer;
}

// Sample Input
let principalAmount = 500;
let annualInterestRate = 0.08;
let numberOfYears = 5;

console.log(compoundInterest(principalAmount, annualInterestRate, numberOfYears));
