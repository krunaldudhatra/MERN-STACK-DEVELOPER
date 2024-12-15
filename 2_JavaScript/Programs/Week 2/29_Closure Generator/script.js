function generateID(stvalue){
//Implement Your function here
    let id=stvalue;
    return function closure(){
      return "A_2023_"+(id++);  
    }
}
