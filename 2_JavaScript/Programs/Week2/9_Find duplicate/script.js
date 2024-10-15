//Complete the findDuplicate function
// Do not alter the starter code.

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){
//Implement your function here
    var arrDup = [];
    for (var i in arr) {
    if (arr.indexOf(arr[i]) != i && arrDup.indexOf(arr[i]) == -1) {
    arrDup.push(arr[i]);
    }
    }
    return arrDup;
}    
console.log(findDuplicate(arr));