function sumOfEvenNumbers(limit) {

    let result = 0;
    
    for(let i=0;i<=limit;i++)
        {
            if(i%2==0)
                {
                    result+=i;
                }
        }
    return result;
  }
  