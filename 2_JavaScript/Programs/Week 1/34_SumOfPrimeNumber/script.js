
function sumOfPrimeNumbers(limit) {
  let answer = 0;
    let c=0;
 //Write your code below
    
    for(let i=2;i<limit;i++){
        c=0;
        for(let j=2;j<i;j++)
            {
                if(i%j==0){
                    c=1;
                    break;
                }
            }
        if(c==0){
            answer+=i;
        }
        
    }
  return answer
}
