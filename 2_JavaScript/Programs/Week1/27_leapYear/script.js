function leapYear(year) {
    let answer;
    if(year%4 == 0 || year%400==0)
        {
            if(year%100==0)
                {
                    answer=false;
                }
            else{
                answer=true;
            }
        }
    else{
        answer= false;
    }
   //Write your code here
return answer
}