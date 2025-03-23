function sum(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}

const sumXResult = sum(2);
const sumYResult = sumXResult(4);
const sumZResult = sumYResult(6);
console.log(sumZResult);
