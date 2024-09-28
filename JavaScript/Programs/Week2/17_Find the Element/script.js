function findTheNumber(arr,ele) {
    let answer = -1;
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i]==ele)
                {
                    answer=i;
                }
        }
    return answer;
}