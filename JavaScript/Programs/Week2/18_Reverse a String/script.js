//complete the reverseString Function.
//Do not alter the starter Code.

function reverseString(str){
    //Implement Your function here
    let arr=[];
    arr=[...str.split("")];
    arr.reverse();
    str=arr.join("");
    return str;
    }
    console.log(reverseString("Hello"));
    //Output : "olleH"