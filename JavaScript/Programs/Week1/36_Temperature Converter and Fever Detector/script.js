//Write the program to convert tempF to into celcius and also to detect fever.
//Assign the final answer in result variable.
//Do not alter anything else given in the starter code

function main(tempF) {
  let result;
  let cel;
    cel = ((5/9)*(tempF - 32));
  // write your code here
   if(cel>=37)
       {
           result = `you have got a fever (${cel.toFixed(1)}C)`;
       }
    else
        {
            result = `you have got a fever (${cel.toFixed(1)}C)`;
        }
  return result;
}
