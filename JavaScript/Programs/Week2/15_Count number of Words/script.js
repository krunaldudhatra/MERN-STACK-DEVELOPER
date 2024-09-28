function countWords(str) {
    let count = 0;
    str = str.trim();
    
    // let arr = [...str.split(" ")];
    let arr = str.split(" ");
    
    
    count = arr.length;
   
    
    return count;
  }