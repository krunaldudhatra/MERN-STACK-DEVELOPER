function commonDigits(num1 , num2)
{
    let max=(num1>num2? num1:num2);
    let min= ( max==num1? num2: num1);
    
     if( (max/min )>10)
         {
             return false;
         }
    return true;
}