// Import required module
const readline = require("readline");
const Solution = () => {
  // Write your code here
  const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  r.question('Enter the first number: ',(num1)=>{
    r.question('Enter the second number: ',(num2)=>{
      const ans = Number(num1)>Number(num2) ? Number(num1) : Number(num2);
      console.log(`The maximum of the two number is: ${ans}`);
    })
  })
};


Solution();
module.exports = Solution;
