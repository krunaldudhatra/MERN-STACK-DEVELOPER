function sumOfArray(arr){
    
    let sum=0;
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i]%2==0 && 0!=arr[i]%5)
                {
                    sum+=arr[i]
                }
        }
    return sum;
        
      }
              