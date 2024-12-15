function main() {
    const array = [2, 4, 6, 2, 7, 8];
    //Write your code here.
    //Create your higher order functiomn here with the name customMap with takes two parameter array and a callback function.
    function customMap(array,fn)
    {
        let out = [];
        for(let i of array)
            {
                out.push(fn(i));
            }
        return out;
    }
    function fn(num)
    {
        return num*num;
    }
    //The function should return an array
    //Do not modify any other code.
    return customMap;
  }
  