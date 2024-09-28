function sumOfFactor(num) {
    let answer = 0;
    for(let i=1;i<=num;i++)
        {
            if(num%i==0)
                {
                    answer+=i;
                }
        }

return answer;
}