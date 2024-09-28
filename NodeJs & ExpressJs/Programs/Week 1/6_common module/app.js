// Note:  Please do not change the pre-written code

// import the required module here

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    const {sum , mean} = require('./math');
    console.log(`The sum is ${sum(nums)}`);
    console.log(`The mean is ${mean(nums)}`);

};

Solution();
module.exports = Solution;
