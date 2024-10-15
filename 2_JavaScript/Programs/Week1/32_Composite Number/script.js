function Composite(number) {
  let answer=false;
     if (number <= 1) {
        return false;
    }

    // Check if the number has any divisor other than 1 and itself
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return true;
        }
    }

 //Write your code here
return answer;
}