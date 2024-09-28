//Complete the findDuplicate function
// Do not alter the starter code.

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){
  const duplicate=[]
    for(let i=0;i<arr.length;i++)
        {
            for(let j=i+1;j<arr.length;j++)
                {
                    if(arr[i]==arr[j]  && !duplicate.includes(arr[i]) )
                        {
                          duplicate.push(arr[i])  
                        }
                }
        }
    
    return duplicate;

}    
console.log(findDuplicate(arr));