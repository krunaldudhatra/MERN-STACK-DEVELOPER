//Write a program to determine the grade of the student
//Determine the grade and assign it to the result variable.
//Do not alter anything else given in the starter code

function main(marks) {
  let result;
  //write your code here
    if(marks>=90)
        result="A grade"
    else if(marks>=80 && marks<=89)
         result="B grade"
    else if(marks>=70 && marks<=79)
         result="C grade"
    else if(marks>=60 && marks<=69)     
          result="D grade"
    else  result="F grade"
         
  return result;
}
